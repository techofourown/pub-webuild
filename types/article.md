---
typeId: article
fields:
  fieldDefs:
    title:
      required: true
    author:
      required: true
    published:
      required: false
    updated:
      required: false
    status:
      required: true
    series:
      required: false
    tags:
      required: false
    summary:
      required: true
---

# Article Type

Metadata type for article records.

## Fields

- **title** (required): The article title
- **author** (required): The article author
- **published** (optional): Publication date (format: YYYY-MM-DD). Absent means draft.
- **updated** (optional): Last update date (format: YYYY-MM-DD)
- **status** (required): Article status (`draft`, `published`, or `archived`)
- **series** (optional): Which publication series this article belongs to
- **tags** (optional): Array of topic tags for categorization
- **summary** (required): One-line description of the article
