import{ay as F,bo as M,b9 as u,aA as b,H as I,aB as i,J as T,bp as N,G as V,d as G,K,L as H,$ as q,b as R,b7 as D,N as c,O as J,n as Q,R as t,at as U,bq as X,b1 as Y,b2 as Z,br as oo,bs as eo,bt as ro,bu as no,aG as so,ba as to}from"./index-3a019ad3.js";const lo=r=>{const{lineHeight:o,borderRadius:d,fontWeightStrong:C,baseColor:l,dividerColor:v,actionColor:P,textColor1:g,textColor2:s,closeColorHover:h,closeColorPressed:f,closeIconColor:m,closeIconColorHover:p,closeIconColorPressed:n,infoColor:e,successColor:x,warningColor:z,errorColor:y,fontSize:S}=r;return Object.assign(Object.assign({},M),{fontSize:S,lineHeight:o,titleFontWeight:C,borderRadius:d,border:`1px solid ${v}`,color:P,titleTextColor:g,iconColor:s,contentTextColor:s,closeBorderRadius:d,closeColorHover:h,closeColorPressed:f,closeIconColor:m,closeIconColorHover:p,closeIconColorPressed:n,borderInfo:`1px solid ${u(l,b(e,{alpha:.25}))}`,colorInfo:u(l,b(e,{alpha:.08})),titleTextColorInfo:g,iconColorInfo:e,contentTextColorInfo:s,closeColorHoverInfo:h,closeColorPressedInfo:f,closeIconColorInfo:m,closeIconColorHoverInfo:p,closeIconColorPressedInfo:n,borderSuccess:`1px solid ${u(l,b(x,{alpha:.25}))}`,colorSuccess:u(l,b(x,{alpha:.08})),titleTextColorSuccess:g,iconColorSuccess:x,contentTextColorSuccess:s,closeColorHoverSuccess:h,closeColorPressedSuccess:f,closeIconColorSuccess:m,closeIconColorHoverSuccess:p,closeIconColorPressedSuccess:n,borderWarning:`1px solid ${u(l,b(z,{alpha:.33}))}`,colorWarning:u(l,b(z,{alpha:.08})),titleTextColorWarning:g,iconColorWarning:z,contentTextColorWarning:s,closeColorHoverWarning:h,closeColorPressedWarning:f,closeIconColorWarning:m,closeIconColorHoverWarning:p,closeIconColorPressedWarning:n,borderError:`1px solid ${u(l,b(y,{alpha:.25}))}`,colorError:u(l,b(y,{alpha:.08})),titleTextColorError:g,iconColorError:y,contentTextColorError:s,closeColorHoverError:h,closeColorPressedError:f,closeIconColorError:m,closeIconColorHoverError:p,closeIconColorPressedError:n})},io={name:"Alert",common:F,self:lo},ao=io,co=I("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[i("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),T("closable",[I("alert-body",[i("title",`
 padding-right: 24px;
 `)])]),i("icon",{color:"var(--n-icon-color)"}),I("alert-body",{padding:"var(--n-padding)"},[i("title",{color:"var(--n-title-text-color)"}),i("content",{color:"var(--n-content-text-color)"})]),N({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),i("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),i("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),T("show-icon",[I("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),T("right-adjust",[I("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),I("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[i("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[V("& +",[i("content",{marginTop:"9px"})])]),i("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),i("icon",{transition:"color .3s var(--n-bezier)"})]),go=Object.assign(Object.assign({},H.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),uo=G({name:"Alert",inheritAttrs:!1,props:go,setup(r){const{mergedClsPrefixRef:o,mergedBorderedRef:d,inlineThemeDisabled:C,mergedRtlRef:l}=K(r),v=H("Alert","-alert",co,ao,r,o),P=q("Alert",l,o),g=R(()=>{const{common:{cubicBezierEaseInOut:n},self:e}=v.value,{fontSize:x,borderRadius:z,titleFontWeight:y,lineHeight:S,iconSize:E,iconMargin:$,iconMarginRtl:_,closeIconSize:A,closeBorderRadius:W,closeSize:w,closeMargin:B,closeMarginRtl:L,padding:k}=e,{type:a}=r,{left:j,right:O}=D($);return{"--n-bezier":n,"--n-color":e[c("color",a)],"--n-close-icon-size":A,"--n-close-border-radius":W,"--n-close-color-hover":e[c("closeColorHover",a)],"--n-close-color-pressed":e[c("closeColorPressed",a)],"--n-close-icon-color":e[c("closeIconColor",a)],"--n-close-icon-color-hover":e[c("closeIconColorHover",a)],"--n-close-icon-color-pressed":e[c("closeIconColorPressed",a)],"--n-icon-color":e[c("iconColor",a)],"--n-border":e[c("border",a)],"--n-title-text-color":e[c("titleTextColor",a)],"--n-content-text-color":e[c("contentTextColor",a)],"--n-line-height":S,"--n-border-radius":z,"--n-font-size":x,"--n-title-font-weight":y,"--n-icon-size":E,"--n-icon-margin":$,"--n-icon-margin-rtl":_,"--n-close-size":w,"--n-close-margin":B,"--n-close-margin-rtl":L,"--n-padding":k,"--n-icon-margin-left":j,"--n-icon-margin-right":O}}),s=C?J("alert",R(()=>r.type[0]),g,r):void 0,h=Q(!0),f=()=>{const{onAfterLeave:n,onAfterHide:e}=r;n&&n(),e&&e()};return{rtlEnabled:P,mergedClsPrefix:o,mergedBordered:d,visible:h,handleCloseClick:()=>{var n;Promise.resolve((n=r.onClose)===null||n===void 0?void 0:n.call(r)).then(e=>{e!==!1&&(h.value=!1)})},handleAfterLeave:()=>{f()},mergedTheme:v,cssVars:C?void 0:g,themeClass:s?.themeClass,onRender:s?.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),t(to,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:o,$slots:d}=this,C={class:[`${o}-alert`,this.themeClass,this.closable&&`${o}-alert--closable`,this.showIcon&&`${o}-alert--show-icon`,!this.title&&this.closable&&`${o}-alert--right-adjust`,this.rtlEnabled&&`${o}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?t("div",Object.assign({},U(this.$attrs,C)),this.closable&&t(X,{clsPrefix:o,class:`${o}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&t("div",{class:`${o}-alert__border`}),this.showIcon&&t("div",{class:`${o}-alert__icon`,"aria-hidden":"true"},Y(d.icon,()=>[t(Z,{clsPrefix:o},{default:()=>{switch(this.type){case"success":return t(no,null);case"info":return t(ro,null);case"warning":return t(eo,null);case"error":return t(oo,null);default:return null}}})])),t("div",{class:[`${o}-alert-body`,this.mergedBordered&&`${o}-alert-body--bordered`]},so(d.header,l=>{const v=l||this.title;return v?t("div",{class:`${o}-alert-body__title`},v):null}),d.default&&t("div",{class:`${o}-alert-body__content`},d))):null}})}});export{uo as _};
