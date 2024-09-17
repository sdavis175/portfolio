import{s as _e,e as ne,i as M,d as m,f as w,a as j,l as J,g as E,h as C,c as x,m as K,j as b,O as v,Q as S,x as se,p as W,w as he,V as U,S as be,T as ke,M as te,n as X,R as ee}from"../chunks/scheduler.66b4cfb7.js";import{S as me,i as ge,a as y,g as G,t as I,c as H,b as z,d as A,m as L,e as q}from"../chunks/index.583e8ca1.js";import{e as F}from"../chunks/language.416d1699.js";import{b as oe}from"../chunks/paths.1ec669c4.js";import{p as ye}from"../chunks/stores.39a81bbf.js";import{U as Y,g as Z}from"../chunks/index.705642ec.js";import{p as we}from"../chunks/projects.9ee99e0c.js";import{C as Ee}from"../chunks/CardLogo.3de54a26.js";import{M as De}from"../chunks/app.c583c8e9.js";import{B as Ce,M as Ie}from"../chunks/Banner.1c57cf58.js";import{T as Ve}from"../chunks/TabTitle.5aa476cd.js";import{C as ve}from"../chunks/Chip.823eed92.js";import{C as $e}from"../chunks/CardDivider.2bc69502.js";function ae(n){var D;let e,r,t,l,o,a,s,c,p,d,T=((D=n[0])==null?void 0:D.label)+"",f,_,V,B;return o=new Y({props:{icon:"i-carbon-close"}}),{c(){e=w("div"),r=w("div"),t=w("div"),l=w("button"),z(o.$$.fragment),a=j(),s=w("div"),p=j(),d=w("p"),f=J(T),this.h()},l(i){e=E(i,"DIV",{class:!0});var O=C(e);r=E(O,"DIV",{class:!0});var P=C(r);t=E(P,"DIV",{class:!0});var $=C(t);l=E($,"BUTTON",{class:!0});var k=C(l);A(o.$$.fragment,k),k.forEach(m),$.forEach(m),a=x(P),s=E(P,"DIV",{class:!0,style:!0}),C(s).forEach(m),p=x(P),d=E(P,"P",{class:!0});var u=C(d);f=K(u,T),u.forEach(m),P.forEach(m),O.forEach(m),this.h()},h(){var i;b(l,"class","cursor-pointer aspect-square rounded-full border-[var(--border)] border-1px bg-[transparent] border-solid hover:border-[var(--border-hover)]"),b(t,"class","self-end"),b(s,"class","aspect-video col bg-contain w-100% rounded-xl bg-no-repeat bg-contains bg-center"),b(s,"style",c=`background-image: url(${(i=n[0])==null?void 0:i.src});`),b(d,"class","font-italic m-t-auto m-x-auto bg-[var(--main-60)] border-solid border-1px border-[var(--border)] p-x-5 p-2 rounded-xl"),b(r,"class","w-full w-100% md:w-80% lg:w-70% col text-center gap-5 bg-[var(--main)] border-solid border-1px border-[var(--border)] p-5 rounded-xl"),b(e,"class","fixed inset-0px top-51px bg-[#000000dd] col-center p-50px")},m(i,O){M(i,e,O),v(e,r),v(r,t),v(t,l),L(o,l,null),v(r,a),v(r,s),v(r,p),v(r,d),v(d,f),_=!0,V||(B=[S(l,"click",function(){se(n[1])&&n[1].apply(this,arguments)}),S(l,"keydown",n[11]),S(l,"keypress",n[12]),S(l,"keyup",n[13]),S(r,"click",Te),S(r,"keydown",n[7]),S(r,"keypress",n[8]),S(r,"keyup",n[9]),S(r,"keyup",n[10]),S(e,"click",function(){se(n[1])&&n[1].apply(this,arguments)}),S(e,"click",Ne),S(e,"keydown",n[3]),S(e,"keypress",n[4]),S(e,"keyup",n[5]),S(e,"keyup",n[6])],V=!0)},p(i,O){var P,$;n=i,(!_||O&1&&c!==(c=`background-image: url(${(P=n[0])==null?void 0:P.src});`))&&b(s,"style",c),(!_||O&1)&&T!==(T=(($=n[0])==null?void 0:$.label)+"")&&W(f,T)},i(i){_||(y(o.$$.fragment,i),_=!0)},o(i){I(o.$$.fragment,i),_=!1},d(i){i&&m(e),q(o),V=!1,he(B)}}}function Pe(n){let e,r,t=n[2]&&ae(n);return{c(){t&&t.c(),e=ne()},l(l){t&&t.l(l),e=ne()},m(l,o){t&&t.m(l,o),M(l,e,o),r=!0},p(l,[o]){l[2]?t?(t.p(l,o),o&4&&y(t,1)):(t=ae(l),t.c(),y(t,1),t.m(e.parentNode,e)):t&&(G(),I(t,1,1,()=>{t=null}),H())},i(l){r||(y(t),r=!0)},o(l){I(t),r=!1},d(l){l&&m(e),t&&t.d(l)}}}const Te=n=>n.stopPropagation(),Ne=n=>n.stopPropagation();function Se(n,e,r){let t,{screenshot:l=void 0}=e,{onClose:o=()=>{r(0,l=void 0)}}=e;function a(i){U.call(this,n,i)}function s(i){U.call(this,n,i)}function c(i){U.call(this,n,i)}function p(i){U.call(this,n,i)}function d(i){U.call(this,n,i)}function T(i){U.call(this,n,i)}function f(i){U.call(this,n,i)}function _(i){U.call(this,n,i)}function V(i){U.call(this,n,i)}function B(i){U.call(this,n,i)}function D(i){U.call(this,n,i)}return n.$$set=i=>{"screenshot"in i&&r(0,l=i.screenshot),"onClose"in i&&r(1,o=i.onClose)},n.$$.update=()=>{n.$$.dirty&1&&r(2,t=typeof l<"u")},[l,o,t,a,s,c,p,d,T,f,_,V,B,D]}class je extends me{constructor(e){super(),ge(this,e,Se,Pe,_e,{screenshot:0,onClose:1})}}function ie(n,e,r){const t=n.slice();return t[14]=e[r],t[16]=r,t}function ce(n,e,r){const t=n.slice();return t[14]=e[r],t}function fe(n,e,r){const t=n.slice();return t[14]=e[r],t}function xe(n){let e,r,t,l,o,a,s,c,p,d,T,f,_,V;r=new Ce({props:{img:Z(n[0].logo),$$slots:{default:[Ae]},$$scope:{ctx:n}}});const B=[qe,Le],D=[];function i(k,u){return k[0].description?0:1}a=i(n),s=D[a]=B[a](n),d=new $e({});const O=[Re,Oe],P=[];function $(k,u){return k[1].length>0?0:1}return f=$(n),_=P[f]=O[f](n),{c(){e=w("div"),z(r.$$.fragment),t=j(),l=w("div"),o=w("div"),s.c(),c=j(),p=w("div"),z(d.$$.fragment),T=j(),_.c(),this.h()},l(k){e=E(k,"DIV",{class:!0});var u=C(e);A(r.$$.fragment,u),t=x(u),l=E(u,"DIV",{class:!0});var h=C(l);o=E(h,"DIV",{class:!0});var N=C(o);s.l(N),N.forEach(m),c=x(h),p=E(h,"DIV",{class:!0});var g=C(p);A(d.$$.fragment,g),g.forEach(m),T=x(h),_.l(h),h.forEach(m),u.forEach(m),this.h()},h(){b(o,"class","px-10px m-y-5"),b(p,"class","w-100% m-t-8"),b(l,"class","pt-3 pb-1 overflow-x-hidden w-full"),b(e,"class","flex flex-col items-center overflow-x-hidden")},m(k,u){M(k,e,u),L(r,e,null),v(e,t),v(e,l),v(l,o),D[a].m(o,null),v(l,c),v(l,p),L(d,p,null),v(l,T),P[f].m(l,null),V=!0},p(k,u){const h={};u&1&&(h.img=Z(k[0].logo)),u&2097153&&(h.$$scope={dirty:u,ctx:k}),r.$set(h);let N=a;a=i(k),a===N?D[a].p(k,u):(G(),I(D[N],1,1,()=>{D[N]=null}),H(),s=D[a],s?s.p(k,u):(s=D[a]=B[a](k),s.c()),y(s,1),s.m(o,null));let g=f;f=$(k),f===g?P[f].p(k,u):(G(),I(P[g],1,1,()=>{P[g]=null}),H(),_=P[f],_?_.p(k,u):(_=P[f]=O[f](k),_.c()),y(_,1),_.m(l,null))},i(k){V||(y(r.$$.fragment,k),y(s),y(d.$$.fragment,k),y(_),V=!0)},o(k){I(r.$$.fragment,k),I(s),I(d.$$.fragment,k),I(_),V=!1},d(k){k&&m(e),q(r),D[a].d(),q(d),P[f].d()}}}function Be(n){let e,r,t,l,o="Could not load project data...",a;return r=new Y({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),z(r.$$.fragment),t=j(),l=w("p"),l.textContent=o,this.h()},l(s){e=E(s,"DIV",{class:!0});var c=C(e);A(r.$$.fragment,c),t=x(c),l=E(c,"P",{class:!0,["data-svelte-h"]:!0}),te(l)!=="svelte-18mwztv"&&(l.textContent=o),c.forEach(m),this.h()},h(){b(l,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(s,c){M(s,e,c),L(r,e,null),v(e,t),v(e,l),a=!0},p:X,i(s){a||(y(r.$$.fragment,s),a=!0)},o(s){I(r.$$.fragment,s),a=!1},d(s){s&&m(e),q(r)}}}function Me(n){let e=n[0].name+"",r;return{c(){r=J(e)},l(t){r=K(t,e)},m(t,l){M(t,r,l)},p(t,l){l&1&&e!==(e=t[0].name+"")&&W(r,e)},d(t){t&&m(r)}}}function Ue(n){let e,r,t,l,o=n[14].label+"",a,s,c;return r=new Y({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),z(r.$$.fragment),t=j(),l=w("span"),a=J(o),s=j(),this.h()},l(p){e=E(p,"DIV",{class:!0});var d=C(e);A(r.$$.fragment,d),t=x(d),l=E(d,"SPAN",{});var T=C(l);a=K(T,o),T.forEach(m),d.forEach(m),s=x(p),this.h()},h(){b(e,"class","row-center gap-2")},m(p,d){M(p,e,d),L(r,e,null),v(e,t),v(e,l),v(l,a),M(p,s,d),c=!0},p(p,d){(!c||d&1)&&o!==(o=p[14].label+"")&&W(a,o)},i(p){c||(y(r.$$.fragment,p),c=!0)},o(p){I(r.$$.fragment,p),c=!1},d(p){p&&(m(e),m(s)),q(r)}}}function ue(n){let e,r;return e=new ve({props:{href:n[14].to,$$slots:{default:[Ue]},$$scope:{ctx:n}}}),{c(){z(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){L(e,t,l),r=!0},p(t,l){const o={};l&1&&(o.href=t[14].to),l&2097153&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){I(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function ze(n){let e,r,t,l=n[14].name+"",o,a,s;return e=new Ee({props:{src:Z(n[14].logo),alt:n[14].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){z(e.$$.fragment),r=j(),t=w("span"),o=J(l),a=j(),this.h()},l(c){A(e.$$.fragment,c),r=x(c),t=E(c,"SPAN",{class:!0});var p=C(t);o=K(p,l),p.forEach(m),a=x(c),this.h()},h(){b(t,"class","text-[0.9em]")},m(c,p){L(e,c,p),M(c,r,p),M(c,t,p),v(t,o),M(c,a,p),s=!0},p(c,p){const d={};p&1&&(d.src=Z(c[14].logo)),p&1&&(d.alt=c[14].name),e.$set(d),(!s||p&1)&&l!==(l=c[14].name+"")&&W(o,l)},i(c){s||(y(e.$$.fragment,c),s=!0)},o(c){I(e.$$.fragment,c),s=!1},d(c){c&&(m(r),m(t),m(a)),q(e,c)}}}function de(n){let e,r;return e=new ve({props:{classes:"inline-flex flex-row items-center justify-center",href:`${oe}/skills/${n[14].slug}`,$$slots:{default:[ze]},$$scope:{ctx:n}}}),{c(){z(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){L(e,t,l),r=!0},p(t,l){const o={};l&1&&(o.href=`${oe}/skills/${t[14].slug}`),l&2097153&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){I(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function Ae(n){let e,r,t,l,o,a=n[0].type+"",s,c,p,d,T,f,_,V,B;t=new De({props:{$$slots:{default:[Me]},$$scope:{ctx:n}}}),d=new $e({});let D=F(n[0].links),i=[];for(let u=0;u<D.length;u+=1)i[u]=ue(fe(n,D,u));const O=u=>I(i[u],1,1,()=>{i[u]=null});let P=F(n[0].skills),$=[];for(let u=0;u<P.length;u+=1)$[u]=de(ce(n,P,u));const k=u=>I($[u],1,1,()=>{$[u]=null});return{c(){e=w("div"),r=w("div"),z(t.$$.fragment),l=j(),o=w("p"),s=J(a),c=j(),p=w("div"),z(d.$$.fragment),T=j(),f=w("div");for(let u=0;u<i.length;u+=1)i[u].c();_=j(),V=w("div");for(let u=0;u<$.length;u+=1)$[u].c();this.h()},l(u){e=E(u,"DIV",{class:!0});var h=C(e);r=E(h,"DIV",{class:!0});var N=C(r);A(t.$$.fragment,N),N.forEach(m),l=x(h),o=E(h,"P",{class:!0});var g=C(o);s=K(g,a),g.forEach(m),c=x(h),p=E(h,"DIV",{class:!0});var R=C(p);A(d.$$.fragment,R),R.forEach(m),T=x(h),f=E(h,"DIV",{class:!0});var le=C(f);for(let Q=0;Q<i.length;Q+=1)i[Q].l(le);le.forEach(m),_=x(h),V=E(h,"DIV",{class:!0});var re=C(V);for(let Q=0;Q<$.length;Q+=1)$[Q].l(re);re.forEach(m),h.forEach(m),this.h()},h(){b(r,"class","text-0.9em"),b(o,"class","font-300 text-center text-[var(--tertiary-text)] m-y-2"),b(p,"class","w-75%"),b(f,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),b(V,"class","row-center flex-wrap m-b-2"),b(e,"class","col-center p-y-20")},m(u,h){M(u,e,h),v(e,r),L(t,r,null),v(e,l),v(e,o),v(o,s),v(e,c),v(e,p),L(d,p,null),v(e,T),v(e,f);for(let N=0;N<i.length;N+=1)i[N]&&i[N].m(f,null);v(e,_),v(e,V);for(let N=0;N<$.length;N+=1)$[N]&&$[N].m(V,null);B=!0},p(u,h){const N={};if(h&2097153&&(N.$$scope={dirty:h,ctx:u}),t.$set(N),(!B||h&1)&&a!==(a=u[0].type+"")&&W(s,a),h&1){D=F(u[0].links);let g;for(g=0;g<D.length;g+=1){const R=fe(u,D,g);i[g]?(i[g].p(R,h),y(i[g],1)):(i[g]=ue(R),i[g].c(),y(i[g],1),i[g].m(f,null))}for(G(),g=D.length;g<i.length;g+=1)O(g);H()}if(h&1){P=F(u[0].skills);let g;for(g=0;g<P.length;g+=1){const R=ce(u,P,g);$[g]?($[g].p(R,h),y($[g],1)):($[g]=de(R),$[g].c(),y($[g],1),$[g].m(V,null))}for(G(),g=P.length;g<$.length;g+=1)k(g);H()}},i(u){if(!B){y(t.$$.fragment,u),y(d.$$.fragment,u);for(let h=0;h<D.length;h+=1)y(i[h]);for(let h=0;h<P.length;h+=1)y($[h]);B=!0}},o(u){I(t.$$.fragment,u),I(d.$$.fragment,u),i=i.filter(Boolean);for(let h=0;h<i.length;h+=1)I(i[h]);$=$.filter(Boolean);for(let h=0;h<$.length;h+=1)I($[h]);B=!1},d(u){u&&m(e),q(t),q(d),ee(i,u),ee($,u)}}}function Le(n){let e,r,t,l,o="No description",a;return r=new Y({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),z(r.$$.fragment),t=j(),l=w("p"),l.textContent=o,this.h()},l(s){e=E(s,"DIV",{class:!0});var c=C(e);A(r.$$.fragment,c),t=x(c),l=E(c,"P",{class:!0,["data-svelte-h"]:!0}),te(l)!=="svelte-1ugej71"&&(l.textContent=o),c.forEach(m),this.h()},h(){b(l,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(s,c){M(s,e,c),L(r,e,null),v(e,t),v(e,l),a=!0},p:X,i(s){a||(y(r.$$.fragment,s),a=!0)},o(s){I(r.$$.fragment,s),a=!1},d(s){s&&m(e),q(r)}}}function qe(n){let e,r;return e=new Ie({props:{content:n[0].description}}),{c(){z(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,l){L(e,t,l),r=!0},p(t,l){const o={};l&1&&(o.content=t[0].description),e.$set(o)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){I(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function Oe(n){let e,r,t,l,o="No screenshots",a;return r=new Y({props:{icon:"i-carbon-image",classes:"text-3.5em"}}),{c(){e=w("div"),z(r.$$.fragment),t=j(),l=w("p"),l.textContent=o,this.h()},l(s){e=E(s,"DIV",{class:!0});var c=C(e);A(r.$$.fragment,c),t=x(c),l=E(c,"P",{class:!0,["data-svelte-h"]:!0}),te(l)!=="svelte-s36p3y"&&(l.textContent=o),c.forEach(m),this.h()},h(){b(l,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(s,c){M(s,e,c),L(r,e,null),v(e,t),v(e,l),a=!0},p:X,i(s){a||(y(r.$$.fragment,s),a=!0)},o(s){I(r.$$.fragment,s),a=!1},d(s){s&&m(e),q(r)}}}function Re(n){let e,r=F(n[1]),t=[];for(let l=0;l<r.length;l+=1)t[l]=pe(ie(n,r,l));return{c(){e=w("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=E(l,"DIV",{class:!0});var o=C(e);for(let a=0;a<t.length;a+=1)t[a].l(o);o.forEach(m),this.h()},h(){b(e,"class","px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10 ")},m(l,o){M(l,e,o);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(l,o){if(o&6){r=F(l[1]);let a;for(a=0;a<r.length;a+=1){const s=ie(l,r,a);t[a]?t[a].p(s,o):(t[a]=pe(s),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=r.length}},i:X,o:X,d(l){l&&m(e),ee(t,l)}}}function pe(n){let e,r,t,l,o,a=n[14].label+"",s,c,p,d;function T(){return n[10](n[16])}return{c(){e=w("div"),r=w("div"),l=j(),o=w("p"),s=J(a),c=j(),this.h()},l(f){e=E(f,"DIV",{class:!0});var _=C(e);r=E(_,"DIV",{class:!0,style:!0}),C(r).forEach(m),l=x(_),o=E(_,"P",{class:!0});var V=C(o);s=K(V,a),V.forEach(m),c=x(_),_.forEach(m),this.h()},h(){b(r,"class","screenshot aspect-video bg-contain w-100% cursor-pointer svelte-o4z7e5"),b(r,"style",t=`background-image: url(${n[14].src});`),b(o,"class","text-[var(--tertiary-text)] font-300"),b(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(f,_){M(f,e,_),v(e,r),v(e,l),v(e,o),v(o,s),v(e,c),p||(d=[S(e,"click",T),S(e,"keydown",n[6]),S(e,"keypress",n[7]),S(e,"keyup",n[8]),S(e,"keyup",n[9])],p=!0)},p(f,_){n=f,_&2&&t!==(t=`background-image: url(${n[14].src});`)&&b(r,"style",t),_&2&&a!==(a=n[14].label+"")&&W(s,a)},d(f){f&&m(e),p=!1,he(d)}}}function Qe(n){let e,r,t,l,o,a,s,c;e=new Ve({props:{title:n[3]}});const p=[Be,xe],d=[];function T(f,_){return f[0]===void 0?0:1}return l=T(n),o=d[l]=p[l](n),s=new je({props:{screenshot:n[4],onClose:n[11]}}),{c(){z(e.$$.fragment),r=j(),t=w("div"),o.c(),a=j(),z(s.$$.fragment),this.h()},l(f){A(e.$$.fragment,f),r=x(f),t=E(f,"DIV",{class:!0});var _=C(t);o.l(_),_.forEach(m),a=x(f),A(s.$$.fragment,f),this.h()},h(){b(t,"class","pb-10 overflow-x-hidden col flex-1")},m(f,_){L(e,f,_),M(f,r,_),M(f,t,_),d[l].m(t,null),M(f,a,_),L(s,f,_),c=!0},p(f,[_]){const V={};_&8&&(V.title=f[3]),e.$set(V);let B=l;l=T(f),l===B?d[l].p(f,_):(G(),I(d[B],1,1,()=>{d[B]=null}),H(),o=d[l],o?o.p(f,_):(o=d[l]=p[l](f),o.c()),y(o,1),o.m(t,null));const D={};_&16&&(D.screenshot=f[4]),_&4&&(D.onClose=f[11]),s.$set(D)},i(f){c||(y(e.$$.fragment,f),y(o),y(s.$$.fragment,f),c=!0)},o(f){I(e.$$.fragment,f),I(o),I(s.$$.fragment,f),c=!1},d(f){f&&(m(r),m(t),m(a)),q(e,f),d[l].d(),q(s,f)}}}function Fe(n,e,r){let t,l,o;be(n,ye,i=>r(12,o=i));let a,s,c;const p=we.subscribe(i=>{r(5,a=i.title),r(0,s=i.items.find(O=>O.slug===o.params.slug)),r(1,c=(s==null?void 0:s.screenshots)??[]),console.log("Loaded project "+s.name)});ke(()=>{p()});let d;function T(i){U.call(this,n,i)}function f(i){U.call(this,n,i)}function _(i){U.call(this,n,i)}function V(i){U.call(this,n,i)}const B=i=>r(2,d=i),D=()=>r(2,d=void 0);return n.$$.update=()=>{n.$$.dirty&6&&r(4,t=typeof d<"u"&&c[d]?c[d]:void 0),n.$$.dirty&33&&r(3,l=s?`${s.name} - ${a}`:a)},[s,c,d,l,t,a,T,f,_,V,B,D]}class st extends me{constructor(e){super(),ge(this,e,Fe,Qe,_e,{})}}export{st as component};
