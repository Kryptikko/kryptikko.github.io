// const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
// const pluginRss = require('@11ty/eleventy-plugin-rss');
const markdownIt = require('markdown-it');

module.exports = (eleventyConfig) => {
  // eleventyConfig.addPlugin(syntaxHighlight);
  // eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy('assets/favicon.ico');
  eleventyConfig.addPassthroughCopy('assets/fonts');
  const options = {
    html: true,
    breaks: true,
    linkify: false
  };
  eleventyConfig.setLibrary('md', markdownIt(options));

  return {
    dir: {
      input: "src",
      output: "dist"
    }
    // htmlTemplateEngine: 'liquid'
  };
};
