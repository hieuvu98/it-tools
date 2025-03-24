import{d as T,n as s,b as y,v as C,o as F,f as D,g as i,k as l,w as n,i as o,x as u,l as h,F as N,y as E,m as H,D as I}from"./index-43449298.js";import{T as B}from"./TextareaCopyable-c9d442a4.js";import{a as P}from"./downloadBase64-ffed27ef.js";import{t as j}from"./base64-6a7151fc.js";import{_ as L}from"./InputNumber-ac34e519.js";import{_ as M}from"./FormItem-e307cccf.js";import{_ as R}from"./ColorPicker-b229155c.js";import{_ as W}from"./Switch-adfe1963.js";import{_ as q}from"./Form-4f78310a.js";import"./Copy-7719211e.js";import"./Scrollbar-97ea51da.js";import"./index-b736f014.js";import"./___vite-browser-external_commonjs-proxy-c66c373e.js";import"./use-locale-50a86aa0.js";import"./use-form-item-f9b99a88.js";import"./Input-1b116095.js";import"./Button-95f28b80.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./Remove-7c407812.js";import"./InputGroup-5c4ae068.js";const A={flex:"","gap-3":""},J={flex:"","gap-3":""},K={flex:"","gap-3":""},O={flex:"","justify-center":"","gap-3":""},Q=["src"],X=T({__name:"svg-placeholder-generator",setup(Y){const p=s(600),r=s(350),c=s(26),v=s("#cccccc"),f=s("#333333"),g=s(!0),_=s(""),b=y(()=>{const m=p.value,e=r.value,d=_.value.length>0?_.value:`${m}x${e}`,a=g.value?` width="${m}" height="${e}"`:"";return`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${m} ${e}"${a}>
  <rect width="${m}" height="${e}" fill="${v.value}"></rect>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="${c.value}px" fill="${f.value}">${d}</text>   
</svg>
  `.trim()}),x=y(()=>`data:image/svg+xml;base64,${j(b.value)}`),{copy:k}=C({source:b}),{copy:S}=C({source:x}),{download:U}=P({source:x});return(m,e)=>{const d=L,a=M,w=R,V=E,z=W,G=q,$=H;return F(),D(N,null,[i("div",null,[l(G,{"label-placement":"left","label-width":"100"},{default:n(()=>[i("div",A,[l(a,{label:"Width (in px)","flex-1":""},{default:n(()=>[l(d,{value:o(p),"onUpdate:value":e[0]||(e[0]=t=>u(p)?p.value=t:null),placeholder:"SVG width...",min:"1"},null,8,["value"])]),_:1}),l(a,{label:"Background","flex-1":""},{default:n(()=>[l(w,{value:o(v),"onUpdate:value":e[1]||(e[1]=t=>u(v)?v.value=t:null),modes:["hex"]},null,8,["value"])]),_:1})]),i("div",J,[l(a,{label:"Height (in px)","flex-1":""},{default:n(()=>[l(d,{value:o(r),"onUpdate:value":e[2]||(e[2]=t=>u(r)?r.value=t:null),placeholder:"SVG height...",min:"1"},null,8,["value"])]),_:1}),l(a,{label:"Text color","flex-1":""},{default:n(()=>[l(w,{value:o(f),"onUpdate:value":e[3]||(e[3]=t=>u(f)?f.value=t:null),modes:["hex"]},null,8,["value"])]),_:1})]),i("div",K,[l(a,{label:"Font size","flex-1":""},{default:n(()=>[l(d,{value:o(c),"onUpdate:value":e[4]||(e[4]=t=>u(c)?c.value=t:null),placeholder:"Font size...",min:"1"},null,8,["value"])]),_:1}),l(V,{value:o(_),"onUpdate:value":e[5]||(e[5]=t=>u(_)?_.value=t:null),label:"Custom text",placeholder:`Default is ${o(p)}x${o(r)}`,"label-position":"left","label-width":"100px","label-align":"right","flex-1":""},null,8,["value","placeholder"])]),l(a,{label:"Use exact size","label-placement":"left"},{default:n(()=>[l(z,{value:o(g),"onUpdate:value":e[6]||(e[6]=t=>u(g)?g.value=t:null)},null,8,["value"])]),_:1})]),_:1}),l(a,{label:"SVG HTML element"},{default:n(()=>[l(B,{value:o(b),"copy-placement":"none"},null,8,["value"])]),_:1}),l(a,{label:"SVG in Base64"},{default:n(()=>[l(B,{value:o(x),"copy-placement":"none"},null,8,["value"])]),_:1}),i("div",O,[l($,{onClick:e[7]||(e[7]=t=>o(k)())},{default:n(()=>[h(" Copy svg ")]),_:1}),l($,{onClick:e[8]||(e[8]=t=>o(S)())},{default:n(()=>[h(" Copy base64 ")]),_:1}),l($,{onClick:e[9]||(e[9]=t=>o(U)())},{default:n(()=>[h(" Download svg ")]),_:1})])]),i("img",{src:o(x),alt:"Image"},null,8,Q)],64)}}});const $e=I(X,[["__scopeId","data-v-1163179f"]]);export{$e as default};
