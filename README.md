---
typeId: publication_series
recordId: webuild
fields:
  name: "We Build"
  description: "A publication series documenting the process, decisions, and techniques involved in building hardware projects"
  status: active
  started: "2025-02"
---

# We Build

**A publication series about hardware building**, documenting the process, decisions, and techniques we use to create physical things.

## What This Is

**We Build** is narrative/editorial content about the journey of building hardware projects. Unlike product documentation (specifications, BOMs, assembly instructions), this series focuses on:

- **Process**: How we approached problems and made progress
- **Decisions**: Why we chose specific components, techniques, or approaches
- **Techniques**: Methods and workflows we developed or refined
- **Learning**: What worked, what didn't, and what we'd do differently

This repository is structured as a **GraphMD dataset** for metadata management while maintaining author-friendly organization.

## Published Articles

_(No published articles yet)_

## Draft Articles

- [Example Article: Setting Up Your Workshop](articles/drafts/example-article/index.md) — A sample article demonstrating the publication format

## Repository Structure

```
pub-webuild/
├── articles/           # Published and draft articles
│   ├── YYYY-MM-slug/   # Published articles (date-prefixed)
│   └── drafts/         # Work-in-progress articles
├── types/              # GraphMD type definitions
├── docs/               # Publication policy documentation
│   ├── decisions/      # ADRs (Architectural Decision Records)
│   └── rfcs/          # RFCs (Request for Comments)
└── tools/              # Validation tooling
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Commands

```bash
npm ci              # Install dependencies (deterministic)
npm test            # Validate GraphMD dataset
```

## Contributing

This publication series follows:

- **Conventional Commits** for commit messages (enforced via commitlint)
- **GraphMD dataset validation** in CI (all articles have proper metadata)
- **Single authorship principle** (no Co-Authored-By or external attribution)

See [CLAUDE.md](CLAUDE.md) for detailed guidance on publication workflows.

## Navigation

- [Documentation Index](docs/README.md) — Policy ADRs and RFCs
- [CHANGELOG](CHANGELOG.md) — Publication history
- [LICENSE](LICENSE) — CC BY 4.0

## License

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>

This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

You are free to share and adapt this content with attribution.
