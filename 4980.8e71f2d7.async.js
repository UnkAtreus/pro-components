"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[4980],{90592:function($e,w,e){e.d(w,{S:function(){return C}});var k=e(57213),a=e.n(k),me=e(52510),X=e.n(me),ge=e(37635),r=e.n(ge),te=e(12342),ae=e.n(te),L=e(629),re=e(17737),W=e(84875),ye=e.n(W),fe=e(71770),i=e(50959),Z=e(10422),B=e(44958),f=e(33460),oe=function(m){return X()({},m.componentCls,{position:"fixed",insetInlineEnd:0,bottom:0,zIndex:99,display:"flex",alignItems:"center",width:"100%",paddingInline:24,paddingBlock:0,boxSizing:"border-box",lineHeight:"64px",backgroundColor:(0,f.uK)(m.colorBgElevated,.6),borderBlockStart:"1px solid ".concat(m.colorSplit),"-webkit-backdrop-filter":"blur(8px)",backdropFilter:"blur(8px)",color:m.colorText,transition:"all 0.2s ease 0s","&-left":{flex:1,color:m.colorText},"&-right":{color:m.colorText,"> *":{marginInlineEnd:8,"&:last-child":{marginBlock:0,marginInline:0}}}})};function A(F){return(0,f.Xj)("ProLayoutFooterToolbar",function(m){var E=a()(a()({},m),{},{componentCls:".".concat(F)});return[oe(E)]})}function xe(F,m){var E=m.stylish;return(0,f.Xj)("ProLayoutFooterToolbarStylish",function(V){var O=a()(a()({},V),{},{componentCls:".".concat(F)});return E?[X()({},"".concat(O.componentCls),E==null?void 0:E(O))]:[]})}var G=e(11527),Pe=["children","className","extra","portalDom","style","renderContent"],C=function(m){var E=m.children,V=m.className,O=m.extra,U=m.portalDom,he=U===void 0?!0:U,T=m.style,t=m.renderContent,c=ae()(m,Pe),l=(0,i.useContext)(re.ZP.ConfigContext),b=l.getPrefixCls,H=l.getTargetContainer,d=m.prefixCls||b("pro"),j="".concat(d,"-footer-bar"),_=A(j),q=_.wrapSSR,ie=_.hashId,u=(0,i.useContext)(B.X),le=(0,i.useMemo)(function(){var n=u.hasSiderMenu,o=u.isMobile,v=u.siderWidth;if(n)return v?o?"100%":"calc(100% - ".concat(v,"px)"):"100%"},[u.collapsed,u.hasSiderMenu,u.isMobile,u.siderWidth]),de=(0,i.useMemo)(function(){return(typeof window=="undefined"?"undefined":r()(window))===void 0||(typeof document=="undefined"?"undefined":r()(document))===void 0?null:(H==null?void 0:H())||document.body},[]),se=xe("".concat(j,".").concat(j,"-stylish"),{stylish:m.stylish}),ce=(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("div",{className:"".concat(j,"-left ").concat(ie).trim(),children:O}),(0,G.jsx)("div",{className:"".concat(j,"-right ").concat(ie).trim(),children:E})]});(0,i.useEffect)(function(){return!u||!(u!=null&&u.setHasFooterToolbar)?function(){}:(u==null||u.setHasFooterToolbar(!0),function(){var n;u==null||(n=u.setHasFooterToolbar)===null||n===void 0||n.call(u,!1)})},[]);var P=(0,G.jsx)("div",a()(a()({className:ye()(V,ie,j,X()({},"".concat(j,"-stylish"),!!m.stylish)),style:a()({width:le},T)},(0,fe.Z)(c,["prefixCls"])),{},{children:t?t(a()(a()(a()({},m),u),{},{leftWidth:le}),ce):ce})),y=!(0,L.j)()||!he||!de?P:(0,Z.createPortal)(P,de,j);return se.wrapSSR(q((0,G.jsx)(i.Fragment,{children:y},j)))}},62834:function($e,w,e){e.d(w,{f:function(){return i}});var k=e(52510),a=e.n(k),me=e(17737),X=e(84875),ge=e.n(X),r=e(50959),te=e(44958),ae=e(57213),L=e.n(ae),re=e(33460),W=function(B){return a()({},B.componentCls,{width:"100%","&-wide":{maxWidth:1152,margin:"0 auto"}})};function ye(Z){return(0,re.Xj)("ProLayoutGridContent",function(B){var f=L()(L()({},B),{},{componentCls:".".concat(Z)});return[W(f)]})}var fe=e(11527),i=function(B){var f=(0,r.useContext)(te.X),oe=B.children,A=B.contentWidth,xe=B.className,G=B.style,Pe=(0,r.useContext)(me.ZP.ConfigContext),C=Pe.getPrefixCls,F=B.prefixCls||C("pro"),m=A||f.contentWidth,E="".concat(F,"-grid-content"),V=ye(E),O=V.wrapSSR,U=V.hashId,he=m==="Fixed"&&f.layout==="top";return O((0,fe.jsx)("div",{className:ge()(E,U,xe,a()({},"".concat(E,"-wide"),he)),style:G,children:(0,fe.jsx)("div",{className:"".concat(F,"-grid-content-children ").concat(U).trim(),children:oe})}))}},24980:function($e,w,e){e.d(w,{_z:function(){return ce},H_:function(){return le},yy:function(){return P}});var k=e(52510),a=e.n(k),me=e(12342),X=e.n(me),ge=e(57213),r=e.n(ge),te=e(37635),ae=e.n(te),L=e(70661),re=e(87714),W=e(64020),ye=e(84652),fe=e(17737),i=e(96161),Z=e(84875),B=e.n(Z),f=e(50959),oe=e(44958),A=e(90592),xe=e(62834),G=e(85071),Pe=e(88729),C=e(43225),F=e(54306),m=e.n(F),E=e(33460),V=[576,768,992,1200].map(function(y){return"@media (max-width: ".concat(y,"px)")}),O=m()(V,4),U=O[0],he=O[1],T=O[2],t=O[3],c=function(n){var o,v,s,M,I,$,R,x,h,S,z,Y,N,K,ue,Q,p,g,J,ee,ve,pe,Ee,D,Re,De,Se,Te,He,be,je,Be,Ce;return a()({},n.componentCls,(Ce={position:"relative","&-children-container":{paddingBlockStart:0,paddingBlockEnd:(o=n.layout)===null||o===void 0||(v=o.pageContainer)===null||v===void 0?void 0:v.paddingBlockPageContainerContent,paddingInline:(s=n.layout)===null||s===void 0||(M=s.pageContainer)===null||M===void 0?void 0:M.paddingInlinePageContainerContent},"&-children-container-no-header":{paddingBlockStart:(I=n.layout)===null||I===void 0||($=I.pageContainer)===null||$===void 0?void 0:$.paddingBlockPageContainerContent},"&-affix":a()({},"".concat(n.antCls,"-affix"),a()({},"".concat(n.componentCls,"-warp"),{backgroundColor:(R=n.layout)===null||R===void 0||(x=R.pageContainer)===null||x===void 0?void 0:x.colorBgPageContainerFixed,transition:"background-color 0.3s",boxShadow:"0 2px 8px #f0f1f2"}))},a()(Ce,"& &-warp-page-header",(je={paddingBlockStart:((h=(S=n.layout)===null||S===void 0||(z=S.pageContainer)===null||z===void 0?void 0:z.paddingBlockPageContainerContent)!==null&&h!==void 0?h:40)/4,paddingBlockEnd:((Y=(N=n.layout)===null||N===void 0||(K=N.pageContainer)===null||K===void 0?void 0:K.paddingBlockPageContainerContent)!==null&&Y!==void 0?Y:40)/2,paddingInlineStart:(ue=n.layout)===null||ue===void 0||(Q=ue.pageContainer)===null||Q===void 0?void 0:Q.paddingInlinePageContainerContent,paddingInlineEnd:(p=n.layout)===null||p===void 0||(g=p.pageContainer)===null||g===void 0?void 0:g.paddingInlinePageContainerContent},a()(je,"& ~ ".concat(n.proComponentsCls,"-grid-content"),a()({},"".concat(n.proComponentsCls,"-page-container-children-content"),{paddingBlock:((J=(ee=n.layout)===null||ee===void 0||(ve=ee.pageContainer)===null||ve===void 0?void 0:ve.paddingBlockPageContainerContent)!==null&&J!==void 0?J:24)/3})),a()(je,"".concat(n.antCls,"-page-header-breadcrumb"),{paddingBlockStart:((pe=(Ee=n.layout)===null||Ee===void 0||(D=Ee.pageContainer)===null||D===void 0?void 0:D.paddingBlockPageContainerContent)!==null&&pe!==void 0?pe:40)/4+10}),a()(je,"".concat(n.antCls,"-page-header-heading"),{paddingBlockStart:((Re=(De=n.layout)===null||De===void 0||(Se=De.pageContainer)===null||Se===void 0?void 0:Se.paddingBlockPageContainerContent)!==null&&Re!==void 0?Re:40)/4}),a()(je,"".concat(n.antCls,"-page-header-footer"),{marginBlockStart:((Te=(He=n.layout)===null||He===void 0||(be=He.pageContainer)===null||be===void 0?void 0:be.paddingBlockPageContainerContent)!==null&&Te!==void 0?Te:40)/4}),je)),a()(Ce,"&-detail",a()({display:"flex"},U,{display:"block"})),a()(Ce,"&-main",{width:"100%"}),a()(Ce,"&-row",a()({display:"flex",width:"100%"},he,{display:"block"})),a()(Ce,"&-content",{flex:"auto",width:"100%"}),a()(Ce,"&-extraContent",(Be={flex:"0 1 auto",minWidth:"242px",marginInlineStart:88,textAlign:"end"},a()(Be,t,{marginInlineStart:44}),a()(Be,T,{marginInlineStart:20}),a()(Be,he,{marginInlineStart:0,textAlign:"start"}),a()(Be,U,{marginInlineStart:0}),Be)),Ce))};function l(y,n){return(0,E.Xj)("ProLayoutPageContainer",function(o){var v,s=r()(r()({},o),{},{componentCls:".".concat(y),layout:r()(r()({},o==null?void 0:o.layout),{},{pageContainer:r()(r()({},o==null||(v=o.layout)===null||v===void 0?void 0:v.pageContainer),n)})});return[c(s)]})}function b(y,n){var o=n.stylish;return(0,E.Xj)("ProLayoutPageContainerStylish",function(v){var s=r()(r()({},v),{},{componentCls:".".concat(y)});return o?[a()({},"div".concat(s.componentCls),o==null?void 0:o(s))]:[]})}var H=e(53283),d=e(11527),j=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","childrenContentStyle","style","prefixCls","hashId","value","breadcrumbRender"],_=["children","loading","className","style","footer","affixProps","token","fixedHeader","breadcrumbRender","footerToolBarProps","childrenContentStyle"];function q(y){return ae()(y)==="object"?y:{spinning:y}}var ie=function(n){var o=n.tabList,v=n.tabActiveKey,s=n.onTabChange,M=n.hashId,I=n.tabBarExtraContent,$=n.tabProps,R=n.prefixedClassName;return Array.isArray(o)||I?(0,d.jsx)(re.Z,r()(r()({className:"".concat(R,"-tabs ").concat(M).trim(),activeKey:v,onChange:function(h){s&&s(h)},tabBarExtraContent:I,items:o==null?void 0:o.map(function(x,h){var S;return r()(r()({label:x.tab},x),{},{key:((S=x.key)===null||S===void 0?void 0:S.toString())||(h==null?void 0:h.toString())})})},$),{},{children:(0,H.n)(W.Z,"4.23.0")<0?o==null?void 0:o.map(function(x,h){return(0,d.jsx)(re.Z.TabPane,r()({tab:x.tab},x),x.key||h)}):null})):null},u=function(n,o,v,s){return!n&&!o?null:(0,d.jsx)("div",{className:"".concat(v,"-detail ").concat(s).trim(),children:(0,d.jsx)("div",{className:"".concat(v,"-main ").concat(s).trim(),children:(0,d.jsxs)("div",{className:"".concat(v,"-row ").concat(s).trim(),children:[n&&(0,d.jsx)("div",{className:"".concat(v,"-content ").concat(s).trim(),children:n}),o&&(0,d.jsx)("div",{className:"".concat(v,"-extraContent ").concat(s).trim(),children:o})]})})})},le=function(n){var o=(0,f.useContext)(oe.X);return(0,d.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"center"},children:(0,d.jsx)(ye.Z,r()(r()(r()({},o==null?void 0:o.breadcrumb),o==null?void 0:o.breadcrumbProps),n))})},de=function(n){var o,v=n.title,s=n.content,M=n.pageHeaderRender,I=n.header,$=n.prefixedClassName,R=n.extraContent,x=n.childrenContentStyle,h=n.style,S=n.prefixCls,z=n.hashId,Y=n.value,N=n.breadcrumbRender,K=X()(n,j),ue=function(){if(N)return N};if(M===!1)return null;if(M)return(0,d.jsxs)(d.Fragment,{children:[" ",M(r()(r()({},n),Y))]});var Q=v;!v&&v!==!1&&(Q=Y.title);var p=r()(r()(r()({},Y),{},{title:Q},K),{},{footer:ie(r()(r()({},K),{},{hashId:z,breadcrumbRender:N,prefixedClassName:$}))},I),g=p,J=g.breadcrumb,ee=(!J||!(J!=null&&J.itemRender)&&!(J!=null&&(o=J.items)!==null&&o!==void 0&&o.length))&&!N;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(ve){return!p[ve]})&&ee&&!s&&!R?null:(0,d.jsx)(G.m,r()(r()({},p),{},{className:"".concat($,"-warp-page-header ").concat(z).trim(),breadcrumb:N===!1?void 0:r()(r()({},p.breadcrumb),Y.breadcrumbProps),breadcrumbRender:ue(),prefixCls:S,children:(I==null?void 0:I.children)||u(s,R,$,z)}))},se=function(n){var o,v,s,M,I=n.children,$=n.loading,R=$===void 0?!1:$,x=n.className,h=n.style,S=n.footer,z=n.affixProps,Y=n.token,N=n.fixedHeader,K=n.breadcrumbRender,ue=n.footerToolBarProps,Q=n.childrenContentStyle,p=X()(n,_),g=(0,f.useContext)(oe.X);(0,f.useEffect)(function(){var ne;return!g||!(g!=null&&g.setHasPageContainer)?function(){}:(g==null||(ne=g.setHasPageContainer)===null||ne===void 0||ne.call(g,function(Ie){return Ie+1}),function(){var Ie;g==null||(Ie=g.setHasPageContainer)===null||Ie===void 0||Ie.call(g,function(Ne){return Ne-1})})},[]);var J=(0,f.useContext)(L.L_),ee=J.token,ve=(0,f.useContext)(fe.ZP.ConfigContext),pe=ve.getPrefixCls,Ee=n.prefixCls||pe("pro"),D="".concat(Ee,"-page-container"),Re=l(D,Y),De=Re.wrapSSR,Se=Re.hashId,Te=b("".concat(D,".").concat(D,"-stylish"),{stylish:n.stylish}),He=(0,f.useMemo)(function(){var ne;return K==!1?!1:K||(p==null||(ne=p.header)===null||ne===void 0?void 0:ne.breadcrumbRender)},[K,p==null||(o=p.header)===null||o===void 0?void 0:o.breadcrumbRender]),be=de(r()(r()({},p),{},{breadcrumbRender:He,ghost:!0,hashId:Se,prefixCls:void 0,prefixedClassName:D,value:g})),je=(0,f.useMemo)(function(){if(f.isValidElement(R))return R;if(typeof R=="boolean"&&!R)return null;var ne=q(R);return ne.spinning?(0,d.jsx)(Pe.S,r()({},ne)):null},[R]),Be=(0,f.useMemo)(function(){return I?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:B()(Se,"".concat(D,"-children-container"),a()({},"".concat(D,"-children-container-no-header"),!be)),style:Q,children:I})}):null},[I,D,Q,Se]),Ce=(0,f.useMemo)(function(){var ne=je||Be;if(n.waterMarkProps||g.waterMarkProps){var Ie=r()(r()({},g.waterMarkProps),n.waterMarkProps);return(0,d.jsx)(C.D,r()(r()({},Ie),{},{children:ne}))}return ne},[n.waterMarkProps,g.waterMarkProps,je,Be]),Me=B()(D,Se,x,(v={},a()(v,"".concat(D,"-with-footer"),S),a()(v,"".concat(D,"-with-affix"),N&&be),a()(v,"".concat(D,"-stylish"),!!p.stylish),v));return De(Te.wrapSSR((0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{style:h,className:Me,children:[N&&be?(0,d.jsx)(i.Z,r()(r()({offsetTop:g.hasHeader&&g.fixedHeader?(s=ee.layout)===null||s===void 0||(M=s.header)===null||M===void 0?void 0:M.heightLayoutHeader:1},z),{},{className:"".concat(D,"-affix ").concat(Se).trim(),children:(0,d.jsx)("div",{className:"".concat(D,"-warp ").concat(Se).trim(),children:be})})):be,Ce&&(0,d.jsx)(xe.f,{children:Ce})]}),S&&(0,d.jsx)(A.S,r()(r()({stylish:p.footerStylish,prefixCls:Ee},ue),{},{children:S}))]})))},ce=function(n){return(0,d.jsx)(L._Y,{needDeps:!0,children:(0,d.jsx)(se,r()({},n))})},P=function(n){var o=(0,f.useContext)(oe.X);return de(r()(r()({},n),{},{hashId:"",value:o}))}},85071:function($e,w,e){e.d(w,{m:function(){return he}});var k=e(52510),a=e.n(k),me=e(54306),X=e.n(me),ge=e(57213),r=e.n(ge),te=e(83964),ae=e.n(te),L=e(38532),re=e.n(L),W=e(84652),ye=e(46482),fe=e(70270),i=e(17737),Z=e(84875),B=e.n(Z),f=e(71860),oe=e(50959),A=e(33460),xe=function(){return{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}},G=function(t){var c,l;return a()({},t.componentCls,r()(r()({},A.Wf===null||A.Wf===void 0?void 0:(0,A.Wf)(t)),{},(l={position:"relative",backgroundColor:t.pageHeaderBgGhost,paddingBlock:t.pageHeaderPaddingVertical+2,paddingInline:t.pageHeaderPadding,"& &-has-breadcrumb":{paddingBlockStart:t.pageHeaderPaddingBreadCrumb},"& &-has-footer":{paddingBlockEnd:0},"& &-back":a()({marginInlineEnd:t.margin,fontSize:16,lineHeight:1,"&-button":r()(r()({fontSize:16},A.Nd===null||A.Nd===void 0?void 0:(0,A.Nd)(t)),{},{color:t.pageHeaderColorBack,cursor:"pointer"})},"".concat(t.componentCls,"-rlt &"),{float:"right",marginInlineEnd:0,marginInlineStart:0})},a()(l,"& ".concat("ant","-divider-vertical"),{height:14,marginBlock:0,marginInline:t.marginSM,verticalAlign:"middle"}),a()(l,"& &-breadcrumb + &-heading",{marginBlockStart:t.marginXS}),a()(l,"& &-heading",{display:"flex",justifyContent:"space-between","&-left":{display:"flex",alignItems:"center",marginBlock:t.marginXS/2,marginInlineEnd:0,marginInlineStart:0,overflow:"hidden"},"&-title":r()(r()({marginInlineEnd:t.marginSM,marginBlockEnd:0,color:t.colorTextHeading,fontWeight:600,fontSize:t.pageHeaderFontSizeHeaderTitle,lineHeight:t.controlHeight+"px"},xe()),{},a()({},"".concat(t.componentCls,"-rlt &"),{marginInlineEnd:0,marginInlineStart:t.marginSM})),"&-avatar":a()({marginInlineEnd:t.marginSM},"".concat(t.componentCls,"-rlt &"),{float:"right",marginInlineEnd:0,marginInlineStart:t.marginSM}),"&-tags":a()({},"".concat(t.componentCls,"-rlt &"),{float:"right"}),"&-sub-title":r()(r()({marginInlineEnd:t.marginSM,color:t.colorTextSecondary,fontSize:t.pageHeaderFontSizeHeaderSubTitle,lineHeight:t.lineHeight},xe()),{},a()({},"".concat(t.componentCls,"-rlt &"),{float:"right",marginInlineEnd:0,marginInlineStart:12})),"&-extra":(c={marginBlock:t.marginXS/2,marginInlineEnd:0,marginInlineStart:0,whiteSpace:"nowrap","> *":a()({"white-space":"unset"},"".concat(t.componentCls,"-rlt &"),{marginInlineEnd:t.marginSM,marginInlineStart:0})},a()(c,"".concat(t.componentCls,"-rlt &"),{float:"left"}),a()(c,"*:first-child",a()({},"".concat(t.componentCls,"-rlt &"),{marginInlineEnd:0})),c)}),a()(l,"&-content",{paddingBlockStart:t.pageHeaderPaddingContentPadding}),a()(l,"&-footer",{marginBlockStart:t.margin}),a()(l,"&-compact &-heading",{flexWrap:"wrap"}),a()(l,"&-wide",{maxWidth:1152,margin:"0 auto"}),a()(l,"&-rtl",{direction:"rtl"}),l)))};function Pe(T){return(0,A.Xj)("ProLayoutPageHeader",function(t){var c=r()(r()({},t),{},{componentCls:".".concat(T),pageHeaderBgGhost:"transparent",pageHeaderPadding:16,pageHeaderPaddingVertical:4,pageHeaderPaddingBreadCrumb:t.paddingSM,pageHeaderColorBack:t.colorTextHeading,pageHeaderFontSizeHeaderTitle:t.fontSizeHeading4,pageHeaderFontSizeHeaderSubTitle:14,pageHeaderPaddingContentPadding:t.paddingSM});return[G(c)]})}var C=e(11527),F=function(t,c,l,b){return!l||!b?null:(0,C.jsx)("div",{className:"".concat(t,"-back ").concat(c).trim(),children:(0,C.jsx)("div",{role:"button",onClick:function(d){b==null||b(d)},className:"".concat(t,"-back-button ").concat(c).trim(),"aria-label":"back",children:l})})},m=function(t,c){var l;return(l=t.items)!==null&&l!==void 0&&l.length?(0,C.jsx)(W.Z,r()(r()({},t),{},{className:B()("".concat(c,"-breadcrumb"),t.className)})):null},E=function(t){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return t.backIcon!==void 0?t.backIcon:c==="rtl"?(0,C.jsx)(re(),{}):(0,C.jsx)(ae(),{})},V=function(t,c){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",b=arguments.length>3?arguments[3]:void 0,H=c.title,d=c.avatar,j=c.subTitle,_=c.tags,q=c.extra,ie=c.onBack,u="".concat(t,"-heading"),le=H||j||_||q;if(!le)return null;var de=E(c,l),se=F(t,b,de,ie),ce=se||d||le;return(0,C.jsxs)("div",{className:u+" "+b,children:[ce&&(0,C.jsxs)("div",{className:"".concat(u,"-left ").concat(b).trim(),children:[se,d&&(0,C.jsx)(ye.C,r()({className:B()("".concat(u,"-avatar"),b,d.className)},d)),H&&(0,C.jsx)("span",{className:"".concat(u,"-title ").concat(b).trim(),title:typeof H=="string"?H:void 0,children:H}),j&&(0,C.jsx)("span",{className:"".concat(u,"-sub-title ").concat(b).trim(),title:typeof j=="string"?j:void 0,children:j}),_&&(0,C.jsx)("span",{className:"".concat(u,"-tags ").concat(b).trim(),children:_})]}),q&&(0,C.jsx)("span",{className:"".concat(u,"-extra ").concat(b).trim(),children:(0,C.jsx)(fe.Z,{children:q})})]})},O=function(t,c,l){return c?(0,C.jsx)("div",{className:"".concat(t,"-footer ").concat(l).trim(),children:c}):null},U=function(t,c,l){return(0,C.jsx)("div",{className:"".concat(t,"-content ").concat(l).trim(),children:c})},he=function(t){var c,l,b=oe.useState(!1),H=X()(b,2),d=H[0],j=H[1],_=function(p){var g=p.width;return j(g<768)},q=oe.useContext(i.ZP.ConfigContext),ie=q.getPrefixCls,u=q.direction,le=t.prefixCls,de=t.style,se=t.footer,ce=t.children,P=t.breadcrumb,y=t.breadcrumbRender,n=t.className,o=t.contentWidth,v=t.layout,s=ie("page-header",le),M=Pe(s),I=M.wrapSSR,$=M.hashId,R=function(){return P&&!(P!=null&&P.items)&&P!==null&&P!==void 0&&P.routes&&(P.items=P.routes),P!=null&&P.items?m(P,s):null},x=R(),h=P&&"props"in P,S=(c=y==null?void 0:y(r()(r()({},t),{},{prefixCls:s}),x))!==null&&c!==void 0?c:x,z=h?P:S,Y=B()(s,$,n,(l={},a()(l,"".concat(s,"-has-breadcrumb"),!!z),a()(l,"".concat(s,"-has-footer"),!!se),a()(l,"".concat(s,"-rtl"),u==="rtl"),a()(l,"".concat(s,"-compact"),d),a()(l,"".concat(s,"-wide"),o==="Fixed"&&v=="top"),a()(l,"".concat(s,"-ghost"),!0),l)),N=V(s,t,u,$),K=ce&&U(s,ce,$),ue=O(s,se,$);return!z&&!N&&!ue&&!K?null:I((0,C.jsx)(f.Z,{onResize:_,children:(0,C.jsxs)("div",{className:Y,style:de,children:[z,N,K,ue]})}))}},88729:function($e,w,e){e.d(w,{S:function(){return L}});var k=e(57213),a=e.n(k),me=e(12342),X=e.n(me),ge=e(43852),r=e(50959),te=e(11527),ae=["isLoading","pastDelay","timedOut","error","retry"],L=function(W){var ye=W.isLoading,fe=W.pastDelay,i=W.timedOut,Z=W.error,B=W.retry,f=X()(W,ae);return(0,te.jsx)("div",{style:{paddingBlockStart:100,textAlign:"center"},children:(0,te.jsx)(ge.Z,a()({size:"large"},f))})}},43225:function($e,w,e){e.d(w,{D:function(){return ye}});var k=e(57213),a=e.n(k),me=e(54306),X=e.n(me),ge=e(33460),r=e(17737),te=e(84875),ae=e.n(te),L=e(50959),re=e(11527),W=function(i){if(!i)return 1;var Z=i.backingStorePixelRatio||i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||1;return(window.devicePixelRatio||1)/Z},ye=function(i){var Z=(0,ge.dQ)(),B=Z.token,f=i.children,oe=i.style,A=i.className,xe=i.markStyle,G=i.markClassName,Pe=i.zIndex,C=Pe===void 0?9:Pe,F=i.gapX,m=F===void 0?212:F,E=i.gapY,V=E===void 0?222:E,O=i.width,U=O===void 0?120:O,he=i.height,T=he===void 0?64:he,t=i.rotate,c=t===void 0?-22:t,l=i.image,b=i.offsetLeft,H=i.offsetTop,d=i.fontStyle,j=d===void 0?"normal":d,_=i.fontWeight,q=_===void 0?"normal":_,ie=i.fontColor,u=ie===void 0?B.colorFill:ie,le=i.fontSize,de=le===void 0?16:le,se=i.fontFamily,ce=se===void 0?"sans-serif":se,P=i.prefixCls,y=(0,L.useContext)(r.ZP.ConfigContext),n=y.getPrefixCls,o=n("pro-layout-watermark",P),v=ae()("".concat(o,"-wrapper"),A),s=ae()(o,G),M=(0,L.useState)(""),I=X()(M,2),$=I[0],R=I[1];return(0,L.useEffect)(function(){var x=document.createElement("canvas"),h=x.getContext("2d"),S=W(h),z="".concat((m+U)*S,"px"),Y="".concat((V+T)*S,"px"),N=b||m/2,K=H||V/2;if(x.setAttribute("width",z),x.setAttribute("height",Y),!h){console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas");return}h.translate(N*S,K*S),h.rotate(Math.PI/180*Number(c));var ue=U*S,Q=T*S,p=function(ee){var ve=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,pe=Number(de)*S;h.font="".concat(j," normal ").concat(q," ").concat(pe,"px/").concat(Q,"px ").concat(ce),h.fillStyle=u,Array.isArray(ee)?ee==null||ee.forEach(function(Ee,D){return h.fillText(Ee,0,D*pe+ve)}):h.fillText(ee,0,ve?ve+pe:0),R(x.toDataURL())};if(l){var g=new Image;g.crossOrigin="anonymous",g.referrerPolicy="no-referrer",g.src=l,g.onload=function(){if(h.drawImage(g,0,0,ue,Q),R(x.toDataURL()),i.content){p(i.content,g.height+8);return}};return}if(i.content){p(i.content);return}},[m,V,b,H,c,j,q,U,T,ce,u,l,i.content,de]),(0,re.jsxs)("div",{style:a()({position:"relative"},oe),className:v,children:[f,(0,re.jsx)("div",{className:s,style:a()(a()({zIndex:C,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(m+U,"px"),pointerEvents:"none",backgroundRepeat:"repeat"},$?{backgroundImage:"url('".concat($,"')")}:{}),xe)})]})}},44958:function($e,w,e){e.d(w,{X:function(){return a}});var k=e(50959),a=(0,k.createContext)({})}}]);
