import{p as s}from"./index-43449298.js";const r=[{message:"Invalid MAC address",validator:a=>a.trim().match(/^([0-9A-Fa-f]{2}[:-]){2,5}([0-9A-Fa-f]{2})$/)}];function d(a){return s({source:a,rules:r})}const i=[{message:"Invalid partial MAC address",validator:a=>a.trim().match(/^([0-9a-f]{2}[:\-. ]){0,5}([0-9a-f]{0,2})$/i)}];function e(a){return s({source:a,rules:i})}export{r as a,d as m,e as u};
