---
typeId: rfc
fields:
  fieldDefs:
    status:
      required: true
    title:
      required: true
    created:
      required: false
    updated:
      required: false
---

# RFC (Request for Comments) Type

Metadata type for publication policy proposal records.

## Fields

- **status** (required): Proposal status (`Draft`, `Discussion`, `Accepted`, `Rejected`, or `Withdrawn`)
- **title** (required): The RFC title
- **created** (optional): Date the RFC was created (format: YYYY-MM-DD)
- **updated** (optional): Date the RFC was last updated (format: YYYY-MM-DD)
