import markdownItContainer from "markdown-it-container";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAttrs from "markdown-it-attrs";
import pluginRss from "@11ty/eleventy-plugin-rss"

export default function (eleventyConfig) {
	let options = {
		html: true,
		breaks: true,
		linkify: true,
	};

	//Input y Output
	eleventyConfig.setInputDirectory('src');
	eleventyConfig.setOutputDirectory('docs');
	// Set directories to pass through to the dist folder
	eleventyConfig.addPassthroughCopy('src/images');
	eleventyConfig.addPassthroughCopy('src/audio');
	eleventyConfig.addPassthroughCopy('src/css');
	eleventyConfig.addPassthroughCopy('src/fonts');
	eleventyConfig.addPassthroughCopy('src/js');
	eleventyConfig.addPassthroughCopy('src/styles.css');
	eleventyConfig.addPassthroughCopy('src/rss.xml');
	
	//Custom Blocks
	///block
	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItContainer, "block", {
		render(tokens, idx) {
		const token = tokens[idx];
		if (token.nesting === 1) {
			return `<div class="block">\n`;
		}
		return "</div>\n";
		},
	}));
	///code box
	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItContainer, "code", {
		render(tokens, idx) {
		const token = tokens[idx];
		if (token.nesting === 1) {
			return `<div class="code_box">\n`;
		}
		return "</div>\n";
		},
	}));
	//eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItAnchor))
	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItAttrs))
	eleventyConfig.addPlugin(pluginRss);

	// Colecciones
	// Blog
	eleventyConfig.addCollection('blog_en', (collection) => {
		return [...collection.getFilteredByGlob('./src/en/blog/posts/*.md')].reverse();
	});
	eleventyConfig.addCollection('blog_es', (collection) => {
		return [...collection.getFilteredByGlob('./src/es/blog/posts/*.md')].reverse();
	});
}

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};

