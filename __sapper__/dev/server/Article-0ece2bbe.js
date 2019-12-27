'use strict';

var index$1 = require('./index-bfad13cd.js');

/* src/components/Masonry.svelte generated by Svelte v3.16.7 */

const css = {
	code: "@media(min-width: 780px){.masonry.svelte-hm5d4t{vertical-align:top;max-width:780px;column-gap:2rem;column-count:2}}",
	map: "{\"version\":3,\"file\":\"Masonry.svelte\",\"sources\":[\"Masonry.svelte\"],\"sourcesContent\":[\"<style>\\n  @media (min-width: 780px) {\\n    .masonry {\\n      vertical-align: top;\\n      max-width: 780px;\\n      column-gap: 2rem;\\n      column-count: 2;\\n    }\\n  }\\n</style>\\n\\n<div class=\\\"masonry mx-auto\\\">\\n  <slot />\\n</div>\\n\"],\"names\":[],\"mappings\":\"AACE,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,QAAQ,cAAC,CAAC,AACR,cAAc,CAAE,GAAG,CACnB,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,IAAI,CAChB,YAAY,CAAE,CAAC,AACjB,CAAC,AACH,CAAC\"}"
};

const Masonry = index$1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css);

	return `<div class="${"masonry mx-auto svelte-hm5d4t"}">
  ${$$slots.default ? $$slots.default({}) : ``}
</div>`;
});

/* src/components/Article.svelte generated by Svelte v3.16.7 */

const css$1 = {
	code: ".article.svelte-st9508:first-of-type{margin-top:0}img.svelte-st9508{font-size:0}",
	map: "{\"version\":3,\"file\":\"Article.svelte\",\"sources\":[\"Article.svelte\"],\"sourcesContent\":[\"<script>\\n  export let data;\\n  export let showSource = true;\\n\\n  const {\\n    title,\\n    description,\\n    author,\\n    url,\\n    urlToImage,\\n    publishedAt,\\n    source\\n  } = data;\\n\\n  const date = new Date(publishedAt);\\n</script>\\n\\n<style>\\n  .article:first-of-type {\\n    margin-top: 0;\\n  }\\n\\n  img {\\n    font-size: 0;\\n  }\\n</style>\\n\\n<div class=\\\"article max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8\\\">\\n  {#if urlToImage}\\n    <a href={url}>\\n      <img class=\\\"w-full\\\" src={urlToImage} alt={title} />\\n    </a>\\n  {/if}\\n\\n  <div class=\\\"px-6 py-4\\\">\\n    <a href={url}>\\n      <div class=\\\"font-bold text-xl mb-2\\\">{title}</div>\\n    </a>\\n\\n    {#if description}\\n      <p class=\\\"text-gray-700 text-base\\\">\\n        {@html description}\\n      </p>\\n    {/if}\\n  </div>\\n\\n  <div class=\\\"px-6 py-4\\\">\\n    {#if author}\\n      <span\\n        class=\\\"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm\\n        font-semibold text-gray-700 mr-2\\\">\\n        {author}\\n      </span>\\n    {/if}\\n\\n    {#if showSource}\\n      <a rel=\\\"prefetch\\\" href=\\\"publishers/{source.name}\\\" tabindex=\\\"0\\\">\\n        <span\\n          class=\\\"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm\\n          font-semibold text-gray-700\\\">\\n          {source.name}\\n        </span>\\n      </a>\\n    {/if}\\n  </div>\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAkBE,sBAAQ,cAAc,AAAC,CAAC,AACtB,UAAU,CAAE,CAAC,AACf,CAAC,AAED,GAAG,cAAC,CAAC,AACH,SAAS,CAAE,CAAC,AACd,CAAC\"}"
};

