---
title: eleventyjs stuff
---

# Eleventy JS stuff

- glitch has web editor for markdown with preview

Return specific post

```js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addCollection("post", function (collection) {
    const coll = collection.getFilteredByTag("post");
    console.log(coll);
    return [coll[20]];
  });
};
```

Return first 5 posts
```js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addCollection("post", function (collection) {
    const coll = collection.getFilteredByTag("post");
    console.log(coll);
    return coll.slice(0, 5);
  });
};
```
