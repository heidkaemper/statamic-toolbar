var toolbar=function(){"use strict";var st=Object.defineProperty;var lt=(g,M,O)=>M in g?st(g,M,{enumerable:!0,configurable:!0,writable:!0,value:O}):g[M]=O;var S=(g,M,O)=>lt(g,typeof M!="symbol"?M+"":M,O);function g(){}function M(t){return t()}function O(){return Object.create(null)}function H(t){t.forEach(M)}function oe(t){return typeof t=="function"}function B(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let K;function Be(t,e){return t===e?!0:(K||(K=document.createElement("a")),K.href=e,t===K.href)}function Ne(t){return Object.keys(t).length===0}function b(t,e){t.appendChild(e)}function x(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function C(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function j(){return J(" ")}function te(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function s(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Te(t){return Array.from(t.childNodes)}function ne(t,e){e=""+e,t.data!==e&&(t.data=e)}function N(t,e,n){t.classList.toggle(e,!!n)}function ze(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}let W;function q(t){W=t}function Pe(){if(!W)throw new Error("Function called outside component initialization");return W}function se(t){Pe().$$.on_mount.push(t)}const T=[],le=[];let z=[];const ce=[],Ve=Promise.resolve();let ie=!1;function Ze(){ie||(ie=!0,Ve.then(L))}function X(t){z.push(t)}const re=new Set;let P=0;function L(){if(P!==0)return;const t=W;do{try{for(;P<T.length;){const e=T[P];P++,q(e),Fe(e.$$)}}catch(e){throw T.length=0,P=0,e}for(q(null),T.length=0,P=0;le.length;)le.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];re.has(n)||(re.add(n),n())}z.length=0}while(T.length);for(;ce.length;)ce.pop()();ie=!1,re.clear(),q(t)}function Fe(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function Ie(t){const e=[],n=[];z.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),z=e}const Y=new Set;let A;function R(){A={r:0,c:[],p:A}}function U(){A.r||H(A.c),A=A.p}function m(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function v(t,e,n,i){if(t&&t.o){if(Y.has(t))return;Y.add(t),A.c.push(()=>{Y.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function G(t){t&&t.c()}function V(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),X(()=>{const o=t.$$.on_mount.map(M).filter(oe);t.$$.on_destroy?t.$$.on_destroy.push(...o):H(o),t.$$.on_mount=[]}),r.forEach(X)}function Z(t,e){const n=t.$$;n.fragment!==null&&(Ie(n.after_update),H(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function De(t,e){t.$$.dirty[0]===-1&&(T.push(t),Ze(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(t,e,n,i,r,o,c=null,u=[-1]){const a=W;q(t);const l=t.$$={fragment:null,ctx:[],props:o,update:g,not_equal:r,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:O(),dirty:u,skip_bound:!1,root:e.target||a.$$.root};c&&c(l.root);let d=!1;if(l.ctx=n?n(t,e.props||{},(f,h,...p)=>{const _=p.length?p[0]:h;return l.ctx&&r(l.ctx[f],l.ctx[f]=_)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](_),d&&De(t,f)),h}):[],l.update(),d=!0,H(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){const f=Te(e.target);l.fragment&&l.fragment.l(f),f.forEach(E)}else l.fragment&&l.fragment.c();e.intro&&m(t.$$.fragment),V(t,e.target,e.anchor),L()}q(a)}let ae;typeof HTMLElement=="function"&&(ae=class extends HTMLElement{constructor(e,n,i){super();S(this,"$$ctor");S(this,"$$s");S(this,"$$c");S(this,"$$cn",!1);S(this,"$$d",{});S(this,"$$r",!1);S(this,"$$p_d",{});S(this,"$$l",{});S(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=n,i&&this.attachShadow({mode:"open"})}addEventListener(e,n,i){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(n),this.$$c){const r=this.$$c.$on(e,n);this.$$l_u.set(n,r)}super.addEventListener(e,n,i)}removeEventListener(e,n,i){if(super.removeEventListener(e,n,i),this.$$c){const r=this.$$l_u.get(n);r&&(r(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(o){return()=>{let c;return{c:function(){c=y("slot"),o!=="default"&&s(c,"name",o)},m:function(l,d){x(l,c,d)},d:function(l){l&&E(c)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},i=ze(this);for(const o of this.$$s)o in i&&(n[o]=[e(o)]);for(const o of this.attributes){const c=this.$$g_p(o.name);c in this.$$d||(this.$$d[c]=ee(c,o.value,this.$$p_d,"toProp"))}for(const o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const r=()=>{this.$$r=!0;for(const o in this.$$p_d)if(this.$$d[o]=this.$$c.$$.ctx[this.$$c.$$.props[o]],this.$$p_d[o].reflect){const c=ee(o,this.$$d[o],this.$$p_d,"toAttribute");c==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,c)}this.$$r=!1};this.$$c.$$.after_update.push(r),r();for(const o in this.$$l)for(const c of this.$$l[o]){const u=this.$$c.$on(o,c);this.$$l_u.set(c,u)}this.$$l={}}}attributeChangedCallback(e,n,i){var r;this.$$r||(e=this.$$g_p(e),this.$$d[e]=ee(e,i,this.$$p_d,"toProp"),(r=this.$$c)==null||r.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(n=>this.$$p_d[n].attribute===e||!this.$$p_d[n].attribute&&n.toLowerCase()===e)||e}});function ee(t,e,n,i){var o;const r=(o=n[t])==null?void 0:o.type;if(e=r==="Boolean"&&typeof e!="boolean"?e!=null:e,!i||!n[t])return e;if(i==="toAttribute")switch(r){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(r){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function I(t,e,n,i,r,o){let c=class extends ae{constructor(){super(t,n,r),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(u=>(e[u].attribute||u).toLowerCase())}};return Object.keys(e).forEach(u=>{Object.defineProperty(c.prototype,u,{get(){return this.$$c&&u in this.$$c?this.$$c[u]:this.$$d[u]},set(a){var l;a=ee(u,a,e),this.$$d[u]=a,(l=this.$$c)==null||l.$set({[u]:a})}})}),i.forEach(u=>{Object.defineProperty(c.prototype,u,{get(){var a;return(a=this.$$c)==null?void 0:a[u]}})}),t.element=c,c}class D{constructor(){S(this,"$$");S(this,"$$set")}$destroy(){Z(this,1),this.$destroy=g}$on(e,n){if(!oe(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Ne(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Je="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Je);class We{constructor(e,n){this.callback=n,new MutationObserver(i=>{i.forEach(r=>{r.attributeName==="class"&&this.setStatus(r.target)})}).observe(e,{attributes:!0}),this.setStatus(e)}setStatus(e){return e.classList.contains("phpdebugbar-closed")?this.callback("closed"):this.callback("minimized")}}const Q={get(t){return JSON.parse(localStorage.getItem(t))},set(t,e){localStorage.setItem(t,JSON.stringify(e))},has(t){return localStorage.getItem(t)!==null}};function ue(t){let e,n=t[4]()+"";return{c(){e=y("span"),s(e,"class","breakpoints")},m(i,r){x(i,e,r),e.innerHTML=n},p:g,d(i){i&&E(e)}}}function fe(t){let e,n,i;return{c(){e=y("span"),n=J(t[0]),i=J(" px"),s(e,"class","screen_width")},m(r,o){x(r,e,o),b(e,n),b(e,i)},p(r,o){o&1&&ne(n,r[0])},d(r){r&&E(e)}}}function qe(t){let e,n,i,r,o,c,u,a,l;X(t[6]);let d=(t[1]==="labels"||t[1]==="both")&&ue(t),f=(t[1]==="width"||t[1]==="both")&&fe(t);return{c(){e=y("div"),n=C("svg"),i=C("path"),r=j(),o=y("span"),d&&d.c(),c=j(),f&&f.c(),s(i,"d","M1.25 8.75h12.5M5 13.13h5m-5.75-1.88h6.5c1.05 0 1.58 0 1.98-.2.35-.18.64-.47.82-.82.2-.4.2-.93.2-1.98V4.87c0-1.05 0-1.57-.2-1.97a1.87 1.87 0 0 0-.82-.82c-.4-.2-.93-.2-1.98-.2h-6.5c-1.05 0-1.58 0-1.98.2-.35.18-.64.47-.82.82-.2.4-.2.92-.2 1.98v3.37c0 1.05 0 1.58.2 1.98.18.35.47.64.82.82.4.2.93.2 1.98.2Z"),s(n,"xmlns","http://www.w3.org/2000/svg"),s(n,"fill","none"),s(n,"stroke","currentColor"),s(n,"stroke-linecap","round"),s(n,"stroke-linejoin","round"),s(n,"viewBox","0 0 15 15"),s(n,"class","cell_icon"),s(o,"class","cell_content cell_breakpoint_indicator"),s(e,"role",t[2]?"button":"none"),s(e,"title",u=t[1]==="width"?"Window width":"Current Breakpoint"),s(e,"class","cell")},m(h,p){x(h,e,p),b(e,n),b(n,i),b(e,r),b(e,o),d&&d.m(o,null),b(o,c),f&&f.m(o,null),a||(l=[te(window,"resize",t[6]),te(e,"click",t[3])],a=!0)},p(h,[p]){h[1]==="labels"||h[1]==="both"?d?d.p(h,p):(d=ue(h),d.c(),d.m(o,c)):d&&(d.d(1),d=null),h[1]==="width"||h[1]==="both"?f?f.p(h,p):(f=fe(h),f.c(),f.m(o,null)):f&&(f.d(1),f=null),p&2&&u!==(u=h[1]==="width"?"Window width":"Current Breakpoint")&&s(e,"title",u)},i:g,o:g,d(h){h&&E(e),d&&d.d(),f&&f.d(),a=!1,H(l)}}}function Re(t,e,n){let{breakpoints:i}=e,r=0,o=Object.keys(i).length>=1,c="width";o&&(c=Q.get("statamic.toolbar.breakpoints.type")??"labels");function u(){if(o){switch(c){case"labels":n(1,c="both");break;case"both":n(1,c="width");break;default:n(1,c="labels")}Q.set("statamic.toolbar.breakpoints.type",c)}}function a(){let d='.breakpoints::before { content: "\\2014" }';return Object.entries(i).forEach(function(f){d+=`@media (${f[1]}) { .breakpoints::before { content: "${f[0]}" } }`}),`<style>${d}</style>`}function l(){n(0,r=window.innerWidth)}return t.$$set=d=>{"breakpoints"in d&&n(5,i=d.breakpoints)},[r,c,o,u,a,i,l]}class de extends D{constructor(e){super(),F(this,e,Re,qe,B,{breakpoints:5})}get breakpoints(){return this.$$.ctx[5]}set breakpoints(e){this.$$set({breakpoints:e}),L()}}I(de,{breakpoints:{}},[],[],!0);function Ue(t){let e;return{c(){e=C("path"),s(e,"d","M1.51 7.95c-.08-.14-.13-.2-.15-.31a.73.73 0 0 1 0-.28c.02-.1.07-.17.15-.3.7-1.12 2.8-3.93 5.99-3.93 3.2 0 5.28 2.81 5.99 3.92.08.14.13.2.15.31.02.08.02.2 0 .28-.02.1-.07.17-.15.3-.7 1.12-2.8 3.93-5.99 3.93-3.19 0-5.28-2.81-5.99-3.92Z M7.5 9.38a1.87 1.87 0 1 0 0-3.75 1.87 1.87 0 0 0 0 3.75Z")},m(n,i){x(n,e,i)},d(n){n&&E(e)}}}function Ge(t){let e;return{c(){e=C("path"),s(e,"d","M6.71 3.18c.26-.03.52-.06.79-.06 3.2 0 5.28 2.82 5.99 3.93.08.14.13.2.15.31.02.08.02.2 0 .28-.02.1-.07.17-.15.3-.19.3-.48.72-.85 1.17M4.2 4.2a10 10 0 0 0-2.69 2.85c-.08.14-.13.2-.15.31a.73.73 0 0 0 0 .28c.02.1.07.17.15.3.7 1.12 2.8 3.93 5.99 3.93 1.29 0 2.4-.45 3.3-1.07M1.89 1.87l11.25 11.25M6.17 6.17a1.87 1.87 0 0 0 1.33 3.2c.52 0 .99-.2 1.33-.54")},m(n,i){x(n,e,i)},d(n){n&&E(e)}}}function Qe(t){let e,n,i,r,o;function c(l,d){return l[0]?Ge:Ue}let u=c(t),a=u(t);return{c(){e=y("div"),n=C("svg"),a.c(),s(n,"xmlns","http://www.w3.org/2000/svg"),s(n,"fill","none"),s(n,"stroke","currentColor"),s(n,"stroke-linecap","round"),s(n,"stroke-linejoin","round"),s(n,"viewBox","0 0 15 15"),s(n,"class","cell_icon"),s(e,"role","button"),s(e,"tabindex","-1"),s(e,"title",i=t[0]?"Show Toolbar":"Hide Toolbar"),s(e,"class","cell")},m(l,d){x(l,e,d),b(e,n),a.m(n,null),r||(o=te(e,"click",t[1]),r=!0)},p(l,[d]){u!==(u=c(l))&&(a.d(1),a=u(l),a&&(a.c(),a.m(n,null))),d&1&&i!==(i=l[0]?"Show Toolbar":"Hide Toolbar")&&s(e,"title",i)},i:g,o:g,d(l){l&&E(e),a.d(),r=!1,o()}}}function Ke(t,e,n){let{callback:i}=e,r=!1;se(()=>{Q.has("statamic.toolbar.hidden")&&(n(0,r=Q.get("statamic.toolbar.hidden")),setTimeout(()=>i(r),500))});function o(){n(0,r=!r),Q.set("statamic.toolbar.hidden",r),i(r)}return t.$$set=c=>{"callback"in c&&n(2,i=c.callback)},[r,o,i]}class he extends D{constructor(e){super(),F(this,e,Ke,Qe,B,{callback:2})}get callback(){return this.$$.ctx[2]}set callback(e){this.$$set({callback:e}),L()}}I(he,{callback:{}},[],[],!0);function Xe(t){let e,n,i,r,o,c,u;return{c(){e=y("div"),n=C("svg"),i=C("path"),r=j(),o=y("span"),c=J(t[0]),s(i,"d","M8.75 1.42V4c0 .35 0 .53.07.66.06.12.15.21.27.27.13.07.31.07.66.07h2.58M10 8.13H5m5 2.5H5m1.25-5H5m3.75-4.38H5.5c-1.05 0-1.58 0-1.98.2-.35.18-.64.47-.82.82-.2.4-.2.93-.2 1.98v6.5c0 1.05 0 1.58.2 1.98.18.35.47.64.82.82.4.2.93.2 1.98.2h4c1.05 0 1.58 0 1.98-.2.35-.18.64-.47.82-.82.2-.4.2-.93.2-1.98V5L8.75 1.25Z"),s(n,"xmlns","http://www.w3.org/2000/svg"),s(n,"fill","none"),s(n,"stroke","currentColor"),s(n,"stroke-linecap","round"),s(n,"stroke-linejoin","round"),s(n,"viewBox","0 0 15 15"),s(n,"class","cell_icon"),s(o,"class","cell_content"),s(e,"title",u="Template: "+t[0]),s(e,"class","cell")},m(a,l){x(a,e,l),b(e,n),b(n,i),b(e,r),b(e,o),b(o,c)},p(a,[l]){l&1&&ne(c,a[0]),l&1&&u!==(u="Template: "+a[0])&&s(e,"title",u)},i:g,o:g,d(a){a&&E(e)}}}function Ye(t,e,n){let{template:i}=e;return t.$$set=r=>{"template"in r&&n(0,i=r.template)},[i]}class $e extends D{constructor(e){super(),F(this,e,Ye,Xe,B,{template:0})}get template(){return this.$$.ctx[0]}set template(e){this.$$set({template:e}),L()}}I($e,{template:{}},[],[],!0);function et(t){let e,n,i;return{c(){e=y("a"),n=C("svg"),i=C("path"),s(i,"d","M13.13 13.13h-5m-6.57.3 3.47-1.33c.22-.08.33-.12.44-.18.09-.05.18-.1.26-.17.1-.07.18-.16.35-.32l7.04-7.05a1.77 1.77 0 1 0-2.5-2.5L3.58 8.93a3.9 3.9 0 0 0-.33.34l-.17.26c-.06.1-.1.22-.18.44l-1.34 3.47Zm0 0 1.29-3.34c.1-.24.14-.36.22-.41a.31.31 0 0 1 .23-.05c.1.02.19.1.37.29l1.41 1.41c.18.18.27.27.3.37 0 .08-.01.17-.06.23-.05.08-.17.13-.41.22l-3.35 1.29Z"),s(n,"xmlns","http://www.w3.org/2000/svg"),s(n,"fill","none"),s(n,"stroke","currentColor"),s(n,"stroke-linecap","round"),s(n,"stroke-linejoin","round"),s(n,"viewBox","0 0 15 15"),s(n,"class","cell_icon"),s(e,"href",t[0]),s(e,"target","_blank"),s(e,"rel","noreferrer"),s(e,"title","Edit this page"),s(e,"class","cell")},m(r,o){x(r,e,o),b(e,n),b(n,i)},p(r,[o]){o&1&&s(e,"href",r[0])},i:g,o:g,d(r){r&&E(e)}}}function tt(t,e,n){let{cp_link:i}=e;return t.$$set=r=>{"cp_link"in r&&n(0,i=r.cp_link)},[i]}class pe extends D{constructor(e){super(),F(this,e,tt,et,B,{cp_link:0})}get cp_link(){return this.$$.ctx[0]}set cp_link(e){this.$$set({cp_link:e}),L()}}I(pe,{cp_link:{}},[],[],!0);function nt(t){let e,n,i,r,o,c,u;return{c(){e=y("div"),n=C("svg"),i=C("path"),r=j(),o=y("span"),c=J(t[0]),s(i,"d","M9.38 1.54a6.25 6.25 0 1 0 3.62 3m-2.38-.95h0M6.57 13.68V12.3c0-.07.03-.14.08-.2l1.55-1.81a.31.31 0 0 0-.08-.48L6.32 8.8a.31.31 0 0 1-.11-.11L5.04 6.64a.31.31 0 0 0-.3-.16l-3.45.3m11.84-3.03c0 1.38-1.26 2.5-2.5 3.75-1.26-1.25-2.5-2.37-2.5-3.75a2.5 2.5 0 0 1 5 0Zm-2.35-.16a.16.16 0 1 1-.31 0 .16.16 0 0 1 .31 0Z"),s(n,"xmlns","http://www.w3.org/2000/svg"),s(n,"fill","none"),s(n,"stroke","currentColor"),s(n,"stroke-linecap","round"),s(n,"stroke-linejoin","round"),s(n,"viewBox","0 0 15 15"),s(n,"class","cell_icon"),s(o,"class","cell_content"),s(e,"title",u="Site: "+t[0]),s(e,"class","cell")},m(a,l){x(a,e,l),b(e,n),b(n,i),b(e,r),b(e,o),b(o,c)},p(a,[l]){l&1&&ne(c,a[0]),l&1&&u!==(u="Site: "+a[0])&&s(e,"title",u)},i:g,o:g,d(a){a&&E(e)}}}function it(t,e,n){let{site:i}=e;return t.$$set=r=>{"site"in r&&n(0,i=r.site)},[i]}class be extends D{constructor(e){super(),F(this,e,it,nt,B,{site:0})}get site(){return this.$$.ctx[0]}set site(e){this.$$set({site:e}),L()}}I(be,{site:{}},[],[],!0);function me(t){let e,n;return e=new de({props:{breakpoints:t[0].breakpoints}}),{c(){G(e.$$.fragment)},m(i,r){V(e,i,r),n=!0},p(i,r){const o={};r&1&&(o.breakpoints=i[0].breakpoints),e.$set(o)},i(i){n||(m(e.$$.fragment,i),n=!0)},o(i){v(e.$$.fragment,i),n=!1},d(i){Z(e,i)}}}function _e(t){let e,n;return e=new be({props:{site:t[0].site}}),{c(){G(e.$$.fragment)},m(i,r){V(e,i,r),n=!0},p(i,r){const o={};r&1&&(o.site=i[0].site),e.$set(o)},i(i){n||(m(e.$$.fragment,i),n=!0)},o(i){v(e.$$.fragment,i),n=!1},d(i){Z(e,i)}}}function ge(t){let e,n;return e=new $e({props:{template:t[0].template}}),{c(){G(e.$$.fragment)},m(i,r){V(e,i,r),n=!0},p(i,r){const o={};r&1&&(o.template=i[0].template),e.$set(o)},i(i){n||(m(e.$$.fragment,i),n=!0)},o(i){v(e.$$.fragment,i),n=!1},d(i){Z(e,i)}}}function ke(t){let e,n;return e=new pe({props:{cp_link:t[0].cp_link}}),{c(){G(e.$$.fragment)},m(i,r){V(e,i,r),n=!0},p(i,r){const o={};r&1&&(o.cp_link=i[0].cp_link),e.$set(o)},i(i){n||(m(e.$$.fragment,i),n=!0)},o(i){v(e.$$.fragment,i),n=!1},d(i){Z(e,i)}}}function we(t){let e,n;return e=new he({props:{callback:t[4]}}),{c(){G(e.$$.fragment)},m(i,r){V(e,i,r),n=!0},p(i,r){const o={};r&2&&(o.callback=i[4]),e.$set(o)},i(i){n||(m(e.$$.fragment,i),n=!0)},o(i){v(e.$$.fragment,i),n=!1},d(i){Z(e,i)}}}function rt(t){var ye,Ee,Se,xe,Ce;let e,n,i,r,o,c,u,a,l,d,f=((ye=t[0])==null?void 0:ye.breakpoints)&&me(t),h=((Ee=t[0])==null?void 0:Ee.site)&&_e(t),p=((Se=t[0])==null?void 0:Se.template)&&ge(t),_=((xe=t[0])==null?void 0:xe.cp_link)&&ke(t),k=((Ce=t[0])==null?void 0:Ce.visibility)&&we(t);return{c(){var $;e=y("div"),f&&f.c(),n=j(),h&&h.c(),i=j(),p&&p.c(),r=j(),_&&_.c(),o=j(),k&&k.c(),c=j(),u=y("style"),u.textContent=`#toolbar {
  --color-text: #555;
  --color-text-shadow: #fff;
  --color-background: #fff;
  --color-cell-border: #ddd;
  --color-cell-hover: #ebebeb;
}

#toolbar[theme=dark] {
  --color-text: #EDF2F7;
  --color-text-shadow: #4A5568;
  --color-background: #252a37;
  --color-cell-border: #2D3748;
  --color-cell-hover: #4A5568;
}

@media (prefers-color-scheme: dark) {
  #toolbar[theme=auto] {
    --color-text: #EDF2F7;
    --color-text-shadow: #4A5568;
    --color-background: #252a37;
    --color-cell-border: #2D3748;
    --color-cell-hover: #4A5568;
  }
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
  color: var(--color-text);
  text-shadow: 1px 1px var(--color-text-shadow);
  background: var(--color-background);
  border-top: 3px solid #FF269E;
  border-top-right-radius: 5px;
  overflow: hidden;
  height: 30px;
  display: flex;
  align-items: stretch;
  animation: loaded 300ms;
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
  left: 41px;
}
#toolbar.debugbarOpen, #toolbar.debugbarMinimized {
  height: 30px;
  bottom: 33px;
}`,Be(u.src,a="./../css/toolbar.scss")||s(u,"src",a),s(e,"id","toolbar"),s(e,"theme",l=(($=t[0])==null?void 0:$.theme)??"auto"),N(e,"isHidden",t[1]),N(e,"debugbarClosed",t[2]==="closed"),N(e,"debugbarMinimized",t[2]==="minimized")},m($,w){x($,e,w),f&&f.m(e,null),b(e,n),h&&h.m(e,null),b(e,i),p&&p.m(e,null),b(e,r),_&&_.m(e,null),b(e,o),k&&k.m(e,null),b(e,c),b(e,u),d=!0},p($,[w]){var Me,je,Le,Oe,Ae,He;(Me=$[0])!=null&&Me.breakpoints?f?(f.p($,w),w&1&&m(f,1)):(f=me($),f.c(),m(f,1),f.m(e,n)):f&&(R(),v(f,1,1,()=>{f=null}),U()),(je=$[0])!=null&&je.site?h?(h.p($,w),w&1&&m(h,1)):(h=_e($),h.c(),m(h,1),h.m(e,i)):h&&(R(),v(h,1,1,()=>{h=null}),U()),(Le=$[0])!=null&&Le.template?p?(p.p($,w),w&1&&m(p,1)):(p=ge($),p.c(),m(p,1),p.m(e,r)):p&&(R(),v(p,1,1,()=>{p=null}),U()),(Oe=$[0])!=null&&Oe.cp_link?_?(_.p($,w),w&1&&m(_,1)):(_=ke($),_.c(),m(_,1),_.m(e,o)):_&&(R(),v(_,1,1,()=>{_=null}),U()),(Ae=$[0])!=null&&Ae.visibility?k?(k.p($,w),w&1&&m(k,1)):(k=we($),k.c(),m(k,1),k.m(e,c)):k&&(R(),v(k,1,1,()=>{k=null}),U()),(!d||w&1&&l!==(l=((He=$[0])==null?void 0:He.theme)??"auto"))&&s(e,"theme",l),(!d||w&2)&&N(e,"isHidden",$[1]),(!d||w&4)&&N(e,"debugbarClosed",$[2]==="closed"),(!d||w&4)&&N(e,"debugbarMinimized",$[2]==="minimized")},i($){d||(m(f),m(h),m(p),m(_),m(k),d=!0)},o($){v(f),v(h),v(p),v(_),v(k),d=!1},d($){$&&E(e),f&&f.d(),h&&h.d(),p&&p.d(),_&&_.d(),k&&k.d()}}}function ot(t,e,n){let{endpoint:i}=e,r=null,o=!1,c=null;se(()=>{fetch(i+"?origin="+encodeURIComponent(document.location.href)).then(l=>l.json()).then(l=>n(0,r=l));const a=document.documentElement.querySelector(".phpdebugbar");a&&new We(a,l=>n(2,c=l))});const u=a=>n(1,o=a);return t.$$set=a=>{"endpoint"in a&&n(3,i=a.endpoint)},[r,o,c,i,u]}class ve extends D{constructor(e){super(),F(this,e,ot,rt,B,{endpoint:3})}get endpoint(){return this.$$.ctx[3]}set endpoint(e){this.$$set({endpoint:e}),L()}}return customElements.define("toolbar-widget",I(ve,{endpoint:{}},[],[],!0)),ve}();
