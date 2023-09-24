---
title: eleventy stuff
---

# Eleventy stuff

- <https://glitch-hello-eleventy.glitch.me/> glitch has web editor for markdown with preview
  - <https://glitch.com/edit/#!/classy-zesty-bird?path=README.md%3A1%3A0> 
-  <https://github.com/kohrongying/11ty-blog-starter> has a `create` bash script

## eleventy.js

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
