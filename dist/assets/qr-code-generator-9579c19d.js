import{d as q,n as p,o as B,c as U,w as t,k as o,i as l,x as u,g as F,l as N,y as V,X as $,m as y,z}from"./index-3a019ad3.js";import{u as D,_ as L}from"./useQRCode-58f5c675.js";import{a as R}from"./downloadBase64-c174393e.js";import{_ as T}from"./ColorPicker-69fb2359.js";import{_ as E}from"./FormItem-91134741.js";import{_ as Q}from"./Form-aa263afb.js";import{_ as X,a as Y}from"./Grid-ab9e904b.js";import"./is-browser-fc34c9a6.js";import"./use-locale-a93abd80.js";import"./browser-e933942f.js";import"./index-b8e66c9c.js";import"./___vite-browser-external_commonjs-proxy-8ba0d42a.js";import"./Input-4bd4b080.js";import"./Button-689250f5.js";import"./use-form-item-005e168e.js";import"./color-to-class-b0332f36.js";import"./InputGroup-6d8faaf8.js";import"./get-slot-1efb97e5.js";const j={flex:"","flex-col":"","items-center":"","gap-3":""},so=q({__name:"qr-code-generator",setup(A){const a=p("#000000ff"),_=p("#ffffffff"),r=p("medium"),f=["low","medium","quartile","high"],s=p("https://it-tools.tech"),{qrcode:i}=D({text:s,color:{background:_,foreground:a},errorCorrectionLevel:r,options:{width:1024}}),{download:g}=R({source:i,filename:"qr-code.png"});return(G,e)=>{const v=V,m=T,c=E,b=$,x=Q,d=X,w=L,h=y,k=Y,C=z;return B(),U(C,null,{default:t(()=>[o(k,{"x-gap":"12","y-gap":"12",cols:"1 600:3"},{default:t(()=>[o(d,{span:"2"},{default:t(()=>[o(v,{value:l(s),"onUpdate:value":e[0]||(e[0]=n=>u(s)?s.value=n:null),"label-position":"left","label-width":"130px","label-align":"right",label:"Text:",multiline:"",rows:"1",autosize:"",placeholder:"Your link or text...","mb-6":""},null,8,["value"]),o(x,{"label-width":"130","label-placement":"left"},{default:t(()=>[o(c,{label:"Foreground color:"},{default:t(()=>[o(m,{value:l(a),"onUpdate:value":e[1]||(e[1]=n=>u(a)?a.value=n:null),modes:["hex"]},null,8,["value"])]),_:1}),o(c,{label:"Background color:"},{default:t(()=>[o(m,{value:l(_),"onUpdate:value":e[2]||(e[2]=n=>u(_)?_.value=n:null),modes:["hex"]},null,8,["value"])]),_:1}),o(b,{value:l(r),"onUpdate:value":e[3]||(e[3]=n=>u(r)?r.value=n:null),label:"Error resistance:","label-position":"left","label-width":"130px","label-align":"right",options:f.map(n=>({label:n,value:n}))},null,8,["value","options"])]),_:1})]),_:1}),o(d,null,{default:t(()=>[F("div",j,[o(w,{src:l(i),width:"200"},null,8,["src"]),o(h,{onClick:l(g)},{default:t(()=>[N(" Download qr-code ")]),_:1},8,["onClick"])])]),_:1})]),_:1})]),_:1})}}});export{so as default};
