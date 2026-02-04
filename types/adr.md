---
typeId: adr
fields:
  fieldDefs:
    status:
      required: true
    title:
      required: true
    created:
      required: false
---

# ADR (Architectural Decision Record) Type

Metadata type for publication policy decision records.

## Fields

- **status** (required): Decision status (`Proposed`, `Accepted`, `Deprecated`, or `Superseded by [ADR-YYYY]`)
- **title** (required): The decision title
- **created** (optional): Date the ADR was created (format: YYYY-MM-DD)
