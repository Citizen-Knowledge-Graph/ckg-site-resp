module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  // Default path for local development
  let rootPath = "/";

  // If environment is production, change the path
  if(process.env.ELEVENTY_ENV === "production") {
    rootPath = "/ckg-site-resp/";
  }

  // Pass the stylesheet path to your templates
  eleventyConfig.addShortcode("rootPath", function() {
    return rootPath;
  });

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "_site",
      include: "includes",
    },
  };gi
};
