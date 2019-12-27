import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, c as create_slot, e as element, b as claim_element, f as children, h as detach_dev, k as attr_dev, l as add_location, m as insert_dev, p as get_slot_context, q as get_slot_changes, r as transition_in, u as transition_out, o as append_dev, n as noop, t as text, g as claim_text, a as space, j as claim_space } from './index.ed3fdf5d.js';

/* src/components/Masonry.svelte generated by Svelte v3.16.7 */

const file = "src/components/Masonry.svelte";

function create_fragment(ctx) {
	let div;
	let current;
	const default_slot_template = /*$$slots*/ ctx[1].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);

	const block = {
		c: function create() {
			div = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "masonry mx-auto svelte-hm5d4t");
			add_location(div, file, 11, 0, 171);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot && default_slot.p && dirty & /*$$scope*/ 1) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[0], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[0], dirty, null));
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (default_slot) default_slot.d(detaching);
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		
	};

	return [$$scope, $$slots];
}

class Masonry extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Masonry",
			options,
			id: create_fragment.name
		});
	}
}

/* src/components/Article.svelte generated by Svelte v3.16.7 */

const file$1 = "src/components/Article.svelte";

// (29:2) {#if urlToImage}
function create_if_block_4(ctx) {
	let a;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			a = element("a");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			img = claim_element(a_nodes, "IMG", { class: true, src: true, alt: true });
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", "w-full svelte-st9508");
			if (img.src !== (img_src_value = /*urlToImage*/ ctx[5])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", /*title*/ ctx[1]);
			add_location(img, file$1, 30, 6, 447);
			attr_dev(a, "href", /*url*/ ctx[4]);
			add_location(a, file$1, 29, 4, 426);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, img);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_4.name,
		type: "if",
		source: "(29:2) {#if urlToImage}",
		ctx
	});

	return block;
}

// (40:4) {#if description}
function create_if_block_3(ctx) {
	let p;

	const block = {
		c: function create() {
			p = element("p");
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "text-gray-700 text-base");
			add_location(p, file$1, 40, 6, 656);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			p.innerHTML = /*description*/ ctx[2];
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_3.name,
		type: "if",
		source: "(40:4) {#if description}",
		ctx
	});

	return block;
}

// (48:4) {#if author}
function create_if_block_2(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text(/*author*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, /*author*/ ctx[3]);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm\n        font-semibold text-gray-700 mr-2");
			add_location(span, file$1, 48, 6, 800);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(48:4) {#if author}",
		ctx
	});

	return block;
}

// (56:4) {#if date}
function create_if_block_1(ctx) {
	let span;
	let t0_value = /*date*/ ctx[7].getFullYear() + "";
	let t0;
	let t1;
	let t2_value = /*date*/ ctx[7].getMonth() + "";
	let t2;
	let t3;
	let t4_value = /*date*/ ctx[7].getDate() + "";
	let t4;

	const block = {
		c: function create() {
			span = element("span");
			t0 = text(t0_value);
			t1 = text(".");
			t2 = text(t2_value);
			t3 = text(".");
			t4 = text(t4_value);
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, t0_value);
			t1 = claim_text(span_nodes, ".");
			t2 = claim_text(span_nodes, t2_value);
			t3 = claim_text(span_nodes, ".");
			t4 = claim_text(span_nodes, t4_value);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm\n        font-semibold text-gray-700");
			add_location(span, file$1, 56, 6, 983);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t0);
			append_dev(span, t1);
			append_dev(span, t2);
			append_dev(span, t3);
			append_dev(span, t4);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(56:4) {#if date}",
		ctx
	});

	return block;
}

