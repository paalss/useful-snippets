---
title: graphql fetch using multiple IDs
date: 2023-11-05
ranking: 2
tags:
- graphql
---

fetch all related products from a list of products, and get results merged into one response!


```js
const GET_RELATED_PRODUCTS = `
    query getRelatedProducts($url: [String!]) {
        products(filter: { url: { in: $url } }) {
            items {

            }
        }
    }
`

```

fetching just one product's related products
```js
const GET_RELATED_PRODUCTS = `
    query getRelatedProducts($url: String!) {
        products(filter: { url: { eq: $url } }) {
            items {

            }
        }
    }
`

```
