import{s as S,q as j,U as K,a as v,f as T,c as y,g as C,h as V,d as p,j as k,i as g,K as q,a3 as P,V as U,W,X,l as z,m as A,p as B}from"./scheduler.81feb935.js";import{S as F,i as G,f as H,b as w,d as D,m as E,a as d,t as $,e as I}from"./index.a2ec4cac.js";import{M as J}from"./app.4c0705ca.js";import{T as L}from"./TabTitle.0562decf.js";function N(l){let e;return{c(){e=z(l[0])},l(a){e=A(a,l[0])},m(a,r){g(a,e,r)},p(a,r){r&1&&B(e,a[0])},d(a){a&&p(e)}}}function O(l){let e,a,r,f,i,_,n,m;function M(t){l[2](t)}let b={};l[0]!==void 0&&(b.title=l[0]),e=new L({props:b}),j.push(()=>H(e,"title",M)),i=new J({props:{$$slots:{default:[N]},$$scope:{ctx:l}}});const u=l[1].default,o=K(u,l,l[3],null);return{c(){w(e.$$.fragment),r=v(),f=T("div"),w(i.$$.fragment),_=v(),n=T("div"),o&&o.c(),this.h()},l(t){D(e.$$.fragment,t),r=y(t),f=C(t,"DIV",{class:!0});var s=V(f);D(i.$$.fragment,s),_=y(s),n=C(s,"DIV",{class:!0});var c=V(n);o&&o.l(c),c.forEach(p),s.forEach(p),this.h()},h(){k(n,"class","col gap-5 flex-1"),k(f,"class","flex-1 col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12")},m(t,s){E(e,t,s),g(t,r,s),g(t,f,s),E(i,f,null),q(f,_),q(f,n),o&&o.m(n,null),m=!0},p(t,[s]){const c={};!a&&s&1&&(a=!0,c.title=t[0],P(()=>a=!1)),e.$set(c);const h={};s&9&&(h.$$scope={dirty:s,ctx:t}),i.$set(h),o&&o.p&&(!m||s&8)&&U(o,u,t,t[3],m?X(u,t[3],s,null):W(t[3]),null)},i(t){m||(d(e.$$.fragment,t),d(i.$$.fragment,t),d(o,t),m=!0)},o(t){$(e.$$.fragment,t),$(i.$$.fragment,t),$(o,t),m=!1},d(t){t&&(p(r),p(f)),I(e,t),I(i),o&&o.d(t)}}}function Q(l,e,a){let{$$slots:r={},$$scope:f}=e,{title:i="Title"}=e;function _(n){i=n,a(0,i)}return l.$$set=n=>{"title"in n&&a(0,i=n.title),"$$scope"in n&&a(3,f=n.$$scope)},[i,r,_,f]}class tt extends F{constructor(e){super(),G(this,e,Q,O,S,{title:0})}}export{tt as C};
