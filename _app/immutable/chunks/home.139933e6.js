import{P as e}from"./types.1ebf2f37.js";import"./skills.de601086.js";import{s as i}from"./language.d490c15b.js";import{w as o}from"./paths.5a6462b3.js";const t=o({title:"N/A",name:"N/A",lastName:"N/A",description:"N/A",lightMode:"N/A",darkMode:"N/A"});i.subscribe(a=>{switch(a){case"en":t.set({title:"Home",name:"Shane",lastName:"Davis",description:"Test",lightMode:"Light Mode",darkMode:"Dark Mode"});break;case"ja":t.set({title:"ホームページ",name:"シェーン",lastName:"デイヴィス",description:"あいうえお",lightMode:"ライトモード",darkMode:"ダークモード"});break;default:console.error("Loading Home - Unknown language selected."),t.set({title:"N/A",name:"N/A",lastName:"N/A",description:"N/A",lightMode:"N/A",darkMode:"N/A"});break}});const d=[{platform:e.GitHub,link:"https://github.com/sdavis175"},{platform:e.Linkedin,link:"https://www.linkedin.com/"},{platform:e.Email,link:"support@shanedavisinc.com"}];export{t as h,d as l};