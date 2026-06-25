TODO

- [ ] les https://cloudcannon.com/documentation/developer-articles/create-a-schema/

```
collections_config:
  blog:
    schemas:
      customer_story:
        name: Customer Story
        path: .cloudcannon/schemas/customer-story.md
```

customer-story.md

```
---
title:
date:
company:
thumbnail:
---
Tell us about this customer...
```



- [ ] create 'edit' button. link to admin panelfor that particulat post
- [ ] responsive. mobile view
  - [ ] flytt detaljer boks ned, inn i dokumentflyten igjen
- [ ] rename date label til created date

## Serve

```bash
npm run dev
````
