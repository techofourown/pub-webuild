/* eslint-disable no-console */
const fs = require("node:fs");
const path = require("node:path");

const { validateDatasetSnapshot } = require("@graphmd/dataset");

const ROOT = path.resolve(__dirname, "..");

// Custom dataset surface area:
// - types/     (GraphMD type objects)
// - articles/  (publication articles with GraphMD frontmatter)
// - docs/      (ADRs and RFCs with GraphMD frontmatter)
const DATASET_DIRS = ["types", "articles", "docs"];

// Never ingest these.
const SKIP_DIRS = new Set([".git", "node_modules"]);

// For articles/: only ingest .md files to avoid binary assets in assets/ subdirectories.
// For docs/: only ingest .md files (ADRs and RFCs).
// For types/: only ingest .md files.
function shouldInclude(relPath) {
  const rel = relPath.replaceAll("\\", "/");

  // Only include .md files from our dataset directories
  return rel.endsWith(".md");
}

function walk(absDir, relDir, files) {
  const entries = fs.readdirSync(absDir, { withFileTypes: true });
  for (const e of entries) {
    if (SKIP_DIRS.has(e.name)) continue;

    const abs = path.join(absDir, e.name);
    const rel = path.posix.join(relDir, e.name);

    if (e.isDirectory()) {
      walk(abs, rel, files);
    } else if (e.isFile()) {
      if (!shouldInclude(rel)) continue;
      files.set(rel, fs.readFileSync(abs));
    }
  }
}

function loadSnapshot(root) {
  const files = new Map();

  // Include root README.md (publication_series record)
  const rootReadme = path.join(root, "README.md");
  if (fs.existsSync(rootReadme)) {
    files.set("README.md", fs.readFileSync(rootReadme));
  }

  for (const dir of DATASET_DIRS) {
    const abs = path.join(root, dir);
    if (!fs.existsSync(abs)) continue;
    walk(abs, dir, files);
  }

  return { files };
}

function main() {
  const snapshot = loadSnapshot(ROOT);

  console.log(
    `GraphMD dataset validation: loaded ${snapshot.files.size} files from README.md + ${DATASET_DIRS.join(
      ", "
    )}`
  );

  const result = validateDatasetSnapshot(snapshot);

  if (!result || result.ok !== true) {
    console.error("❌ DATASET INVALID (GraphMD validator)");
    console.error(JSON.stringify(result, null, 2));
    process.exit(1);
  }

  console.log("✅ DATASET VALID (GraphMD validator)");
}

main();
