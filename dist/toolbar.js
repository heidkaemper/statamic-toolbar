var toolbar=function(){"use strict";function k(){}function ht(e,t){for(const n in t)e[n]=t[n];return e}function U(e){return e()}function X(){return Object.create(null)}function z(e){e.forEach(U)}function W(e){return typeof e=="function"}function V(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let q;function pt(e,t){return q||(q=document.createElement("a")),q.href=t,e===q.href}function Y(e){return Object.keys(e).length===0}function _t(e,t,n,i){if(e){const l=tt(e,t,n,i);return e[0](l)}}function tt(e,t,n,i){return e[1]&&i?ht(n.ctx.slice(),e[1](i(t))):n.ctx}function mt(e,t,n,i){if(e[2]&&i){const l=e[2](i(n));if(t.dirty===void 0)return l;if(typeof l=="object"){const r=[],c=Math.max(t.dirty.length,l.length);for(let p=0;p<c;p+=1)r[p]=t.dirty[p]|l[p];return r}return t.dirty|l}return t.dirty}function bt(e,t,n,i,l,r){if(l){const c=tt(t,n,i,r);e.p(c,l)}}function gt(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}function m(e,t){e.appendChild(t)}function v(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode&&e.parentNode.removeChild(e)}function w(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function A(e){return document.createTextNode(e)}function x(){return A(" ")}function et(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function kt(e){return Array.from(e.childNodes)}function J(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function F(e,t,n){e.classList[n?"add":"remove"](t)}function wt(e){const t={};for(const n of e)t[n.name]=n.value;return t}let B;function Z(e){B=e}function vt(){if(!B)throw new Error("Function called outside component initialization");return B}function nt(e){vt().$$.on_mount.push(e)}const S=[],it=[],G=[],lt=[],$t=Promise.resolve();let K=!1;function yt(){K||(K=!0,$t.then(M))}function I(e){G.push(e)}const Q=new Set;let H=0;function M(){if(H!==0)return;const e=B;do{try{for(;H<S.length;){const t=S[H];H++,Z(t),xt(t.$$)}}catch(t){throw S.length=0,H=0,t}for(Z(null),S.length=0,H=0;it.length;)it.pop()();for(let t=0;t<G.length;t+=1){const n=G[t];Q.has(n)||(Q.add(n),n())}G.length=0}while(S.length);for(;lt.length;)lt.pop()();K=!1,Q.clear(),Z(e)}function xt(e){if(e.fragment!==null){e.update(),z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}const D=new Set;let C;function T(){C={r:0,c:[],p:C}}function j(){C.r||z(C.c),C=C.p}function b(e,t){e&&e.i&&(D.delete(e),e.i(t))}function g(e,t,n,i){if(e&&e.o){if(D.has(e))return;D.add(e),C.c.push(()=>{D.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function P(e){e&&e.c()}function O(e,t,n,i){const{fragment:l,after_update:r}=e.$$;l&&l.m(t,n),i||I(()=>{const c=e.$$.on_mount.map(U).filter(W);e.$$.on_destroy?e.$$.on_destroy.push(...c):z(c),e.$$.on_mount=[]}),r.forEach(I)}function L(e,t){const n=e.$$;n.fragment!==null&&(z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(e,t){e.$$.dirty[0]===-1&&(S.push(e),yt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function N(e,t,n,i,l,r,c,p=[-1]){const o=B;Z(e);const s=e.$$={fragment:null,ctx:[],props:r,update:k,not_equal:l,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:X(),dirty:p,skip_bound:!1,root:t.target||o.$$.root};c&&c(s.root);let _=!1;if(s.ctx=n?n(e,t.props||{},(d,f,...u)=>{const h=u.length?u[0]:f;return s.ctx&&l(s.ctx[d],s.ctx[d]=h)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](h),_&&zt(e,d)),f}):[],s.update(),_=!0,z(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){const d=kt(t.target);s.fragment&&s.fragment.l(d),d.forEach($)}else s.fragment&&s.fragment.c();t.intro&&b(e.$$.fragment),O(e,t.target,t.anchor,t.customElement),M()}Z(o)}let rt;typeof HTMLElement=="function"&&(rt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(U).filter(W);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){z(this.$$.on_disconnect)}$destroy(){L(this,1),this.$destroy=k}$on(e,t){if(!W(t))return k;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Y(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});class R{$destroy(){L(this,1),this.$destroy=k}$on(t,n){if(!W(n))return k;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!Y(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class Mt{constructor(t,n){this.callback=n,new MutationObserver(i=>{i.forEach(l=>{l.attributeName==="class"&&this.setStatus(l.target)})}).observe(t,{attributes:!0}),this.setStatus(t)}setStatus(t){return t.classList.contains("phpdebugbar-closed")?this.callback("closed"):this.callback("minimized")}}function st(e){let t,n;const i=e[6].default,l=_t(i,e,e[5],null);return{c(){t=w("span"),l&&l.c(),a(t,"class","breakpoints")},m(r,c){v(r,t,c),l&&l.m(t,null),n=!0},p(r,c){l&&l.p&&(!n||c&32)&&bt(l,i,r,r[5],n?mt(i,r[5],c,null):gt(r[5]),null)},i(r){n||(b(l,r),n=!0)},o(r){g(l,r),n=!1},d(r){r&&$(t),l&&l.d(r)}}}function ot(e){let t,n,i;return{c(){t=w("span"),n=A(e[0]),i=A(" px"),a(t,"class","screen_width")},m(l,r){v(l,t,r),m(t,n),m(t,i)},p(l,r){r&1&&J(n,l[0])},d(l){l&&$(t)}}}function Ct(e){let t,n,i,l,r,c,p,o,s,_,d;I(e[7]);let f=(e[1]==="labels"||e[1]==="both")&&st(e),u=(e[1]==="width"||e[1]==="both")&&ot(e);return{c(){t=w("div"),n=y("svg"),i=y("path"),l=x(),r=w("span"),f&&f.c(),c=x(),u&&u.c(),a(i,"d","M26 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2ZM6 6v20h20V6Z M22 16h2V8h-8v2h6v6zM8 24h8v-2h-6v-6H8v8z"),a(n,"xmlns","http://www.w3.org/2000/svg"),a(n,"viewBox","0 0 32 32"),a(n,"fill","currentColor"),a(n,"class","cell_icon"),a(r,"class","cell_content cell_breakpoint_indicator"),a(t,"role",p=e[2]?"button":"none"),a(t,"title",o=e[1]==="width"?"Window width":"Current Breakpoint"),a(t,"class","cell")},m(h,E){v(h,t,E),m(t,n),m(n,i),m(t,l),m(t,r),f&&f.m(r,null),m(r,c),u&&u.m(r,null),s=!0,_||(d=[et(window,"resize",e[7]),et(t,"click",e[3])],_=!0)},p(h,[E]){h[1]==="labels"||h[1]==="both"?f?(f.p(h,E),E&2&&b(f,1)):(f=st(h),f.c(),b(f,1),f.m(r,c)):f&&(T(),g(f,1,1,()=>{f=null}),j()),h[1]==="width"||h[1]==="both"?u?u.p(h,E):(u=ot(h),u.c(),u.m(r,null)):u&&(u.d(1),u=null),(!s||E&4&&p!==(p=h[2]?"button":"none"))&&a(t,"role",p),(!s||E&2&&o!==(o=h[1]==="width"?"Window width":"Current Breakpoint"))&&a(t,"title",o)},i(h){s||(b(f),s=!0)},o(h){g(f),s=!1},d(h){h&&$(t),f&&f.d(),u&&u.d(),_=!1,z(d)}}}function Et(e,t,n){let i,{$$slots:l={},$$scope:r}=t,{breakpoints:c}=t,p=0,o="width";nt(()=>{c==="labels"&&n(1,o=localStorage.getItem("statamic.toolbar.breakpoints.type")??"labels")});function s(){if(i){switch(o){case"labels":n(1,o="both");break;case"both":n(1,o="width");break;default:n(1,o="labels")}localStorage.setItem("statamic.toolbar.breakpoints.type",o)}}function _(){n(0,p=window.innerWidth)}return e.$$set=d=>{"breakpoints"in d&&n(4,c=d.breakpoints),"$$scope"in d&&n(5,r=d.$$scope)},e.$$.update=()=>{e.$$.dirty&16&&n(2,i=c==="labels")},[p,o,i,s,c,r,l,_]}class St extends R{constructor(t){super(),N(this,t,Et,Ct,V,{breakpoints:4})}}function Ht(e){let t,n,i,l,r,c,p;return{c(){t=w("div"),n=y("svg"),i=y("path"),l=x(),r=w("span"),c=A(e[0]),a(i,"d","M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z M10 18h8v2h-8zm0-5h12v2H10zm0 10h5v2h-5z"),a(n,"xmlns","http://www.w3.org/2000/svg"),a(n,"viewBox","0 0 32 32"),a(n,"fill","currentColor"),a(n,"class","cell_icon"),a(r,"class","cell_content"),a(t,"title",p="Template: "+e[0]),a(t,"class","cell")},m(o,s){v(o,t,s),m(t,n),m(n,i),m(t,l),m(t,r),m(r,c)},p(o,[s]){s&1&&J(c,o[0]),s&1&&p!==(p="Template: "+o[0])&&a(t,"title",p)},i:k,o:k,d(o){o&&$(t)}}}function Lt(e,t,n){let{template:i}=t;return e.$$set=l=>{"template"in l&&n(0,i=l.template)},[i]}class Vt extends R{constructor(t){super(),N(this,t,Lt,Ht,V,{template:0})}}function At(e){let t,n,i;return{c(){t=w("a"),n=y("svg"),i=y("path"),a(i,"d","M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6a2 2 0 0 0-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10 3.6 3.6-10 10H6z"),a(n,"xmlns","http://www.w3.org/2000/svg"),a(n,"viewBox","0 0 32 32"),a(n,"fill","currentColor"),a(n,"class","cell_icon"),a(t,"href",e[0]),a(t,"target","_blank"),a(t,"rel","noreferrer"),a(t,"title","Edit this page"),a(t,"class","cell")},m(l,r){v(l,t,r),m(t,n),m(n,i)},p(l,[r]){r&1&&a(t,"href",l[0])},i:k,o:k,d(l){l&&$(t)}}}function Bt(e,t,n){let{cp_link:i}=t;return e.$$set=l=>{"cp_link"in l&&n(0,i=l.cp_link)},[i]}class Zt extends R{constructor(t){super(),N(this,t,Bt,At,V,{cp_link:0})}}function Tt(e){let t,n,i,l,r,c,p;return{c(){t=w("div"),n=y("svg"),i=y("path"),l=x(),r=w("span"),c=A(e[0]),a(i,"d","M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2ZM4 16a12 12 0 0 1 4-9v2a2 2 0 0 0 2 2h3.4a2 2 0 0 0 1.8-1.1l.4-.9H18v4h-4.8a2 2 0 0 0-.9.2l-3.2 1.6A2 2 0 0 0 8 16.6v3.7a2 2 0 0 0 1.3 1.9l3.8 1.5.7 4A12 12 0 0 1 4 16Zm11.8 12-1-5.7-4.8-2v-3.7l3.2-1.6H20V7h-5.6l-1 2H10V5.6A12 12 0 0 1 27.3 12H22v4l1 3.8-2 2.9v4.2a12 12 0 0 1-5 1.1h-.2Zm7.2-2.3v-2.4l1.6-2.4a2 2 0 0 0 .3-1.6L24 16v-2h3.8A11.8 11.8 0 0 1 23 25.7Z"),a(n,"xmlns","http://www.w3.org/2000/svg"),a(n,"viewBox","0 0 32 32"),a(n,"fill","currentColor"),a(n,"class","cell_icon"),a(r,"class","cell_content"),a(t,"title",p="Site: "+e[0]),a(t,"class","cell")},m(o,s){v(o,t,s),m(t,n),m(n,i),m(t,l),m(t,r),m(r,c)},p(o,[s]){s&1&&J(c,o[0]),s&1&&p!==(p="Site: "+o[0])&&a(t,"title",p)},i:k,o:k,d(o){o&&$(t)}}}function jt(e,t,n){let{site:i}=t;return e.$$set=l=>{"site"in l&&n(0,i=l.site)},[i]}class Ot extends R{constructor(t){super(),N(this,t,jt,Tt,V,{site:0})}}function at(e){let t,n;return t=new St({props:{breakpoints:e[0],$$slots:{default:[Nt]},$$scope:{ctx:e}}}),{c(){P(t.$$.fragment)},m(i,l){O(t,i,l),n=!0},p(i,l){const r={};l&1&&(r.breakpoints=i[0]),l&32&&(r.$$scope={dirty:l,ctx:i}),t.$set(r)},i(i){n||(b(t.$$.fragment,i),n=!0)},o(i){g(t.$$.fragment,i),n=!1},d(i){L(t,i)}}}function Nt(e){let t;return{c(){t=w("slot")},m(n,i){v(n,t,i)},p:k,d(n){n&&$(t)}}}function ct(e){let t,n;return t=new Ot({props:{site:e[1]}}),{c(){P(t.$$.fragment)},m(i,l){O(t,i,l),n=!0},p(i,l){const r={};l&2&&(r.site=i[1]),t.$set(r)},i(i){n||(b(t.$$.fragment,i),n=!0)},o(i){g(t.$$.fragment,i),n=!1},d(i){L(t,i)}}}function ft(e){let t,n;return t=new Vt({props:{template:e[2]}}),{c(){P(t.$$.fragment)},m(i,l){O(t,i,l),n=!0},p(i,l){const r={};l&4&&(r.template=i[2]),t.$set(r)},i(i){n||(b(t.$$.fragment,i),n=!0)},o(i){g(t.$$.fragment,i),n=!1},d(i){L(t,i)}}}function ut(e){let t,n;return t=new Zt({props:{cp_link:e[3]}}),{c(){P(t.$$.fragment)},m(i,l){O(t,i,l),n=!0},p(i,l){const r={};l&8&&(r.cp_link=i[3]),t.$set(r)},i(i){n||(b(t.$$.fragment,i),n=!0)},o(i){g(t.$$.fragment,i),n=!1},d(i){L(t,i)}}}function Wt(e){let t,n,i,l,r,c,p,o,s=e[0]&&at(e),_=e[1]&&ct(e),d=e[2]&&ft(e),f=e[3]&&ut(e);return{c(){t=w("div"),s&&s.c(),n=x(),_&&_.c(),i=x(),d&&d.c(),l=x(),f&&f.c(),r=x(),c=w("style"),c.textContent=`* {
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
}`,this.c=k,pt(c.src,p="./../css/toolbar.scss")||a(c,"src",p),a(t,"id","toolbar"),F(t,"debugbarClosed",e[4]==="closed"),F(t,"debugbarMinimized",e[4]==="minimized")},m(u,h){v(u,t,h),s&&s.m(t,null),m(t,n),_&&_.m(t,null),m(t,i),d&&d.m(t,null),m(t,l),f&&f.m(t,null),m(t,r),m(t,c),o=!0},p(u,[h]){u[0]?s?(s.p(u,h),h&1&&b(s,1)):(s=at(u),s.c(),b(s,1),s.m(t,n)):s&&(T(),g(s,1,1,()=>{s=null}),j()),u[1]?_?(_.p(u,h),h&2&&b(_,1)):(_=ct(u),_.c(),b(_,1),_.m(t,i)):_&&(T(),g(_,1,1,()=>{_=null}),j()),u[2]?d?(d.p(u,h),h&4&&b(d,1)):(d=ft(u),d.c(),b(d,1),d.m(t,l)):d&&(T(),g(d,1,1,()=>{d=null}),j()),u[3]?f?(f.p(u,h),h&8&&b(f,1)):(f=ut(u),f.c(),b(f,1),f.m(t,r)):f&&(T(),g(f,1,1,()=>{f=null}),j()),(!o||h&16)&&F(t,"debugbarClosed",u[4]==="closed"),(!o||h&16)&&F(t,"debugbarMinimized",u[4]==="minimized")},i(u){o||(b(s),b(_),b(d),b(f),o=!0)},o(u){g(s),g(_),g(d),g(f),o=!1},d(u){u&&$(t),s&&s.d(),_&&_.d(),d&&d.d(),f&&f.d()}}}function qt(e,t,n){let{breakpoints:i=!1}=t,{site:l=!1}=t,{template:r=!1}=t,{cp_link:c=!1}=t,p=null;return nt(()=>{const o=document.documentElement.querySelector(".phpdebugbar");o&&new Mt(o,s=>n(4,p=s))}),e.$$set=o=>{"breakpoints"in o&&n(0,i=o.breakpoints),"site"in o&&n(1,l=o.site),"template"in o&&n(2,r=o.template),"cp_link"in o&&n(3,c=o.cp_link)},[i,l,r,c,p]}class dt extends rt{constructor(t){super(),N(this,{target:this.shadowRoot,props:wt(this.attributes),customElement:!0},qt,Wt,V,{breakpoints:0,site:1,template:2,cp_link:3},null),t&&(t.target&&v(t.target,this,t.anchor),t.props&&(this.$set(t.props),M()))}static get observedAttributes(){return["breakpoints","site","template","cp_link"]}get breakpoints(){return this.$$.ctx[0]}set breakpoints(t){this.$$set({breakpoints:t}),M()}get site(){return this.$$.ctx[1]}set site(t){this.$$set({site:t}),M()}get template(){return this.$$.ctx[2]}set template(t){this.$$set({template:t}),M()}get cp_link(){return this.$$.ctx[3]}set cp_link(t){this.$$set({cp_link:t}),M()}}return customElements.define("statamic-toolbar",dt),dt}();
