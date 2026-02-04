---
typeId: article
recordId: webuild-example
parent: publication_series:webuild
fields:
  title: "Example Article: Setting Up Your Workshop"
  author: "Tech of Our Own"
  status: draft
  summary: "A sample article demonstrating the publication format and structure"
  tags: [example, workshop, getting-started]
---

# Example Article: Setting Up Your Workshop

This is an example article demonstrating the structure and format for **We Build** publication series articles.

## Purpose

This example shows:
- **GraphMD frontmatter** format with required metadata
- **Article structure** with clear sections
- **Cross-references** to other records using wikilink syntax
- **Asset organization** in the `assets/` subdirectory

## About This Series

This article is part of the [[publication_series:webuild]] series, which documents hardware building processes, decisions, and techniques.

## Workshop Setup

Setting up a workspace for hardware building requires consideration of:

1. **Physical Space**
   - Adequate lighting for detailed work
   - Ventilation for soldering and chemical processes
   - Stable work surfaces

2. **Essential Tools**
   - Multimeter
   - Soldering iron and accessories
   - Basic hand tools
   - ESD protection

3. **Organization**
   - Component storage
   - Tool organization
   - Documentation system

## Example Image Reference

Images and diagrams go in the `assets/` subdirectory:

```markdown
![Workshop layout diagram](assets/workshop-layout.png)
```

## Next Steps

- Choose a well-ventilated area
- Acquire essential tools
- Set up component storage system
- Establish documentation workflow

## Related Content

_(Cross-references to other articles would go here once published)_

---

**Note**: This is a draft example article. When ready to publish:
1. Move to date-prefixed directory (e.g., `articles/2025-02-workshop-setup/`)
2. Update `recordId` to match: `webuild-2025-02-workshop-setup`
3. Update frontmatter: `status: published`, add `published: "YYYY-MM-DD"`
4. Add entry to README.md
5. Update CHANGELOG.md
