import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, e as element, t as text, a as space, A as create_component, b as claim_element, f as children, g as claim_text, h as detach_dev, j as claim_space, B as claim_component, k as attr_dev, l as add_location, m as insert_dev, o as append_dev, C as mount_component, w as set_data_dev, r as transition_in, u as transition_out, F as destroy_component, x as empty, G as group_outros, H as check_outros, L as destroy_each } from './index.ed3fdf5d.js';
import { a as apiKey } from './newsapi.724a8558.js';
import { M as Masonry, A as Article } from './Article.343f8216.js';

/* src/routes/[slug].svelte generated by Svelte v3.16.7 */
const file = "src/routes/[slug].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (34:2) {#each articles as article}
function create_each_block(ctx) {
	let current;

	const article = new Article({
			props: { data: /*article*/ ctx[2] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(article.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(article.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(article, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const article_changes = {};
			if (dirty & /*articles*/ 2) article_changes.data = /*article*/ ctx[2];
			article.$set(article_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(article.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(article.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(article, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(34:2) {#each articles as article}",
		ctx
	});

	return block;
}

// (33:0) <Masonry>
function create_default_slot(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*articles*/ ctx[1];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*articles*/ 2) {
				each_value = /*articles*/ ctx[1];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(33:0) <Masonry>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let h2;
	let t0;
	let t1;
	let t2;
	let current;

	const masonry = new Masonry({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			h2 = element("h2");
			t0 = text("Results for: ");
			t1 = text(/*query*/ ctx[0]);
			t2 = space();
			create_component(masonry.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Results for: ");
			t1 = claim_text(h2_nodes, /*query*/ ctx[0]);
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			claim_component(masonry.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "text-2xl mb-4 font-medium");
			add_location(h2, file, 30, 0, 634);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h2, anchor);
			append_dev(h2, t0);
			append_dev(h2, t1);
			insert_dev(target, t2, anchor);
			mount_component(masonry, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*query*/ 1) set_data_dev(t1, /*query*/ ctx[0]);
			const masonry_changes = {};

			if (dirty & /*$$scope, articles*/ 34) {
				masonry_changes.$$scope = { dirty, ctx };
			}

			masonry.$set(masonry_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(masonry.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(masonry.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t2);
			destroy_component(masonry, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload({ params, query }) {
	const res = await this.fetch(`https://newsapi.org/v2/${params.slug}?q=${query.q}&apiKey=${apiKey}`);
	const data = await res.json();

	if (res.status === 200) {
		return { query: query.q, articles: data.articles };
	} else {
		this.error(res.status, data.message);
	}
}

function instance($$self, $$props, $$invalidate) {
	let { query } = $$props;
	let { articles } = $$props;
	const writable_props = ["query", "articles"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("query" in $$props) $$invalidate(0, query = $$props.query);
		if ("articles" in $$props) $$invalidate(1, articles = $$props.articles);
	};

	$$self.$capture_state = () => {
		return { query, articles };
	};

	$$self.$inject_state = $$props => {
		if ("query" in $$props) $$invalidate(0, query = $$props.query);
		if ("articles" in $$props) $$invalidate(1, articles = $$props.articles);
	};

	return [query, articles];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { query: 0, articles: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*query*/ ctx[0] === undefined && !("query" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'query'");
		}

		if (/*articles*/ ctx[1] === undefined && !("articles" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'articles'");
		}
	}

	get query() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set query(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get articles() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set articles(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bslugu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLmUyOTBjZjljLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL1tzbHVnXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gIGltcG9ydCB7IGFwaUtleSB9IGZyb20gJy4uL2FwaS9uZXdzYXBpJztcblxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi8ke3BhcmFtcy5zbHVnfT9xPSR7cXVlcnkucX0mYXBpS2V5PSR7YXBpS2V5fWBcbiAgICApO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICByZXR1cm4geyBxdWVyeTogcXVlcnkucSwgYXJ0aWNsZXM6IGRhdGEuYXJ0aWNsZXMgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvcihyZXMuc3RhdHVzLCBkYXRhLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBNYXNvbnJ5IGZyb20gJy4uL2NvbXBvbmVudHMvTWFzb25yeS5zdmVsdGUnO1xuICBpbXBvcnQgQXJ0aWNsZSBmcm9tICcuLi9jb21wb25lbnRzL0FydGljbGUuc3ZlbHRlJztcblxuICBleHBvcnQgbGV0IHF1ZXJ5O1xuICBleHBvcnQgbGV0IGFydGljbGVzO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuPC9zdHlsZT5cblxuPGgyIGNsYXNzPVwidGV4dC0yeGwgbWItNCBmb250LW1lZGl1bVwiPlJlc3VsdHMgZm9yOiB7cXVlcnl9PC9oMj5cblxuPE1hc29ucnk+XG4gIHsjZWFjaCBhcnRpY2xlcyBhcyBhcnRpY2xlfVxuICAgIDxBcnRpY2xlIGRhdGE9e2FydGljbGV9IC8+XG4gIHsvZWFjaH1cbjwvTWFzb25yeT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQWlDUyxHQUFROzs7Z0NBQWIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUFDLEdBQVE7OzsrQkFBYixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUFKLE1BQUk7Ozs7Ozs7Ozs7a0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQTlCZ0IsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO09BQ3JDLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSywyQkFDQSxNQUFNLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxDQUFDLFdBQVcsTUFBTTtPQUcvRCxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUk7O0tBRXZCLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRztXQUNYLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTs7RUFFaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPOzs7OztPQVQ1QixLQUFLO09BQ0wsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
