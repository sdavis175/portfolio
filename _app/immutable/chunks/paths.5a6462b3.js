import{n as b,s as p}from"./scheduler.0fceb7f2.js";const e=[];function d(i,l=b){let o;const n=new Set;function r(t){if(p(i,t)&&(i=t,o)){const f=!e.length;for(const s of n)s[1](),e.push(s,i);if(f){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function c(t){r(t(i))}function _(t,f=b){const s=[t,f];return n.add(s),n.size===1&&(o=l(r,c)||b),t(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:c,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_137u6if)==null?void 0:u.base)??"/portfolio";var a;const q=((a=globalThis.__sveltekit_137u6if)==null?void 0:a.assets)??h;export{q as a,h as b,d as w};