(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{2109:function(e,a,t){"use strict";t.r(a);var n=t(17),l=t(0),c=t.n(l),r=t(990),s=t(123),i=t(150),m=t(343),o=t(1008),u=t(486),f=t(1027),d=t(11),x=t(56),E=t.n(x);a.default=function(){var e=Object(u.a)(),a=Object(l.useState)(""),t=Object(n.a)(a,2),x=t[0],h=t[1],p=Object(l.useState)(null),v=Object(n.a)(p,2),b=v[0],N=v[1],y=Object(l.useState)(null),j=Object(n.a)(y,2),w=j[0],g=j[1];function O(e){h(e.target.value)}return Object(l.useEffect)(function(){E.a.get("/api/icons").then(function(e){N(e.data)})},[]),Object(l.useEffect)(function(){g(x.length>0?b.filter(function(e){if(e.name.includes(x))return!0;var a=!0,t=!1,n=void 0;try{for(var l,c=e.tags[Symbol.iterator]();!(a=(l=c.next()).done);a=!0)if(l.value.includes(x))return!0}catch(r){t=!0,n=r}finally{try{a||null==c.return||c.return()}finally{if(t)throw n}}return!1}):b)},[b,x]),c.a.createElement(d.s,{classes:{content:"flex"},header:c.a.createElement("div",{className:"flex flex-1 items-center justify-between p-16 sm:p-24"},c.a.createElement("div",{className:"flex flex-col"},c.a.createElement("div",{className:"flex items-center mb-4"},c.a.createElement(r.a,{className:"text-18",color:"action"},"home"),c.a.createElement(r.a,{className:"text-16",color:"action"},"chevron_right"),c.a.createElement(s.a,{color:"textSecondary"},"User Interface")),c.a.createElement(d.d,null,c.a.createElement(s.a,{variant:"h6"},"Icons"))),c.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"},c.a.createElement(f.a,{theme:e},c.a.createElement(i.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},c.a.createElement(r.a,{className:"mr-8",color:"action"},"search"),Object(l.useMemo)(function(){return c.a.createElement(m.a,{placeholder:"Search...",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:x,onChange:O,inputProps:{"aria-label":"Search"}})},[x])))),c.a.createElement(o.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material.io/icons/",target:"_blank"},c.a.createElement(r.a,{className:"mr-4"},"link"),"Reference")),content:c.a.createElement("div",{className:"py-24 max-w-2xl mx-auto"},Object(l.useMemo)(function(){return w&&(w.length>0?c.a.createElement(d.d,{animation:"transition.slideUpBigIn",delay:300},c.a.createElement("div",{className:"flex flex-wrap justify-center"},w.map(function(e){return c.a.createElement("div",{className:"w-160 h-128 p-16 flex flex-col items-center justify-center",key:e.id},c.a.createElement(r.a,{className:"text-48",color:"action"},e.ligatures),c.a.createElement(s.a,{variant:"caption",className:"mt-4"},e.ligatures))}))):c.a.createElement(d.d,{animation:"transition.slideUpBigIn",delay:300},c.a.createElement("div",{className:"flex flex-auto items-center justify-center w-full h-full"},c.a.createElement(s.a,{color:"textSecondary",variant:"h5"},"No results!"))))},[w]))})}}}]);