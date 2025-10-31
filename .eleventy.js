const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const searchFilter = require("./filters/searchFilter")

module.exports = function(config) {
  config.addPassthroughCopy("bundle.css");
  config.addPassthroughCopy("images");
  config.addPlugin(syntaxHighlight);

  config.addFilter("search", searchFilter)
  config.addCollection("posts", collection => {
    return [...collection.getFilteredByGlob("./posts/*.md")]
  })

  // Enable us to iterate over all the tags, excluding 'posts' and 'all'
  config.addCollection('tagList', collection => {
    const tagsSet = new Set()
    collection.getAll().forEach(item => {
      if (!item.data.tags) return
      item.data.tags
        .filter(tag => !['posts', 'all'].includes(tag))
        .forEach(tag => tagsSet.add(tag))
    })
    return Array.from(tagsSet).sort()
  })
};

