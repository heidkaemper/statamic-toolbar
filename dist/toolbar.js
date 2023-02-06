var toolbar=function(){"use strict";var Gt=Object.defineProperty;var Dt=(g,v,$)=>v in g?Gt(g,v,{enumerable:!0,configurable:!0,writable:!0,value:$}):g[v]=$;var pt=(g,v,$)=>(Dt(g,typeof v!="symbol"?v+"":v,$),$);function g(){}function v(e,t){for(const n in t)e[n]=t[n];return e}function $(e){return e()}function Y(){return Object.create(null)}function C(e){e.forEach($)}function F(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let G;function _t(e,t){return G||(G=document.createElement("a")),G.href=t,e===G.href}function tt(e){return Object.keys(e).length===0}function mt(e,t,n,i){if(e){const l=et(e,t,n,i);return e[0](l)}}function et(e,t,n,i){return e[1]&&i?v(n.ctx.slice(),e[1](i(t))):n.ctx}function bt(e,t,n,i){if(e[2]&&i){const l=e[2](i(n));if(t.dirty===void 0)return l;if(typeof l=="object"){const r=[],c=Math.max(t.dirty.length,l.length);for(let p=0;p<c;p+=1)r[p]=t.dirty[p]|l[p];return r}return t.dirty|l}return t.dirty}function gt(e,t,n,i,l,r){if(l){const c=et(t,n,i,r);e.p(c,l)}}function wt(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}function m(e,t){e.appendChild(t)}function y(e,t,n){e.insertBefore(t,n||null)}function x(e){e.parentNode&&e.parentNode.removeChild(e)}function k(e){return document.createElement(e)}function z(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function Z(e){return document.createTextNode(e)}function M(){return Z(" ")}function nt(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function kt(e){return Array.from(e.childNodes)}function K(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function D(e,t,n){e.classList[n?"add":"remove"](t)}function vt(e){const t={};for(const n of e)t[n.name]=n.value;return t}let T;function j(e){T=e}function $t(){if(!T)throw new Error("Function called outside component initialization");return T}function it(e){$t().$$.on_mount.push(e)}const L=[],lt=[],P=[],rt=[],yt=Promise.resolve();let Q=!1;function xt(){Q||(Q=!0,yt.then(E))}function R(e){P.push(e)}const X=new Set;let V=0;function E(){if(V!==0)return;const e=T;do{try{for(;V<L.length;){const t=L[V];V++,j(t),zt(t.$$)}}catch(t){throw L.length=0,V=0,t}for(j(null),L.length=0,V=0;lt.length;)lt.pop()();for(let t=0;t<P.length;t+=1){const n=P[t];X.has(n)||(X.add(n),n())}P.length=0}while(L.length);for(;rt.length;)rt.pop()();Q=!1,X.clear(),j(e)}function zt(e){if(e.fragment!==null){e.update(),C(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(R)}}const U=new Set;let S;function O(){S={r:0,c:[],p:S}}function N(){S.r||C(S.c),S=S.p}function b(e,t){e&&e.i&&(U.delete(e),e.i(t))}function w(e,t,n,i){if(e&&e.o){if(U.has(e))return;U.add(e),S.c.push(()=>{U.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function I(e){e&&e.c()}function W(e,t,n,i){const{fragment:l,after_update:r}=e.$$;l&&l.m(t,n),i||R(()=>{const c=e.$$.on_mount.map($).filter(F);e.$$.on_destroy?e.$$.on_destroy.push(...c):C(c),e.$$.on_mount=[]}),r.forEach(R)}function A(e,t){const n=e.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Mt(e,t){e.$$.dirty[0]===-1&&(L.push(e),xt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function q(e,t,n,i,l,r,c,p=[-1]){const o=T;j(e);const s=e.$$={fragment:null,ctx:[],props:r,update:g,not_equal:l,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:Y(),dirty:p,skip_bound:!1,root:t.target||o.$$.root};c&&c(s.root);let _=!1;if(s.ctx=n?n(e,t.props||{},(d,f,...u)=>{const h=u.length?u[0]:f;return s.ctx&&l(s.ctx[d],s.ctx[d]=h)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](h),_&&Mt(e,d)),f}):[],s.update(),_=!0,C(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){const d=kt(t.target);s.fragment&&s.fragment.l(d),d.forEach(x)}else s.fragment&&s.fragment.c();t.intro&&b(e.$$.fragment),W(e,t.target,t.anchor,t.customElement),E()}j(o)}let st;typeof HTMLElement=="function"&&(st=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map($).filter(F);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){C(this.$$.on_disconnect)}$destroy(){A(this,1),this.$destroy=g}$on(e,t){if(!F(t))return g;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});class J{$destroy(){A(this,1),this.$destroy=g}$on(t,n){if(!F(n))return g;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!tt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class Ct{constructor(t,n){pt(this,"setStatus",function(t){return t.classList.contains("phpdebugbar-closed")?this.callback("closed"):this.callback("minimized")});this.callback=n,new MutationObserver(i=>{i.forEach(l=>{l.attributeName==="class"&&this.setStatus(l.target)})}).observe(t,{attributes:!0}),this.setStatus(t)}}function ot(e){let t,n;const i=e[6].default,l=mt(i,e,e[5],null);return{c(){t=k("span"),l&&l.c(),a(t,"class","breakpoints")},m(r,c){y(r,t,c),l&&l.m(t,null),n=!0},p(r,c){l&&l.p&&(!n||c&32)&&gt(l,i,r,r[5],n?bt(i,r[5],c,null):wt(r[5]),null)},i(r){n||(b(l,r),n=!0)},o(r){w(l,r),n=!1},d(r){r&&x(t),l&&l.d(r)}}}function at(e){let t,n,i;return{c(){t=k("span"),n=Z(e[0]),i=Z(" px"),a(t,"class","screen_width")},m(l,r){y(l,t,r),m(t,n),m(t,i)},p(l,r){r&1&&K(n,l[0])},d(l){l&&x(t)}}}function Et(e){let t,n,i,l,r,c,p,o,s,_,d;R(e[7]);let f=(e[1]==="labels"||e[1]==="both")&&ot(e),u=(e[1]==="width"||e[1]==="both")&&at(e);return{c(){t=k("div"),n=z("svg"),i=z("path"),l=M(),r=k("span"),f&&f.c(),c=M(),u&&u.c(),a(i,"d","M26 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2ZM6 6v20h20V6Z M22 16h2V8h-8v2h6v6zM8 24h8v-2h-6v-6H8v8z"),a(n,"xmlns","http://www.w3.org/2000/svg"),a(n,"viewBox","0 0 32 32"),a(n,"fill","currentColor"),a(n,"class","cell_icon"),a(r,"class","cell_content cell_breakpoint_indicator"),a(t,"role",p=e[2]?"button":"none"),a(t,"title",o=e[1]==="width"?"Window width":"Current Breakpoint"),a(t,"class","cell")},m(h,H){y(h,t,H),m(t,n),m(n,i),m(t,l),m(t,r),f&&f.m(r,null),m(r,c),u&&u.m(r,null),s=!0,_||(d=[nt(window,"resize",e[7]),nt(t,"click",e[3])],_=!0)},p(h,[H]){h[1]==="labels"||h[1]==="both"?f?(f.p(h,H),H&2&&b(f,1)):(f=ot(h),f.c(),b(f,1),f.m(r,c)):f&&(O(),w(f,1,1,()=>{f=null}),N()),h[1]==="width"||h[1]==="both"?u?u.p(h,H):(u=at(h),u.c(),u.m(r,null)):u&&(u.d(1),u=null),(!s||H&4&&p!==(p=h[2]?"button":"none"))&&a(t,"role",p),(!s||H&2&&o!==(o=h[1]==="width"?"Window width":"Current Breakpoint"))&&a(t,"title",o)},i(h){s||(b(f),s=!0)},o(h){w(f),s=!1},d(h){h&&x(t),f&&f.d(),u&&u.d(),_=!1,C(d)}}}function St(e,t,n){let i,{$$slots:l={},$$scope:r}=t,{breakpoints:c}=t,p=0,o="width";it(()=>{c==="labels"&&n(1,o="labels")});function s(){if(i)switch(o){case"labels":return n(1,o="both");case"both":return n(1,o="width");default:return n(1,o="labels")}}function _(){n(0,p=window.innerWidth)}return e.$$set=d=>{"breakpoints"in d&&n(4,c=d.breakpoints),"$$scope"in d&&n(5,r=d.$$scope)},e.$$.update=()=>{e.$$.dirty&16&&n(2,i=c==="labels")},[p,o,i,s,c,r,l,_]}class Ht extends J{constructor(t){super(),q(this,t,St,Et,B,{breakpoints:4})}}function Lt(e){let t,n,i,l,r,c,p;return{c(){t=k("div"),n=z("svg"),i=z("path"),l=M(),r=k("span"),c=Z(e[0]),a(i,"d","M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z M10 18h8v2h-8zm0-5h12v2H10zm0 10h5v2h-5z"),a(n,"xmlns","http://www.w3.org/2000/svg"),a(n,"viewBox","0 0 32 32"),a(n,"fill","currentColor"),a(n,"class","cell_icon"),a(r,"class","cell_content"),a(t,"title",p="Template: "+e[0]),a(t,"class","cell")},m(o,s){y(o,t,s),m(t,n),m(n,i),m(t,l),m(t,r),m(r,c)},p(o,[s]){s&1&&K(c,o[0]),s&1&&p!==(p="Template: "+o[0])&&a(t,"title",p)},i:g,o:g,d(o){o&&x(t)}}}function Vt(e,t,n){let{template:i}=t;return e.$$set=l=>{"template"in l&&n(0,i=l.template)},[i]}class At extends J{constructor(t){super(),q(this,t,Vt,Lt,B,{template:0})}}function Bt(e){let t,n,i;return{c(){t=k("a"),n=z("svg"),i=z("path"),a(i,"d","M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6a2 2 0 0 0-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10 3.6 3.6-10 10H6z"),a(n,"xmlns","http://www.w3.org/2000/svg"),a(n,"viewBox","0 0 32 32"),a(n,"fill","currentColor"),a(n,"class","cell_icon"),a(t,"href",e[0]),a(t,"target","_blank"),a(t,"rel","noreferrer"),a(t,"title","Edit this page"),a(t,"class","cell")},m(l,r){y(l,t,r),m(t,n),m(n,i)},p(l,[r]){r&1&&a(t,"href",l[0])},i:g,o:g,d(l){l&&x(t)}}}function Zt(e,t,n){let{cp_link:i}=t;return e.$$set=l=>{"cp_link"in l&&n(0,i=l.cp_link)},[i]}class Tt extends J{constructor(t){super(),q(this,t,Zt,Bt,B,{cp_link:0})}}function jt(e){let t,n,i,l,r,c,p;return{c(){t=k("div"),n=z("svg"),i=z("path"),l=M(),r=k("span"),c=Z(e[0]),a(i,"d","M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2ZM4 16a12 12 0 0 1 4-9v2a2 2 0 0 0 2 2h3.4a2 2 0 0 0 1.8-1.1l.4-.9H18v4h-4.8a2 2 0 0 0-.9.2l-3.2 1.6A2 2 0 0 0 8 16.6v3.7a2 2 0 0 0 1.3 1.9l3.8 1.5.7 4A12 12 0 0 1 4 16Zm11.8 12-1-5.7-4.8-2v-3.7l3.2-1.6H20V7h-5.6l-1 2H10V5.6A12 12 0 0 1 27.3 12H22v4l1 3.8-2 2.9v4.2a12 12 0 0 1-5 1.1h-.2Zm7.2-2.3v-2.4l1.6-2.4a2 2 0 0 0 .3-1.6L24 16v-2h3.8A11.8 11.8 0 0 1 23 25.7Z"),a(n,"xmlns","http://www.w3.org/2000/svg"),a(n,"viewBox","0 0 32 32"),a(n,"fill","currentColor"),a(n,"class","cell_icon"),a(r,"class","cell_content"),a(t,"title",p="Site: "+e[0]),a(t,"class","cell")},m(o,s){y(o,t,s),m(t,n),m(n,i),m(t,l),m(t,r),m(r,c)},p(o,[s]){s&1&&K(c,o[0]),s&1&&p!==(p="Site: "+o[0])&&a(t,"title",p)},i:g,o:g,d(o){o&&x(t)}}}function Ot(e,t,n){let{site:i}=t;return e.$$set=l=>{"site"in l&&n(0,i=l.site)},[i]}class Nt extends J{constructor(t){super(),q(this,t,Ot,jt,B,{site:0})}}function ct(e){let t,n;return t=new Ht({props:{breakpoints:e[0],$$slots:{default:[Wt]},$$scope:{ctx:e}}}),{c(){I(t.$$.fragment)},m(i,l){W(t,i,l),n=!0},p(i,l){const r={};l&1&&(r.breakpoints=i[0]),l&32&&(r.$$scope={dirty:l,ctx:i}),t.$set(r)},i(i){n||(b(t.$$.fragment,i),n=!0)},o(i){w(t.$$.fragment,i),n=!1},d(i){A(t,i)}}}function Wt(e){let t;return{c(){t=k("slot")},m(n,i){y(n,t,i)},p:g,d(n){n&&x(t)}}}function ft(e){let t,n;return t=new Nt({props:{site:e[1]}}),{c(){I(t.$$.fragment)},m(i,l){W(t,i,l),n=!0},p(i,l){const r={};l&2&&(r.site=i[1]),t.$set(r)},i(i){n||(b(t.$$.fragment,i),n=!0)},o(i){w(t.$$.fragment,i),n=!1},d(i){A(t,i)}}}function ut(e){let t,n;return t=new At({props:{template:e[2]}}),{c(){I(t.$$.fragment)},m(i,l){W(t,i,l),n=!0},p(i,l){const r={};l&4&&(r.template=i[2]),t.$set(r)},i(i){n||(b(t.$$.fragment,i),n=!0)},o(i){w(t.$$.fragment,i),n=!1},d(i){A(t,i)}}}function dt(e){let t,n;return t=new Tt({props:{cp_link:e[3]}}),{c(){I(t.$$.fragment)},m(i,l){W(t,i,l),n=!0},p(i,l){const r={};l&8&&(r.cp_link=i[3]),t.$set(r)},i(i){n||(b(t.$$.fragment,i),n=!0)},o(i){w(t.$$.fragment,i),n=!1},d(i){A(t,i)}}}function qt(e){let t,n,i,l,r,c,p,o,s=e[0]&&ct(e),_=e[1]&&ft(e),d=e[2]&&ut(e),f=e[3]&&dt(e);return{c(){t=k("div"),s&&s.c(),n=M(),_&&_.c(),i=M(),d&&d.c(),l=M(),f&&f.c(),r=M(),c=k("style"),c.textContent=`* {
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
}`,this.c=g,_t(c.src,p="./../css/toolbar.scss")||a(c,"src",p),a(t,"id","toolbar"),D(t,"debugbarClosed",e[4]==="closed"),D(t,"debugbarMinimized",e[4]==="minimized")},m(u,h){y(u,t,h),s&&s.m(t,null),m(t,n),_&&_.m(t,null),m(t,i),d&&d.m(t,null),m(t,l),f&&f.m(t,null),m(t,r),m(t,c),o=!0},p(u,[h]){u[0]?s?(s.p(u,h),h&1&&b(s,1)):(s=ct(u),s.c(),b(s,1),s.m(t,n)):s&&(O(),w(s,1,1,()=>{s=null}),N()),u[1]?_?(_.p(u,h),h&2&&b(_,1)):(_=ft(u),_.c(),b(_,1),_.m(t,i)):_&&(O(),w(_,1,1,()=>{_=null}),N()),u[2]?d?(d.p(u,h),h&4&&b(d,1)):(d=ut(u),d.c(),b(d,1),d.m(t,l)):d&&(O(),w(d,1,1,()=>{d=null}),N()),u[3]?f?(f.p(u,h),h&8&&b(f,1)):(f=dt(u),f.c(),b(f,1),f.m(t,r)):f&&(O(),w(f,1,1,()=>{f=null}),N()),(!o||h&16)&&D(t,"debugbarClosed",u[4]==="closed"),(!o||h&16)&&D(t,"debugbarMinimized",u[4]==="minimized")},i(u){o||(b(s),b(_),b(d),b(f),o=!0)},o(u){w(s),w(_),w(d),w(f),o=!1},d(u){u&&x(t),s&&s.d(),_&&_.d(),d&&d.d(),f&&f.d()}}}function Ft(e,t,n){let{breakpoints:i=!1}=t,{site:l=!1}=t,{template:r=!1}=t,{cp_link:c=!1}=t,p=null;return it(()=>{const o=document.documentElement.querySelector(".phpdebugbar");o&&new Ct(o,s=>n(4,p=s))}),e.$$set=o=>{"breakpoints"in o&&n(0,i=o.breakpoints),"site"in o&&n(1,l=o.site),"template"in o&&n(2,r=o.template),"cp_link"in o&&n(3,c=o.cp_link)},[i,l,r,c,p]}class ht extends st{constructor(t){super(),q(this,{target:this.shadowRoot,props:vt(this.attributes),customElement:!0},Ft,qt,B,{breakpoints:0,site:1,template:2,cp_link:3},null),t&&(t.target&&y(t.target,this,t.anchor),t.props&&(this.$set(t.props),E()))}static get observedAttributes(){return["breakpoints","site","template","cp_link"]}get breakpoints(){return this.$$.ctx[0]}set breakpoints(t){this.$$set({breakpoints:t}),E()}get site(){return this.$$.ctx[1]}set site(t){this.$$set({site:t}),E()}get template(){return this.$$.ctx[2]}set template(t){this.$$set({template:t}),E()}get cp_link(){return this.$$.ctx[3]}set cp_link(t){this.$$set({cp_link:t}),E()}}return customElements.define("statamic-toolbar",ht),ht}();
