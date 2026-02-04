---
typeId: publication_series
fields:
  fieldDefs:
    name:
      required: true
    description:
      required: true
    status:
      required: true
    started:
      required: false
---

# Publication Series Type

Metadata type for publication series records.

## Fields

- **name** (required): The name of the publication series
- **description** (required): A description of the series purpose and scope
- **status** (required): Current status of the series (`active`, `paused`, or `completed`)
- **started** (optional): Date the series began (format: YYYY-MM-DD)
