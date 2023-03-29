var toolbar=function(){"use strict";function k(){}function Q(t){return t()}function te(){return Object.create(null)}function E(t){t.forEach(Q)}function D(t){return typeof t=="function"}function L(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let G;function Ce(t,e){return G||(G=document.createElement("a")),G.href=e,t===G.href}function ne(t){return Object.keys(t).length===0}function m(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function S(t){t.parentNode&&t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function C(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function M(){return A(" ")}function K(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function o(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Me(t){return Array.from(t.childNodes)}function X(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function j(t,e,n){t.classList[n?"add":"remove"](e)}function Ee(t){const e={};for(const n of t)e[n.name]=n.value;return e}let N;function Z(t){N=t}function xe(){if(!N)throw new Error("Function called outside component initialization");return N}function ie(t){xe().$$.on_mount.push(t)}const T=[],re=[],J=[],oe=[],He=Promise.resolve();let Y=!1;function Le(){Y||(Y=!0,He.then(U))}function R(t){J.push(t)}const ee=new Set;let z=0;function U(){if(z!==0)return;const t=N;do{try{for(;z<T.length;){const e=T[z];z++,Z(e),je(e.$$)}}catch(e){throw T.length=0,z=0,e}for(Z(null),T.length=0,z=0;re.length;)re.pop()();for(let e=0;e<J.length;e+=1){const n=J[e];ee.has(n)||(ee.add(n),n())}J.length=0}while(T.length);for(;oe.length;)oe.pop()();Y=!1,ee.clear(),Z(t)}function je(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}const P=new Set;let x;function V(){x={r:0,c:[],p:x}}function F(){x.r||E(x.c),x=x.p}function _(t,e){t&&t.i&&(P.delete(t),t.i(e))}function $(t,e,n,i){if(t&&t.o){if(P.has(t))return;P.add(t),x.c.push(()=>{P.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function I(t){t&&t.c()}function O(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||R(()=>{const u=t.$$.on_mount.map(Q).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...u):E(u),t.$$.on_mount=[]}),l.forEach(R)}function H(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Te(t,e){t.$$.dirty[0]===-1&&(T.push(t),Le(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(t,e,n,i,r,l,u,p=[-1]){const f=N;Z(t);const s=t.$$={fragment:null,ctx:[],props:l,update:k,not_equal:r,bound:te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:te(),dirty:p,skip_bound:!1,root:e.target||f.$$.root};u&&u(s.root);let c=!1;if(s.ctx=n?n(t,e.props||{},(a,d,...h)=>{const g=h.length?h[0]:d;return s.ctx&&r(s.ctx[a],s.ctx[a]=g)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](g),c&&Te(t,a)),d}):[],s.update(),c=!0,E(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){const a=Me(e.target);s.fragment&&s.fragment.l(a),a.forEach(S)}else s.fragment&&s.fragment.c();e.intro&&_(t.$$.fragment),O(t,e.target,e.anchor,e.customElement),U()}Z(f)}let le;typeof HTMLElement=="function"&&(le=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(Q).filter(D);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){E(this.$$.on_disconnect)}$destroy(){H(this,1),this.$destroy=k}$on(t,e){if(!D(e))return k;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const i=n.indexOf(e);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class W{$destroy(){H(this,1),this.$destroy=k}$on(e,n){if(!D(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ne(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}class ze{constructor(e,n){this.callback=n,new MutationObserver(i=>{i.forEach(r=>{r.attributeName==="class"&&this.setStatus(r.target)})}).observe(e,{attributes:!0}),this.setStatus(e)}setStatus(e){return e.classList.contains("phpdebugbar-closed")?this.callback("closed"):this.callback("minimized")}}const q={get(t){return JSON.parse(localStorage.getItem(t))},set(t,e){localStorage.setItem(t,JSON.stringify(e))},has(t){return localStorage.getItem(t)!==null}};function se(t){let e,n=t[4]()+"";return{c(){e=v("span"),o(e,"class","breakpoints")},m(i,r){y(i,e,r),e.innerHTML=n},p:k,d(i){i&&S(e)}}}function ce(t){let e,n,i;return{c(){e=v("span"),n=A(t[0]),i=A(" px"),o(e,"class","screen_width")},m(r,l){y(r,e,l),m(e,n),m(e,i)},p(r,l){l&1&&X(n,r[0])},d(r){r&&S(e)}}}function Oe(t){let e,n,i,r,l,u,p,f,s;R(t[6]);let c=(t[1]==="labels"||t[1]==="both")&&se(t),a=(t[1]==="width"||t[1]==="both")&&ce(t);return{c(){e=v("div"),n=C("svg"),i=C("path"),r=M(),l=v("span"),c&&c.c(),u=M(),a&&a.c(),o(i,"d","M1.25 8.75h12.5M5 13.13h5m-5.75-1.88h6.5c1.05 0 1.58 0 1.98-.2.35-.18.64-.47.82-.82.2-.4.2-.93.2-1.98V4.87c0-1.05 0-1.57-.2-1.97a1.87 1.87 0 0 0-.82-.82c-.4-.2-.93-.2-1.98-.2h-6.5c-1.05 0-1.58 0-1.98.2-.35.18-.64.47-.82.82-.2.4-.2.92-.2 1.98v3.37c0 1.05 0 1.58.2 1.98.18.35.47.64.82.82.4.2.93.2 1.98.2Z"),o(n,"xmlns","http://www.w3.org/2000/svg"),o(n,"fill","none"),o(n,"stroke","currentColor"),o(n,"stroke-linecap","round"),o(n,"stroke-linejoin","round"),o(n,"viewBox","0 0 15 15"),o(n,"class","cell_icon"),o(l,"class","cell_content cell_breakpoint_indicator"),o(e,"role",t[2]?"button":"none"),o(e,"title",p=t[1]==="width"?"Window width":"Current Breakpoint"),o(e,"class","cell")},m(d,h){y(d,e,h),m(e,n),m(n,i),m(e,r),m(e,l),c&&c.m(l,null),m(l,u),a&&a.m(l,null),f||(s=[K(window,"resize",t[6]),K(e,"click",t[3])],f=!0)},p(d,[h]){d[1]==="labels"||d[1]==="both"?c?c.p(d,h):(c=se(d),c.c(),c.m(l,u)):c&&(c.d(1),c=null),d[1]==="width"||d[1]==="both"?a?a.p(d,h):(a=ce(d),a.c(),a.m(l,null)):a&&(a.d(1),a=null),h&2&&p!==(p=d[1]==="width"?"Window width":"Current Breakpoint")&&o(e,"title",p)},i:k,o:k,d(d){d&&S(e),c&&c.d(),a&&a.d(),f=!1,E(s)}}}function Be(t,e,n){let{breakpoints:i}=e,r=0,l=Object.keys(i).length>=1,u="width";l&&(u=q.get("statamic.toolbar.breakpoints.type")??"labels");function p(){if(l){switch(u){case"labels":n(1,u="both");break;case"both":n(1,u="width");break;default:n(1,u="labels")}q.set("statamic.toolbar.breakpoints.type",u)}}function f(){let c='.breakpoints::before { content: "\\2014" }';return Object.entries(i).forEach(function(a){c+=`@media (${a[1]}) { .breakpoints::before { content: "${a[0]}" } }`}),`<style>${c}</style>`}function s(){n(0,r=window.innerWidth)}return t.$$set=c=>{"breakpoints"in c&&n(5,i=c.breakpoints)},[r,u,l,p,f,i,s]}class Ae extends W{constructor(e){super(),B(this,e,Be,Oe,L,{breakpoints:5})}}function Ne(t){let e;return{c(){e=C("path"),o(e,"d","M1.51 7.95c-.08-.14-.13-.2-.15-.31a.73.73 0 0 1 0-.28c.02-.1.07-.17.15-.3.7-1.12 2.8-3.93 5.99-3.93 3.2 0 5.28 2.81 5.99 3.92.08.14.13.2.15.31.02.08.02.2 0 .28-.02.1-.07.17-.15.3-.7 1.12-2.8 3.93-5.99 3.93-3.19 0-5.28-2.81-5.99-3.92Z M7.5 9.38a1.87 1.87 0 1 0 0-3.75 1.87 1.87 0 0 0 0 3.75Z")},m(n,i){y(n,e,i)},d(n){n&&S(e)}}}function Ze(t){let e;return{c(){e=C("path"),o(e,"d","M6.71 3.18c.26-.03.52-.06.79-.06 3.2 0 5.28 2.82 5.99 3.93.08.14.13.2.15.31.02.08.02.2 0 .28-.02.1-.07.17-.15.3-.19.3-.48.72-.85 1.17M4.2 4.2a10 10 0 0 0-2.69 2.85c-.08.14-.13.2-.15.31a.73.73 0 0 0 0 .28c.02.1.07.17.15.3.7 1.12 2.8 3.93 5.99 3.93 1.29 0 2.4-.45 3.3-1.07M1.89 1.87l11.25 11.25M6.17 6.17a1.87 1.87 0 0 0 1.33 3.2c.52 0 .99-.2 1.33-.54")},m(n,i){y(n,e,i)},d(n){n&&S(e)}}}function Ve(t){let e,n,i,r,l;function u(s,c){return s[0]?Ze:Ne}let p=u(t),f=p(t);return{c(){e=v("div"),n=C("svg"),f.c(),o(n,"xmlns","http://www.w3.org/2000/svg"),o(n,"fill","none"),o(n,"stroke","currentColor"),o(n,"stroke-linecap","round"),o(n,"stroke-linejoin","round"),o(n,"viewBox","0 0 15 15"),o(n,"class","cell_icon"),o(e,"role","button"),o(e,"title",i=t[0]?"Show Toolbar":"Hide Toolbar"),o(e,"class","cell")},m(s,c){y(s,e,c),m(e,n),f.m(n,null),r||(l=K(e,"click",t[1]),r=!0)},p(s,[c]){p!==(p=u(s))&&(f.d(1),f=p(s),f&&(f.c(),f.m(n,null))),c&1&&i!==(i=s[0]?"Show Toolbar":"Hide Toolbar")&&o(e,"title",i)},i:k,o:k,d(s){s&&S(e),f.d(),r=!1,l()}}}function Fe(t,e,n){let{callback:i}=e,r=!1;ie(()=>{q.has("statamic.toolbar.hidden")&&(n(0,r=q.get("statamic.toolbar.hidden")),setTimeout(()=>i(r),500))});function l(){n(0,r=!r),q.set("statamic.toolbar.hidden",r),i(r)}return t.$$set=u=>{"callback"in u&&n(2,i=u.callback)},[r,l,i]}class Ie extends W{constructor(e){super(),B(this,e,Fe,Ve,L,{callback:2})}}function We(t){let e,n,i,r,l,u,p;return{c(){e=v("div"),n=C("svg"),i=C("path"),r=M(),l=v("span"),u=A(t[0]),o(i,"d","M8.75 1.42V4c0 .35 0 .53.07.66.06.12.15.21.27.27.13.07.31.07.66.07h2.58M10 8.13H5m5 2.5H5m1.25-5H5m3.75-4.38H5.5c-1.05 0-1.58 0-1.98.2-.35.18-.64.47-.82.82-.2.4-.2.93-.2 1.98v6.5c0 1.05 0 1.58.2 1.98.18.35.47.64.82.82.4.2.93.2 1.98.2h4c1.05 0 1.58 0 1.98-.2.35-.18.64-.47.82-.82.2-.4.2-.93.2-1.98V5L8.75 1.25Z"),o(n,"xmlns","http://www.w3.org/2000/svg"),o(n,"fill","none"),o(n,"stroke","currentColor"),o(n,"stroke-linecap","round"),o(n,"stroke-linejoin","round"),o(n,"viewBox","0 0 15 15"),o(n,"class","cell_icon"),o(l,"class","cell_content"),o(e,"title",p="Template: "+t[0]),o(e,"class","cell")},m(f,s){y(f,e,s),m(e,n),m(n,i),m(e,r),m(e,l),m(l,u)},p(f,[s]){s&1&&X(u,f[0]),s&1&&p!==(p="Template: "+f[0])&&o(e,"title",p)},i:k,o:k,d(f){f&&S(e)}}}function qe(t,e,n){let{template:i}=e;return t.$$set=r=>{"template"in r&&n(0,i=r.template)},[i]}class De extends W{constructor(e){super(),B(this,e,qe,We,L,{template:0})}}function Ge(t){let e,n,i;return{c(){e=v("a"),n=C("svg"),i=C("path"),o(i,"d","M13.13 13.13h-5m-6.57.3 3.47-1.33c.22-.08.33-.12.44-.18.09-.05.18-.1.26-.17.1-.07.18-.16.35-.32l7.04-7.05a1.77 1.77 0 1 0-2.5-2.5L3.58 8.93a3.9 3.9 0 0 0-.33.34l-.17.26c-.06.1-.1.22-.18.44l-1.34 3.47Zm0 0 1.29-3.34c.1-.24.14-.36.22-.41a.31.31 0 0 1 .23-.05c.1.02.19.1.37.29l1.41 1.41c.18.18.27.27.3.37 0 .08-.01.17-.06.23-.05.08-.17.13-.41.22l-3.35 1.29Z"),o(n,"xmlns","http://www.w3.org/2000/svg"),o(n,"fill","none"),o(n,"stroke","currentColor"),o(n,"stroke-linecap","round"),o(n,"stroke-linejoin","round"),o(n,"viewBox","0 0 15 15"),o(n,"class","cell_icon"),o(e,"href",t[0]),o(e,"target","_blank"),o(e,"rel","noreferrer"),o(e,"title","Edit this page"),o(e,"class","cell")},m(r,l){y(r,e,l),m(e,n),m(n,i)},p(r,[l]){l&1&&o(e,"href",r[0])},i:k,o:k,d(r){r&&S(e)}}}function Je(t,e,n){let{cp_link:i}=e;return t.$$set=r=>{"cp_link"in r&&n(0,i=r.cp_link)},[i]}class Re extends W{constructor(e){super(),B(this,e,Je,Ge,L,{cp_link:0})}}function Ue(t){let e,n,i,r,l,u,p;return{c(){e=v("div"),n=C("svg"),i=C("path"),r=M(),l=v("span"),u=A(t[0]),o(i,"d","M9.38 1.54a6.25 6.25 0 1 0 3.62 3m-2.38-.95h0M6.57 13.68V12.3c0-.07.03-.14.08-.2l1.55-1.81a.31.31 0 0 0-.08-.48L6.32 8.8a.31.31 0 0 1-.11-.11L5.04 6.64a.31.31 0 0 0-.3-.16l-3.45.3m11.84-3.03c0 1.38-1.26 2.5-2.5 3.75-1.26-1.25-2.5-2.37-2.5-3.75a2.5 2.5 0 0 1 5 0Zm-2.35-.16a.16.16 0 1 1-.31 0 .16.16 0 0 1 .31 0Z"),o(n,"xmlns","http://www.w3.org/2000/svg"),o(n,"fill","none"),o(n,"stroke","currentColor"),o(n,"stroke-linecap","round"),o(n,"stroke-linejoin","round"),o(n,"viewBox","0 0 15 15"),o(n,"class","cell_icon"),o(l,"class","cell_content"),o(e,"title",p="Site: "+t[0]),o(e,"class","cell")},m(f,s){y(f,e,s),m(e,n),m(n,i),m(e,r),m(e,l),m(l,u)},p(f,[s]){s&1&&X(u,f[0]),s&1&&p!==(p="Site: "+f[0])&&o(e,"title",p)},i:k,o:k,d(f){f&&S(e)}}}function Pe(t,e,n){let{site:i}=e;return t.$$set=r=>{"site"in r&&n(0,i=r.site)},[i]}class Qe extends W{constructor(e){super(),B(this,e,Pe,Ue,L,{site:0})}}function ae(t){let e,n;return e=new Ae({props:{breakpoints:t[0].breakpoints}}),{c(){I(e.$$.fragment)},m(i,r){O(e,i,r),n=!0},p(i,r){const l={};r&1&&(l.breakpoints=i[0].breakpoints),e.$set(l)},i(i){n||(_(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){H(e,i)}}}function fe(t){let e,n;return e=new Qe({props:{site:t[0].site}}),{c(){I(e.$$.fragment)},m(i,r){O(e,i,r),n=!0},p(i,r){const l={};r&1&&(l.site=i[0].site),e.$set(l)},i(i){n||(_(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){H(e,i)}}}function ue(t){let e,n;return e=new De({props:{template:t[0].template}}),{c(){I(e.$$.fragment)},m(i,r){O(e,i,r),n=!0},p(i,r){const l={};r&1&&(l.template=i[0].template),e.$set(l)},i(i){n||(_(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){H(e,i)}}}function de(t){let e,n;return e=new Re({props:{cp_link:t[0].cp_link}}),{c(){I(e.$$.fragment)},m(i,r){O(e,i,r),n=!0},p(i,r){const l={};r&1&&(l.cp_link=i[0].cp_link),e.$set(l)},i(i){n||(_(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){H(e,i)}}}function pe(t){let e,n;return e=new Ie({props:{callback:t[4]}}),{c(){I(e.$$.fragment)},m(i,r){O(e,i,r),n=!0},p(i,r){const l={};r&2&&(l.callback=i[4]),e.$set(l)},i(i){n||(_(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){H(e,i)}}}function Ke(t){var me,be,_e,ge,ke;let e,n,i,r,l,u,p,f,s,c=((me=t[0])==null?void 0:me.breakpoints)&&ae(t),a=((be=t[0])==null?void 0:be.site)&&fe(t),d=((_e=t[0])==null?void 0:_e.template)&&ue(t),h=((ge=t[0])==null?void 0:ge.cp_link)&&de(t),g=((ke=t[0])==null?void 0:ke.visibility)&&pe(t);return{c(){e=v("div"),c&&c.c(),n=M(),a&&a.c(),i=M(),d&&d.c(),r=M(),h&&h.c(),l=M(),g&&g.c(),u=M(),p=v("style"),p.textContent=`@keyframes loaded {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
#toolbar {
  --color-text: #555;
  --color-text-shadow: #fff;
  --color-background: #fff;
  --color-cell-border: #ddd;
  --color-cell-hover: #ebebeb;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5999999;
  font: normal normal 13px/1.1 "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Verdana, sans-serif;
  color: var(--color-text);
  text-shadow: 1px 1px var(--color-text-shadow);
  background: var(--color-background);
  border-top: 3px solid #FF269E;
  border-top-right-radius: 5px;
  overflow: hidden;
  height: 32px;
  display: flex;
  align-items: stretch;
  animation: loaded 300ms;
}
@media (prefers-color-scheme: dark) {
  #toolbar {
    --color-text: #EDF2F7;
    --color-text-shadow: #4A5568;
    --color-background: #1A202C;
    --color-cell-border: #2D3748;
    --color-cell-hover: #4A5568;
  }
}
#toolbar * {
  box-sizing: border-box;
  outline: none;
}
#toolbar .cell {
  appearance: none;
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 4px;
  border-right: 1px solid var(--color-cell-border);
  padding: 0 8px;
  min-width: 34px;
  color: inherit;
  text-decoration: none;
  user-select: none;
}
#toolbar .cell[href]:hover, #toolbar .cell[role=button]:hover {
  background: var(--color-cell-hover);
  cursor: pointer;
}
#toolbar .cell_icon {
  width: 15px;
  height: 15px;
  margin: -0.1em 0 0;
  flex-shrink: 0;
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
  opacity: 0.6;
  letter-spacing: -0.05em;
  word-spacing: -0.1em;
}
#toolbar .cell_breakpoint_indicator .breakpoints + .screen_width::before {
  content: "|";
  margin: 0 4px;
}
#toolbar.isHidden {
  opacity: 0;
  transition: opacity 300ms 700ms;
}
#toolbar.isHidden:hover {
  opacity: 1;
  transition: opacity 50ms 0ms;
}
#toolbar.debugbarClosed {
  left: 40px;
}
#toolbar.debugbarOpen, #toolbar.debugbarMinimized {
  height: 30px;
  bottom: 33px;
}`,this.c=k,Ce(p.src,f="./../css/toolbar.scss")||o(p,"src",f),o(e,"id","toolbar"),j(e,"isHidden",t[1]),j(e,"debugbarClosed",t[2]==="closed"),j(e,"debugbarMinimized",t[2]==="minimized")},m(b,w){y(b,e,w),c&&c.m(e,null),m(e,n),a&&a.m(e,null),m(e,i),d&&d.m(e,null),m(e,r),h&&h.m(e,null),m(e,l),g&&g.m(e,null),m(e,u),m(e,p),s=!0},p(b,[w]){var $e,we,ve,ye,Se;($e=b[0])!=null&&$e.breakpoints?c?(c.p(b,w),w&1&&_(c,1)):(c=ae(b),c.c(),_(c,1),c.m(e,n)):c&&(V(),$(c,1,1,()=>{c=null}),F()),(we=b[0])!=null&&we.site?a?(a.p(b,w),w&1&&_(a,1)):(a=fe(b),a.c(),_(a,1),a.m(e,i)):a&&(V(),$(a,1,1,()=>{a=null}),F()),(ve=b[0])!=null&&ve.template?d?(d.p(b,w),w&1&&_(d,1)):(d=ue(b),d.c(),_(d,1),d.m(e,r)):d&&(V(),$(d,1,1,()=>{d=null}),F()),(ye=b[0])!=null&&ye.cp_link?h?(h.p(b,w),w&1&&_(h,1)):(h=de(b),h.c(),_(h,1),h.m(e,l)):h&&(V(),$(h,1,1,()=>{h=null}),F()),(Se=b[0])!=null&&Se.visibility?g?(g.p(b,w),w&1&&_(g,1)):(g=pe(b),g.c(),_(g,1),g.m(e,u)):g&&(V(),$(g,1,1,()=>{g=null}),F()),(!s||w&2)&&j(e,"isHidden",b[1]),(!s||w&4)&&j(e,"debugbarClosed",b[2]==="closed"),(!s||w&4)&&j(e,"debugbarMinimized",b[2]==="minimized")},i(b){s||(_(c),_(a),_(d),_(h),_(g),s=!0)},o(b){$(c),$(a),$(d),$(h),$(g),s=!1},d(b){b&&S(e),c&&c.d(),a&&a.d(),d&&d.d(),h&&h.d(),g&&g.d()}}}function Xe(t,e,n){let{endpoint:i}=e,r=null,l=!1,u=null;ie(()=>{fetch(i+"?origin="+encodeURIComponent(document.location.href)).then(s=>s.json()).then(s=>n(0,r=s));const f=document.documentElement.querySelector(".phpdebugbar");f&&new ze(f,s=>n(2,u=s))});const p=f=>n(1,l=f);return t.$$set=f=>{"endpoint"in f&&n(3,i=f.endpoint)},[r,l,u,i,p]}class he extends le{constructor(e){super(),B(this,{target:this.shadowRoot,props:Ee(this.attributes),customElement:!0},Xe,Ke,L,{endpoint:3},null),e&&(e.target&&y(e.target,this,e.anchor),e.props&&(this.$set(e.props),U()))}static get observedAttributes(){return["endpoint"]}get endpoint(){return this.$$.ctx[3]}set endpoint(e){this.$$set({endpoint:e}),U()}}return customElements.define("statamic-toolbar",he),he}();
