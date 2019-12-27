import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, j as claim_space, b as claim_element, f as children, h as detach_dev, g as claim_text, k as attr_dev, l as add_location, I as listen_dev, m as insert_dev, o as append_dev, J as set_input_value, n as noop, K as run_all } from './index.ed3fdf5d.js';
import { g as goto } from './app.03336443.js';

/* src/routes/index.svelte generated by Svelte v3.16.7 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let div3;
	let div2;
	let div0;
	let input;
	let t1;
	let div1;
	let button;
	let t2;
	let dispose;

	const block = {
		c: function create() {
			t0 = space();
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			input = element("input");
			t1 = space();
			div1 = element("div");
			button = element("button");
			t2 = text("Search");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			input = claim_element(div0_nodes, "INPUT", {
				type: true,
				class: true,
				placeholder: true
			});

			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			button = claim_element(div1_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t2 = claim_text(button_nodes, "Search");
			button_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "newsK";
			attr_dev(input, "type", "text");
			attr_dev(input, "class", "shadow appearance-none border rounded w-full py-2 px-3\n        text-gray-700 leading-tight focus:outline-none focus:shadow-outline");
			attr_dev(input, "placeholder", "What are you looking for?");
			add_location(input, file, 31, 6, 562);
			attr_dev(div0, "class", "mb-4");
			add_location(div0, file, 30, 4, 537);
			attr_dev(button, "type", "submit");
			attr_dev(button, "class", "bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4\n        rounded focus:outline-none focus:shadow-outline");
			add_location(button, file, 40, 6, 883);
			attr_dev(div1, "class", "flex items-center justify-center");
			add_location(div1, file, 39, 4, 830);
			attr_dev(div2, "class", "bg-white shadow-md rounded px-8 pt-10 pb-10 mb-4");
			add_location(div2, file, 29, 2, 470);
			attr_dev(div3, "class", "w-full max-w-sm mx-auto");
			add_location(div3, file, 28, 0, 430);

			dispose = [
				listen_dev(input, "input", /*input_input_handler*/ ctx[4]),
				listen_dev(button, "click", /*search*/ ctx[1], false, false, false)
			];
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div3, anchor);
			append_dev(div3, div2);
			append_dev(div2, div0);
			append_dev(div0, input);
			set_input_value(input, /*query*/ ctx[0]);
			append_dev(div2, t1);
			append_dev(div2, div1);
			append_dev(div1, button);
			append_dev(button, t2);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*query*/ 1 && input.value !== /*query*/ ctx[0]) {
				set_input_value(input, /*query*/ ctx[0]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div3);
			run_all(dispose);
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
	let query = "";
	let section;

	const setSection = id => {
		section = id;
	};

	const search = () => {
		const route = ["/top-headlines"];

		if (query) {
			route.push(`?q=${query}`);
		}

		goto(route.join(""));
	};

	function input_input_handler() {
		query = this.value;
		$$invalidate(0, query);
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("query" in $$props) $$invalidate(0, query = $$props.query);
		if ("section" in $$props) section = $$props.section;
	};

	return [query, search, section, setSection, input_input_handler];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZDEzM2U0YmMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgbGFuZz1cInRzXCI+XG4gIGltcG9ydCB7IGdvdG8gfSBmcm9tICdAc2FwcGVyL2FwcCc7XG5cbiAgaW1wb3J0IHsgY2F0ZWdvcmllcywgbGFuZ3VhZ2VzLCBjb3VudHJpZXMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4gIGxldCBxdWVyeSA9ICcnO1xuXG4gIGxldCBzZWN0aW9uO1xuXG4gIGNvbnN0IHNldFNlY3Rpb24gPSBpZCA9PiB7XG4gICAgc2VjdGlvbiA9IGlkO1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaCA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZSA9IFsnL3RvcC1oZWFkbGluZXMnXTtcblxuICAgIGlmIChxdWVyeSkge1xuICAgICAgcm91dGUucHVzaChgP3E9JHtxdWVyeX1gKTtcbiAgICB9XG5cbiAgICBnb3RvKHJvdXRlLmpvaW4oJycpKTtcbiAgfTtcbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5uZXdzSzwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwidy1mdWxsIG1heC13LXNtIG14LWF1dG9cIj5cbiAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkIHB4LTggcHQtMTAgcGItMTAgbWItNFwiPlxuICAgIDxkaXYgY2xhc3M9XCJtYi00XCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBiaW5kOnZhbHVlPXtxdWVyeX1cbiAgICAgICAgY2xhc3M9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTNcbiAgICAgICAgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBhcmUgeW91IGxvb2tpbmcgZm9yP1wiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIGNsYXNzPVwiYmctZ3JheS03MDAgaG92ZXI6YmctZ3JheS05MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00XG4gICAgICAgIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgICAgICAgb246Y2xpY2s9e3NlYXJjaH0+XG4gICAgICAgIFNlYXJjaFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIDxkaXYgY2xhc3M9XCJ0YWJzXCI+XG4gICAgICA8bmF2PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzcz1cImhlYWRpbmdcIlxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIGJpbmQ6Z3JvdXA9e3NlY3Rpb259XG4gICAgICAgICAgICB2YWx1ZT1cImNhdGVnb3JpZXNcIiAvPlxuICAgICAgICAgIENhdGVnb3JpZXNcbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzcz1cImhlYWRpbmdcIlxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIGJpbmQ6Z3JvdXA9e3NlY3Rpb259XG4gICAgICAgICAgICB2YWx1ZT1cImxhbmd1YWdlc1wiIC8+XG4gICAgICAgICAgTGFuZ3VhZ2VzXG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3M9XCJoZWFkaW5nXCJcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICBiaW5kOmdyb3VwPXtzZWN0aW9ufVxuICAgICAgICAgICAgdmFsdWU9XCJjb3VudHJpZXNcIiAvPlxuICAgICAgICAgIENvdW50cmllc1xuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmVzZXRcIiB2YWx1ZT1cIlJlc2V0XCIgLz5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICB7I2lmIHNlY3Rpb24gPT09ICdjYXRlZ29yaWVzJ31cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvdWQgY2xvdWQtLWNhdGVnb3JpZXNcIj5cbiAgICAgICAgICAgIHsjZWFjaCBjYXRlZ29yaWVzIGFzIGNhdGVnb3J5fVxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjbG91ZF9faXRlbVwiIG9uOmNsaWNrPXtlID0+IGl0ZW0oZSl9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgey9pZn1cblxuICAgICAgICB7I2lmIHNlY3Rpb24gPT09ICdsYW5ndWFnZXMnfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG91ZCBjbG91ZC0tbGFuZ3VhZ2VzXCI+XG4gICAgICAgICAgICB7I2VhY2ggbGFuZ3VhZ2VzIGFzIGxhbmd1YWdlfVxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjbG91ZF9faXRlbVwiIG9uOmNsaWNrPXtlID0+IGl0ZW0oZSl9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICAgICAgICAgIHtsYW5ndWFnZX1cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgey9pZn1cblxuICAgICAgICB7I2lmIHNlY3Rpb24gPT09ICdjb3VudHJpZXMnfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG91ZCBjbG91ZC0tY291bnRyaWVzXCI+XG4gICAgICAgICAgICB7I2VhY2ggY291bnRyaWVzIGFzIGNvdW50cnl9XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNsb3VkX19pdGVtXCIgb246Y2xpY2s9e2UgPT4gaXRlbShlKX0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgICAge2NvdW50cnl9XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvaWZ9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gLS0+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBS00sS0FBSyxHQUFHLEVBQUU7S0FFVixPQUFPOztPQUVMLFVBQVUsR0FBRyxFQUFFO0VBQ25CLE9BQU8sR0FBRyxFQUFFOzs7T0FHUixNQUFNO1FBQ0osS0FBSyxJQUFJLGdCQUFnQjs7TUFFM0IsS0FBSztHQUNQLEtBQUssQ0FBQyxJQUFJLE9BQU8sS0FBSzs7O0VBR3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
