import{s as ye,S as Pe,f as D,g as C,h as P,d as $,j as v,i as J,a as k,e as $e,c as y,l as G,m as H,N as m,p as Q,_ as ve,Q as Ie}from"../chunks/scheduler.0fceb7f2.js";import{S as Ee,i as Ae,b as V,d as F,m as j,a as S,t as I,e as z,g as pe,c as he}from"../chunks/index.b70c7824.js";import{s as Le,e as ne,a as Ve,o as Fe}from"../chunks/language.b673de48.js";import{C as je}from"../chunks/Card.e9f6a551.js";import{C as ze}from"../chunks/Chip.62f551f9.js";import{A as T,U as se,g as be}from"../chunks/index.8759b4d5.js";import{S as Ne}from"../chunks/SearchPage.c2cc7cb9.js";import{w as Ue}from"../chunks/paths.dd172f24.js";import{f as oe}from"../chunks/app.b4d01cb1.js";import{C as ge}from"../chunks/CardDivider.afac5386.js";import{s as Te}from"../chunks/search.83d2b62f.js";const Je=[{degree:"Associates of Arts (AA)",description:"",location:"Valencia College (Orlando, FL)",logo:T.Valencia,name:"",organization:"Dual Enrollment from University High School",period:{from:new Date(2018,6,1),to:new Date(2020,8,1)},shortDescription:"",slug:"aa-associates",subjects:["Algebra","Geometry","Physics","Chemistry","Interpersonal Communications"]},{degree:"Computer Science (BS) – Accelerated BS to MS",description:"",location:"University of Central Florida (Orlando, FL)",logo:T.UCF,name:"",organization:"College of Engineering and Computer Science",period:{from:new Date(2020,8,1),to:new Date(2022,5,1)},shortDescription:"",slug:"cs-bachelors",subjects:["C","Python","Java","JavaScript","Computer Algorithms","Artificial Intelligence","Computer Vision","Calculus","TensorFlow","PyTorch","React/React Native","Regex","SciKit","NumPy"]},{degree:"Computer Science (MS) – Accelerated BS to MS",description:"",location:"University of Central Florida (Orlando, FL)",logo:T.UCF,name:"",organization:"College of Engineering and Computer Science",period:{from:new Date(2022,8,1),to:new Date(2023,5,1)},shortDescription:"",slug:"cs-masters",subjects:["C","Python","MatLab","Computer Algorithms","Artificial Intelligence","Computer Vision","Natural Language Processing","TensorFlow","PyTorch","SciKit","NumPy"]},{degree:"Study Abroad - Learning Japanese",description:"",location:"KCP International Japanese Language School (Tokyo, Japan)",logo:T.KCP,name:"",organization:"Studying for JLPT N2",period:{from:new Date(2023,10,1),to:new Date(2025,3,1)},shortDescription:"",slug:"kcp",subjects:["Japanese"]}],Ke=[{degree:"準学士号 (AA)",description:"",location:"バレンシアカレッジ（オーランド、フロリダ州）",logo:T.Valencia,name:"",organization:"ユニバーシティ高校からのデュアルエンロールメント",period:{from:new Date(2018,6,1),to:new Date(2020,8,1)},shortDescription:"",slug:"aa-associates",subjects:["代数学","幾何学","物理学","化学","対人コミュニケーション"]},{degree:"コンピュータサイエンス学士（BS）– 学士・修士一貫プログラム",description:"",location:"セントラルフロリダ大学（オーランド、フロリダ州）",logo:T.UCF,name:"",organization:"工学部・コンピュータサイエンス学科",period:{from:new Date(2020,8,1),to:new Date(2022,5,1)},shortDescription:"",slug:"cs-bachelors",subjects:["C","Python","Java","JavaScript","コンピュータアルゴリズム","人工知能","コンピュータビジョン","微積分","TensorFlow","PyTorch","React/React Native","正規表現","SciKit","NumPy"]},{degree:"コンピュータサイエンス修士（MS）– 学士・修士一貫プログラム",description:"",location:"セントラルフロリダ大学（オーランド、フロリダ州）",logo:T.UCF,name:"",organization:"工学部・コンピュータサイエンス学科",period:{from:new Date(2022,8,1),to:new Date(2023,5,1)},shortDescription:"",slug:"cs-masters",subjects:["C","Python","MatLab","コンピュータアルゴリズム","人工知能","コンピュータビジョン","自然言語処理","TensorFlow","PyTorch","SciKit","NumPy"]},{degree:"留学 - 日本語学習",description:"",location:"KCP地球市民日本語学校（東京、日本）",logo:T.KCP,name:"",organization:"JLPT N2のための学習",period:{from:new Date(2023,10,1),to:new Date(2025,3,1)},shortDescription:"",slug:"kcp",subjects:["日本語"]}],ae=Ue({title:"N/A",items:[]});Le.subscribe(c=>{switch(c){case"en":ae.set({title:"Education",items:Je});break;case"ja":ae.set({title:"学歴",items:Ke});break;default:console.error("Loading Education - Unknown language selected."),ae.set({title:"N/A",items:[]});break}});function we(c,t,r){const e=c.slice();return e[7]=t[r],e[9]=r,e}function De(c,t,r){const e=c.slice();return e[10]=t[r],e}function Me(c){let t,r,e=[],n=new Map,u,i,f=ne(c[1]);const s=o=>o[7].slug;for(let o=0;o<f.length;o+=1){let a=we(c,f,o),p=s(a);n.set(p,e[o]=Se(p,a))}return{c(){t=D("div"),r=k();for(let o=0;o<e.length;o+=1)e[o].c();u=$e(),this.h()},l(o){t=C(o,"DIV",{class:!0}),P(t).forEach($),r=y(o);for(let a=0;a<e.length;a+=1)e[a].l(o);u=$e(),this.h()},h(){v(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(o,a){J(o,t,a),J(o,r,a);for(let p=0;p<e.length;p+=1)e[p]&&e[p].m(o,a);J(o,u,a),i=!0},p(o,a){a&2&&(f=ne(o[1]),pe(),e=Ve(e,a,s,1,o,f,n,u.parentNode,Fe,Se,u,we),he())},i(o){if(!i){for(let a=0;a<f.length;a+=1)S(e[a]);i=!0}},o(o){for(let a=0;a<e.length;a+=1)I(e[a]);i=!1},d(o){o&&($(t),$(r),$(u));for(let a=0;a<e.length;a+=1)e[a].d(o)}}}function xe(c){let t,r,e,n,u,i;return r=new se({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=D("div"),V(r.$$.fragment),e=k(),n=D("p"),u=G(c[2]),this.h()},l(f){t=C(f,"DIV",{class:!0});var s=P(t);F(r.$$.fragment,s),e=y(s),n=C(s,"P",{class:!0});var o=P(n);u=H(o,c[2]),o.forEach($),s.forEach($),this.h()},h(){v(n,"class","font-300"),v(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(f,s){J(f,t,s),j(r,t,null),m(t,e),m(t,n),m(n,u),i=!0},p(f,s){(!i||s&4)&&Q(u,f[2])},i(f){i||(S(r.$$.fragment,f),i=!0)},o(f){I(r.$$.fragment,f),i=!1},d(f){f&&$(t),z(r)}}}function Re(c){let t=c[10]+"",r;return{c(){r=G(t)},l(e){r=H(e,t)},m(e,n){J(e,r,n)},p(e,n){n&2&&t!==(t=e[10]+"")&&Q(r,t)},d(e){e&&$(r)}}}function Ce(c){let t,r;return t=new ze({props:{$$slots:{default:[Re]},$$scope:{ctx:c}}}),{c(){V(t.$$.fragment)},l(e){F(t.$$.fragment,e)},m(e,n){j(t,e,n),r=!0},p(e,n){const u={};n&8194&&(u.$$scope={dirty:n,ctx:e}),t.$set(u)},i(e){r||(S(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function Be(c){let t,r,e,n,u,i,f=c[7].degree+"",s,o,a,p=c[7].organization+"",w,b,g,E,q,N,K,le,W=c[7].location+"",Z,ie,M,ce,U,x,ue,X=oe(c[7].period.from)+" ~ "+oe(c[7].period.to),ee,fe,R,me,B,A;E=new ge({}),K=new se({props:{icon:"i-carbon-location"}}),M=new ge({}),x=new se({props:{icon:"i-carbon-time"}}),R=new ge({});let O=ne(c[7].subjects),h=[];for(let l=0;l<O.length;l+=1)h[l]=Ce(De(c,O,l));const ke=l=>I(h[l],1,1,()=>{h[l]=null});return{c(){t=D("div"),r=D("img"),u=k(),i=D("div"),s=G(f),o=k(),a=D("div"),w=G(p),b=k(),g=D("div"),V(E.$$.fragment),q=k(),N=D("div"),V(K.$$.fragment),le=k(),Z=G(W),ie=k(),V(M.$$.fragment),ce=k(),U=D("div"),V(x.$$.fragment),ue=k(),ee=G(X),fe=k(),V(R.$$.fragment),me=k(),B=D("div");for(let l=0;l<h.length;l+=1)h[l].c();this.h()},l(l){t=C(l,"DIV",{class:!0});var d=P(t);r=C(d,"IMG",{src:!0,alt:!0,height:!0,width:!0,class:!0}),u=y(d),i=C(d,"DIV",{class:!0});var _=P(i);s=H(_,f),_.forEach($),o=y(d),a=C(d,"DIV",{});var Y=P(a);w=H(Y,p),Y.forEach($),b=y(d),g=C(d,"DIV",{class:!0});var L=P(g);F(E.$$.fragment,L),q=y(L),N=C(L,"DIV",{class:!0});var te=P(N);F(K.$$.fragment,te),le=y(te),Z=H(te,W),te.forEach($),ie=y(L),F(M.$$.fragment,L),ce=y(L),U=C(L,"DIV",{class:!0});var re=P(U);F(x.$$.fragment,re),ue=y(re),ee=H(re,X),re.forEach($),fe=y(L),F(R.$$.fragment,L),L.forEach($),me=y(d),B=C(d,"DIV",{class:!0});var _e=P(B);for(let de=0;de<h.length;de+=1)h[de].l(_e);_e.forEach($),d.forEach($),this.h()},h(){ve(r.src,e=be(c[7].logo))||v(r,"src",e),v(r,"alt",n=c[7].organization),v(r,"height","50"),v(r,"width","50"),v(r,"class","mb-5"),v(i,"class","text-[1.3em]"),v(N,"class","row items-center gap-2"),v(U,"class","row items-center gap-2"),v(g,"class","col text-[0.9em]"),v(B,"class","row flex-wrap gap-1"),v(t,"class","flex-1 col gap-2 items-stretch")},m(l,d){J(l,t,d),m(t,r),m(t,u),m(t,i),m(i,s),m(t,o),m(t,a),m(a,w),m(t,b),m(t,g),j(E,g,null),m(g,q),m(g,N),j(K,N,null),m(N,le),m(N,Z),m(g,ie),j(M,g,null),m(g,ce),m(g,U),j(x,U,null),m(U,ue),m(U,ee),m(g,fe),j(R,g,null),m(t,me),m(t,B);for(let _=0;_<h.length;_+=1)h[_]&&h[_].m(B,null);A=!0},p(l,d){if((!A||d&2&&!ve(r.src,e=be(l[7].logo)))&&v(r,"src",e),(!A||d&2&&n!==(n=l[7].organization))&&v(r,"alt",n),(!A||d&2)&&f!==(f=l[7].degree+"")&&Q(s,f),(!A||d&2)&&p!==(p=l[7].organization+"")&&Q(w,p),(!A||d&2)&&W!==(W=l[7].location+"")&&Q(Z,W),(!A||d&2)&&X!==(X=oe(l[7].period.from)+" ~ "+oe(l[7].period.to))&&Q(ee,X),d&2){O=ne(l[7].subjects);let _;for(_=0;_<O.length;_+=1){const Y=De(l,O,_);h[_]?(h[_].p(Y,d),S(h[_],1)):(h[_]=Ce(Y),h[_].c(),S(h[_],1),h[_].m(B,null))}for(pe(),_=O.length;_<h.length;_+=1)ke(_);he()}},i(l){if(!A){S(E.$$.fragment,l),S(K.$$.fragment,l),S(M.$$.fragment,l),S(x.$$.fragment,l),S(R.$$.fragment,l);for(let d=0;d<O.length;d+=1)S(h[d]);A=!0}},o(l){I(E.$$.fragment,l),I(K.$$.fragment,l),I(M.$$.fragment,l),I(x.$$.fragment,l),I(R.$$.fragment,l),h=h.filter(Boolean);for(let d=0;d<h.length;d+=1)I(h[d]);A=!1},d(l){l&&$(t),z(E),z(K),z(M),z(x),z(R),Ie(h,l)}}}function Se(c,t){let r,e,n,u,i,f,s,o,a,p,w;return i=new se({props:{icon:"i-carbon-condition-point"}}),o=new je({props:{$$slots:{default:[Be]},$$scope:{ctx:t}}}),{key:c,first:null,c(){r=D("div"),e=D("div"),n=k(),u=D("div"),V(i.$$.fragment),f=k(),s=D("div"),V(o.$$.fragment),a=k(),this.h()},l(b){r=C(b,"DIV",{class:!0});var g=P(r);e=C(g,"DIV",{class:!0}),P(e).forEach($),n=y(g),u=C(g,"DIV",{class:!0});var E=P(u);F(i.$$.fragment,E),E.forEach($),f=y(g),s=C(g,"DIV",{class:!0});var q=P(s);F(o.$$.fragment,q),q.forEach($),a=y(g),g.forEach($),this.h()},h(){v(e,"class","flex-1 hidden lg:flex"),v(u,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),v(s,"class","col flex-1 items-stretch"),v(r,"class",p=`flex ${t[9]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(b,g){J(b,r,g),m(r,e),m(r,n),m(r,u),j(i,u,null),m(r,f),m(r,s),j(o,s,null),m(r,a),w=!0},p(b,g){t=b;const E={};g&8194&&(E.$$scope={dirty:g,ctx:t}),o.$set(E),(!w||g&2&&p!==(p=`flex ${t[9]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&v(r,"class",p)},i(b){w||(S(i.$$.fragment,b),S(o.$$.fragment,b),w=!0)},o(b){I(i.$$.fragment,b),I(o.$$.fragment,b),w=!1},d(b){b&&$(r),z(i),z(o)}}}function Oe(c){let t,r,e,n;const u=[xe,Me],i=[];function f(s,o){return s[1].length===0?0:1}return r=f(c),e=i[r]=u[r](c),{c(){t=D("div"),e.c(),this.h()},l(s){t=C(s,"DIV",{class:!0});var o=P(t);e.l(o),o.forEach($),this.h()},h(){v(t,"class","col items-center relative mt-10 flex-1")},m(s,o){J(s,t,o),i[r].m(t,null),n=!0},p(s,o){let a=r;r=f(s),r===a?i[r].p(s,o):(pe(),I(i[a],1,1,()=>{i[a]=null}),he(),e=i[r],e?e.p(s,o):(e=i[r]=u[r](s),e.c()),S(e,1),e.m(t,null))},i(s){n||(S(e),n=!0)},o(s){I(e),n=!1},d(s){s&&$(t),i[r].d()}}}function qe(c){let t,r;return t=new Ne({props:{title:c[0],search:Ge,$$slots:{default:[Oe]},$$scope:{ctx:c}}}),t.$on("search",c[3]),{c(){V(t.$$.fragment)},l(e){F(t.$$.fragment,e)},m(e,n){j(t,e,n),r=!0},p(e,[n]){const u={};n&1&&(u.title=e[0]),n&8198&&(u.$$scope={dirty:n,ctx:e}),t.$set(u)},i(e){r||(S(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}let Ge="";function He(c,t,r){let e,n,u,i;const f=ae.subscribe(a=>{r(0,e=a.title),r(1,n=a.items),u=a.items}),s=Te.subscribe(a=>{r(2,i=a.nothingFoundPlaceholder)});return Pe(()=>{f(),s()}),[e,n,i,a=>{const p=a.detail.search;r(1,n=u.filter(w=>w.degree.toLowerCase().includes(p)||w.description.toLowerCase().includes(p)||w.location.toLowerCase().includes(p)||w.name.toLowerCase().includes(p)||w.organization.toLowerCase().includes(p)||w.subjects.some(b=>b.toLowerCase().includes(p))))}]}class st extends Ee{constructor(t){super(),Ae(this,t,He,qe,ye,{})}}export{st as component};
