import markdownItContainer from "markdown-it-container";

export default function (eleventyConfig) {
	let options = {
		html: true,
		breaks: true,
		linkify: true,
	};

	//Input y Output
	eleventyConfig.setInputDirectory('src');
	eleventyConfig.setOutputDirectory('dist');
	// Set directories to pass through to the dist folder
	eleventyConfig.addPassthroughCopy('src/images');
	eleventyConfig.addPassthroughCopy('src/audio');
	eleventyConfig.addPassthroughCopy('src/css');
	eleventyConfig.addPassthroughCopy('src/fonts');
	eleventyConfig.addPassthroughCopy('src/js');
	eleventyConfig.addPassthroughCopy('src/styles.css');
	
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
}

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};