// (64:4) {#if showSource}
function create_if_block(ctx) {
	let a;
	let span;
	let t_value = /*source*/ ctx[6].name + "";
	let t;
	let a_href_value;

	const block = {
		c: function create() {
			a = element("a");
			span = element("span");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { rel: true, href: true });
			var a_nodes = children(a);
			span = claim_element(a_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, t_value);
			span_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm\n          font-semibold text-gray-700");
			add_location(span, file$1, 65, 8, 1273);
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", a_href_value = "publishers/" + /*source*/ ctx[6].name);
			add_location(a, file$1, 64, 6, 1214);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, span);
			append_dev(span, t);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(64:4) {#if showSource}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div3;
	let t0;
	let div1;
	let a;
	let div0;
	let t1;
	let t2;
	let t3;
	let div2;
	let t4;
	let t5;
	let if_block0 = /*urlToImage*/ ctx[5] && create_if_block_4(ctx);
	let if_block1 = /*description*/ ctx[2] && create_if_block_3(ctx);
	let if_block2 = /*author*/ ctx[3] && create_if_block_2(ctx);
	let if_block3 = /*date*/ ctx[7] && create_if_block_1(ctx);
	let if_block4 = /*showSource*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			div3 = element("div");
			if (if_block0) if_block0.c();
			t0 = space();
			div1 = element("div");
			a = element("a");
			div0 = element("div");
			t1 = text(/*title*/ ctx[1]);
			t2 = space();
			if (if_block1) if_block1.c();
			t3 = space();
			div2 = element("div");
			if (if_block2) if_block2.c();
			t4 = space();
			if (if_block3) if_block3.c();
			t5 = space();
			if (if_block4) if_block4.c();
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			if (if_block0) if_block0.l(div3_nodes);
			t0 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a = claim_element(div1_nodes, "A", { href: true });
			var a_nodes = children(a);
			div0 = claim_element(a_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t1 = claim_text(div0_nodes, /*title*/ ctx[1]);
			div0_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			if (if_block1) if_block1.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			if (if_block2) if_block2.l(div2_nodes);
			t4 = claim_space(div2_nodes);
			if (if_block3) if_block3.l(div2_nodes);
			t5 = claim_space(div2_nodes);
			if (if_block4) if_block4.l(div2_nodes);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "font-bold text-xl mb-2");
			add_location(div0, file$1, 36, 6, 568);
			attr_dev(a, "href", /*url*/ ctx[4]);
			add_location(a, file$1, 35, 4, 547);
			attr_dev(div1, "class", "px-6 py-4");
			add_location(div1, file$1, 34, 2, 519);
			attr_dev(div2, "class", "px-6 py-4");
			add_location(div2, file$1, 46, 2, 753);
			attr_dev(div3, "class", "article max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8 svelte-st9508");
			add_location(div3, file$1, 27, 0, 325);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			if (if_block0) if_block0.m(div3, null);
			append_dev(div3, t0);
			append_dev(div3, div1);
			append_dev(div1, a);
			append_dev(a, div0);
			append_dev(div0, t1);
			append_dev(div1, t2);
			if (if_block1) if_block1.m(div1, null);
			append_dev(div3, t3);
			append_dev(div3, div2);
			if (if_block2) if_block2.m(div2, null);
			append_dev(div2, t4);
			if (if_block3) if_block3.m(div2, null);
			append_dev(div2, t5);
			if (if_block4) if_block4.m(div2, null);
		},
		p: function update(ctx, [dirty]) {
			if (/*urlToImage*/ ctx[5]) if_block0.p(ctx, dirty);
			if (/*description*/ ctx[2]) if_block1.p(ctx, dirty);
			if (/*author*/ ctx[3]) if_block2.p(ctx, dirty);
			if (/*date*/ ctx[7]) if_block3.p(ctx, dirty);

			if (/*showSource*/ ctx[0]) {
				if (if_block4) {
					if_block4.p(ctx, dirty);
				} else {
					if_block4 = create_if_block(ctx);
					if_block4.c();
					if_block4.m(div2, null);
				}
			} else if (if_block4) {
				if_block4.d(1);
				if_block4 = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			if (if_block3) if_block3.d();
			if (if_block4) if_block4.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { data } = $$props;
	let { showSource = true } = $$props;
	const { title, description, author, url, urlToImage, publishedAt, source } = data;
	const date = new Date(publishedAt);
	const writable_props = ["data", "showSource"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Article> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ("data" in $$props) $$invalidate(8, data = $$props.data);
		if ("showSource" in $$props) $$invalidate(0, showSource = $$props.showSource);
	};

	$$self.$capture_state = () => {
		return { data, showSource };
	};

	$$self.$inject_state = $$props => {
		if ("data" in $$props) $$invalidate(8, data = $$props.data);
		if ("showSource" in $$props) $$invalidate(0, showSource = $$props.showSource);
	};

	return [showSource, title, description, author, url, urlToImage, source, date, data];
}

class Article extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { data: 8, showSource: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Article",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || ({});

		if (/*data*/ ctx[8] === undefined && !("data" in props)) {
			console.warn("<Article> was created without expected prop 'data'");
		}
	}

	get data() {
		throw new Error("<Article>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set data(value) {
		throw new Error("<Article>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get showSource() {
		throw new Error("<Article>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set showSource(value) {
		throw new Error("<Article>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Article as A, Masonry as M };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJ0aWNsZS5iYzA2NGRiMS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBkYXRhO1xuICBleHBvcnQgbGV0IHNob3dTb3VyY2UgPSB0cnVlO1xuXG4gIGNvbnN0IHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBhdXRob3IsXG4gICAgdXJsLFxuICAgIHVybFRvSW1hZ2UsXG4gICAgcHVibGlzaGVkQXQsXG4gICAgc291cmNlXG4gIH0gPSBkYXRhO1xuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwdWJsaXNoZWRBdCk7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuYXJ0aWNsZTpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5cbiAgaW1nIHtcbiAgICBmb250LXNpemU6IDA7XG4gIH1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJhcnRpY2xlIG1heC13LXNtIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZyBteC1hdXRvIG15LThcIj5cbiAgeyNpZiB1cmxUb0ltYWdlfVxuICAgIDxhIGhyZWY9e3VybH0+XG4gICAgICA8aW1nIGNsYXNzPVwidy1mdWxsXCIgc3JjPXt1cmxUb0ltYWdlfSBhbHQ9e3RpdGxlfSAvPlxuICAgIDwvYT5cbiAgey9pZn1cblxuICA8ZGl2IGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgPGEgaHJlZj17dXJsfT5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yXCI+e3RpdGxlfTwvZGl2PlxuICAgIDwvYT5cblxuICAgIHsjaWYgZGVzY3JpcHRpb259XG4gICAgICA8cCBjbGFzcz1cInRleHQtZ3JheS03MDAgdGV4dC1iYXNlXCI+XG4gICAgICAgIHtAaHRtbCBkZXNjcmlwdGlvbn1cbiAgICAgIDwvcD5cbiAgICB7L2lmfVxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwicHgtNiBweS00XCI+XG4gICAgeyNpZiBhdXRob3J9XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzcz1cImlubGluZS1ibG9jayBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgcHgtMyBweS0xIHRleHQtc21cbiAgICAgICAgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIG1yLTJcIj5cbiAgICAgICAge2F1dGhvcn1cbiAgICAgIDwvc3Bhbj5cbiAgICB7L2lmfVxuXG4gICAgeyNpZiBkYXRlfVxuICAgICAgPHNwYW5cbiAgICAgICAgY2xhc3M9XCJpbmxpbmUtYmxvY2sgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIHB4LTMgcHktMSB0ZXh0LXNtXG4gICAgICAgIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICB7ZGF0ZS5nZXRGdWxsWWVhcigpfS57ZGF0ZS5nZXRNb250aCgpfS57ZGF0ZS5nZXREYXRlKCl9XG4gICAgICA8L3NwYW4+XG4gICAgey9pZn1cblxuICAgIHsjaWYgc2hvd1NvdXJjZX1cbiAgICAgIDxhIHJlbD1cInByZWZldGNoXCIgaHJlZj1cInB1Ymxpc2hlcnMve3NvdXJjZS5uYW1lfVwiPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzPVwiaW5saW5lLWJsb2NrIGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgdGV4dC1zbVxuICAgICAgICAgIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgIHtzb3VyY2UubmFtZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIHsvaWZ9XG4gIDwvZGl2PlxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21EQThCK0IsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBNkJoQyxHQUFJLElBQUMsV0FBVzs7O3lCQUFLLEdBQUksSUFBQyxRQUFROzs7eUJBQUssR0FBSSxJQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFTakQsR0FBTSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUVBSm9CLEdBQU0sSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQXBDOUMsR0FBVTs7OztnQ0FtQ1IsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkFuQ1osR0FBVTs7Ozs7c0JBbUNSLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E5RE4sSUFBSTtPQUNKLFVBQVUsR0FBRyxJQUFJO1NBRzFCLEtBQUssRUFDTCxXQUFXLEVBQ1gsTUFBTSxFQUNOLEdBQUcsRUFDSCxVQUFVLEVBQ1YsV0FBVyxFQUNYLE1BQU0sS0FDSixJQUFJO09BRUYsSUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