const Article = index$1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data } = $$props;
	let { showSource = true } = $$props;
	const { title, description, author, url, urlToImage, publishedAt, source } = data;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	if ($$props.showSource === void 0 && $$bindings.showSource && showSource !== void 0) $$bindings.showSource(showSource);
	$$result.css.add(css$1);

	return `<div class="${"article max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 svelte-st9508"}">
  ${urlToImage
	? `<a${index$1.add_attribute("href", url, 0)}>
      <img class="${"w-full svelte-st9508"}"${index$1.add_attribute("src", urlToImage, 0)}${index$1.add_attribute("alt", title, 0)}>
    </a>`
	: ``}

  <div class="${"px-6 py-4"}">
    <a${index$1.add_attribute("href", url, 0)}>
      <div class="${"font-bold text-xl mb-2"}">${index$1.escape(title)}</div>
    </a>

    ${description
	? `<p class="${"text-gray-700 text-base"}">
        ${description}
      </p>`
	: ``}
  </div>

  <div class="${"px-6 py-4"}">
    ${author
	? `<span class="${"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm\n        font-semibold text-gray-700 mr-2"}">
        ${index$1.escape(author)}
      </span>`
	: ``}

    ${showSource
	? `<a rel="${"prefetch"}" href="${"publishers/" + index$1.escape(source.name)}" tabindex="${"0"}">
        <span class="${"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm\n          font-semibold text-gray-700"}">
          ${index$1.escape(source.name)}
        </span>
      </a>`
	: ``}
  </div>
</div>`;
});

exports.Article = Article;
exports.Masonry = Masonry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJ0aWNsZS0wZWNlMmJiZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBkYXRhO1xuICBleHBvcnQgbGV0IHNob3dTb3VyY2UgPSB0cnVlO1xuXG4gIGNvbnN0IHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBhdXRob3IsXG4gICAgdXJsLFxuICAgIHVybFRvSW1hZ2UsXG4gICAgcHVibGlzaGVkQXQsXG4gICAgc291cmNlXG4gIH0gPSBkYXRhO1xuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwdWJsaXNoZWRBdCk7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuYXJ0aWNsZTpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5cbiAgaW1nIHtcbiAgICBmb250LXNpemU6IDA7XG4gIH1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJhcnRpY2xlIG1heC13LXNtIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZyBteC1hdXRvIG15LThcIj5cbiAgeyNpZiB1cmxUb0ltYWdlfVxuICAgIDxhIGhyZWY9e3VybH0+XG4gICAgICA8aW1nIGNsYXNzPVwidy1mdWxsXCIgc3JjPXt1cmxUb0ltYWdlfSBhbHQ9e3RpdGxlfSAvPlxuICAgIDwvYT5cbiAgey9pZn1cblxuICA8ZGl2IGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgPGEgaHJlZj17dXJsfT5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yXCI+e3RpdGxlfTwvZGl2PlxuICAgIDwvYT5cblxuICAgIHsjaWYgZGVzY3JpcHRpb259XG4gICAgICA8cCBjbGFzcz1cInRleHQtZ3JheS03MDAgdGV4dC1iYXNlXCI+XG4gICAgICAgIHtAaHRtbCBkZXNjcmlwdGlvbn1cbiAgICAgIDwvcD5cbiAgICB7L2lmfVxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgeyNpZiBhdXRob3J9XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzcz1cImlubGluZS1ibG9jayBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgcHgtMyBweS0xIHRleHQtc21cbiAgICAgICAgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIG1yLTJcIj5cbiAgICAgICAge2F1dGhvcn1cbiAgICAgIDwvc3Bhbj5cbiAgICB7L2lmfVxuXG4gICAgeyNpZiBzaG93U291cmNlfVxuICAgICAgPGEgcmVsPVwicHJlZmV0Y2hcIiBocmVmPVwicHVibGlzaGVycy97c291cmNlLm5hbWV9XCIgdGFiaW5kZXg9XCIwXCI+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3M9XCJpbmxpbmUtYmxvY2sgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIHB4LTMgcHktMSB0ZXh0LXNtXG4gICAgICAgICAgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAge3NvdXJjZS5uYW1lfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgey9pZn1cbiAgPC9kaXY+XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FDYSxJQUFJO09BQ0osVUFBVSxHQUFHLElBQUk7U0FHMUIsS0FBSyxFQUNMLFdBQVcsRUFDWCxNQUFNLEVBQ04sR0FBRyxFQUNILFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxLQUNKLElBQUk7Ozs7OztJQWdCSCxVQUFVOzsyRUFFYyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXlCaEMsVUFBVTtrRUFDdUIsTUFBTSxDQUFDLElBQUk7OzJCQUkxQyxNQUFNLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7In0=
