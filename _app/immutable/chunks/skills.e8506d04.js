import{A as e}from"./index.02814a1b.js";import{s as h}from"./language.328e3a59.js";import{w as f}from"./paths.d00b1c3f.js";function v(t,...i){const a=Object.assign({},t);return Object.keys(a).forEach(r=>{i.includes(r)&&delete a[r]}),a}const j="",k="",w="",S="",D="",M="",T="",J="",P="",R="",H="",A="",B="",L="",x="",E="",p="",C="",z="",N=`# Svelte

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
`,O=`# Svelteあいうえお

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
`,I="",F="",W="",K="",U="",G="",V="",$="",Q="",X="",Y="",Z="",_="",q="",ee="",oe="",ne="",te="",ae="",re="",se="",ie="",ce="",le="",ge="",pe="",n=t=>t,m=[n({name:"Programming Languages",slug:"pro-lang"}),n({name:"Frameworks",slug:"framework"}),n({name:"Libraries",slug:"library"}),n({name:"Languages",slug:"lang"}),n({name:"Databases",slug:"db"}),n({name:"ORMs",slug:"orm"}),n({name:"DevOps",slug:"devops"}),n({name:"Testing",slug:"test"}),n({name:"Dev Tools",slug:"devtools"}),n({name:"Markup & Style",slug:"markup-style"}),n({name:"Design",slug:"design"}),n({name:"Soft Skills",slug:"soft"}),n({name:"Applications",slug:"application"})],u=[n({name:"あいうえお",slug:"pro-lang"}),n({name:"Frameworks",slug:"framework"}),n({name:"Libraries",slug:"library"}),n({name:"Languages",slug:"lang"}),n({name:"Databases",slug:"db"}),n({name:"ORMs",slug:"orm"}),n({name:"DevOps",slug:"devops"}),n({name:"Testing",slug:"test"}),n({name:"Dev Tools",slug:"devtools"}),n({name:"Markup & Style",slug:"markup-style"}),n({name:"Design",slug:"design"}),n({name:"Soft Skills",slug:"soft"}),n({name:"Applications",slug:"application"})],l=f({title:"N/A",items:[],categories:[]}),o=(t,i)=>{const a=i=="en"?m:u,r=v(t,"category");return t.category&&(r.category=a.find(s=>s.slug===t.category)),r},d=[o({slug:"python",color:"yellow",description:j,logo:e.Python,name:"Python",category:"pro-lang"},"en"),o({slug:"c",color:"blue",description:H,logo:e.C,name:"C",category:"pro-lang"},"en"),o({slug:"js",color:"yellow",description:w,logo:e.JavaScript,name:"Javascript",category:"pro-lang"},"en"),o({slug:"ts",color:"blue",description:D,logo:e.TypeScript,name:"Typescript",category:"pro-lang"},"en"),o({slug:"java",color:"red",description:T,logo:e.Java,name:"Java",category:"pro-lang"},"en"),o({slug:"autohotkey",color:"green",description:P,logo:e.AutoHotkey,name:"AutoHotkey",category:"pro-lang"},"en"),o({slug:"django",color:"green",description:B,logo:e.Django,name:"Django",category:"framework"},"en"),o({slug:"tensorflow",color:"orange",description:x,logo:e.TensorFlow,name:"TensorFlow",category:"library"},"en"),o({slug:"reactjs",color:"cyan",description:p,logo:e.ReactJs,name:"React JS",category:"library"},"en"),o({slug:"react-native",color:"cyan",description:C,logo:e.ReactJs,name:"React Native",category:"library"},"en"),o({slug:"svelte",color:"orange",description:N,logo:e.Svelte,name:"Svelte",category:"library"},"en"),o({slug:"sklearn",color:"orange",description:I,logo:e.ScikitLearn,name:"Sci-kit Learn",category:"library"},"en"),o({slug:"numpy",color:"cyan",description:W,logo:e.Numpy,name:"Numpy",category:"library"},"en"),o({slug:"keras",color:"red",description:U,logo:e.Keras,name:"Keras",category:"library"},"en"),o({slug:"pytorch",color:"orange",description:V,logo:e.PyTorch,name:"PyTorch",category:"library"},"en"),o({slug:"regex",color:"grey",description:Q,logo:e.RegEx,name:"RegEx",category:"library"},"en"),o({slug:"mongodb",color:"green",description:Y,logo:e.MongoDB,name:"MongoDB",category:"db"},"en"),o({slug:"dynamodb",color:"cyan",description:_,logo:e.DynamoDB,name:"Amazon DynamoDB",category:"db"},"en"),o({slug:"azure-storage",color:"cyan",description:ee,logo:e.Azure,name:"Azure Storage",category:"db"},"en"),o({slug:"docker",color:"cyan",description:ne,logo:e.Docker,name:"Docker",category:"devops"},"en"),o({slug:"microsoft-word",color:"blue",description:ae,logo:e.MicrosoftWord,name:"Microsoft Word",category:"application"},"en"),o({slug:"microsoft-excel",color:"green",description:se,logo:e.MicrosoftExcel,name:"Microsoft Excel",category:"application"},"en"),o({slug:"microsoft-powerpoint",color:"orange",description:ce,logo:e.MicrosoftPowerPoint,name:"Microsoft PowerPoint",category:"application"},"en"),o({slug:"jetbrains",color:"black",description:ge,logo:e.JetBrains,name:"JetBrains IDEs",category:"application"},"en")],y=[o({slug:"python",color:"yellow",description:k,logo:e.Python,name:"Python",category:"pro-lang"},"ja"),o({slug:"c",color:"blue",description:A,logo:e.C,name:"C",category:"pro-lang"},"ja"),o({slug:"js",color:"yellow",description:S,logo:e.JavaScript,name:"Javascript",category:"pro-lang"},"ja"),o({slug:"ts",color:"blue",description:M,logo:e.TypeScript,name:"Typescript",category:"pro-lang"},"ja"),o({slug:"java",color:"red",description:J,logo:e.Java,name:"Java",category:"pro-lang"},"ja"),o({slug:"autohotkey",color:"green",description:R,logo:e.AutoHotkey,name:"AutoHotkey",category:"pro-lang"},"ja"),o({slug:"django",color:"green",description:L,logo:e.Django,name:"Django",category:"framework"},"ja"),o({slug:"tensorflow",color:"orange",description:E,logo:e.TensorFlow,name:"TensorFlow",category:"library"},"ja"),o({slug:"reactjs",color:"cyan",description:p,logo:e.ReactJs,name:"React JS",category:"library"},"ja"),o({slug:"react-native",color:"cyan",description:z,logo:e.ReactJs,name:"React Native",category:"library"},"ja"),o({slug:"svelte",color:"orange",description:O,logo:e.Svelte,name:"Svelte",category:"library"},"ja"),o({slug:"sklearn",color:"orange",description:F,logo:e.ScikitLearn,name:"Sci-kit Learn",category:"library"},"ja"),o({slug:"numpy",color:"cyan",description:K,logo:e.Numpy,name:"Numpy",category:"library"},"ja"),o({slug:"keras",color:"red",description:G,logo:e.Keras,name:"Keras",category:"library"},"ja"),o({slug:"pytorch",color:"orange",description:$,logo:e.PyTorch,name:"PyTorch",category:"library"},"ja"),o({slug:"regex",color:"grey",description:X,logo:e.RegEx,name:"RegEx",category:"library"},"ja"),o({slug:"mongodb",color:"green",description:Z,logo:e.MongoDB,name:"MongoDB",category:"db"},"ja"),o({slug:"dynamodb",color:"cyan",description:q,logo:e.DynamoDB,name:"Amazon DynamoDB",category:"db"},"ja"),o({slug:"azure-storage",color:"cyan",description:oe,logo:e.Azure,name:"Azure Storage",category:"db"},"ja"),o({slug:"docker",color:"cyan",description:te,logo:e.Docker,name:"Docker",category:"devops"},"ja"),o({slug:"microsoft-word",color:"blue",description:re,logo:e.MicrosoftWord,name:"Microsoft Word",category:"application"},"ja"),o({slug:"microsoft-excel",color:"green",description:ie,logo:e.MicrosoftExcel,name:"Microsoft Excel",category:"application"},"ja"),o({slug:"microsoft-powerpoint",color:"orange",description:le,logo:e.MicrosoftPowerPoint,name:"Microsoft PowerPoint",category:"application"},"ja"),o({slug:"jetbrains",color:"black",description:pe,logo:e.JetBrains,name:"JetBrains IDEs",category:"application"},"ja")],ye=(t,i)=>[...t=="en"?d:y].filter(r=>i.includes(r.slug)),be=(t,i)=>{const a=[],r=[];return i.forEach(s=>{if(t.trim()&&!s.name.toLowerCase().includes(t.trim().toLowerCase()))return;if(!s.category){r.push(s);return}let c=a.find(b=>{var g;return b.category.slug===((g=s.category)==null?void 0:g.slug)});c||(c={items:[],category:s.category},a.push(c)),c.items.push(s)}),r.length!==0&&a.push({category:{name:"Others",slug:"others"},items:r}),a};h.subscribe(t=>{switch(t){case"en":l.set({title:"Skills",items:[...d],categories:[...m]});break;case"ja":l.set({title:"スキール",items:[...y],categories:[...u]});break;default:console.error("Loading Skills - Unknown language selected."),l.set({title:"N/A",items:[],categories:[]});break}});export{be as a,ye as g,l as s};
