'use strict';

var index$1 = require('./index-bfad13cd.js');
var newsapi = require('./newsapi-61ce29d9.js');
var Article = require('./Article-0b81b461.js');

/* src/routes/publishers/[slug].svelte generated by Svelte v3.16.7 */

async function preload({ params, query }) {
	const res = await this.fetch(`https://newsapi.org/v2/top-headlines?sources=${params.slug}&apiKey=${newsapi.apiKey}`);
	const data = await res.json();

	if (res.status === 200) {
		return {
			title: params.slug,
			articles: data.articles
		};
	} else {
		this.error(res.status, data.message);
	}
}

const U5Bslugu5D = index$1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { title } = $$props;
	let { articles } = $$props;
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.articles === void 0 && $$bindings.articles && articles !== void 0) $$bindings.articles(articles);

	return `${($$result.head += `<title>${index$1.escape(title)}</title>`, "")}

<h2 class="${"text-2xl mb-4 font-medium"}">Last from: ${index$1.escape(title)}</h2>

${index$1.validate_component(Article.Masonry, "Masonry").$$render($$result, {}, {}, {
		default: () => `
  ${index$1.each(articles, article => `${index$1.validate_component(Article.Article, "Article").$$render($$result, { data: article, showSource: false }, {}, {})}`)}
`
	})}`;
});

exports.default = U5Bslugu5D;
exports.preload = preload;
