import{A as e}from"./index.c1acf76c.js";import{s as h}from"./language.b6256ed3.js";import{w as f}from"./paths.f2019bf4.js";function j(a,...c){const t=Object.assign({},a);return Object.keys(t).forEach(r=>{c.includes(r)&&delete t[r]}),t}const v="",w="",k="",S="",D="",M="",T="",J="",A="",P="",R="",B="",H="",z="",x="",E="",L="",C="",p="",N="",I="",O=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`,W=`# Svelteあいうえお

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`,F="",K="",U="",G="",V="",$="",Q="",X="",Y="",Z="",_="",q="",ee="",oe="",ne="",ae="",te="",re="",se="",ce="",ie="",le="",ge="",pe="",ue="",me="",de="",ye="",n=a=>a,u=[n({name:"Programming Languages",slug:"pro-lang"}),n({name:"Frameworks",slug:"framework"}),n({name:"Libraries",slug:"library"}),n({name:"Languages",slug:"lang"}),n({name:"Databases",slug:"db"}),n({name:"ORMs",slug:"orm"}),n({name:"DevOps",slug:"devops"}),n({name:"Testing",slug:"test"}),n({name:"Dev Tools",slug:"devtools"}),n({name:"Markup & Style",slug:"markup-style"}),n({name:"Design",slug:"design"}),n({name:"Soft Skills",slug:"soft"}),n({name:"Applications & Services",slug:"application"})],m=[n({name:"プログラミング言語",slug:"pro-lang"}),n({name:"フレームワーク",slug:"framework"}),n({name:"ライブラリ",slug:"library"}),n({name:"言語",slug:"lang"}),n({name:"データベース",slug:"db"}),n({name:"ORM（オブジェクトリレーショナルマッピング）",slug:"orm"}),n({name:"DevOps（デブオプス）",slug:"devops"}),n({name:"テスト",slug:"test"}),n({name:"開発ツール",slug:"devtools"}),n({name:"マークアップ＆スタイル",slug:"markup-style"}),n({name:"デザイン",slug:"design"}),n({name:"ソフトスキル",slug:"soft"}),n({name:"アプリケーション＆サービス",slug:"application"})],l=f({title:"N/A",items:[],categories:[]}),o=(a,c)=>{const t=c=="en"?u:m,r=j(a,"category");return a.category&&(r.category=t.find(s=>s.slug===a.category)),r},d=[o({slug:"python",color:"yellow",description:v,logo:e.Python,name:"Python",category:"pro-lang"},"en"),o({slug:"c",color:"blue",description:R,logo:e.C,name:"C",category:"pro-lang"},"en"),o({slug:"js",color:"yellow",description:k,logo:e.JavaScript,name:"Javascript",category:"pro-lang"},"en"),o({slug:"ts",color:"blue",description:D,logo:e.TypeScript,name:"Typescript",category:"pro-lang"},"en"),o({slug:"java",color:"red",description:T,logo:e.Java,name:"Java",category:"pro-lang"},"en"),o({slug:"autohotkey",color:"green",description:A,logo:e.AutoHotkey,name:"AutoHotkey",category:"pro-lang"},"en"),o({slug:"matlab",color:"orange",description:H,logo:e.Matlab,name:"Matlab",category:"pro-lang"},"en"),o({slug:"django",color:"green",description:x,logo:e.Django,name:"Django",category:"framework"},"en"),o({slug:"tensorflow",color:"orange",description:L,logo:e.TensorFlow,name:"TensorFlow",category:"library"},"en"),o({slug:"reactjs",color:"cyan",description:p,logo:e.ReactJs,name:"React JS",category:"library"},"en"),o({slug:"react-native",color:"cyan",description:N,logo:e.ReactJs,name:"React Native",category:"library"},"en"),o({slug:"svelte",color:"orange",description:O,logo:e.Svelte,name:"Svelte",category:"library"},"en"),o({slug:"sklearn",color:"orange",description:F,logo:e.ScikitLearn,name:"Sci-kit Learn",category:"library"},"en"),o({slug:"numpy",color:"cyan",description:U,logo:e.Numpy,name:"Numpy",category:"library"},"en"),o({slug:"keras",color:"red",description:V,logo:e.Keras,name:"Keras",category:"library"},"en"),o({slug:"pytorch",color:"orange",description:Q,logo:e.PyTorch,name:"PyTorch",category:"library"},"en"),o({slug:"regex",color:"grey",description:Y,logo:e.RegEx,name:"RegEx",category:"library"},"en"),o({slug:"mongodb",color:"green",description:_,logo:e.MongoDB,name:"MongoDB",category:"db"},"en"),o({slug:"dynamodb",color:"cyan",description:ee,logo:e.DynamoDB,name:"Amazon DynamoDB",category:"db"},"en"),o({slug:"azure-storage",color:"cyan",description:ne,logo:e.Azure,name:"Azure Storage",category:"db"},"en"),o({slug:"docker",color:"cyan",description:te,logo:e.Docker,name:"Docker",category:"devops"},"en"),o({slug:"azure",color:"cyan",description:se,logo:e.Azure,name:"Microsoft Azure",category:"application"},"en"),o({slug:"jetbrains",color:"black",description:ie,logo:e.JetBrains,name:"JetBrains IDEs",category:"application"},"en"),o({slug:"microsoft-word",color:"blue",description:ge,logo:e.MicrosoftWord,name:"Microsoft Word",category:"application"},"en"),o({slug:"microsoft-excel",color:"green",description:ue,logo:e.MicrosoftExcel,name:"Microsoft Excel",category:"application"},"en"),o({slug:"microsoft-powerpoint",color:"orange",description:de,logo:e.MicrosoftPowerPoint,name:"Microsoft PowerPoint",category:"application"},"en")],y=[o({slug:"python",color:"yellow",description:w,logo:e.Python,name:"Python（パイソン）",category:"pro-lang"},"ja"),o({slug:"c",color:"blue",description:B,logo:e.C,name:"C言語",category:"pro-lang"},"ja"),o({slug:"js",color:"yellow",description:S,logo:e.JavaScript,name:"JavaScript（ジャバスクリプト）",category:"pro-lang"},"ja"),o({slug:"ts",color:"blue",description:M,logo:e.TypeScript,name:"TypeScript（タイプスクリプト）",category:"pro-lang"},"ja"),o({slug:"java",color:"red",description:J,logo:e.Java,name:"Java（ジャバ）",category:"pro-lang"},"ja"),o({slug:"autohotkey",color:"green",description:P,logo:e.AutoHotkey,name:"AutoHotkey（オートホットキー）",category:"pro-lang"},"ja"),o({slug:"matlab",color:"orange",description:z,logo:e.Matlab,name:"MATLAB（マトラボ）",category:"pro-lang"},"ja"),o({slug:"django",color:"green",description:E,logo:e.Django,name:"Django（ジャンゴ）",category:"framework"},"ja"),o({slug:"tensorflow",color:"orange",description:C,logo:e.TensorFlow,name:"TensorFlow（テンソルフロー）",category:"library"},"ja"),o({slug:"reactjs",color:"cyan",description:p,logo:e.ReactJs,name:"React JS（リアクトJS）",category:"library"},"ja"),o({slug:"react-native",color:"cyan",description:I,logo:e.ReactJs,name:"React Native（リアクトネイティブ）",category:"library"},"ja"),o({slug:"svelte",color:"orange",description:W,logo:e.Svelte,name:"Svelte（スヴェルト）",category:"library"},"ja"),o({slug:"sklearn",color:"orange",description:K,logo:e.ScikitLearn,name:"Scikit-learn（サイキットラーン）",category:"library"},"ja"),o({slug:"numpy",color:"cyan",description:G,logo:e.Numpy,name:"NumPy（ナムパイ）",category:"library"},"ja"),o({slug:"keras",color:"red",description:$,logo:e.Keras,name:"Keras（ケラス）",category:"library"},"ja"),o({slug:"pytorch",color:"orange",description:X,logo:e.PyTorch,name:"PyTorch（パイトーチ）",category:"library"},"ja"),o({slug:"regex",color:"grey",description:Z,logo:e.RegEx,name:"正規表現（RegEx）",category:"library"},"ja"),o({slug:"mongodb",color:"green",description:q,logo:e.MongoDB,name:"MongoDB（モンゴDB）",category:"db"},"ja"),o({slug:"dynamodb",color:"cyan",description:oe,logo:e.DynamoDB,name:"Amazon DynamoDB（アマゾンダイナモDB）",category:"db"},"ja"),o({slug:"azure-storage",color:"cyan",description:ae,logo:e.Azure,name:"Azure Storage（アジュールストレージ）",category:"db"},"ja"),o({slug:"docker",color:"cyan",description:re,logo:e.Docker,name:"Docker（ドッカー）",category:"devops"},"ja"),o({slug:"azure",color:"cyan",description:ce,logo:e.Azure,name:"Microsoft Azure（マイクロソフトアジュール）",category:"application"},"ja"),o({slug:"jetbrains",color:"black",description:le,logo:e.JetBrains,name:"JetBrains IDE（ジェットブレインズIDE）",category:"application"},"ja"),o({slug:"microsoft-word",color:"blue",description:pe,logo:e.MicrosoftWord,name:"Microsoft Word（マイクロソフトワード）",category:"application"},"ja"),o({slug:"microsoft-excel",color:"green",description:me,logo:e.MicrosoftExcel,name:"Microsoft Excel（マイクロソフトエクセル）",category:"application"},"ja"),o({slug:"microsoft-powerpoint",color:"orange",description:ye,logo:e.MicrosoftPowerPoint,name:"Microsoft PowerPoint（マイクロソフトパワーポイント）",category:"application"},"ja")],je=(a,c)=>[...a=="en"?d:y].filter(r=>c.includes(r.slug)),ve=(a,c)=>{const t=[],r=[];return c.forEach(s=>{if(a.trim()&&!s.name.toLowerCase().includes(a.trim().toLowerCase()))return;if(!s.category){r.push(s);return}let i=t.find(b=>{var g;return b.category.slug===((g=s.category)==null?void 0:g.slug)});i||(i={items:[],category:s.category},t.push(i)),i.items.push(s)}),r.length!==0&&t.push({category:{name:"Others",slug:"others"},items:r}),t};h.subscribe(a=>{switch(a){case"en":l.set({title:"Skills",items:[...d],categories:[...u]});break;case"ja":l.set({title:"スキール",items:[...y],categories:[...m]});break;default:console.error("Loading Skills - Unknown language selected."),l.set({title:"N/A",items:[],categories:[]});break}});export{ve as a,je as g,l as s};