import markdownItContainer from "markdown-it-container";
import markdownItAttrs from "markdown-it-attrs";
import pluginRss from "@11ty/eleventy-plugin-rss"
import htmlmin from 'html-minifier-next';
import { parse } from "@11ty/parse-date-strings"

const isProduction = process.env.NODE_ENV === 'production';

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
	eleventyConfig.addPassthroughCopy('src/404.html');
	eleventyConfig.addPassthroughCopy('src/favicon.png');
	
	///////////////////////////// Colecciones ////////////////////////////////////////
	// Blog
	eleventyConfig.addCollection('blog_en', (collection) => {
		return [...collection.getFilteredByGlob('./src/en/blog/posts/*.md')].reverse();
	});
	eleventyConfig.addCollection('blog_es', (collection) => {
		return [...collection.getFilteredByGlob('./src/es/blog/posts/*.md')].reverse();
	});

	///////////////////////// Filters ////////////////////////////////

	eleventyConfig.addFilter("postDate", (dateObj) => {
		return parse(dateObj).toLocaleDateString("es")
	});

	///////////////////////////// Custom Blocks /////////////////////////////////////
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

	//////////////////////// Transforms ///////////////////////////////
	if (isProduction) {
	eleventyConfig.addTransform('htmlmin', function (content) {
		if ((this.page.outputPath || '').endsWith('.html')) {
			return htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});
		}
		return content;
	});
}

	
}

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};

