module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  // ! AAAA kan ikke referes til i index.html. Da blir det circular reference??
  eleventyConfig.addCollection("AAAA", (collection) => {
    return collection.getAll();
  });
  // eleventyConfig.addCollection("post", function(collectionApi) {
  //   // console.log(111, collectionApi.isSortAscending); // dette logges i node
  //   // console.log(111, collectionApi.isSortAscending); // dette logges i node
  //   // const editedCollection = {
  //   //   ...collectionApi,
  //   //   isSortAscending: false,
  //   //   isSortNumeric: true,
  //   // };
  //   // console.log(222, editedCollection)
  //   return collectionApi.getAll();
  // })
  // eleventyConfig.addCollection("post", function(collectionApi) {
  //   return collectionApi.getAll();
  // })
};
