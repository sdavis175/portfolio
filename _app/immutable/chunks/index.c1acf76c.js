import{s as y,f as b,g as k,h as S,d as l,j as f,i as w,n as u}from"./scheduler.0fceb7f2.js";import{S as x,i as A}from"./index.b70c7824.js";import{t as J}from"./language.b6256ed3.js";import{b as j}from"./paths.f2019bf4.js";function _(t){let e,o;return{c(){e=b("i"),this.h()},l(n){e=k(n,"I",{class:!0}),S(e).forEach(l),this.h()},h(){f(e,"class",o=`${t[0]} ${t[1]}`)},m(n,g){w(n,e,g)},p(n,[g]){g&3&&o!==(o=`${n[0]} ${n[1]}`)&&f(e,"class",o)},i:u,o:u,d(n){n&&l(e)}}}function C(t,e,o){let{icon:n=void 0}=e,{classes:g=""}=e;return t.$$set=a=>{"icon"in a&&o(0,n=a.icon),"classes"in a&&o(1,g=a.classes)},[n,g]}class M extends x{constructor(e){super(),A(this,e,C,_,y,{icon:0,classes:1})}}const v=t=>`${j}/logos/${t}`,s=(t,e)=>e?{dark:v(e),light:v(t)}:v(t),N={AWS:s("aws.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),FastApi:s("fastapi"),Flask:s("flask.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.svg","rust-dark.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetes.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg"),UCF:s("ucf.svg"),Valencia:s("valencia.png"),KCP:s("kcp.jpg"),AutoHotkey:s("autohotkey.svg"),TensorFlow:s("tensorflow.svg"),ScikitLearn:s("scikit-learn.svg"),Keras:s("keras.svg"),PyTorch:s("pytorch.svg"),RegEx:s("regex-grey.svg"),DynamoDB:s("dynamodb.svg"),Azure:s("azure.svg"),MicrosoftWord:s("microsoft-word.svg"),MicrosoftExcel:s("microsoft-excel.svg"),MicrosoftPowerPoint:s("microsoft-powerpoint.svg"),JetBrains:s("jetbrains.svg"),Nihongo:s("nihongo.png"),Matlab:s("matlab.png")};let d;J.subscribe(t=>d=t);const R=t=>typeof t=="string"?t:d?t.dark:t.light;globalThis&&globalThis.__awaiter;export{N as A,M as U,R as g};