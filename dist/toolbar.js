var toolbar=function(){"use strict";function k(){}function Q(t){return t()}function te(){return Object.create(null)}function E(t){t.forEach(Q)}function G(t){return typeof t=="function"}function L(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let J;function Ce(t,e){return J||(J=document.createElement("a")),J.href=e,t===J.href}function ne(t){return Object.keys(t).length===0}function m(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function S(t){t.parentNode&&t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function C(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function M(){return N(" ")}function K(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function r(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Me(t){return Array.from(t.childNodes)}function X(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function j(t,e,n){t.classList[n?"add":"remove"](e)}function Ee(t){const e={};for(const n of t)e[n.name]=n.value;return e}let Z;function V(t){Z=t}function xe(){if(!Z)throw new Error("Function called outside component initialization");return Z}function ie(t){xe().$$.on_mount.push(t)}const T=[],le=[],R=[],re=[],He=Promise.resolve();let Y=!1;function Le(){Y||(Y=!0,He.then(D))}function U(t){R.push(t)}const ee=new Set;let z=0;function D(){if(z!==0)return;const t=Z;do{try{for(;z<T.length;){const e=T[z];z++,V(e),je(e.$$)}}catch(e){throw T.length=0,z=0,e}for(V(null),T.length=0,z=0;le.length;)le.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];ee.has(n)||(ee.add(n),n())}R.length=0}while(T.length);for(;re.length;)re.pop()();Y=!1,ee.clear(),V(t)}function je(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const P=new Set;let x;function A(){x={r:0,c:[],p:x}}function I(){x.r||E(x.c),x=x.p}function _(t,e){t&&t.i&&(P.delete(t),t.i(e))}function $(t,e,n,i){if(t&&t.o){if(P.has(t))return;P.add(t),x.c.push(()=>{P.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function W(t){t&&t.c()}function O(t,e,n,i){const{fragment:l,after_update:o}=t.$$;l&&l.m(e,n),i||U(()=>{const u=t.$$.on_mount.map(Q).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...u):E(u),t.$$.on_mount=[]}),o.forEach(U)}function H(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Te(t,e){t.$$.dirty[0]===-1&&(T.push(t),Le(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(t,e,n,i,l,o,u,p=[-1]){const f=Z;V(t);const s=t.$$={fragment:null,ctx:[],props:o,update:k,not_equal:l,bound:te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:te(),dirty:p,skip_bound:!1,root:e.target||f.$$.root};u&&u(s.root);let a=!1;if(s.ctx=n?n(t,e.props||{},(c,d,...h)=>{const g=h.length?h[0]:d;return s.ctx&&l(s.ctx[c],s.ctx[c]=g)&&(!s.skip_bound&&s.bound[c]&&s.bound[c](g),a&&Te(t,c)),d}):[],s.update(),a=!0,E(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){const c=Me(e.target);s.fragment&&s.fragment.l(c),c.forEach(S)}else s.fragment&&s.fragment.c();e.intro&&_(t.$$.fragment),O(t,e.target,e.anchor,e.customElement),D()}V(f)}let oe;typeof HTMLElement=="function"&&(oe=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(Q).filter(G);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){E(this.$$.on_disconnect)}$destroy(){H(this,1),this.$destroy=k}$on(t,e){if(!G(e))return k;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const i=n.indexOf(e);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class q{$destroy(){H(this,1),this.$destroy=k}$on(e,n){if(!G(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!ne(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}class ze{constructor(e,n){this.callback=n,new MutationObserver(i=>{i.forEach(l=>{l.attributeName==="class"&&this.setStatus(l.target)})}).observe(e,{attributes:!0}),this.setStatus(e)}setStatus(e){return e.classList.contains("phpdebugbar-closed")?this.callback("closed"):this.callback("minimized")}}const F={get(t){return JSON.parse(localStorage.getItem(t))},set(t,e){localStorage.setItem(t,JSON.stringify(e))},has(t){return localStorage.getItem(t)!==null}};function se(t){let e,n=t[4]()+"";return{c(){e=v("span"),r(e,"class","breakpoints")},m(i,l){y(i,e,l),e.innerHTML=n},p:k,d(i){i&&S(e)}}}function ae(t){let e,n,i;return{c(){e=v("span"),n=N(t[0]),i=N(" px"),r(e,"class","screen_width")},m(l,o){y(l,e,o),m(e,n),m(e,i)},p(l,o){o&1&&X(n,l[0])},d(l){l&&S(e)}}}function Oe(t){let e,n,i,l,o,u,p,f,s;U(t[6]);let a=(t[1]==="labels"||t[1]==="both")&&se(t),c=(t[1]==="width"||t[1]==="both")&&ae(t);return{c(){e=v("div"),n=C("svg"),i=C("path"),l=M(),o=v("span"),a&&a.c(),u=M(),c&&c.c(),r(i,"d","M1.25 8.75h12.5M5 13.13h5m-5.75-1.88h6.5c1.05 0 1.58 0 1.98-.2.35-.18.64-.47.82-.82.2-.4.2-.93.2-1.98V4.87c0-1.05 0-1.57-.2-1.97a1.87 1.87 0 0 0-.82-.82c-.4-.2-.93-.2-1.98-.2h-6.5c-1.05 0-1.58 0-1.98.2-.35.18-.64.47-.82.82-.2.4-.2.92-.2 1.98v3.37c0 1.05 0 1.58.2 1.98.18.35.47.64.82.82.4.2.93.2 1.98.2Z"),r(n,"xmlns","http://www.w3.org/2000/svg"),r(n,"fill","none"),r(n,"stroke","currentColor"),r(n,"stroke-linecap","round"),r(n,"stroke-linejoin","round"),r(n,"viewBox","0 0 15 15"),r(n,"class","cell_icon"),r(o,"class","cell_content cell_breakpoint_indicator"),r(e,"role",t[2]?"button":"none"),r(e,"title",p=t[1]==="width"?"Window width":"Current Breakpoint"),r(e,"class","cell")},m(d,h){y(d,e,h),m(e,n),m(n,i),m(e,l),m(e,o),a&&a.m(o,null),m(o,u),c&&c.m(o,null),f||(s=[K(window,"resize",t[6]),K(e,"click",t[3])],f=!0)},p(d,[h]){d[1]==="labels"||d[1]==="both"?a?a.p(d,h):(a=se(d),a.c(),a.m(o,u)):a&&(a.d(1),a=null),d[1]==="width"||d[1]==="both"?c?c.p(d,h):(c=ae(d),c.c(),c.m(o,null)):c&&(c.d(1),c=null),h&2&&p!==(p=d[1]==="width"?"Window width":"Current Breakpoint")&&r(e,"title",p)},i:k,o:k,d(d){d&&S(e),a&&a.d(),c&&c.d(),f=!1,E(s)}}}function Be(t,e,n){let{breakpoints:i}=e,l=0,o=Object.keys(i).length>=1,u="width";o&&(u=F.get("statamic.toolbar.breakpoints.type")??"labels");function p(){if(o){switch(u){case"labels":n(1,u="both");break;case"both":n(1,u="width");break;default:n(1,u="labels")}F.set("statamic.toolbar.breakpoints.type",u)}}function f(){let a='.breakpoints::before { content: "\\2014" }';return Object.entries(i).forEach(function(c){a+=`@media (${c[1]}) { .breakpoints::before { content: "${c[0]}" } }`}),`<style>${a}</style>`}function s(){n(0,l=window.innerWidth)}return t.$$set=a=>{"breakpoints"in a&&n(5,i=a.breakpoints)},[l,u,o,p,f,i,s]}class Ne extends q{constructor(e){super(),B(this,e,Be,Oe,L,{breakpoints:5})}}function Ze(t){let e;return{c(){e=C("path"),r(e,"d","M1.51 7.95c-.08-.14-.13-.2-.15-.31a.73.73 0 0 1 0-.28c.02-.1.07-.17.15-.3.7-1.12 2.8-3.93 5.99-3.93 3.2 0 5.28 2.81 5.99 3.92.08.14.13.2.15.31.02.08.02.2 0 .28-.02.1-.07.17-.15.3-.7 1.12-2.8 3.93-5.99 3.93-3.19 0-5.28-2.81-5.99-3.92Z M7.5 9.38a1.87 1.87 0 1 0 0-3.75 1.87 1.87 0 0 0 0 3.75Z")},m(n,i){y(n,e,i)},d(n){n&&S(e)}}}function Ve(t){let e;return{c(){e=C("path"),r(e,"d","M6.71 3.18c.26-.03.52-.06.79-.06 3.2 0 5.28 2.82 5.99 3.93.08.14.13.2.15.31.02.08.02.2 0 .28-.02.1-.07.17-.15.3-.19.3-.48.72-.85 1.17M4.2 4.2a10 10 0 0 0-2.69 2.85c-.08.14-.13.2-.15.31a.73.73 0 0 0 0 .28c.02.1.07.17.15.3.7 1.12 2.8 3.93 5.99 3.93 1.29 0 2.4-.45 3.3-1.07M1.89 1.87l11.25 11.25M6.17 6.17a1.87 1.87 0 0 0 1.33 3.2c.52 0 .99-.2 1.33-.54")},m(n,i){y(n,e,i)},d(n){n&&S(e)}}}function Ae(t){let e,n,i,l,o;function u(s,a){return s[0]?Ve:Ze}let p=u(t),f=p(t);return{c(){e=v("div"),n=C("svg"),f.c(),r(n,"xmlns","http://www.w3.org/2000/svg"),r(n,"fill","none"),r(n,"stroke","currentColor"),r(n,"stroke-linecap","round"),r(n,"stroke-linejoin","round"),r(n,"viewBox","0 0 15 15"),r(n,"class","cell_icon"),r(e,"role","button"),r(e,"title",i=t[0]?"Show Toolbar":"Hide Toolbar"),r(e,"class","cell")},m(s,a){y(s,e,a),m(e,n),f.m(n,null),l||(o=K(e,"click",t[1]),l=!0)},p(s,[a]){p!==(p=u(s))&&(f.d(1),f=p(s),f&&(f.c(),f.m(n,null))),a&1&&i!==(i=s[0]?"Show Toolbar":"Hide Toolbar")&&r(e,"title",i)},i:k,o:k,d(s){s&&S(e),f.d(),l=!1,o()}}}function Ie(t,e,n){let{callback:i}=e,l=!1;ie(()=>{F.has("statamic.toolbar.hidden")&&(n(0,l=F.get("statamic.toolbar.hidden")),setTimeout(()=>i(l),500))});function o(){n(0,l=!l),F.set("statamic.toolbar.hidden",l),i(l)}return t.$$set=u=>{"callback"in u&&n(2,i=u.callback)},[l,o,i]}class We extends q{constructor(e){super(),B(this,e,Ie,Ae,L,{callback:2})}}function qe(t){let e,n,i,l,o,u,p;return{c(){e=v("div"),n=C("svg"),i=C("path"),l=M(),o=v("span"),u=N(t[0]),r(i,"d","M8.75 1.42V4c0 .35 0 .53.07.66.06.12.15.21.27.27.13.07.31.07.66.07h2.58M10 8.13H5m5 2.5H5m1.25-5H5m3.75-4.38H5.5c-1.05 0-1.58 0-1.98.2-.35.18-.64.47-.82.82-.2.4-.2.93-.2 1.98v6.5c0 1.05 0 1.58.2 1.98.18.35.47.64.82.82.4.2.93.2 1.98.2h4c1.05 0 1.58 0 1.98-.2.35-.18.64-.47.82-.82.2-.4.2-.93.2-1.98V5L8.75 1.25Z"),r(n,"xmlns","http://www.w3.org/2000/svg"),r(n,"fill","none"),r(n,"stroke","currentColor"),r(n,"stroke-linecap","round"),r(n,"stroke-linejoin","round"),r(n,"viewBox","0 0 15 15"),r(n,"class","cell_icon"),r(o,"class","cell_content"),r(e,"title",p="Template: "+t[0]),r(e,"class","cell")},m(f,s){y(f,e,s),m(e,n),m(n,i),m(e,l),m(e,o),m(o,u)},p(f,[s]){s&1&&X(u,f[0]),s&1&&p!==(p="Template: "+f[0])&&r(e,"title",p)},i:k,o:k,d(f){f&&S(e)}}}function Fe(t,e,n){let{template:i}=e;return t.$$set=l=>{"template"in l&&n(0,i=l.template)},[i]}class Ge extends q{constructor(e){super(),B(this,e,Fe,qe,L,{template:0})}}function Je(t){let e,n,i;return{c(){e=v("a"),n=C("svg"),i=C("path"),r(i,"d","M13.13 13.13h-5m-6.57.3 3.47-1.33c.22-.08.33-.12.44-.18.09-.05.18-.1.26-.17.1-.07.18-.16.35-.32l7.04-7.05a1.77 1.77 0 1 0-2.5-2.5L3.58 8.93a3.9 3.9 0 0 0-.33.34l-.17.26c-.06.1-.1.22-.18.44l-1.34 3.47Zm0 0 1.29-3.34c.1-.24.14-.36.22-.41a.31.31 0 0 1 .23-.05c.1.02.19.1.37.29l1.41 1.41c.18.18.27.27.3.37 0 .08-.01.17-.06.23-.05.08-.17.13-.41.22l-3.35 1.29Z"),r(n,"xmlns","http://www.w3.org/2000/svg"),r(n,"fill","none"),r(n,"stroke","currentColor"),r(n,"stroke-linecap","round"),r(n,"stroke-linejoin","round"),r(n,"viewBox","0 0 15 15"),r(n,"class","cell_icon"),r(e,"href",t[0]),r(e,"target","_blank"),r(e,"rel","noreferrer"),r(e,"title","Edit this page"),r(e,"class","cell")},m(l,o){y(l,e,o),m(e,n),m(n,i)},p(l,[o]){o&1&&r(e,"href",l[0])},i:k,o:k,d(l){l&&S(e)}}}function Re(t,e,n){let{cp_link:i}=e;return t.$$set=l=>{"cp_link"in l&&n(0,i=l.cp_link)},[i]}class Ue extends q{constructor(e){super(),B(this,e,Re,Je,L,{cp_link:0})}}function De(t){let e,n,i,l,o,u,p;return{c(){e=v("div"),n=C("svg"),i=C("path"),l=M(),o=v("span"),u=N(t[0]),r(i,"d","M9.38 1.54a6.25 6.25 0 1 0 3.62 3m-2.38-.95h0M6.57 13.68V12.3c0-.07.03-.14.08-.2l1.55-1.81a.31.31 0 0 0-.08-.48L6.32 8.8a.31.31 0 0 1-.11-.11L5.04 6.64a.31.31 0 0 0-.3-.16l-3.45.3m11.84-3.03c0 1.38-1.26 2.5-2.5 3.75-1.26-1.25-2.5-2.37-2.5-3.75a2.5 2.5 0 0 1 5 0Zm-2.35-.16a.16.16 0 1 1-.31 0 .16.16 0 0 1 .31 0Z"),r(n,"xmlns","http://www.w3.org/2000/svg"),r(n,"fill","none"),r(n,"stroke","currentColor"),r(n,"stroke-linecap","round"),r(n,"stroke-linejoin","round"),r(n,"viewBox","0 0 15 15"),r(n,"class","cell_icon"),r(o,"class","cell_content"),r(e,"title",p="Site: "+t[0]),r(e,"class","cell")},m(f,s){y(f,e,s),m(e,n),m(n,i),m(e,l),m(e,o),m(o,u)},p(f,[s]){s&1&&X(u,f[0]),s&1&&p!==(p="Site: "+f[0])&&r(e,"title",p)},i:k,o:k,d(f){f&&S(e)}}}function Pe(t,e,n){let{site:i}=e;return t.$$set=l=>{"site"in l&&n(0,i=l.site)},[i]}class Qe extends q{constructor(e){super(),B(this,e,Pe,De,L,{site:0})}}function ce(t){let e,n;return e=new Ne({props:{breakpoints:t[0].breakpoints}}),{c(){W(e.$$.fragment)},m(i,l){O(e,i,l),n=!0},p(i,l){const o={};l&1&&(o.breakpoints=i[0].breakpoints),e.$set(o)},i(i){n||(_(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){H(e,i)}}}function fe(t){let e,n;return e=new Qe({props:{site:t[0].site}}),{c(){W(e.$$.fragment)},m(i,l){O(e,i,l),n=!0},p(i,l){const o={};l&1&&(o.site=i[0].site),e.$set(o)},i(i){n||(_(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){H(e,i)}}}function ue(t){let e,n;return e=new Ge({props:{template:t[0].template}}),{c(){W(e.$$.fragment)},m(i,l){O(e,i,l),n=!0},p(i,l){const o={};l&1&&(o.template=i[0].template),e.$set(o)},i(i){n||(_(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){H(e,i)}}}function de(t){let e,n;return e=new Ue({props:{cp_link:t[0].cp_link}}),{c(){W(e.$$.fragment)},m(i,l){O(e,i,l),n=!0},p(i,l){const o={};l&1&&(o.cp_link=i[0].cp_link),e.$set(o)},i(i){n||(_(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){H(e,i)}}}function pe(t){let e,n;return e=new We({props:{callback:t[4]}}),{c(){W(e.$$.fragment)},m(i,l){O(e,i,l),n=!0},p(i,l){const o={};l&2&&(o.callback=i[4]),e.$set(o)},i(i){n||(_(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){H(e,i)}}}function Ke(t){var me,be,_e,ge,ke;let e,n,i,l,o,u,p,f,s,a=((me=t[0])==null?void 0:me.breakpoints)&&ce(t),c=((be=t[0])==null?void 0:be.site)&&fe(t),d=((_e=t[0])==null?void 0:_e.template)&&ue(t),h=((ge=t[0])==null?void 0:ge.cp_link)&&de(t),g=((ke=t[0])==null?void 0:ke.visibility)&&pe(t);return{c(){e=v("div"),a&&a.c(),n=M(),c&&c.c(),i=M(),d&&d.c(),l=M(),h&&h.c(),o=M(),g&&g.c(),u=M(),p=v("style"),p.textContent=`* {
  box-sizing: border-box;
  outline: none;
}

@keyframes loaded {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
  animation: loaded 300ms;
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
  min-width: 34px;
  color: inherit;
  text-decoration: none;
  user-select: none;
}
#toolbar .cell[href]:hover, #toolbar .cell[role=button]:hover {
  background: #ebebeb;
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
  opacity: 0.65;
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
}

/* fix height for firefox */
@-moz-document url-prefix() {
  #toolbar {
    height: 34px;
  }
}`,this.c=k,Ce(p.src,f="./../css/toolbar.scss")||r(p,"src",f),r(e,"id","toolbar"),j(e,"isHidden",t[1]),j(e,"debugbarClosed",t[2]==="closed"),j(e,"debugbarMinimized",t[2]==="minimized")},m(b,w){y(b,e,w),a&&a.m(e,null),m(e,n),c&&c.m(e,null),m(e,i),d&&d.m(e,null),m(e,l),h&&h.m(e,null),m(e,o),g&&g.m(e,null),m(e,u),m(e,p),s=!0},p(b,[w]){var $e,we,ve,ye,Se;($e=b[0])!=null&&$e.breakpoints?a?(a.p(b,w),w&1&&_(a,1)):(a=ce(b),a.c(),_(a,1),a.m(e,n)):a&&(A(),$(a,1,1,()=>{a=null}),I()),(we=b[0])!=null&&we.site?c?(c.p(b,w),w&1&&_(c,1)):(c=fe(b),c.c(),_(c,1),c.m(e,i)):c&&(A(),$(c,1,1,()=>{c=null}),I()),(ve=b[0])!=null&&ve.template?d?(d.p(b,w),w&1&&_(d,1)):(d=ue(b),d.c(),_(d,1),d.m(e,l)):d&&(A(),$(d,1,1,()=>{d=null}),I()),(ye=b[0])!=null&&ye.cp_link?h?(h.p(b,w),w&1&&_(h,1)):(h=de(b),h.c(),_(h,1),h.m(e,o)):h&&(A(),$(h,1,1,()=>{h=null}),I()),(Se=b[0])!=null&&Se.visibility?g?(g.p(b,w),w&1&&_(g,1)):(g=pe(b),g.c(),_(g,1),g.m(e,u)):g&&(A(),$(g,1,1,()=>{g=null}),I()),(!s||w&2)&&j(e,"isHidden",b[1]),(!s||w&4)&&j(e,"debugbarClosed",b[2]==="closed"),(!s||w&4)&&j(e,"debugbarMinimized",b[2]==="minimized")},i(b){s||(_(a),_(c),_(d),_(h),_(g),s=!0)},o(b){$(a),$(c),$(d),$(h),$(g),s=!1},d(b){b&&S(e),a&&a.d(),c&&c.d(),d&&d.d(),h&&h.d(),g&&g.d()}}}function Xe(t,e,n){let{endpoint:i}=e,l=null,o=!1,u=null;ie(()=>{fetch(i+"?origin="+encodeURIComponent(document.location.href)).then(s=>s.json()).then(s=>n(0,l=s));const f=document.documentElement.querySelector(".phpdebugbar");f&&new ze(f,s=>n(2,u=s))});const p=f=>n(1,o=f);return t.$$set=f=>{"endpoint"in f&&n(3,i=f.endpoint)},[l,o,u,i,p]}class he extends oe{constructor(e){super(),B(this,{target:this.shadowRoot,props:Ee(this.attributes),customElement:!0},Xe,Ke,L,{endpoint:3},null),e&&(e.target&&y(e.target,this,e.anchor),e.props&&(this.$set(e.props),D()))}static get observedAttributes(){return["endpoint"]}get endpoint(){return this.$$.ctx[3]}set endpoint(e){this.$$set({endpoint:e}),D()}}return customElements.define("statamic-toolbar",he),he}();
