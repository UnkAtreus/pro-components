"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[5297],{25297:function(or,ge,n){n.d(ge,{U9:function(){return U},L0:function(){return X},bg:function(){return O}});var Se=n(52510),H=n.n(Se),ye=n(57213),u=n.n(ye),Fe=n(25359),T=n.n(Fe),xe=n(49811),te=n.n(xe),Re=n(93525),oe=n.n(Re),Ce=n(54306),J=n.n(Ce),Pe=n(12342),se=n.n(Pe),ae=n(57278),je=n(48721),Me=n(16428),G=n(87832),V=n(20877),b=n(76743),Ze=n(59861),De=n(62766),ie=n(37285),Y=n(66121),Ae=n(22803),ue=n(31071),Ie=n(84875),le=n.n(Ie),$e=n(53647),We=n(86768),s=n(50959),Le=n(71770),Te=n(94290),be=n(11577),i=n(11527),Be=["onFinish","step","formRef","title","stepProps"];function Ne(a){var d=(0,s.useRef)(),r=(0,s.useContext)(O),c=(0,s.useContext)(U),h=u()(u()({},a),c),M=h.onFinish,y=h.step,A=h.formRef,Oe=h.title,t=h.stepProps,f=se()(h,Be);return(0,Te.noteOnce)(!f.submitter,"StepForm \u4E0D\u5305\u542B\u63D0\u4EA4\u6309\u94AE\uFF0C\u8BF7\u5728 StepsForm \u4E0A"),(0,s.useImperativeHandle)(A,function(){return d.current},[A==null?void 0:A.current]),(0,s.useEffect)(function(){if(h.name||h.step){var R=(h.name||h.step).toString();return r==null||r.regForm(R,h),function(){r==null||r.unRegForm(R)}}},[]),r&&r!==null&&r!==void 0&&r.formArrayRef&&(r.formArrayRef.current[y||0]=d),(0,i.jsx)(be.I,u()({formRef:d,onFinish:function(){var R=te()(T()().mark(function P(g){var F;return T()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:if(f.name&&(r==null||r.onFormFinish(f.name,g)),!M){x.next=9;break}return r==null||r.setLoading(!0),x.next=5,M==null?void 0:M(g);case 5:return F=x.sent,F&&(r==null||r.next()),r==null||r.setLoading(!1),x.abrupt("return");case 9:r!=null&&r.lastStep||r==null||r.next();case 10:case"end":return x.stop()}},P)}));return function(P){return R.apply(this,arguments)}}(),onInit:function(P,g){var F;d.current=g,r&&r!==null&&r!==void 0&&r.formArrayRef&&(r.formArrayRef.current[y||0]=d),f==null||(F=f.onInit)===null||F===void 0||F.call(f,P,g)},layout:"vertical"},(0,Le.Z)(f,["layoutType","columns"])))}var Ee=Ne,ze=n(39553),He=function(d){return H()({},d.componentCls,{"&-container":{width:"max-content",minWidth:"420px",maxWidth:"100%",margin:"auto"},"&-steps-container":H()({maxWidth:"1160px",margin:"auto"},"".concat(d.antCls,"-steps-vertical"),{height:"100%"}),"&-step":{display:"none",marginBlockStart:"32px","&-active":{display:"block"},"> form":{maxWidth:"100%"}}})};function Je(a){return(0,ze.Xj)("StepsForm",function(d){var r=u()(u()({},d),{},{componentCls:".".concat(a)});return[He(r)]})}var Ge=["current","onCurrentChange","submitter","stepsFormRender","stepsRender","stepFormRender","stepsProps","onFinish","formProps","containerStyle","formRef","formMapRef","layoutRender"],O=s.createContext(void 0),Ve={horizontal:function(d){var r=d.stepsDom,c=d.formDom;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(V.Z,{gutter:{xs:8,sm:16,md:24},children:(0,i.jsx)(b.Z,{span:24,children:r})}),(0,i.jsx)(V.Z,{gutter:{xs:8,sm:16,md:24},children:(0,i.jsx)(b.Z,{span:24,children:c})})]})},vertical:function(d){var r=d.stepsDom,c=d.formDom;return(0,i.jsxs)(V.Z,{align:"stretch",wrap:!0,gutter:{xs:8,sm:16,md:24},children:[(0,i.jsx)(b.Z,{xxl:4,xl:6,lg:7,md:8,sm:10,xs:12,children:s.cloneElement(r,{style:{height:"100%"}})}),(0,i.jsx)(b.Z,{children:(0,i.jsx)("div",{style:{display:"flex",alignItems:"center",width:"100%",height:"100%"},children:c})})]})}},U=s.createContext(null);function Ye(a){var d=(0,s.useContext)(Ze.ZP.ConfigContext),r=d.getPrefixCls,c=r("pro-steps-form"),h=Je(c),M=h.wrapSSR,y=h.hashId,A=a.current,Oe=a.onCurrentChange,t=a.submitter,f=a.stepsFormRender,R=a.stepsRender,P=a.stepFormRender,g=a.stepsProps,F=a.onFinish,K=a.formProps,x=a.containerStyle,Ue=a.formRef,Xe=a.formMapRef,I=a.layoutRender,Ke=se()(a,Ge),Q=(0,s.useRef)(new Map),j=(0,s.useRef)(new Map),C=(0,s.useRef)([]),Qe=(0,s.useState)([]),ve=J()(Qe,2),S=ve[0],de=ve[1],ke=(0,s.useState)(!1),me=J()(ke,2),$=me[0],B=me[1],Z=(0,ae.YB)(),we=(0,We.Z)(0,{value:a.current,onChange:a.onCurrentChange}),ce=J()(we,2),m=ce[0],N=ce[1],k=(0,s.useMemo)(function(){return Ve[(g==null?void 0:g.direction)||"horizontal"]},[g==null?void 0:g.direction]),w=(0,s.useMemo)(function(){return m===S.length-1},[S.length,m]),qe=(0,s.useCallback)(function(e,o){j.current.has(e)||de(function(v){return[].concat(oe()(v),[e])}),j.current.set(e,o)},[]),_e=(0,s.useCallback)(function(e){de(function(o){return o.filter(function(v){return v!==e})}),j.current.delete(e),Q.current.delete(e)},[]);(0,s.useImperativeHandle)(Xe,function(){return C.current},[C.current]),(0,s.useImperativeHandle)(Ue,function(){var e;return(e=C.current[m||0])===null||e===void 0?void 0:e.current},[m,C.current]);var er=(0,s.useCallback)(function(){var e=te()(T()().mark(function o(v,l){var L,z;return T()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(Q.current.set(v,l),!(!w||!F)){p.next=3;break}return p.abrupt("return");case 3:return B(!0),L=je.T.apply(void 0,[{}].concat(oe()(Array.from(Q.current.values())))),p.prev=5,p.next=8,F(L);case 8:z=p.sent,z&&(N(0),C.current.forEach(function(tr){var ne;return(ne=tr.current)===null||ne===void 0?void 0:ne.resetFields()})),p.next=15;break;case 12:p.prev=12,p.t0=p.catch(5),console.log(p.t0);case 15:return p.prev=15,B(!1),p.finish(15);case 18:case"end":return p.stop()}},o,null,[[5,12,15,18]])}));return function(o,v){return e.apply(this,arguments)}}(),[w,F,B,N]),q=(0,s.useMemo)(function(){var e=(0,Me.n)(De.Z,"4.24.0")>-1,o=e?{items:S.map(function(v){var l=j.current.get(v);return u()({key:v,title:l==null?void 0:l.title},l==null?void 0:l.stepProps)})}:{};return(0,i.jsx)("div",{className:"".concat(c,"-steps-container ").concat(y).trim(),style:{maxWidth:Math.min(S.length*320,1160)},children:(0,i.jsx)(ie.Z,u()(u()(u()({},g),o),{},{current:m,onChange:void 0,children:!e&&S.map(function(v){var l=j.current.get(v);return(0,i.jsx)(ie.Z.Step,u()({title:l==null?void 0:l.title},l==null?void 0:l.stepProps),v)})}))})},[S,y,c,m,g]),D=(0,G.J)(function(){var e,o=C.current[m];(e=o.current)===null||e===void 0||e.submit()}),E=(0,G.J)(function(){m<1||N(m-1)}),_=(0,s.useMemo)(function(){return t!==!1&&(0,i.jsx)(Y.ZP,u()(u()({type:"primary",loading:$},t==null?void 0:t.submitButtonProps),{},{onClick:function(){var o;t==null||(o=t.onSubmit)===null||o===void 0||o.call(t),D()},children:Z.getMessage("stepsForm.next","\u4E0B\u4E00\u6B65")}),"next")},[Z,$,D,t]),ee=(0,s.useMemo)(function(){return t!==!1&&(0,i.jsx)(Y.ZP,u()(u()({},t==null?void 0:t.resetButtonProps),{},{onClick:function(){var o;E(),t==null||(o=t.onReset)===null||o===void 0||o.call(t)},children:Z.getMessage("stepsForm.prev","\u4E0A\u4E00\u6B65")}),"pre")},[Z,E,t]),re=(0,s.useMemo)(function(){return t!==!1&&(0,i.jsx)(Y.ZP,u()(u()({type:"primary",loading:$},t==null?void 0:t.submitButtonProps),{},{onClick:function(){var o;t==null||(o=t.onSubmit)===null||o===void 0||o.call(t),D()},children:Z.getMessage("stepsForm.submit","\u63D0\u4EA4")}),"submit")},[Z,$,D,t]),rr=(0,G.J)(function(){m>S.length-2||N(m+1)}),W=(0,s.useMemo)(function(){var e=[],o=m||0;if(o<1?S.length===1?e.push(re):e.push(_):o+1===S.length?e.push(ee,re):e.push(ee,_),e=e.filter(s.isValidElement),t&&t.render){var v,l={form:(v=C.current[m])===null||v===void 0?void 0:v.current,onSubmit:D,step:m,onPre:E};return t.render(l,e)}return t&&(t==null?void 0:t.render)===!1?null:e},[S.length,_,D,ee,E,m,re,t]),fe=(0,s.useMemo)(function(){return(0,$e.Z)(a.children).map(function(e,o){var v=e.props,l=v.name||"".concat(o),L=m===o,z=L?{contentRender:P,submitter:!1}:{};return(0,i.jsx)("div",{className:le()("".concat(c,"-step"),y,H()({},"".concat(c,"-step-active"),L)),children:(0,i.jsx)(U.Provider,{value:u()(u()(u()(u()({},z),K),v),{},{name:l,step:o}),children:e})},l)})},[K,y,c,a.children,m,P]),pe=(0,s.useMemo)(function(){return R?R(S.map(function(e){var o;return{key:e,title:(o=j.current.get(e))===null||o===void 0?void 0:o.title}}),q):q},[S,q,R]),he=(0,s.useMemo)(function(){return(0,i.jsxs)("div",{className:"".concat(c,"-container ").concat(y).trim(),style:x,children:[fe,f?null:(0,i.jsx)(Ae.Z,{children:W})]})},[x,fe,y,c,f,W]),nr=(0,s.useMemo)(function(){var e={stepsDom:pe,formDom:he};return f?f(I?I(e):k(e),W):I?I(e):k(e)},[pe,he,k,f,W,I]);return M((0,i.jsx)("div",{className:le()(c,y),children:(0,i.jsx)(ue.Z.Provider,u()(u()({},Ke),{},{children:(0,i.jsx)(O.Provider,{value:{loading:$,setLoading:B,regForm:qe,keyArray:S,next:rr,formArrayRef:C,formMapRef:j,lastStep:w,unRegForm:_e,onFormFinish:er},children:nr})}))}))}function X(a){return(0,i.jsx)(ae._Y,{needDeps:!0,children:(0,i.jsx)(Ye,u()({},a))})}X.StepForm=Ee,X.useForm=ue.Z.useForm}}]);
