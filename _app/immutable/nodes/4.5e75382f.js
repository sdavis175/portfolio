import{s as Ve,f as D,a as V,l as Z,g as E,h as I,c as S,d as g,m as ee,j as k,i as M,N as $,p as he,Q as _e,S as Ue,e as ve}from"../chunks/scheduler.0fceb7f2.js";import{S as Se,i as ye,b as P,d as L,m as U,a as v,t as x,e as F,g as se,c as oe}from"../chunks/index.b70c7824.js";import{e as O,a as Fe,o as Me}from"../chunks/language.b6256ed3.js";import{c as Ne,g as be}from"../chunks/app.dbb97b07.js";import{C as Be}from"../chunks/Card.830aea2a.js";import{C as je}from"../chunks/CardLogo.62bc33b9.js";import{C as qe,a as Ae}from"../chunks/ChipIcon.d13b7014.js";import{g as ae,U as te}from"../chunks/index.c1acf76c.js";import{b as ie}from"../chunks/paths.f2019bf4.js";import{C as Ye}from"../chunks/Chip.62f551f9.js";import{C as we}from"../chunks/CardDivider.afac5386.js";import{S as ze}from"../chunks/SearchPage.06a52b39.js";import{e as He}from"../chunks/experience.a7f217ae.js";import{i as Qe}from"../chunks/index.6ae31474.js";import{s as Re}from"../chunks/search.435d5da6.js";function xe(i,t,r){const e=i.slice();return e[6]=t[r],e}function ke(i,t,r){const e=i.slice();return e[9]=t[r],e}function Te(i){let t,r,e,l=i[9].label+"",o,f,m;return t=new te({props:{icon:i[9].icon}}),{c(){P(t.$$.fragment),r=V(),e=D("span"),o=Z(l),f=V(),this.h()},l(s){L(t.$$.fragment,s),r=S(s),e=E(s,"SPAN",{class:!0});var n=I(e);o=ee(n,l),n.forEach(g),f=S(s),this.h()},h(){k(e,"class","m-l-1")},m(s,n){U(t,s,n),M(s,r,n),M(s,e,n),$(e,o),M(s,f,n),m=!0},p(s,n){const c={};n&2&&(c.icon=s[9].icon),t.$set(c),(!m||n&2)&&l!==(l=s[9].label+"")&&he(o,l)},i(s){m||(v(t.$$.fragment,s),m=!0)},o(s){x(t.$$.fragment,s),m=!1},d(s){s&&(g(r),g(e),g(f)),F(t,s)}}}function De(i){let t,r;return t=new Ye({props:{$$slots:{default:[Te]},$$scope:{ctx:i}}}),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){U(t,e,l),r=!0},p(e,l){const o={};l&4098&&(o.$$scope={dirty:l,ctx:e}),t.$set(o)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){x(t.$$.fragment,e),r=!1},d(e){F(t,e)}}}function Ee(i){let t,r;return t=new Ae({props:{logo:ae(i[6].logo),name:i[6].name,href:`${ie}/skills/${i[6].slug}`}}),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){U(t,e,l),r=!0},p(e,l){const o={};l&1&&(o.logo=ae(e[6].logo)),l&1&&(o.name=e[6].name),l&1&&(o.href=`${ie}/skills/${e[6].slug}`),t.$set(o)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){x(t.$$.fragment,e),r=!1},d(e){F(t,e)}}}function Ge(i){let t,r,e,l,o,f,m,s,n,c,h,C,w,y,N,J,A,ce,B,Y,fe,me,ue,z,$e,K,W=i[0].shortDescription+"",re,pe,H,X;r=new je({props:{src:ae(i[0].logo),alt:i[0].company,size:55}}),m=new qe({props:{title:`${i[0].name}`}});let Q=O(i[1]),d=[];for(let a=0;a<Q.length;a+=1)d[a]=De(ke(i,Q,a));const Pe=a=>x(d[a],1,1,()=>{d[a]=null});w=new te({props:{icon:"i-carbon-calendar",classes:"text-1.25em"}}),A=new we({}),Y=new te({props:{icon:"i-carbon-time",classes:"text-1.25em"}}),z=new we({});let R=O(i[0].skills),_=[];for(let a=0;a<R.length;a+=1)_[a]=Ee(xe(i,R,a));const Le=a=>x(_[a],1,1,()=>{_[a]=null});return{c(){t=D("div"),P(r.$$.fragment),e=V(),l=D("div"),o=D("div"),f=D("h3"),P(m.$$.fragment),s=V(),n=D("div");for(let a=0;a<d.length;a+=1)d[a].c();c=V(),h=D("div"),C=D("div"),P(w.$$.fragment),y=V(),N=Z(i[3]),J=V(),P(A.$$.fragment),ce=V(),B=D("div"),P(Y.$$.fragment),fe=V(),me=Z(i[2]),ue=V(),P(z.$$.fragment),$e=V(),K=D("div"),re=Z(W),pe=V(),H=D("div");for(let a=0;a<_.length;a+=1)_[a].c();this.h()},l(a){t=E(a,"DIV",{class:!0});var p=I(t);L(r.$$.fragment,p),e=S(p),l=E(p,"DIV",{class:!0});var b=I(l);o=E(b,"DIV",{class:!0});var T=I(o);f=E(T,"H3",{class:!0});var u=I(f);L(m.$$.fragment,u),u.forEach(g),s=S(T),n=E(T,"DIV",{class:!0});var j=I(n);for(let G=0;G<d.length;G+=1)d[G].l(j);j.forEach(g),T.forEach(g),c=S(b),h=E(b,"DIV",{class:!0});var q=I(h);C=E(q,"DIV",{class:!0});var le=I(C);L(w.$$.fragment,le),y=S(le),N=ee(le,i[3]),le.forEach(g),J=S(q),L(A.$$.fragment,q),ce=S(q),B=E(q,"DIV",{class:!0});var ne=I(B);L(Y.$$.fragment,ne),fe=S(ne),me=ee(ne,i[2]),ne.forEach(g),ue=S(q),L(z.$$.fragment,q),q.forEach(g),$e=S(b),K=E(b,"DIV",{class:!0});var ge=I(K);re=ee(ge,W),ge.forEach(g),pe=S(b),H=E(b,"DIV",{class:!0});var de=I(H);for(let G=0;G<_.length;G+=1)_[G].l(de);de.forEach(g),b.forEach(g),p.forEach(g),this.h()},h(){k(f,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),k(n,"class","row flex-wrap items-start m-b-2 gap-1 text-0.9em font-300"),k(o,"class","col "),k(C,"class","row items-center gap-2"),k(B,"class","row items-center gap-2"),k(h,"class","text-[var(--text)] text-[0.9em]"),k(K,"class","experience-description text-[0.9em]"),k(H,"class","flex flex-row flex-wrap mt-5"),k(l,"class","col ml-0 md:ml-[20px] gap-3 w-full"),k(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(a,p){M(a,t,p),U(r,t,null),$(t,e),$(t,l),$(l,o),$(o,f),U(m,f,null),$(o,s),$(o,n);for(let b=0;b<d.length;b+=1)d[b]&&d[b].m(n,null);$(l,c),$(l,h),$(h,C),U(w,C,null),$(C,y),$(C,N),$(h,J),U(A,h,null),$(h,ce),$(h,B),U(Y,B,null),$(B,fe),$(B,me),$(h,ue),U(z,h,null),$(l,$e),$(l,K),$(K,re),$(l,pe),$(l,H);for(let b=0;b<_.length;b+=1)_[b]&&_[b].m(H,null);X=!0},p(a,p){const b={};p&1&&(b.src=ae(a[0].logo)),p&1&&(b.alt=a[0].company),r.$set(b);const T={};if(p&1&&(T.title=`${a[0].name}`),m.$set(T),p&2){Q=O(a[1]);let u;for(u=0;u<Q.length;u+=1){const j=ke(a,Q,u);d[u]?(d[u].p(j,p),v(d[u],1)):(d[u]=De(j),d[u].c(),v(d[u],1),d[u].m(n,null))}for(se(),u=Q.length;u<d.length;u+=1)Pe(u);oe()}if((!X||p&1)&&W!==(W=a[0].shortDescription+"")&&he(re,W),p&1){R=O(a[0].skills);let u;for(u=0;u<R.length;u+=1){const j=xe(a,R,u);_[u]?(_[u].p(j,p),v(_[u],1)):(_[u]=Ee(j),_[u].c(),v(_[u],1),_[u].m(H,null))}for(se(),u=R.length;u<_.length;u+=1)Le(u);oe()}},i(a){if(!X){v(r.$$.fragment,a),v(m.$$.fragment,a);for(let p=0;p<Q.length;p+=1)v(d[p]);v(w.$$.fragment,a),v(A.$$.fragment,a),v(Y.$$.fragment,a),v(z.$$.fragment,a);for(let p=0;p<R.length;p+=1)v(_[p]);X=!0}},o(a){x(r.$$.fragment,a),x(m.$$.fragment,a),d=d.filter(Boolean);for(let p=0;p<d.length;p+=1)x(d[p]);x(w.$$.fragment,a),x(A.$$.fragment,a),x(Y.$$.fragment,a),x(z.$$.fragment,a),_=_.filter(Boolean);for(let p=0;p<_.length;p+=1)x(_[p]);X=!1},d(a){a&&g(t),F(r),F(m),_e(d,a),F(w),F(A),F(Y),F(z),_e(_,a)}}}function Je(i){let t,r;return t=new Be({props:{margin:"0px 0px 20px 0px",tiltDegree:2,href:`${ie}/experience/${i[0].slug}`,color:i[0].color,$$slots:{default:[Ge]},$$scope:{ctx:i}}}),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){U(t,e,l),r=!0},p(e,[l]){const o={};l&1&&(o.href=`${ie}/experience/${e[0].slug}`),l&1&&(o.color=e[0].color),l&4099&&(o.$$scope={dirty:l,ctx:e}),t.$set(o)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){x(t.$$.fragment,e),r=!1},d(e){F(t,e)}}}function Ke(i,t,r){let e,{experience:l}=t;const o=Ne(l.period.from,l.period.to),f=`${be(l.period.from.getMonth())} ${l.period.from.getFullYear()}`,m=l.period.to?`${be(l.period.to.getMonth())} ${l.period.to.getFullYear()}`:"Present",s=`${f} - ${m}`;return i.$$set=n=>{"experience"in n&&r(0,l=n.experience)},i.$$.update=()=>{i.$$.dirty&1&&r(1,e=[{label:l.company,icon:"i-carbon-building"},{label:l.location,icon:"i-carbon-location"},{label:l.contract,icon:"i-carbon-hourglass"}])},[l,e,o,s]}class Oe extends Se{constructor(t){super(),ye(this,t,Ke,Je,Ve,{experience:0})}}function Ie(i,t,r){const e=i.slice();return e[7]=t[r],e[9]=r,e}function We(i){let t,r,e=[],l=new Map,o,f,m=O(i[1]);const s=n=>n[7].slug;for(let n=0;n<m.length;n+=1){let c=Ie(i,m,n),h=s(c);l.set(h,e[n]=Ce(h,c))}return{c(){t=D("div"),r=V();for(let n=0;n<e.length;n+=1)e[n].c();o=ve(),this.h()},l(n){t=E(n,"DIV",{class:!0}),I(t).forEach(g),r=S(n);for(let c=0;c<e.length;c+=1)e[c].l(n);o=ve(),this.h()},h(){k(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(n,c){M(n,t,c),M(n,r,c);for(let h=0;h<e.length;h+=1)e[h]&&e[h].m(n,c);M(n,o,c),f=!0},p(n,c){c&2&&(m=O(n[1]),se(),e=Fe(e,c,s,1,n,m,l,o.parentNode,Me,Ce,o,Ie),oe())},i(n){if(!f){for(let c=0;c<m.length;c+=1)v(e[c]);f=!0}},o(n){for(let c=0;c<e.length;c+=1)x(e[c]);f=!1},d(n){n&&(g(t),g(r),g(o));for(let c=0;c<e.length;c+=1)e[c].d(n)}}}function Xe(i){let t,r,e,l,o,f;return r=new te({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=D("div"),P(r.$$.fragment),e=V(),l=D("p"),o=Z(i[2]),this.h()},l(m){t=E(m,"DIV",{class:!0});var s=I(t);L(r.$$.fragment,s),e=S(s),l=E(s,"P",{class:!0});var n=I(l);o=ee(n,i[2]),n.forEach(g),s.forEach(g),this.h()},h(){k(l,"class","font-300"),k(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(m,s){M(m,t,s),U(r,t,null),$(t,e),$(t,l),$(l,o),f=!0},p(m,s){(!f||s&4)&&he(o,m[2])},i(m){f||(v(r.$$.fragment,m),f=!0)},o(m){x(r.$$.fragment,m),f=!1},d(m){m&&g(t),F(r)}}}function Ce(i,t){let r,e,l,o,f,m,s,n,c,h,C;return f=new te({props:{icon:"i-carbon-condition-point",classes:""}}),n=new Oe({props:{experience:t[7]}}),{key:i,first:null,c(){r=D("div"),e=D("div"),l=V(),o=D("div"),P(f.$$.fragment),m=V(),s=D("div"),P(n.$$.fragment),c=V(),this.h()},l(w){r=E(w,"DIV",{class:!0});var y=I(r);e=E(y,"DIV",{class:!0}),I(e).forEach(g),l=S(y),o=E(y,"DIV",{class:!0});var N=I(o);L(f.$$.fragment,N),N.forEach(g),m=S(y),s=E(y,"DIV",{class:!0});var J=I(s);L(n.$$.fragment,J),J.forEach(g),c=S(y),y.forEach(g),this.h()},h(){k(e,"class","flex-1 hidden lg:flex"),k(o,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),k(s,"class","flex-1 col items-stretch"),k(r,"class",h=`flex ${t[9]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(w,y){M(w,r,y),$(r,e),$(r,l),$(r,o),U(f,o,null),$(r,m),$(r,s),U(n,s,null),$(r,c),C=!0},p(w,y){t=w;const N={};y&2&&(N.experience=t[7]),n.$set(N),(!C||y&2&&h!==(h=`flex ${t[9]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&k(r,"class",h)},i(w){C||(v(f.$$.fragment,w),v(n.$$.fragment,w),C=!0)},o(w){x(f.$$.fragment,w),x(n.$$.fragment,w),C=!1},d(w){w&&g(r),F(f),F(n)}}}function Ze(i){let t,r,e,l;const o=[Xe,We],f=[];function m(s,n){return s[1].length===0?0:1}return r=m(i),e=f[r]=o[r](i),{c(){t=D("div"),e.c(),this.h()},l(s){t=E(s,"DIV",{class:!0});var n=I(t);e.l(n),n.forEach(g),this.h()},h(){k(t,"class","col items-center relative mt-10 flex-1")},m(s,n){M(s,t,n),f[r].m(t,null),l=!0},p(s,n){let c=r;r=m(s),r===c?f[r].p(s,n):(se(),x(f[c],1,1,()=>{f[c]=null}),oe(),e=f[r],e?e.p(s,n):(e=f[r]=o[r](s),e.c()),v(e,1),e.m(t,null))},i(s){l||(v(e),l=!0)},o(s){x(e),l=!1},d(s){s&&g(t),f[r].d()}}}function et(i){let t,r;return t=new ze({props:{title:i[0],$$slots:{default:[Ze]},$$scope:{ctx:i}}}),t.$on("search",i[3]),{c(){P(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,l){U(t,e,l),r=!0},p(e,[l]){const o={};l&1&&(o.title=e[0]),l&1030&&(o.$$scope={dirty:l,ctx:e}),t.$set(o)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){x(t.$$.fragment,e),r=!1},d(e){F(t,e)}}}function tt(i,t,r){let e=[],l,o=[...e],f;const m=He.subscribe(c=>{r(0,l=c.title),e=c.items,r(1,o=[...e])}),s=Re.subscribe(c=>{r(2,f=c.nothingFoundPlaceholder)});return Ue(()=>{m(),s()}),[l,o,f,c=>{const h=c.detail.search;if(Qe(h)){r(1,o=e);return}r(1,o=e.filter(C=>C.name.toLowerCase().includes(h)||C.company.toLowerCase().includes(h)||C.description.toLowerCase().includes(h)))}]}class dt extends Se{constructor(t){super(),ye(this,t,tt,et,Ve,{})}}export{dt as component};