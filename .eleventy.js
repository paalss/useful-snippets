module.exports = function (eleventyConfig) {
  // eleventyConfig.addPassthroughCopy({ "./public/": "/" });
  eleventyConfig.addPassthroughCopy("bundle.css");
  // eleventyConfig.addPassthroughCopy("css/global.css");

  return {
    templateFormats: ["css"],
    passthroughFileCopy: true,
  };
};
