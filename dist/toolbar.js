var toolbar=function(){"use strict";function w(){}function he(t,e){for(const n in e)t[n]=e[n];return t}function I(t){return t()}function X(){return Object.create(null)}function z(t){t.forEach(I)}function W(t){return typeof t=="function"}function V(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function pe(t,e){return q||(q=document.createElement("a")),q.href=e,t===q.href}function Y(t){return Object.keys(t).length===0}function _e(t,e,n,i){if(t){const l=ee(t,e,n,i);return t[0](l)}}function ee(t,e,n,i){return t[1]&&i?he(n.ctx.slice(),t[1](i(e))):n.ctx}function me(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const r=[],c=Math.max(e.dirty.length,l.length);for(let p=0;p<c;p+=1)r[p]=e.dirty[p]|l[p];return r}return e.dirty|l}return e.dirty}function be(t,e,n,i,l,r){if(l){const c=ee(e,n,i,r);t.p(c,l)}}function ge(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function m(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode&&t.parentNode.removeChild(t)}function k(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function x(){return A(" ")}function te(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function a(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function we(t){return Array.from(t.childNodes)}function J(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function F(t,e,n){t.classList[n?"add":"remove"](e)}function ke(t){const e={};for(const n of t)e[n.name]=n.value;return e}let B;function Z(t){B=t}function ve(){if(!B)throw new Error("Function called outside component initialization");return B}function ne(t){ve().$$.on_mount.push(t)}const S=[],ie=[],G=[],le=[],$e=Promise.resolve();let K=!1;function ye(){K||(K=!0,$e.then(M))}function D(t){G.push(t)}const Q=new Set;let H=0;function M(){if(H!==0)return;const t=B;do{try{for(;H<S.length;){const e=S[H];H++,Z(e),xe(e.$$)}}catch(e){throw S.length=0,H=0,e}for(Z(null),S.length=0,H=0;ie.length;)ie.pop()();for(let e=0;e<G.length;e+=1){const n=G[e];Q.has(n)||(Q.add(n),n())}G.length=0}while(S.length);for(;le.length;)le.pop()();K=!1,Q.clear(),Z(t)}function xe(t){if(t.fragment!==null){t.update(),z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const P=new Set;let C;function T(){C={r:0,c:[],p:C}}function j(){C.r||z(C.c),C=C.p}function b(t,e){t&&t.i&&(P.delete(t),t.i(e))}function g(t,e,n,i){if(t&&t.o){if(P.has(t))return;P.add(t),C.c.push(()=>{P.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function R(t){t&&t.c()}function O(t,e,n,i){const{fragment:l,after_update:r}=t.$$;l&&l.m(e,n),i||D(()=>{const c=t.$$.on_mount.map(I).filter(W);t.$$.on_destroy?t.$$.on_destroy.push(...c):z(c),t.$$.on_mount=[]}),r.forEach(D)}function L(t,e){const n=t.$$;n.fragment!==null&&(z(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ze(t,e){t.$$.dirty[0]===-1&&(S.push(t),ye(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(t,e,n,i,l,r,c,p=[-1]){const o=B;Z(t);const s=t.$$={fragment:null,ctx:[],props:r,update:w,not_equal:l,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:X(),dirty:p,skip_bound:!1,root:e.target||o.$$.root};c&&c(s.root);let _=!1;if(s.ctx=n?n(t,e.props||{},(d,f,...u)=>{const h=u.length?u[0]:f;return s.ctx&&l(s.ctx[d],s.ctx[d]=h)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](h),_&&ze(t,d)),f}):[],s.update(),_=!0,z(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){const d=we(e.target);s.fragment&&s.fragment.l(d),d.forEach($)}else s.fragment&&s.fragment.c();e.intro&&b(t.$$.fragment),O(t,e.target,e.anchor,e.customElement),M()}Z(o)}let re;typeof HTMLElement=="function"&&(re=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(I).filter(W);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){z(this.$$.on_disconnect)}$destroy(){L(this,1),this.$destroy=w}$on(t,e){if(!W(e))return w;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const i=n.indexOf(e);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!Y(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class U{$destroy(){L(this,1),this.$destroy=w}$on(e,n){if(!W(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!Y(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}class Me{constructor(e,n){this.callback=n,new MutationObserver(i=>{i.forEach(l=>{l.attributeName==="class"&&this.setStatus(l.target)})}).observe(e,{attributes:!0}),this.setStatus(e)}setStatus(e){return e.classList.contains("phpdebugbar-closed")?this.callback("closed"):this.callback("minimized")}}function se(t){let e,n;const i=t[6].default,l=_e(i,t,t[5],null);return{c(){e=k("span"),l&&l.c(),a(e,"class","breakpoints")},m(r,c){v(r,e,c),l&&l.m(e,null),n=!0},p(r,c){l&&l.p&&(!n||c&32)&&be(l,i,r,r[5],n?me(i,r[5],c,null):ge(r[5]),null)},i(r){n||(b(l,r),n=!0)},o(r){g(l,r),n=!1},d(r){r&&$(e),l&&l.d(r)}}}function oe(t){let e,n,i;return{c(){e=k("span"),n=A(t[0]),i=A(" px"),a(e,"class","screen_width")},m(l,r){v(l,e,r),m(e,n),m(e,i)},p(l,r){r&1&&J(n,l[0])},d(l){l&&$(e)}}}function Ce(t){let e,n,i,l,r,c,p,o,s,_,d;D(t[7]);let f=(t[1]==="labels"||t[1]==="both")&&se(t),u=(t[1]==="width"||t[1]==="both")&&oe(t);return{c(){e=k("div"),n=y("svg"),i=y("path"),l=x(),r=k("span"),f&&f.c(),c=x(),u&&u.c(),a(i,"d","M26 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2ZM6 6v20h20V6Z M22 16h2V8h-8v2h6v6zM8 24h8v-2h-6v-6H8v8z"),a(n,"xmlns","http://www.w3.org/2000/svg"),a(n,"viewBox","0 0 32 32"),a(n,"fill","currentColor"),a(n,"class","cell_icon"),a(r,"class","cell_content cell_breakpoint_indicator"),a(e,"role",p=t[2]?"button":"none"),a(e,"title",o=t[1]==="width"?"Window width":"Current Breakpoint"),a(e,"class","cell")},m(h,E){v(h,e,E),m(e,n),m(n,i),m(e,l),m(e,r),f&&f.m(r,null),m(r,c),u&&u.m(r,null),s=!0,_||(d=[te(window,"resize",t[7]),te(e,"click",t[3])],_=!0)},p(h,[E]){h[1]==="labels"||h[1]==="both"?f?(f.p(h,E),E&2&&b(f,1)):(f=se(h),f.c(),b(f,1),f.m(r,c)):f&&(T(),g(f,1,1,()=>{f=null}),j()),h[1]==="width"||h[1]==="both"?u?u.p(h,E):(u=oe(h),u.c(),u.m(r,null)):u&&(u.d(1),u=null),(!s||E&4&&p!==(p=h[2]?"button":"none"))&&a(e,"role",p),(!s||E&2&&o!==(o=h[1]==="width"?"Window width":"Current Breakpoint"))&&a(e,"title",o)},i(h){s||(b(f),s=!0)},o(h){g(f),s=!1},d(h){h&&$(e),f&&f.d(),u&&u.d(),_=!1,z(d)}}}function Ee(t,e,n){let i,{$$slots:l={},$$scope:r}=e,{breakpoints:c}=e,p=0,o="width";ne(()=>{c==="labels"&&n(1,o="labels")});function s(){if(i)switch(o){case"labels":return n(1,o="both");case"both":return n(1,o="width");default:return n(1,o="labels")}}function _(){n(0,p=window.innerWidth)}return t.$$set=d=>{"breakpoints"in d&&n(4,c=d.breakpoints),"$$scope"in d&&n(5,r=d.$$scope)},t.$$.update=()=>{t.$$.dirty&16&&n(2,i=c==="labels")},[p,o,i,s,c,r,l,_]}class Se extends U{constructor(e){super(),N(this,e,Ee,Ce,V,{breakpoints:4})}}function He(t){let e,n,i,l,r,c,p;return{c(){e=k("div"),n=y("svg"),i=y("path"),l=x(),r=k("span"),c=A(t[0]),a(i,"d","M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z M10 18h8v2h-8zm0-5h12v2H10zm0 10h5v2h-5z"),a(n,"xmlns","http://www.w3.org/2000/svg"),a(n,"viewBox","0 0 32 32"),a(n,"fill","currentColor"),a(n,"class","cell_icon"),a(r,"class","cell_content"),a(e,"title",p="Template: "+t[0]),a(e,"class","cell")},m(o,s){v(o,e,s),m(e,n),m(n,i),m(e,l),m(e,r),m(r,c)},p(o,[s]){s&1&&J(c,o[0]),s&1&&p!==(p="Template: "+o[0])&&a(e,"title",p)},i:w,o:w,d(o){o&&$(e)}}}function Le(t,e,n){let{template:i}=e;return t.$$set=l=>{"template"in l&&n(0,i=l.template)},[i]}class Ve extends U{constructor(e){super(),N(this,e,Le,He,V,{template:0})}}function Ae(t){let e,n,i;return{c(){e=k("a"),n=y("svg"),i=y("path"),a(i,"d","M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6a2 2 0 0 0-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10 3.6 3.6-10 10H6z"),a(n,"xmlns","http://www.w3.org/2000/svg"),a(n,"viewBox","0 0 32 32"),a(n,"fill","currentColor"),a(n,"class","cell_icon"),a(e,"href",t[0]),a(e,"target","_blank"),a(e,"rel","noreferrer"),a(e,"title","Edit this page"),a(e,"class","cell")},m(l,r){v(l,e,r),m(e,n),m(n,i)},p(l,[r]){r&1&&a(e,"href",l[0])},i:w,o:w,d(l){l&&$(e)}}}function Be(t,e,n){let{cp_link:i}=e;return t.$$set=l=>{"cp_link"in l&&n(0,i=l.cp_link)},[i]}class Ze extends U{constructor(e){super(),N(this,e,Be,Ae,V,{cp_link:0})}}function Te(t){let e,n,i,l,r,c,p;return{c(){e=k("div"),n=y("svg"),i=y("path"),l=x(),r=k("span"),c=A(t[0]),a(i,"d","M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2ZM4 16a12 12 0 0 1 4-9v2a2 2 0 0 0 2 2h3.4a2 2 0 0 0 1.8-1.1l.4-.9H18v4h-4.8a2 2 0 0 0-.9.2l-3.2 1.6A2 2 0 0 0 8 16.6v3.7a2 2 0 0 0 1.3 1.9l3.8 1.5.7 4A12 12 0 0 1 4 16Zm11.8 12-1-5.7-4.8-2v-3.7l3.2-1.6H20V7h-5.6l-1 2H10V5.6A12 12 0 0 1 27.3 12H22v4l1 3.8-2 2.9v4.2a12 12 0 0 1-5 1.1h-.2Zm7.2-2.3v-2.4l1.6-2.4a2 2 0 0 0 .3-1.6L24 16v-2h3.8A11.8 11.8 0 0 1 23 25.7Z"),a(n,"xmlns","http://www.w3.org/2000/svg"),a(n,"viewBox","0 0 32 32"),a(n,"fill","currentColor"),a(n,"class","cell_icon"),a(r,"class","cell_content"),a(e,"title",p="Site: "+t[0]),a(e,"class","cell")},m(o,s){v(o,e,s),m(e,n),m(n,i),m(e,l),m(e,r),m(r,c)},p(o,[s]){s&1&&J(c,o[0]),s&1&&p!==(p="Site: "+o[0])&&a(e,"title",p)},i:w,o:w,d(o){o&&$(e)}}}function je(t,e,n){let{site:i}=e;return t.$$set=l=>{"site"in l&&n(0,i=l.site)},[i]}class Oe extends U{constructor(e){super(),N(this,e,je,Te,V,{site:0})}}function ae(t){let e,n;return e=new Se({props:{breakpoints:t[0],$$slots:{default:[Ne]},$$scope:{ctx:t}}}),{c(){R(e.$$.fragment)},m(i,l){O(e,i,l),n=!0},p(i,l){const r={};l&1&&(r.breakpoints=i[0]),l&32&&(r.$$scope={dirty:l,ctx:i}),e.$set(r)},i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){g(e.$$.fragment,i),n=!1},d(i){L(e,i)}}}function Ne(t){let e;return{c(){e=k("slot")},m(n,i){v(n,e,i)},p:w,d(n){n&&$(e)}}}function ce(t){let e,n;return e=new Oe({props:{site:t[1]}}),{c(){R(e.$$.fragment)},m(i,l){O(e,i,l),n=!0},p(i,l){const r={};l&2&&(r.site=i[1]),e.$set(r)},i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){g(e.$$.fragment,i),n=!1},d(i){L(e,i)}}}function fe(t){let e,n;return e=new Ve({props:{template:t[2]}}),{c(){R(e.$$.fragment)},m(i,l){O(e,i,l),n=!0},p(i,l){const r={};l&4&&(r.template=i[2]),e.$set(r)},i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){g(e.$$.fragment,i),n=!1},d(i){L(e,i)}}}function ue(t){let e,n;return e=new Ze({props:{cp_link:t[3]}}),{c(){R(e.$$.fragment)},m(i,l){O(e,i,l),n=!0},p(i,l){const r={};l&8&&(r.cp_link=i[3]),e.$set(r)},i(i){n||(b(e.$$.fragment,i),n=!0)},o(i){g(e.$$.fragment,i),n=!1},d(i){L(e,i)}}}function We(t){let e,n,i,l,r,c,p,o,s=t[0]&&ae(t),_=t[1]&&ce(t),d=t[2]&&fe(t),f=t[3]&&ue(t);return{c(){e=k("div"),s&&s.c(),n=x(),_&&_.c(),i=x(),d&&d.c(),l=x(),f&&f.c(),r=x(),c=k("style"),c.textContent=`* {
  box-sizing: border-box;
}

#toolbar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5999999;
  font: normal normal 13px/1.1 "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Verdana, sans-serif;
  color: #555;
  text-shadow: 1px 1px #fff;
  background: #f5f5f5;
  border-top: 3px solid #FF269E;
  border-top-right-radius: 5px;
  overflow: hidden;
  height: 33px;
  display: flex;
  align-items: stretch;
}
#toolbar .cell {
  appearance: none;
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 4px;
  border-right: 1px solid #ddd;
  padding: 0 8px;
  min-width: 36px;
  color: inherit;
  text-decoration: none;
  user-select: none;
}
#toolbar .cell[href]:hover, #toolbar .cell[role=button]:hover {
  background: #ebebeb;
  cursor: pointer;
}
#toolbar .cell_icon {
  width: 16px;
  height: 16px;
  margin: -0.1em 0 0;
}
#toolbar .cell_content {
  max-width: 140px;
  overflow: hidden;
  white-space: nowrap;
}
#toolbar .cell_breakpoint_indicator {
  display: flex;
}
#toolbar .cell_breakpoint_indicator .breakpoints + .screen_width {
  opacity: 0.65;
  letter-spacing: -0.05em;
  word-spacing: -0.1em;
}
#toolbar .cell_breakpoint_indicator .breakpoints + .screen_width::before {
  content: "|";
  margin: 0 4px;
}
#toolbar ::slotted(.toolbar_current_breakpoint) {
  display: inline !important;
}
#toolbar.debugbarClosed {
  left: 40px;
}
#toolbar.debugbarOpen, #toolbar.debugbarMinimized {
  height: 30px;
  bottom: 33px;
}

/* fix height for firefox */
@-moz-document url-prefix() {
  #toolbar {
    height: 34px;
  }
}`,this.c=w,pe(c.src,p="./../css/toolbar.scss")||a(c,"src",p),a(e,"id","toolbar"),F(e,"debugbarClosed",t[4]==="closed"),F(e,"debugbarMinimized",t[4]==="minimized")},m(u,h){v(u,e,h),s&&s.m(e,null),m(e,n),_&&_.m(e,null),m(e,i),d&&d.m(e,null),m(e,l),f&&f.m(e,null),m(e,r),m(e,c),o=!0},p(u,[h]){u[0]?s?(s.p(u,h),h&1&&b(s,1)):(s=ae(u),s.c(),b(s,1),s.m(e,n)):s&&(T(),g(s,1,1,()=>{s=null}),j()),u[1]?_?(_.p(u,h),h&2&&b(_,1)):(_=ce(u),_.c(),b(_,1),_.m(e,i)):_&&(T(),g(_,1,1,()=>{_=null}),j()),u[2]?d?(d.p(u,h),h&4&&b(d,1)):(d=fe(u),d.c(),b(d,1),d.m(e,l)):d&&(T(),g(d,1,1,()=>{d=null}),j()),u[3]?f?(f.p(u,h),h&8&&b(f,1)):(f=ue(u),f.c(),b(f,1),f.m(e,r)):f&&(T(),g(f,1,1,()=>{f=null}),j()),(!o||h&16)&&F(e,"debugbarClosed",u[4]==="closed"),(!o||h&16)&&F(e,"debugbarMinimized",u[4]==="minimized")},i(u){o||(b(s),b(_),b(d),b(f),o=!0)},o(u){g(s),g(_),g(d),g(f),o=!1},d(u){u&&$(e),s&&s.d(),_&&_.d(),d&&d.d(),f&&f.d()}}}function qe(t,e,n){let{breakpoints:i=!1}=e,{site:l=!1}=e,{template:r=!1}=e,{cp_link:c=!1}=e,p=null;return ne(()=>{const o=document.documentElement.querySelector(".phpdebugbar");o&&new Me(o,s=>n(4,p=s))}),t.$$set=o=>{"breakpoints"in o&&n(0,i=o.breakpoints),"site"in o&&n(1,l=o.site),"template"in o&&n(2,r=o.template),"cp_link"in o&&n(3,c=o.cp_link)},[i,l,r,c,p]}class de extends re{constructor(e){super(),N(this,{target:this.shadowRoot,props:ke(this.attributes),customElement:!0},qe,We,V,{breakpoints:0,site:1,template:2,cp_link:3},null),e&&(e.target&&v(e.target,this,e.anchor),e.props&&(this.$set(e.props),M()))}static get observedAttributes(){return["breakpoints","site","template","cp_link"]}get breakpoints(){return this.$$.ctx[0]}set breakpoints(e){this.$$set({breakpoints:e}),M()}get site(){return this.$$.ctx[1]}set site(e){this.$$set({site:e}),M()}get template(){return this.$$.ctx[2]}set template(e){this.$$set({template:e}),M()}get cp_link(){return this.$$.ctx[3]}set cp_link(e){this.$$set({cp_link:e}),M()}}return customElements.define("statamic-toolbar",de),de}();
