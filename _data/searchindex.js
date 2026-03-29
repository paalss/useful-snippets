// _data/searchIndex.js
module.exports = function (collections) {
  // Use collections.getAll() (or collections.all) to build an index.
  return collections.getAll().map(item => ({
    title: item.data?.title || item.fileSlug || "",
    url: item.url || "",
    // templateContent may be available; if not, use a snippet from data
    content: (item.templateContent || "").replace(/\s+/g, " ").trim()
  }));
};