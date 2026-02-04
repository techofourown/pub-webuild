# CLAUDE.md

This file provides guidance to Claude Code when working with the **We Build** publication series.

## What This Is

A **publication series repository** documenting hardware building processes, structured as a **GraphMD dataset**. This is narrative/editorial content about the journey of building hardware projects, not product documentation.

Key characteristics:
- **Content type**: Editorial articles about building processes, decisions, and techniques
- **Validation**: GraphMD dataset with metadata enforcement in CI
- **Organization**: Date-prefixed article directories for clear chronology
- **License**: CC BY 4.0 (educational/public content)

## Commands

```bash
npm ci                    # Install validator (deterministic)
npm test                  # Validate the entire GraphMD dataset
npm run validate:dataset  # Same as npm test
```

Node.js 20+ required.

## Repository Structure

```
pub-webuild/
├── README.md                    # Series overview (publication_series record)
├── CLAUDE.md                    # This file (AI guidance)
├── CHANGELOG.md                 # Publication history
├── LICENSE                      # CC BY 4.0 license text
├── package.json                 # GraphMD validator + commitlint
├── .commitlintrc.cjs            # Conventional commits config
├── .github/workflows/ci.yml     # GraphMD validation + commitlint
├── types/                       # GraphMD type definitions
│   ├── publication_series.md
│   ├── article.md
│   ├── adr.md
│   └── rfc.md
├── articles/                    # Published and draft articles
│   ├── 2025-02-intro/           # Published articles (date-prefixed)
│   │   ├── index.md            # Article with GraphMD frontmatter
│   │   └── assets/             # Images, diagrams
│   └── drafts/                 # Work-in-progress
│       └── example-article/
│           ├── index.md
│           └── assets/
├── docs/                       # Publication policy documentation
│   ├── README.md               # Documentation navigation
│   ├── decisions/              # Publication policy ADRs
│   │   └── 0000-template.md
│   └── rfcs/                   # Publication policy proposals
│       └── 0000-template.md
└── tools/                      # Validation tooling
    └── validate-dataset.cjs    # GraphMD validation script
```

## GraphMD Metadata

Every article is a GraphMD record with YAML frontmatter:

```yaml
---
typeId: article
recordId: webuild-2025-02-intro
parent: publication_series:webuild
fields:
  title: "Building Our First OurBox: Introduction"
  author: "Tech of Our Own"
  published: "2025-02-15"
  status: published
  series: "We Build"
  tags: [hardware, intro, ourbox]
  summary: "Introducing the We Build series and our first hardware project"
---
```

### Record ID Format

- **Articles**: `webuild-YYYY-MM-slug` (e.g., `webuild-2025-02-intro`)
  - **CRITICAL**: No dots in IDs (GraphMD requirement: `^[A-Za-z0-9][A-Za-z0-9_-]*$`)
- **ADRs**: Frontmatter uses `typeId: adr`, `recordId: webuild-adr-0001-descriptive-slug`
- **RFCs**: Frontmatter uses `typeId: rfc`, `recordId: webuild-rfc-0001-descriptive-slug`

### Required Fields

See type definitions in `types/` for full field requirements:

- **article**: title, author, status, summary (published/updated optional)
- **adr**: status, title
- **rfc**: status, title
- **publication_series**: name, description, status

### Cross-References

Use wikilink syntax: `[[article:webuild-2025-02-intro]]` or `[[publication_series:webuild]]`. The validator checks that all references resolve.

## Article Lifecycle

1. **Draft**: Create in `articles/drafts/descriptive-slug/`
   - `index.md` with frontmatter: `status: draft`, no `published` field
   - Add assets to `assets/` subdirectory

2. **Review**: Update frontmatter with review status if needed
   - Keep in `drafts/` until ready to publish

3. **Publish**: Move to date-prefixed directory
   - Rename `drafts/descriptive-slug/` → `YYYY-MM-slug/` (e.g., `2025-02-intro/`)
   - Update frontmatter: `status: published`, `published: "YYYY-MM-DD"`
   - Update `recordId` to match: `webuild-YYYY-MM-slug`
   - Add entry to README.md "Published Articles" section
   - Update CHANGELOG.md

4. **Archive**: Update frontmatter
   - Change `status: archived` (keep in place)

## Commit Message Rules

Conventional Commits enforced via commitlint:

- **Type prefix required**: `feat`, `fix`, `docs`, `chore`, etc.
- **Body required** (blank line after header, then explanation)
- **Header max 100 chars**, body lines max 100 chars
- **No Co-Authored-By trailers** — single authorship principle
- **No AI attribution** — no mentions of Claude, ChatGPT, Copilot, "Generated with", etc.
- **No email addresses** — use `@username` or issue `#123` instead

Examples:
```
feat: add workshop setup article

Added first article covering workspace organization and tool selection
for hardware building projects.
```

```
docs: update article metadata schema

Extended article type to include optional 'updated' field for tracking
content revisions after initial publication.
```

## Naming Conventions

- **Article directories**: `YYYY-MM-descriptive-slug/` (e.g., `2025-02-intro/`)
- **Record IDs**: `webuild-YYYY-MM-slug` (e.g., `webuild-2025-02-intro`)
  - No dots allowed (GraphMD requirement)
- **ADRs**: `ADR-0001-descriptive-slug.md` (zero-padded)
- **RFCs**: `RFC-0001-descriptive-slug.md` (zero-padded)

## CI Pipeline

On every push/PR:
1. **Preflight check**: Verify lockfile exists and is current with latest validator
2. **Install**: `npm ci` (deterministic)
3. **Validate**: `npm test` (GraphMD validation)
4. **Commitlint**: Check commit message format

The validator loads from: `types/`, `articles/`, `docs/`, and root `README.md`.

## Publication vs Product Documentation

**This repository (We Build)** is about the **journey** of building:
- Process narratives
- Decision-making stories
- Technique explanations
- Learning reflections

**Product documentation (e.g., pf-ourbox)** is about the **result**:
- Technical specifications
- Bills of Materials
- Assembly instructions
- System requirements

Both use GraphMD for metadata management, but serve different purposes.

## License

CC BY 4.0 — Educational/public content with attribution requirement.

Share and adapt freely with proper credit to "Tech of Our Own".
