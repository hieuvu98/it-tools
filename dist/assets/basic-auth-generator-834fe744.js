import{d as b,n as u,b as v,v as g,o as h,f as y,k as t,i as s,x as c,w as l,l as p,t as w,g as B,y as C,z as $,m as k,D as A}from"./index-3a019ad3.js";import{t as z}from"./base64-6a7151fc.js";import{_ as N}from"./Scrollbar-53a1a375.js";import{_ as U}from"./Statistic-7f4db98c.js";const V={"mt-5":"",flex:"","justify-center":""},D=b({__name:"basic-auth-generator",setup(G){const o=u(""),a=u(""),r=v(()=>`Authorization: Basic ${z(`${o.value}:${a.value}`)}`),{copy:d}=g({source:r,text:"Header copied to the clipboard"});return(T,e)=>{const _=C,i=N,m=U,f=$,x=k;return h(),y("div",null,[t(_,{value:s(o),"onUpdate:value":e[0]||(e[0]=n=>c(o)?o.value=n:null),label:"Username",placeholder:"Your username...",clearable:"","raw-text":"","mb-5":""},null,8,["value"]),t(_,{value:s(a),"onUpdate:value":e[1]||(e[1]=n=>c(a)?a.value=n:null),label:"Password",placeholder:"Your password...",clearable:"","raw-text":"","mb-2":"",type:"password"},null,8,["value"]),t(f,null,{default:l(()=>[t(m,{label:"Authorization header:",class:"header"},{default:l(()=>[t(i,{"x-scrollable":"",style:{"max-width":"550px","margin-bottom":"-10px","padding-bottom":"10px"},trigger:"none"},{default:l(()=>[p(w(s(r)),1)]),_:1})]),_:1})]),_:1}),B("div",V,[t(x,{onClick:e[2]||(e[2]=n=>s(d)())},{default:l(()=>[p(" Copy header ")]),_:1})])])}}});const I=A(D,[["__scopeId","data-v-d7a195c8"]]);export{I as default};
