'use strict';

var index$1 = require('./index-bfad13cd.js');
var newsapi = require('./newsapi-61ce29d9.js');
var Article = require('./Article-c00b29a2.js');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLTM0NjNlMDllLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3B1Ymxpc2hlcnMvW3NsdWddLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgaW1wb3J0IHsgYXBpS2V5IH0gZnJvbSAnLi4vLi4vYXBpL25ld3NhcGknO1xuXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChcbiAgICAgIGBodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/c291cmNlcz0ke3BhcmFtcy5zbHVnfSZhcGlLZXk9JHthcGlLZXl9YFxuICAgICk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHJldHVybiB7IHRpdGxlOiBwYXJhbXMuc2x1ZywgYXJ0aWNsZXM6IGRhdGEuYXJ0aWNsZXMgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvcihyZXMuc3RhdHVzLCBkYXRhLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBNYXNvbnJ5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFzb25yeS5zdmVsdGUnO1xuICBpbXBvcnQgQXJ0aWNsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FydGljbGUuc3ZlbHRlJztcblxuICBleHBvcnQgbGV0IHRpdGxlO1xuICBleHBvcnQgbGV0IGFydGljbGVzO1xuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGgyIGNsYXNzPVwidGV4dC0yeGwgbWItNCBmb250LW1lZGl1bVwiPkxhc3QgZnJvbToge3RpdGxlfTwvaDI+XG5cbjxNYXNvbnJ5PlxuICB7I2VhY2ggYXJ0aWNsZXMgYXMgYXJ0aWNsZX1cbiAgICA8QXJ0aWNsZSBkYXRhPXthcnRpY2xlfSBzaG93U291cmNlPXtmYWxzZX0gLz5cbiAgey9lYWNofVxuPC9NYXNvbnJ5PlxuIl0sIm5hbWVzIjpbImFwaUtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7ZUFHd0IsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO09BQ3JDLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxpREFDc0IsTUFBTSxDQUFDLElBQUksV0FBV0EsY0FBTTtPQUd4RSxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUk7O0tBRXZCLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRzs7R0FDWCxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUk7R0FBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7OztFQUVwRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87Ozs7O09BVDVCLEtBQUs7T0FDTCxRQUFROzs7Ozs7Ozs7O2lCQTRCWixRQUFROzs7Ozs7OzsifQ==
