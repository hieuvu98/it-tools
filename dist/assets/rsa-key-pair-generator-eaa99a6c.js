import{d as v,n as P,p as k,o as h,f as x,g as o,k as a,w as u,i as r,x as g,at as K,l as w,F as C,m as B}from"./index-3a019ad3.js";import{l as m}from"./index-a74693f8.js";import{T as c}from"./TextareaCopyable-f7d034c6.js";import{a as T}from"./defaults-4d6daddf.js";import{a as V}from"./computedRefreshable-9dbd863d.js";import{_ as R}from"./InputNumber-0a7497cd.js";import{_ as A}from"./FormItem-91134741.js";import"./___vite-browser-external_commonjs-proxy-8ba0d42a.js";import"./Copy-d9056ba7.js";import"./Scrollbar-53a1a375.js";import"./use-locale-a93abd80.js";import"./use-form-item-005e168e.js";import"./Input-4bd4b080.js";import"./Button-689250f5.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./Remove-10559812.js";const N="/assets/prime.worker.min-e367bd53.js";function E({bits:i=2048}){return new Promise((e,t)=>m.pki.rsa.generateKeyPair({bits:i,workerScript:N},(n,s)=>{if(n){t(n);return}e(s)}))}async function F(i={}){const{privateKey:e,publicKey:t}=await E(i);return{publicKeyPem:m.pki.publicKeyToPem(t),privateKeyPem:m.pki.privateKeyToPem(e)}}const j={style:{flex:"0 0 100%"}},D={"item-style":"flex: 1 1 0",style:{"max-width":"600px"},"mx-auto":"",flex:"","gap-3":""},O=o("h3",null,"Public key",-1),S=o("h3",null,"Private key",-1),oe=v({__name:"rsa-key-pair-generator",setup(i){const e=P(2048),t={publicKeyPem:"",privateKeyPem:""},{attrs:n}=k({source:e,rules:[{message:"Bits should be 256 <= bits <= 16384 and be a multiple of 8",validator:l=>l>=256&&l<=16384&&l%8===0}]}),[s,_]=V(()=>T(()=>F({bits:e.value}),t),t);return(l,p)=>{const f=R,d=A,y=B;return h(),x(C,null,[o("div",j,[o("div",D,[a(d,K({label:"Bits :"},r(n),{"label-placement":"left","label-width":"100"}),{default:u(()=>[a(f,{value:r(e),"onUpdate:value":p[0]||(p[0]=b=>g(e)?e.value=b:null),min:"256",max:"16384",step:"8"},null,8,["value"])]),_:1},16),a(y,{onClick:r(_)},{default:u(()=>[w(" Refresh key-pair ")]),_:1},8,["onClick"])])]),o("div",null,[O,a(c,{value:r(s).publicKeyPem},null,8,["value"])]),o("div",null,[S,a(c,{value:r(s).privateKeyPem},null,8,["value"])])],64)}}});export{oe as default};
