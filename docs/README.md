# Documentation

This directory contains publication policy documentation for the **We Build** series.

## Contents

- **[decisions/](decisions/)** — ADRs (Architectural Decision Records) documenting publication policies and content decisions
- **[rfcs/](rfcs/)** — RFCs (Request for Comments) proposing new policies or significant changes

## Using ADRs and RFCs

### ADRs (Architectural Decision Records)

Use ADRs to document:
- Publication metadata schema decisions
- Content structure and organization policies
- Workflow and process decisions
- Licensing and attribution policies

Format: `ADR-NNNN-descriptive-slug.md` (zero-padded number)

Template: [decisions/0000-template.md](decisions/0000-template.md)

### RFCs (Request for Comments)

Use RFCs to propose:
- Changes to publication metadata schemas
- New article formats or content types
- Workflow or process improvements
- Policy changes requiring discussion

Format: `RFC-NNNN-descriptive-slug.md` (zero-padded number)

Template: [rfcs/0000-template.md](rfcs/0000-template.md)

## Workflow

1. **Proposal**: Create RFC in `rfcs/` with status `Draft`
2. **Discussion**: Update RFC status to `Discussion`, gather feedback
3. **Decision**: Create ADR in `decisions/` when decision is made
4. **Implementation**: Apply the decision to repository structure/workflow
5. **Update RFC**: Mark RFC as `Accepted` and reference the ADR

## GraphMD Metadata

Both ADRs and RFCs are GraphMD records with frontmatter:

```yaml
---
typeId: adr  # or 'rfc'
recordId: webuild-adr-0001-example
parent: publication_series:webuild
fields:
  status: Accepted
  title: "Example Decision Title"
  created: "2025-02-03"
---
```

See type definitions in `../types/` for required fields.
