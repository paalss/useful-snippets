const elasticlunr = require("elasticlunr")

module.exports = function (collection) {
  // what fields wed like to our index to consist of
  const index = elasticlunr(function () {
    this.addField("title")
    this.addField("ranking")
    this.addField("tags")
    this.setRef("id")
  })

  // loop throuhg each page and add it to the indx

  collection.forEach((page) => {
    index.addDoc({
      id: page.url,
      title: page.template.frontMatter.data.title,
      ranking: page.template.frontMatter.data.ranking,
      tags: page.template.frontMatter.data.tags
    })
  })

  return index.toJSON();
}