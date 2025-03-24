import{e as m,d as I,n as c,b as N,o as B,f as V,k as a,w as p,i as e,x as v,c as E,l as h,t as O,W as U,at as u,g as A,y as H,z as S,D as T}from"./index-43449298.js";import{_ as i}from"./InputCopyable.vue_vue_type_script_setup_true_lang-1dde09c6.js";import{c as x}from"./integer-base-converter.model-834f64a6.js";import{_ as W}from"./InputNumber-ac34e519.js";import{_ as j}from"./FormItem-e307cccf.js";import{_ as z}from"./Alert-d4191682.js";import{_ as M}from"./Divider-6281da0d.js";import{_ as R}from"./InputGroupLabel-05486cd0.js";import{_ as q}from"./InputGroup-5c4ae068.js";import"./use-locale-50a86aa0.js";import"./use-form-item-f9b99a88.js";import"./Input-1b116095.js";import"./Button-95f28b80.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./Remove-7c407812.js";function F(f){try{f();return}catch(l){return m.isString(l)?l:m.isError(l)||m.isObject(l)&&m.has(l,"message")?l.message:"An error as occurred."}}const G={flex:"","items-baseline":""},J=I({__name:"integer-base-converter",setup(f){const l={labelPosition:"left",labelWidth:"170px",labelAlign:"right",readonly:!0,"mb-2":""},n=c("42"),o=c(10),r=c(42);function s(...b){try{return x(...b)}catch{return""}}const d=N(()=>F(()=>x({value:n.value,fromBase:o.value,toBase:r.value})));return(b,t)=>{const y=H,g=W,w=j,C=z,k=M,$=R,P=q,D=S;return B(),V("div",null,[a(D,null,{default:p(()=>[a(y,{value:e(n),"onUpdate:value":t[0]||(t[0]=_=>v(n)?n.value=_:null),label:"Input number",placeholder:"Put your number here (ex: 42)","label-position":"left","label-width":"110px","mb-2":"","label-align":"right"},null,8,["value"]),a(w,{label:"Input base","label-placement":"left","label-width":"110","show-feedback":!1},{default:p(()=>[a(g,{value:e(o),"onUpdate:value":t[1]||(t[1]=_=>v(o)?o.value=_:null),max:"64",min:"2",placeholder:"Put your input base here (ex: 10)","w-full":""},null,8,["value"])]),_:1}),e(d)?(B(),E(C,{key:0,style:{"margin-top":"25px"},type:"error"},{default:p(()=>[h(O(e(d)),1)]),_:1})):U("",!0),a(k),a(i,u({label:"Binary (2)"},l,{value:s({value:e(n),fromBase:e(o),toBase:2}),placeholder:"Binary version will be here..."}),null,16,["value"]),a(i,u({label:"Octal (8)"},l,{value:s({value:e(n),fromBase:e(o),toBase:8}),placeholder:"Octal version will be here..."}),null,16,["value"]),a(i,u({label:"Decimal (10)"},l,{value:s({value:e(n),fromBase:e(o),toBase:10}),placeholder:"Decimal version will be here..."}),null,16,["value"]),a(i,u({label:"Hexadecimal (16)"},l,{value:s({value:e(n),fromBase:e(o),toBase:16}),placeholder:"Hexadecimal version will be here..."}),null,16,["value"]),a(i,u({label:"Base64 (64)"},l,{value:s({value:e(n),fromBase:e(o),toBase:64}),placeholder:"Base64 version will be here..."}),null,16,["value"]),A("div",G,[a(P,{style:{width:"160px","margin-right":"10px"}},{default:p(()=>[a($,null,{default:p(()=>[h(" Custom: ")]),_:1}),a(g,{value:e(r),"onUpdate:value":t[2]||(t[2]=_=>v(r)?r.value=_:null),max:"64",min:"2"},null,8,["value"])]),_:1}),a(i,u({"flex-1":""},l,{value:s({value:e(n),fromBase:e(o),toBase:e(r)}),placeholder:`Base ${e(r)} will be here...`}),null,16,["value","placeholder"])])]),_:1})])}}});const _e=T(J,[["__scopeId","data-v-7bfa5c15"]]);export{_e as default};
