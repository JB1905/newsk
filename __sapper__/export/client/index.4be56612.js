function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n,e,o){if(t){const r=a(t,n,e,o);return t[0](r)}}function a(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if("object"==typeof n.dirty){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function s(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function p(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function h(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function y(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t){return Array.from(t.childNodes)}function _(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){for(let t=0;t<r.attributes.length;t+=1){const n=r.attributes[t];e[n.name]||r.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):h(n)}function v(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return m(n)}function w(t){return v(t," ")}function E(t,n){n=""+n,t.data!==n&&(t.data=n)}function A(t,n){(null!=n||t.value)&&(t.value=n)}let j;function N(t){j=t}function k(t,n){(function(){if(!j)throw new Error("Function called outside component initialization");return j})().$$.context.set(t,n)}const S=[],C=[],q=[],z=[],B=Promise.resolve();let F=!1;function L(t){q.push(t)}function M(){const t=new Set;do{for(;S.length;){const t=S.shift();N(t),O(t.$$)}for(;C.length;)C.pop()();for(let n=0;n<q.length;n+=1){const e=q[n];t.has(e)||(e(),t.add(e))}q.length=0}while(S.length);for(;z.length;)z.pop()();F=!1}function O(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}const T=new Set;let D;function G(){D={r:0,c:[],p:D}}function H(){D.r||r(D.c),D=D.p}function I(t,n){t&&t.i&&(T.delete(t),t.i(n))}function P(t,n,e,o){if(t&&t.o){if(T.has(t))return;T.add(t),D.c.push(()=>{T.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function J(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const u=t[c],i=n[c];if(i){for(const t in u)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[c]=i}else for(const t in u)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function K(t){return"object"==typeof t&&null!==t?t:{}}function Q(t){t&&t.c()}function R(t,n){t&&t.l(n)}function U(t,n,o){const{fragment:u,on_mount:i,on_destroy:a,after_update:f}=t.$$;u&&u.m(n,o),L(()=>{const n=i.map(e).filter(c);a?a.push(...n):r(n),t.$$.on_mount=[]}),f.forEach(L)}function V(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function W(t,n){-1===t.$$.dirty[0]&&(S.push(t),F||(F=!0,B.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function X(n,e,c,u,i,a,f=[-1]){const s=j;N(n);const l=e.props||{},d=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:o(),dirty:f};let p=!1;d.ctx=c?c(n,l,(t,e,o=e)=>(d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),p&&W(n,t)),e)):[],d.update(),p=!0,r(d.before_update),d.fragment=!!u&&u(d.ctx),e.target&&(e.hydrate?d.fragment&&d.fragment.l(x(e.target)):d.fragment&&d.fragment.c(),e.intro&&I(n.$$.fragment),U(n,e.target,e.anchor),M()),N(s)}class Y{$destroy(){V(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{K as A,V as B,k as C,G as D,H as E,y as F,A as G,r as H,p as I,Y as S,g as a,_ as b,i as c,x as d,h as e,v as f,d as g,w as h,X as i,b as j,l as k,s as l,a as m,t as n,f as o,I as p,P as q,E as r,u as s,m as t,$ as u,n as v,Q as w,R as x,U as y,J as z};
