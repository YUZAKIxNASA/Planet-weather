(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Jg(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Kc={exports:{}},jo={},Zc={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function W0(){if(vm)return _t;vm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(I,K,be){this.props=I,this.context=K,this.refs=T,this.updater=be||y}S.prototype.isReactComponent={},S.prototype.setState=function(I,K){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,K,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function p(){}p.prototype=S.prototype;function b(I,K,be){this.props=I,this.context=K,this.refs=T,this.updater=be||y}var P=b.prototype=new p;P.constructor=b,E(P,S.prototype),P.isPureReactComponent=!0;var A=Array.isArray,q=Object.prototype.hasOwnProperty,O={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function G(I,K,be){var X,oe={},ve=null,ae=null;if(K!=null)for(X in K.ref!==void 0&&(ae=K.ref),K.key!==void 0&&(ve=""+K.key),K)q.call(K,X)&&!U.hasOwnProperty(X)&&(oe[X]=K[X]);var Te=arguments.length-2;if(Te===1)oe.children=be;else if(1<Te){for(var Ue=Array(Te),Ze=0;Ze<Te;Ze++)Ue[Ze]=arguments[Ze+2];oe.children=Ue}if(I&&I.defaultProps)for(X in Te=I.defaultProps,Te)oe[X]===void 0&&(oe[X]=Te[X]);return{$$typeof:i,type:I,key:ve,ref:ae,props:oe,_owner:O.current}}function L(I,K){return{$$typeof:i,type:I.type,key:K,ref:I.ref,props:I.props,_owner:I._owner}}function C(I){return typeof I=="object"&&I!==null&&I.$$typeof===i}function k(I){var K={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(be){return K[be]})}var ue=/\/+/g;function te(I,K){return typeof I=="object"&&I!==null&&I.key!=null?k(""+I.key):K.toString(36)}function fe(I,K,be,X,oe){var ve=typeof I;(ve==="undefined"||ve==="boolean")&&(I=null);var ae=!1;if(I===null)ae=!0;else switch(ve){case"string":case"number":ae=!0;break;case"object":switch(I.$$typeof){case i:case e:ae=!0}}if(ae)return ae=I,oe=oe(ae),I=X===""?"."+te(ae,0):X,A(oe)?(be="",I!=null&&(be=I.replace(ue,"$&/")+"/"),fe(oe,K,be,"",function(Ze){return Ze})):oe!=null&&(C(oe)&&(oe=L(oe,be+(!oe.key||ae&&ae.key===oe.key?"":(""+oe.key).replace(ue,"$&/")+"/")+I)),K.push(oe)),1;if(ae=0,X=X===""?".":X+":",A(I))for(var Te=0;Te<I.length;Te++){ve=I[Te];var Ue=X+te(ve,Te);ae+=fe(ve,K,be,Ue,oe)}else if(Ue=x(I),typeof Ue=="function")for(I=Ue.call(I),Te=0;!(ve=I.next()).done;)ve=ve.value,Ue=X+te(ve,Te++),ae+=fe(ve,K,be,Ue,oe);else if(ve==="object")throw K=String(I),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return ae}function pe(I,K,be){if(I==null)return I;var X=[],oe=0;return fe(I,X,"","",function(ve){return K.call(be,ve,oe++)}),X}function ce(I){if(I._status===-1){var K=I._result;K=K(),K.then(function(be){(I._status===0||I._status===-1)&&(I._status=1,I._result=be)},function(be){(I._status===0||I._status===-1)&&(I._status=2,I._result=be)}),I._status===-1&&(I._status=0,I._result=K)}if(I._status===1)return I._result.default;throw I._result}var de={current:null},B={transition:null},he={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:B,ReactCurrentOwner:O};function se(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:pe,forEach:function(I,K,be){pe(I,function(){K.apply(this,arguments)},be)},count:function(I){var K=0;return pe(I,function(){K++}),K},toArray:function(I){return pe(I,function(K){return K})||[]},only:function(I){if(!C(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},_t.Component=S,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=b,_t.StrictMode=s,_t.Suspense=h,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,_t.act=se,_t.cloneElement=function(I,K,be){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var X=E({},I.props),oe=I.key,ve=I.ref,ae=I._owner;if(K!=null){if(K.ref!==void 0&&(ve=K.ref,ae=O.current),K.key!==void 0&&(oe=""+K.key),I.type&&I.type.defaultProps)var Te=I.type.defaultProps;for(Ue in K)q.call(K,Ue)&&!U.hasOwnProperty(Ue)&&(X[Ue]=K[Ue]===void 0&&Te!==void 0?Te[Ue]:K[Ue])}var Ue=arguments.length-2;if(Ue===1)X.children=be;else if(1<Ue){Te=Array(Ue);for(var Ze=0;Ze<Ue;Ze++)Te[Ze]=arguments[Ze+2];X.children=Te}return{$$typeof:i,type:I.type,key:oe,ref:ve,props:X,_owner:ae}},_t.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},_t.createElement=G,_t.createFactory=function(I){var K=G.bind(null,I);return K.type=I,K},_t.createRef=function(){return{current:null}},_t.forwardRef=function(I){return{$$typeof:f,render:I}},_t.isValidElement=C,_t.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:ce}},_t.memo=function(I,K){return{$$typeof:m,type:I,compare:K===void 0?null:K}},_t.startTransition=function(I){var K=B.transition;B.transition={};try{I()}finally{B.transition=K}},_t.unstable_act=se,_t.useCallback=function(I,K){return de.current.useCallback(I,K)},_t.useContext=function(I){return de.current.useContext(I)},_t.useDebugValue=function(){},_t.useDeferredValue=function(I){return de.current.useDeferredValue(I)},_t.useEffect=function(I,K){return de.current.useEffect(I,K)},_t.useId=function(){return de.current.useId()},_t.useImperativeHandle=function(I,K,be){return de.current.useImperativeHandle(I,K,be)},_t.useInsertionEffect=function(I,K){return de.current.useInsertionEffect(I,K)},_t.useLayoutEffect=function(I,K){return de.current.useLayoutEffect(I,K)},_t.useMemo=function(I,K){return de.current.useMemo(I,K)},_t.useReducer=function(I,K,be){return de.current.useReducer(I,K,be)},_t.useRef=function(I){return de.current.useRef(I)},_t.useState=function(I){return de.current.useState(I)},_t.useSyncExternalStore=function(I,K,be){return de.current.useSyncExternalStore(I,K,be)},_t.useTransition=function(){return de.current.useTransition()},_t.version="18.3.1",_t}var xm;function Ld(){return xm||(xm=1,Zc.exports=W0()),Zc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function j0(){if(ym)return jo;ym=1;var i=Ld(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,m){var g,v={},x=null,y=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(y=h.ref);for(g in h)s.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:f,key:x,ref:y,props:v,_owner:o.current}}return jo.Fragment=t,jo.jsx=c,jo.jsxs=c,jo}var Sm;function X0(){return Sm||(Sm=1,Kc.exports=j0()),Kc.exports}var ee=X0(),Ut=Ld();const q0=Jg(Ut);var yl={},Jc={exports:{}},In={},Qc={exports:{}},ef={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function Y0(){return Em||(Em=1,(function(i){function e(B,he){var se=B.length;B.push(he);e:for(;0<se;){var I=se-1>>>1,K=B[I];if(0<o(K,he))B[I]=he,B[se]=K,se=I;else break e}}function t(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var he=B[0],se=B.pop();if(se!==he){B[0]=se;e:for(var I=0,K=B.length,be=K>>>1;I<be;){var X=2*(I+1)-1,oe=B[X],ve=X+1,ae=B[ve];if(0>o(oe,se))ve<K&&0>o(ae,oe)?(B[I]=ae,B[ve]=se,I=ve):(B[I]=oe,B[X]=se,I=X);else if(ve<K&&0>o(ae,se))B[I]=ae,B[ve]=se,I=ve;else break e}}return he}function o(B,he){var se=B.sortIndex-he.sortIndex;return se!==0?se:B.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();i.unstable_now=function(){return c.now()-f}}var h=[],m=[],g=1,v=null,x=3,y=!1,E=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(B){for(var he=t(m);he!==null;){if(he.callback===null)s(m);else if(he.startTime<=B)s(m),he.sortIndex=he.expirationTime,e(h,he);else break;he=t(m)}}function A(B){if(T=!1,P(B),!E)if(t(h)!==null)E=!0,ce(q);else{var he=t(m);he!==null&&de(A,he.startTime-B)}}function q(B,he){E=!1,T&&(T=!1,p(G),G=-1),y=!0;var se=x;try{for(P(he),v=t(h);v!==null&&(!(v.expirationTime>he)||B&&!k());){var I=v.callback;if(typeof I=="function"){v.callback=null,x=v.priorityLevel;var K=I(v.expirationTime<=he);he=i.unstable_now(),typeof K=="function"?v.callback=K:v===t(h)&&s(h),P(he)}else s(h);v=t(h)}if(v!==null)var be=!0;else{var X=t(m);X!==null&&de(A,X.startTime-he),be=!1}return be}finally{v=null,x=se,y=!1}}var O=!1,U=null,G=-1,L=5,C=-1;function k(){return!(i.unstable_now()-C<L)}function ue(){if(U!==null){var B=i.unstable_now();C=B;var he=!0;try{he=U(!0,B)}finally{he?te():(O=!1,U=null)}}else O=!1}var te;if(typeof b=="function")te=function(){b(ue)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,pe=fe.port2;fe.port1.onmessage=ue,te=function(){pe.postMessage(null)}}else te=function(){S(ue,0)};function ce(B){U=B,O||(O=!0,te())}function de(B,he){G=S(function(){B(i.unstable_now())},he)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(B){B.callback=null},i.unstable_continueExecution=function(){E||y||(E=!0,ce(q))},i.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<B?Math.floor(1e3/B):5},i.unstable_getCurrentPriorityLevel=function(){return x},i.unstable_getFirstCallbackNode=function(){return t(h)},i.unstable_next=function(B){switch(x){case 1:case 2:case 3:var he=3;break;default:he=x}var se=x;x=he;try{return B()}finally{x=se}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(B,he){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var se=x;x=B;try{return he()}finally{x=se}},i.unstable_scheduleCallback=function(B,he,se){var I=i.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?I+se:I):se=I,B){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=se+K,B={id:g++,callback:he,priorityLevel:B,startTime:se,expirationTime:K,sortIndex:-1},se>I?(B.sortIndex=se,e(m,B),t(h)===null&&B===t(m)&&(T?(p(G),G=-1):T=!0,de(A,se-I))):(B.sortIndex=K,e(h,B),E||y||(E=!0,ce(q))),B},i.unstable_shouldYield=k,i.unstable_wrapCallback=function(B){var he=x;return function(){var se=x;x=he;try{return B.apply(this,arguments)}finally{x=se}}}})(ef)),ef}var Mm;function $0(){return Mm||(Mm=1,Qc.exports=Y0()),Qc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm;function K0(){if(Tm)return In;Tm=1;var i=Ld(),e=$0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function x(n){return h.call(v,n)?!0:h.call(g,n)?!1:m.test(n)?v[n]=!0:(g[n]=!0,!1)}function y(n,r,a,u){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,a,u){if(r===null||typeof r>"u"||y(n,r,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(n,r,a,u,d,_,M){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=_,this.removeEmptyString=M}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new T(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var p=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(p,b);S[r]=new T(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(p,b);S[r]=new T(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(p,b);S[r]=new T(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,a,u){var d=S.hasOwnProperty(r)?S[r]:null;(d!==null?d.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,a,d,u)&&(a=null),u||d===null?x(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,r,a):n.setAttribute(r,a))))}var A=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),k=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),B=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,I;function K(n){if(I===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);I=r&&r[1]||""}return`
`+I+n}var be=!1;function X(n,r){if(!n||be)return"";be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ne){var u=ne}Reflect.construct(n,[],r)}else{try{r.call()}catch(ne){u=ne}n.call(r.prototype)}else{try{throw Error()}catch(ne){u=ne}n()}}catch(ne){if(ne&&u&&typeof ne.stack=="string"){for(var d=ne.stack.split(`
`),_=u.stack.split(`
`),M=d.length-1,N=_.length-1;1<=M&&0<=N&&d[M]!==_[N];)N--;for(;1<=M&&0<=N;M--,N--)if(d[M]!==_[N]){if(M!==1||N!==1)do if(M--,N--,0>N||d[M]!==_[N]){var F=`
`+d[M].replace(" at new "," at ");return n.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",n.displayName)),F}while(1<=M&&0<=N);break}}}finally{be=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?K(n):""}function oe(n){switch(n.tag){case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return n=X(n.type,!1),n;case 11:return n=X(n.type.render,!1),n;case 1:return n=X(n.type,!0),n;default:return""}}function ve(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case O:return"Portal";case L:return"Profiler";case G:return"StrictMode";case te:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case ue:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pe:return r=n.displayName||null,r!==null?r:ve(n.type)||"Memo";case ce:r=n._payload,n=n._init;try{return ve(n(r))}catch{}}return null}function ae(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(r);case 8:return r===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ze(n){var r=Ue(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,_=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,_.call(this,M)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function vt(n){n._valueTracker||(n._valueTracker=Ze(n))}function et(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),u="";return n&&(u=Ue(n)?n.checked?"true":"false":n.value),n=u,n!==a?(r.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function V(n,r){var a=r.checked;return se({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function en(n,r){var a=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;a=Te(r.value!=null?r.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ft(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function nt(n,r){ft(n,r);var a=Te(r.value),u=r.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ot(n,r.type,a):r.hasOwnProperty("defaultValue")&&ot(n,r.type,Te(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ee(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ot(n,r,a){(r!=="number"||pt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ze=Array.isArray;function D(n,r,a,u){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Te(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function w(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function J(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(ze(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Te(a)}}function me(n,r){var a=Te(r.value),u=Te(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function ye(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ge(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ge(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Le,ke=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,u,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Le=Le||document.createElement("div"),Le.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Le.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function mt(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},He=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(n){He.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),we[r]=we[n]})});function tt(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||we.hasOwnProperty(n)&&we[n]?(""+r).trim():r+"px"}function it(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=tt(a,r[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var Ve=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(n,r){if(r){if(Ve[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function lt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var De=null,le=null,_e=null;function Oe(n){if(n=Po(n)){if(typeof De!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Ia(r),De(n.stateNode,n.type,r))}}function Ie(n){le?_e?_e.push(n):_e=[n]:le=n}function ut(){if(le){var n=le,r=_e;if(_e=le=null,Oe(n),r)for(n=0;n<r.length;n++)Oe(r[n])}}function It(n,r){return n(r)}function Yt(){}var St=!1;function Cn(n,r,a){if(St)return n(r,a);St=!0;try{return It(n,r,a)}finally{St=!1,(le!==null||_e!==null)&&(Yt(),ut())}}function Sn(n,r){var a=n.stateNode;if(a===null)return null;var u=Ia(a);if(u===null)return null;a=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var cs=!1;if(f)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){cs=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{cs=!1}function Pi(n,r,a,u,d,_,M,N,F){var ne=Array.prototype.slice.call(arguments,3);try{r.apply(a,ne)}catch(Se){this.onError(Se)}}var Li=!1,Dr=null,Nr=!1,Ji=null,ma={onError:function(n){Li=!0,Dr=n}};function fs(n,r,a,u,d,_,M,N,F){Li=!1,Dr=null,Pi.apply(ma,arguments)}function ga(n,r,a,u,d,_,M,N,F){if(fs.apply(this,arguments),Li){if(Li){var ne=Dr;Li=!1,Dr=null}else throw Error(t(198));Nr||(Nr=!0,Ji=ne)}}function xi(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function _a(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function va(n){if(xi(n)!==n)throw Error(t(188))}function vu(n){var r=n.alternate;if(!r){if(r=xi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,u=r;;){var d=a.return;if(d===null)break;var _=d.alternate;if(_===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===_.child){for(_=d.child;_;){if(_===a)return va(d),n;if(_===u)return va(d),r;_=_.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=_;else{for(var M=!1,N=d.child;N;){if(N===a){M=!0,a=d,u=_;break}if(N===u){M=!0,u=d,a=_;break}N=N.sibling}if(!M){for(N=_.child;N;){if(N===a){M=!0,a=_,u=d;break}if(N===u){M=!0,u=_,a=d;break}N=N.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function R(n){return n=vu(n),n!==null?j(n):null}function j(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=j(n);if(r!==null)return r;n=n.sibling}return null}var ie=e.unstable_scheduleCallback,re=e.unstable_cancelCallback,Y=e.unstable_shouldYield,Ce=e.unstable_requestPaint,Ae=e.unstable_now,qe=e.unstable_getCurrentPriorityLevel,We=e.unstable_ImmediatePriority,rt=e.unstable_UserBlockingPriority,at=e.unstable_NormalPriority,Ye=e.unstable_LowPriority,yt=e.unstable_IdlePriority,Ct=null,xt=null;function cn(n){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Ct,n,void 0,(n.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:wt,Ke=Math.log,ri=Math.LN2;function wt(n){return n>>>=0,n===0?32:31-(Ke(n)/ri|0)|0}var fn=64,si=4194304;function $t(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function yi(n,r){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,_=n.pingedLanes,M=a&268435455;if(M!==0){var N=M&~d;N!==0?u=$t(N):(_&=M,_!==0&&(u=$t(_)))}else M=a&~d,M!==0?u=$t(M):_!==0&&(u=$t(_));if(u===0)return 0;if(r!==0&&r!==u&&(r&d)===0&&(d=u&-u,_=r&-r,d>=_||d===16&&(_&4194240)!==0))return r;if((u&4)!==0&&(u|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)a=31-ct(r),d=1<<a,u|=n[a],r&=~d;return u}function Dt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xn(n,r){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,_=n.pendingLanes;0<_;){var M=31-ct(_),N=1<<M,F=d[M];F===-1?((N&a)===0||(N&u)!==0)&&(d[M]=Dt(N,r)):F<=r&&(n.expiredLanes|=N),_&=~N}}function Di(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function En(){var n=fn;return fn<<=1,(fn&4194240)===0&&(fn=64),n}function qn(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function bn(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-ct(r),n[r]=a}function xa(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-ct(a),_=1<<d;r[d]=0,u[d]=-1,n[d]=-1,a&=~_}}function xu(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var u=31-ct(a),d=1<<u;d&r|n[u]&r&&(n[u]|=r),a&=~d}}var Pt=0;function Kd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Zd,yu,Jd,Qd,eh,Su=!1,ya=[],Qi=null,er=null,tr=null,po=new Map,mo=new Map,nr=[],dv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function th(n,r){switch(n){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":po.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(r.pointerId)}}function go(n,r,a,u,d,_){return n===null||n.nativeEvent!==_?(n={blockedOn:r,domEventName:a,eventSystemFlags:u,nativeEvent:_,targetContainers:[d]},r!==null&&(r=Po(r),r!==null&&yu(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function hv(n,r,a,u,d){switch(r){case"focusin":return Qi=go(Qi,n,r,a,u,d),!0;case"dragenter":return er=go(er,n,r,a,u,d),!0;case"mouseover":return tr=go(tr,n,r,a,u,d),!0;case"pointerover":var _=d.pointerId;return po.set(_,go(po.get(_)||null,n,r,a,u,d)),!0;case"gotpointercapture":return _=d.pointerId,mo.set(_,go(mo.get(_)||null,n,r,a,u,d)),!0}return!1}function nh(n){var r=Ur(n.target);if(r!==null){var a=xi(r);if(a!==null){if(r=a.tag,r===13){if(r=_a(a),r!==null){n.blockedOn=r,eh(n.priority,function(){Jd(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Sa(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Mu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);bt=u,a.target.dispatchEvent(u),bt=null}else return r=Po(a),r!==null&&yu(r),n.blockedOn=a,!1;r.shift()}return!0}function ih(n,r,a){Sa(n)&&a.delete(r)}function pv(){Su=!1,Qi!==null&&Sa(Qi)&&(Qi=null),er!==null&&Sa(er)&&(er=null),tr!==null&&Sa(tr)&&(tr=null),po.forEach(ih),mo.forEach(ih)}function _o(n,r){n.blockedOn===r&&(n.blockedOn=null,Su||(Su=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,pv)))}function vo(n){function r(d){return _o(d,n)}if(0<ya.length){_o(ya[0],n);for(var a=1;a<ya.length;a++){var u=ya[a];u.blockedOn===n&&(u.blockedOn=null)}}for(Qi!==null&&_o(Qi,n),er!==null&&_o(er,n),tr!==null&&_o(tr,n),po.forEach(r),mo.forEach(r),a=0;a<nr.length;a++)u=nr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<nr.length&&(a=nr[0],a.blockedOn===null);)nh(a),a.blockedOn===null&&nr.shift()}var ds=A.ReactCurrentBatchConfig,Ea=!0;function mv(n,r,a,u){var d=Pt,_=ds.transition;ds.transition=null;try{Pt=1,Eu(n,r,a,u)}finally{Pt=d,ds.transition=_}}function gv(n,r,a,u){var d=Pt,_=ds.transition;ds.transition=null;try{Pt=4,Eu(n,r,a,u)}finally{Pt=d,ds.transition=_}}function Eu(n,r,a,u){if(Ea){var d=Mu(n,r,a,u);if(d===null)zu(n,r,u,Ma,a),th(n,u);else if(hv(d,n,r,a,u))u.stopPropagation();else if(th(n,u),r&4&&-1<dv.indexOf(n)){for(;d!==null;){var _=Po(d);if(_!==null&&Zd(_),_=Mu(n,r,a,u),_===null&&zu(n,r,u,Ma,a),_===d)break;d=_}d!==null&&u.stopPropagation()}else zu(n,r,u,null,a)}}var Ma=null;function Mu(n,r,a,u){if(Ma=null,n=W(u),n=Ur(n),n!==null)if(r=xi(n),r===null)n=null;else if(a=r.tag,a===13){if(n=_a(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ma=n,null}function rh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qe()){case We:return 1;case rt:return 4;case at:case Ye:return 16;case yt:return 536870912;default:return 16}default:return 16}}var ir=null,Tu=null,Ta=null;function sh(){if(Ta)return Ta;var n,r=Tu,a=r.length,u,d="value"in ir?ir.value:ir.textContent,_=d.length;for(n=0;n<a&&r[n]===d[n];n++);var M=a-n;for(u=1;u<=M&&r[a-u]===d[_-u];u++);return Ta=d.slice(n,1<u?1-u:void 0)}function wa(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Aa(){return!0}function oh(){return!1}function zn(n){function r(a,u,d,_,M){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=_,this.target=M,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(a=n[N],this[N]=a?a(_):_[N]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Aa:oh,this.isPropagationStopped=oh,this}return se(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),r}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wu=zn(hs),xo=se({},hs,{view:0,detail:0}),_v=zn(xo),Au,Ru,yo,Ra=se({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==yo&&(yo&&n.type==="mousemove"?(Au=n.screenX-yo.screenX,Ru=n.screenY-yo.screenY):Ru=Au=0,yo=n),Au)},movementY:function(n){return"movementY"in n?n.movementY:Ru}}),ah=zn(Ra),vv=se({},Ra,{dataTransfer:0}),xv=zn(vv),yv=se({},xo,{relatedTarget:0}),Cu=zn(yv),Sv=se({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=zn(Sv),Mv=se({},hs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Tv=zn(Mv),wv=se({},hs,{data:0}),lh=zn(wv),Av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Cv[n])?!!r[n]:!1}function bu(){return bv}var Pv=se({},xo,{key:function(n){if(n.key){var r=Av[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=wa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Rv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(n){return n.type==="keypress"?wa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Lv=zn(Pv),Dv=se({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uh=zn(Dv),Nv=se({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),Uv=zn(Nv),Iv=se({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ov=zn(Iv),Fv=se({},Ra,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),kv=zn(Fv),Bv=[9,13,27,32],Pu=f&&"CompositionEvent"in window,So=null;f&&"documentMode"in document&&(So=document.documentMode);var zv=f&&"TextEvent"in window&&!So,ch=f&&(!Pu||So&&8<So&&11>=So),fh=" ",dh=!1;function hh(n,r){switch(n){case"keyup":return Bv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ph(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ps=!1;function Hv(n,r){switch(n){case"compositionend":return ph(r);case"keypress":return r.which!==32?null:(dh=!0,fh);case"textInput":return n=r.data,n===fh&&dh?null:n;default:return null}}function Vv(n,r){if(ps)return n==="compositionend"||!Pu&&hh(n,r)?(n=sh(),Ta=Tu=ir=null,ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ch&&r.locale!=="ko"?null:r.data;default:return null}}var Gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Gv[n.type]:r==="textarea"}function gh(n,r,a,u){Ie(u),r=Da(r,"onChange"),0<r.length&&(a=new wu("onChange","change",null,a,u),n.push({event:a,listeners:r}))}var Eo=null,Mo=null;function Wv(n){Uh(n,0)}function Ca(n){var r=xs(n);if(et(r))return n}function jv(n,r){if(n==="change")return r}var _h=!1;if(f){var Lu;if(f){var Du="oninput"in document;if(!Du){var vh=document.createElement("div");vh.setAttribute("oninput","return;"),Du=typeof vh.oninput=="function"}Lu=Du}else Lu=!1;_h=Lu&&(!document.documentMode||9<document.documentMode)}function xh(){Eo&&(Eo.detachEvent("onpropertychange",yh),Mo=Eo=null)}function yh(n){if(n.propertyName==="value"&&Ca(Mo)){var r=[];gh(r,Mo,n,W(n)),Cn(Wv,r)}}function Xv(n,r,a){n==="focusin"?(xh(),Eo=r,Mo=a,Eo.attachEvent("onpropertychange",yh)):n==="focusout"&&xh()}function qv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ca(Mo)}function Yv(n,r){if(n==="click")return Ca(r)}function $v(n,r){if(n==="input"||n==="change")return Ca(r)}function Kv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var oi=typeof Object.is=="function"?Object.is:Kv;function To(n,r){if(oi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),u=Object.keys(r);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(r,d)||!oi(n[d],r[d]))return!1}return!0}function Sh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Eh(n,r){var a=Sh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=r&&u>=r)return{node:a,offset:r-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sh(a)}}function Mh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Mh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Th(){for(var n=window,r=pt();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=pt(n.document)}return r}function Nu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Zv(n){var r=Th(),a=n.focusedElem,u=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Mh(a.ownerDocument.documentElement,a)){if(u!==null&&Nu(a)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,_=Math.min(u.start,d);u=u.end===void 0?_:Math.min(u.end,d),!n.extend&&_>u&&(d=u,u=_,_=d),d=Eh(a,_);var M=Eh(a,u);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),_>u?(n.addRange(r),n.extend(M.node,M.offset)):(r.setEnd(M.node,M.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Jv=f&&"documentMode"in document&&11>=document.documentMode,ms=null,Uu=null,wo=null,Iu=!1;function wh(n,r,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Iu||ms==null||ms!==pt(u)||(u=ms,"selectionStart"in u&&Nu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),wo&&To(wo,u)||(wo=u,u=Da(Uu,"onSelect"),0<u.length&&(r=new wu("onSelect","select",null,r,a),n.push({event:r,listeners:u}),r.target=ms)))}function ba(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var gs={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Ou={},Ah={};f&&(Ah=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Pa(n){if(Ou[n])return Ou[n];if(!gs[n])return n;var r=gs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Ah)return Ou[n]=r[a];return n}var Rh=Pa("animationend"),Ch=Pa("animationiteration"),bh=Pa("animationstart"),Ph=Pa("transitionend"),Lh=new Map,Dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(n,r){Lh.set(n,r),l(r,[n])}for(var Fu=0;Fu<Dh.length;Fu++){var ku=Dh[Fu],Qv=ku.toLowerCase(),e0=ku[0].toUpperCase()+ku.slice(1);rr(Qv,"on"+e0)}rr(Rh,"onAnimationEnd"),rr(Ch,"onAnimationIteration"),rr(bh,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(Ph,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function Nh(n,r,a){var u=n.type||"unknown-event";n.currentTarget=a,ga(u,r,void 0,n),n.currentTarget=null}function Uh(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var _=void 0;if(r)for(var M=u.length-1;0<=M;M--){var N=u[M],F=N.instance,ne=N.currentTarget;if(N=N.listener,F!==_&&d.isPropagationStopped())break e;Nh(d,N,ne),_=F}else for(M=0;M<u.length;M++){if(N=u[M],F=N.instance,ne=N.currentTarget,N=N.listener,F!==_&&d.isPropagationStopped())break e;Nh(d,N,ne),_=F}}}if(Nr)throw n=Ji,Nr=!1,Ji=null,n}function Ot(n,r){var a=r[Xu];a===void 0&&(a=r[Xu]=new Set);var u=n+"__bubble";a.has(u)||(Ih(r,n,2,!1),a.add(u))}function Bu(n,r,a){var u=0;r&&(u|=4),Ih(a,n,u,r)}var La="_reactListening"+Math.random().toString(36).slice(2);function Ro(n){if(!n[La]){n[La]=!0,s.forEach(function(a){a!=="selectionchange"&&(t0.has(a)||Bu(a,!1,n),Bu(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[La]||(r[La]=!0,Bu("selectionchange",!1,r))}}function Ih(n,r,a,u){switch(rh(r)){case 1:var d=mv;break;case 4:d=gv;break;default:d=Eu}a=d.bind(null,r,a,n),d=void 0,!cs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function zu(n,r,a,u,d){var _=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var N=u.stateNode.containerInfo;if(N===d||N.nodeType===8&&N.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var F=M.tag;if((F===3||F===4)&&(F=M.stateNode.containerInfo,F===d||F.nodeType===8&&F.parentNode===d))return;M=M.return}for(;N!==null;){if(M=Ur(N),M===null)return;if(F=M.tag,F===5||F===6){u=_=M;continue e}N=N.parentNode}}u=u.return}Cn(function(){var ne=_,Se=W(a),Me=[];e:{var xe=Lh.get(n);if(xe!==void 0){var Fe=wu,Ge=n;switch(n){case"keypress":if(wa(a)===0)break e;case"keydown":case"keyup":Fe=Lv;break;case"focusin":Ge="focus",Fe=Cu;break;case"focusout":Ge="blur",Fe=Cu;break;case"beforeblur":case"afterblur":Fe=Cu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=Uv;break;case Rh:case Ch:case bh:Fe=Ev;break;case Ph:Fe=Ov;break;case"scroll":Fe=_v;break;case"wheel":Fe=kv;break;case"copy":case"cut":case"paste":Fe=Tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=uh}var je=(r&4)!==0,jt=!je&&n==="scroll",$=je?xe!==null?xe+"Capture":null:xe;je=[];for(var H=ne,Z;H!==null;){Z=H;var Re=Z.stateNode;if(Z.tag===5&&Re!==null&&(Z=Re,$!==null&&(Re=Sn(H,$),Re!=null&&je.push(Co(H,Re,Z)))),jt)break;H=H.return}0<je.length&&(xe=new Fe(xe,Ge,null,a,Se),Me.push({event:xe,listeners:je}))}}if((r&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",xe&&a!==bt&&(Ge=a.relatedTarget||a.fromElement)&&(Ur(Ge)||Ge[Ni]))break e;if((Fe||xe)&&(xe=Se.window===Se?Se:(xe=Se.ownerDocument)?xe.defaultView||xe.parentWindow:window,Fe?(Ge=a.relatedTarget||a.toElement,Fe=ne,Ge=Ge?Ur(Ge):null,Ge!==null&&(jt=xi(Ge),Ge!==jt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Fe=null,Ge=ne),Fe!==Ge)){if(je=ah,Re="onMouseLeave",$="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(je=uh,Re="onPointerLeave",$="onPointerEnter",H="pointer"),jt=Fe==null?xe:xs(Fe),Z=Ge==null?xe:xs(Ge),xe=new je(Re,H+"leave",Fe,a,Se),xe.target=jt,xe.relatedTarget=Z,Re=null,Ur(Se)===ne&&(je=new je($,H+"enter",Ge,a,Se),je.target=Z,je.relatedTarget=jt,Re=je),jt=Re,Fe&&Ge)t:{for(je=Fe,$=Ge,H=0,Z=je;Z;Z=_s(Z))H++;for(Z=0,Re=$;Re;Re=_s(Re))Z++;for(;0<H-Z;)je=_s(je),H--;for(;0<Z-H;)$=_s($),Z--;for(;H--;){if(je===$||$!==null&&je===$.alternate)break t;je=_s(je),$=_s($)}je=null}else je=null;Fe!==null&&Oh(Me,xe,Fe,je,!1),Ge!==null&&jt!==null&&Oh(Me,jt,Ge,je,!0)}}e:{if(xe=ne?xs(ne):window,Fe=xe.nodeName&&xe.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&xe.type==="file")var $e=jv;else if(mh(xe))if(_h)$e=$v;else{$e=qv;var Je=Xv}else(Fe=xe.nodeName)&&Fe.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&($e=Yv);if($e&&($e=$e(n,ne))){gh(Me,$e,a,Se);break e}Je&&Je(n,xe,ne),n==="focusout"&&(Je=xe._wrapperState)&&Je.controlled&&xe.type==="number"&&ot(xe,"number",xe.value)}switch(Je=ne?xs(ne):window,n){case"focusin":(mh(Je)||Je.contentEditable==="true")&&(ms=Je,Uu=ne,wo=null);break;case"focusout":wo=Uu=ms=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,wh(Me,a,Se);break;case"selectionchange":if(Jv)break;case"keydown":case"keyup":wh(Me,a,Se)}var Qe;if(Pu)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else ps?hh(n,a)&&(st="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(ch&&a.locale!=="ko"&&(ps||st!=="onCompositionStart"?st==="onCompositionEnd"&&ps&&(Qe=sh()):(ir=Se,Tu="value"in ir?ir.value:ir.textContent,ps=!0)),Je=Da(ne,st),0<Je.length&&(st=new lh(st,n,null,a,Se),Me.push({event:st,listeners:Je}),Qe?st.data=Qe:(Qe=ph(a),Qe!==null&&(st.data=Qe)))),(Qe=zv?Hv(n,a):Vv(n,a))&&(ne=Da(ne,"onBeforeInput"),0<ne.length&&(Se=new lh("onBeforeInput","beforeinput",null,a,Se),Me.push({event:Se,listeners:ne}),Se.data=Qe))}Uh(Me,r)})}function Co(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Da(n,r){for(var a=r+"Capture",u=[];n!==null;){var d=n,_=d.stateNode;d.tag===5&&_!==null&&(d=_,_=Sn(n,a),_!=null&&u.unshift(Co(n,_,d)),_=Sn(n,r),_!=null&&u.push(Co(n,_,d))),n=n.return}return u}function _s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Oh(n,r,a,u,d){for(var _=r._reactName,M=[];a!==null&&a!==u;){var N=a,F=N.alternate,ne=N.stateNode;if(F!==null&&F===u)break;N.tag===5&&ne!==null&&(N=ne,d?(F=Sn(a,_),F!=null&&M.unshift(Co(a,F,N))):d||(F=Sn(a,_),F!=null&&M.push(Co(a,F,N)))),a=a.return}M.length!==0&&n.push({event:r,listeners:M})}var n0=/\r\n?/g,i0=/\u0000|\uFFFD/g;function Fh(n){return(typeof n=="string"?n:""+n).replace(n0,`
`).replace(i0,"")}function Na(n,r,a){if(r=Fh(r),Fh(n)!==r&&a)throw Error(t(425))}function Ua(){}var Hu=null,Vu=null;function Gu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Wu=typeof setTimeout=="function"?setTimeout:void 0,r0=typeof clearTimeout=="function"?clearTimeout:void 0,kh=typeof Promise=="function"?Promise:void 0,s0=typeof queueMicrotask=="function"?queueMicrotask:typeof kh<"u"?function(n){return kh.resolve(null).then(n).catch(o0)}:Wu;function o0(n){setTimeout(function(){throw n})}function ju(n,r){var a=r,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),vo(r);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);vo(r)}function sr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Bh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var vs=Math.random().toString(36).slice(2),Si="__reactFiber$"+vs,bo="__reactProps$"+vs,Ni="__reactContainer$"+vs,Xu="__reactEvents$"+vs,a0="__reactListeners$"+vs,l0="__reactHandles$"+vs;function Ur(n){var r=n[Si];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Ni]||a[Si]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Bh(n);n!==null;){if(a=n[Si])return a;n=Bh(n)}return r}n=a,a=n.parentNode}return null}function Po(n){return n=n[Si]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ia(n){return n[bo]||null}var qu=[],ys=-1;function or(n){return{current:n}}function Ft(n){0>ys||(n.current=qu[ys],qu[ys]=null,ys--)}function Nt(n,r){ys++,qu[ys]=n.current,n.current=r}var ar={},dn=or(ar),Pn=or(!1),Ir=ar;function Ss(n,r){var a=n.type.contextTypes;if(!a)return ar;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var d={},_;for(_ in a)d[_]=r[_];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ln(n){return n=n.childContextTypes,n!=null}function Oa(){Ft(Pn),Ft(dn)}function zh(n,r,a){if(dn.current!==ar)throw Error(t(168));Nt(dn,r),Nt(Pn,a)}function Hh(n,r,a){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in r))throw Error(t(108,ae(n)||"Unknown",d));return se({},a,u)}function Fa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ar,Ir=dn.current,Nt(dn,n),Nt(Pn,Pn.current),!0}function Vh(n,r,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Hh(n,r,Ir),u.__reactInternalMemoizedMergedChildContext=n,Ft(Pn),Ft(dn),Nt(dn,n)):Ft(Pn),Nt(Pn,a)}var Ui=null,ka=!1,Yu=!1;function Gh(n){Ui===null?Ui=[n]:Ui.push(n)}function u0(n){ka=!0,Gh(n)}function lr(){if(!Yu&&Ui!==null){Yu=!0;var n=0,r=Pt;try{var a=Ui;for(Pt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Ui=null,ka=!1}catch(d){throw Ui!==null&&(Ui=Ui.slice(n+1)),ie(We,lr),d}finally{Pt=r,Yu=!1}}return null}var Es=[],Ms=0,Ba=null,za=0,Yn=[],$n=0,Or=null,Ii=1,Oi="";function Fr(n,r){Es[Ms++]=za,Es[Ms++]=Ba,Ba=n,za=r}function Wh(n,r,a){Yn[$n++]=Ii,Yn[$n++]=Oi,Yn[$n++]=Or,Or=n;var u=Ii;n=Oi;var d=32-ct(u)-1;u&=~(1<<d),a+=1;var _=32-ct(r)+d;if(30<_){var M=d-d%5;_=(u&(1<<M)-1).toString(32),u>>=M,d-=M,Ii=1<<32-ct(r)+d|a<<d|u,Oi=_+n}else Ii=1<<_|a<<d|u,Oi=n}function $u(n){n.return!==null&&(Fr(n,1),Wh(n,1,0))}function Ku(n){for(;n===Ba;)Ba=Es[--Ms],Es[Ms]=null,za=Es[--Ms],Es[Ms]=null;for(;n===Or;)Or=Yn[--$n],Yn[$n]=null,Oi=Yn[--$n],Yn[$n]=null,Ii=Yn[--$n],Yn[$n]=null}var Hn=null,Vn=null,kt=!1,ai=null;function jh(n,r){var a=Qn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Xh(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Hn=n,Vn=sr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Hn=n,Vn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Or!==null?{id:Ii,overflow:Oi}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Qn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,Hn=n,Vn=null,!0):!1;default:return!1}}function Zu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ju(n){if(kt){var r=Vn;if(r){var a=r;if(!Xh(n,r)){if(Zu(n))throw Error(t(418));r=sr(a.nextSibling);var u=Hn;r&&Xh(n,r)?jh(u,a):(n.flags=n.flags&-4097|2,kt=!1,Hn=n)}}else{if(Zu(n))throw Error(t(418));n.flags=n.flags&-4097|2,kt=!1,Hn=n}}}function qh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Hn=n}function Ha(n){if(n!==Hn)return!1;if(!kt)return qh(n),kt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Gu(n.type,n.memoizedProps)),r&&(r=Vn)){if(Zu(n))throw Yh(),Error(t(418));for(;r;)jh(n,r),r=sr(r.nextSibling)}if(qh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){Vn=sr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}Vn=null}}else Vn=Hn?sr(n.stateNode.nextSibling):null;return!0}function Yh(){for(var n=Vn;n;)n=sr(n.nextSibling)}function Ts(){Vn=Hn=null,kt=!1}function Qu(n){ai===null?ai=[n]:ai.push(n)}var c0=A.ReactCurrentBatchConfig;function Lo(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,_=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===_?r.ref:(r=function(M){var N=d.refs;M===null?delete N[_]:N[_]=M},r._stringRef=_,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Va(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function $h(n){var r=n._init;return r(n._payload)}function Kh(n){function r($,H){if(n){var Z=$.deletions;Z===null?($.deletions=[H],$.flags|=16):Z.push(H)}}function a($,H){if(!n)return null;for(;H!==null;)r($,H),H=H.sibling;return null}function u($,H){for($=new Map;H!==null;)H.key!==null?$.set(H.key,H):$.set(H.index,H),H=H.sibling;return $}function d($,H){return $=gr($,H),$.index=0,$.sibling=null,$}function _($,H,Z){return $.index=Z,n?(Z=$.alternate,Z!==null?(Z=Z.index,Z<H?($.flags|=2,H):Z):($.flags|=2,H)):($.flags|=1048576,H)}function M($){return n&&$.alternate===null&&($.flags|=2),$}function N($,H,Z,Re){return H===null||H.tag!==6?(H=Wc(Z,$.mode,Re),H.return=$,H):(H=d(H,Z),H.return=$,H)}function F($,H,Z,Re){var $e=Z.type;return $e===U?Se($,H,Z.props.children,Re,Z.key):H!==null&&(H.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ce&&$h($e)===H.type)?(Re=d(H,Z.props),Re.ref=Lo($,H,Z),Re.return=$,Re):(Re=dl(Z.type,Z.key,Z.props,null,$.mode,Re),Re.ref=Lo($,H,Z),Re.return=$,Re)}function ne($,H,Z,Re){return H===null||H.tag!==4||H.stateNode.containerInfo!==Z.containerInfo||H.stateNode.implementation!==Z.implementation?(H=jc(Z,$.mode,Re),H.return=$,H):(H=d(H,Z.children||[]),H.return=$,H)}function Se($,H,Z,Re,$e){return H===null||H.tag!==7?(H=jr(Z,$.mode,Re,$e),H.return=$,H):(H=d(H,Z),H.return=$,H)}function Me($,H,Z){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Wc(""+H,$.mode,Z),H.return=$,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case q:return Z=dl(H.type,H.key,H.props,null,$.mode,Z),Z.ref=Lo($,null,H),Z.return=$,Z;case O:return H=jc(H,$.mode,Z),H.return=$,H;case ce:var Re=H._init;return Me($,Re(H._payload),Z)}if(ze(H)||he(H))return H=jr(H,$.mode,Z,null),H.return=$,H;Va($,H)}return null}function xe($,H,Z,Re){var $e=H!==null?H.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return $e!==null?null:N($,H,""+Z,Re);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case q:return Z.key===$e?F($,H,Z,Re):null;case O:return Z.key===$e?ne($,H,Z,Re):null;case ce:return $e=Z._init,xe($,H,$e(Z._payload),Re)}if(ze(Z)||he(Z))return $e!==null?null:Se($,H,Z,Re,null);Va($,Z)}return null}function Fe($,H,Z,Re,$e){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return $=$.get(Z)||null,N(H,$,""+Re,$e);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case q:return $=$.get(Re.key===null?Z:Re.key)||null,F(H,$,Re,$e);case O:return $=$.get(Re.key===null?Z:Re.key)||null,ne(H,$,Re,$e);case ce:var Je=Re._init;return Fe($,H,Z,Je(Re._payload),$e)}if(ze(Re)||he(Re))return $=$.get(Z)||null,Se(H,$,Re,$e,null);Va(H,Re)}return null}function Ge($,H,Z,Re){for(var $e=null,Je=null,Qe=H,st=H=0,rn=null;Qe!==null&&st<Z.length;st++){Qe.index>st?(rn=Qe,Qe=null):rn=Qe.sibling;var At=xe($,Qe,Z[st],Re);if(At===null){Qe===null&&(Qe=rn);break}n&&Qe&&At.alternate===null&&r($,Qe),H=_(At,H,st),Je===null?$e=At:Je.sibling=At,Je=At,Qe=rn}if(st===Z.length)return a($,Qe),kt&&Fr($,st),$e;if(Qe===null){for(;st<Z.length;st++)Qe=Me($,Z[st],Re),Qe!==null&&(H=_(Qe,H,st),Je===null?$e=Qe:Je.sibling=Qe,Je=Qe);return kt&&Fr($,st),$e}for(Qe=u($,Qe);st<Z.length;st++)rn=Fe(Qe,$,st,Z[st],Re),rn!==null&&(n&&rn.alternate!==null&&Qe.delete(rn.key===null?st:rn.key),H=_(rn,H,st),Je===null?$e=rn:Je.sibling=rn,Je=rn);return n&&Qe.forEach(function(_r){return r($,_r)}),kt&&Fr($,st),$e}function je($,H,Z,Re){var $e=he(Z);if(typeof $e!="function")throw Error(t(150));if(Z=$e.call(Z),Z==null)throw Error(t(151));for(var Je=$e=null,Qe=H,st=H=0,rn=null,At=Z.next();Qe!==null&&!At.done;st++,At=Z.next()){Qe.index>st?(rn=Qe,Qe=null):rn=Qe.sibling;var _r=xe($,Qe,At.value,Re);if(_r===null){Qe===null&&(Qe=rn);break}n&&Qe&&_r.alternate===null&&r($,Qe),H=_(_r,H,st),Je===null?$e=_r:Je.sibling=_r,Je=_r,Qe=rn}if(At.done)return a($,Qe),kt&&Fr($,st),$e;if(Qe===null){for(;!At.done;st++,At=Z.next())At=Me($,At.value,Re),At!==null&&(H=_(At,H,st),Je===null?$e=At:Je.sibling=At,Je=At);return kt&&Fr($,st),$e}for(Qe=u($,Qe);!At.done;st++,At=Z.next())At=Fe(Qe,$,st,At.value,Re),At!==null&&(n&&At.alternate!==null&&Qe.delete(At.key===null?st:At.key),H=_(At,H,st),Je===null?$e=At:Je.sibling=At,Je=At);return n&&Qe.forEach(function(G0){return r($,G0)}),kt&&Fr($,st),$e}function jt($,H,Z,Re){if(typeof Z=="object"&&Z!==null&&Z.type===U&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case q:e:{for(var $e=Z.key,Je=H;Je!==null;){if(Je.key===$e){if($e=Z.type,$e===U){if(Je.tag===7){a($,Je.sibling),H=d(Je,Z.props.children),H.return=$,$=H;break e}}else if(Je.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ce&&$h($e)===Je.type){a($,Je.sibling),H=d(Je,Z.props),H.ref=Lo($,Je,Z),H.return=$,$=H;break e}a($,Je);break}else r($,Je);Je=Je.sibling}Z.type===U?(H=jr(Z.props.children,$.mode,Re,Z.key),H.return=$,$=H):(Re=dl(Z.type,Z.key,Z.props,null,$.mode,Re),Re.ref=Lo($,H,Z),Re.return=$,$=Re)}return M($);case O:e:{for(Je=Z.key;H!==null;){if(H.key===Je)if(H.tag===4&&H.stateNode.containerInfo===Z.containerInfo&&H.stateNode.implementation===Z.implementation){a($,H.sibling),H=d(H,Z.children||[]),H.return=$,$=H;break e}else{a($,H);break}else r($,H);H=H.sibling}H=jc(Z,$.mode,Re),H.return=$,$=H}return M($);case ce:return Je=Z._init,jt($,H,Je(Z._payload),Re)}if(ze(Z))return Ge($,H,Z,Re);if(he(Z))return je($,H,Z,Re);Va($,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,H!==null&&H.tag===6?(a($,H.sibling),H=d(H,Z),H.return=$,$=H):(a($,H),H=Wc(Z,$.mode,Re),H.return=$,$=H),M($)):a($,H)}return jt}var ws=Kh(!0),Zh=Kh(!1),Ga=or(null),Wa=null,As=null,ec=null;function tc(){ec=As=Wa=null}function nc(n){var r=Ga.current;Ft(Ga),n._currentValue=r}function ic(n,r,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===a)break;n=n.return}}function Rs(n,r){Wa=n,ec=As=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Dn=!0),n.firstContext=null)}function Kn(n){var r=n._currentValue;if(ec!==n)if(n={context:n,memoizedValue:r,next:null},As===null){if(Wa===null)throw Error(t(308));As=n,Wa.dependencies={lanes:0,firstContext:n}}else As=As.next=n;return r}var kr=null;function rc(n){kr===null?kr=[n]:kr.push(n)}function Jh(n,r,a,u){var d=r.interleaved;return d===null?(a.next=a,rc(r)):(a.next=d.next,d.next=a),r.interleaved=a,Fi(n,u)}function Fi(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ur=!1;function sc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qh(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ki(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function cr(n,r,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Et&2)!==0){var d=u.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),u.pending=r,Fi(n,a)}return d=u.interleaved,d===null?(r.next=r,rc(u)):(r.next=d.next,d.next=r),u.interleaved=r,Fi(n,a)}function ja(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,xu(n,a)}}function ep(n,r){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?d=_=M:_=_.next=M,a=a.next}while(a!==null);_===null?d=_=r:_=_.next=r}else d=_=r;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:_,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Xa(n,r,a,u){var d=n.updateQueue;ur=!1;var _=d.firstBaseUpdate,M=d.lastBaseUpdate,N=d.shared.pending;if(N!==null){d.shared.pending=null;var F=N,ne=F.next;F.next=null,M===null?_=ne:M.next=ne,M=F;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,N=Se.lastBaseUpdate,N!==M&&(N===null?Se.firstBaseUpdate=ne:N.next=ne,Se.lastBaseUpdate=F))}if(_!==null){var Me=d.baseState;M=0,Se=ne=F=null,N=_;do{var xe=N.lane,Fe=N.eventTime;if((u&xe)===xe){Se!==null&&(Se=Se.next={eventTime:Fe,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Ge=n,je=N;switch(xe=r,Fe=a,je.tag){case 1:if(Ge=je.payload,typeof Ge=="function"){Me=Ge.call(Fe,Me,xe);break e}Me=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=je.payload,xe=typeof Ge=="function"?Ge.call(Fe,Me,xe):Ge,xe==null)break e;Me=se({},Me,xe);break e;case 2:ur=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,xe=d.effects,xe===null?d.effects=[N]:xe.push(N))}else Fe={eventTime:Fe,lane:xe,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Se===null?(ne=Se=Fe,F=Me):Se=Se.next=Fe,M|=xe;if(N=N.next,N===null){if(N=d.shared.pending,N===null)break;xe=N,N=xe.next,xe.next=null,d.lastBaseUpdate=xe,d.shared.pending=null}}while(!0);if(Se===null&&(F=Me),d.baseState=F,d.firstBaseUpdate=ne,d.lastBaseUpdate=Se,r=d.shared.interleaved,r!==null){d=r;do M|=d.lane,d=d.next;while(d!==r)}else _===null&&(d.shared.lanes=0);Hr|=M,n.lanes=M,n.memoizedState=Me}}function tp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Do={},Ei=or(Do),No=or(Do),Uo=or(Do);function Br(n){if(n===Do)throw Error(t(174));return n}function oc(n,r){switch(Nt(Uo,r),Nt(No,n),Nt(Ei,Do),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Xe(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Xe(r,n)}Ft(Ei),Nt(Ei,r)}function Cs(){Ft(Ei),Ft(No),Ft(Uo)}function np(n){Br(Uo.current);var r=Br(Ei.current),a=Xe(r,n.type);r!==a&&(Nt(No,n),Nt(Ei,a))}function ac(n){No.current===n&&(Ft(Ei),Ft(No))}var zt=or(0);function qa(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var lc=[];function uc(){for(var n=0;n<lc.length;n++)lc[n]._workInProgressVersionPrimary=null;lc.length=0}var Ya=A.ReactCurrentDispatcher,cc=A.ReactCurrentBatchConfig,zr=0,Ht=null,Kt=null,tn=null,$a=!1,Io=!1,Oo=0,f0=0;function hn(){throw Error(t(321))}function fc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!oi(n[a],r[a]))return!1;return!0}function dc(n,r,a,u,d,_){if(zr=_,Ht=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ya.current=n===null||n.memoizedState===null?m0:g0,n=a(u,d),Io){_=0;do{if(Io=!1,Oo=0,25<=_)throw Error(t(301));_+=1,tn=Kt=null,r.updateQueue=null,Ya.current=_0,n=a(u,d)}while(Io)}if(Ya.current=Ja,r=Kt!==null&&Kt.next!==null,zr=0,tn=Kt=Ht=null,$a=!1,r)throw Error(t(300));return n}function hc(){var n=Oo!==0;return Oo=0,n}function Mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Ht.memoizedState=tn=n:tn=tn.next=n,tn}function Zn(){if(Kt===null){var n=Ht.alternate;n=n!==null?n.memoizedState:null}else n=Kt.next;var r=tn===null?Ht.memoizedState:tn.next;if(r!==null)tn=r,Kt=n;else{if(n===null)throw Error(t(310));Kt=n,n={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},tn===null?Ht.memoizedState=tn=n:tn=tn.next=n}return tn}function Fo(n,r){return typeof r=="function"?r(n):r}function pc(n){var r=Zn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Kt,d=u.baseQueue,_=a.pending;if(_!==null){if(d!==null){var M=d.next;d.next=_.next,_.next=M}u.baseQueue=d=_,a.pending=null}if(d!==null){_=d.next,u=u.baseState;var N=M=null,F=null,ne=_;do{var Se=ne.lane;if((zr&Se)===Se)F!==null&&(F=F.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),u=ne.hasEagerState?ne.eagerState:n(u,ne.action);else{var Me={lane:Se,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};F===null?(N=F=Me,M=u):F=F.next=Me,Ht.lanes|=Se,Hr|=Se}ne=ne.next}while(ne!==null&&ne!==_);F===null?M=u:F.next=N,oi(u,r.memoizedState)||(Dn=!0),r.memoizedState=u,r.baseState=M,r.baseQueue=F,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do _=d.lane,Ht.lanes|=_,Hr|=_,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function mc(n){var r=Zn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,_=r.memoizedState;if(d!==null){a.pending=null;var M=d=d.next;do _=n(_,M.action),M=M.next;while(M!==d);oi(_,r.memoizedState)||(Dn=!0),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),a.lastRenderedState=_}return[_,u]}function ip(){}function rp(n,r){var a=Ht,u=Zn(),d=r(),_=!oi(u.memoizedState,d);if(_&&(u.memoizedState=d,Dn=!0),u=u.queue,gc(ap.bind(null,a,u,n),[n]),u.getSnapshot!==r||_||tn!==null&&tn.memoizedState.tag&1){if(a.flags|=2048,ko(9,op.bind(null,a,u,d,r),void 0,null),nn===null)throw Error(t(349));(zr&30)!==0||sp(a,r,d)}return d}function sp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ht.updateQueue,r===null?(r={lastEffect:null,stores:null},Ht.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function op(n,r,a,u){r.value=a,r.getSnapshot=u,lp(r)&&up(n)}function ap(n,r,a){return a(function(){lp(r)&&up(n)})}function lp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!oi(n,a)}catch{return!0}}function up(n){var r=Fi(n,1);r!==null&&fi(r,n,1,-1)}function cp(n){var r=Mi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:n},r.queue=n,n=n.dispatch=p0.bind(null,Ht,n),[r.memoizedState,n]}function ko(n,r,a,u){return n={tag:n,create:r,destroy:a,deps:u,next:null},r=Ht.updateQueue,r===null?(r={lastEffect:null,stores:null},Ht.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,r.lastEffect=n)),n}function fp(){return Zn().memoizedState}function Ka(n,r,a,u){var d=Mi();Ht.flags|=n,d.memoizedState=ko(1|r,a,void 0,u===void 0?null:u)}function Za(n,r,a,u){var d=Zn();u=u===void 0?null:u;var _=void 0;if(Kt!==null){var M=Kt.memoizedState;if(_=M.destroy,u!==null&&fc(u,M.deps)){d.memoizedState=ko(r,a,_,u);return}}Ht.flags|=n,d.memoizedState=ko(1|r,a,_,u)}function dp(n,r){return Ka(8390656,8,n,r)}function gc(n,r){return Za(2048,8,n,r)}function hp(n,r){return Za(4,2,n,r)}function pp(n,r){return Za(4,4,n,r)}function mp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function gp(n,r,a){return a=a!=null?a.concat([n]):null,Za(4,4,mp.bind(null,r,n),a)}function _c(){}function _p(n,r){var a=Zn();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&fc(r,u[1])?u[0]:(a.memoizedState=[n,r],n)}function vp(n,r){var a=Zn();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&fc(r,u[1])?u[0]:(n=n(),a.memoizedState=[n,r],n)}function xp(n,r,a){return(zr&21)===0?(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=a):(oi(a,r)||(a=En(),Ht.lanes|=a,Hr|=a,n.baseState=!0),r)}function d0(n,r){var a=Pt;Pt=a!==0&&4>a?a:4,n(!0);var u=cc.transition;cc.transition={};try{n(!1),r()}finally{Pt=a,cc.transition=u}}function yp(){return Zn().memoizedState}function h0(n,r,a){var u=pr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Sp(n))Ep(r,a);else if(a=Jh(n,r,a,u),a!==null){var d=Tn();fi(a,n,u,d),Mp(a,r,u)}}function p0(n,r,a){var u=pr(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sp(n))Ep(r,d);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=r.lastRenderedReducer,_!==null))try{var M=r.lastRenderedState,N=_(M,a);if(d.hasEagerState=!0,d.eagerState=N,oi(N,M)){var F=r.interleaved;F===null?(d.next=d,rc(r)):(d.next=F.next,F.next=d),r.interleaved=d;return}}catch{}finally{}a=Jh(n,r,d,u),a!==null&&(d=Tn(),fi(a,n,u,d),Mp(a,r,u))}}function Sp(n){var r=n.alternate;return n===Ht||r!==null&&r===Ht}function Ep(n,r){Io=$a=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Mp(n,r,a){if((a&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,xu(n,a)}}var Ja={readContext:Kn,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},m0={readContext:Kn,useCallback:function(n,r){return Mi().memoizedState=[n,r===void 0?null:r],n},useContext:Kn,useEffect:dp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Ka(4194308,4,mp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ka(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ka(4,2,n,r)},useMemo:function(n,r){var a=Mi();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var u=Mi();return r=a!==void 0?a(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=h0.bind(null,Ht,n),[u.memoizedState,n]},useRef:function(n){var r=Mi();return n={current:n},r.memoizedState=n},useState:cp,useDebugValue:_c,useDeferredValue:function(n){return Mi().memoizedState=n},useTransition:function(){var n=cp(!1),r=n[0];return n=d0.bind(null,n[1]),Mi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var u=Ht,d=Mi();if(kt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),nn===null)throw Error(t(349));(zr&30)!==0||sp(u,r,a)}d.memoizedState=a;var _={value:a,getSnapshot:r};return d.queue=_,dp(ap.bind(null,u,_,n),[n]),u.flags|=2048,ko(9,op.bind(null,u,_,a,r),void 0,null),a},useId:function(){var n=Mi(),r=nn.identifierPrefix;if(kt){var a=Oi,u=Ii;a=(u&~(1<<32-ct(u)-1)).toString(32)+a,r=":"+r+"R"+a,a=Oo++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=f0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},g0={readContext:Kn,useCallback:_p,useContext:Kn,useEffect:gc,useImperativeHandle:gp,useInsertionEffect:hp,useLayoutEffect:pp,useMemo:vp,useReducer:pc,useRef:fp,useState:function(){return pc(Fo)},useDebugValue:_c,useDeferredValue:function(n){var r=Zn();return xp(r,Kt.memoizedState,n)},useTransition:function(){var n=pc(Fo)[0],r=Zn().memoizedState;return[n,r]},useMutableSource:ip,useSyncExternalStore:rp,useId:yp,unstable_isNewReconciler:!1},_0={readContext:Kn,useCallback:_p,useContext:Kn,useEffect:gc,useImperativeHandle:gp,useInsertionEffect:hp,useLayoutEffect:pp,useMemo:vp,useReducer:mc,useRef:fp,useState:function(){return mc(Fo)},useDebugValue:_c,useDeferredValue:function(n){var r=Zn();return Kt===null?r.memoizedState=n:xp(r,Kt.memoizedState,n)},useTransition:function(){var n=mc(Fo)[0],r=Zn().memoizedState;return[n,r]},useMutableSource:ip,useSyncExternalStore:rp,useId:yp,unstable_isNewReconciler:!1};function li(n,r){if(n&&n.defaultProps){r=se({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function vc(n,r,a,u){r=n.memoizedState,a=a(u,r),a=a==null?r:se({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Qa={isMounted:function(n){return(n=n._reactInternals)?xi(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var u=Tn(),d=pr(n),_=ki(u,d);_.payload=r,a!=null&&(_.callback=a),r=cr(n,_,d),r!==null&&(fi(r,n,d,u),ja(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var u=Tn(),d=pr(n),_=ki(u,d);_.tag=1,_.payload=r,a!=null&&(_.callback=a),r=cr(n,_,d),r!==null&&(fi(r,n,d,u),ja(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Tn(),u=pr(n),d=ki(a,u);d.tag=2,r!=null&&(d.callback=r),r=cr(n,d,u),r!==null&&(fi(r,n,u,a),ja(r,n,u))}};function Tp(n,r,a,u,d,_,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,_,M):r.prototype&&r.prototype.isPureReactComponent?!To(a,u)||!To(d,_):!0}function wp(n,r,a){var u=!1,d=ar,_=r.contextType;return typeof _=="object"&&_!==null?_=Kn(_):(d=Ln(r)?Ir:dn.current,u=r.contextTypes,_=(u=u!=null)?Ss(n,d):ar),r=new r(a,_),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Qa,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=_),r}function Ap(n,r,a,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,u),r.state!==n&&Qa.enqueueReplaceState(r,r.state,null)}function xc(n,r,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},sc(n);var _=r.contextType;typeof _=="object"&&_!==null?d.context=Kn(_):(_=Ln(r)?Ir:dn.current,d.context=Ss(n,_)),d.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(vc(n,r,_,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Qa.enqueueReplaceState(d,d.state,null),Xa(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function bs(n,r){try{var a="",u=r;do a+=oe(u),u=u.return;while(u);var d=a}catch(_){d=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:r,stack:d,digest:null}}function yc(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Sc(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var v0=typeof WeakMap=="function"?WeakMap:Map;function Rp(n,r,a){a=ki(-1,a),a.tag=3,a.payload={element:null};var u=r.value;return a.callback=function(){ol||(ol=!0,Oc=u),Sc(n,r)},a}function Cp(n,r,a){a=ki(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=r.value;a.payload=function(){return u(d)},a.callback=function(){Sc(n,r)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){Sc(n,r),typeof u!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var M=r.stack;this.componentDidCatch(r.value,{componentStack:M!==null?M:""})}),a}function bp(n,r,a){var u=n.pingCache;if(u===null){u=n.pingCache=new v0;var d=new Set;u.set(r,d)}else d=u.get(r),d===void 0&&(d=new Set,u.set(r,d));d.has(a)||(d.add(a),n=D0.bind(null,n,r,a),r.then(n,n))}function Pp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Lp(n,r,a,u,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=ki(-1,1),r.tag=2,cr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var x0=A.ReactCurrentOwner,Dn=!1;function Mn(n,r,a,u){r.child=n===null?Zh(r,null,a,u):ws(r,n.child,a,u)}function Dp(n,r,a,u,d){a=a.render;var _=r.ref;return Rs(r,d),u=dc(n,r,a,u,_,d),a=hc(),n!==null&&!Dn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Bi(n,r,d)):(kt&&a&&$u(r),r.flags|=1,Mn(n,r,u,d),r.child)}function Np(n,r,a,u,d){if(n===null){var _=a.type;return typeof _=="function"&&!Gc(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=_,Up(n,r,_,u,d)):(n=dl(a.type,null,u,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(_=n.child,(n.lanes&d)===0){var M=_.memoizedProps;if(a=a.compare,a=a!==null?a:To,a(M,u)&&n.ref===r.ref)return Bi(n,r,d)}return r.flags|=1,n=gr(_,u),n.ref=r.ref,n.return=r,r.child=n}function Up(n,r,a,u,d){if(n!==null){var _=n.memoizedProps;if(To(_,u)&&n.ref===r.ref)if(Dn=!1,r.pendingProps=u=_,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Dn=!0);else return r.lanes=n.lanes,Bi(n,r,d)}return Ec(n,r,a,u,d)}function Ip(n,r,a){var u=r.pendingProps,d=u.children,_=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Ls,Gn),Gn|=a;else{if((a&1073741824)===0)return n=_!==null?_.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Nt(Ls,Gn),Gn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=_!==null?_.baseLanes:a,Nt(Ls,Gn),Gn|=u}else _!==null?(u=_.baseLanes|a,r.memoizedState=null):u=a,Nt(Ls,Gn),Gn|=u;return Mn(n,r,d,a),r.child}function Op(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Ec(n,r,a,u,d){var _=Ln(a)?Ir:dn.current;return _=Ss(r,_),Rs(r,d),a=dc(n,r,a,u,_,d),u=hc(),n!==null&&!Dn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Bi(n,r,d)):(kt&&u&&$u(r),r.flags|=1,Mn(n,r,a,d),r.child)}function Fp(n,r,a,u,d){if(Ln(a)){var _=!0;Fa(r)}else _=!1;if(Rs(r,d),r.stateNode===null)tl(n,r),wp(r,a,u),xc(r,a,u,d),u=!0;else if(n===null){var M=r.stateNode,N=r.memoizedProps;M.props=N;var F=M.context,ne=a.contextType;typeof ne=="object"&&ne!==null?ne=Kn(ne):(ne=Ln(a)?Ir:dn.current,ne=Ss(r,ne));var Se=a.getDerivedStateFromProps,Me=typeof Se=="function"||typeof M.getSnapshotBeforeUpdate=="function";Me||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==u||F!==ne)&&Ap(r,M,u,ne),ur=!1;var xe=r.memoizedState;M.state=xe,Xa(r,u,M,d),F=r.memoizedState,N!==u||xe!==F||Pn.current||ur?(typeof Se=="function"&&(vc(r,a,Se,u),F=r.memoizedState),(N=ur||Tp(r,a,N,u,xe,F,ne))?(Me||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(r.flags|=4194308)):(typeof M.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=F),M.props=u,M.state=F,M.context=ne,u=N):(typeof M.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{M=r.stateNode,Qh(n,r),N=r.memoizedProps,ne=r.type===r.elementType?N:li(r.type,N),M.props=ne,Me=r.pendingProps,xe=M.context,F=a.contextType,typeof F=="object"&&F!==null?F=Kn(F):(F=Ln(a)?Ir:dn.current,F=Ss(r,F));var Fe=a.getDerivedStateFromProps;(Se=typeof Fe=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==Me||xe!==F)&&Ap(r,M,u,F),ur=!1,xe=r.memoizedState,M.state=xe,Xa(r,u,M,d);var Ge=r.memoizedState;N!==Me||xe!==Ge||Pn.current||ur?(typeof Fe=="function"&&(vc(r,a,Fe,u),Ge=r.memoizedState),(ne=ur||Tp(r,a,ne,u,xe,Ge,F)||!1)?(Se||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Ge,F),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Ge,F)),typeof M.componentDidUpdate=="function"&&(r.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof M.componentDidUpdate!="function"||N===n.memoizedProps&&xe===n.memoizedState||(r.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&xe===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Ge),M.props=u,M.state=Ge,M.context=F,u=ne):(typeof M.componentDidUpdate!="function"||N===n.memoizedProps&&xe===n.memoizedState||(r.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&xe===n.memoizedState||(r.flags|=1024),u=!1)}return Mc(n,r,a,u,_,d)}function Mc(n,r,a,u,d,_){Op(n,r);var M=(r.flags&128)!==0;if(!u&&!M)return d&&Vh(r,a,!1),Bi(n,r,_);u=r.stateNode,x0.current=r;var N=M&&typeof a.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&M?(r.child=ws(r,n.child,null,_),r.child=ws(r,null,N,_)):Mn(n,r,N,_),r.memoizedState=u.state,d&&Vh(r,a,!0),r.child}function kp(n){var r=n.stateNode;r.pendingContext?zh(n,r.pendingContext,r.pendingContext!==r.context):r.context&&zh(n,r.context,!1),oc(n,r.containerInfo)}function Bp(n,r,a,u,d){return Ts(),Qu(d),r.flags|=256,Mn(n,r,a,u),r.child}var Tc={dehydrated:null,treeContext:null,retryLane:0};function wc(n){return{baseLanes:n,cachePool:null,transitions:null}}function zp(n,r,a){var u=r.pendingProps,d=zt.current,_=!1,M=(r.flags&128)!==0,N;if((N=M)||(N=n!==null&&n.memoizedState===null?!1:(d&2)!==0),N?(_=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Nt(zt,d&1),n===null)return Ju(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(M=u.children,n=u.fallback,_?(u=r.mode,_=r.child,M={mode:"hidden",children:M},(u&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=M):_=hl(M,u,0,null),n=jr(n,u,a,null),_.return=r,n.return=r,_.sibling=n,r.child=_,r.child.memoizedState=wc(a),r.memoizedState=Tc,n):Ac(r,M));if(d=n.memoizedState,d!==null&&(N=d.dehydrated,N!==null))return y0(n,r,M,u,N,d,a);if(_){_=u.fallback,M=r.mode,d=n.child,N=d.sibling;var F={mode:"hidden",children:u.children};return(M&1)===0&&r.child!==d?(u=r.child,u.childLanes=0,u.pendingProps=F,r.deletions=null):(u=gr(d,F),u.subtreeFlags=d.subtreeFlags&14680064),N!==null?_=gr(N,_):(_=jr(_,M,a,null),_.flags|=2),_.return=r,u.return=r,u.sibling=_,r.child=u,u=_,_=r.child,M=n.child.memoizedState,M=M===null?wc(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},_.memoizedState=M,_.childLanes=n.childLanes&~a,r.memoizedState=Tc,u}return _=n.child,n=_.sibling,u=gr(_,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=a),u.return=r,u.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=u,r.memoizedState=null,u}function Ac(n,r){return r=hl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function el(n,r,a,u){return u!==null&&Qu(u),ws(r,n.child,null,a),n=Ac(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function y0(n,r,a,u,d,_,M){if(a)return r.flags&256?(r.flags&=-257,u=yc(Error(t(422))),el(n,r,M,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(_=u.fallback,d=r.mode,u=hl({mode:"visible",children:u.children},d,0,null),_=jr(_,d,M,null),_.flags|=2,u.return=r,_.return=r,u.sibling=_,r.child=u,(r.mode&1)!==0&&ws(r,n.child,null,M),r.child.memoizedState=wc(M),r.memoizedState=Tc,_);if((r.mode&1)===0)return el(n,r,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var N=u.dgst;return u=N,_=Error(t(419)),u=yc(_,u,void 0),el(n,r,M,u)}if(N=(M&n.childLanes)!==0,Dn||N){if(u=nn,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|M))!==0?0:d,d!==0&&d!==_.retryLane&&(_.retryLane=d,Fi(n,d),fi(u,n,d,-1))}return Vc(),u=yc(Error(t(421))),el(n,r,M,u)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=N0.bind(null,n),d._reactRetry=r,null):(n=_.treeContext,Vn=sr(d.nextSibling),Hn=r,kt=!0,ai=null,n!==null&&(Yn[$n++]=Ii,Yn[$n++]=Oi,Yn[$n++]=Or,Ii=n.id,Oi=n.overflow,Or=r),r=Ac(r,u.children),r.flags|=4096,r)}function Hp(n,r,a){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),ic(n.return,r,a)}function Rc(n,r,a,u,d){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=a,_.tailMode=d)}function Vp(n,r,a){var u=r.pendingProps,d=u.revealOrder,_=u.tail;if(Mn(n,r,u.children,a),u=zt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Hp(n,a,r);else if(n.tag===19)Hp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Nt(zt,u),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&qa(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Rc(r,!1,d,a,_);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&qa(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Rc(r,!0,a,null,_);break;case"together":Rc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function tl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Bi(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Hr|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=gr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=gr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function S0(n,r,a){switch(r.tag){case 3:kp(r),Ts();break;case 5:np(r);break;case 1:Ln(r.type)&&Fa(r);break;case 4:oc(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,d=r.memoizedProps.value;Nt(Ga,u._currentValue),u._currentValue=d;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Nt(zt,zt.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?zp(n,r,a):(Nt(zt,zt.current&1),n=Bi(n,r,a),n!==null?n.sibling:null);Nt(zt,zt.current&1);break;case 19:if(u=(a&r.childLanes)!==0,(n.flags&128)!==0){if(u)return Vp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Nt(zt,zt.current),u)break;return null;case 22:case 23:return r.lanes=0,Ip(n,r,a)}return Bi(n,r,a)}var Gp,Cc,Wp,jp;Gp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Cc=function(){},Wp=function(n,r,a,u){var d=n.memoizedProps;if(d!==u){n=r.stateNode,Br(Ei.current);var _=null;switch(a){case"input":d=V(n,d),u=V(n,u),_=[];break;case"select":d=se({},d,{value:void 0}),u=se({},u,{value:void 0}),_=[];break;case"textarea":d=w(n,d),u=w(n,u),_=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ua)}gt(a,u);var M;a=null;for(ne in d)if(!u.hasOwnProperty(ne)&&d.hasOwnProperty(ne)&&d[ne]!=null)if(ne==="style"){var N=d[ne];for(M in N)N.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(o.hasOwnProperty(ne)?_||(_=[]):(_=_||[]).push(ne,null));for(ne in u){var F=u[ne];if(N=d!=null?d[ne]:void 0,u.hasOwnProperty(ne)&&F!==N&&(F!=null||N!=null))if(ne==="style")if(N){for(M in N)!N.hasOwnProperty(M)||F&&F.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in F)F.hasOwnProperty(M)&&N[M]!==F[M]&&(a||(a={}),a[M]=F[M])}else a||(_||(_=[]),_.push(ne,a)),a=F;else ne==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,N=N?N.__html:void 0,F!=null&&N!==F&&(_=_||[]).push(ne,F)):ne==="children"?typeof F!="string"&&typeof F!="number"||(_=_||[]).push(ne,""+F):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(o.hasOwnProperty(ne)?(F!=null&&ne==="onScroll"&&Ot("scroll",n),_||N===F||(_=[])):(_=_||[]).push(ne,F))}a&&(_=_||[]).push("style",a);var ne=_;(r.updateQueue=ne)&&(r.flags|=4)}},jp=function(n,r,a,u){a!==u&&(r.flags|=4)};function Bo(n,r){if(!kt)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function pn(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,r}function E0(n,r,a){var u=r.pendingProps;switch(Ku(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(r),null;case 1:return Ln(r.type)&&Oa(),pn(r),null;case 3:return u=r.stateNode,Cs(),Ft(Pn),Ft(dn),uc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ha(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ai!==null&&(Bc(ai),ai=null))),Cc(n,r),pn(r),null;case 5:ac(r);var d=Br(Uo.current);if(a=r.type,n!==null&&r.stateNode!=null)Wp(n,r,a,u,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return pn(r),null}if(n=Br(Ei.current),Ha(r)){u=r.stateNode,a=r.type;var _=r.memoizedProps;switch(u[Si]=r,u[bo]=_,n=(r.mode&1)!==0,a){case"dialog":Ot("cancel",u),Ot("close",u);break;case"iframe":case"object":case"embed":Ot("load",u);break;case"video":case"audio":for(d=0;d<Ao.length;d++)Ot(Ao[d],u);break;case"source":Ot("error",u);break;case"img":case"image":case"link":Ot("error",u),Ot("load",u);break;case"details":Ot("toggle",u);break;case"input":en(u,_),Ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!_.multiple},Ot("invalid",u);break;case"textarea":J(u,_),Ot("invalid",u)}gt(a,_),d=null;for(var M in _)if(_.hasOwnProperty(M)){var N=_[M];M==="children"?typeof N=="string"?u.textContent!==N&&(_.suppressHydrationWarning!==!0&&Na(u.textContent,N,n),d=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(_.suppressHydrationWarning!==!0&&Na(u.textContent,N,n),d=["children",""+N]):o.hasOwnProperty(M)&&N!=null&&M==="onScroll"&&Ot("scroll",u)}switch(a){case"input":vt(u),Ee(u,_,!0);break;case"textarea":vt(u),ye(u);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(u.onclick=Ua)}u=d,r.updateQueue=u,u!==null&&(r.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ge(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(a,{is:u.is}):(n=M.createElement(a),a==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,a),n[Si]=r,n[bo]=u,Gp(n,r,!1,!1),r.stateNode=n;e:{switch(M=lt(a,u),a){case"dialog":Ot("cancel",n),Ot("close",n),d=u;break;case"iframe":case"object":case"embed":Ot("load",n),d=u;break;case"video":case"audio":for(d=0;d<Ao.length;d++)Ot(Ao[d],n);d=u;break;case"source":Ot("error",n),d=u;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),d=u;break;case"details":Ot("toggle",n),d=u;break;case"input":en(n,u),d=V(n,u),Ot("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=se({},u,{value:void 0}),Ot("invalid",n);break;case"textarea":J(n,u),d=w(n,u),Ot("invalid",n);break;default:d=u}gt(a,d),N=d;for(_ in N)if(N.hasOwnProperty(_)){var F=N[_];_==="style"?it(n,F):_==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&ke(n,F)):_==="children"?typeof F=="string"?(a!=="textarea"||F!=="")&&mt(n,F):typeof F=="number"&&mt(n,""+F):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?F!=null&&_==="onScroll"&&Ot("scroll",n):F!=null&&P(n,_,F,M))}switch(a){case"input":vt(n),Ee(n,u,!1);break;case"textarea":vt(n),ye(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Te(u.value));break;case"select":n.multiple=!!u.multiple,_=u.value,_!=null?D(n,!!u.multiple,_,!1):u.defaultValue!=null&&D(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ua)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return pn(r),null;case 6:if(n&&r.stateNode!=null)jp(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(a=Br(Uo.current),Br(Ei.current),Ha(r)){if(u=r.stateNode,a=r.memoizedProps,u[Si]=r,(_=u.nodeValue!==a)&&(n=Hn,n!==null))switch(n.tag){case 3:Na(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Na(u.nodeValue,a,(n.mode&1)!==0)}_&&(r.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Si]=r,r.stateNode=u}return pn(r),null;case 13:if(Ft(zt),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(kt&&Vn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Yh(),Ts(),r.flags|=98560,_=!1;else if(_=Ha(r),u!==null&&u.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=r.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Si]=r}else Ts(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;pn(r),_=!1}else ai!==null&&(Bc(ai),ai=null),_=!0;if(!_)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(zt.current&1)!==0?Zt===0&&(Zt=3):Vc())),r.updateQueue!==null&&(r.flags|=4),pn(r),null);case 4:return Cs(),Cc(n,r),n===null&&Ro(r.stateNode.containerInfo),pn(r),null;case 10:return nc(r.type._context),pn(r),null;case 17:return Ln(r.type)&&Oa(),pn(r),null;case 19:if(Ft(zt),_=r.memoizedState,_===null)return pn(r),null;if(u=(r.flags&128)!==0,M=_.rendering,M===null)if(u)Bo(_,!1);else{if(Zt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(M=qa(n),M!==null){for(r.flags|=128,Bo(_,!1),u=M.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=a,a=r.child;a!==null;)_=a,n=u,_.flags&=14680066,M=_.alternate,M===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=M.childLanes,_.lanes=M.lanes,_.child=M.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=M.memoizedProps,_.memoizedState=M.memoizedState,_.updateQueue=M.updateQueue,_.type=M.type,n=M.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Nt(zt,zt.current&1|2),r.child}n=n.sibling}_.tail!==null&&Ae()>Ds&&(r.flags|=128,u=!0,Bo(_,!1),r.lanes=4194304)}else{if(!u)if(n=qa(M),n!==null){if(r.flags|=128,u=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Bo(_,!0),_.tail===null&&_.tailMode==="hidden"&&!M.alternate&&!kt)return pn(r),null}else 2*Ae()-_.renderingStartTime>Ds&&a!==1073741824&&(r.flags|=128,u=!0,Bo(_,!1),r.lanes=4194304);_.isBackwards?(M.sibling=r.child,r.child=M):(a=_.last,a!==null?a.sibling=M:r.child=M,_.last=M)}return _.tail!==null?(r=_.tail,_.rendering=r,_.tail=r.sibling,_.renderingStartTime=Ae(),r.sibling=null,a=zt.current,Nt(zt,u?a&1|2:a&1),r):(pn(r),null);case 22:case 23:return Hc(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Gn&1073741824)!==0&&(pn(r),r.subtreeFlags&6&&(r.flags|=8192)):pn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function M0(n,r){switch(Ku(r),r.tag){case 1:return Ln(r.type)&&Oa(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Cs(),Ft(Pn),Ft(dn),uc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return ac(r),null;case 13:if(Ft(zt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ts()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ft(zt),null;case 4:return Cs(),null;case 10:return nc(r.type._context),null;case 22:case 23:return Hc(),null;case 24:return null;default:return null}}var nl=!1,mn=!1,T0=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Ps(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Gt(n,r,u)}else a.current=null}function bc(n,r,a){try{a()}catch(u){Gt(n,r,u)}}var Xp=!1;function w0(n,r){if(Hu=Ea,n=Th(),Nu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var M=0,N=-1,F=-1,ne=0,Se=0,Me=n,xe=null;t:for(;;){for(var Fe;Me!==a||d!==0&&Me.nodeType!==3||(N=M+d),Me!==_||u!==0&&Me.nodeType!==3||(F=M+u),Me.nodeType===3&&(M+=Me.nodeValue.length),(Fe=Me.firstChild)!==null;)xe=Me,Me=Fe;for(;;){if(Me===n)break t;if(xe===a&&++ne===d&&(N=M),xe===_&&++Se===u&&(F=M),(Fe=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=Fe}a=N===-1||F===-1?null:{start:N,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vu={focusedElem:n,selectionRange:a},Ea=!1,Be=r;Be!==null;)if(r=Be,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Be=n;else for(;Be!==null;){r=Be;try{var Ge=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var je=Ge.memoizedProps,jt=Ge.memoizedState,$=r.stateNode,H=$.getSnapshotBeforeUpdate(r.elementType===r.type?je:li(r.type,je),jt);$.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var Z=r.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){Gt(r,r.return,Re)}if(n=r.sibling,n!==null){n.return=r.return,Be=n;break}Be=r.return}return Ge=Xp,Xp=!1,Ge}function zo(n,r,a){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var _=d.destroy;d.destroy=void 0,_!==void 0&&bc(r,a,_)}d=d.next}while(d!==u)}}function il(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==r)}}function Pc(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function qp(n){var r=n.alternate;r!==null&&(n.alternate=null,qp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Si],delete r[bo],delete r[Xu],delete r[a0],delete r[l0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Yp(n){return n.tag===5||n.tag===3||n.tag===4}function $p(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Yp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lc(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Ua));else if(u!==4&&(n=n.child,n!==null))for(Lc(n,r,a),n=n.sibling;n!==null;)Lc(n,r,a),n=n.sibling}function Dc(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Dc(n,r,a),n=n.sibling;n!==null;)Dc(n,r,a),n=n.sibling}var an=null,ui=!1;function fr(n,r,a){for(a=a.child;a!==null;)Kp(n,r,a),a=a.sibling}function Kp(n,r,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Ct,a)}catch{}switch(a.tag){case 5:mn||Ps(a,r);case 6:var u=an,d=ui;an=null,fr(n,r,a),an=u,ui=d,an!==null&&(ui?(n=an,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):an.removeChild(a.stateNode));break;case 18:an!==null&&(ui?(n=an,a=a.stateNode,n.nodeType===8?ju(n.parentNode,a):n.nodeType===1&&ju(n,a),vo(n)):ju(an,a.stateNode));break;case 4:u=an,d=ui,an=a.stateNode.containerInfo,ui=!0,fr(n,r,a),an=u,ui=d;break;case 0:case 11:case 14:case 15:if(!mn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var _=d,M=_.destroy;_=_.tag,M!==void 0&&((_&2)!==0||(_&4)!==0)&&bc(a,r,M),d=d.next}while(d!==u)}fr(n,r,a);break;case 1:if(!mn&&(Ps(a,r),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(N){Gt(a,r,N)}fr(n,r,a);break;case 21:fr(n,r,a);break;case 22:a.mode&1?(mn=(u=mn)||a.memoizedState!==null,fr(n,r,a),mn=u):fr(n,r,a);break;default:fr(n,r,a)}}function Zp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new T0),r.forEach(function(u){var d=U0.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function ci(n,r){var a=r.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var _=n,M=r,N=M;e:for(;N!==null;){switch(N.tag){case 5:an=N.stateNode,ui=!1;break e;case 3:an=N.stateNode.containerInfo,ui=!0;break e;case 4:an=N.stateNode.containerInfo,ui=!0;break e}N=N.return}if(an===null)throw Error(t(160));Kp(_,M,d),an=null,ui=!1;var F=d.alternate;F!==null&&(F.return=null),d.return=null}catch(ne){Gt(d,r,ne)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Jp(r,n),r=r.sibling}function Jp(n,r){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(r,n),Ti(n),u&4){try{zo(3,n,n.return),il(3,n)}catch(je){Gt(n,n.return,je)}try{zo(5,n,n.return)}catch(je){Gt(n,n.return,je)}}break;case 1:ci(r,n),Ti(n),u&512&&a!==null&&Ps(a,a.return);break;case 5:if(ci(r,n),Ti(n),u&512&&a!==null&&Ps(a,a.return),n.flags&32){var d=n.stateNode;try{mt(d,"")}catch(je){Gt(n,n.return,je)}}if(u&4&&(d=n.stateNode,d!=null)){var _=n.memoizedProps,M=a!==null?a.memoizedProps:_,N=n.type,F=n.updateQueue;if(n.updateQueue=null,F!==null)try{N==="input"&&_.type==="radio"&&_.name!=null&&ft(d,_),lt(N,M);var ne=lt(N,_);for(M=0;M<F.length;M+=2){var Se=F[M],Me=F[M+1];Se==="style"?it(d,Me):Se==="dangerouslySetInnerHTML"?ke(d,Me):Se==="children"?mt(d,Me):P(d,Se,Me,ne)}switch(N){case"input":nt(d,_);break;case"textarea":me(d,_);break;case"select":var xe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!_.multiple;var Fe=_.value;Fe!=null?D(d,!!_.multiple,Fe,!1):xe!==!!_.multiple&&(_.defaultValue!=null?D(d,!!_.multiple,_.defaultValue,!0):D(d,!!_.multiple,_.multiple?[]:"",!1))}d[bo]=_}catch(je){Gt(n,n.return,je)}}break;case 6:if(ci(r,n),Ti(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,_=n.memoizedProps;try{d.nodeValue=_}catch(je){Gt(n,n.return,je)}}break;case 3:if(ci(r,n),Ti(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{vo(r.containerInfo)}catch(je){Gt(n,n.return,je)}break;case 4:ci(r,n),Ti(n);break;case 13:ci(r,n),Ti(n),d=n.child,d.flags&8192&&(_=d.memoizedState!==null,d.stateNode.isHidden=_,!_||d.alternate!==null&&d.alternate.memoizedState!==null||(Ic=Ae())),u&4&&Zp(n);break;case 22:if(Se=a!==null&&a.memoizedState!==null,n.mode&1?(mn=(ne=mn)||Se,ci(r,n),mn=ne):ci(r,n),Ti(n),u&8192){if(ne=n.memoizedState!==null,(n.stateNode.isHidden=ne)&&!Se&&(n.mode&1)!==0)for(Be=n,Se=n.child;Se!==null;){for(Me=Be=Se;Be!==null;){switch(xe=Be,Fe=xe.child,xe.tag){case 0:case 11:case 14:case 15:zo(4,xe,xe.return);break;case 1:Ps(xe,xe.return);var Ge=xe.stateNode;if(typeof Ge.componentWillUnmount=="function"){u=xe,a=xe.return;try{r=u,Ge.props=r.memoizedProps,Ge.state=r.memoizedState,Ge.componentWillUnmount()}catch(je){Gt(u,a,je)}}break;case 5:Ps(xe,xe.return);break;case 22:if(xe.memoizedState!==null){tm(Me);continue}}Fe!==null?(Fe.return=xe,Be=Fe):tm(Me)}Se=Se.sibling}e:for(Se=null,Me=n;;){if(Me.tag===5){if(Se===null){Se=Me;try{d=Me.stateNode,ne?(_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(N=Me.stateNode,F=Me.memoizedProps.style,M=F!=null&&F.hasOwnProperty("display")?F.display:null,N.style.display=tt("display",M))}catch(je){Gt(n,n.return,je)}}}else if(Me.tag===6){if(Se===null)try{Me.stateNode.nodeValue=ne?"":Me.memoizedProps}catch(je){Gt(n,n.return,je)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;Se===Me&&(Se=null),Me=Me.return}Se===Me&&(Se=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:ci(r,n),Ti(n),u&4&&Zp(n);break;case 21:break;default:ci(r,n),Ti(n)}}function Ti(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(Yp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(mt(d,""),u.flags&=-33);var _=$p(n);Dc(n,_,d);break;case 3:case 4:var M=u.stateNode.containerInfo,N=$p(n);Lc(n,N,M);break;default:throw Error(t(161))}}catch(F){Gt(n,n.return,F)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function A0(n,r,a){Be=n,Qp(n)}function Qp(n,r,a){for(var u=(n.mode&1)!==0;Be!==null;){var d=Be,_=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||nl;if(!M){var N=d.alternate,F=N!==null&&N.memoizedState!==null||mn;N=nl;var ne=mn;if(nl=M,(mn=F)&&!ne)for(Be=d;Be!==null;)M=Be,F=M.child,M.tag===22&&M.memoizedState!==null?nm(d):F!==null?(F.return=M,Be=F):nm(d);for(;_!==null;)Be=_,Qp(_),_=_.sibling;Be=d,nl=N,mn=ne}em(n)}else(d.subtreeFlags&8772)!==0&&_!==null?(_.return=d,Be=_):em(n)}}function em(n){for(;Be!==null;){var r=Be;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:mn||il(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!mn)if(a===null)u.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:li(r.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var _=r.updateQueue;_!==null&&tp(r,_,u);break;case 3:var M=r.updateQueue;if(M!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}tp(r,M,a)}break;case 5:var N=r.stateNode;if(a===null&&r.flags&4){a=N;var F=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&a.focus();break;case"img":F.src&&(a.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ne=r.alternate;if(ne!==null){var Se=ne.memoizedState;if(Se!==null){var Me=Se.dehydrated;Me!==null&&vo(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}mn||r.flags&512&&Pc(r)}catch(xe){Gt(r,r.return,xe)}}if(r===n){Be=null;break}if(a=r.sibling,a!==null){a.return=r.return,Be=a;break}Be=r.return}}function tm(n){for(;Be!==null;){var r=Be;if(r===n){Be=null;break}var a=r.sibling;if(a!==null){a.return=r.return,Be=a;break}Be=r.return}}function nm(n){for(;Be!==null;){var r=Be;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{il(4,r)}catch(F){Gt(r,a,F)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var d=r.return;try{u.componentDidMount()}catch(F){Gt(r,d,F)}}var _=r.return;try{Pc(r)}catch(F){Gt(r,_,F)}break;case 5:var M=r.return;try{Pc(r)}catch(F){Gt(r,M,F)}}}catch(F){Gt(r,r.return,F)}if(r===n){Be=null;break}var N=r.sibling;if(N!==null){N.return=r.return,Be=N;break}Be=r.return}}var R0=Math.ceil,rl=A.ReactCurrentDispatcher,Nc=A.ReactCurrentOwner,Jn=A.ReactCurrentBatchConfig,Et=0,nn=null,Xt=null,ln=0,Gn=0,Ls=or(0),Zt=0,Ho=null,Hr=0,sl=0,Uc=0,Vo=null,Nn=null,Ic=0,Ds=1/0,zi=null,ol=!1,Oc=null,dr=null,al=!1,hr=null,ll=0,Go=0,Fc=null,ul=-1,cl=0;function Tn(){return(Et&6)!==0?Ae():ul!==-1?ul:ul=Ae()}function pr(n){return(n.mode&1)===0?1:(Et&2)!==0&&ln!==0?ln&-ln:c0.transition!==null?(cl===0&&(cl=En()),cl):(n=Pt,n!==0||(n=window.event,n=n===void 0?16:rh(n.type)),n)}function fi(n,r,a,u){if(50<Go)throw Go=0,Fc=null,Error(t(185));bn(n,a,u),((Et&2)===0||n!==nn)&&(n===nn&&((Et&2)===0&&(sl|=a),Zt===4&&mr(n,ln)),Un(n,u),a===1&&Et===0&&(r.mode&1)===0&&(Ds=Ae()+500,ka&&lr()))}function Un(n,r){var a=n.callbackNode;Xn(n,r);var u=yi(n,n===nn?ln:0);if(u===0)a!==null&&re(a),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(a!=null&&re(a),r===1)n.tag===0?u0(rm.bind(null,n)):Gh(rm.bind(null,n)),s0(function(){(Et&6)===0&&lr()}),a=null;else{switch(Kd(u)){case 1:a=We;break;case 4:a=rt;break;case 16:a=at;break;case 536870912:a=yt;break;default:a=at}a=dm(a,im.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function im(n,r){if(ul=-1,cl=0,(Et&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ns()&&n.callbackNode!==a)return null;var u=yi(n,n===nn?ln:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=fl(n,u);else{r=u;var d=Et;Et|=2;var _=om();(nn!==n||ln!==r)&&(zi=null,Ds=Ae()+500,Gr(n,r));do try{P0();break}catch(N){sm(n,N)}while(!0);tc(),rl.current=_,Et=d,Xt!==null?r=0:(nn=null,ln=0,r=Zt)}if(r!==0){if(r===2&&(d=Di(n),d!==0&&(u=d,r=kc(n,d))),r===1)throw a=Ho,Gr(n,0),mr(n,u),Un(n,Ae()),a;if(r===6)mr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!C0(d)&&(r=fl(n,u),r===2&&(_=Di(n),_!==0&&(u=_,r=kc(n,_))),r===1))throw a=Ho,Gr(n,0),mr(n,u),Un(n,Ae()),a;switch(n.finishedWork=d,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:Wr(n,Nn,zi);break;case 3:if(mr(n,u),(u&130023424)===u&&(r=Ic+500-Ae(),10<r)){if(yi(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Tn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Wu(Wr.bind(null,n,Nn,zi),r);break}Wr(n,Nn,zi);break;case 4:if(mr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,d=-1;0<u;){var M=31-ct(u);_=1<<M,M=r[M],M>d&&(d=M),u&=~_}if(u=d,u=Ae()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*R0(u/1960))-u,10<u){n.timeoutHandle=Wu(Wr.bind(null,n,Nn,zi),u);break}Wr(n,Nn,zi);break;case 5:Wr(n,Nn,zi);break;default:throw Error(t(329))}}}return Un(n,Ae()),n.callbackNode===a?im.bind(null,n):null}function kc(n,r){var a=Vo;return n.current.memoizedState.isDehydrated&&(Gr(n,r).flags|=256),n=fl(n,r),n!==2&&(r=Nn,Nn=a,r!==null&&Bc(r)),n}function Bc(n){Nn===null?Nn=n:Nn.push.apply(Nn,n)}function C0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],_=d.getSnapshot;d=d.value;try{if(!oi(_(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function mr(n,r){for(r&=~Uc,r&=~sl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-ct(r),u=1<<a;n[a]=-1,r&=~u}}function rm(n){if((Et&6)!==0)throw Error(t(327));Ns();var r=yi(n,0);if((r&1)===0)return Un(n,Ae()),null;var a=fl(n,r);if(n.tag!==0&&a===2){var u=Di(n);u!==0&&(r=u,a=kc(n,u))}if(a===1)throw a=Ho,Gr(n,0),mr(n,r),Un(n,Ae()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Wr(n,Nn,zi),Un(n,Ae()),null}function zc(n,r){var a=Et;Et|=1;try{return n(r)}finally{Et=a,Et===0&&(Ds=Ae()+500,ka&&lr())}}function Vr(n){hr!==null&&hr.tag===0&&(Et&6)===0&&Ns();var r=Et;Et|=1;var a=Jn.transition,u=Pt;try{if(Jn.transition=null,Pt=1,n)return n()}finally{Pt=u,Jn.transition=a,Et=r,(Et&6)===0&&lr()}}function Hc(){Gn=Ls.current,Ft(Ls)}function Gr(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,r0(a)),Xt!==null)for(a=Xt.return;a!==null;){var u=a;switch(Ku(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Oa();break;case 3:Cs(),Ft(Pn),Ft(dn),uc();break;case 5:ac(u);break;case 4:Cs();break;case 13:Ft(zt);break;case 19:Ft(zt);break;case 10:nc(u.type._context);break;case 22:case 23:Hc()}a=a.return}if(nn=n,Xt=n=gr(n.current,null),ln=Gn=r,Zt=0,Ho=null,Uc=sl=Hr=0,Nn=Vo=null,kr!==null){for(r=0;r<kr.length;r++)if(a=kr[r],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,_=a.pending;if(_!==null){var M=_.next;_.next=d,u.next=M}a.pending=u}kr=null}return n}function sm(n,r){do{var a=Xt;try{if(tc(),Ya.current=Ja,$a){for(var u=Ht.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}$a=!1}if(zr=0,tn=Kt=Ht=null,Io=!1,Oo=0,Nc.current=null,a===null||a.return===null){Zt=1,Ho=r,Xt=null;break}e:{var _=n,M=a.return,N=a,F=r;if(r=ln,N.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var ne=F,Se=N,Me=Se.tag;if((Se.mode&1)===0&&(Me===0||Me===11||Me===15)){var xe=Se.alternate;xe?(Se.updateQueue=xe.updateQueue,Se.memoizedState=xe.memoizedState,Se.lanes=xe.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Fe=Pp(M);if(Fe!==null){Fe.flags&=-257,Lp(Fe,M,N,_,r),Fe.mode&1&&bp(_,ne,r),r=Fe,F=ne;var Ge=r.updateQueue;if(Ge===null){var je=new Set;je.add(F),r.updateQueue=je}else Ge.add(F);break e}else{if((r&1)===0){bp(_,ne,r),Vc();break e}F=Error(t(426))}}else if(kt&&N.mode&1){var jt=Pp(M);if(jt!==null){(jt.flags&65536)===0&&(jt.flags|=256),Lp(jt,M,N,_,r),Qu(bs(F,N));break e}}_=F=bs(F,N),Zt!==4&&(Zt=2),Vo===null?Vo=[_]:Vo.push(_),_=M;do{switch(_.tag){case 3:_.flags|=65536,r&=-r,_.lanes|=r;var $=Rp(_,F,r);ep(_,$);break e;case 1:N=F;var H=_.type,Z=_.stateNode;if((_.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(dr===null||!dr.has(Z)))){_.flags|=65536,r&=-r,_.lanes|=r;var Re=Cp(_,N,r);ep(_,Re);break e}}_=_.return}while(_!==null)}lm(a)}catch($e){r=$e,Xt===a&&a!==null&&(Xt=a=a.return);continue}break}while(!0)}function om(){var n=rl.current;return rl.current=Ja,n===null?Ja:n}function Vc(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),nn===null||(Hr&268435455)===0&&(sl&268435455)===0||mr(nn,ln)}function fl(n,r){var a=Et;Et|=2;var u=om();(nn!==n||ln!==r)&&(zi=null,Gr(n,r));do try{b0();break}catch(d){sm(n,d)}while(!0);if(tc(),Et=a,rl.current=u,Xt!==null)throw Error(t(261));return nn=null,ln=0,Zt}function b0(){for(;Xt!==null;)am(Xt)}function P0(){for(;Xt!==null&&!Y();)am(Xt)}function am(n){var r=fm(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,r===null?lm(n):Xt=r,Nc.current=null}function lm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=E0(a,r,Gn),a!==null){Xt=a;return}}else{if(a=M0(a,r),a!==null){a.flags&=32767,Xt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Zt=6,Xt=null;return}}if(r=r.sibling,r!==null){Xt=r;return}Xt=r=n}while(r!==null);Zt===0&&(Zt=5)}function Wr(n,r,a){var u=Pt,d=Jn.transition;try{Jn.transition=null,Pt=1,L0(n,r,a,u)}finally{Jn.transition=d,Pt=u}return null}function L0(n,r,a,u){do Ns();while(hr!==null);if((Et&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=a.lanes|a.childLanes;if(xa(n,_),n===nn&&(Xt=nn=null,ln=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||al||(al=!0,dm(at,function(){return Ns(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=Jn.transition,Jn.transition=null;var M=Pt;Pt=1;var N=Et;Et|=4,Nc.current=null,w0(n,a),Jp(a,n),Zv(Vu),Ea=!!Hu,Vu=Hu=null,n.current=a,A0(a),Ce(),Et=N,Pt=M,Jn.transition=_}else n.current=a;if(al&&(al=!1,hr=n,ll=d),_=n.pendingLanes,_===0&&(dr=null),cn(a.stateNode),Un(n,Ae()),r!==null)for(u=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(ol)throw ol=!1,n=Oc,Oc=null,n;return(ll&1)!==0&&n.tag!==0&&Ns(),_=n.pendingLanes,(_&1)!==0?n===Fc?Go++:(Go=0,Fc=n):Go=0,lr(),null}function Ns(){if(hr!==null){var n=Kd(ll),r=Jn.transition,a=Pt;try{if(Jn.transition=null,Pt=16>n?16:n,hr===null)var u=!1;else{if(n=hr,hr=null,ll=0,(Et&6)!==0)throw Error(t(331));var d=Et;for(Et|=4,Be=n.current;Be!==null;){var _=Be,M=_.child;if((Be.flags&16)!==0){var N=_.deletions;if(N!==null){for(var F=0;F<N.length;F++){var ne=N[F];for(Be=ne;Be!==null;){var Se=Be;switch(Se.tag){case 0:case 11:case 15:zo(8,Se,_)}var Me=Se.child;if(Me!==null)Me.return=Se,Be=Me;else for(;Be!==null;){Se=Be;var xe=Se.sibling,Fe=Se.return;if(qp(Se),Se===ne){Be=null;break}if(xe!==null){xe.return=Fe,Be=xe;break}Be=Fe}}}var Ge=_.alternate;if(Ge!==null){var je=Ge.child;if(je!==null){Ge.child=null;do{var jt=je.sibling;je.sibling=null,je=jt}while(je!==null)}}Be=_}}if((_.subtreeFlags&2064)!==0&&M!==null)M.return=_,Be=M;else e:for(;Be!==null;){if(_=Be,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:zo(9,_,_.return)}var $=_.sibling;if($!==null){$.return=_.return,Be=$;break e}Be=_.return}}var H=n.current;for(Be=H;Be!==null;){M=Be;var Z=M.child;if((M.subtreeFlags&2064)!==0&&Z!==null)Z.return=M,Be=Z;else e:for(M=H;Be!==null;){if(N=Be,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:il(9,N)}}catch($e){Gt(N,N.return,$e)}if(N===M){Be=null;break e}var Re=N.sibling;if(Re!==null){Re.return=N.return,Be=Re;break e}Be=N.return}}if(Et=d,lr(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Ct,n)}catch{}u=!0}return u}finally{Pt=a,Jn.transition=r}}return!1}function um(n,r,a){r=bs(a,r),r=Rp(n,r,1),n=cr(n,r,1),r=Tn(),n!==null&&(bn(n,1,r),Un(n,r))}function Gt(n,r,a){if(n.tag===3)um(n,n,a);else for(;r!==null;){if(r.tag===3){um(r,n,a);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(dr===null||!dr.has(u))){n=bs(a,n),n=Cp(r,n,1),r=cr(r,n,1),n=Tn(),r!==null&&(bn(r,1,n),Un(r,n));break}}r=r.return}}function D0(n,r,a){var u=n.pingCache;u!==null&&u.delete(r),r=Tn(),n.pingedLanes|=n.suspendedLanes&a,nn===n&&(ln&a)===a&&(Zt===4||Zt===3&&(ln&130023424)===ln&&500>Ae()-Ic?Gr(n,0):Uc|=a),Un(n,r)}function cm(n,r){r===0&&((n.mode&1)===0?r=1:(r=si,si<<=1,(si&130023424)===0&&(si=4194304)));var a=Tn();n=Fi(n,r),n!==null&&(bn(n,r,a),Un(n,a))}function N0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),cm(n,a)}function U0(n,r){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),cm(n,a)}var fm;fm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Pn.current)Dn=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Dn=!1,S0(n,r,a);Dn=(n.flags&131072)!==0}else Dn=!1,kt&&(r.flags&1048576)!==0&&Wh(r,za,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;tl(n,r),n=r.pendingProps;var d=Ss(r,dn.current);Rs(r,a),d=dc(null,r,u,n,d,a);var _=hc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ln(u)?(_=!0,Fa(r)):_=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,sc(r),d.updater=Qa,r.stateNode=d,d._reactInternals=r,xc(r,u,n,a),r=Mc(null,r,u,!0,_,a)):(r.tag=0,kt&&_&&$u(r),Mn(null,r,d,a),r=r.child),r;case 16:u=r.elementType;e:{switch(tl(n,r),n=r.pendingProps,d=u._init,u=d(u._payload),r.type=u,d=r.tag=O0(u),n=li(u,n),d){case 0:r=Ec(null,r,u,n,a);break e;case 1:r=Fp(null,r,u,n,a);break e;case 11:r=Dp(null,r,u,n,a);break e;case 14:r=Np(null,r,u,li(u.type,n),a);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:li(u,d),Ec(n,r,u,d,a);case 1:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:li(u,d),Fp(n,r,u,d,a);case 3:e:{if(kp(r),n===null)throw Error(t(387));u=r.pendingProps,_=r.memoizedState,d=_.element,Qh(n,r),Xa(r,u,null,a);var M=r.memoizedState;if(u=M.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){d=bs(Error(t(423)),r),r=Bp(n,r,u,a,d);break e}else if(u!==d){d=bs(Error(t(424)),r),r=Bp(n,r,u,a,d);break e}else for(Vn=sr(r.stateNode.containerInfo.firstChild),Hn=r,kt=!0,ai=null,a=Zh(r,null,u,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ts(),u===d){r=Bi(n,r,a);break e}Mn(n,r,u,a)}r=r.child}return r;case 5:return np(r),n===null&&Ju(r),u=r.type,d=r.pendingProps,_=n!==null?n.memoizedProps:null,M=d.children,Gu(u,d)?M=null:_!==null&&Gu(u,_)&&(r.flags|=32),Op(n,r),Mn(n,r,M,a),r.child;case 6:return n===null&&Ju(r),null;case 13:return zp(n,r,a);case 4:return oc(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=ws(r,null,u,a):Mn(n,r,u,a),r.child;case 11:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:li(u,d),Dp(n,r,u,d,a);case 7:return Mn(n,r,r.pendingProps,a),r.child;case 8:return Mn(n,r,r.pendingProps.children,a),r.child;case 12:return Mn(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(u=r.type._context,d=r.pendingProps,_=r.memoizedProps,M=d.value,Nt(Ga,u._currentValue),u._currentValue=M,_!==null)if(oi(_.value,M)){if(_.children===d.children&&!Pn.current){r=Bi(n,r,a);break e}}else for(_=r.child,_!==null&&(_.return=r);_!==null;){var N=_.dependencies;if(N!==null){M=_.child;for(var F=N.firstContext;F!==null;){if(F.context===u){if(_.tag===1){F=ki(-1,a&-a),F.tag=2;var ne=_.updateQueue;if(ne!==null){ne=ne.shared;var Se=ne.pending;Se===null?F.next=F:(F.next=Se.next,Se.next=F),ne.pending=F}}_.lanes|=a,F=_.alternate,F!==null&&(F.lanes|=a),ic(_.return,a,r),N.lanes|=a;break}F=F.next}}else if(_.tag===10)M=_.type===r.type?null:_.child;else if(_.tag===18){if(M=_.return,M===null)throw Error(t(341));M.lanes|=a,N=M.alternate,N!==null&&(N.lanes|=a),ic(M,a,r),M=_.sibling}else M=_.child;if(M!==null)M.return=_;else for(M=_;M!==null;){if(M===r){M=null;break}if(_=M.sibling,_!==null){_.return=M.return,M=_;break}M=M.return}_=M}Mn(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,u=r.pendingProps.children,Rs(r,a),d=Kn(d),u=u(d),r.flags|=1,Mn(n,r,u,a),r.child;case 14:return u=r.type,d=li(u,r.pendingProps),d=li(u.type,d),Np(n,r,u,d,a);case 15:return Up(n,r,r.type,r.pendingProps,a);case 17:return u=r.type,d=r.pendingProps,d=r.elementType===u?d:li(u,d),tl(n,r),r.tag=1,Ln(u)?(n=!0,Fa(r)):n=!1,Rs(r,a),wp(r,u,d),xc(r,u,d,a),Mc(null,r,u,!0,n,a);case 19:return Vp(n,r,a);case 22:return Ip(n,r,a)}throw Error(t(156,r.tag))};function dm(n,r){return ie(n,r)}function I0(n,r,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(n,r,a,u){return new I0(n,r,a,u)}function Gc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function O0(n){if(typeof n=="function")return Gc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ue)return 11;if(n===pe)return 14}return 2}function gr(n,r){var a=n.alternate;return a===null?(a=Qn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function dl(n,r,a,u,d,_){var M=2;if(u=n,typeof n=="function")Gc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case U:return jr(a.children,d,_,r);case G:M=8,d|=8;break;case L:return n=Qn(12,a,r,d|2),n.elementType=L,n.lanes=_,n;case te:return n=Qn(13,a,r,d),n.elementType=te,n.lanes=_,n;case fe:return n=Qn(19,a,r,d),n.elementType=fe,n.lanes=_,n;case de:return hl(a,d,_,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:M=10;break e;case k:M=9;break e;case ue:M=11;break e;case pe:M=14;break e;case ce:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Qn(M,a,r,d),r.elementType=n,r.type=u,r.lanes=_,r}function jr(n,r,a,u){return n=Qn(7,n,u,r),n.lanes=a,n}function hl(n,r,a,u){return n=Qn(22,n,u,r),n.elementType=de,n.lanes=a,n.stateNode={isHidden:!1},n}function Wc(n,r,a){return n=Qn(6,n,null,r),n.lanes=a,n}function jc(n,r,a){return r=Qn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function F0(n,r,a,u,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qn(0),this.expirationTimes=qn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Xc(n,r,a,u,d,_,M,N,F){return n=new F0(n,r,a,N,F),r===1?(r=1,_===!0&&(r|=8)):r=0,_=Qn(3,null,null,r),n.current=_,_.stateNode=n,_.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},sc(_),n}function k0(n,r,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:u==null?null:""+u,children:n,containerInfo:r,implementation:a}}function hm(n){if(!n)return ar;n=n._reactInternals;e:{if(xi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ln(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ln(a))return Hh(n,a,r)}return r}function pm(n,r,a,u,d,_,M,N,F){return n=Xc(a,u,!0,n,d,_,M,N,F),n.context=hm(null),a=n.current,u=Tn(),d=pr(a),_=ki(u,d),_.callback=r??null,cr(a,_,d),n.current.lanes=d,bn(n,d,u),Un(n,u),n}function pl(n,r,a,u){var d=r.current,_=Tn(),M=pr(d);return a=hm(a),r.context===null?r.context=a:r.pendingContext=a,r=ki(_,M),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=cr(d,r,M),n!==null&&(fi(n,d,M,_),ja(n,d,M)),M}function ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function mm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function qc(n,r){mm(n,r),(n=n.alternate)&&mm(n,r)}function B0(){return null}var gm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Yc(n){this._internalRoot=n}gl.prototype.render=Yc.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));pl(n,r,null,null)},gl.prototype.unmount=Yc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Vr(function(){pl(null,n,null,null)}),r[Ni]=null}};function gl(n){this._internalRoot=n}gl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Qd();n={blockedOn:null,target:n,priority:r};for(var a=0;a<nr.length&&r!==0&&r<nr[a].priority;a++);nr.splice(a,0,n),a===0&&nh(n)}};function $c(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function _m(){}function z0(n,r,a,u,d){if(d){if(typeof u=="function"){var _=u;u=function(){var ne=ml(M);_.call(ne)}}var M=pm(r,u,n,0,null,!1,!1,"",_m);return n._reactRootContainer=M,n[Ni]=M.current,Ro(n.nodeType===8?n.parentNode:n),Vr(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var N=u;u=function(){var ne=ml(F);N.call(ne)}}var F=Xc(n,0,!1,null,null,!1,!1,"",_m);return n._reactRootContainer=F,n[Ni]=F.current,Ro(n.nodeType===8?n.parentNode:n),Vr(function(){pl(r,F,a,u)}),F}function vl(n,r,a,u,d){var _=a._reactRootContainer;if(_){var M=_;if(typeof d=="function"){var N=d;d=function(){var F=ml(M);N.call(F)}}pl(r,M,n,d)}else M=z0(a,r,n,d,u);return ml(M)}Zd=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=$t(r.pendingLanes);a!==0&&(xu(r,a|1),Un(r,Ae()),(Et&6)===0&&(Ds=Ae()+500,lr()))}break;case 13:Vr(function(){var u=Fi(n,1);if(u!==null){var d=Tn();fi(u,n,1,d)}}),qc(n,1)}},yu=function(n){if(n.tag===13){var r=Fi(n,134217728);if(r!==null){var a=Tn();fi(r,n,134217728,a)}qc(n,134217728)}},Jd=function(n){if(n.tag===13){var r=pr(n),a=Fi(n,r);if(a!==null){var u=Tn();fi(a,n,r,u)}qc(n,r)}},Qd=function(){return Pt},eh=function(n,r){var a=Pt;try{return Pt=n,r()}finally{Pt=a}},De=function(n,r,a){switch(r){case"input":if(nt(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var u=a[r];if(u!==n&&u.form===n.form){var d=Ia(u);if(!d)throw Error(t(90));et(u),nt(u,d)}}}break;case"textarea":me(n,a);break;case"select":r=a.value,r!=null&&D(n,!!a.multiple,r,!1)}},It=zc,Yt=Vr;var H0={usingClientEntryPoint:!1,Events:[Po,xs,Ia,Ie,ut,zc]},Wo={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V0={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=R(n),n===null?null:n.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||B0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{Ct=xl.inject(V0),xt=xl}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H0,In.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$c(r))throw Error(t(200));return k0(n,r,null,a)},In.createRoot=function(n,r){if(!$c(n))throw Error(t(299));var a=!1,u="",d=gm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Xc(n,1,!1,null,null,a,!1,u,d),n[Ni]=r.current,Ro(n.nodeType===8?n.parentNode:n),new Yc(r)},In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=R(r),n=n===null?null:n.stateNode,n},In.flushSync=function(n){return Vr(n)},In.hydrate=function(n,r,a){if(!_l(r))throw Error(t(200));return vl(null,n,r,!0,a)},In.hydrateRoot=function(n,r,a){if(!$c(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,_="",M=gm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),r=pm(r,null,n,1,a??null,d,!1,_,M),n[Ni]=r.current,Ro(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new gl(r)},In.render=function(n,r,a){if(!_l(r))throw Error(t(200));return vl(null,n,r,!1,a)},In.unmountComponentAtNode=function(n){if(!_l(n))throw Error(t(40));return n._reactRootContainer?(Vr(function(){vl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1},In.unstable_batchedUpdates=zc,In.unstable_renderSubtreeIntoContainer=function(n,r,a,u){if(!_l(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return vl(n,r,a,!1,u)},In.version="18.3.1-next-f1338f8080-20240426",In}var wm;function Z0(){if(wm)return Jc.exports;wm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Jc.exports=K0(),Jc.exports}var Am;function J0(){if(Am)return yl;Am=1;var i=Z0();return yl.createRoot=i.createRoot,yl.hydrateRoot=i.hydrateRoot,yl}var Q0=J0();const ex=Jg(Q0);function tx({status:i="ONLINE",onTimeClick:e}){let t="var(--primary-green)",s="ONLINE",o="OK";return i==="CACHED"?(t="var(--secondary-cyan)",s="CACHED",o="LAST KNOWN"):i==="OFFLINE"&&(t="var(--alert-red)",s="OFFLINE",o="FAILED"),ee.jsxs("div",{className:"crt-box-double",style:{padding:"4px 10px",fontSize:"12px",lineHeight:"1.4",color:t,minWidth:"150px"},children:[ee.jsxs("div",{children:["DATA LINK: ",ee.jsx("span",{style:{fontWeight:"bold"},children:s})]}),ee.jsx("div",{children:"SOURCE: NASA/JPL"}),ee.jsxs("div",{children:["SYNC: ",o]}),e&&ee.jsx("button",{onClick:e,style:{background:"none",border:"none",color:"var(--text-muted)",fontSize:"11px",textDecoration:"underline",padding:0,marginTop:"2px",cursor:"pointer"},children:"[DATE/TIME CONTROL]"})]})}function nx({selectedPlanetName:i,dataLinkStatus:e,onTimeClick:t,onToggleScanlines:s,scanlinesEnabled:o}){return ee.jsxs("header",{className:"crt-header",style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",borderBottom:"1px solid var(--border-green)",paddingBottom:"10px",marginBottom:"12px"},children:[ee.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[ee.jsxs("div",{style:{fontSize:"16px",color:"var(--primary-green)",fontWeight:"bold"},children:[ee.jsx("span",{style:{color:"var(--primary-green)",marginRight:"6px"},children:"■"}),"NASA / JPL"]}),ee.jsxs("button",{onClick:s,style:{background:"none",border:"1px solid var(--dark-green)",color:"var(--text-muted)",fontSize:"11px",padding:"2px 6px",cursor:"pointer",textAlign:"left"},children:["CRT SCANLINES: ",o?"ON":"OFF"]})]}),ee.jsxs("div",{style:{textAlign:"center"},children:[ee.jsx("h1",{style:{fontSize:"24px",letterSpacing:"3px",color:"var(--primary-green)",margin:0,textShadow:"0 0 10px rgba(0, 255, 102, 0.6)"},children:"PLANET WEATHER"}),ee.jsx("h2",{style:{fontSize:"36px",letterSpacing:"6px",color:"var(--primary-green)",margin:"2px 0 0 0",textShadow:"0 0 15px rgba(0, 255, 102, 0.9)",fontFamily:"VT323, monospace"},children:(i||"EARTH").toUpperCase()})]}),ee.jsx(tx,{status:e,onTimeClick:t})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dd="170",ix=0,Rm=1,rx=2,Qg=1,sx=2,Xi=3,br=0,An=1,Ai=2,Rr=0,Js=1,Hf=2,Cm=3,bm=4,ox=5,es=100,ax=101,lx=102,ux=103,cx=104,fx=200,dx=201,hx=202,px=203,Vf=204,Gf=205,mx=206,gx=207,_x=208,vx=209,xx=210,yx=211,Sx=212,Ex=213,Mx=214,Wf=0,jf=1,Xf=2,to=3,qf=4,Yf=5,$f=6,Kf=7,e_=0,Tx=1,wx=2,Cr=0,Ax=1,Rx=2,Cx=3,bx=4,Px=5,Lx=6,Dx=7,t_=300,no=301,io=302,Zf=303,Jf=304,cu=306,nu=1e3,Ar=1001,Qf=1002,_i=1003,Nx=1004,Sl=1005,Ri=1006,tf=1007,ns=1008,Ki=1009,n_=1010,i_=1011,ia=1012,Nd=1013,ss=1014,qi=1015,oa=1016,Ud=1017,Id=1018,ro=1020,r_=35902,s_=1021,o_=1022,gi=1023,a_=1024,l_=1025,Qs=1026,so=1027,u_=1028,Od=1029,c_=1030,Fd=1031,kd=1033,Xl=33776,ql=33777,Yl=33778,$l=33779,ed=35840,td=35841,nd=35842,id=35843,rd=36196,sd=37492,od=37496,ad=37808,ld=37809,ud=37810,cd=37811,fd=37812,dd=37813,hd=37814,pd=37815,md=37816,gd=37817,_d=37818,vd=37819,xd=37820,yd=37821,Kl=36492,Sd=36494,Ed=36495,f_=36283,Md=36284,Td=36285,wd=36286,Ux=3200,Ix=3201,d_=0,Ox=1,wr="",ti="srgb",ao="srgb-linear",fu="linear",Lt="srgb",Us=7680,Pm=519,Fx=512,kx=513,Bx=514,h_=515,zx=516,Hx=517,Vx=518,Gx=519,Lm=35044,Dm="300 es",Yi=2e3,iu=2001;class lo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nf=Math.PI/180,Ad=180/Math.PI;function aa(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]).toLowerCase()}function xn(i,e,t){return Math.max(e,Math.min(t,i))}function Wx(i,e){return(i%e+e)%e}function rf(i,e,t){return(1-t)*i+t*e}function Xo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function On(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(e=0,t=0){Tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(xn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,s,o,l,c,f,h,m){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,m)}set(e,t,s,o,l,c,f,h,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=s,g[7]=c,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[3],h=s[6],m=s[1],g=s[4],v=s[7],x=s[2],y=s[5],E=s[8],T=o[0],S=o[3],p=o[6],b=o[1],P=o[4],A=o[7],q=o[2],O=o[5],U=o[8];return l[0]=c*T+f*b+h*q,l[3]=c*S+f*P+h*O,l[6]=c*p+f*A+h*U,l[1]=m*T+g*b+v*q,l[4]=m*S+g*P+v*O,l[7]=m*p+g*A+v*U,l[2]=x*T+y*b+E*q,l[5]=x*S+y*P+E*O,l[8]=x*p+y*A+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],g=e[8];return t*c*g-t*f*m-s*l*g+s*f*h+o*l*m-o*c*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],g=e[8],v=g*c-f*m,x=f*h-g*l,y=m*l-c*h,E=t*v+s*x+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=v*T,e[1]=(o*m-g*s)*T,e[2]=(f*s-o*c)*T,e[3]=x*T,e[4]=(g*t-o*h)*T,e[5]=(o*l-f*t)*T,e[6]=y*T,e[7]=(s*h-m*t)*T,e[8]=(c*t-s*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,f){const h=Math.cos(l),m=Math.sin(l);return this.set(s*h,s*m,-s*(h*c+m*f)+c+e,-o*m,o*h,-o*(-m*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(sf.makeScale(e,t)),this}rotate(e){return this.premultiply(sf.makeRotation(-e)),this}translate(e,t){return this.premultiply(sf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sf=new dt;function p_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ru(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jx(){const i=ru("canvas");return i.style.display="block",i}const Nm={};function ta(i){i in Nm||(Nm[i]=!0,console.warn(i))}function Xx(i,e,t){return new Promise(function(s,o){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function qx(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Yx(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mt={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Lt&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Lt&&(i.r=eo(i.r),i.g=eo(i.g),i.b=eo(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wr?fu:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function eo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Um=[.64,.33,.3,.6,.15,.06],Im=[.2126,.7152,.0722],Om=[.3127,.329],Fm=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),km=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Mt.define({[ao]:{primaries:Um,whitePoint:Om,transfer:fu,toXYZ:Fm,fromXYZ:km,luminanceCoefficients:Im,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:Um,whitePoint:Om,transfer:Lt,toXYZ:Fm,fromXYZ:km,luminanceCoefficients:Im,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}});let Is;class $x{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Is===void 0&&(Is=ru("canvas")),Is.width=e.width,Is.height=e.height;const s=Is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Is}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ru("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=$i(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor($i(t[s]/255)*255):t[s]=$i(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kx=0;class m_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=aa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(of(o[c].image)):l.push(of(o[c]))}else l=of(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function of(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$x.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zx=0;class Rn extends lo{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,s=Ar,o=Ar,l=Ri,c=ns,f=gi,h=Ki,m=Rn.DEFAULT_ANISOTROPY,g=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=aa(),this.name="",this.source=new m_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nu:e.x=e.x-Math.floor(e.x);break;case Ar:e.x=e.x<0?0:1;break;case Qf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nu:e.y=e.y-Math.floor(e.y);break;case Ar:e.y=e.y<0?0:1;break;case Qf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=t_;Rn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,s=0,o=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,m=h[0],g=h[4],v=h[8],x=h[1],y=h[5],E=h[9],T=h[2],S=h[6],p=h[10];if(Math.abs(g-x)<.01&&Math.abs(v-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+T)<.1&&Math.abs(E+S)<.1&&Math.abs(m+y+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(m+1)/2,A=(y+1)/2,q=(p+1)/2,O=(g+x)/4,U=(v+T)/4,G=(E+S)/4;return P>A&&P>q?P<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(P),o=O/s,l=U/s):A>q?A<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),s=O/o,l=G/o):q<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(q),s=U/l,o=G/l),this.set(s,o,l,t),this}let b=Math.sqrt((S-E)*(S-E)+(v-T)*(v-T)+(x-g)*(x-g));return Math.abs(b)<.001&&(b=1),this.x=(S-E)/b,this.y=(v-T)/b,this.z=(x-g)/b,this.w=Math.acos((m+y+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jx extends lo{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const o={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new Rn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,o=e.textures.length;s<o;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new m_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends Jx{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class g_ extends Rn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qx extends Rn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class la{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,f){let h=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];const x=l[c+0],y=l[c+1],E=l[c+2],T=l[c+3];if(f===0){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(f===1){e[t+0]=x,e[t+1]=y,e[t+2]=E,e[t+3]=T;return}if(v!==T||h!==x||m!==y||g!==E){let S=1-f;const p=h*x+m*y+g*E+v*T,b=p>=0?1:-1,P=1-p*p;if(P>Number.EPSILON){const q=Math.sqrt(P),O=Math.atan2(q,p*b);S=Math.sin(S*O)/q,f=Math.sin(f*O)/q}const A=f*b;if(h=h*S+x*A,m=m*S+y*A,g=g*S+E*A,v=v*S+T*A,S===1-f){const q=1/Math.sqrt(h*h+m*m+g*g+v*v);h*=q,m*=q,g*=q,v*=q}}e[t]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,o,l,c){const f=s[o],h=s[o+1],m=s[o+2],g=s[o+3],v=l[c],x=l[c+1],y=l[c+2],E=l[c+3];return e[t]=f*E+g*v+h*y-m*x,e[t+1]=h*E+g*x+m*v-f*y,e[t+2]=m*E+g*y+f*x-h*v,e[t+3]=g*E-f*v-h*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,m=f(s/2),g=f(o/2),v=f(l/2),x=h(s/2),y=h(o/2),E=h(l/2);switch(c){case"XYZ":this._x=x*g*v+m*y*E,this._y=m*y*v-x*g*E,this._z=m*g*E+x*y*v,this._w=m*g*v-x*y*E;break;case"YXZ":this._x=x*g*v+m*y*E,this._y=m*y*v-x*g*E,this._z=m*g*E-x*y*v,this._w=m*g*v+x*y*E;break;case"ZXY":this._x=x*g*v-m*y*E,this._y=m*y*v+x*g*E,this._z=m*g*E+x*y*v,this._w=m*g*v-x*y*E;break;case"ZYX":this._x=x*g*v-m*y*E,this._y=m*y*v+x*g*E,this._z=m*g*E-x*y*v,this._w=m*g*v+x*y*E;break;case"YZX":this._x=x*g*v+m*y*E,this._y=m*y*v+x*g*E,this._z=m*g*E-x*y*v,this._w=m*g*v-x*y*E;break;case"XZY":this._x=x*g*v-m*y*E,this._y=m*y*v-x*g*E,this._z=m*g*E+x*y*v,this._w=m*g*v+x*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],m=t[2],g=t[6],v=t[10],x=s+f+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-h)*y,this._y=(l-m)*y,this._z=(c-o)*y}else if(s>f&&s>v){const y=2*Math.sqrt(1+s-f-v);this._w=(g-h)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(l+m)/y}else if(f>v){const y=2*Math.sqrt(1+f-s-v);this._w=(l-m)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(h+g)/y}else{const y=2*Math.sqrt(1+v-s-f);this._w=(c-o)/y,this._x=(l+m)/y,this._y=(h+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,m=t._z,g=t._w;return this._x=s*g+c*f+o*m-l*h,this._y=o*g+c*h+l*f-s*m,this._z=l*g+c*m+s*h-o*f,this._w=c*g-s*f-o*h-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=o,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*s+t*this._x,this._y=y*o+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,f),v=Math.sin((1-t)*g)/m,x=Math.sin(t*g)/m;return this._w=c*v+this._w*x,this._x=s*v+this._x*x,this._y=o*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,s=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,m=2*(c*o-f*s),g=2*(f*t-l*o),v=2*(l*s-c*t);return this.x=t+h*m+c*v-f*g,this.y=s+h*g+f*m-l*v,this.z=o+h*v+l*g-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-s*h,this.z=s*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return af.copy(this).projectOnVector(e),this.sub(af)}reflect(e){return this.sub(af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(xn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const af=new Q,Bm=new la;class ua{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,di):di.fromBufferAttribute(l,c),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),El.copy(s.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),Ml.subVectors(this.max,qo),Os.subVectors(e.a,qo),Fs.subVectors(e.b,qo),ks.subVectors(e.c,qo),vr.subVectors(Fs,Os),xr.subVectors(ks,Fs),Xr.subVectors(Os,ks);let t=[0,-vr.z,vr.y,0,-xr.z,xr.y,0,-Xr.z,Xr.y,vr.z,0,-vr.x,xr.z,0,-xr.x,Xr.z,0,-Xr.x,-vr.y,vr.x,0,-xr.y,xr.x,0,-Xr.y,Xr.x,0];return!lf(t,Os,Fs,ks,Ml)||(t=[1,0,0,0,1,0,0,0,1],!lf(t,Os,Fs,ks,Ml))?!1:(Tl.crossVectors(vr,xr),t=[Tl.x,Tl.y,Tl.z],lf(t,Os,Fs,ks,Ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],di=new Q,El=new ua,Os=new Q,Fs=new Q,ks=new Q,vr=new Q,xr=new Q,Xr=new Q,qo=new Q,Ml=new Q,Tl=new Q,qr=new Q;function lf(i,e,t,s,o){for(let l=0,c=i.length-3;l<=c;l+=3){qr.fromArray(i,l);const f=o.x*Math.abs(qr.x)+o.y*Math.abs(qr.y)+o.z*Math.abs(qr.z),h=e.dot(qr),m=t.dot(qr),g=s.dot(qr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>f)return!1}return!0}const ey=new ua,Yo=new Q,uf=new Q;class du{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):ey.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const t=Yo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Yo,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(uf)),this.expandByPoint(Yo.copy(e.center).sub(uf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vi=new Q,cf=new Q,wl=new Q,yr=new Q,ff=new Q,Al=new Q,df=new Q;class __{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){cf.copy(e).add(t).multiplyScalar(.5),wl.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(cf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(wl),f=yr.dot(this.direction),h=-yr.dot(wl),m=yr.lengthSq(),g=Math.abs(1-c*c);let v,x,y,E;if(g>0)if(v=c*h-f,x=c*f-h,E=l*g,v>=0)if(x>=-E)if(x<=E){const T=1/g;v*=T,x*=T,y=v*(v+c*x+2*f)+x*(c*v+x+2*h)+m}else x=l,v=Math.max(0,-(c*x+f)),y=-v*v+x*(x+2*h)+m;else x=-l,v=Math.max(0,-(c*x+f)),y=-v*v+x*(x+2*h)+m;else x<=-E?(v=Math.max(0,-(-c*l+f)),x=v>0?-l:Math.min(Math.max(-l,-h),l),y=-v*v+x*(x+2*h)+m):x<=E?(v=0,x=Math.min(Math.max(-l,-h),l),y=x*(x+2*h)+m):(v=Math.max(0,-(c*l+f)),x=v>0?l:Math.min(Math.max(-l,-h),l),y=-v*v+x*(x+2*h)+m);else x=c>0?-l:l,v=Math.max(0,-(c*x+f)),y=-v*v+x*(x+2*h)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(cf).addScaledVector(wl,x),y}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);const s=Vi.dot(this.direction),o=Vi.dot(Vi)-s*s,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=s-c,h=s+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,f,h;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(s=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(s=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),g>=0?(l=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),v>=0?(f=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(f=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,s,o,l){ff.subVectors(t,e),Al.subVectors(s,e),df.crossVectors(ff,Al);let c=this.direction.dot(df),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;yr.subVectors(this.origin,e);const h=f*this.direction.dot(Al.crossVectors(yr,Al));if(h<0)return null;const m=f*this.direction.dot(ff.cross(yr));if(m<0||h+m>c)return null;const g=-f*yr.dot(df);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,s,o,l,c,f,h,m,g,v,x,y,E,T,S){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,m,g,v,x,y,E,T,S)}set(e,t,s,o,l,c,f,h,m,g,v,x,y,E,T,S){const p=this.elements;return p[0]=e,p[4]=t,p[8]=s,p[12]=o,p[1]=l,p[5]=c,p[9]=f,p[13]=h,p[2]=m,p[6]=g,p[10]=v,p[14]=x,p[3]=y,p[7]=E,p[11]=T,p[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/Bs.setFromMatrixColumn(e,0).length(),l=1/Bs.setFromMatrixColumn(e,1).length(),c=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),h=Math.cos(o),m=Math.sin(o),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=c*g,y=c*v,E=f*g,T=f*v;t[0]=h*g,t[4]=-h*v,t[8]=m,t[1]=y+E*m,t[5]=x-T*m,t[9]=-f*h,t[2]=T-x*m,t[6]=E+y*m,t[10]=c*h}else if(e.order==="YXZ"){const x=h*g,y=h*v,E=m*g,T=m*v;t[0]=x+T*f,t[4]=E*f-y,t[8]=c*m,t[1]=c*v,t[5]=c*g,t[9]=-f,t[2]=y*f-E,t[6]=T+x*f,t[10]=c*h}else if(e.order==="ZXY"){const x=h*g,y=h*v,E=m*g,T=m*v;t[0]=x-T*f,t[4]=-c*v,t[8]=E+y*f,t[1]=y+E*f,t[5]=c*g,t[9]=T-x*f,t[2]=-c*m,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const x=c*g,y=c*v,E=f*g,T=f*v;t[0]=h*g,t[4]=E*m-y,t[8]=x*m+T,t[1]=h*v,t[5]=T*m+x,t[9]=y*m-E,t[2]=-m,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,y=c*m,E=f*h,T=f*m;t[0]=h*g,t[4]=T-x*v,t[8]=E*v+y,t[1]=v,t[5]=c*g,t[9]=-f*g,t[2]=-m*g,t[6]=y*v+E,t[10]=x-T*v}else if(e.order==="XZY"){const x=c*h,y=c*m,E=f*h,T=f*m;t[0]=h*g,t[4]=-v,t[8]=m*g,t[1]=x*v+T,t[5]=c*g,t[9]=y*v-E,t[2]=E*v-y,t[6]=f*g,t[10]=T*v+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ty,e,ny)}lookAt(e,t,s){const o=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Sr.crossVectors(s,Wn),Sr.lengthSq()===0&&(Math.abs(s.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Sr.crossVectors(s,Wn)),Sr.normalize(),Rl.crossVectors(Wn,Sr),o[0]=Sr.x,o[4]=Rl.x,o[8]=Wn.x,o[1]=Sr.y,o[5]=Rl.y,o[9]=Wn.y,o[2]=Sr.z,o[6]=Rl.z,o[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[4],h=s[8],m=s[12],g=s[1],v=s[5],x=s[9],y=s[13],E=s[2],T=s[6],S=s[10],p=s[14],b=s[3],P=s[7],A=s[11],q=s[15],O=o[0],U=o[4],G=o[8],L=o[12],C=o[1],k=o[5],ue=o[9],te=o[13],fe=o[2],pe=o[6],ce=o[10],de=o[14],B=o[3],he=o[7],se=o[11],I=o[15];return l[0]=c*O+f*C+h*fe+m*B,l[4]=c*U+f*k+h*pe+m*he,l[8]=c*G+f*ue+h*ce+m*se,l[12]=c*L+f*te+h*de+m*I,l[1]=g*O+v*C+x*fe+y*B,l[5]=g*U+v*k+x*pe+y*he,l[9]=g*G+v*ue+x*ce+y*se,l[13]=g*L+v*te+x*de+y*I,l[2]=E*O+T*C+S*fe+p*B,l[6]=E*U+T*k+S*pe+p*he,l[10]=E*G+T*ue+S*ce+p*se,l[14]=E*L+T*te+S*de+p*I,l[3]=b*O+P*C+A*fe+q*B,l[7]=b*U+P*k+A*pe+q*he,l[11]=b*G+P*ue+A*ce+q*se,l[15]=b*L+P*te+A*de+q*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],m=e[13],g=e[2],v=e[6],x=e[10],y=e[14],E=e[3],T=e[7],S=e[11],p=e[15];return E*(+l*h*v-o*m*v-l*f*x+s*m*x+o*f*y-s*h*y)+T*(+t*h*y-t*m*x+l*c*x-o*c*y+o*m*g-l*h*g)+S*(+t*m*v-t*f*y-l*c*v+s*c*y+l*f*g-s*m*g)+p*(-o*f*g-t*h*v+t*f*x+o*c*v-s*c*x+s*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],g=e[8],v=e[9],x=e[10],y=e[11],E=e[12],T=e[13],S=e[14],p=e[15],b=v*S*m-T*x*m+T*h*y-f*S*y-v*h*p+f*x*p,P=E*x*m-g*S*m-E*h*y+c*S*y+g*h*p-c*x*p,A=g*T*m-E*v*m+E*f*y-c*T*y-g*f*p+c*v*p,q=E*v*h-g*T*h-E*f*x+c*T*x+g*f*S-c*v*S,O=t*b+s*P+o*A+l*q;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return e[0]=b*U,e[1]=(T*x*l-v*S*l-T*o*y+s*S*y+v*o*p-s*x*p)*U,e[2]=(f*S*l-T*h*l+T*o*m-s*S*m-f*o*p+s*h*p)*U,e[3]=(v*h*l-f*x*l-v*o*m+s*x*m+f*o*y-s*h*y)*U,e[4]=P*U,e[5]=(g*S*l-E*x*l+E*o*y-t*S*y-g*o*p+t*x*p)*U,e[6]=(E*h*l-c*S*l-E*o*m+t*S*m+c*o*p-t*h*p)*U,e[7]=(c*x*l-g*h*l+g*o*m-t*x*m-c*o*y+t*h*y)*U,e[8]=A*U,e[9]=(E*v*l-g*T*l-E*s*y+t*T*y+g*s*p-t*v*p)*U,e[10]=(c*T*l-E*f*l+E*s*m-t*T*m-c*s*p+t*f*p)*U,e[11]=(g*f*l-c*v*l-g*s*m+t*v*m+c*s*y-t*f*y)*U,e[12]=q*U,e[13]=(g*T*o-E*v*o+E*s*x-t*T*x-g*s*S+t*v*S)*U,e[14]=(E*f*o-c*T*o-E*s*h+t*T*h+c*s*S-t*f*S)*U,e[15]=(c*v*o-g*f*o+g*s*h-t*v*h-c*s*x+t*f*x)*U,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,f=e.y,h=e.z,m=l*c,g=l*f;return this.set(m*c+s,m*f-o*h,m*h+o*f,0,m*f+o*h,g*f+s,g*h-o*c,0,m*h-o*f,g*h+o*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,m=l+l,g=c+c,v=f+f,x=l*m,y=l*g,E=l*v,T=c*g,S=c*v,p=f*v,b=h*m,P=h*g,A=h*v,q=s.x,O=s.y,U=s.z;return o[0]=(1-(T+p))*q,o[1]=(y+A)*q,o[2]=(E-P)*q,o[3]=0,o[4]=(y-A)*O,o[5]=(1-(x+p))*O,o[6]=(S+b)*O,o[7]=0,o[8]=(E+P)*U,o[9]=(S-b)*U,o[10]=(1-(x+T))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=Bs.set(o[0],o[1],o[2]).length();const c=Bs.set(o[4],o[5],o[6]).length(),f=Bs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],hi.copy(this);const m=1/l,g=1/c,v=1/f;return hi.elements[0]*=m,hi.elements[1]*=m,hi.elements[2]*=m,hi.elements[4]*=g,hi.elements[5]*=g,hi.elements[6]*=g,hi.elements[8]*=v,hi.elements[9]*=v,hi.elements[10]*=v,t.setFromRotationMatrix(hi),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,o,l,c,f=Yi){const h=this.elements,m=2*l/(t-e),g=2*l/(s-o),v=(t+e)/(t-e),x=(s+o)/(s-o);let y,E;if(f===Yi)y=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===iu)y=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,o,l,c,f=Yi){const h=this.elements,m=1/(t-e),g=1/(s-o),v=1/(c-l),x=(t+e)*m,y=(s+o)*g;let E,T;if(f===Yi)E=(c+l)*v,T=-2*v;else if(f===iu)E=l*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-y,h[2]=0,h[6]=0,h[10]=T,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Bs=new Q,hi=new Bt,ty=new Q(0,0,0),ny=new Q(1,1,1),Sr=new Q,Rl=new Q,Wn=new Q,zm=new Bt,Hm=new la;class bi{constructor(e=0,t=0,s=0,o=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],m=o[5],g=o[9],v=o[2],x=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(xn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(xn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-xn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(xn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-xn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return zm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hm.setFromEuler(this),this.setFromQuaternion(Hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class v_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iy=0;const Vm=new Q,zs=new la,Gi=new Bt,Cl=new Q,$o=new Q,ry=new Q,sy=new la,Gm=new Q(1,0,0),Wm=new Q(0,1,0),jm=new Q(0,0,1),Xm={type:"added"},oy={type:"removed"},Hs={type:"childadded",child:null},hf={type:"childremoved",child:null};class un extends lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new Q,t=new bi,s=new la,o=new Q(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Bt},normalMatrix:{value:new dt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Gm,e)}rotateY(e){return this.rotateOnAxis(Wm,e)}rotateZ(e){return this.rotateOnAxis(jm,e)}translateOnAxis(e,t){return Vm.copy(e).applyQuaternion(this.quaternion),this.position.add(Vm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gm,e)}translateY(e){return this.translateOnAxis(Wm,e)}translateZ(e){return this.translateOnAxis(jm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Cl.copy(e):Cl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt($o,Cl,this.up):Gi.lookAt(Cl,$o,this.up),this.quaternion.setFromRotationMatrix(Gi),o&&(Gi.extractRotation(o.matrixWorld),zs.setFromRotationMatrix(Gi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xm),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oy),hf.child=e,this.dispatchEvent(hf),hf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xm),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,ry),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,sy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),m=c(e.textures),g=c(e.images),v=c(e.shapes),x=c(e.skeletons),y=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=o,s;function c(f){const h=[];for(const m in f){const g=f[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}un.DEFAULT_UP=new Q(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new Q,Wi=new Q,pf=new Q,ji=new Q,Vs=new Q,Gs=new Q,qm=new Q,mf=new Q,gf=new Q,_f=new Q,vf=new Wt,xf=new Wt,yf=new Wt;class mi{constructor(e=new Q,t=new Q,s=new Q){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),pi.subVectors(e,t),o.cross(pi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){pi.subVectors(o,t),Wi.subVectors(s,t),pf.subVectors(e,t);const c=pi.dot(pi),f=pi.dot(Wi),h=pi.dot(pf),m=Wi.dot(Wi),g=Wi.dot(pf),v=c*m-f*f;if(v===0)return l.set(0,0,0),null;const x=1/v,y=(m*h-f*g)*x,E=(c*g-f*h)*x;return l.set(1-y-E,E,y)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,s,o,l,c,f,h){return this.getBarycoord(e,t,s,o,ji)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,ji.x),h.addScaledVector(c,ji.y),h.addScaledVector(f,ji.z),h)}static getInterpolatedAttribute(e,t,s,o,l,c){return vf.setScalar(0),xf.setScalar(0),yf.setScalar(0),vf.fromBufferAttribute(e,t),xf.fromBufferAttribute(e,s),yf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(vf,l.x),c.addScaledVector(xf,l.y),c.addScaledVector(yf,l.z),c}static isFrontFacing(e,t,s,o){return pi.subVectors(s,t),Wi.subVectors(e,t),pi.cross(Wi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),pi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return mi.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let c,f;Vs.subVectors(o,s),Gs.subVectors(l,s),mf.subVectors(e,s);const h=Vs.dot(mf),m=Gs.dot(mf);if(h<=0&&m<=0)return t.copy(s);gf.subVectors(e,o);const g=Vs.dot(gf),v=Gs.dot(gf);if(g>=0&&v<=g)return t.copy(o);const x=h*v-g*m;if(x<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(s).addScaledVector(Vs,c);_f.subVectors(e,l);const y=Vs.dot(_f),E=Gs.dot(_f);if(E>=0&&y<=E)return t.copy(l);const T=y*m-h*E;if(T<=0&&m>=0&&E<=0)return f=m/(m-E),t.copy(s).addScaledVector(Gs,f);const S=g*E-y*v;if(S<=0&&v-g>=0&&y-E>=0)return qm.subVectors(l,o),f=(v-g)/(v-g+(y-E)),t.copy(o).addScaledVector(qm,f);const p=1/(S+T+x);return c=T*p,f=x*p,t.copy(s).addScaledVector(Vs,c).addScaledVector(Gs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const x_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},bl={h:0,s:0,l:0};function Sf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Rt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Mt.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=Mt.workingColorSpace){if(e=Wx(e,1),t=xn(t,0,1),s=xn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Sf(c,l,e+1/3),this.g=Sf(c,l,e),this.b=Sf(c,l,e-1/3)}return Mt.toWorkingColorSpace(this,o),this}setStyle(e,t=ti){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const s=x_[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Mt.fromWorkingColorSpace(_n.copy(this),e),Math.round(xn(_n.r*255,0,255))*65536+Math.round(xn(_n.g*255,0,255))*256+Math.round(xn(_n.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(_n.copy(this),t);const s=_n.r,o=_n.g,l=_n.b,c=Math.max(s,o,l),f=Math.min(s,o,l);let h,m;const g=(f+c)/2;if(f===c)h=0,m=0;else{const v=c-f;switch(m=g<=.5?v/(c+f):v/(2-c-f),c){case s:h=(o-l)/v+(o<l?6:0);break;case o:h=(l-s)/v+2;break;case l:h=(s-o)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=ti){Mt.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,s=_n.g,o=_n.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+t,Er.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Er),e.getHSL(bl);const s=rf(Er.h,bl.h,t),o=rf(Er.s,bl.s,t),l=rf(Er.l,bl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Rt;Rt.NAMES=x_;let ay=0;class uo extends lo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=aa(),this.name="",this.blending=Js,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vf,this.blendDst=Gf,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(s.blending=this.blending),this.side!==br&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Vf&&(s.blendSrc=this.blendSrc),this.blendDst!==Gf&&(s.blendDst=this.blendDst),this.blendEquation!==es&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class su extends uo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=e_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new Q,Pl=new Tt;class Ci{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Lm,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Pl.fromBufferAttribute(this,t),Pl.applyMatrix3(e),this.setXY(t,Pl.x,Pl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Xo(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=On(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xo(t,this.array)),t}setX(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xo(t,this.array)),t}setY(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xo(t,this.array)),t}setW(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),s=On(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),s=On(s,this.array),o=On(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),s=On(s,this.array),o=On(o,this.array),l=On(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lm&&(e.usage=this.usage),e}}class y_ extends Ci{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class S_ extends Ci{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class kn extends Ci{constructor(e,t,s){super(new Float32Array(e),t,s)}}let ly=0;const ei=new Bt,Ef=new un,Ws=new Q,jn=new ua,Ko=new ua,sn=new Q;class vi extends lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p_(e)?S_:y_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new dt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,s){return ei.makeTranslation(e,t,s),this.applyMatrix4(ei),this}scale(e,t,s){return ei.makeScale(e,t,s),this.applyMatrix4(ei),this}lookAt(e){return Ef.lookAt(e),Ef.updateMatrix(),this.applyMatrix4(Ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new kn(s,3))}else{for(let s=0,o=t.count;s<o;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];jn.setFromBufferAttribute(l),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const s=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Ko.setFromBufferAttribute(f),this.morphTargetsRelative?(sn.addVectors(jn.min,Ko.min),jn.expandByPoint(sn),sn.addVectors(jn.max,Ko.max),jn.expandByPoint(sn)):(jn.expandByPoint(Ko.min),jn.expandByPoint(Ko.max))}jn.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)sn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(sn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)sn.fromBufferAttribute(f,m),h&&(Ws.fromBufferAttribute(e,m),sn.add(Ws)),o=Math.max(o,s.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let G=0;G<s.count;G++)f[G]=new Q,h[G]=new Q;const m=new Q,g=new Q,v=new Q,x=new Tt,y=new Tt,E=new Tt,T=new Q,S=new Q;function p(G,L,C){m.fromBufferAttribute(s,G),g.fromBufferAttribute(s,L),v.fromBufferAttribute(s,C),x.fromBufferAttribute(l,G),y.fromBufferAttribute(l,L),E.fromBufferAttribute(l,C),g.sub(m),v.sub(m),y.sub(x),E.sub(x);const k=1/(y.x*E.y-E.x*y.y);isFinite(k)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(k),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(k),f[G].add(T),f[L].add(T),f[C].add(T),h[G].add(S),h[L].add(S),h[C].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let G=0,L=b.length;G<L;++G){const C=b[G],k=C.start,ue=C.count;for(let te=k,fe=k+ue;te<fe;te+=3)p(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const P=new Q,A=new Q,q=new Q,O=new Q;function U(G){q.fromBufferAttribute(o,G),O.copy(q);const L=f[G];P.copy(L),P.sub(q.multiplyScalar(q.dot(L))).normalize(),A.crossVectors(O,L);const k=A.dot(h[G])<0?-1:1;c.setXYZW(G,P.x,P.y,P.z,k)}for(let G=0,L=b.length;G<L;++G){const C=b[G],k=C.start,ue=C.count;for(let te=k,fe=k+ue;te<fe;te+=3)U(e.getX(te+0)),U(e.getX(te+1)),U(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ci(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const o=new Q,l=new Q,c=new Q,f=new Q,h=new Q,m=new Q,g=new Q,v=new Q;if(e)for(let x=0,y=e.count;x<y;x+=3){const E=e.getX(x+0),T=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,S),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),f.fromBufferAttribute(s,E),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,S),f.add(g),h.add(g),m.add(g),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,y=t.count;x<y;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(f,h){const m=f.array,g=f.itemSize,v=f.normalized,x=new m.constructor(h.length*g);let y=0,E=0;for(let T=0,S=h.length;T<S;T++){f.isInterleavedBufferAttribute?y=h[T]*f.data.stride+f.offset:y=h[T]*g;for(let p=0;p<g;p++)x[E++]=m[y++]}return new Ci(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vi,s=this.index.array,o=this.attributes;for(const f in o){const h=o[f],m=e(h,s);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const h=[],m=l[f];for(let g=0,v=m.length;g<v;g++){const x=m[g],y=e(x,s);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const m=c[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const m=s[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let v=0,x=m.length;v<x;v++){const y=m[v];g.push(y.toJSON(e.data))}g.length>0&&(o[h]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(t))}const l=e.morphAttributes;for(const m in l){const g=[],v=l[m];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,g=c.length;m<g;m++){const v=c[m];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ym=new Bt,Yr=new __,Ll=new du,$m=new Q,Dl=new Q,Nl=new Q,Ul=new Q,Mf=new Q,Il=new Q,Km=new Q,Ol=new Q;class Fn extends un{constructor(e=new vi,t=new su){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Il.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=f[h],v=l[h];g!==0&&(Mf.fromBufferAttribute(v,e),c?Il.addScaledVector(Mf,g):Il.addScaledVector(Mf.sub(t),g))}t.add(Il)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ll.copy(s.boundingSphere),Ll.applyMatrix4(l),Yr.copy(e.ray).recast(e.near),!(Ll.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Ll,$m)===null||Yr.origin.distanceToSquared($m)>(e.far-e.near)**2))&&(Ym.copy(l).invert(),Yr.copy(e.ray).applyMatrix4(Ym),!(s.boundingBox!==null&&Yr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}_computeIntersections(e,t,s){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,x=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,T=x.length;E<T;E++){const S=x[E],p=c[S.materialIndex],b=Math.max(S.start,y.start),P=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let A=b,q=P;A<q;A+=3){const O=f.getX(A),U=f.getX(A+1),G=f.getX(A+2);o=Fl(this,p,e,s,m,g,v,O,U,G),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let S=E,p=T;S<p;S+=3){const b=f.getX(S),P=f.getX(S+1),A=f.getX(S+2);o=Fl(this,c,e,s,m,g,v,b,P,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,T=x.length;E<T;E++){const S=x[E],p=c[S.materialIndex],b=Math.max(S.start,y.start),P=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let A=b,q=P;A<q;A+=3){const O=A,U=A+1,G=A+2;o=Fl(this,p,e,s,m,g,v,O,U,G),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let S=E,p=T;S<p;S+=3){const b=S,P=S+1,A=S+2;o=Fl(this,c,e,s,m,g,v,b,P,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function uy(i,e,t,s,o,l,c,f){let h;if(e.side===An?h=s.intersectTriangle(c,l,o,!0,f):h=s.intersectTriangle(o,l,c,e.side===br,f),h===null)return null;Ol.copy(f),Ol.applyMatrix4(i.matrixWorld);const m=t.ray.origin.distanceTo(Ol);return m<t.near||m>t.far?null:{distance:m,point:Ol.clone(),object:i}}function Fl(i,e,t,s,o,l,c,f,h,m){i.getVertexPosition(f,Dl),i.getVertexPosition(h,Nl),i.getVertexPosition(m,Ul);const g=uy(i,e,t,s,Dl,Nl,Ul,Km);if(g){const v=new Q;mi.getBarycoord(Km,Dl,Nl,Ul,v),o&&(g.uv=mi.getInterpolatedAttribute(o,f,h,m,v,new Tt)),l&&(g.uv1=mi.getInterpolatedAttribute(l,f,h,m,v,new Tt)),c&&(g.normal=mi.getInterpolatedAttribute(c,f,h,m,v,new Q),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:f,b:h,c:m,normal:new Q,materialIndex:0};mi.getNormal(Dl,Nl,Ul,x.normal),g.face=x,g.barycoord=v}return g}class ca extends vi{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],m=[],g=[],v=[];let x=0,y=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,o,c,2),E("x","z","y",1,-1,e,s,-t,o,c,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new kn(m,3)),this.setAttribute("normal",new kn(g,3)),this.setAttribute("uv",new kn(v,2));function E(T,S,p,b,P,A,q,O,U,G,L){const C=A/U,k=q/G,ue=A/2,te=q/2,fe=O/2,pe=U+1,ce=G+1;let de=0,B=0;const he=new Q;for(let se=0;se<ce;se++){const I=se*k-te;for(let K=0;K<pe;K++){const be=K*C-ue;he[T]=be*b,he[S]=I*P,he[p]=fe,m.push(he.x,he.y,he.z),he[T]=0,he[S]=0,he[p]=O>0?1:-1,g.push(he.x,he.y,he.z),v.push(K/U),v.push(1-se/G),de+=1}}for(let se=0;se<G;se++)for(let I=0;I<U;I++){const K=x+I+pe*se,be=x+I+pe*(se+1),X=x+(I+1)+pe*(se+1),oe=x+(I+1)+pe*se;h.push(K,be,oe),h.push(be,X,oe),B+=6}f.addGroup(y,B,L),y+=B,x+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const o=i[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function wn(i){const e={};for(let t=0;t<i.length;t++){const s=oo(i[t]);for(const o in s)e[o]=s[o]}return e}function cy(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function E_(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const fy={clone:oo,merge:wn};var dy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends uo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dy,this.fragmentShader=hy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=cy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class M_ extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new Q,Zm=new Tt,Jm=new Tt;class ni extends M_{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ad*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ad*2*Math.atan(Math.tan(nf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,Zm,Jm),t.subVectors(Jm,Zm)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nf*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*s/m,o*=c.width/h,s*=c.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const js=-90,Xs=1;class py extends un{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ni(js,Xs,e,t);o.layers=this.layers,this.add(o);const l=new ni(js,Xs,e,t);l.layers=this.layers,this.add(l);const c=new ni(js,Xs,e,t);c.layers=this.layers,this.add(c);const f=new ni(js,Xs,e,t);f.layers=this.layers,this.add(f);const h=new ni(js,Xs,e,t);h.layers=this.layers,this.add(h);const m=new ni(js,Xs,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,f,h]=t;for(const m of t)this.remove(m);if(e===Yi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===iu)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,m,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,c),e.setRenderTarget(s,2,o),e.render(t,f),e.setRenderTarget(s,3,o),e.render(t,h),e.setRenderTarget(s,4,o),e.render(t,m),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,o),e.render(t,g),e.setRenderTarget(v,x,y),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class T_ extends Rn{constructor(e,t,s,o,l,c,f,h,m,g){e=e!==void 0?e:[],t=t!==void 0?t:no,super(e,t,s,o,l,c,f,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class my extends os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new T_(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ri}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ca(5,5,5),l=new Pr({name:"CubemapFromEquirect",uniforms:oo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:An,blending:Rr});l.uniforms.tEquirect.value=t;const c=new Fn(o,l),f=t.minFilter;return t.minFilter===ns&&(t.minFilter=Ri),new py(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,s,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}}const Tf=new Q,gy=new Q,_y=new dt;class Jr{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Tf.subVectors(s,t).cross(gy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Tf),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||_y.getNormalMatrix(e),o=this.coplanarPoint(Tf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new du,kl=new Q;class Bd{constructor(e=new Jr,t=new Jr,s=new Jr,o=new Jr,l=new Jr,c=new Jr){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Yi){const s=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],h=o[3],m=o[4],g=o[5],v=o[6],x=o[7],y=o[8],E=o[9],T=o[10],S=o[11],p=o[12],b=o[13],P=o[14],A=o[15];if(s[0].setComponents(h-l,x-m,S-y,A-p).normalize(),s[1].setComponents(h+l,x+m,S+y,A+p).normalize(),s[2].setComponents(h+c,x+g,S+E,A+b).normalize(),s[3].setComponents(h-c,x-g,S-E,A-b).normalize(),s[4].setComponents(h-f,x-v,S-T,A-P).normalize(),t===Yi)s[5].setComponents(h+f,x+v,S+T,A+P).normalize();else if(t===iu)s[5].setComponents(f,v,T,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(kl.x=o.normal.x>0?e.max.x:e.min.x,kl.y=o.normal.y>0?e.max.y:e.min.y,kl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function w_(){let i=null,e=!1,t=null,s=null;function o(l,c){t(l,c),s=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function vy(i){const e=new WeakMap;function t(f,h){const m=f.array,g=f.usage,v=m.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,m,g),f.onUploadCallback();let y;if(m instanceof Float32Array)y=i.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=i.SHORT;else if(m instanceof Uint32Array)y=i.UNSIGNED_INT;else if(m instanceof Int32Array)y=i.INT;else if(m instanceof Int8Array)y=i.BYTE;else if(m instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,h,m){const g=h.array,v=h.updateRanges;if(i.bindBuffer(m,f),v.length===0)i.bufferSubData(m,0,g);else{v.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<v.length;y++){const E=v[x],T=v[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,v[x]=T)}v.length=x+1;for(let y=0,E=v.length;y<E;y++){const T=v[y];i.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(i.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,f,h),m.version=f.version}}return{get:o,remove:l,update:c}}class hu extends vi{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(s),h=Math.floor(o),m=f+1,g=h+1,v=e/f,x=t/h,y=[],E=[],T=[],S=[];for(let p=0;p<g;p++){const b=p*x-c;for(let P=0;P<m;P++){const A=P*v-l;E.push(A,-b,0),T.push(0,0,1),S.push(P/f),S.push(1-p/h)}}for(let p=0;p<h;p++)for(let b=0;b<f;b++){const P=b+m*p,A=b+m*(p+1),q=b+1+m*(p+1),O=b+1+m*p;y.push(P,A,O),y.push(A,q,O)}this.setIndex(y),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(T,3)),this.setAttribute("uv",new kn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.width,e.height,e.widthSegments,e.heightSegments)}}var xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,My=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ry=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,by=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Py=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ly=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ny=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ky=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,By=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$y="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ky=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,aS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_S=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ES=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,CS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,US=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,IS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,VS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,YS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$S=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,RE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:xy,alphahash_pars_fragment:yy,alphamap_fragment:Sy,alphamap_pars_fragment:Ey,alphatest_fragment:My,alphatest_pars_fragment:Ty,aomap_fragment:wy,aomap_pars_fragment:Ay,batching_pars_vertex:Ry,batching_vertex:Cy,begin_vertex:by,beginnormal_vertex:Py,bsdfs:Ly,iridescence_fragment:Dy,bumpmap_pars_fragment:Ny,clipping_planes_fragment:Uy,clipping_planes_pars_fragment:Iy,clipping_planes_pars_vertex:Oy,clipping_planes_vertex:Fy,color_fragment:ky,color_pars_fragment:By,color_pars_vertex:zy,color_vertex:Hy,common:Vy,cube_uv_reflection_fragment:Gy,defaultnormal_vertex:Wy,displacementmap_pars_vertex:jy,displacementmap_vertex:Xy,emissivemap_fragment:qy,emissivemap_pars_fragment:Yy,colorspace_fragment:$y,colorspace_pars_fragment:Ky,envmap_fragment:Zy,envmap_common_pars_fragment:Jy,envmap_pars_fragment:Qy,envmap_pars_vertex:eS,envmap_physical_pars_fragment:fS,envmap_vertex:tS,fog_vertex:nS,fog_pars_vertex:iS,fog_fragment:rS,fog_pars_fragment:sS,gradientmap_pars_fragment:oS,lightmap_pars_fragment:aS,lights_lambert_fragment:lS,lights_lambert_pars_fragment:uS,lights_pars_begin:cS,lights_toon_fragment:dS,lights_toon_pars_fragment:hS,lights_phong_fragment:pS,lights_phong_pars_fragment:mS,lights_physical_fragment:gS,lights_physical_pars_fragment:_S,lights_fragment_begin:vS,lights_fragment_maps:xS,lights_fragment_end:yS,logdepthbuf_fragment:SS,logdepthbuf_pars_fragment:ES,logdepthbuf_pars_vertex:MS,logdepthbuf_vertex:TS,map_fragment:wS,map_pars_fragment:AS,map_particle_fragment:RS,map_particle_pars_fragment:CS,metalnessmap_fragment:bS,metalnessmap_pars_fragment:PS,morphinstance_vertex:LS,morphcolor_vertex:DS,morphnormal_vertex:NS,morphtarget_pars_vertex:US,morphtarget_vertex:IS,normal_fragment_begin:OS,normal_fragment_maps:FS,normal_pars_fragment:kS,normal_pars_vertex:BS,normal_vertex:zS,normalmap_pars_fragment:HS,clearcoat_normal_fragment_begin:VS,clearcoat_normal_fragment_maps:GS,clearcoat_pars_fragment:WS,iridescence_pars_fragment:jS,opaque_fragment:XS,packing:qS,premultiplied_alpha_fragment:YS,project_vertex:$S,dithering_fragment:KS,dithering_pars_fragment:ZS,roughnessmap_fragment:JS,roughnessmap_pars_fragment:QS,shadowmap_pars_fragment:eE,shadowmap_pars_vertex:tE,shadowmap_vertex:nE,shadowmask_pars_fragment:iE,skinbase_vertex:rE,skinning_pars_vertex:sE,skinning_vertex:oE,skinnormal_vertex:aE,specularmap_fragment:lE,specularmap_pars_fragment:uE,tonemapping_fragment:cE,tonemapping_pars_fragment:fE,transmission_fragment:dE,transmission_pars_fragment:hE,uv_pars_fragment:pE,uv_pars_vertex:mE,uv_vertex:gE,worldpos_vertex:_E,background_vert:vE,background_frag:xE,backgroundCube_vert:yE,backgroundCube_frag:SE,cube_vert:EE,cube_frag:ME,depth_vert:TE,depth_frag:wE,distanceRGBA_vert:AE,distanceRGBA_frag:RE,equirect_vert:CE,equirect_frag:bE,linedashed_vert:PE,linedashed_frag:LE,meshbasic_vert:DE,meshbasic_frag:NE,meshlambert_vert:UE,meshlambert_frag:IE,meshmatcap_vert:OE,meshmatcap_frag:FE,meshnormal_vert:kE,meshnormal_frag:BE,meshphong_vert:zE,meshphong_frag:HE,meshphysical_vert:VE,meshphysical_frag:GE,meshtoon_vert:WE,meshtoon_frag:jE,points_vert:XE,points_frag:qE,shadow_vert:YE,shadow_frag:$E,sprite_vert:KE,sprite_frag:ZE},Ne={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},wi={basic:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:wn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:wn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:wn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:wn([Ne.points,Ne.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:wn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:wn([Ne.common,Ne.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:wn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:wn([Ne.sprite,Ne.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:wn([Ne.common,Ne.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:wn([Ne.lights,Ne.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};wi.physical={uniforms:wn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Bl={r:0,b:0,g:0},Kr=new bi,JE=new Bt;function QE(i,e,t,s,o,l,c){const f=new Rt(0);let h=l===!0?0:1,m,g,v=null,x=0,y=null;function E(b){let P=b.isScene===!0?b.background:null;return P&&P.isTexture&&(P=(b.backgroundBlurriness>0?t:e).get(P)),P}function T(b){let P=!1;const A=E(b);A===null?p(f,h):A&&A.isColor&&(p(A,1),P=!0);const q=i.xr.getEnvironmentBlendMode();q==="additive"?s.buffers.color.setClear(0,0,0,1,c):q==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(i.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(b,P){const A=E(P);A&&(A.isCubeTexture||A.mapping===cu)?(g===void 0&&(g=new Fn(new ca(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:oo(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(q,O,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Kr.copy(P.backgroundRotation),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),g.material.uniforms.envMap.value=A,g.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(JE.makeRotationFromEuler(Kr)),g.material.toneMapped=Mt.getTransfer(A.colorSpace)!==Lt,(v!==A||x!==A.version||y!==i.toneMapping)&&(g.material.needsUpdate=!0,v=A,x=A.version,y=i.toneMapping),g.layers.enableAll(),b.unshift(g,g.geometry,g.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new Fn(new hu(2,2),new Pr({name:"BackgroundMaterial",uniforms:oo(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(A.colorSpace)!==Lt,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(v!==A||x!==A.version||y!==i.toneMapping)&&(m.material.needsUpdate=!0,v=A,x=A.version,y=i.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null))}function p(b,P){b.getRGB(Bl,E_(i)),s.buffers.color.setClear(Bl.r,Bl.g,Bl.b,P,c)}return{getClearColor:function(){return f},setClearColor:function(b,P=1){f.set(b),h=P,p(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,p(f,h)},render:T,addToRenderList:S}}function eM(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},o=x(null);let l=o,c=!1;function f(C,k,ue,te,fe){let pe=!1;const ce=v(te,ue,k);l!==ce&&(l=ce,m(l.object)),pe=y(C,te,ue,fe),pe&&E(C,te,ue,fe),fe!==null&&e.update(fe,i.ELEMENT_ARRAY_BUFFER),(pe||c)&&(c=!1,A(C,k,ue,te),fe!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function h(){return i.createVertexArray()}function m(C){return i.bindVertexArray(C)}function g(C){return i.deleteVertexArray(C)}function v(C,k,ue){const te=ue.wireframe===!0;let fe=s[C.id];fe===void 0&&(fe={},s[C.id]=fe);let pe=fe[k.id];pe===void 0&&(pe={},fe[k.id]=pe);let ce=pe[te];return ce===void 0&&(ce=x(h()),pe[te]=ce),ce}function x(C){const k=[],ue=[],te=[];for(let fe=0;fe<t;fe++)k[fe]=0,ue[fe]=0,te[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ue,attributeDivisors:te,object:C,attributes:{},index:null}}function y(C,k,ue,te){const fe=l.attributes,pe=k.attributes;let ce=0;const de=ue.getAttributes();for(const B in de)if(de[B].location>=0){const se=fe[B];let I=pe[B];if(I===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(I=C.instanceColor)),se===void 0||se.attribute!==I||I&&se.data!==I.data)return!0;ce++}return l.attributesNum!==ce||l.index!==te}function E(C,k,ue,te){const fe={},pe=k.attributes;let ce=0;const de=ue.getAttributes();for(const B in de)if(de[B].location>=0){let se=pe[B];se===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const I={};I.attribute=se,se&&se.data&&(I.data=se.data),fe[B]=I,ce++}l.attributes=fe,l.attributesNum=ce,l.index=te}function T(){const C=l.newAttributes;for(let k=0,ue=C.length;k<ue;k++)C[k]=0}function S(C){p(C,0)}function p(C,k){const ue=l.newAttributes,te=l.enabledAttributes,fe=l.attributeDivisors;ue[C]=1,te[C]===0&&(i.enableVertexAttribArray(C),te[C]=1),fe[C]!==k&&(i.vertexAttribDivisor(C,k),fe[C]=k)}function b(){const C=l.newAttributes,k=l.enabledAttributes;for(let ue=0,te=k.length;ue<te;ue++)k[ue]!==C[ue]&&(i.disableVertexAttribArray(ue),k[ue]=0)}function P(C,k,ue,te,fe,pe,ce){ce===!0?i.vertexAttribIPointer(C,k,ue,fe,pe):i.vertexAttribPointer(C,k,ue,te,fe,pe)}function A(C,k,ue,te){T();const fe=te.attributes,pe=ue.getAttributes(),ce=k.defaultAttributeValues;for(const de in pe){const B=pe[de];if(B.location>=0){let he=fe[de];if(he===void 0&&(de==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),de==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),he!==void 0){const se=he.normalized,I=he.itemSize,K=e.get(he);if(K===void 0)continue;const be=K.buffer,X=K.type,oe=K.bytesPerElement,ve=X===i.INT||X===i.UNSIGNED_INT||he.gpuType===Nd;if(he.isInterleavedBufferAttribute){const ae=he.data,Te=ae.stride,Ue=he.offset;if(ae.isInstancedInterleavedBuffer){for(let Ze=0;Ze<B.locationSize;Ze++)p(B.location+Ze,ae.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ze=0;Ze<B.locationSize;Ze++)S(B.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,be);for(let Ze=0;Ze<B.locationSize;Ze++)P(B.location+Ze,I/B.locationSize,X,se,Te*oe,(Ue+I/B.locationSize*Ze)*oe,ve)}else{if(he.isInstancedBufferAttribute){for(let ae=0;ae<B.locationSize;ae++)p(B.location+ae,he.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ae=0;ae<B.locationSize;ae++)S(B.location+ae);i.bindBuffer(i.ARRAY_BUFFER,be);for(let ae=0;ae<B.locationSize;ae++)P(B.location+ae,I/B.locationSize,X,se,I*oe,I/B.locationSize*ae*oe,ve)}}else if(ce!==void 0){const se=ce[de];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(B.location,se);break;case 3:i.vertexAttrib3fv(B.location,se);break;case 4:i.vertexAttrib4fv(B.location,se);break;default:i.vertexAttrib1fv(B.location,se)}}}}b()}function q(){G();for(const C in s){const k=s[C];for(const ue in k){const te=k[ue];for(const fe in te)g(te[fe].object),delete te[fe];delete k[ue]}delete s[C]}}function O(C){if(s[C.id]===void 0)return;const k=s[C.id];for(const ue in k){const te=k[ue];for(const fe in te)g(te[fe].object),delete te[fe];delete k[ue]}delete s[C.id]}function U(C){for(const k in s){const ue=s[k];if(ue[C.id]===void 0)continue;const te=ue[C.id];for(const fe in te)g(te[fe].object),delete te[fe];delete ue[C.id]}}function G(){L(),c=!0,l!==o&&(l=o,m(l.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:G,resetDefaultState:L,dispose:q,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:S,disableUnusedAttributes:b}}function tM(i,e,t){let s;function o(m){s=m}function l(m,g){i.drawArrays(s,m,g),t.update(g,s,1)}function c(m,g,v){v!==0&&(i.drawArraysInstanced(s,m,g,v),t.update(g,s,v))}function f(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,v);let y=0;for(let E=0;E<v;E++)y+=g[E];t.update(y,s,1)}function h(m,g,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)c(m[E],g[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(s,m,0,g,0,x,0,v);let E=0;for(let T=0;T<v;T++)E+=g[T]*x[T];t.update(E,s,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function nM(i,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(U){return!(U!==gi&&s.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const G=U===oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Ki&&s.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==qi&&!G)}function h(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),q=E>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:p,maxVertexUniforms:b,maxVaryings:P,maxFragmentUniforms:A,vertexTextures:q,maxSamples:O}}function iM(i){const e=this;let t=null,s=0,o=!1,l=!1;const c=new Jr,f=new dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||s!==0||o;return o=x,s=v.length,y},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){t=g(v,x,0)},this.setState=function(v,x,y){const E=v.clippingPlanes,T=v.clipIntersection,S=v.clipShadows,p=i.get(v);if(!o||E===null||E.length===0||l&&!S)l?g(null):m();else{const b=l?0:s,P=b*4;let A=p.clippingState||null;h.value=A,A=g(E,x,P,y);for(let q=0;q!==P;++q)A[q]=t[q];p.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=b}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(v,x,y,E){const T=v!==null?v.length:0;let S=null;if(T!==0){if(S=h.value,E!==!0||S===null){const p=y+T*4,b=x.matrixWorldInverse;f.getNormalMatrix(b),(S===null||S.length<p)&&(S=new Float32Array(p));for(let P=0,A=y;P!==T;++P,A+=4)c.copy(v[P]).applyMatrix4(b,f),c.normal.toArray(S,A),S[A+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function rM(i){let e=new WeakMap;function t(c,f){return f===Zf?c.mapping=no:f===Jf&&(c.mapping=io),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===Zf||f===Jf)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const m=new my(h.height);return m.fromEquirectangularTexture(i,c),e.set(c,m),c.addEventListener("dispose",o),t(m.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class A_ extends M_{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $s=4,Qm=[.125,.215,.35,.446,.526,.582],ts=20,wf=new A_,eg=new Rt;let Af=null,Rf=0,Cf=0,bf=!1;const Qr=(1+Math.sqrt(5))/2,qs=1/Qr,tg=[new Q(-Qr,qs,0),new Q(Qr,qs,0),new Q(-qs,0,Qr),new Q(qs,0,Qr),new Q(0,Qr,-qs),new Q(0,Qr,qs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class ng{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){Af=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel(),bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Af,Rf,Cf),this._renderer.xr.enabled=bf,e.scissorTest=!1,zl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Af=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel(),bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:oa,format:gi,colorSpace:ao,depthBuffer:!1},o=ig(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ig(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sM(l)),this._blurMaterial=oM(l,e,t)}return o}_compileMaterial(e){const t=new Fn(this._lodPlanes[0],e);this._renderer.compile(t,wf)}_sceneToCubeUV(e,t,s,o){const f=new ni(90,1,t,s),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(eg),g.toneMapping=Cr,g.autoClear=!1;const y=new su({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),E=new Fn(new ca,y);let T=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,T=!0):(y.color.copy(eg),T=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(f.up.set(0,h[p],0),f.lookAt(m[p],0,0)):b===1?(f.up.set(0,0,h[p]),f.lookAt(0,m[p],0)):(f.up.set(0,h[p],0),f.lookAt(0,0,m[p]));const P=this._cubeSize;zl(o,b*P,p>2?P:0,P,P),g.setRenderTarget(o),T&&g.render(E,f),g.render(e,f)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=S}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===no||e.mapping===io;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rg());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Fn(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;zl(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(c,wf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=tg[(o-l-1)%tg.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,o,"latitudinal",l),this._halfBlur(c,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,c,f){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Fn(this._lodPlanes[o],m),x=m.uniforms,y=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*ts-1),T=l/E,S=isFinite(l)?1+Math.floor(g*T):ts;S>ts&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ts}`);const p=[];let b=0;for(let U=0;U<ts;++U){const G=U/T,L=Math.exp(-G*G/2);p.push(L),U===0?b+=L:U<S&&(b+=2*L)}for(let U=0;U<p.length;U++)p[U]=p[U]/b;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=p,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:P}=this;x.dTheta.value=E,x.mipInt.value=P-s;const A=this._sizeLods[o],q=3*A*(o>P-$s?o-P+$s:0),O=4*(this._cubeSize-A);zl(t,q,O,3*A,2*A),h.setRenderTarget(t),h.render(v,wf)}}function sM(i){const e=[],t=[],s=[];let o=i;const l=i-$s+1+Qm.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);t.push(f);let h=1/f;c>i-$s?h=Qm[c-i+$s-1]:c===0&&(h=0),s.push(h);const m=1/(f-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,E=6,T=3,S=2,p=1,b=new Float32Array(T*E*y),P=new Float32Array(S*E*y),A=new Float32Array(p*E*y);for(let O=0;O<y;O++){const U=O%3*2/3-1,G=O>2?0:-1,L=[U,G,0,U+2/3,G,0,U+2/3,G+1,0,U,G,0,U+2/3,G+1,0,U,G+1,0];b.set(L,T*E*O),P.set(x,S*E*O);const C=[O,O,O,O,O,O];A.set(C,p*E*O)}const q=new vi;q.setAttribute("position",new Ci(b,T)),q.setAttribute("uv",new Ci(P,S)),q.setAttribute("faceIndex",new Ci(A,p)),e.push(q),o>$s&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function ig(i,e,t){const s=new os(i,e,t);return s.texture.mapping=cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function zl(i,e,t,s,o){i.viewport.set(e,t,s,o),i.scissor.set(e,t,s,o)}function oM(i,e,t){const s=new Float32Array(ts),o=new Q(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function rg(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function sg(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function zd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function aM(i){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const h=f.mapping,m=h===Zf||h===Jf,g=h===no||h===io;if(m||g){let v=e.get(f);const x=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new ng(i)),v=m?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const y=f.image;return m&&y&&y.height>0||g&&y&&o(y)?(t===null&&(t=new ng(i)),v=m?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function o(f){let h=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&h++;return h===m}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function lM(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&ta("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function uM(i,e,t,s){const o={},l=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const T=x.morphAttributes[E];for(let S=0,p=T.length;S<p;S++)e.remove(T[S])}x.removeEventListener("dispose",c),delete o[x.id];const y=l.get(x);y&&(e.remove(y),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(v,x){return o[x.id]===!0||(x.addEventListener("dispose",c),o[x.id]=!0,t.memory.geometries++),x}function h(v){const x=v.attributes;for(const E in x)e.update(x[E],i.ARRAY_BUFFER);const y=v.morphAttributes;for(const E in y){const T=y[E];for(let S=0,p=T.length;S<p;S++)e.update(T[S],i.ARRAY_BUFFER)}}function m(v){const x=[],y=v.index,E=v.attributes.position;let T=0;if(y!==null){const b=y.array;T=y.version;for(let P=0,A=b.length;P<A;P+=3){const q=b[P+0],O=b[P+1],U=b[P+2];x.push(q,O,O,U,U,q)}}else if(E!==void 0){const b=E.array;T=E.version;for(let P=0,A=b.length/3-1;P<A;P+=3){const q=P+0,O=P+1,U=P+2;x.push(q,O,O,U,U,q)}}else return;const S=new(p_(x)?S_:y_)(x,1);S.version=T;const p=l.get(v);p&&e.remove(p),l.set(v,S)}function g(v){const x=l.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&m(v)}else m(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:g}}function cM(i,e,t){let s;function o(x){s=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,y){i.drawElements(s,y,l,x*c),t.update(y,s,1)}function m(x,y,E){E!==0&&(i.drawElementsInstanced(s,y,l,x*c,E),t.update(y,s,E))}function g(x,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,l,x,0,E);let S=0;for(let p=0;p<E;p++)S+=y[p];t.update(S,s,1)}function v(x,y,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let p=0;p<x.length;p++)m(x[p]/c,y[p],T[p]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,l,x,0,T,0,E);let p=0;for(let b=0;b<E;b++)p+=y[b]*T[b];t.update(p,s,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function fM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=f*(l/3);break;case i.LINES:t.lines+=f*(l/2);break;case i.LINE_STRIP:t.lines+=f*(l-1);break;case i.LINE_LOOP:t.lines+=f*l;break;case i.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function dM(i,e,t){const s=new WeakMap,o=new Wt;function l(c,f,h){const m=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(f);if(x===void 0||x.count!==v){let C=function(){G.dispose(),s.delete(f),f.removeEventListener("dispose",C)};var y=C;x!==void 0&&x.texture.dispose();const E=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,p=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let A=0;E===!0&&(A=1),T===!0&&(A=2),S===!0&&(A=3);let q=f.attributes.position.count*A,O=1;q>e.maxTextureSize&&(O=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const U=new Float32Array(q*O*4*v),G=new g_(U,q,O,v);G.type=qi,G.needsUpdate=!0;const L=A*4;for(let k=0;k<v;k++){const ue=p[k],te=b[k],fe=P[k],pe=q*O*4*k;for(let ce=0;ce<ue.count;ce++){const de=ce*L;E===!0&&(o.fromBufferAttribute(ue,ce),U[pe+de+0]=o.x,U[pe+de+1]=o.y,U[pe+de+2]=o.z,U[pe+de+3]=0),T===!0&&(o.fromBufferAttribute(te,ce),U[pe+de+4]=o.x,U[pe+de+5]=o.y,U[pe+de+6]=o.z,U[pe+de+7]=0),S===!0&&(o.fromBufferAttribute(fe,ce),U[pe+de+8]=o.x,U[pe+de+9]=o.y,U[pe+de+10]=o.z,U[pe+de+11]=fe.itemSize===4?o.w:1)}}x={count:v,texture:G,size:new Tt(q,O)},s.set(f,x),f.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const T=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(i,"morphTargetBaseInfluence",T),h.getUniforms().setValue(i,"morphTargetInfluences",m)}h.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:l}}function hM(i,e,t,s){let o=new WeakMap;function l(h){const m=s.render.frame,g=h.geometry,v=e.get(h,g);if(o.get(v)!==m&&(e.update(v),o.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==m&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return v}function c(){o=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:c}}class R_ extends Rn{constructor(e,t,s,o,l,c,f,h,m,g=Qs){if(g!==Qs&&g!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===Qs&&(s=ss),s===void 0&&g===so&&(s=ro),super(null,o,l,c,f,h,g,s,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:_i,this.minFilter=h!==void 0?h:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const C_=new Rn,og=new R_(1,1),b_=new g_,P_=new Qx,L_=new T_,ag=[],lg=[],ug=new Float32Array(16),cg=new Float32Array(9),fg=new Float32Array(4);function co(i,e,t){const s=i[0];if(s<=0||s>0)return i;const o=e*t;let l=ag[o];if(l===void 0&&(l=new Float32Array(o),ag[o]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,i[c].toArray(l,f)}return l}function Jt(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function Qt(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function pu(i,e){let t=lg[e];t===void 0&&(t=new Int32Array(e),lg[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function pM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2fv(this.addr,e),Qt(t,e)}}function gM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;i.uniform3fv(this.addr,e),Qt(t,e)}}function _M(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4fv(this.addr,e),Qt(t,e)}}function vM(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,s))return;fg.set(s),i.uniformMatrix2fv(this.addr,!1,fg),Qt(t,s)}}function xM(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,s))return;cg.set(s),i.uniformMatrix3fv(this.addr,!1,cg),Qt(t,s)}}function yM(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(Jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,s))return;ug.set(s),i.uniformMatrix4fv(this.addr,!1,ug),Qt(t,s)}}function SM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function EM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2iv(this.addr,e),Qt(t,e)}}function MM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3iv(this.addr,e),Qt(t,e)}}function TM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4iv(this.addr,e),Qt(t,e)}}function wM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function AM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2uiv(this.addr,e),Qt(t,e)}}function RM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3uiv(this.addr,e),Qt(t,e)}}function CM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4uiv(this.addr,e),Qt(t,e)}}function bM(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o);let l;this.type===i.SAMPLER_2D_SHADOW?(og.compareFunction=h_,l=og):l=C_,t.setTexture2D(e||l,o)}function PM(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||P_,o)}function LM(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||L_,o)}function DM(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||b_,o)}function NM(i){switch(i){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return _M;case 35674:return vM;case 35675:return xM;case 35676:return yM;case 5124:case 35670:return SM;case 35667:case 35671:return EM;case 35668:case 35672:return MM;case 35669:case 35673:return TM;case 5125:return wM;case 36294:return AM;case 36295:return RM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return LM;case 36289:case 36303:case 36311:case 36292:return DM}}function UM(i,e){i.uniform1fv(this.addr,e)}function IM(i,e){const t=co(e,this.size,2);i.uniform2fv(this.addr,t)}function OM(i,e){const t=co(e,this.size,3);i.uniform3fv(this.addr,t)}function FM(i,e){const t=co(e,this.size,4);i.uniform4fv(this.addr,t)}function kM(i,e){const t=co(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function BM(i,e){const t=co(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zM(i,e){const t=co(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function HM(i,e){i.uniform1iv(this.addr,e)}function VM(i,e){i.uniform2iv(this.addr,e)}function GM(i,e){i.uniform3iv(this.addr,e)}function WM(i,e){i.uniform4iv(this.addr,e)}function jM(i,e){i.uniform1uiv(this.addr,e)}function XM(i,e){i.uniform2uiv(this.addr,e)}function qM(i,e){i.uniform3uiv(this.addr,e)}function YM(i,e){i.uniform4uiv(this.addr,e)}function $M(i,e,t){const s=this.cache,o=e.length,l=pu(t,o);Jt(s,l)||(i.uniform1iv(this.addr,l),Qt(s,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||C_,l[c])}function KM(i,e,t){const s=this.cache,o=e.length,l=pu(t,o);Jt(s,l)||(i.uniform1iv(this.addr,l),Qt(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||P_,l[c])}function ZM(i,e,t){const s=this.cache,o=e.length,l=pu(t,o);Jt(s,l)||(i.uniform1iv(this.addr,l),Qt(s,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||L_,l[c])}function JM(i,e,t){const s=this.cache,o=e.length,l=pu(t,o);Jt(s,l)||(i.uniform1iv(this.addr,l),Qt(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||b_,l[c])}function QM(i){switch(i){case 5126:return UM;case 35664:return IM;case 35665:return OM;case 35666:return FM;case 35674:return kM;case 35675:return BM;case 35676:return zM;case 5124:case 35670:return HM;case 35667:case 35671:return VM;case 35668:case 35672:return GM;case 35669:case 35673:return WM;case 5125:return jM;case 36294:return XM;case 36295:return qM;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}class eT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=NM(t.type)}}class tT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=QM(t.type)}}class nT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const Pf=/(\w+)(\])?(\[|\.)?/g;function dg(i,e){i.seq.push(e),i.map[e.id]=e}function iT(i,e,t){const s=i.name,o=s.length;for(Pf.lastIndex=0;;){const l=Pf.exec(s),c=Pf.lastIndex;let f=l[1];const h=l[2]==="]",m=l[3];if(h&&(f=f|0),m===void 0||m==="["&&c+2===o){dg(t,m===void 0?new eT(f,i,e):new tT(f,i,e));break}else{let v=t.map[f];v===void 0&&(v=new nT(f),dg(t,v)),t=v}}}class Zl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);iT(l,c,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&s.push(c)}return s}}function hg(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const rT=37297;let sT=0;function oT(i,e){const t=i.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const pg=new dt;function aT(i){Mt._getMatrix(pg,Mt.workingColorSpace,i);const e=`mat3( ${pg.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(i)){case fu:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function mg(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),o=i.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+oT(i.getShaderSource(e),c)}else return o}function lT(i,e){const t=aT(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function uT(i,e){let t;switch(e){case Ax:t="Linear";break;case Rx:t="Reinhard";break;case Cx:t="Cineon";break;case bx:t="ACESFilmic";break;case Lx:t="AgX";break;case Dx:t="Neutral";break;case Px:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hl=new Q;function cT(){Mt.getLuminanceCoefficients(Hl);const i=Hl.x.toFixed(4),e=Hl.y.toFixed(4),t=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function dT(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function hT(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=i.getActiveAttrib(e,o),c=l.name;let f=1;l.type===i.FLOAT_MAT2&&(f=2),l.type===i.FLOAT_MAT3&&(f=3),l.type===i.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:f}}return t}function na(i){return i!==""}function gg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _g(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(i){return i.replace(pT,gT)}const mT=new Map;function gT(i,e){let t=ht[e];if(t===void 0){const s=mT.get(e);if(s!==void 0)t=ht[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Rd(t)}const _T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vg(i){return i.replace(_T,vT)}function vT(i,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function xg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xT(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qg?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sx?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function yT(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case cu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ST(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case io:e="ENVMAP_MODE_REFRACTION";break}return e}function ET(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case e_:e="ENVMAP_BLENDING_MULTIPLY";break;case Tx:e="ENVMAP_BLENDING_MIX";break;case wx:e="ENVMAP_BLENDING_ADD";break}return e}function MT(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function TT(i,e,t,s){const o=i.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=xT(t),m=yT(t),g=ST(t),v=ET(t),x=MT(t),y=fT(t),E=dT(l),T=o.createProgram();let S,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(na).join(`
`),S.length>0&&(S+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(na).join(`
`),p.length>0&&(p+=`
`)):(S=[xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),p=[xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cr?"#define TONE_MAPPING":"",t.toneMapping!==Cr?ht.tonemapping_pars_fragment:"",t.toneMapping!==Cr?uT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,lT("linearToOutputTexel",t.outputColorSpace),cT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),c=Rd(c),c=gg(c,t),c=_g(c,t),f=Rd(f),f=gg(f,t),f=_g(f,t),c=vg(c),f=vg(f),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,p=["#define varying in",t.glslVersion===Dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const P=b+S+c,A=b+p+f,q=hg(o,o.VERTEX_SHADER,P),O=hg(o,o.FRAGMENT_SHADER,A);o.attachShader(T,q),o.attachShader(T,O),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function U(k){if(i.debug.checkShaderErrors){const ue=o.getProgramInfoLog(T).trim(),te=o.getShaderInfoLog(q).trim(),fe=o.getShaderInfoLog(O).trim();let pe=!0,ce=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(pe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,T,q,O);else{const de=mg(o,q,"vertex"),B=mg(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ue+`
`+de+`
`+B)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(te===""||fe==="")&&(ce=!1);ce&&(k.diagnostics={runnable:pe,programLog:ue,vertexShader:{log:te,prefix:S},fragmentShader:{log:fe,prefix:p}})}o.deleteShader(q),o.deleteShader(O),G=new Zl(o,T),L=hT(o,T)}let G;this.getUniforms=function(){return G===void 0&&U(this),G};let L;this.getAttributes=function(){return L===void 0&&U(this),L};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,rT)),C},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=q,this.fragmentShader=O,this}let wT=0;class AT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new RT(e),t.set(e,s)),s}}class RT{constructor(e){this.id=wT++,this.code=e,this.usedTimes=0}}function CT(i,e,t,s,o,l,c){const f=new v_,h=new AT,m=new Set,g=[],v=o.logarithmicDepthBuffer,x=o.vertexTextures;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return m.add(L),L===0?"uv":`uv${L}`}function S(L,C,k,ue,te){const fe=ue.fog,pe=te.geometry,ce=L.isMeshStandardMaterial?ue.environment:null,de=(L.isMeshStandardMaterial?t:e).get(L.envMap||ce),B=de&&de.mapping===cu?de.image.height:null,he=E[L.type];L.precision!==null&&(y=o.getMaxPrecision(L.precision),y!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",y,"instead."));const se=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,I=se!==void 0?se.length:0;let K=0;pe.morphAttributes.position!==void 0&&(K=1),pe.morphAttributes.normal!==void 0&&(K=2),pe.morphAttributes.color!==void 0&&(K=3);let be,X,oe,ve;if(he){const St=wi[he];be=St.vertexShader,X=St.fragmentShader}else be=L.vertexShader,X=L.fragmentShader,h.update(L),oe=h.getVertexShaderID(L),ve=h.getFragmentShaderID(L);const ae=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Ue=te.isInstancedMesh===!0,Ze=te.isBatchedMesh===!0,vt=!!L.map,et=!!L.matcap,pt=!!de,V=!!L.aoMap,en=!!L.lightMap,ft=!!L.bumpMap,nt=!!L.normalMap,Ee=!!L.displacementMap,ot=!!L.emissiveMap,ze=!!L.metalnessMap,D=!!L.roughnessMap,w=L.anisotropy>0,J=L.clearcoat>0,me=L.dispersion>0,ye=L.iridescence>0,ge=L.sheen>0,Xe=L.transmission>0,Le=w&&!!L.anisotropyMap,ke=J&&!!L.clearcoatMap,mt=J&&!!L.clearcoatNormalMap,we=J&&!!L.clearcoatRoughnessMap,He=ye&&!!L.iridescenceMap,tt=ye&&!!L.iridescenceThicknessMap,it=ge&&!!L.sheenColorMap,Ve=ge&&!!L.sheenRoughnessMap,gt=!!L.specularMap,lt=!!L.specularColorMap,bt=!!L.specularIntensityMap,W=Xe&&!!L.transmissionMap,De=Xe&&!!L.thicknessMap,le=!!L.gradientMap,_e=!!L.alphaMap,Oe=L.alphaTest>0,Ie=!!L.alphaHash,ut=!!L.extensions;let It=Cr;L.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(It=i.toneMapping);const Yt={shaderID:he,shaderType:L.type,shaderName:L.name,vertexShader:be,fragmentShader:X,defines:L.defines,customVertexShaderID:oe,customFragmentShaderID:ve,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:y,batching:Ze,batchingColor:Ze&&te._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&te.instanceColor!==null,instancingMorph:Ue&&te.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ao,alphaToCoverage:!!L.alphaToCoverage,map:vt,matcap:et,envMap:pt,envMapMode:pt&&de.mapping,envMapCubeUVHeight:B,aoMap:V,lightMap:en,bumpMap:ft,normalMap:nt,displacementMap:x&&Ee,emissiveMap:ot,normalMapObjectSpace:nt&&L.normalMapType===Ox,normalMapTangentSpace:nt&&L.normalMapType===d_,metalnessMap:ze,roughnessMap:D,anisotropy:w,anisotropyMap:Le,clearcoat:J,clearcoatMap:ke,clearcoatNormalMap:mt,clearcoatRoughnessMap:we,dispersion:me,iridescence:ye,iridescenceMap:He,iridescenceThicknessMap:tt,sheen:ge,sheenColorMap:it,sheenRoughnessMap:Ve,specularMap:gt,specularColorMap:lt,specularIntensityMap:bt,transmission:Xe,transmissionMap:W,thicknessMap:De,gradientMap:le,opaque:L.transparent===!1&&L.blending===Js&&L.alphaToCoverage===!1,alphaMap:_e,alphaTest:Oe,alphaHash:Ie,combine:L.combine,mapUv:vt&&T(L.map.channel),aoMapUv:V&&T(L.aoMap.channel),lightMapUv:en&&T(L.lightMap.channel),bumpMapUv:ft&&T(L.bumpMap.channel),normalMapUv:nt&&T(L.normalMap.channel),displacementMapUv:Ee&&T(L.displacementMap.channel),emissiveMapUv:ot&&T(L.emissiveMap.channel),metalnessMapUv:ze&&T(L.metalnessMap.channel),roughnessMapUv:D&&T(L.roughnessMap.channel),anisotropyMapUv:Le&&T(L.anisotropyMap.channel),clearcoatMapUv:ke&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:mt&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:it&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&T(L.sheenRoughnessMap.channel),specularMapUv:gt&&T(L.specularMap.channel),specularColorMapUv:lt&&T(L.specularColorMap.channel),specularIntensityMapUv:bt&&T(L.specularIntensityMap.channel),transmissionMapUv:W&&T(L.transmissionMap.channel),thicknessMapUv:De&&T(L.thicknessMap.channel),alphaMapUv:_e&&T(L.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(nt||w),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!pe.attributes.uv&&(vt||_e),fog:!!fe,useFog:L.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Te,skinning:te.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:K,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:L.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:vt&&L.map.isVideoTexture===!0&&Mt.getTransfer(L.map.colorSpace)===Lt,decodeVideoTextureEmissive:ot&&L.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(L.emissiveMap.colorSpace)===Lt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Ai,flipSided:L.side===An,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:ut&&L.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&L.extensions.multiDraw===!0||Ze)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Yt.vertexUv1s=m.has(1),Yt.vertexUv2s=m.has(2),Yt.vertexUv3s=m.has(3),m.clear(),Yt}function p(L){const C=[];if(L.shaderID?C.push(L.shaderID):(C.push(L.customVertexShaderID),C.push(L.customFragmentShaderID)),L.defines!==void 0)for(const k in L.defines)C.push(k),C.push(L.defines[k]);return L.isRawShaderMaterial===!1&&(b(C,L),P(C,L),C.push(i.outputColorSpace)),C.push(L.customProgramCacheKey),C.join()}function b(L,C){L.push(C.precision),L.push(C.outputColorSpace),L.push(C.envMapMode),L.push(C.envMapCubeUVHeight),L.push(C.mapUv),L.push(C.alphaMapUv),L.push(C.lightMapUv),L.push(C.aoMapUv),L.push(C.bumpMapUv),L.push(C.normalMapUv),L.push(C.displacementMapUv),L.push(C.emissiveMapUv),L.push(C.metalnessMapUv),L.push(C.roughnessMapUv),L.push(C.anisotropyMapUv),L.push(C.clearcoatMapUv),L.push(C.clearcoatNormalMapUv),L.push(C.clearcoatRoughnessMapUv),L.push(C.iridescenceMapUv),L.push(C.iridescenceThicknessMapUv),L.push(C.sheenColorMapUv),L.push(C.sheenRoughnessMapUv),L.push(C.specularMapUv),L.push(C.specularColorMapUv),L.push(C.specularIntensityMapUv),L.push(C.transmissionMapUv),L.push(C.thicknessMapUv),L.push(C.combine),L.push(C.fogExp2),L.push(C.sizeAttenuation),L.push(C.morphTargetsCount),L.push(C.morphAttributeCount),L.push(C.numDirLights),L.push(C.numPointLights),L.push(C.numSpotLights),L.push(C.numSpotLightMaps),L.push(C.numHemiLights),L.push(C.numRectAreaLights),L.push(C.numDirLightShadows),L.push(C.numPointLightShadows),L.push(C.numSpotLightShadows),L.push(C.numSpotLightShadowsWithMaps),L.push(C.numLightProbes),L.push(C.shadowMapType),L.push(C.toneMapping),L.push(C.numClippingPlanes),L.push(C.numClipIntersection),L.push(C.depthPacking)}function P(L,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),L.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),L.push(f.mask)}function A(L){const C=E[L.type];let k;if(C){const ue=wi[C];k=fy.clone(ue.uniforms)}else k=L.uniforms;return k}function q(L,C){let k;for(let ue=0,te=g.length;ue<te;ue++){const fe=g[ue];if(fe.cacheKey===C){k=fe,++k.usedTimes;break}}return k===void 0&&(k=new TT(i,C,L,l),g.push(k)),k}function O(L){if(--L.usedTimes===0){const C=g.indexOf(L);g[C]=g[g.length-1],g.pop(),L.destroy()}}function U(L){h.remove(L)}function G(){h.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:A,acquireProgram:q,releaseProgram:O,releaseShaderCache:U,programs:g,dispose:G}}function bT(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let f=i.get(c);return f===void 0&&(f={},i.set(c,f)),f}function s(c){i.delete(c)}function o(c,f,h){i.get(c)[f]=h}function l(){i=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function PT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sg(){const i=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(v,x,y,E,T,S){let p=i[e];return p===void 0?(p={id:v.id,object:v,geometry:x,material:y,groupOrder:E,renderOrder:v.renderOrder,z:T,group:S},i[e]=p):(p.id=v.id,p.object=v,p.geometry=x,p.material=y,p.groupOrder=E,p.renderOrder=v.renderOrder,p.z=T,p.group=S),e++,p}function f(v,x,y,E,T,S){const p=c(v,x,y,E,T,S);y.transmission>0?s.push(p):y.transparent===!0?o.push(p):t.push(p)}function h(v,x,y,E,T,S){const p=c(v,x,y,E,T,S);y.transmission>0?s.unshift(p):y.transparent===!0?o.unshift(p):t.unshift(p)}function m(v,x){t.length>1&&t.sort(v||PT),s.length>1&&s.sort(x||yg),o.length>1&&o.sort(x||yg)}function g(){for(let v=e,x=i.length;v<x;v++){const y=i[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:f,unshift:h,finish:g,sort:m}}function LT(){let i=new WeakMap;function e(s,o){const l=i.get(s);let c;return l===void 0?(c=new Sg,i.set(s,[c])):o>=l.length?(c=new Sg,l.push(c)):c=l[o],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function DT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new Rt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return i[e.id]=t,t}}}function NT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let UT=0;function IT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function OT(i){const e=new DT,t=NT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new Q);const o=new Q,l=new Bt,c=new Bt;function f(m){let g=0,v=0,x=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let y=0,E=0,T=0,S=0,p=0,b=0,P=0,A=0,q=0,O=0,U=0;m.sort(IT);for(let L=0,C=m.length;L<C;L++){const k=m[L],ue=k.color,te=k.intensity,fe=k.distance,pe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=ue.r*te,v+=ue.g*te,x+=ue.b*te;else if(k.isLightProbe){for(let ce=0;ce<9;ce++)s.probe[ce].addScaledVector(k.sh.coefficients[ce],te);U++}else if(k.isDirectionalLight){const ce=e.get(k);if(ce.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const de=k.shadow,B=t.get(k);B.shadowIntensity=de.intensity,B.shadowBias=de.bias,B.shadowNormalBias=de.normalBias,B.shadowRadius=de.radius,B.shadowMapSize=de.mapSize,s.directionalShadow[y]=B,s.directionalShadowMap[y]=pe,s.directionalShadowMatrix[y]=k.shadow.matrix,b++}s.directional[y]=ce,y++}else if(k.isSpotLight){const ce=e.get(k);ce.position.setFromMatrixPosition(k.matrixWorld),ce.color.copy(ue).multiplyScalar(te),ce.distance=fe,ce.coneCos=Math.cos(k.angle),ce.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ce.decay=k.decay,s.spot[T]=ce;const de=k.shadow;if(k.map&&(s.spotLightMap[q]=k.map,q++,de.updateMatrices(k),k.castShadow&&O++),s.spotLightMatrix[T]=de.matrix,k.castShadow){const B=t.get(k);B.shadowIntensity=de.intensity,B.shadowBias=de.bias,B.shadowNormalBias=de.normalBias,B.shadowRadius=de.radius,B.shadowMapSize=de.mapSize,s.spotShadow[T]=B,s.spotShadowMap[T]=pe,A++}T++}else if(k.isRectAreaLight){const ce=e.get(k);ce.color.copy(ue).multiplyScalar(te),ce.halfWidth.set(k.width*.5,0,0),ce.halfHeight.set(0,k.height*.5,0),s.rectArea[S]=ce,S++}else if(k.isPointLight){const ce=e.get(k);if(ce.color.copy(k.color).multiplyScalar(k.intensity),ce.distance=k.distance,ce.decay=k.decay,k.castShadow){const de=k.shadow,B=t.get(k);B.shadowIntensity=de.intensity,B.shadowBias=de.bias,B.shadowNormalBias=de.normalBias,B.shadowRadius=de.radius,B.shadowMapSize=de.mapSize,B.shadowCameraNear=de.camera.near,B.shadowCameraFar=de.camera.far,s.pointShadow[E]=B,s.pointShadowMap[E]=pe,s.pointShadowMatrix[E]=k.shadow.matrix,P++}s.point[E]=ce,E++}else if(k.isHemisphereLight){const ce=e.get(k);ce.skyColor.copy(k.color).multiplyScalar(te),ce.groundColor.copy(k.groundColor).multiplyScalar(te),s.hemi[p]=ce,p++}}S>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ne.LTC_FLOAT_1,s.rectAreaLTC2=Ne.LTC_FLOAT_2):(s.rectAreaLTC1=Ne.LTC_HALF_1,s.rectAreaLTC2=Ne.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=x;const G=s.hash;(G.directionalLength!==y||G.pointLength!==E||G.spotLength!==T||G.rectAreaLength!==S||G.hemiLength!==p||G.numDirectionalShadows!==b||G.numPointShadows!==P||G.numSpotShadows!==A||G.numSpotMaps!==q||G.numLightProbes!==U)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=S,s.point.length=E,s.hemi.length=p,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=A+q-O,s.spotLightMap.length=q,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=U,G.directionalLength=y,G.pointLength=E,G.spotLength=T,G.rectAreaLength=S,G.hemiLength=p,G.numDirectionalShadows=b,G.numPointShadows=P,G.numSpotShadows=A,G.numSpotMaps=q,G.numLightProbes=U,s.version=UT++)}function h(m,g){let v=0,x=0,y=0,E=0,T=0;const S=g.matrixWorldInverse;for(let p=0,b=m.length;p<b;p++){const P=m[p];if(P.isDirectionalLight){const A=s.directional[v];A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),v++}else if(P.isSpotLight){const A=s.spot[y];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),y++}else if(P.isRectAreaLight){const A=s.rectArea[E];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(S),c.identity(),l.copy(P.matrixWorld),l.premultiply(S),c.extractRotation(l),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),E++}else if(P.isPointLight){const A=s.point[x];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(S),x++}else if(P.isHemisphereLight){const A=s.hemi[T];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(S),T++}}}return{setup:f,setupView:h,state:s}}function Eg(i){const e=new OT(i),t=[],s=[];function o(g){m.camera=g,t.length=0,s.length=0}function l(g){t.push(g)}function c(g){s.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const m={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function FT(i){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new Eg(i),e.set(o,[f])):l>=c.length?(f=new Eg(i),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}class kT extends uo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ux,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BT extends uo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function VT(i,e,t){let s=new Bd;const o=new Tt,l=new Tt,c=new Wt,f=new kT({depthPacking:Ix}),h=new BT,m={},g=t.maxTextureSize,v={[br]:An,[An]:br,[Ai]:Ai},x=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:zT,fragmentShader:HT}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new vi;E.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Fn(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qg;let p=this.type;this.render=function(O,U,G){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const L=i.getRenderTarget(),C=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),ue=i.state;ue.setBlending(Rr),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const te=p!==Xi&&this.type===Xi,fe=p===Xi&&this.type!==Xi;for(let pe=0,ce=O.length;pe<ce;pe++){const de=O[pe],B=de.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const he=B.getFrameExtents();if(o.multiply(he),l.copy(B.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/he.x),o.x=l.x*he.x,B.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/he.y),o.y=l.y*he.y,B.mapSize.y=l.y)),B.map===null||te===!0||fe===!0){const I=this.type!==Xi?{minFilter:_i,magFilter:_i}:{};B.map!==null&&B.map.dispose(),B.map=new os(o.x,o.y,I),B.map.texture.name=de.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const se=B.getViewportCount();for(let I=0;I<se;I++){const K=B.getViewport(I);c.set(l.x*K.x,l.y*K.y,l.x*K.z,l.y*K.w),ue.viewport(c),B.updateMatrices(de,I),s=B.getFrustum(),A(U,G,B.camera,de,this.type)}B.isPointLightShadow!==!0&&this.type===Xi&&b(B,G),B.needsUpdate=!1}p=this.type,S.needsUpdate=!1,i.setRenderTarget(L,C,k)};function b(O,U){const G=e.update(T);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new os(o.x,o.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(U,null,G,x,T,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(U,null,G,y,T,null)}function P(O,U,G,L){let C=null;const k=G.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)C=k;else if(C=G.isPointLight===!0?h:f,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ue=C.uuid,te=U.uuid;let fe=m[ue];fe===void 0&&(fe={},m[ue]=fe);let pe=fe[te];pe===void 0&&(pe=C.clone(),fe[te]=pe,U.addEventListener("dispose",q)),C=pe}if(C.visible=U.visible,C.wireframe=U.wireframe,L===Xi?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:v[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,G.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ue=i.properties.get(C);ue.light=G}return C}function A(O,U,G,L,C){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===Xi)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,O.matrixWorld);const te=e.update(O),fe=O.material;if(Array.isArray(fe)){const pe=te.groups;for(let ce=0,de=pe.length;ce<de;ce++){const B=pe[ce],he=fe[B.materialIndex];if(he&&he.visible){const se=P(O,he,L,C);O.onBeforeShadow(i,O,U,G,te,se,B),i.renderBufferDirect(G,null,te,se,O,B),O.onAfterShadow(i,O,U,G,te,se,B)}}}else if(fe.visible){const pe=P(O,fe,L,C);O.onBeforeShadow(i,O,U,G,te,pe,null),i.renderBufferDirect(G,null,te,pe,O,null),O.onAfterShadow(i,O,U,G,te,pe,null)}}const ue=O.children;for(let te=0,fe=ue.length;te<fe;te++)A(ue[te],U,G,L,C)}function q(O){O.target.removeEventListener("dispose",q);for(const G in m){const L=m[G],C=O.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}const GT={[Wf]:jf,[Xf]:$f,[qf]:Kf,[to]:Yf,[jf]:Wf,[$f]:Xf,[Kf]:qf,[Yf]:to};function WT(i,e){function t(){let W=!1;const De=new Wt;let le=null;const _e=new Wt(0,0,0,0);return{setMask:function(Oe){le!==Oe&&!W&&(i.colorMask(Oe,Oe,Oe,Oe),le=Oe)},setLocked:function(Oe){W=Oe},setClear:function(Oe,Ie,ut,It,Yt){Yt===!0&&(Oe*=It,Ie*=It,ut*=It),De.set(Oe,Ie,ut,It),_e.equals(De)===!1&&(i.clearColor(Oe,Ie,ut,It),_e.copy(De))},reset:function(){W=!1,le=null,_e.set(-1,0,0,0)}}}function s(){let W=!1,De=!1,le=null,_e=null,Oe=null;return{setReversed:function(Ie){if(De!==Ie){const ut=e.get("EXT_clip_control");De?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT);const It=Oe;Oe=null,this.setClear(It)}De=Ie},getReversed:function(){return De},setTest:function(Ie){Ie?ae(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(Ie){le!==Ie&&!W&&(i.depthMask(Ie),le=Ie)},setFunc:function(Ie){if(De&&(Ie=GT[Ie]),_e!==Ie){switch(Ie){case Wf:i.depthFunc(i.NEVER);break;case jf:i.depthFunc(i.ALWAYS);break;case Xf:i.depthFunc(i.LESS);break;case to:i.depthFunc(i.LEQUAL);break;case qf:i.depthFunc(i.EQUAL);break;case Yf:i.depthFunc(i.GEQUAL);break;case $f:i.depthFunc(i.GREATER);break;case Kf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Ie}},setLocked:function(Ie){W=Ie},setClear:function(Ie){Oe!==Ie&&(De&&(Ie=1-Ie),i.clearDepth(Ie),Oe=Ie)},reset:function(){W=!1,le=null,_e=null,Oe=null,De=!1}}}function o(){let W=!1,De=null,le=null,_e=null,Oe=null,Ie=null,ut=null,It=null,Yt=null;return{setTest:function(St){W||(St?ae(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(St){De!==St&&!W&&(i.stencilMask(St),De=St)},setFunc:function(St,Cn,Sn){(le!==St||_e!==Cn||Oe!==Sn)&&(i.stencilFunc(St,Cn,Sn),le=St,_e=Cn,Oe=Sn)},setOp:function(St,Cn,Sn){(Ie!==St||ut!==Cn||It!==Sn)&&(i.stencilOp(St,Cn,Sn),Ie=St,ut=Cn,It=Sn)},setLocked:function(St){W=St},setClear:function(St){Yt!==St&&(i.clearStencil(St),Yt=St)},reset:function(){W=!1,De=null,le=null,_e=null,Oe=null,Ie=null,ut=null,It=null,Yt=null}}}const l=new t,c=new s,f=new o,h=new WeakMap,m=new WeakMap;let g={},v={},x=new WeakMap,y=[],E=null,T=!1,S=null,p=null,b=null,P=null,A=null,q=null,O=null,U=new Rt(0,0,0),G=0,L=!1,C=null,k=null,ue=null,te=null,fe=null;const pe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,de=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(B)[1]),ce=de>=1):B.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ce=de>=2);let he=null,se={};const I=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),be=new Wt().fromArray(I),X=new Wt().fromArray(K);function oe(W,De,le,_e){const Oe=new Uint8Array(4),Ie=i.createTexture();i.bindTexture(W,Ie),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ut=0;ut<le;ut++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(De,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(De+ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return Ie}const ve={};ve[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ae(i.DEPTH_TEST),c.setFunc(to),ft(!1),nt(Rm),ae(i.CULL_FACE),V(Rr);function ae(W){g[W]!==!0&&(i.enable(W),g[W]=!0)}function Te(W){g[W]!==!1&&(i.disable(W),g[W]=!1)}function Ue(W,De){return v[W]!==De?(i.bindFramebuffer(W,De),v[W]=De,W===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=De),W===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=De),!0):!1}function Ze(W,De){let le=y,_e=!1;if(W){le=x.get(De),le===void 0&&(le=[],x.set(De,le));const Oe=W.textures;if(le.length!==Oe.length||le[0]!==i.COLOR_ATTACHMENT0){for(let Ie=0,ut=Oe.length;Ie<ut;Ie++)le[Ie]=i.COLOR_ATTACHMENT0+Ie;le.length=Oe.length,_e=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,_e=!0);_e&&i.drawBuffers(le)}function vt(W){return E!==W?(i.useProgram(W),E=W,!0):!1}const et={[es]:i.FUNC_ADD,[ax]:i.FUNC_SUBTRACT,[lx]:i.FUNC_REVERSE_SUBTRACT};et[ux]=i.MIN,et[cx]=i.MAX;const pt={[fx]:i.ZERO,[dx]:i.ONE,[hx]:i.SRC_COLOR,[Vf]:i.SRC_ALPHA,[xx]:i.SRC_ALPHA_SATURATE,[_x]:i.DST_COLOR,[mx]:i.DST_ALPHA,[px]:i.ONE_MINUS_SRC_COLOR,[Gf]:i.ONE_MINUS_SRC_ALPHA,[vx]:i.ONE_MINUS_DST_COLOR,[gx]:i.ONE_MINUS_DST_ALPHA,[yx]:i.CONSTANT_COLOR,[Sx]:i.ONE_MINUS_CONSTANT_COLOR,[Ex]:i.CONSTANT_ALPHA,[Mx]:i.ONE_MINUS_CONSTANT_ALPHA};function V(W,De,le,_e,Oe,Ie,ut,It,Yt,St){if(W===Rr){T===!0&&(Te(i.BLEND),T=!1);return}if(T===!1&&(ae(i.BLEND),T=!0),W!==ox){if(W!==S||St!==L){if((p!==es||A!==es)&&(i.blendEquation(i.FUNC_ADD),p=es,A=es),St)switch(W){case Js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hf:i.blendFunc(i.ONE,i.ONE);break;case Cm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bm:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hf:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bm:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}b=null,P=null,q=null,O=null,U.set(0,0,0),G=0,S=W,L=St}return}Oe=Oe||De,Ie=Ie||le,ut=ut||_e,(De!==p||Oe!==A)&&(i.blendEquationSeparate(et[De],et[Oe]),p=De,A=Oe),(le!==b||_e!==P||Ie!==q||ut!==O)&&(i.blendFuncSeparate(pt[le],pt[_e],pt[Ie],pt[ut]),b=le,P=_e,q=Ie,O=ut),(It.equals(U)===!1||Yt!==G)&&(i.blendColor(It.r,It.g,It.b,Yt),U.copy(It),G=Yt),S=W,L=!1}function en(W,De){W.side===Ai?Te(i.CULL_FACE):ae(i.CULL_FACE);let le=W.side===An;De&&(le=!le),ft(le),W.blending===Js&&W.transparent===!1?V(Rr):V(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),l.setMask(W.colorWrite);const _e=W.stencilWrite;f.setTest(_e),_e&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ot(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(W){C!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),C=W)}function nt(W){W!==ix?(ae(i.CULL_FACE),W!==k&&(W===Rm?i.cullFace(i.BACK):W===rx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),k=W}function Ee(W){W!==ue&&(ce&&i.lineWidth(W),ue=W)}function ot(W,De,le){W?(ae(i.POLYGON_OFFSET_FILL),(te!==De||fe!==le)&&(i.polygonOffset(De,le),te=De,fe=le)):Te(i.POLYGON_OFFSET_FILL)}function ze(W){W?ae(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function D(W){W===void 0&&(W=i.TEXTURE0+pe-1),he!==W&&(i.activeTexture(W),he=W)}function w(W,De,le){le===void 0&&(he===null?le=i.TEXTURE0+pe-1:le=he);let _e=se[le];_e===void 0&&(_e={type:void 0,texture:void 0},se[le]=_e),(_e.type!==W||_e.texture!==De)&&(he!==le&&(i.activeTexture(le),he=le),i.bindTexture(W,De||ve[W]),_e.type=W,_e.texture=De)}function J(){const W=se[he];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function me(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xe(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function mt(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function we(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function He(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function tt(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function it(W){be.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),be.copy(W))}function Ve(W){X.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),X.copy(W))}function gt(W,De){let le=m.get(De);le===void 0&&(le=new WeakMap,m.set(De,le));let _e=le.get(W);_e===void 0&&(_e=i.getUniformBlockIndex(De,W.name),le.set(W,_e))}function lt(W,De){const _e=m.get(De).get(W);h.get(De)!==_e&&(i.uniformBlockBinding(De,_e,W.__bindingPointIndex),h.set(De,_e))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},he=null,se={},v={},x=new WeakMap,y=[],E=null,T=!1,S=null,p=null,b=null,P=null,A=null,q=null,O=null,U=new Rt(0,0,0),G=0,L=!1,C=null,k=null,ue=null,te=null,fe=null,be.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ae,disable:Te,bindFramebuffer:Ue,drawBuffers:Ze,useProgram:vt,setBlending:V,setMaterial:en,setFlipSided:ft,setCullFace:nt,setLineWidth:Ee,setPolygonOffset:ot,setScissorTest:ze,activeTexture:D,bindTexture:w,unbindTexture:J,compressedTexImage2D:me,compressedTexImage3D:ye,texImage2D:He,texImage3D:tt,updateUBOMapping:gt,uniformBlockBinding:lt,texStorage2D:mt,texStorage3D:we,texSubImage2D:ge,texSubImage3D:Xe,compressedTexSubImage2D:Le,compressedTexSubImage3D:ke,scissor:it,viewport:Ve,reset:bt}}function Mg(i,e,t,s){const o=jT(s);switch(t){case s_:return i*e;case a_:return i*e;case l_:return i*e*2;case u_:return i*e/o.components*o.byteLength;case Od:return i*e/o.components*o.byteLength;case c_:return i*e*2/o.components*o.byteLength;case Fd:return i*e*2/o.components*o.byteLength;case o_:return i*e*3/o.components*o.byteLength;case gi:return i*e*4/o.components*o.byteLength;case kd:return i*e*4/o.components*o.byteLength;case Xl:case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yl:case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case td:case id:return Math.max(i,16)*Math.max(e,8)/4;case ed:case nd:return Math.max(i,8)*Math.max(e,8)/2;case rd:case sd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case od:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ad:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ld:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ud:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case cd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fd:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case dd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hd:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case md:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gd:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _d:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yd:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Kl:case Sd:case Ed:return Math.ceil(i/4)*Math.ceil(e/4)*16;case f_:case Md:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Td:case wd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jT(i){switch(i){case Ki:case n_:return{byteLength:1,components:1};case ia:case i_:case oa:return{byteLength:2,components:1};case Ud:case Id:return{byteLength:2,components:4};case ss:case Nd:case qi:return{byteLength:4,components:1};case r_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function XT(i,e,t,s,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Tt,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,w){return y?new OffscreenCanvas(D,w):ru("canvas")}function T(D,w,J){let me=1;const ye=ze(D);if((ye.width>J||ye.height>J)&&(me=J/Math.max(ye.width,ye.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ge=Math.floor(me*ye.width),Xe=Math.floor(me*ye.height);v===void 0&&(v=E(ge,Xe));const Le=w?E(ge,Xe):v;return Le.width=ge,Le.height=Xe,Le.getContext("2d").drawImage(D,0,0,ge,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+ge+"x"+Xe+")."),Le}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),D;return D}function S(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(D,w,J,me,ye=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ge=w;if(w===i.RED&&(J===i.FLOAT&&(ge=i.R32F),J===i.HALF_FLOAT&&(ge=i.R16F),J===i.UNSIGNED_BYTE&&(ge=i.R8)),w===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ge=i.R8UI),J===i.UNSIGNED_SHORT&&(ge=i.R16UI),J===i.UNSIGNED_INT&&(ge=i.R32UI),J===i.BYTE&&(ge=i.R8I),J===i.SHORT&&(ge=i.R16I),J===i.INT&&(ge=i.R32I)),w===i.RG&&(J===i.FLOAT&&(ge=i.RG32F),J===i.HALF_FLOAT&&(ge=i.RG16F),J===i.UNSIGNED_BYTE&&(ge=i.RG8)),w===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ge=i.RG8UI),J===i.UNSIGNED_SHORT&&(ge=i.RG16UI),J===i.UNSIGNED_INT&&(ge=i.RG32UI),J===i.BYTE&&(ge=i.RG8I),J===i.SHORT&&(ge=i.RG16I),J===i.INT&&(ge=i.RG32I)),w===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ge=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ge=i.RGB16UI),J===i.UNSIGNED_INT&&(ge=i.RGB32UI),J===i.BYTE&&(ge=i.RGB8I),J===i.SHORT&&(ge=i.RGB16I),J===i.INT&&(ge=i.RGB32I)),w===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ge=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ge=i.RGBA16UI),J===i.UNSIGNED_INT&&(ge=i.RGBA32UI),J===i.BYTE&&(ge=i.RGBA8I),J===i.SHORT&&(ge=i.RGBA16I),J===i.INT&&(ge=i.RGBA32I)),w===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(ge=i.RGB9_E5),w===i.RGBA){const Xe=ye?fu:Mt.getTransfer(me);J===i.FLOAT&&(ge=i.RGBA32F),J===i.HALF_FLOAT&&(ge=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ge=Xe===Lt?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(ge=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ge=i.RGB5_A1)}return(ge===i.R16F||ge===i.R32F||ge===i.RG16F||ge===i.RG32F||ge===i.RGBA16F||ge===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function A(D,w){let J;return D?w===null||w===ss||w===ro?J=i.DEPTH24_STENCIL8:w===qi?J=i.DEPTH32F_STENCIL8:w===ia&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ss||w===ro?J=i.DEPTH_COMPONENT24:w===qi?J=i.DEPTH_COMPONENT32F:w===ia&&(J=i.DEPTH_COMPONENT16),J}function q(D,w){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==_i&&D.minFilter!==Ri?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function O(D){const w=D.target;w.removeEventListener("dispose",O),G(w),w.isVideoTexture&&g.delete(w)}function U(D){const w=D.target;w.removeEventListener("dispose",U),C(w)}function G(D){const w=s.get(D);if(w.__webglInit===void 0)return;const J=D.source,me=x.get(J);if(me){const ye=me[w.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&L(D),Object.keys(me).length===0&&x.delete(J)}s.remove(D)}function L(D){const w=s.get(D);i.deleteTexture(w.__webglTexture);const J=D.source,me=x.get(J);delete me[w.__cacheKey],c.memory.textures--}function C(D){const w=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let ye=0;ye<w.__webglFramebuffer[me].length;ye++)i.deleteFramebuffer(w.__webglFramebuffer[me][ye]);else i.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)i.deleteFramebuffer(w.__webglFramebuffer[me]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=D.textures;for(let me=0,ye=J.length;me<ye;me++){const ge=s.get(J[me]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),c.memory.textures--),s.remove(J[me])}s.remove(D)}let k=0;function ue(){k=0}function te(){const D=k;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),k+=1,D}function fe(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function pe(D,w){const J=s.get(D);if(D.isVideoTexture&&Ee(D),D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){const me=D.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(J,D,w);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+w)}function ce(D,w){const J=s.get(D);if(D.version>0&&J.__version!==D.version){X(J,D,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+w)}function de(D,w){const J=s.get(D);if(D.version>0&&J.__version!==D.version){X(J,D,w);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+w)}function B(D,w){const J=s.get(D);if(D.version>0&&J.__version!==D.version){oe(J,D,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+w)}const he={[nu]:i.REPEAT,[Ar]:i.CLAMP_TO_EDGE,[Qf]:i.MIRRORED_REPEAT},se={[_i]:i.NEAREST,[Nx]:i.NEAREST_MIPMAP_NEAREST,[Sl]:i.NEAREST_MIPMAP_LINEAR,[Ri]:i.LINEAR,[tf]:i.LINEAR_MIPMAP_NEAREST,[ns]:i.LINEAR_MIPMAP_LINEAR},I={[Fx]:i.NEVER,[Gx]:i.ALWAYS,[kx]:i.LESS,[h_]:i.LEQUAL,[Bx]:i.EQUAL,[Vx]:i.GEQUAL,[zx]:i.GREATER,[Hx]:i.NOTEQUAL};function K(D,w){if(w.type===qi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ri||w.magFilter===tf||w.magFilter===Sl||w.magFilter===ns||w.minFilter===Ri||w.minFilter===tf||w.minFilter===Sl||w.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,he[w.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,he[w.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,he[w.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,se[w.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,I[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===_i||w.minFilter!==Sl&&w.minFilter!==ns||w.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function be(D,w){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",O));const me=w.source;let ye=x.get(me);ye===void 0&&(ye={},x.set(me,ye));const ge=fe(w);if(ge!==D.__cacheKey){ye[ge]===void 0&&(ye[ge]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,J=!0),ye[ge].usedTimes++;const Xe=ye[D.__cacheKey];Xe!==void 0&&(ye[D.__cacheKey].usedTimes--,Xe.usedTimes===0&&L(w)),D.__cacheKey=ge,D.__webglTexture=ye[ge].texture}return J}function X(D,w,J){let me=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=i.TEXTURE_3D);const ye=be(D,w),ge=w.source;t.bindTexture(me,D.__webglTexture,i.TEXTURE0+J);const Xe=s.get(ge);if(ge.version!==Xe.__version||ye===!0){t.activeTexture(i.TEXTURE0+J);const Le=Mt.getPrimaries(Mt.workingColorSpace),ke=w.colorSpace===wr?null:Mt.getPrimaries(w.colorSpace),mt=w.colorSpace===wr||Le===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let we=T(w.image,!1,o.maxTextureSize);we=ot(w,we);const He=l.convert(w.format,w.colorSpace),tt=l.convert(w.type);let it=P(w.internalFormat,He,tt,w.colorSpace,w.isVideoTexture);K(me,w);let Ve;const gt=w.mipmaps,lt=w.isVideoTexture!==!0,bt=Xe.__version===void 0||ye===!0,W=ge.dataReady,De=q(w,we);if(w.isDepthTexture)it=A(w.format===so,w.type),bt&&(lt?t.texStorage2D(i.TEXTURE_2D,1,it,we.width,we.height):t.texImage2D(i.TEXTURE_2D,0,it,we.width,we.height,0,He,tt,null));else if(w.isDataTexture)if(gt.length>0){lt&&bt&&t.texStorage2D(i.TEXTURE_2D,De,it,gt[0].width,gt[0].height);for(let le=0,_e=gt.length;le<_e;le++)Ve=gt[le],lt?W&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Ve.width,Ve.height,He,tt,Ve.data):t.texImage2D(i.TEXTURE_2D,le,it,Ve.width,Ve.height,0,He,tt,Ve.data);w.generateMipmaps=!1}else lt?(bt&&t.texStorage2D(i.TEXTURE_2D,De,it,we.width,we.height),W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we.width,we.height,He,tt,we.data)):t.texImage2D(i.TEXTURE_2D,0,it,we.width,we.height,0,He,tt,we.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){lt&&bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,it,gt[0].width,gt[0].height,we.depth);for(let le=0,_e=gt.length;le<_e;le++)if(Ve=gt[le],w.format!==gi)if(He!==null)if(lt){if(W)if(w.layerUpdates.size>0){const Oe=Mg(Ve.width,Ve.height,w.format,w.type);for(const Ie of w.layerUpdates){const ut=Ve.data.subarray(Ie*Oe/Ve.data.BYTES_PER_ELEMENT,(Ie+1)*Oe/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,Ie,Ve.width,Ve.height,1,He,ut)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Ve.width,Ve.height,we.depth,He,Ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,it,Ve.width,Ve.height,we.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Ve.width,Ve.height,we.depth,He,tt,Ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,it,Ve.width,Ve.height,we.depth,0,He,tt,Ve.data)}else{lt&&bt&&t.texStorage2D(i.TEXTURE_2D,De,it,gt[0].width,gt[0].height);for(let le=0,_e=gt.length;le<_e;le++)Ve=gt[le],w.format!==gi?He!==null?lt?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,Ve.width,Ve.height,He,Ve.data):t.compressedTexImage2D(i.TEXTURE_2D,le,it,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?W&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Ve.width,Ve.height,He,tt,Ve.data):t.texImage2D(i.TEXTURE_2D,le,it,Ve.width,Ve.height,0,He,tt,Ve.data)}else if(w.isDataArrayTexture)if(lt){if(bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,it,we.width,we.height,we.depth),W)if(w.layerUpdates.size>0){const le=Mg(we.width,we.height,w.format,w.type);for(const _e of w.layerUpdates){const Oe=we.data.subarray(_e*le/we.data.BYTES_PER_ELEMENT,(_e+1)*le/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,we.width,we.height,1,He,tt,Oe)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,He,tt,we.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,it,we.width,we.height,we.depth,0,He,tt,we.data);else if(w.isData3DTexture)lt?(bt&&t.texStorage3D(i.TEXTURE_3D,De,it,we.width,we.height,we.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,He,tt,we.data)):t.texImage3D(i.TEXTURE_3D,0,it,we.width,we.height,we.depth,0,He,tt,we.data);else if(w.isFramebufferTexture){if(bt)if(lt)t.texStorage2D(i.TEXTURE_2D,De,it,we.width,we.height);else{let le=we.width,_e=we.height;for(let Oe=0;Oe<De;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,it,le,_e,0,He,tt,null),le>>=1,_e>>=1}}else if(gt.length>0){if(lt&&bt){const le=ze(gt[0]);t.texStorage2D(i.TEXTURE_2D,De,it,le.width,le.height)}for(let le=0,_e=gt.length;le<_e;le++)Ve=gt[le],lt?W&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,He,tt,Ve):t.texImage2D(i.TEXTURE_2D,le,it,He,tt,Ve);w.generateMipmaps=!1}else if(lt){if(bt){const le=ze(we);t.texStorage2D(i.TEXTURE_2D,De,it,le.width,le.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,He,tt,we)}else t.texImage2D(i.TEXTURE_2D,0,it,He,tt,we);S(w)&&p(me),Xe.__version=ge.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function oe(D,w,J){if(w.image.length!==6)return;const me=be(D,w),ye=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+J);const ge=s.get(ye);if(ye.version!==ge.__version||me===!0){t.activeTexture(i.TEXTURE0+J);const Xe=Mt.getPrimaries(Mt.workingColorSpace),Le=w.colorSpace===wr?null:Mt.getPrimaries(w.colorSpace),ke=w.colorSpace===wr||Xe===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const mt=w.isCompressedTexture||w.image[0].isCompressedTexture,we=w.image[0]&&w.image[0].isDataTexture,He=[];for(let _e=0;_e<6;_e++)!mt&&!we?He[_e]=T(w.image[_e],!0,o.maxCubemapSize):He[_e]=we?w.image[_e].image:w.image[_e],He[_e]=ot(w,He[_e]);const tt=He[0],it=l.convert(w.format,w.colorSpace),Ve=l.convert(w.type),gt=P(w.internalFormat,it,Ve,w.colorSpace),lt=w.isVideoTexture!==!0,bt=ge.__version===void 0||me===!0,W=ye.dataReady;let De=q(w,tt);K(i.TEXTURE_CUBE_MAP,w);let le;if(mt){lt&&bt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,gt,tt.width,tt.height);for(let _e=0;_e<6;_e++){le=He[_e].mipmaps;for(let Oe=0;Oe<le.length;Oe++){const Ie=le[Oe];w.format!==gi?it!==null?lt?W&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,0,0,Ie.width,Ie.height,it,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,gt,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,0,0,Ie.width,Ie.height,it,Ve,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,gt,Ie.width,Ie.height,0,it,Ve,Ie.data)}}}else{if(le=w.mipmaps,lt&&bt){le.length>0&&De++;const _e=ze(He[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,gt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(we){lt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,He[_e].width,He[_e].height,it,Ve,He[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,gt,He[_e].width,He[_e].height,0,it,Ve,He[_e].data);for(let Oe=0;Oe<le.length;Oe++){const ut=le[Oe].image[_e].image;lt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,0,0,ut.width,ut.height,it,Ve,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,gt,ut.width,ut.height,0,it,Ve,ut.data)}}else{lt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,it,Ve,He[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,gt,it,Ve,He[_e]);for(let Oe=0;Oe<le.length;Oe++){const Ie=le[Oe];lt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,0,0,it,Ve,Ie.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,gt,it,Ve,Ie.image[_e])}}}S(w)&&p(i.TEXTURE_CUBE_MAP),ge.__version=ye.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ve(D,w,J,me,ye,ge){const Xe=l.convert(J.format,J.colorSpace),Le=l.convert(J.type),ke=P(J.internalFormat,Xe,Le,J.colorSpace),mt=s.get(w),we=s.get(J);if(we.__renderTarget=w,!mt.__hasExternalTextures){const He=Math.max(1,w.width>>ge),tt=Math.max(1,w.height>>ge);ye===i.TEXTURE_3D||ye===i.TEXTURE_2D_ARRAY?t.texImage3D(ye,ge,ke,He,tt,w.depth,0,Xe,Le,null):t.texImage2D(ye,ge,ke,He,tt,0,Xe,Le,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),nt(w)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,ye,we.__webglTexture,0,ft(w)):(ye===i.TEXTURE_2D||ye>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,me,ye,we.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(D,w,J){if(i.bindRenderbuffer(i.RENDERBUFFER,D),w.depthBuffer){const me=w.depthTexture,ye=me&&me.isDepthTexture?me.type:null,ge=A(w.stencilBuffer,ye),Xe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=ft(w);nt(w)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,ge,w.width,w.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,ge,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ge,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Xe,i.RENDERBUFFER,D)}else{const me=w.textures;for(let ye=0;ye<me.length;ye++){const ge=me[ye],Xe=l.convert(ge.format,ge.colorSpace),Le=l.convert(ge.type),ke=P(ge.internalFormat,Xe,Le,ge.colorSpace),mt=ft(w);J&&nt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,ke,w.width,w.height):nt(w)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,ke,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ke,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe(w.depthTexture,0);const ye=me.__webglTexture,ge=ft(w);if(w.depthTexture.format===Qs)nt(w)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0);else if(w.depthTexture.format===so)nt(w)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Ue(D){const w=s.get(D),J=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const ye=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",ye)};me.addEventListener("dispose",ye),w.__depthDisposeCallback=ye}w.__boundDepthTexture=me}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,D)}else if(J){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=i.createRenderbuffer(),ae(w.__webglDepthbuffer[me],D,!1);else{const ye=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer[me];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,ge)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ae(w.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ye),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,ye)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(D,w,J){const me=s.get(D);w!==void 0&&ve(me.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&Ue(D)}function vt(D){const w=D.texture,J=s.get(D),me=s.get(w);D.addEventListener("dispose",U);const ye=D.textures,ge=D.isWebGLCubeRenderTarget===!0,Xe=ye.length>1;if(Xe||(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=w.version,c.memory.textures++),ge){J.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[Le]=[];for(let ke=0;ke<w.mipmaps.length;ke++)J.__webglFramebuffer[Le][ke]=i.createFramebuffer()}else J.__webglFramebuffer[Le]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let Le=0;Le<w.mipmaps.length;Le++)J.__webglFramebuffer[Le]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Xe)for(let Le=0,ke=ye.length;Le<ke;Le++){const mt=s.get(ye[Le]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),c.memory.textures++)}if(D.samples>0&&nt(D)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Le=0;Le<ye.length;Le++){const ke=ye[Le];J.__webglColorRenderbuffer[Le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Le]);const mt=l.convert(ke.format,ke.colorSpace),we=l.convert(ke.type),He=P(ke.internalFormat,mt,we,ke.colorSpace,D.isXRRenderTarget===!0),tt=ft(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,He,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,J.__webglColorRenderbuffer[Le])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(J.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),K(i.TEXTURE_CUBE_MAP,w);for(let Le=0;Le<6;Le++)if(w.mipmaps&&w.mipmaps.length>0)for(let ke=0;ke<w.mipmaps.length;ke++)ve(J.__webglFramebuffer[Le][ke],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,ke);else ve(J.__webglFramebuffer[Le],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);S(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Le=0,ke=ye.length;Le<ke;Le++){const mt=ye[Le],we=s.get(mt);t.bindTexture(i.TEXTURE_2D,we.__webglTexture),K(i.TEXTURE_2D,mt),ve(J.__webglFramebuffer,D,mt,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,0),S(mt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Le=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Le=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Le,me.__webglTexture),K(Le,w),w.mipmaps&&w.mipmaps.length>0)for(let ke=0;ke<w.mipmaps.length;ke++)ve(J.__webglFramebuffer[ke],D,w,i.COLOR_ATTACHMENT0,Le,ke);else ve(J.__webglFramebuffer,D,w,i.COLOR_ATTACHMENT0,Le,0);S(w)&&p(Le),t.unbindTexture()}D.depthBuffer&&Ue(D)}function et(D){const w=D.textures;for(let J=0,me=w.length;J<me;J++){const ye=w[J];if(S(ye)){const ge=b(D),Xe=s.get(ye).__webglTexture;t.bindTexture(ge,Xe),p(ge),t.unbindTexture()}}}const pt=[],V=[];function en(D){if(D.samples>0){if(nt(D)===!1){const w=D.textures,J=D.width,me=D.height;let ye=i.COLOR_BUFFER_BIT;const ge=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Xe=s.get(D),Le=w.length>1;if(Le)for(let ke=0;ke<w.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let ke=0;ke<w.length;ke++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ye|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ye|=i.STENCIL_BUFFER_BIT)),Le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Xe.__webglColorRenderbuffer[ke]);const mt=s.get(w[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,J,me,0,0,J,me,ye,i.NEAREST),h===!0&&(pt.length=0,V.length=0,pt.push(i.COLOR_ATTACHMENT0+ke),D.depthBuffer&&D.resolveDepthBuffer===!1&&(pt.push(ge),V.push(ge),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Le)for(let ke=0;ke<w.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,Xe.__webglColorRenderbuffer[ke]);const mt=s.get(w[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,mt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const w=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ft(D){return Math.min(o.maxSamples,D.samples)}function nt(D){const w=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ee(D){const w=c.render.frame;g.get(D)!==w&&(g.set(D,w),D.update())}function ot(D,w){const J=D.colorSpace,me=D.format,ye=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==ao&&J!==wr&&(Mt.getTransfer(J)===Lt?(me!==gi||ye!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),w}function ze(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=ue,this.setTexture2D=pe,this.setTexture2DArray=ce,this.setTexture3D=de,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=nt}function qT(i,e){function t(s,o=wr){let l;const c=Mt.getTransfer(o);if(s===Ki)return i.UNSIGNED_BYTE;if(s===Ud)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Id)return i.UNSIGNED_SHORT_5_5_5_1;if(s===r_)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===n_)return i.BYTE;if(s===i_)return i.SHORT;if(s===ia)return i.UNSIGNED_SHORT;if(s===Nd)return i.INT;if(s===ss)return i.UNSIGNED_INT;if(s===qi)return i.FLOAT;if(s===oa)return i.HALF_FLOAT;if(s===s_)return i.ALPHA;if(s===o_)return i.RGB;if(s===gi)return i.RGBA;if(s===a_)return i.LUMINANCE;if(s===l_)return i.LUMINANCE_ALPHA;if(s===Qs)return i.DEPTH_COMPONENT;if(s===so)return i.DEPTH_STENCIL;if(s===u_)return i.RED;if(s===Od)return i.RED_INTEGER;if(s===c_)return i.RG;if(s===Fd)return i.RG_INTEGER;if(s===kd)return i.RGBA_INTEGER;if(s===Xl||s===ql||s===Yl||s===$l)if(c===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Xl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Xl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ql)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$l)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ed||s===td||s===nd||s===id)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===ed)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===td)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===id)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rd||s===sd||s===od)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===rd||s===sd)return c===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===od)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ad||s===ld||s===ud||s===cd||s===fd||s===dd||s===hd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===yd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===ad)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ld)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ud)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===md)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_d)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kl||s===Sd||s===Ed)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Kl)return c===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ed)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===f_||s===Md||s===Td||s===wd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Kl)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Md)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Td)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ro?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}class YT extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ks extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $T={type:"move"};class Lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,s),p=this._getHandJoint(m,T);S!==null&&(p.matrix.fromArray(S.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=S.radius),p.visible=S!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,E=.005;m.inputState.pinching&&x>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent($T)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Ks;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const KT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new Rn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Pr({vertexShader:KT,fragmentShader:ZT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fn(new hu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QT extends lo{constructor(e,t){super();const s=this;let o=null,l=1,c=null,f="local-floor",h=1,m=null,g=null,v=null,x=null,y=null,E=null;const T=new JT,S=t.getContextAttributes();let p=null,b=null;const P=[],A=[],q=new Tt;let O=null;const U=new ni;U.viewport=new Wt;const G=new ni;G.viewport=new Wt;const L=[U,G],C=new YT;let k=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let oe=P[X];return oe===void 0&&(oe=new Lf,P[X]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(X){let oe=P[X];return oe===void 0&&(oe=new Lf,P[X]=oe),oe.getGripSpace()},this.getHand=function(X){let oe=P[X];return oe===void 0&&(oe=new Lf,P[X]=oe),oe.getHandSpace()};function te(X){const oe=A.indexOf(X.inputSource);if(oe===-1)return;const ve=P[oe];ve!==void 0&&(ve.update(X.inputSource,X.frame,m||c),ve.dispatchEvent({type:X.type,data:X.inputSource}))}function fe(){o.removeEventListener("select",te),o.removeEventListener("selectstart",te),o.removeEventListener("selectend",te),o.removeEventListener("squeeze",te),o.removeEventListener("squeezestart",te),o.removeEventListener("squeezeend",te),o.removeEventListener("end",fe),o.removeEventListener("inputsourceschange",pe);for(let X=0;X<P.length;X++){const oe=A[X];oe!==null&&(A[X]=null,P[X].disconnect(oe))}k=null,ue=null,T.reset(),e.setRenderTarget(p),y=null,x=null,v=null,o=null,b=null,be.stop(),s.isPresenting=!1,e.setPixelRatio(O),e.setSize(q.width,q.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){l=X,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){f=X,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(X){m=X},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(p=e.getRenderTarget(),o.addEventListener("select",te),o.addEventListener("selectstart",te),o.addEventListener("selectend",te),o.addEventListener("squeeze",te),o.addEventListener("squeezestart",te),o.addEventListener("squeezeend",te),o.addEventListener("end",fe),o.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(q),o.renderState.layers===void 0){const oe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,oe),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),b=new os(y.framebufferWidth,y.framebufferHeight,{format:gi,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let oe=null,ve=null,ae=null;S.depth&&(ae=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=S.stencil?so:Qs,ve=S.stencil?ro:ss);const Te={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:l};v=new XRWebGLBinding(o,t),x=v.createProjectionLayer(Te),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),b=new os(x.textureWidth,x.textureHeight,{format:gi,type:Ki,depthTexture:new R_(x.textureWidth,x.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await o.requestReferenceSpace(f),be.setContext(o),be.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function pe(X){for(let oe=0;oe<X.removed.length;oe++){const ve=X.removed[oe],ae=A.indexOf(ve);ae>=0&&(A[ae]=null,P[ae].disconnect(ve))}for(let oe=0;oe<X.added.length;oe++){const ve=X.added[oe];let ae=A.indexOf(ve);if(ae===-1){for(let Ue=0;Ue<P.length;Ue++)if(Ue>=A.length){A.push(ve),ae=Ue;break}else if(A[Ue]===null){A[Ue]=ve,ae=Ue;break}if(ae===-1)break}const Te=P[ae];Te&&Te.connect(ve)}}const ce=new Q,de=new Q;function B(X,oe,ve){ce.setFromMatrixPosition(oe.matrixWorld),de.setFromMatrixPosition(ve.matrixWorld);const ae=ce.distanceTo(de),Te=oe.projectionMatrix.elements,Ue=ve.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),vt=Te[14]/(Te[10]+1),et=(Te[9]+1)/Te[5],pt=(Te[9]-1)/Te[5],V=(Te[8]-1)/Te[0],en=(Ue[8]+1)/Ue[0],ft=Ze*V,nt=Ze*en,Ee=ae/(-V+en),ot=Ee*-V;if(oe.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ot),X.translateZ(Ee),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Te[10]===-1)X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ze=Ze+Ee,D=vt+Ee,w=ft-ot,J=nt+(ae-ot),me=et*vt/D*ze,ye=pt*vt/D*ze;X.projectionMatrix.makePerspective(w,J,me,ye,ze,D),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function he(X,oe){oe===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(oe.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let oe=X.near,ve=X.far;T.texture!==null&&(T.depthNear>0&&(oe=T.depthNear),T.depthFar>0&&(ve=T.depthFar)),C.near=G.near=U.near=oe,C.far=G.far=U.far=ve,(k!==C.near||ue!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,ue=C.far),U.layers.mask=X.layers.mask|2,G.layers.mask=X.layers.mask|4,C.layers.mask=U.layers.mask|G.layers.mask;const ae=X.parent,Te=C.cameras;he(C,ae);for(let Ue=0;Ue<Te.length;Ue++)he(Te[Ue],ae);Te.length===2?B(C,U,G):C.projectionMatrix.copy(U.projectionMatrix),se(X,C,ae)};function se(X,oe,ve){ve===null?X.matrix.copy(oe.matrixWorld):(X.matrix.copy(ve.matrixWorld),X.matrix.invert(),X.matrix.multiply(oe.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ad*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&y===null))return h},this.setFoveation=function(X){h=X,x!==null&&(x.fixedFoveation=X),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=X)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let I=null;function K(X,oe){if(g=oe.getViewerPose(m||c),E=oe,g!==null){const ve=g.views;y!==null&&(e.setRenderTargetFramebuffer(b,y.framebuffer),e.setRenderTarget(b));let ae=!1;ve.length!==C.cameras.length&&(C.cameras.length=0,ae=!0);for(let Ue=0;Ue<ve.length;Ue++){const Ze=ve[Ue];let vt=null;if(y!==null)vt=y.getViewport(Ze);else{const pt=v.getViewSubImage(x,Ze);vt=pt.viewport,Ue===0&&(e.setRenderTargetTextures(b,pt.colorTexture,x.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(b))}let et=L[Ue];et===void 0&&(et=new ni,et.layers.enable(Ue),et.viewport=new Wt,L[Ue]=et),et.matrix.fromArray(Ze.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Ze.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(vt.x,vt.y,vt.width,vt.height),Ue===0&&(C.matrix.copy(et.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ae===!0&&C.cameras.push(et)}const Te=o.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ue=v.getDepthInformation(ve[0]);Ue&&Ue.isValid&&Ue.texture&&T.init(e,Ue,o.renderState)}}for(let ve=0;ve<P.length;ve++){const ae=A[ve],Te=P[ve];ae!==null&&Te!==void 0&&Te.update(ae,oe,m||c)}I&&I(X,oe),oe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:oe}),E=null}const be=new w_;be.setAnimationLoop(K),this.setAnimationLoop=function(X){I=X},this.dispose=function(){}}}const Zr=new bi,ew=new Bt;function tw(i,e){function t(S,p){S.matrixAutoUpdate===!0&&S.updateMatrix(),p.value.copy(S.matrix)}function s(S,p){p.color.getRGB(S.fogColor.value,E_(i)),p.isFog?(S.fogNear.value=p.near,S.fogFar.value=p.far):p.isFogExp2&&(S.fogDensity.value=p.density)}function o(S,p,b,P,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?l(S,p):p.isMeshToonMaterial?(l(S,p),v(S,p)):p.isMeshPhongMaterial?(l(S,p),g(S,p)):p.isMeshStandardMaterial?(l(S,p),x(S,p),p.isMeshPhysicalMaterial&&y(S,p,A)):p.isMeshMatcapMaterial?(l(S,p),E(S,p)):p.isMeshDepthMaterial?l(S,p):p.isMeshDistanceMaterial?(l(S,p),T(S,p)):p.isMeshNormalMaterial?l(S,p):p.isLineBasicMaterial?(c(S,p),p.isLineDashedMaterial&&f(S,p)):p.isPointsMaterial?h(S,p,b,P):p.isSpriteMaterial?m(S,p):p.isShadowMaterial?(S.color.value.copy(p.color),S.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function l(S,p){S.opacity.value=p.opacity,p.color&&S.diffuse.value.copy(p.color),p.emissive&&S.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(S.map.value=p.map,t(p.map,S.mapTransform)),p.alphaMap&&(S.alphaMap.value=p.alphaMap,t(p.alphaMap,S.alphaMapTransform)),p.bumpMap&&(S.bumpMap.value=p.bumpMap,t(p.bumpMap,S.bumpMapTransform),S.bumpScale.value=p.bumpScale,p.side===An&&(S.bumpScale.value*=-1)),p.normalMap&&(S.normalMap.value=p.normalMap,t(p.normalMap,S.normalMapTransform),S.normalScale.value.copy(p.normalScale),p.side===An&&S.normalScale.value.negate()),p.displacementMap&&(S.displacementMap.value=p.displacementMap,t(p.displacementMap,S.displacementMapTransform),S.displacementScale.value=p.displacementScale,S.displacementBias.value=p.displacementBias),p.emissiveMap&&(S.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,S.emissiveMapTransform)),p.specularMap&&(S.specularMap.value=p.specularMap,t(p.specularMap,S.specularMapTransform)),p.alphaTest>0&&(S.alphaTest.value=p.alphaTest);const b=e.get(p),P=b.envMap,A=b.envMapRotation;P&&(S.envMap.value=P,Zr.copy(A),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),S.envMapRotation.value.setFromMatrix4(ew.makeRotationFromEuler(Zr)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=p.reflectivity,S.ior.value=p.ior,S.refractionRatio.value=p.refractionRatio),p.lightMap&&(S.lightMap.value=p.lightMap,S.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,S.lightMapTransform)),p.aoMap&&(S.aoMap.value=p.aoMap,S.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,S.aoMapTransform))}function c(S,p){S.diffuse.value.copy(p.color),S.opacity.value=p.opacity,p.map&&(S.map.value=p.map,t(p.map,S.mapTransform))}function f(S,p){S.dashSize.value=p.dashSize,S.totalSize.value=p.dashSize+p.gapSize,S.scale.value=p.scale}function h(S,p,b,P){S.diffuse.value.copy(p.color),S.opacity.value=p.opacity,S.size.value=p.size*b,S.scale.value=P*.5,p.map&&(S.map.value=p.map,t(p.map,S.uvTransform)),p.alphaMap&&(S.alphaMap.value=p.alphaMap,t(p.alphaMap,S.alphaMapTransform)),p.alphaTest>0&&(S.alphaTest.value=p.alphaTest)}function m(S,p){S.diffuse.value.copy(p.color),S.opacity.value=p.opacity,S.rotation.value=p.rotation,p.map&&(S.map.value=p.map,t(p.map,S.mapTransform)),p.alphaMap&&(S.alphaMap.value=p.alphaMap,t(p.alphaMap,S.alphaMapTransform)),p.alphaTest>0&&(S.alphaTest.value=p.alphaTest)}function g(S,p){S.specular.value.copy(p.specular),S.shininess.value=Math.max(p.shininess,1e-4)}function v(S,p){p.gradientMap&&(S.gradientMap.value=p.gradientMap)}function x(S,p){S.metalness.value=p.metalness,p.metalnessMap&&(S.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,S.metalnessMapTransform)),S.roughness.value=p.roughness,p.roughnessMap&&(S.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,S.roughnessMapTransform)),p.envMap&&(S.envMapIntensity.value=p.envMapIntensity)}function y(S,p,b){S.ior.value=p.ior,p.sheen>0&&(S.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),S.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(S.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,S.sheenColorMapTransform)),p.sheenRoughnessMap&&(S.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,S.sheenRoughnessMapTransform))),p.clearcoat>0&&(S.clearcoat.value=p.clearcoat,S.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(S.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,S.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(S.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&S.clearcoatNormalScale.value.negate())),p.dispersion>0&&(S.dispersion.value=p.dispersion),p.iridescence>0&&(S.iridescence.value=p.iridescence,S.iridescenceIOR.value=p.iridescenceIOR,S.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(S.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,S.iridescenceMapTransform)),p.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),p.transmission>0&&(S.transmission.value=p.transmission,S.transmissionSamplerMap.value=b.texture,S.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(S.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,S.transmissionMapTransform)),S.thickness.value=p.thickness,p.thicknessMap&&(S.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=p.attenuationDistance,S.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(S.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(S.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=p.specularIntensity,S.specularColor.value.copy(p.specularColor),p.specularColorMap&&(S.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,S.specularColorMapTransform)),p.specularIntensityMap&&(S.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,p){p.matcap&&(S.matcap.value=p.matcap)}function T(S,p){const b=e.get(p).light;S.referencePosition.value.setFromMatrixPosition(b.matrixWorld),S.nearDistance.value=b.shadow.camera.near,S.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function nw(i,e,t,s){let o={},l={},c=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,P){const A=P.program;s.uniformBlockBinding(b,A)}function m(b,P){let A=o[b.id];A===void 0&&(E(b),A=g(b),o[b.id]=A,b.addEventListener("dispose",S));const q=P.program;s.updateUBOMapping(b,q);const O=e.render.frame;l[b.id]!==O&&(x(b),l[b.id]=O)}function g(b){const P=v();b.__bindingPointIndex=P;const A=i.createBuffer(),q=b.__size,O=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,q,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,A),A}function v(){for(let b=0;b<f;b++)if(c.indexOf(b)===-1)return c.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(b){const P=o[b.id],A=b.uniforms,q=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let O=0,U=A.length;O<U;O++){const G=Array.isArray(A[O])?A[O]:[A[O]];for(let L=0,C=G.length;L<C;L++){const k=G[L];if(y(k,O,L,q)===!0){const ue=k.__offset,te=Array.isArray(k.value)?k.value:[k.value];let fe=0;for(let pe=0;pe<te.length;pe++){const ce=te[pe],de=T(ce);typeof ce=="number"||typeof ce=="boolean"?(k.__data[0]=ce,i.bufferSubData(i.UNIFORM_BUFFER,ue+fe,k.__data)):ce.isMatrix3?(k.__data[0]=ce.elements[0],k.__data[1]=ce.elements[1],k.__data[2]=ce.elements[2],k.__data[3]=0,k.__data[4]=ce.elements[3],k.__data[5]=ce.elements[4],k.__data[6]=ce.elements[5],k.__data[7]=0,k.__data[8]=ce.elements[6],k.__data[9]=ce.elements[7],k.__data[10]=ce.elements[8],k.__data[11]=0):(ce.toArray(k.__data,fe),fe+=de.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ue,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(b,P,A,q){const O=b.value,U=P+"_"+A;if(q[U]===void 0)return typeof O=="number"||typeof O=="boolean"?q[U]=O:q[U]=O.clone(),!0;{const G=q[U];if(typeof O=="number"||typeof O=="boolean"){if(G!==O)return q[U]=O,!0}else if(G.equals(O)===!1)return G.copy(O),!0}return!1}function E(b){const P=b.uniforms;let A=0;const q=16;for(let U=0,G=P.length;U<G;U++){const L=Array.isArray(P[U])?P[U]:[P[U]];for(let C=0,k=L.length;C<k;C++){const ue=L[C],te=Array.isArray(ue.value)?ue.value:[ue.value];for(let fe=0,pe=te.length;fe<pe;fe++){const ce=te[fe],de=T(ce),B=A%q,he=B%de.boundary,se=B+he;A+=he,se!==0&&q-se<de.storage&&(A+=q-se),ue.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=A,A+=de.storage}}}const O=A%q;return O>0&&(A+=q-O),b.__size=A,b.__cache={},this}function T(b){const P={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(P.boundary=4,P.storage=4):b.isVector2?(P.boundary=8,P.storage=8):b.isVector3||b.isColor?(P.boundary=16,P.storage=12):b.isVector4?(P.boundary=16,P.storage=16):b.isMatrix3?(P.boundary=48,P.storage=48):b.isMatrix4?(P.boundary=64,P.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),P}function S(b){const P=b.target;P.removeEventListener("dispose",S);const A=c.indexOf(P.__bindingPointIndex);c.splice(A,1),i.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function p(){for(const b in o)i.deleteBuffer(o[b]);c=[],o={},l={}}return{bind:h,update:m,dispose:p}}class iw{constructor(e={}){const{canvas:t=jx(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=c;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,p=null;const b=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this.toneMapping=Cr,this.toneMappingExposure=1;const A=this;let q=!1,O=0,U=0,G=null,L=-1,C=null;const k=new Wt,ue=new Wt;let te=null;const fe=new Rt(0);let pe=0,ce=t.width,de=t.height,B=1,he=null,se=null;const I=new Wt(0,0,ce,de),K=new Wt(0,0,ce,de);let be=!1;const X=new Bd;let oe=!1,ve=!1;const ae=new Bt,Te=new Bt,Ue=new Q,Ze=new Wt,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function pt(){return G===null?B:1}let V=s;function en(R,j){return t.getContext(R,j)}try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dd}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),V===null){const j="webgl2";if(V=en(j,R),V===null)throw en(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ft,nt,Ee,ot,ze,D,w,J,me,ye,ge,Xe,Le,ke,mt,we,He,tt,it,Ve,gt,lt,bt,W;function De(){ft=new lM(V),ft.init(),lt=new qT(V,ft),nt=new nM(V,ft,e,lt),Ee=new WT(V,ft),nt.reverseDepthBuffer&&x&&Ee.buffers.depth.setReversed(!0),ot=new fM(V),ze=new bT,D=new XT(V,ft,Ee,ze,nt,lt,ot),w=new rM(A),J=new aM(A),me=new vy(V),bt=new eM(V,me),ye=new uM(V,me,ot,bt),ge=new hM(V,ye,me,ot),it=new dM(V,nt,D),we=new iM(ze),Xe=new CT(A,w,J,ft,nt,bt,we),Le=new tw(A,ze),ke=new LT,mt=new FT(ft),tt=new QE(A,w,J,Ee,ge,y,h),He=new VT(A,ge,nt),W=new nw(V,ot,nt,Ee),Ve=new tM(V,ft,ot),gt=new cM(V,ft,ot),ot.programs=Xe.programs,A.capabilities=nt,A.extensions=ft,A.properties=ze,A.renderLists=ke,A.shadowMap=He,A.state=Ee,A.info=ot}De();const le=new QT(A,V);this.xr=le,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=ft.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ft.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(ce,de,!1))},this.getSize=function(R){return R.set(ce,de)},this.setSize=function(R,j,ie=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=R,de=j,t.width=Math.floor(R*B),t.height=Math.floor(j*B),ie===!0&&(t.style.width=R+"px",t.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(ce*B,de*B).floor()},this.setDrawingBufferSize=function(R,j,ie){ce=R,de=j,B=ie,t.width=Math.floor(R*ie),t.height=Math.floor(j*ie),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(I)},this.setViewport=function(R,j,ie,re){R.isVector4?I.set(R.x,R.y,R.z,R.w):I.set(R,j,ie,re),Ee.viewport(k.copy(I).multiplyScalar(B).round())},this.getScissor=function(R){return R.copy(K)},this.setScissor=function(R,j,ie,re){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,j,ie,re),Ee.scissor(ue.copy(K).multiplyScalar(B).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(R){Ee.setScissorTest(be=R)},this.setOpaqueSort=function(R){he=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(R=!0,j=!0,ie=!0){let re=0;if(R){let Y=!1;if(G!==null){const Ce=G.texture.format;Y=Ce===kd||Ce===Fd||Ce===Od}if(Y){const Ce=G.texture.type,Ae=Ce===Ki||Ce===ss||Ce===ia||Ce===ro||Ce===Ud||Ce===Id,qe=tt.getClearColor(),We=tt.getClearAlpha(),rt=qe.r,at=qe.g,Ye=qe.b;Ae?(E[0]=rt,E[1]=at,E[2]=Ye,E[3]=We,V.clearBufferuiv(V.COLOR,0,E)):(T[0]=rt,T[1]=at,T[2]=Ye,T[3]=We,V.clearBufferiv(V.COLOR,0,T))}else re|=V.COLOR_BUFFER_BIT}j&&(re|=V.DEPTH_BUFFER_BIT),ie&&(re|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),ke.dispose(),mt.dispose(),ze.dispose(),w.dispose(),J.dispose(),ge.dispose(),bt.dispose(),W.dispose(),Xe.dispose(),le.dispose(),le.removeEventListener("sessionstart",cs),le.removeEventListener("sessionend",Zi),Pi.stop()};function _e(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const R=ot.autoReset,j=He.enabled,ie=He.autoUpdate,re=He.needsUpdate,Y=He.type;De(),ot.autoReset=R,He.enabled=j,He.autoUpdate=ie,He.needsUpdate=re,He.type=Y}function Ie(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ut(R){const j=R.target;j.removeEventListener("dispose",ut),It(j)}function It(R){Yt(R),ze.remove(R)}function Yt(R){const j=ze.get(R).programs;j!==void 0&&(j.forEach(function(ie){Xe.releaseProgram(ie)}),R.isShaderMaterial&&Xe.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ie,re,Y,Ce){j===null&&(j=vt);const Ae=Y.isMesh&&Y.matrixWorld.determinant()<0,qe=_a(R,j,ie,re,Y);Ee.setMaterial(re,Ae);let We=ie.index,rt=1;if(re.wireframe===!0){if(We=ye.getWireframeAttribute(ie),We===void 0)return;rt=2}const at=ie.drawRange,Ye=ie.attributes.position;let yt=at.start*rt,Ct=(at.start+at.count)*rt;Ce!==null&&(yt=Math.max(yt,Ce.start*rt),Ct=Math.min(Ct,(Ce.start+Ce.count)*rt)),We!==null?(yt=Math.max(yt,0),Ct=Math.min(Ct,We.count)):Ye!=null&&(yt=Math.max(yt,0),Ct=Math.min(Ct,Ye.count));const xt=Ct-yt;if(xt<0||xt===1/0)return;bt.setup(Y,re,qe,ie,We);let cn,ct=Ve;if(We!==null&&(cn=me.get(We),ct=gt,ct.setIndex(cn)),Y.isMesh)re.wireframe===!0?(Ee.setLineWidth(re.wireframeLinewidth*pt()),ct.setMode(V.LINES)):ct.setMode(V.TRIANGLES);else if(Y.isLine){let Ke=re.linewidth;Ke===void 0&&(Ke=1),Ee.setLineWidth(Ke*pt()),Y.isLineSegments?ct.setMode(V.LINES):Y.isLineLoop?ct.setMode(V.LINE_LOOP):ct.setMode(V.LINE_STRIP)}else Y.isPoints?ct.setMode(V.POINTS):Y.isSprite&&ct.setMode(V.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ct.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))ct.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ke=Y._multiDrawStarts,ri=Y._multiDrawCounts,wt=Y._multiDrawCount,fn=We?me.get(We).bytesPerElement:1,si=ze.get(re).currentProgram.getUniforms();for(let $t=0;$t<wt;$t++)si.setValue(V,"_gl_DrawID",$t),ct.render(Ke[$t]/fn,ri[$t])}else if(Y.isInstancedMesh)ct.renderInstances(yt,xt,Y.count);else if(ie.isInstancedBufferGeometry){const Ke=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ri=Math.min(ie.instanceCount,Ke);ct.renderInstances(yt,xt,ri)}else ct.render(yt,xt)};function St(R,j,ie){R.transparent===!0&&R.side===Ai&&R.forceSinglePass===!1?(R.side=An,R.needsUpdate=!0,fs(R,j,ie),R.side=br,R.needsUpdate=!0,fs(R,j,ie),R.side=Ai):fs(R,j,ie)}this.compile=function(R,j,ie=null){ie===null&&(ie=R),p=mt.get(ie),p.init(j),P.push(p),ie.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),R!==ie&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();const re=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ce=Y.material;if(Ce)if(Array.isArray(Ce))for(let Ae=0;Ae<Ce.length;Ae++){const qe=Ce[Ae];St(qe,ie,Y),re.add(qe)}else St(Ce,ie,Y),re.add(Ce)}),P.pop(),p=null,re},this.compileAsync=function(R,j,ie=null){const re=this.compile(R,j,ie);return new Promise(Y=>{function Ce(){if(re.forEach(function(Ae){ze.get(Ae).currentProgram.isReady()&&re.delete(Ae)}),re.size===0){Y(R);return}setTimeout(Ce,10)}ft.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Cn=null;function Sn(R){Cn&&Cn(R)}function cs(){Pi.stop()}function Zi(){Pi.start()}const Pi=new w_;Pi.setAnimationLoop(Sn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(R){Cn=R,le.setAnimationLoop(R),R===null?Pi.stop():Pi.start()},le.addEventListener("sessionstart",cs),le.addEventListener("sessionend",Zi),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(j),j=le.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,j,G),p=mt.get(R,P.length),p.init(j),P.push(p),Te.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),X.setFromProjectionMatrix(Te),ve=this.localClippingEnabled,oe=we.init(this.clippingPlanes,ve),S=ke.get(R,b.length),S.init(),b.push(S),le.enabled===!0&&le.isPresenting===!0){const Ce=A.xr.getDepthSensingMesh();Ce!==null&&Li(Ce,j,-1/0,A.sortObjects)}Li(R,j,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(he,se),et=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,et&&tt.addToRenderList(S,R),this.info.render.frame++,oe===!0&&we.beginShadows();const ie=p.state.shadowsArray;He.render(ie,R,j),oe===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=S.opaque,Y=S.transmissive;if(p.setupLights(),j.isArrayCamera){const Ce=j.cameras;if(Y.length>0)for(let Ae=0,qe=Ce.length;Ae<qe;Ae++){const We=Ce[Ae];Nr(re,Y,R,We)}et&&tt.render(R);for(let Ae=0,qe=Ce.length;Ae<qe;Ae++){const We=Ce[Ae];Dr(S,R,We,We.viewport)}}else Y.length>0&&Nr(re,Y,R,j),et&&tt.render(R),Dr(S,R,j);G!==null&&(D.updateMultisampleRenderTarget(G),D.updateRenderTargetMipmap(G)),R.isScene===!0&&R.onAfterRender(A,R,j),bt.resetDefaultState(),L=-1,C=null,P.pop(),P.length>0?(p=P[P.length-1],oe===!0&&we.setGlobalState(A.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?S=b[b.length-1]:S=null};function Li(R,j,ie,re){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||X.intersectsSprite(R)){re&&Ze.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Te);const Ae=ge.update(R),qe=R.material;qe.visible&&S.push(R,Ae,qe,ie,Ze.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||X.intersectsObject(R))){const Ae=ge.update(R),qe=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ze.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ze.copy(Ae.boundingSphere.center)),Ze.applyMatrix4(R.matrixWorld).applyMatrix4(Te)),Array.isArray(qe)){const We=Ae.groups;for(let rt=0,at=We.length;rt<at;rt++){const Ye=We[rt],yt=qe[Ye.materialIndex];yt&&yt.visible&&S.push(R,Ae,yt,ie,Ze.z,Ye)}}else qe.visible&&S.push(R,Ae,qe,ie,Ze.z,null)}}const Ce=R.children;for(let Ae=0,qe=Ce.length;Ae<qe;Ae++)Li(Ce[Ae],j,ie,re)}function Dr(R,j,ie,re){const Y=R.opaque,Ce=R.transmissive,Ae=R.transparent;p.setupLightsView(ie),oe===!0&&we.setGlobalState(A.clippingPlanes,ie),re&&Ee.viewport(k.copy(re)),Y.length>0&&Ji(Y,j,ie),Ce.length>0&&Ji(Ce,j,ie),Ae.length>0&&Ji(Ae,j,ie),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Nr(R,j,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[re.id]===void 0&&(p.state.transmissionRenderTarget[re.id]=new os(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?oa:Ki,minFilter:ns,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Ce=p.state.transmissionRenderTarget[re.id],Ae=re.viewport||k;Ce.setSize(Ae.z,Ae.w);const qe=A.getRenderTarget();A.setRenderTarget(Ce),A.getClearColor(fe),pe=A.getClearAlpha(),pe<1&&A.setClearColor(16777215,.5),A.clear(),et&&tt.render(ie);const We=A.toneMapping;A.toneMapping=Cr;const rt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),p.setupLightsView(re),oe===!0&&we.setGlobalState(A.clippingPlanes,re),Ji(R,ie,re),D.updateMultisampleRenderTarget(Ce),D.updateRenderTargetMipmap(Ce),ft.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ye=0,yt=j.length;Ye<yt;Ye++){const Ct=j[Ye],xt=Ct.object,cn=Ct.geometry,ct=Ct.material,Ke=Ct.group;if(ct.side===Ai&&xt.layers.test(re.layers)){const ri=ct.side;ct.side=An,ct.needsUpdate=!0,ma(xt,ie,re,cn,ct,Ke),ct.side=ri,ct.needsUpdate=!0,at=!0}}at===!0&&(D.updateMultisampleRenderTarget(Ce),D.updateRenderTargetMipmap(Ce))}A.setRenderTarget(qe),A.setClearColor(fe,pe),rt!==void 0&&(re.viewport=rt),A.toneMapping=We}function Ji(R,j,ie){const re=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,Ce=R.length;Y<Ce;Y++){const Ae=R[Y],qe=Ae.object,We=Ae.geometry,rt=re===null?Ae.material:re,at=Ae.group;qe.layers.test(ie.layers)&&ma(qe,j,ie,We,rt,at)}}function ma(R,j,ie,re,Y,Ce){R.onBeforeRender(A,j,ie,re,Y,Ce),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(A,j,ie,re,R,Ce),Y.transparent===!0&&Y.side===Ai&&Y.forceSinglePass===!1?(Y.side=An,Y.needsUpdate=!0,A.renderBufferDirect(ie,j,re,Y,R,Ce),Y.side=br,Y.needsUpdate=!0,A.renderBufferDirect(ie,j,re,Y,R,Ce),Y.side=Ai):A.renderBufferDirect(ie,j,re,Y,R,Ce),R.onAfterRender(A,j,ie,re,Y,Ce)}function fs(R,j,ie){j.isScene!==!0&&(j=vt);const re=ze.get(R),Y=p.state.lights,Ce=p.state.shadowsArray,Ae=Y.state.version,qe=Xe.getParameters(R,Y.state,Ce,j,ie),We=Xe.getProgramCacheKey(qe);let rt=re.programs;re.environment=R.isMeshStandardMaterial?j.environment:null,re.fog=j.fog,re.envMap=(R.isMeshStandardMaterial?J:w).get(R.envMap||re.environment),re.envMapRotation=re.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,rt===void 0&&(R.addEventListener("dispose",ut),rt=new Map,re.programs=rt);let at=rt.get(We);if(at!==void 0){if(re.currentProgram===at&&re.lightsStateVersion===Ae)return xi(R,qe),at}else qe.uniforms=Xe.getUniforms(R),R.onBeforeCompile(qe,A),at=Xe.acquireProgram(qe,We),rt.set(We,at),re.uniforms=qe.uniforms;const Ye=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=we.uniform),xi(R,qe),re.needsLights=vu(R),re.lightsStateVersion=Ae,re.needsLights&&(Ye.ambientLightColor.value=Y.state.ambient,Ye.lightProbe.value=Y.state.probe,Ye.directionalLights.value=Y.state.directional,Ye.directionalLightShadows.value=Y.state.directionalShadow,Ye.spotLights.value=Y.state.spot,Ye.spotLightShadows.value=Y.state.spotShadow,Ye.rectAreaLights.value=Y.state.rectArea,Ye.ltc_1.value=Y.state.rectAreaLTC1,Ye.ltc_2.value=Y.state.rectAreaLTC2,Ye.pointLights.value=Y.state.point,Ye.pointLightShadows.value=Y.state.pointShadow,Ye.hemisphereLights.value=Y.state.hemi,Ye.directionalShadowMap.value=Y.state.directionalShadowMap,Ye.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ye.spotShadowMap.value=Y.state.spotShadowMap,Ye.spotLightMatrix.value=Y.state.spotLightMatrix,Ye.spotLightMap.value=Y.state.spotLightMap,Ye.pointShadowMap.value=Y.state.pointShadowMap,Ye.pointShadowMatrix.value=Y.state.pointShadowMatrix),re.currentProgram=at,re.uniformsList=null,at}function ga(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Zl.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function xi(R,j){const ie=ze.get(R);ie.outputColorSpace=j.outputColorSpace,ie.batching=j.batching,ie.batchingColor=j.batchingColor,ie.instancing=j.instancing,ie.instancingColor=j.instancingColor,ie.instancingMorph=j.instancingMorph,ie.skinning=j.skinning,ie.morphTargets=j.morphTargets,ie.morphNormals=j.morphNormals,ie.morphColors=j.morphColors,ie.morphTargetsCount=j.morphTargetsCount,ie.numClippingPlanes=j.numClippingPlanes,ie.numIntersection=j.numClipIntersection,ie.vertexAlphas=j.vertexAlphas,ie.vertexTangents=j.vertexTangents,ie.toneMapping=j.toneMapping}function _a(R,j,ie,re,Y){j.isScene!==!0&&(j=vt),D.resetTextureUnits();const Ce=j.fog,Ae=re.isMeshStandardMaterial?j.environment:null,qe=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ao,We=(re.isMeshStandardMaterial?J:w).get(re.envMap||Ae),rt=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,at=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ye=!!ie.morphAttributes.position,yt=!!ie.morphAttributes.normal,Ct=!!ie.morphAttributes.color;let xt=Cr;re.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(xt=A.toneMapping);const cn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ct=cn!==void 0?cn.length:0,Ke=ze.get(re),ri=p.state.lights;if(oe===!0&&(ve===!0||R!==C)){const En=R===C&&re.id===L;we.setState(re,R,En)}let wt=!1;re.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==ri.state.version||Ke.outputColorSpace!==qe||Y.isBatchedMesh&&Ke.batching===!1||!Y.isBatchedMesh&&Ke.batching===!0||Y.isBatchedMesh&&Ke.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ke.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ke.instancing===!1||!Y.isInstancedMesh&&Ke.instancing===!0||Y.isSkinnedMesh&&Ke.skinning===!1||!Y.isSkinnedMesh&&Ke.skinning===!0||Y.isInstancedMesh&&Ke.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ke.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ke.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ke.instancingMorph===!1&&Y.morphTexture!==null||Ke.envMap!==We||re.fog===!0&&Ke.fog!==Ce||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==we.numPlanes||Ke.numIntersection!==we.numIntersection)||Ke.vertexAlphas!==rt||Ke.vertexTangents!==at||Ke.morphTargets!==Ye||Ke.morphNormals!==yt||Ke.morphColors!==Ct||Ke.toneMapping!==xt||Ke.morphTargetsCount!==ct)&&(wt=!0):(wt=!0,Ke.__version=re.version);let fn=Ke.currentProgram;wt===!0&&(fn=fs(re,j,Y));let si=!1,$t=!1,yi=!1;const Dt=fn.getUniforms(),Xn=Ke.uniforms;if(Ee.useProgram(fn.program)&&(si=!0,$t=!0,yi=!0),re.id!==L&&(L=re.id,$t=!0),si||C!==R){Ee.buffers.depth.getReversed()?(ae.copy(R.projectionMatrix),qx(ae),Yx(ae),Dt.setValue(V,"projectionMatrix",ae)):Dt.setValue(V,"projectionMatrix",R.projectionMatrix),Dt.setValue(V,"viewMatrix",R.matrixWorldInverse);const qn=Dt.map.cameraPosition;qn!==void 0&&qn.setValue(V,Ue.setFromMatrixPosition(R.matrixWorld)),nt.logarithmicDepthBuffer&&Dt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Dt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,$t=!0,yi=!0)}if(Y.isSkinnedMesh){Dt.setOptional(V,Y,"bindMatrix"),Dt.setOptional(V,Y,"bindMatrixInverse");const En=Y.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Dt.setValue(V,"boneTexture",En.boneTexture,D))}Y.isBatchedMesh&&(Dt.setOptional(V,Y,"batchingTexture"),Dt.setValue(V,"batchingTexture",Y._matricesTexture,D),Dt.setOptional(V,Y,"batchingIdTexture"),Dt.setValue(V,"batchingIdTexture",Y._indirectTexture,D),Dt.setOptional(V,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Dt.setValue(V,"batchingColorTexture",Y._colorsTexture,D));const Di=ie.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&it.update(Y,ie,fn),($t||Ke.receiveShadow!==Y.receiveShadow)&&(Ke.receiveShadow=Y.receiveShadow,Dt.setValue(V,"receiveShadow",Y.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Xn.envMap.value=We,Xn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&j.environment!==null&&(Xn.envMapIntensity.value=j.environmentIntensity),$t&&(Dt.setValue(V,"toneMappingExposure",A.toneMappingExposure),Ke.needsLights&&va(Xn,yi),Ce&&re.fog===!0&&Le.refreshFogUniforms(Xn,Ce),Le.refreshMaterialUniforms(Xn,re,B,de,p.state.transmissionRenderTarget[R.id]),Zl.upload(V,ga(Ke),Xn,D)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Zl.upload(V,ga(Ke),Xn,D),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Dt.setValue(V,"center",Y.center),Dt.setValue(V,"modelViewMatrix",Y.modelViewMatrix),Dt.setValue(V,"normalMatrix",Y.normalMatrix),Dt.setValue(V,"modelMatrix",Y.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const En=re.uniformsGroups;for(let qn=0,bn=En.length;qn<bn;qn++){const xa=En[qn];W.update(xa,fn),W.bind(xa,fn)}}return fn}function va(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function vu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,j,ie){ze.get(R.texture).__webglTexture=j,ze.get(R.depthTexture).__webglTexture=ie;const re=ze.get(R);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ie===void 0,re.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,j){const ie=ze.get(R);ie.__webglFramebuffer=j,ie.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,ie=0){G=R,O=j,U=ie;let re=!0,Y=null,Ce=!1,Ae=!1;if(R){const We=ze.get(R);if(We.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(V.FRAMEBUFFER,null),re=!1;else if(We.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(We.__hasExternalTextures)D.rebindTextures(R,ze.get(R.texture).__webglTexture,ze.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ye=R.depthTexture;if(We.__boundDepthTexture!==Ye){if(Ye!==null&&ze.has(Ye)&&(R.width!==Ye.image.width||R.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const rt=R.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ae=!0);const at=ze.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(at[j])?Y=at[j][ie]:Y=at[j],Ce=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?Y=ze.get(R).__webglMultisampledFramebuffer:Array.isArray(at)?Y=at[ie]:Y=at,k.copy(R.viewport),ue.copy(R.scissor),te=R.scissorTest}else k.copy(I).multiplyScalar(B).floor(),ue.copy(K).multiplyScalar(B).floor(),te=be;if(Ee.bindFramebuffer(V.FRAMEBUFFER,Y)&&re&&Ee.drawBuffers(R,Y),Ee.viewport(k),Ee.scissor(ue),Ee.setScissorTest(te),Ce){const We=ze.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,We.__webglTexture,ie)}else if(Ae){const We=ze.get(R.texture),rt=j||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,We.__webglTexture,ie||0,rt)}L=-1},this.readRenderTargetPixels=function(R,j,ie,re,Y,Ce,Ae){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(qe=qe[Ae]),qe){Ee.bindFramebuffer(V.FRAMEBUFFER,qe);try{const We=R.texture,rt=We.format,at=We.type;if(!nt.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-re&&ie>=0&&ie<=R.height-Y&&V.readPixels(j,ie,re,Y,lt.convert(rt),lt.convert(at),Ce)}finally{const We=G!==null?ze.get(G).__webglFramebuffer:null;Ee.bindFramebuffer(V.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(R,j,ie,re,Y,Ce,Ae){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(qe=qe[Ae]),qe){const We=R.texture,rt=We.format,at=We.type;if(!nt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=R.width-re&&ie>=0&&ie<=R.height-Y){Ee.bindFramebuffer(V.FRAMEBUFFER,qe);const Ye=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ye),V.bufferData(V.PIXEL_PACK_BUFFER,Ce.byteLength,V.STREAM_READ),V.readPixels(j,ie,re,Y,lt.convert(rt),lt.convert(at),0);const yt=G!==null?ze.get(G).__webglFramebuffer:null;Ee.bindFramebuffer(V.FRAMEBUFFER,yt);const Ct=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Xx(V,Ct,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ye),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ce),V.deleteBuffer(Ye),V.deleteSync(Ct),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,j=null,ie=0){R.isTexture!==!0&&(ta("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1]);const re=Math.pow(2,-ie),Y=Math.floor(R.image.width*re),Ce=Math.floor(R.image.height*re),Ae=j!==null?j.x:0,qe=j!==null?j.y:0;D.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,ie,0,0,Ae,qe,Y,Ce),Ee.unbindTexture()},this.copyTextureToTexture=function(R,j,ie=null,re=null,Y=0){R.isTexture!==!0&&(ta("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,R=arguments[1],j=arguments[2],Y=arguments[3]||0,ie=null);let Ce,Ae,qe,We,rt,at,Ye,yt,Ct;const xt=R.isCompressedTexture?R.mipmaps[Y]:R.image;ie!==null?(Ce=ie.max.x-ie.min.x,Ae=ie.max.y-ie.min.y,qe=ie.isBox3?ie.max.z-ie.min.z:1,We=ie.min.x,rt=ie.min.y,at=ie.isBox3?ie.min.z:0):(Ce=xt.width,Ae=xt.height,qe=xt.depth||1,We=0,rt=0,at=0),re!==null?(Ye=re.x,yt=re.y,Ct=re.z):(Ye=0,yt=0,Ct=0);const cn=lt.convert(j.format),ct=lt.convert(j.type);let Ke;j.isData3DTexture?(D.setTexture3D(j,0),Ke=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(D.setTexture2DArray(j,0),Ke=V.TEXTURE_2D_ARRAY):(D.setTexture2D(j,0),Ke=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const ri=V.getParameter(V.UNPACK_ROW_LENGTH),wt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),fn=V.getParameter(V.UNPACK_SKIP_PIXELS),si=V.getParameter(V.UNPACK_SKIP_ROWS),$t=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,xt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,We),V.pixelStorei(V.UNPACK_SKIP_ROWS,rt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,at);const yi=R.isDataArrayTexture||R.isData3DTexture,Dt=j.isDataArrayTexture||j.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Xn=ze.get(R),Di=ze.get(j),En=ze.get(Xn.__renderTarget),qn=ze.get(Di.__renderTarget);Ee.bindFramebuffer(V.READ_FRAMEBUFFER,En.__webglFramebuffer),Ee.bindFramebuffer(V.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let bn=0;bn<qe;bn++)yi&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ze.get(R).__webglTexture,Y,at+bn),R.isDepthTexture?(Dt&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ze.get(j).__webglTexture,Y,Ct+bn),V.blitFramebuffer(We,rt,Ce,Ae,Ye,yt,Ce,Ae,V.DEPTH_BUFFER_BIT,V.NEAREST)):Dt?V.copyTexSubImage3D(Ke,Y,Ye,yt,Ct+bn,We,rt,Ce,Ae):V.copyTexSubImage2D(Ke,Y,Ye,yt,Ct+bn,We,rt,Ce,Ae);Ee.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Dt?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Ke,Y,Ye,yt,Ct,Ce,Ae,qe,cn,ct,xt.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Ke,Y,Ye,yt,Ct,Ce,Ae,qe,cn,xt.data):V.texSubImage3D(Ke,Y,Ye,yt,Ct,Ce,Ae,qe,cn,ct,xt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Y,Ye,yt,Ce,Ae,cn,ct,xt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Y,Ye,yt,xt.width,xt.height,cn,xt.data):V.texSubImage2D(V.TEXTURE_2D,Y,Ye,yt,Ce,Ae,cn,ct,xt);V.pixelStorei(V.UNPACK_ROW_LENGTH,ri),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,wt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,fn),V.pixelStorei(V.UNPACK_SKIP_ROWS,si),V.pixelStorei(V.UNPACK_SKIP_IMAGES,$t),Y===0&&j.generateMipmaps&&V.generateMipmap(Ke),Ee.unbindTexture()},this.copyTextureToTexture3D=function(R,j,ie=null,re=null,Y=0){return R.isTexture!==!0&&(ta("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,re=arguments[1]||null,R=arguments[2],j=arguments[3],Y=arguments[4]||0),ta('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,ie,re,Y)},this.initRenderTarget=function(R){ze.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Ee.unbindTexture()},this.resetState=function(){O=0,U=0,G=null,Ee.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}class rw extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class D_ extends uo{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ou=new Q,au=new Q,Tg=new Bt,Zo=new __,Vl=new du,Df=new Q,wg=new Q;class Ag extends un{constructor(e=new vi,t=new D_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)ou.fromBufferAttribute(t,o-1),au.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=ou.distanceTo(au);e.setAttribute("lineDistance",new kn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Vl.copy(s.boundingSphere),Vl.applyMatrix4(o),Vl.radius+=l,e.ray.intersectsSphere(Vl)===!1)return;Tg.copy(o).invert(),Zo.copy(e.ray).applyMatrix4(Tg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const y=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let T=y,S=E-1;T<S;T+=m){const p=g.getX(T),b=g.getX(T+1),P=Gl(this,e,Zo,h,p,b);P&&t.push(P)}if(this.isLineLoop){const T=g.getX(E-1),S=g.getX(y),p=Gl(this,e,Zo,h,T,S);p&&t.push(p)}}else{const y=Math.max(0,c.start),E=Math.min(x.count,c.start+c.count);for(let T=y,S=E-1;T<S;T+=m){const p=Gl(this,e,Zo,h,T,T+1);p&&t.push(p)}if(this.isLineLoop){const T=Gl(this,e,Zo,h,E-1,y);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Gl(i,e,t,s,o,l){const c=i.geometry.attributes.position;if(ou.fromBufferAttribute(c,o),au.fromBufferAttribute(c,l),t.distanceSqToSegment(ou,au,Df,wg)>s)return;Df.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Df);if(!(h<e.near||h>e.far))return{distance:h,point:wg.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}class N_ extends Rn{constructor(e,t,s,o,l,c,f,h,m){super(e,t,s,o,l,c,f,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sw{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let s,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)s=this.getPoint(c/e),l+=s.distanceTo(o),t.push(l),o=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const s=this.getLengths();let o=0;const l=s.length;let c;t?c=t:c=e*s[l-1];let f=0,h=l-1,m;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),m=s[o]-c,m<0)f=o+1;else if(m>0)h=o-1;else{h=o;break}if(o=h,s[o]===c)return o/(l-1);const g=s[o],x=s[o+1]-g,y=(c-g)/x;return(o+y)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),h=t||(c.isVector2?new Tt:new Q);return h.copy(f).sub(c).normalize(),h}getTangentAt(e,t){const s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t){const s=new Q,o=[],l=[],c=[],f=new Q,h=new Bt;for(let y=0;y<=e;y++){const E=y/e;o[y]=this.getTangentAt(E,new Q)}l[0]=new Q,c[0]=new Q;let m=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),x=Math.abs(o[0].z);g<=m&&(m=g,s.set(1,0,0)),v<=m&&(m=v,s.set(0,1,0)),x<=m&&s.set(0,0,1),f.crossVectors(o[0],s).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),c[y]=c[y-1].clone(),f.crossVectors(o[y-1],o[y]),f.length()>Number.EPSILON){f.normalize();const E=Math.acos(xn(o[y-1].dot(o[y]),-1,1));l[y].applyMatrix4(h.makeRotationAxis(f,E))}c[y].crossVectors(o[y],l[y])}if(t===!0){let y=Math.acos(xn(l[0].dot(l[e]),-1,1));y/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(y=-y);for(let E=1;E<=e;E++)l[E].applyMatrix4(h.makeRotationAxis(o[E],y*E)),c[E].crossVectors(o[E],l[E])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ow extends sw{constructor(e=0,t=0,s=1,o=1,l=0,c=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=s,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Tt){const s=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(c?l=0:l=o),this.aClockwise===!0&&!c&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),m=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),x=h-this.aX,y=m-this.aY;h=x*g-y*v+this.aX,m=x*v+y*g+this.aY}return s.set(h,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Hd extends vi{constructor(e=.5,t=1,s=32,o=1,l=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:s,phiSegments:o,thetaStart:l,thetaLength:c},s=Math.max(3,s),o=Math.max(1,o);const f=[],h=[],m=[],g=[];let v=e;const x=(t-e)/o,y=new Q,E=new Tt;for(let T=0;T<=o;T++){for(let S=0;S<=s;S++){const p=l+S/s*c;y.x=v*Math.cos(p),y.y=v*Math.sin(p),h.push(y.x,y.y,y.z),m.push(0,0,1),E.x=(y.x/t+1)/2,E.y=(y.y/t+1)/2,g.push(E.x,E.y)}v+=x}for(let T=0;T<o;T++){const S=T*(s+1);for(let p=0;p<s;p++){const b=p+S,P=b,A=b+s+1,q=b+s+2,O=b+1;f.push(P,A,O),f.push(A,q,O)}}this.setIndex(f),this.setAttribute("position",new kn(h,3)),this.setAttribute("normal",new kn(m,3)),this.setAttribute("uv",new kn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Zs extends vi{constructor(e=1,t=32,s=16,o=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:o,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const h=Math.min(c+f,Math.PI);let m=0;const g=[],v=new Q,x=new Q,y=[],E=[],T=[],S=[];for(let p=0;p<=s;p++){const b=[],P=p/s;let A=0;p===0&&c===0?A=.5/t:p===s&&h===Math.PI&&(A=-.5/t);for(let q=0;q<=t;q++){const O=q/t;v.x=-e*Math.cos(o+O*l)*Math.sin(c+P*f),v.y=e*Math.cos(c+P*f),v.z=e*Math.sin(o+O*l)*Math.sin(c+P*f),E.push(v.x,v.y,v.z),x.copy(v).normalize(),T.push(x.x,x.y,x.z),S.push(O+A,1-P),b.push(m++)}g.push(b)}for(let p=0;p<s;p++)for(let b=0;b<t;b++){const P=g[p][b+1],A=g[p][b],q=g[p+1][b],O=g[p+1][b+1];(p!==0||c>0)&&y.push(P,A,O),(p!==s-1||h<Math.PI)&&y.push(A,q,O)}this.setIndex(y),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(T,3)),this.setAttribute("uv",new kn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wl extends uo{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=d_,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class U_ extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Nf=new Bt,Rg=new Q,Cg=new Q;class aw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bd,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Rg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rg),Cg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cg),t.updateMatrixWorld(),Nf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nf),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Nf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lw extends aw{constructor(){super(new A_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uw extends U_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new lw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cw extends U_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dd);function bg(i){const e=document.createElement("canvas");e.width=1024,e.height=512;const t=e.getContext("2d");switch(i.toLowerCase()){case"sun":fw(t,e.width,e.height);break;case"mercury":dw(t,e.width,e.height);break;case"venus":hw(t,e.width,e.height);break;case"earth":Pg(t,e.width,e.height);break;case"mars":pw(t,e.width,e.height);break;case"jupiter":mw(t,e.width,e.height);break;case"saturn":gw(t,e.width,e.height);break;case"uranus":_w(t,e.width,e.height);break;case"neptune":vw(t,e.width,e.height);break;case"moon":xw(t,e.width,e.height);break;case"pluto":yw(t,e.width,e.height);break;default:Pg(t,e.width,e.height)}const s=new N_(e);return s.wrapS=nu,s.wrapT=Ar,s}function fw(i,e,t){const s=i.createLinearGradient(0,0,0,t);s.addColorStop(0,"#ff9900"),s.addColorStop(.5,"#ffcc00"),s.addColorStop(1,"#ff6600"),i.fillStyle=s,i.fillRect(0,0,e,t);for(let o=0;o<2e3;o++){const l=Math.random()*e,c=Math.random()*t,f=Math.random()*8+2;i.fillStyle=Math.random()>.4?"rgba(255, 255, 200, 0.4)":"rgba(255, 80, 0, 0.5)",i.beginPath(),i.arc(l,c,f,0,Math.PI*2),i.fill()}}function dw(i,e,t){i.fillStyle="#6e6e73",i.fillRect(0,0,e,t);for(let s=0;s<600;s++){const o=Math.random()*e,l=Math.random()*t,c=Math.random()*12+2;i.fillStyle="#4a4a4f",i.beginPath(),i.arc(o,l,c,0,Math.PI*2),i.fill(),i.strokeStyle="#8e8e93",i.lineWidth=1.5,i.stroke()}}function hw(i,e,t){const s=i.createLinearGradient(0,0,0,t);s.addColorStop(0,"#d4a359"),s.addColorStop(.3,"#e6c280"),s.addColorStop(.6,"#c48f42"),s.addColorStop(1,"#a8722a"),i.fillStyle=s,i.fillRect(0,0,e,t);for(let o=0;o<40;o++){const l=Math.random()*t;i.fillStyle="rgba(255, 235, 190, 0.25)",i.beginPath(),i.ellipse(Math.random()*e,l,Math.random()*200+100,Math.random()*30+10,0,0,Math.PI*2),i.fill()}}function Pg(i,e,t){i.fillStyle="#103874",i.fillRect(0,0,e,t),i.fillStyle="#2d682a";for(let s=0;s<25;s++){const o=Math.random()*e,l=Math.random()*(t*.7)+t*.15,c=Math.random()*120+60,f=Math.random()*80+40;i.beginPath(),i.ellipse(o,l,c,f,Math.random(),0,Math.PI*2),i.fill()}i.fillStyle="#eaf4fd",i.fillRect(0,0,e,40),i.fillRect(0,t-40,e,40),i.fillStyle="rgba(255, 255, 255, 0.4)";for(let s=0;s<35;s++){const o=Math.random()*e,l=Math.random()*t;i.beginPath(),i.ellipse(o,l,Math.random()*150+50,Math.random()*20+5,0,0,Math.PI*2),i.fill()}}function pw(i,e,t){i.fillStyle="#b7410e",i.fillRect(0,0,e,t),i.fillStyle="#8b2500";for(let s=0;s<30;s++)i.beginPath(),i.ellipse(Math.random()*e,Math.random()*t,Math.random()*100+40,Math.random()*60+20,Math.random(),0,Math.PI*2),i.fill();i.fillStyle="#ffffff",i.fillRect(0,0,e,25),i.fillRect(0,t-25,e,25)}function mw(i,e,t){const s=["#c89e74","#9e6d42","#d8b998","#844d27","#e2cfb4","#a36838"],o=t/s.length;for(let l=0;l<s.length;l++)i.fillStyle=s[l],i.fillRect(0,l*o,e,o);for(let l=0;l<50;l++){const c=Math.random()*t;i.fillStyle="rgba(255, 240, 220, 0.3)",i.beginPath(),i.ellipse(Math.random()*e,c,Math.random()*180+60,Math.random()*15+5,0,0,Math.PI*2),i.fill()}i.fillStyle="#cc3311",i.beginPath(),i.ellipse(e*.65,t*.6,70,40,-.1,0,Math.PI*2),i.fill(),i.strokeStyle="#e65533",i.lineWidth=4,i.stroke()}function gw(i,e,t){const s=["#e6c896","#d4b37d","#c29e68","#f2dcae","#b08b54"],o=t/s.length;for(let l=0;l<s.length;l++)i.fillStyle=s[l],i.fillRect(0,l*o,e,o)}function _w(i,e,t){const s=i.createLinearGradient(0,0,0,t);s.addColorStop(0,"#55d0d0"),s.addColorStop(.5,"#7ee6e6"),s.addColorStop(1,"#44bbbb"),i.fillStyle=s,i.fillRect(0,0,e,t),i.fillStyle="rgba(255, 255, 255, 0.15)",i.fillRect(0,t*.4,e,t*.2)}function vw(i,e,t){const s=i.createLinearGradient(0,0,0,t);s.addColorStop(0,"#1a33aa"),s.addColorStop(.5,"#2e55d4"),s.addColorStop(1,"#112288"),i.fillStyle=s,i.fillRect(0,0,e,t),i.fillStyle="rgba(240, 248, 255, 0.4)";for(let o=0;o<15;o++)i.beginPath(),i.ellipse(Math.random()*e,Math.random()*t,Math.random()*120+40,Math.random()*8+2,0,0,Math.PI*2),i.fill()}function xw(i,e,t){i.fillStyle="#888888",i.fillRect(0,0,e,t),i.fillStyle="#555555";for(let s=0;s<15;s++)i.beginPath(),i.ellipse(Math.random()*e,Math.random()*t,Math.random()*80+30,Math.random()*60+20,Math.random(),0,Math.PI*2),i.fill();for(let s=0;s<400;s++){const o=Math.random()*e,l=Math.random()*t,c=Math.random()*8+2;i.fillStyle="#aaaaaa",i.beginPath(),i.arc(o,l,c,0,Math.PI*2),i.fill(),i.strokeStyle="#444444",i.lineWidth=1,i.stroke()}}function yw(i,e,t){i.fillStyle="#9b8272",i.fillRect(0,0,e,t),i.fillStyle="#e8dace",i.beginPath(),i.ellipse(e*.4,t*.5,90,70,.2,0,Math.PI*2),i.fill(),i.fillStyle="#5a463a";for(let s=0;s<20;s++)i.beginPath(),i.ellipse(Math.random()*e,Math.random()*t,Math.random()*60+20,Math.random()*40+15,Math.random(),0,Math.PI*2),i.fill()}function Sw(i){const e=document.createElement("canvas");e.width=512,e.height=64;const t=e.getContext("2d");if(t.clearRect(0,0,e.width,e.height),i.toLowerCase()==="saturn"){const s=t.createLinearGradient(0,0,e.width,0);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(.2,"rgba(212, 179, 125, 0.8)"),s.addColorStop(.45,"rgba(0,0,0,0.9)"),s.addColorStop(.55,"rgba(230, 200, 150, 0.95)"),s.addColorStop(.85,"rgba(180, 140, 90, 0.5)"),s.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=s,t.fillRect(0,0,e.width,e.height)}else if(i.toLowerCase()==="uranus"){const s=t.createLinearGradient(0,0,e.width,0);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(.4,"rgba(126, 230, 230, 0.6)"),s.addColorStop(.6,"rgba(126, 230, 230, 0.2)"),s.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=s,t.fillRect(0,0,e.width,e.height)}return new N_(e)}const Ew={sun:.002,mercury:.001,venus:-8e-4,earth:.005,mars:.0048,jupiter:.012,saturn:.011,uranus:-.007,neptune:.008,moon:.002,pluto:-.002},Mw={sun:.126,mercury:5e-4,venus:3.09,earth:.409,mars:.439,jupiter:.054,saturn:.466,uranus:1.706,neptune:.494,moon:.026,pluto:2.138};function Tw({planetId:i="earth",isPaused:e=!1,onTogglePause:t}){const s=Ut.useRef(null),[o,l]=Ut.useState(!1);return Ut.useEffect(()=>{const c=s.current;if(!c)return;const f=c.clientWidth||600,h=c.clientHeight||340,m=new rw,g=new ni(45,f/h,.1,1e3);g.position.set(0,0,7.5);const v=new iw({antialias:!0,alpha:!0});v.setSize(f,h),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.appendChild(v.domElement);const x=new cw(16777215,.4);m.add(x);const y=new uw(16777215,1.2);y.position.set(5,3,5),m.add(y);const E=new Ks;m.add(E);const T=Mw[i.toLowerCase()]||0;E.rotation.z=T;const S=bg(i);let p=i.toLowerCase()==="sun"?2.3:i.toLowerCase()==="jupiter"?2.4:1.8;(i.toLowerCase()==="moon"||i.toLowerCase()==="pluto")&&(p=1.5);const b=new Zs(p,64,64);let P;if(i.toLowerCase()==="sun"){P=new su({map:S});const X=new Zs(p*1.18,32,32),oe=new su({color:16755200,side:An,transparent:!0,opacity:.35}),ve=new Fn(X,oe);E.add(ve)}else P=new Wl({map:S,roughness:.7,metalness:.1});const A=new Fn(b,P);E.add(A);let q=null,O=null,U=null;if(i.toLowerCase()==="earth"){const X=new Zs(p*1.02,64,64),oe=new Wl({color:16777215,transparent:!0,opacity:.25,blending:Hf});q=new Fn(X,oe),E.add(q),U=new Ks,E.add(U);const ve=bg("moon"),ae=new Zs(.35,32,32),Te=new Wl({map:ve});O=new Fn(ae,Te),O.position.set(3.4,0,0),U.add(O)}let G=null;if(["saturn","uranus"].includes(i.toLowerCase())){const X=p*1.4,oe=p*2.5,ve=new Hd(X,oe,64),ae=ve.attributes.position,Te=ve.attributes.uv;for(let vt=0;vt<ae.count;vt++){const et=ae.getX(vt),pt=ae.getY(vt),V=(Math.sqrt(et*et+pt*pt)-X)/(oe-X);Te.setXY(vt,V,.5)}const Ue=Sw(i),Ze=new Wl({map:Ue,side:Ai,transparent:!0,opacity:.85});G=new Fn(ve,Ze),G.rotation.x=Math.PI/2,E.add(G)}const C=new ow(0,0,3.8,1.8,0,2*Math.PI,!1,0).getPoints(100),k=new vi().setFromPoints(C.map(X=>new Q(X.x,X.y,0))),ue=new D_({color:65382,transparent:!0,opacity:.5}),te=new Ag(k,ue);te.rotation.x=Math.PI/3,m.add(te);const fe=new Ag(k,ue);fe.rotation.x=Math.PI/3.4,fe.scale.set(1.15,1.15,1),m.add(fe);let pe=!1,ce={x:0,y:0};const de=X=>{pe=!0,ce={x:X.clientX,y:X.clientY}},B=X=>{if(!pe)return;const oe=X.clientX-ce.x,ve=X.clientY-ce.y;E.rotation.y+=oe*.008,E.rotation.x+=ve*.008,ce={x:X.clientX,y:X.clientY}},he=()=>{pe=!1};c.addEventListener("mousedown",de),window.addEventListener("mousemove",B),window.addEventListener("mouseup",he);let se;const I=Ew[i.toLowerCase()]||.004,K=()=>{se=requestAnimationFrame(K),!e&&!o&&(A.rotation.y+=I,q&&(q.rotation.y+=I*1.25),U&&(U.rotation.y+=.006)),v.render(m,g)};K();const be=()=>{if(!c)return;const X=c.clientWidth,oe=c.clientHeight;g.aspect=X/oe,g.updateProjectionMatrix(),v.setSize(X,oe)};return window.addEventListener("resize",be),()=>{cancelAnimationFrame(se),c.removeEventListener("mousedown",de),window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",he),window.removeEventListener("resize",be),c.contains(v.domElement)&&c.removeChild(v.domElement),b.dispose(),P.dispose(),S.dispose(),v.dispose()}},[i,e,o]),ee.jsxs("div",{style:{position:"relative",width:"100%",height:"320px",minHeight:"280px",overflow:"hidden"},children:[ee.jsx("div",{ref:s,style:{width:"100%",height:"100%",cursor:"grab"}}),ee.jsx("div",{style:{position:"absolute",top:"68%",left:"18%",border:"1px solid var(--primary-green)",background:"rgba(3,8,14,0.85)",padding:"1px 6px",fontSize:"11px",color:"var(--primary-green)",pointerEvents:"none"},children:i.toUpperCase()}),i.toLowerCase()==="earth"&&ee.jsx("div",{style:{position:"absolute",top:"32%",right:"18%",border:"1px solid var(--primary-green)",background:"rgba(3,8,14,0.85)",padding:"1px 6px",fontSize:"11px",color:"var(--primary-green)",pointerEvents:"none"},children:"MOON"}),ee.jsxs("div",{style:{position:"absolute",bottom:"8px",right:"12px",display:"flex",gap:"8px",zIndex:20},children:[ee.jsx("button",{onClick:t,style:{background:"rgba(5, 13, 20, 0.85)",border:"1px solid var(--border-green)",color:"var(--primary-green)",fontSize:"12px",padding:"2px 8px",cursor:"pointer"},children:e?"▶ RESUME ROTATION":"⏸ PAUSE ROTATION"}),ee.jsx("button",{onClick:()=>l(!o),style:{background:"rgba(5, 13, 20, 0.85)",border:"1px solid var(--border-green)",color:o?"var(--secondary-cyan)":"var(--text-muted)",fontSize:"12px",padding:"2px 8px",cursor:"pointer"},children:o?"REDUCED MOTION: ON":"REDUCED MOTION: OFF"})]})]})}function ww({type:i="LIVE",source:e="NASA/JPL",updated:t=""}){let s="var(--primary-green)",o="rgba(0, 255, 102, 0.1)",l="{====}";switch(i.toUpperCase()){case"LIVE":s="var(--primary-green)",o="rgba(0, 255, 102, 0.15)",l="{====}";break;case"CALCULATED":s="var(--secondary-cyan)",o="rgba(0, 240, 255, 0.15)",l="{=== }";break;case"OBSERVATIONAL":case"REFERENCE":s="#00c3ff",o="rgba(0, 195, 255, 0.15)",l="{==  }";break;case"CACHED":s="var(--alert-yellow)",o="rgba(255, 204, 0, 0.15)",l="{=   }";break;case"UNAVAILABLE":default:s="var(--alert-red)",o="rgba(255, 51, 68, 0.15)",l="{    }";break}return ee.jsxs("div",{className:"weather-status-box",style:{width:"180px",borderLeft:"1px solid var(--border-green)",paddingLeft:"14px",display:"flex",flexDirection:"column",justifyContent:"flex-start",fontSize:"13px"},children:[ee.jsx("div",{style:{fontFamily:"monospace",color:s,letterSpacing:"2px",fontSize:"14px",marginBottom:"6px"},children:l}),ee.jsx("div",{style:{color:"var(--text-muted)",fontSize:"11px"},children:"DATA TYPE:"}),ee.jsx("div",{style:{color:s,background:o,padding:"2px 6px",border:`1px solid ${s}`,fontWeight:"bold",fontSize:"14px",marginBottom:"10px",display:"inline-block"},children:i.toUpperCase()}),ee.jsx("div",{style:{color:"var(--text-muted)",fontSize:"11px"},children:"SOURCE:"}),ee.jsx("div",{style:{color:"var(--primary-green)",fontSize:"12px",marginBottom:"8px",wordBreak:"break-word"},children:e}),t&&ee.jsxs(ee.Fragment,{children:[ee.jsx("div",{style:{color:"var(--text-muted)",fontSize:"11px"},children:"UPDATED:"}),ee.jsx("div",{style:{color:"var(--primary-green)",fontSize:"11px"},children:t})]}),ee.jsxs("div",{style:{marginTop:"12px",display:"flex",gap:"2px"},children:[ee.jsx("div",{style:{width:"8px",height:"6px",background:s}}),ee.jsx("div",{style:{width:"8px",height:"6px",background:i!=="UNAVAILABLE"?s:"var(--dark-green)"}}),ee.jsx("div",{style:{width:"8px",height:"6px",background:["LIVE","CALCULATED"].includes(i)?s:"var(--dark-green)"}}),ee.jsx("div",{style:{width:"8px",height:"6px",background:i==="LIVE"?s:"var(--dark-green)"}})]})]})}function Aw(i,e){if(i===0)return"0 AU (0 km)";if(!i&&!e)return"NO CURRENT DATA";const t=typeof i=="number"?i.toFixed(2):i;return e?e>=1e9?`${t} AU (${(e/1e9).toFixed(3)} billion km)`:e>=1e6?`${t} AU (${(e/1e6).toFixed(1)} million km)`:`${t} AU (${e.toLocaleString()} km)`:`${t} AU`}function Lg(i){if(!i)return"N/A";try{const e=new Date(i),t=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0"),l=String(e.getHours()).padStart(2,"0"),c=String(e.getMinutes()).padStart(2,"0"),f=String(e.getSeconds()).padStart(2,"0");return`${t}-${s}-${o} ${l}:${c}:${f} IST`}catch{return i}}function Rw({planetData:i,loading:e,loadingSteps:t,error:s,onOpenLocationModal:o}){if(e)return ee.jsxs("div",{className:"crt-box",style:{padding:"14px 18px",minHeight:"260px"},children:[ee.jsxs("div",{style:{display:"flex",justifyContent:"space-between",borderBottom:"1px solid var(--border-green)",paddingBottom:"4px",marginBottom:"10px"},children:[ee.jsx("span",{style:{color:"var(--primary-green)",fontWeight:"bold"},children:"◆ TERMINAL"}),ee.jsx("span",{style:{color:"var(--secondary-cyan)"},children:"[INITIALIZING TELEMETRY]"})]}),ee.jsxs("div",{style:{fontFamily:"Share Tech Mono, monospace",fontSize:"15px",lineHeight:"1.6"},children:[t.map((x,y)=>ee.jsx("div",{style:{color:y===t.length-1?"var(--primary-green)":"var(--text-muted)"},children:x},y)),ee.jsx("div",{className:"terminal-cursor",style:{marginTop:"8px"}})]})]});if(s||!i)return ee.jsxs("div",{className:"crt-box",style:{padding:"14px 18px",minHeight:"260px",borderColor:"var(--alert-red)"},children:[ee.jsx("div",{style:{color:"var(--alert-red)",fontWeight:"bold",fontSize:"18px",marginBottom:"8px"},children:"◆ TERMINAL — COMMUNICATION FAILURE"}),ee.jsxs("div",{style:{color:"var(--alert-red)",fontSize:"15px"},children:["> ",s||"TELEMETRY DISRUPTED"]}),ee.jsx("div",{style:{color:"var(--text-muted)",fontSize:"13px",marginTop:"12px"},children:"> CHECKING NASA/JPL DATA LINK SERVICE STATUS..."})]});const{name:l,type:c,classification:f,ephemeris:h,physical:m,weather:g}=i,v=l.toLowerCase()==="earth";return ee.jsxs("div",{className:"crt-box",style:{padding:"12px 16px",minHeight:"270px"},children:[ee.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid var(--border-green)",paddingBottom:"6px",marginBottom:"10px"},children:[ee.jsx("div",{style:{color:"var(--primary-green)",fontWeight:"bold",fontSize:"16px"},children:"◆ TERMINAL"}),ee.jsxs("div",{style:{color:"var(--secondary-cyan)",fontSize:"13px"},children:["[",v?"EARTH WEATHER TELEMETRY":"PLANETARY ENVIRONMENT","]"]})]}),ee.jsxs("div",{className:"terminal-split",style:{display:"flex",gap:"16px"},children:[ee.jsxs("div",{style:{flex:1,fontFamily:"Share Tech Mono, monospace",fontSize:"14px",lineHeight:"1.5"},children:[v?ee.jsxs("div",{style:{background:"rgba(0, 77, 37, 0.4)",borderLeft:"3px solid var(--primary-green)",padding:"4px 8px",marginBottom:"10px"},children:[ee.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[ee.jsxs("span",{style:{color:"var(--secondary-cyan)",fontWeight:"bold"},children:["> LOCATION: ",g.location]}),ee.jsx("button",{onClick:o,style:{background:"var(--dark-green)",border:"1px solid var(--border-green)",color:"var(--primary-green)",fontSize:"11px",padding:"1px 6px",cursor:"pointer"},children:"[CHANGE LOCATION]"})]}),ee.jsxs("div",{children:["> TEMP: ",ee.jsxs("span",{style:{color:"var(--primary-green)",fontWeight:"bold"},children:[g.tempC," °C"]})," (",g.dataType,")"]}),ee.jsxs("div",{children:["> FEELS LIKE: ",g.feelsLikeC," °C"]}),ee.jsxs("div",{children:["> WIND: ",g.windSpeedKmH," km/h (",g.windDirectionDeg?`${g.windDirectionDeg}°`:"N/A",")"]}),ee.jsxs("div",{children:["> PRESS: ",g.pressureHPa," hPa"]}),ee.jsxs("div",{children:["> HUMIDITY: ",g.humidityPct,"%"]}),ee.jsxs("div",{children:["> VISIBILITY: ",g.visibilityKm," km"]}),ee.jsxs("div",{children:["> CONDITIONS: ",ee.jsx("span",{style:{color:"var(--secondary-cyan)"},children:g.conditions})]}),ee.jsxs("div",{children:["> SOURCE: ",g.source]}),ee.jsxs("div",{children:["> LAST UPDATED: ",Lg(g.lastUpdated)]})]}):ee.jsxs("div",{style:{marginBottom:"10px"},children:[ee.jsxs("div",{children:["> ENVIRONMENT: ",ee.jsx("span",{style:{color:"var(--secondary-cyan)"},children:g.location})]}),ee.jsxs("div",{children:["> TEMP: ",ee.jsx("span",{style:{color:"var(--primary-green)"},children:g.tempC})]}),ee.jsxs("div",{children:["> FEELS LIKE: ",g.feelsLikeC]}),ee.jsxs("div",{children:["> WIND: ",g.windSpeedKmH]}),ee.jsxs("div",{children:["> ATM PRESSURE: ",g.pressureHPa]}),ee.jsxs("div",{children:["> ATMOSPHERE HAS: ",g.conditions]}),ee.jsxs("div",{children:["> DATA SOURCE: ",g.source]})]}),ee.jsxs("div",{style:{borderTop:"1px dashed var(--border-green)",paddingTop:"8px",marginTop:"6px"},children:[ee.jsxs("div",{children:["> TYPE: ",ee.jsx("span",{style:{color:"var(--primary-green)"},children:c})," (",f,")"]}),ee.jsxs("div",{children:["> DISTANCE FROM SUN: ",Aw(h.distanceFromSunAU,h.distanceFromSunKm)]}),ee.jsxs("div",{children:["> LIGHT TIME: ",h.lightTimeSec,"s"]}),ee.jsxs("div",{children:["> ORBITAL PERIOD: ",m.orbitalPeriodDays.value," days"]}),ee.jsxs("div",{children:["> ROTATION PERIOD: ",m.rotationPeriod.value]}),ee.jsxs("div",{children:["> KNOWN MOONS: ",m.moonsCount.value]}),ee.jsxs("div",{children:["> ATMOSPHERE: ",m.atmosphere.value]}),ee.jsxs("div",{children:["> SURFACE: ",m.surface.value]}),ee.jsxs("div",{style:{marginTop:"4px"},children:["> STATUS: ",ee.jsx("span",{style:{color:"var(--primary-green)",fontWeight:"bold"},children:i.status||"READY"}),ee.jsx("span",{className:"terminal-cursor"})]})]})]}),ee.jsx(ww,{type:v?g.dataType:h.dataType,source:v?g.source:h.source,updated:Lg(v?g.lastUpdated:h.date)})]})]})}function Cw({onExecuteCommand:i}){const[e,t]=Ut.useState(""),s=o=>{o.preventDefault(),e.trim()&&(i(e.trim()),t(""))};return ee.jsxs("form",{onSubmit:s,style:{marginTop:"8px",display:"flex",alignItems:"center",gap:"8px",background:"rgba(2, 5, 8, 0.9)",border:"1px solid var(--border-green)",padding:"4px 10px"},children:[ee.jsx("span",{style:{color:"var(--primary-green)",fontWeight:"bold"},children:">"}),ee.jsx("input",{type:"text",value:e,onChange:o=>t(o.target.value),placeholder:"Type command ('help', 'scan', 'mars', 'weather')...",style:{flex:1,background:"none",border:"none",outline:"none",color:"var(--primary-green)",fontFamily:"VT323, monospace",fontSize:"16px"}}),ee.jsx("button",{type:"submit",style:{background:"var(--dark-green)",border:"1px solid var(--border-green)",color:"var(--primary-green)",fontSize:"11px",padding:"2px 8px",cursor:"pointer"},children:"EXEC"})]})}function bw({planetId:i,isSelected:e,onClick:t}){const s=h=>{switch(h.toLowerCase()){case"sun":return["#ffcc00","#ff6600"];case"mercury":return["#a8a8a8","#555555"];case"venus":return["#e6c280","#a8722a"];case"earth":return["#0077ff","#009944"];case"mars":return["#e64a19","#8b2500"];case"jupiter":return["#d8b998","#844d27"];case"saturn":return["#f2dcae","#b08b54"];case"uranus":return["#7ee6e6","#22aaaa"];case"neptune":return["#2e55d4","#112288"];case"moon":return["#cccccc","#666666"];case"pluto":return["#c8b4a0","#685444"];default:return["#0077ff","#009944"]}},[o,l]=s(i),c=i.toLowerCase()==="saturn",f=i.toLowerCase()==="uranus";return ee.jsxs("div",{onClick:t,title:i.toUpperCase(),style:{position:"relative",width:e?"46px":"38px",height:e?"46px":"38px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.2s ease",transform:e?"scale(1.15)":"scale(1.0)"},children:[e&&ee.jsx("div",{style:{position:"absolute",top:"-4px",left:"-4px",right:"-4px",bottom:"-4px",borderRadius:"50%",border:"2px solid var(--primary-green)",boxShadow:"0 0 12px var(--primary-green), inset 0 0 6px var(--primary-green)",animation:"pulseGlow 1.5s infinite alternate",pointerEvents:"none"}}),ee.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 40 40",children:[ee.jsx("defs",{children:ee.jsxs("radialGradient",{id:`grad-${i}`,cx:"35%",cy:"35%",r:"65%",children:[ee.jsx("stop",{offset:"0%",stopColor:o}),ee.jsx("stop",{offset:"100%",stopColor:l})]})}),c&&ee.jsx("ellipse",{cx:"20",cy:"20",rx:"19",ry:"6",fill:"none",stroke:"#d4b37d",strokeWidth:"2.5",transform:"rotate(-20 20 20)",opacity:"0.85"}),f&&ee.jsx("ellipse",{cx:"20",cy:"20",rx:"18",ry:"5",fill:"none",stroke:"#7ee6e6",strokeWidth:"1.5",transform:"rotate(70 20 20)",opacity:"0.75"}),ee.jsx("circle",{cx:"20",cy:"20",r:"14",fill:`url(#grad-${i})`}),i.toLowerCase()==="sun"&&ee.jsx("circle",{cx:"20",cy:"20",r:"15",fill:"none",stroke:"#ffcc00",strokeWidth:"2",opacity:"0.8"})]})]})}const Pw=[{id:"sun",label:"1: SUN"},{id:"mercury",label:"2: MERCURY"},{id:"venus",label:"3: VENUS"},{id:"earth",label:"4: EARTH"},{id:"mars",label:"5: MARS"},{id:"jupiter",label:"6: JUPITER"},{id:"saturn",label:"7: SATURN"},{id:"uranus",label:"8: URANUS"},{id:"neptune",label:"9: NEPTUNE"},{id:"moon",label:"0: MOON"},{id:"pluto",label:"P: PLUTO"}];function Lw({selectedPlanet:i,onSelectPlanet:e}){return ee.jsxs("div",{style:{marginTop:"14px"},children:[ee.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"10px"},children:[ee.jsx("span",{style:{color:"var(--primary-green)",fontSize:"14px",fontWeight:"bold",letterSpacing:"2px"},children:"SELECT"}),ee.jsx("div",{style:{flex:1,height:"1px",background:"var(--border-green)",boxShadow:"0 0 6px rgba(0, 255, 102, 0.4)"}})]}),ee.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"6px 12px",background:"rgba(3, 8, 14, 0.9)",border:"1px solid var(--border-green)",borderRadius:"4px",overflowX:"auto",gap:"8px"},children:Pw.map(t=>ee.jsx(bw,{planetId:t.id,isSelected:i.toLowerCase()===t.id,onClick:()=>e(t.id)},t.id))})]})}function Dw({isOpen:i,onClose:e,selectedDate:t,onSelectDate:s}){const[o,l]=Ut.useState(t||new Date().toISOString().split("T")[0]);if(!i)return null;const c=()=>{s(o),e()},f=()=>{s(null),e()};return ee.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},children:ee.jsxs("div",{className:"crt-box-double",style:{padding:"20px",width:"360px",color:"var(--primary-green)"},children:[ee.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"12px"},children:"◆ EPHEMERIS TIME CONTROL"}),ee.jsx("div",{style:{fontSize:"13px",color:"var(--text-muted)",marginBottom:"12px"},children:"Select custom date to recalculate NASA/JPL orbital state vectors and positions:"}),ee.jsx("input",{type:"date",value:o,onChange:h=>l(h.target.value),style:{width:"100%",padding:"8px",background:"var(--panel-bg)",border:"1px solid var(--border-green)",color:"var(--primary-green)",fontFamily:"VT323, monospace",fontSize:"18px",marginBottom:"16px"}}),ee.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[ee.jsx("button",{onClick:f,style:{background:"none",border:"1px solid var(--border-green)",color:"var(--secondary-cyan)",padding:"4px 12px",fontSize:"14px"},children:"RESET CURRENT"}),ee.jsx("button",{onClick:c,style:{background:"var(--dark-green)",border:"1px solid var(--primary-green)",color:"var(--primary-green)",padding:"4px 14px",fontSize:"14px",fontWeight:"bold"},children:"APPLY DATE"}),ee.jsx("button",{onClick:e,style:{background:"none",border:"1px solid var(--alert-red)",color:"var(--alert-red)",padding:"4px 10px",fontSize:"14px"},children:"CANCEL"})]})]})})}function I_(i,e){return function(){return i.apply(e,arguments)}}const{toString:Nw}=Object.prototype,{getPrototypeOf:Lr}=Object,{iterator:fa,toStringTag:O_}=Symbol,ra=(({hasOwnProperty:i})=>(e,t)=>i.call(e,t))(Object.prototype),F_=i=>typeof i=="string"&&(i==="__proto__"||i==="constructor"||i==="prototype"),k_=(i,e,t)=>i===Object.prototype||!t&&e===null,Uw=i=>{if(!Object.isExtensible(i))return!1;const e=Object.getOwnPropertyNames(i);return Object.getOwnPropertySymbols&&e.push(...Object.getOwnPropertySymbols(i)),e.every(t=>{if(F_(t))return!1;const s=Object.getOwnPropertyDescriptor(i,t);return!!s&&s.configurable&&s.writable===!0})},sa=(i,e)=>{let t=i;const s=[];for(;t!=null;){if(s.indexOf(t)!==-1)return!1;s.push(t);const o=Lr(t);if(k_(t,o,t===i))return!1;if(ra(t,e))return!0;t=o}return!1},Iw=(i,e)=>i!=null&&sa(i,e)?i[e]:void 0,Ow=i=>{if(i==null||typeof i!="object"&&typeof i!="function")return i;const e=Lr(i);if(e===null&&Uw(i))return i;const t=Object.create(null),s=Object.create(null),o=[];let l=i;for(;l!=null&&o.indexOf(l)===-1;){o.push(l);const c=l===i?e:Lr(l);if(k_(l,c,l===i))break;const f=Object.getOwnPropertyNames(l);Object.getOwnPropertySymbols&&f.push(...Object.getOwnPropertySymbols(l));for(const h of f)F_(h)||ra(s,h)||(t[h]=i[h],s[h]=!0);l=c}return t},Vd=(i=>e=>{const t=Nw.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),ii=i=>(i=i.toLowerCase(),e=>Vd(e)===i),mu=i=>e=>typeof e===i,{isArray:as}=Array,ls=mu("undefined");function fo(i){return i!==null&&!ls(i)&&i.constructor!==null&&!ls(i.constructor)&&Bn(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const B_=ii("ArrayBuffer");function Fw(i){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(i):e=i&&i.buffer&&B_(i.buffer),e}const kw=mu("string"),Bn=mu("function"),z_=mu("number"),ho=i=>i!==null&&typeof i=="object",Bw=i=>i===!0||i===!1,Jl=i=>{if(!ho(i))return!1;const e=Lr(i);return(e===null||e===Object.prototype||Lr(e)===null)&&!sa(i,O_)&&!sa(i,fa)},zw=i=>{if(!ho(i)||fo(i))return!1;try{return Object.keys(i).length===0&&Object.getPrototypeOf(i)===Object.prototype}catch{return!1}},Hw=ii("Date"),Vw=ii("File"),Gw=i=>!!(i&&typeof i.uri<"u"),Ww=i=>i&&typeof i.getParts<"u",jw=ii("Blob"),Xw=ii("FileList"),qw=ii("Set"),Yw=i=>ho(i)&&Bn(i.pipe);function $w(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Dg=$w(),Ng=typeof Dg.FormData<"u"?Dg.FormData:void 0,Kw=i=>{if(!i)return!1;if(Ng&&i instanceof Ng)return!0;const e=Lr(i);if(!e||e===Object.prototype||!Bn(i.append))return!1;const t=Vd(i);return t==="formdata"||t==="object"&&Bn(i.toString)&&i.toString()==="[object FormData]"},Zw=ii("URLSearchParams"),[Jw,Qw,e1,t1]=["ReadableStream","Request","Response","Headers"].map(ii),n1=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function da(i,e,{allOwnKeys:t=!1}={}){if(i===null||typeof i>"u")return;let s,o;if(typeof i!="object"&&(i=[i]),as(i))for(s=0,o=i.length;s<o;s++)e.call(null,i[s],s,i);else{if(fo(i))return;const l=t?Object.getOwnPropertyNames(i):Object.keys(i),c=l.length;let f;for(s=0;s<c;s++)f=l[s],e.call(null,i[f],f,i)}}function H_(i,e){if(fo(i))return null;e=e.toLowerCase();const t=Object.keys(i);let s=t.length,o;for(;s-- >0;)if(o=t[s],e===o.toLowerCase())return o;return null}const is=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,V_=i=>!ls(i)&&i!==is;function Cd(...i){const{caseless:e,skipUndefined:t}=V_(this)&&this||{},s={},o=(l,c)=>{if(c==="__proto__"||c==="constructor"||c==="prototype")return;const f=e&&typeof c=="string"&&H_(s,c)||c,h=ra(s,f)?s[f]:void 0;Jl(h)&&Jl(l)?s[f]=Cd(h,l):Jl(l)?s[f]=Cd({},l):as(l)?s[f]=l.slice():(!t||!ls(l))&&(s[f]=l)};for(let l=0,c=i.length;l<c;l++){const f=i[l];if(!f||fo(f)||(da(f,o),typeof f!="object"||as(f)))continue;const h=Object.getOwnPropertySymbols(f);for(let m=0;m<h.length;m++){const g=h[m];p1.call(f,g)&&o(f[g],g)}}return s}const i1=(i,e,t,{allOwnKeys:s}={})=>(da(e,(o,l)=>{t&&Bn(o)?Object.defineProperty(i,l,{__proto__:null,value:I_(o,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(i,l,{__proto__:null,value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:s}),i),r1=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),s1=(i,e,t,s)=>{i.prototype=Object.create(e.prototype,s),Object.defineProperty(i.prototype,"constructor",{__proto__:null,value:i,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(i,"super",{__proto__:null,value:e.prototype}),t&&Object.assign(i.prototype,t)},o1=(i,e,t,s)=>{let o,l,c;const f={};if(e=e||{},i==null)return e;do{for(o=Object.getOwnPropertyNames(i),l=o.length;l-- >0;)c=o[l],(!s||s(c,i,e))&&!f[c]&&(e[c]=i[c],f[c]=!0);i=t!==!1&&Lr(i)}while(i&&(!t||t(i,e))&&i!==Object.prototype);return e},a1=(i,e,t)=>{i=String(i),(t===void 0||t>i.length)&&(t=i.length),t-=e.length;const s=i.indexOf(e,t);return s!==-1&&s===t},l1=i=>{if(!i)return null;if(as(i))return i;let e=i.length;if(!z_(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=i[e];return t},u1=(i=>e=>i&&e instanceof i)(typeof Uint8Array<"u"&&Lr(Uint8Array)),c1=(i,e)=>{const s=(i&&i[fa]).call(i);let o;for(;(o=s.next())&&!o.done;){const l=o.value;e.call(i,l[0],l[1])}},f1=(i,e)=>{let t;const s=[];for(;(t=i.exec(e))!==null;)s.push(t);return s},d1=ii("HTMLFormElement"),h1=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,s,o){return s.toUpperCase()+o}),{propertyIsEnumerable:p1}=Object.prototype,m1=ii("RegExp"),G_=(i,e)=>{const t=Object.getOwnPropertyDescriptors(i),s={};da(t,(o,l)=>{let c;(c=e(o,l,i))!==!1&&(s[l]=c||o)}),Object.defineProperties(i,s)},g1=i=>{G_(i,(e,t)=>{if(Bn(i)&&["arguments","caller","callee"].includes(t))return!1;const s=i[t];if(Bn(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},_1=(i,e)=>{const t={},s=o=>{o.forEach(l=>{t[l]=!0})};return as(i)?s(i):s(String(i).split(e)),t},v1=()=>{},x1=(i,e)=>i!=null&&Number.isFinite(i=+i)?i:e;function y1(i){return!!(i&&Bn(i.append)&&i[O_]==="FormData"&&i[fa])}const S1=i=>{const e=new WeakSet,t=s=>{if(ho(s)){if(e.has(s))return;if(fo(s))return s;if(!("toJSON"in s)){e.add(s);let o;if(qw(s)){o=[];for(const l of s){const c=t(l);!ls(c)&&o.push(c)}}else o=as(s)?[]:{},da(s,(l,c)=>{const f=t(l);!ls(f)&&(o[c]=f)});return e.delete(s),o}}return s};return t(i)},E1=ii("AsyncFunction"),M1=i=>i&&(ho(i)||Bn(i))&&Bn(i.then)&&Bn(i.catch),W_=((i,e)=>i?setImmediate:e?((t,s)=>(is.addEventListener("message",({source:o,data:l})=>{o===is&&l===t&&s.length&&s.shift()()},!1),o=>{s.push(o),is.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Bn(is.postMessage)),T1=typeof queueMicrotask<"u"?queueMicrotask.bind(is):typeof process<"u"&&process.nextTick||W_,j_=i=>i!=null&&Bn(i[fa]),w1=i=>i!=null&&sa(i,fa)&&j_(i),z={isArray:as,isArrayBuffer:B_,isBuffer:fo,isFormData:Kw,isArrayBufferView:Fw,isString:kw,isNumber:z_,isBoolean:Bw,isObject:ho,isPlainObject:Jl,isEmptyObject:zw,isReadableStream:Jw,isRequest:Qw,isResponse:e1,isHeaders:t1,isUndefined:ls,isDate:Hw,isFile:Vw,isReactNativeBlob:Gw,isReactNative:Ww,isBlob:jw,isRegExp:m1,isFunction:Bn,isStream:Yw,isURLSearchParams:Zw,isTypedArray:u1,isFileList:Xw,forEach:da,merge:Cd,extend:i1,trim:n1,stripBOM:r1,inherits:s1,toFlatObject:o1,kindOf:Vd,kindOfTest:ii,endsWith:a1,toArray:l1,forEachEntry:c1,matchAll:f1,isHTMLForm:d1,hasOwnProperty:ra,hasOwnProp:ra,hasOwnInPrototypeChain:sa,getSafeProp:Iw,toSafeFlatObject:Ow,reduceDescriptors:G_,freezeMethods:g1,toObjectSet:_1,toCamelCase:h1,noop:v1,toFiniteNumber:x1,findKey:H_,global:is,isContextDefined:V_,isSpecCompliantForm:y1,toJSONObject:S1,isAsyncFn:E1,isThenable:M1,setImmediate:W_,asap:T1,isIterable:j_,isSafeIterable:w1},A1=z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),R1=i=>{const e={};let t,s,o;return i&&i.split(`
`).forEach(function(c){o=c.indexOf(":"),t=c.substring(0,o).trim().toLowerCase(),s=c.substring(o+1).trim();const f=z.hasOwnProp(e,t);!t||f&&z.hasOwnProp(A1,t)||(t==="set-cookie"?f?e[t].push(s):e[t]=[s]:e[t]=f?e[t]+", "+s:s)}),e};function C1(i){let e=0,t=i.length;for(;e<t;){const s=i.charCodeAt(e);if(s!==9&&s!==32)break;e+=1}for(;t>e;){const s=i.charCodeAt(t-1);if(s!==9&&s!==32)break;t-=1}return e===0&&t===i.length?i:i.slice(e,t)}const b1=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),P1=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Gd(i,e){return z.isArray(i)?i.map(t=>Gd(t,e)):C1(String(i).replace(e,""))}const L1=i=>Gd(i,b1),D1=i=>Gd(i,P1);function X_(i){const e=Object.create(null);return z.forEach(i.toJSON(),(t,s)=>{e[s]=D1(t)}),e}const Ug=Symbol("internals");function Jo(i){return i&&String(i).trim().toLowerCase()}function Ql(i){return i===!1||i==null?i:z.isArray(i)?i.map(Ql):L1(String(i))}function N1(i){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=t.exec(i);)e[s[1]]=s[2];return e}const U1=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Uf(i){let e=0,t=i.length;for(;e<t;){const s=i.charCodeAt(e);if(s!==9&&s!==32)break;e+=1}for(;t>e;){const s=i.charCodeAt(t-1);if(s!==9&&s!==32)break;t-=1}return e===0&&t===i.length?i:i.slice(e,t)}function I1(i){const e=i.length-1;if(e<1||i.charCodeAt(0)!==34||i.charCodeAt(e)!==34)return i;let t="";for(let s=1;s<e;s++){const o=i.charCodeAt(s);if(o===34||o===92&&(s+=1,s>=e))return i;t+=i[s]}return t}function O1(i){const e=Object.create(null),t=String(i);let s=0,o=!1,l=!1;function c(f){const h=Uf(t.slice(s,f)),m=h.indexOf("=");if(m<1)return;const g=Uf(h.slice(0,m));if(!U1.test(g))return;const v=g.toLowerCase();if(v==="__proto__"||v==="constructor"||v==="prototype")return;const x=Uf(h.slice(m+1));e[v]=I1(x)}for(let f=0;f<t.length;f++){const h=t.charCodeAt(f);o?l?l=!1:h===92?l=!0:h===34&&(o=!1):h===34?o=!0:(h===44||h===59)&&(c(f),s=f+1)}return c(t.length),e}const F1=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function If(i,e,t,s,o){if(z.isFunction(s))return s.call(this,e,t);if(o&&(e=t),!!z.isString(e)){if(z.isString(s))return e.indexOf(s)!==-1;if(z.isRegExp(s))return s.test(e)}}function k1(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,s)=>t.toUpperCase()+s)}function B1(i,e){const t=z.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(i,s+t,{__proto__:null,value:function(o,l,c){return this[s].call(this,e,o,l,c)},configurable:!0})})}let yn=class{constructor(e){e&&this.set(e)}set(e,t,s){const o=this;function l(f,h,m){const g=Jo(h);if(!g)return;const v=z.findKey(o,g);(!v||o[v]===void 0||m===!0||m===void 0&&o[v]!==!1)&&(o[v||h]=Ql(f))}const c=(f,h)=>z.forEach(f,(m,g)=>l(m,g,h));if(z.isPlainObject(e)||e instanceof this.constructor)c(e,t);else if(z.isString(e)&&(e=e.trim())&&!F1(e))c(R1(e),t);else if(z.isObject(e)&&z.isSafeIterable(e)){let f=Object.create(null),h,m;for(const g of e){if(!z.isArray(g))throw new TypeError("Object iterator must return a key-value pair");m=g[0],z.hasOwnProp(f,m)?(h=f[m],f[m]=z.isArray(h)?[...h,g[1]]:[h,g[1]]):f[m]=g[1]}c(f,t)}else e!=null&&l(t,e,s);return this}get(e,t){if(e=Jo(e),e){const s=z.findKey(this,e);if(s){const o=this[s];if(!t)return o;if(t===!0)return N1(o);if(z.isFunction(t))return t.call(this,o,s);if(z.isRegExp(t))return t.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Jo(e),e){const s=z.findKey(this,e);return!!(s&&this[s]!==void 0&&(!t||If(this,this[s],s,t)))}return!1}delete(e,t){const s=this;let o=!1;function l(c){if(c=Jo(c),c){const f=z.findKey(s,c);f&&(!t||If(s,s[f],f,t))&&(delete s[f],o=!0)}}return z.isArray(e)?e.forEach(l):l(e),o}clear(e){const t=Object.keys(this);let s=t.length,o=!1;for(;s--;){const l=t[s];(!e||If(this,this[l],l,e,!0))&&(delete this[l],o=!0)}return o}normalize(e){const t=this,s={};return z.forEach(this,(o,l)=>{const c=z.findKey(s,l);if(c){t[c]=Ql(o),delete t[l];return}const f=e?k1(l):String(l).trim();f!==l&&delete t[l],t[f]=Ql(o),s[f]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return z.forEach(this,(s,o)=>{s!=null&&s!==!1&&(t[o]=e&&z.isArray(s)?s.join(", "):s)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return z.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return O1(e)}static concat(e,...t){const s=new this(e);return t.forEach(o=>s.set(o)),s}static accessor(e){const s=(this[Ug]=this[Ug]={accessors:{}}).accessors,o=this.prototype;function l(c){const f=Jo(c);s[f]||(B1(o,c),s[f]=!0)}return z.isArray(e)?e.forEach(l):l(e),this}};yn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);z.reduceDescriptors(yn.prototype,({value:i},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>i,set(s){this[t]=s}}});z.freezeMethods(yn);const lu="[REDACTED ****]";function z1(i){if(z.hasOwnProp(i,"toJSON"))return!0;let e=Object.getPrototypeOf(i);for(;e&&e!==Object.prototype;){if(z.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function H1(i,e){const t=new Set(e.map(l=>String(l).toLowerCase())),s=[],o=l=>{if(l===null||typeof l!="object"||z.isBuffer(l))return l;if(s.indexOf(l)!==-1)return;l instanceof yn&&(l=l.toJSON()),s.push(l);let c;if(z.isArray(l))c=[],l.forEach((f,h)=>{const m=o(f);z.isUndefined(m)||(c[h]=m)});else{if(!z.isPlainObject(l)&&z1(l))return s.pop(),l;c=Object.create(null);for(const[f,h]of Object.entries(l)){const m=t.has(f.toLowerCase())?lu:o(h);z.isUndefined(m)||(c[f]=m)}}return s.pop(),c};return o(i)}function Ig(i){try{return String(i)}catch{return""}}function V1(i){return i.errors.map(t=>{try{return t&&t.message?Ig(t.message):Ig(t)}catch{return""}}).filter(Boolean).join("; ")||i.name||"AggregateError"}let Pe=class q_ extends Error{static from(e,t,s,o,l,c){let f=e.message;!f&&z.isArray(e.errors)&&e.errors.length&&(f=V1(e));const h=new q_(f,t||e.code,s,o,l);return Object.defineProperty(h,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),h.name=e.name,e.status!=null&&h.status==null&&(h.status=e.status),c&&Object.assign(h,c),h}constructor(e,t,s,o,l){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),s&&(this.config=s),o&&(this.request=o),l&&(this.response=l,this.status=l.status)}toJSON(){const e=this.config,t=e&&z.hasOwnProp(e,"redact")?e.redact:void 0,s=z.isArray(t)&&t.length>0?H1(e,t):z.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:s,code:this.code,status:this.status}}};Pe.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Pe.ERR_BAD_OPTION="ERR_BAD_OPTION";Pe.ECONNABORTED="ECONNABORTED";Pe.ETIMEDOUT="ETIMEDOUT";Pe.ECONNREFUSED="ECONNREFUSED";Pe.ERR_NETWORK="ERR_NETWORK";Pe.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Pe.ERR_DEPRECATED="ERR_DEPRECATED";Pe.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Pe.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Pe.ERR_CANCELED="ERR_CANCELED";Pe.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Pe.ERR_INVALID_URL="ERR_INVALID_URL";Pe.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const G1=null,Y_=100;function bd(i){return z.isPlainObject(i)||z.isArray(i)}function $_(i){return z.endsWith(i,"[]")?i.slice(0,-2):i}function Of(i,e,t){return i?i.concat(e).map(function(o,l){return o=$_(o),!t&&l?"["+o+"]":o}).join(t?".":""):e}function W1(i){return z.isArray(i)&&!i.some(bd)}const j1=z.toFlatObject(z,{},null,function(e){return/^is[A-Z]/.test(e)});function gu(i,e,t){if(!z.isObject(i))throw new TypeError("target must be an object");e=e||new FormData;const s=(b,P)=>{const A=z.getSafeProp(t,b);return z.isUndefined(A)?P:A},o=s("metaTokens",!0),l=s("visitor")||T,c=s("dots",!1),f=s("indexes",!1),h=s("Blob")||typeof Blob<"u"&&Blob,m=s("maxDepth",Y_),g=h&&z.isSpecCompliantForm(e),v=[];if(!z.isFunction(l))throw new TypeError("visitor must be a function");function x(b){if(b===null)return"";if(z.isDate(b))return b.toISOString();if(z.isBoolean(b))return b.toString();if(!g&&z.isBlob(b))throw new Pe("Blob is not supported. Use a Buffer instead.");if(z.isArrayBuffer(b)||z.isTypedArray(b)){if(g&&typeof h=="function")return new h([b]);throw new Pe("Blob is not supported. Use a Buffer instead.",Pe.ERR_NOT_SUPPORT)}return b}function y(b){if(b>m)throw new Pe("Object is too deeply nested ("+b+" levels). Max depth: "+m,Pe.ERR_FORM_DATA_DEPTH_EXCEEDED)}function E(b,P){if(m===1/0)return JSON.stringify(b);const A=[];return JSON.stringify(b,function(O,U){if(!z.isObject(U))return U;for(;A.length&&A[A.length-1]!==this;)A.pop();return A.push(U),y(P+A.length-1),U})}function T(b,P,A){let q=b;if(z.isReactNative(e)&&z.isReactNativeBlob(b))return e.append(Of(A,P,c),x(b)),!1;if(b&&!A&&typeof b=="object"){if(z.endsWith(P,"{}"))P=o?P:P.slice(0,-2),b=E(b,1);else if(z.isArray(b)&&W1(b)||(z.isFileList(b)||z.endsWith(P,"[]"))&&(q=z.toArray(b)))return P=$_(P),q.forEach(function(U,G){!(z.isUndefined(U)||U===null)&&e.append(f===!0?Of([P],G,c):f===null?P:P+"[]",x(U))}),!1}return bd(b)?!0:(e.append(Of(A,P,c),x(b)),!1)}const S=Object.assign(j1,{defaultVisitor:T,convertValue:x,isVisitable:bd});function p(b,P,A=0){if(!z.isUndefined(b)){if(y(A),v.indexOf(b)!==-1)throw new Error("Circular reference detected in "+P.join("."));v.push(b),z.forEach(b,function(O,U){(!(z.isUndefined(O)||O===null)&&l.call(e,O,z.isString(U)?U.trim():U,P,S))===!0&&p(O,P?P.concat(U):[U],A+1)}),v.pop()}}if(!z.isObject(i))throw new TypeError("data must be an object");return p(i),e}function Og(i){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(i).replace(/[!'()~]|%20/g,function(s){return e[s]})}function Wd(i,e){this._pairs=[],i&&gu(i,this,e)}const K_=Wd.prototype;K_.append=function(e,t){this._pairs.push([e,t])};K_.toString=function(e){const t=e?s=>e.call(this,s,Og):Og;return this._pairs.map(function(o){return t(o[0])+"="+t(o[1])},"").join("&")};function X1(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Z_(i,e,t){if(!e)return i;i=i||"";const s=z.isFunction(t)?{serialize:t}:t,o=z.getSafeProp(s,"encode")||X1,l=z.getSafeProp(s,"serialize");let c;if(l?c=l(e,s):c=z.isURLSearchParams(e)?e.toString():new Wd(e,s).toString(o),c){const f=i.indexOf("#");f!==-1&&(i=i.slice(0,f)),i+=(i.indexOf("?")===-1?"?":"&")+c}return i}const Qo=Symbol("internals");function J_(i){return i?i.length:0}function Fg(i){if(i)for(;i.length&&i[i.length-1]===null;)i.pop()}function ea(i,e){const t=i.handlers,s=J_(t);t!==e.handlersRef?(e.handlersRef=t,e.handlerEntries.clear()):s!==e.handlersLength&&(s?e.handlerEntries.forEach(function(l,c){t[l.index]!==l.handler&&e.handlerEntries.delete(c)}):e.handlerEntries.clear()),e.handlersLength=s}class kg{constructor(){this.handlers=[],this[Qo]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(e,t,s){const o={fulfilled:e,rejected:t,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null},l=this[Qo];this.handlers==null&&(this.handlers=[]),ea(this,l);const c=l.nextId++;return this.handlers.push(o),l.handlerEntries.set(c,{handler:o,index:this.handlers.length-1}),l.handlersLength=this.handlers.length,c}eject(e){const t=this[Qo];ea(this,t);const s=t.handlerEntries.get(e);if(s){if(t.handlerEntries.delete(e),this.handlers[s.index]!==s.handler)return;this.handlers[s.index]=null,t.iterationDepth||(Fg(this.handlers),t.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],ea(this,this[Qo]))}forEach(e){const t=this[Qo];ea(this,t),t.iterationDepth++;try{z.forEach(this.handlers,function(o){o!==null&&e(o)})}finally{--t.iterationDepth||(ea(this,t),Fg(this.handlers),t.handlersLength=J_(this.handlers))}}}const jd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},q1=typeof URLSearchParams<"u"?URLSearchParams:Wd,Y1=typeof FormData<"u"?FormData:null,$1=typeof Blob<"u"?Blob:null,K1={isBrowser:!0,classes:{URLSearchParams:q1,FormData:Y1,Blob:$1},protocols:["http","https","file","blob","url","data"]},Xd=typeof window<"u"&&typeof document<"u",Pd=typeof navigator=="object"&&navigator||void 0,Z1=Xd&&(!Pd||["ReactNative","NativeScript","NS"].indexOf(Pd.product)<0),J1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Q1=Xd&&window.location.href||"http://localhost",eA=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Xd,hasStandardBrowserEnv:Z1,hasStandardBrowserWebWorkerEnv:J1,navigator:Pd,origin:Q1},Symbol.toStringTag,{value:"Module"})),on={...eA,...K1};function tA(i,e){return gu(i,new on.classes.URLSearchParams,{visitor:function(t,s,o,l){return on.isNode&&z.isBuffer(t)?(this.append(s,t.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...e})}const Bg=Y_;function Q_(i){if(i>Bg)throw new Pe("FormData field is too deeply nested ("+i+" levels). Max depth: "+Bg,Pe.ERR_FORM_DATA_DEPTH_EXCEEDED)}function nA(i){const e=[],t=/[^.[\]]+|\[([^.[\]]*)]/g;let s;for(;(s=t.exec(i))!==null;)Q_(e.length),e.push(s[0]==="[]"?"":s[1]||s[0]);return e}function iA(i){const e={},t=Object.keys(i);let s;const o=t.length;let l;for(s=0;s<o;s++)l=t[s],e[l]=i[l];return e}function ev(i){function e(t,s,o,l){Q_(l);let c=t[l++];if(c==="__proto__")return!0;const f=Number.isFinite(+c),h=l>=t.length;return c=!c&&z.isArray(o)?o.length:c,h?(z.hasOwnProp(o,c)?o[c]=z.isArray(o[c])?o[c].concat(s):[o[c],s]:o[c]=s,!f):((!z.hasOwnProp(o,c)||!z.isObject(o[c]))&&(o[c]=[]),e(t,s,o[c],l)&&z.isArray(o[c])&&(o[c]=iA(o[c])),!f)}if(z.isFormData(i)&&z.isFunction(i.entries)){const t={};return z.forEachEntry(i,(s,o)=>{e(nA(s),o,t,0)}),t}return null}const tv=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),Ys=(i,e)=>i!=null&&z.hasOwnProp(i,e)?i[e]:void 0;function rA(i,e,t){if(z.isString(i))try{return(e||JSON.parse)(i),z.trim(i)}catch(s){if(s.name!=="SyntaxError")throw s}return(t||JSON.stringify)(i)}const ha={transitional:jd,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const s=t.getContentType()||"",o=s.indexOf("application/json")>-1,l=z.isObject(e);if(l&&z.isHTMLForm(e)&&(e=new FormData(e)),z.isFormData(e))return o?JSON.stringify(ev(e)):e;if(z.isArrayBuffer(e)||z.isBuffer(e)||z.isStream(e)||z.isFile(e)||z.isBlob(e)||z.isReadableStream(e))return e;if(z.isArrayBufferView(e))return e.buffer;if(z.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let f;if(l){const h=Ys(this,"formSerializer");if(s.indexOf("application/x-www-form-urlencoded")>-1)return tA(e,h).toString();if((f=z.isFileList(e))||s.indexOf("multipart/form-data")>-1){const m=Ys(this,"env"),g=m&&m.FormData;return gu(f?{"files[]":e}:e,g&&new g,h)}}return l||o?(t.setContentType("application/json",!1),rA(e)):e}],transformResponse:[function(e){const t=Ys(this,"transitional")||ha.transitional,s=t&&t.forcedJSONParsing,o=Ys(this,"responseType"),l=o==="json";if(z.isResponse(e)||z.isReadableStream(e))return e;if(e&&z.isString(e)&&(s&&!o||l)){const f=!(t&&t.silentJSONParsing)&&l;try{return JSON.parse(e,Ys(this,"parseReviver"))}catch(h){if(f)throw h.name==="SyntaxError"?Pe.from(h,Pe.ERR_BAD_RESPONSE,this,null,Ys(this,"response")):h}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:on.classes.FormData,Blob:on.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};z.forEach(tv,i=>{ha.headers[i]={}});function Ff(i,e){const t=this||ha,s=e||t,o=yn.from(s.headers);let l=s.data;return z.forEach(i,function(f){l=f.call(t,l,o.normalize(),e?e.status:void 0)}),o.normalize(),l}function nv(i){return!!(i&&i.__CANCEL__)}let pa=class extends Pe{constructor(e,t,s){super(e??"canceled",Pe.ERR_CANCELED,t,s),this.name="CanceledError",this.__CANCEL__=!0}};function iv(i,e,t){const s=t.config.validateStatus;!t.status||!s||s(t.status)?i(t):e(new Pe("Request failed with status code "+t.status,t.status>=400&&t.status<500?Pe.ERR_BAD_REQUEST:Pe.ERR_BAD_RESPONSE,t.config,t.request,t))}const sA=/[\t\n\r]/g;function rv(i){if(typeof i!="string")return i;let e=0;for(;e<i.length&&i.charCodeAt(e)<=32;)e++;return i.slice(e).replace(sA,"")}function kf(i){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(i);return e&&e[1]||""}function oA(i,e){i=i||10;const t=new Array(i),s=new Array(i);let o=0,l=0,c;return e=e!==void 0?e:1e3,function(h){const m=Date.now(),g=s[l];c||(c=m),t[o]=h,s[o]=m;let v=l,x=0;for(;v!==o;)x+=t[v++],v=v%i;if(o=(o+1)%i,o===l&&(l=(l+1)%i),m-c<e)return;const y=g&&m-g;return y?Math.round(x*1e3/y):void 0}}function aA(i,e){let t=0,s=1e3/e,o,l;const c=(g,v=Date.now())=>{t=v,o=null,l&&(clearTimeout(l),l=null),i(...g)};return[(...g)=>{const v=Date.now(),x=v-t;x>=s?c(g,v):(o=g,l||(l=setTimeout(()=>{l=null,c(o)},s-x)))},()=>o&&c(o),(...g)=>c(g)]}const uu=(i,e,t=3)=>{let s=0;const o=oA(50,250);return aA(l=>{if(!l||!z.isNumber(l.loaded))return;const c=l.loaded,f=l.lengthComputable?l.total:void 0,h=Math.max(0,f!=null?Math.min(c,f):c),m=Math.max(0,h-s),g=o(m);s=Math.max(s,h);const v={loaded:h,total:f,progress:f?h/f:void 0,bytes:m,rate:g||void 0,estimated:g&&f?(f-h)/g:void 0,event:l,lengthComputable:f!=null,[e?"download":"upload"]:!0};i(v)},t)},zg=(i,e)=>{const t=i!=null;return[s=>e[0]({lengthComputable:t,total:i,loaded:s}),e[1]]},Hg=(i,e=z.asap)=>(...t)=>e(()=>i(...t)),lA=on.hasStandardBrowserEnv?((i,e)=>t=>(t=new URL(t,on.origin),i.protocol===t.protocol&&i.host===t.host&&(e||i.port===t.port)))(new URL(on.origin),on.navigator&&/(msie|trident)/i.test(on.navigator.userAgent)):()=>!0,uA=on.hasStandardBrowserEnv?{write(i,e,t,s,o,l,c){if(typeof document>"u")return;const f=[`${i}=${encodeURIComponent(e)}`];z.isNumber(t)&&f.push(`expires=${new Date(t).toUTCString()}`),z.isString(s)&&f.push(`path=${s}`),z.isString(o)&&f.push(`domain=${o}`),l===!0&&f.push("secure"),z.isString(c)&&f.push(`SameSite=${c}`),document.cookie=f.join("; ")},read(i){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let t=0;t<e.length;t++){const s=e[t].replace(/^\s+/,""),o=s.indexOf("=");if(o!==-1&&s.slice(0,o)===i)try{return decodeURIComponent(s.slice(o+1))}catch{return s.slice(o+1)}}return null},remove(i){this.write(i,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function cA(i){return typeof i!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function fA(i,e){if(!e)return i;let t=i.length;for(;t>0&&i.charCodeAt(t-1)===47;)t--;return i.slice(0,t)+"/"+e.replace(/^\/+/,"")}const dA=/^https?:(?!\/\/)/i;function hA(i){return i&&i.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,t,s="")=>`${t}${s}${lu}`)}function pA(i){const e=i.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${lu}@`),t=e.indexOf("#"),o=(t===-1?e:e.slice(0,t)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${lu}`);return t===-1?o:`${o}#${hA(e.slice(t+1))}`}function Vg(i,e){if(typeof i=="string"){const t=rv(i);if(dA.test(t))throw new Pe(`Invalid URL ${JSON.stringify(pA(t))}: missing "//" after protocol`,Pe.ERR_INVALID_URL,e)}}function sv(i,e,t,s){Vg(e,s);let o=!cA(e);return i&&(o||t===!1)?(Vg(i,s),fA(i,e)):e}const Gg=i=>i instanceof yn?{...i}:i,mA=i=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(i).concat(Object.getOwnPropertySymbols(i).filter(e=>Object.getOwnPropertyDescriptor(i,e).enumerable)):Object.keys(i);function us(i,e){i=i||{},e=e||{};const t=Object.create(null);Object.defineProperty(t,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function s(g,v,x,y){return z.isPlainObject(g)&&z.isPlainObject(v)?z.merge.call({caseless:y},g,v):z.isPlainObject(v)?z.merge({},v):z.isArray(v)?v.slice():v}function o(g,v,x,y){if(z.isUndefined(v)){if(!z.isUndefined(g))return s(void 0,g,x,y)}else return s(g,v,x,y)}function l(g,v){if(!z.isUndefined(v))return s(void 0,v)}function c(g,v){if(z.isUndefined(v)){if(!z.isUndefined(g))return s(void 0,g)}else return s(void 0,v)}function f(g){const v=z.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!z.isUndefined(v))if(z.isPlainObject(v)){if(z.hasOwnProp(v,g))return v[g]}else return;const x=z.hasOwnProp(i,"transitional")?i.transitional:void 0;if(z.isPlainObject(x)&&z.hasOwnProp(x,g))return x[g]}function h(g,v,x){if(z.hasOwnProp(e,x))return s(g,v);if(z.hasOwnProp(i,x))return s(void 0,g)}const m={url:l,method:l,data:l,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutErrorMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,allowedSocketPaths:c,responseEncoding:c,validateStatus:h,headers:(g,v,x)=>o(Gg(g),Gg(v),x,!0)};return z.forEach(mA({...i,...e}),function(v){if(v==="__proto__"||v==="constructor"||v==="prototype")return;const x=z.hasOwnProp(m,v)?m[v]:o,y=z.hasOwnProp(i,v)?i[v]:void 0,E=z.hasOwnProp(e,v)?e[v]:void 0,T=x(y,E,v);z.isUndefined(T)&&x!==h||(t[v]=T)}),z.hasOwnProp(e,"validateStatus")&&z.isUndefined(e.validateStatus)&&f("validateStatusUndefinedResolves")===!1&&(z.hasOwnProp(i,"validateStatus")?t.validateStatus=s(void 0,i.validateStatus):delete t.validateStatus),t}const gA=["content-type","content-length"];function _A(i,e,t){if(t!=="content-only"){i.set(e);return}Object.entries(e||{}).forEach(([s,o])=>{gA.includes(s.toLowerCase())&&i.set(s,o)})}const vA=i=>encodeURIComponent(i).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function ov(i){const e=us({},i),t=x=>z.hasOwnProp(e,x)?e[x]:void 0,s=t("data");let o=t("withXSRFToken");const l=t("xsrfHeaderName"),c=t("xsrfCookieName");let f=t("headers");const h=t("auth"),m=t("baseURL"),g=t("allowAbsoluteUrls"),v=t("url");if(e.headers=f=yn.from(f),e.url=Z_(sv(m,v,g,e),t("params"),t("paramsSerializer")),h){const x=z.getSafeProp(h,"username")||"",y=z.getSafeProp(h,"password")||"";try{f.set("Authorization","Basic "+btoa(x+":"+(y?vA(y):"")))}catch(E){throw Pe.from(E,Pe.ERR_BAD_OPTION_VALUE,i)}}if(z.isFormData(s)){const x=z.getSafeProp(s,"getHeaders");on.hasStandardBrowserEnv||on.hasStandardBrowserWebWorkerEnv||z.isReactNative(s)?f.setContentType(void 0):z.isFunction(x)&&_A(f,x.call(s),t("formDataHeaderPolicy"))}if(on.hasStandardBrowserEnv&&(z.isFunction(o)&&(o=o(e)),o===!0||o==null&&lA(e.url))){const y=l&&c&&uA.read(c);y&&f.set(l,y)}return e}const xA=typeof XMLHttpRequest<"u",yA=xA&&function(i){return new Promise(function(t,s){const o=ov(i);let l=o.data;const c=yn.from(o.headers).normalize();let{responseType:f,onUploadProgress:h,onDownloadProgress:m}=o,g,v,x,y,E,T;function S(){y&&y(),E&&E(),o.cancelToken&&o.cancelToken.unsubscribe(g),o.signal&&o.signal.removeEventListener("abort",g)}let p=new XMLHttpRequest;p.open(o.method.toUpperCase(),o.url,!0),p.timeout=o.timeout;function b(A){if(!p)return;if(p.status===0&&(kf(rv(o.url))||kf(on.origin))!=="file"&&!(p.responseURL&&p.responseURL.startsWith("file:"))){s(new Pe("Request aborted",Pe.ECONNABORTED,i,p)),S(),p=null;return}try{A?T&&T(A):E&&E()}catch(G){setTimeout(()=>{throw G})}if(!p)return;const q=yn.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),U={data:!f||f==="text"||f==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:q,config:i,request:p};iv(function(L){t(L),S()},function(L){s(L),S()},U),p=null}"onloadend"in p?p.onloadend=b:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.startsWith("file:"))||setTimeout(b)},p.onabort=function(){p&&(s(new Pe("Request aborted",Pe.ECONNABORTED,i,p)),S(),p=null)},p.onerror=function(q){const O=q&&q.message?q.message:"Network Error",U=new Pe(O,Pe.ERR_NETWORK,i,p);U.event=q||null,s(U),S(),p=null},p.ontimeout=function(){let q=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const O=o.transitional||jd;o.timeoutErrorMessage&&(q=o.timeoutErrorMessage),s(new Pe(q,O.clarifyTimeoutError?Pe.ETIMEDOUT:Pe.ECONNABORTED,i,p)),S(),p=null},l===void 0&&c.setContentType(null),"setRequestHeader"in p&&z.forEach(X_(c),function(q,O){p.setRequestHeader(O,q)}),z.isUndefined(o.withCredentials)||(p.withCredentials=!!o.withCredentials),f&&f!=="json"&&(p.responseType=o.responseType),m&&([x,E,T]=uu(m,!0),p.addEventListener("progress",x)),h&&p.upload&&([v,y]=uu(h),p.upload.addEventListener("progress",v),p.upload.addEventListener("loadend",y)),(o.cancelToken||o.signal)&&(g=A=>{p&&(s(!A||A.type?new pa(null,i,p):A),p.abort(),S(),p=null)},o.cancelToken&&o.cancelToken.subscribe(g),o.signal&&(o.signal.aborted?g():o.signal.addEventListener("abort",g)));const P=kf(o.url);if(P&&!on.protocols.includes(P)){s(new Pe("Unsupported protocol "+P+":",Pe.ERR_BAD_REQUEST,i)),S();return}p.send(l||null)})},SA=(i,e)=>{if(i=i?i.filter(Boolean):[],!e&&!i.length)return;const t=new AbortController;let s=!1;const o=function(h){if(!s){s=!0,c();const m=h instanceof Error?h:this.reason;t.abort(m instanceof Pe?m:new pa(m instanceof Error?m.message:m))}};let l=e&&setTimeout(()=>{l=null,o(new Pe(`timeout of ${e}ms exceeded`,Pe.ETIMEDOUT))},e);const c=()=>{i&&(l&&clearTimeout(l),l=null,i.forEach(h=>{h.unsubscribe?h.unsubscribe(o):h.removeEventListener("abort",o)}),i=null)};i.forEach(h=>{if(!s){if(h.aborted){o.call(h);return}h.addEventListener("abort",o,{once:!0})}});const{signal:f}=t;return f.unsubscribe=()=>z.asap(c),f},EA=function*(i,e){let t=i.byteLength;if(t<e){yield i;return}let s=0,o;for(;s<t;)o=s+e,yield i.slice(s,o),s=o},MA=async function*(i,e){for await(const t of TA(i))yield*EA(t,e)},TA=async function*(i){if(i[Symbol.asyncIterator]){yield*i;return}const e=i.getReader();try{for(;;){const{done:t,value:s}=await e.read();if(t)break;yield s}}finally{await e.cancel()}},Wg=(i,e,t,s)=>{const o=MA(i,e);let l=0,c,f=h=>{c||(c=!0,s&&s(h))};return new ReadableStream({async pull(h){try{const{done:m,value:g}=await o.next();if(m){f(),h.close();return}let v=g.byteLength;if(t){let x=l+=v;t(x)}h.enqueue(new Uint8Array(g))}catch(m){throw f(m),m}},cancel(h){return f(h),o.return()}},{highWaterMark:2})},jg=i=>i>=48&&i<=57||i>=65&&i<=70||i>=97&&i<=102,av=(i,e,t)=>e+2<t&&jg(i.charCodeAt(e+1))&&jg(i.charCodeAt(e+2)),Xg=i=>i<=57?i-48:(i&223)-55,wA=i=>i>=65&&i<=90||i>=97&&i<=122||i>=48&&i<=57||i===43||i===47||i===45||i===95,AA=i=>i===9||i===10||i===12||i===13||i===32,RA=i=>{const e=Math.floor(i/4),t=i%4;return e*3+(t===2?1:t===3?2:0)},CA=i=>{const e=i.length;let t=0;return e>0&&i.charCodeAt(e-1)===61&&(t++,e>1&&i.charCodeAt(e-2)===61&&t++),Math.floor((e-t)*3/4)},bA=i=>{const e=i.length;let t=0,s=0,o=!1;for(let l=0;l<e;l++){let c=i.charCodeAt(l);if(c===37&&av(i,l,e)&&(c=Xg(i.charCodeAt(l+1))*16+Xg(i.charCodeAt(l+2)),l+=2),!AA(c)){if(c===61){s++;continue}if(!wA(c)||s>0){o=!0;continue}t++}}return o||s>2||s>0&&(t+s)%4!==0||t%4===1?CA(i):RA(t)},PA=(i,e)=>{if(!i||typeof i!="string"||!i.startsWith("data:"))return 0;const t=i.indexOf(",");if(t<0)return 0;const s=i.slice(5,t),o=i.slice(t+1);if(/;base64/i.test(s))return e(o);let c=0;for(let f=0,h=o.length;f<h;f++){const m=o.charCodeAt(f);if(m===37&&av(o,f,h))c+=1,f+=2;else if(m<128)c+=1;else if(m<2048)c+=2;else if(m>=55296&&m<=56319&&f+1<h){const g=o.charCodeAt(f+1);g>=56320&&g<=57343?(c+=4,f++):c+=3}else c+=3}return c};function LA(i){const e=typeof i=="string"?i.indexOf("#"):-1;return PA(e===-1?i:i.slice(0,e),bA)}const qd="1.20.0",qg=64*1024,DA={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:jl}=z,NA=i=>encodeURIComponent(i).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),Yg=i=>{if(!z.isString(i))return i;try{return decodeURIComponent(i)}catch{return i}},$g=(i,...e)=>{try{return!!i(...e)}catch{return!1}},UA=i=>{const e=i.indexOf("://");let t=i;return e!==-1&&(t=t.slice(e+3)),t.includes("@")||t.includes(":")},IA=i=>{const e=z.global!==void 0&&z.global!==null?z.global:globalThis,{ReadableStream:t,TextEncoder:s}=e;i=z.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},i);const{fetch:o,Request:l,Response:c}=i,f=o?jl(o):typeof fetch=="function",h=jl(l),m=jl(c);if(!f)return!1;const g=f&&jl(t),v=f&&(typeof s=="function"?(p=>b=>p.encode(b))(new s):async p=>new Uint8Array(await new l(p).arrayBuffer())),x=h&&g&&$g(()=>{let p=!1;const b=new l(on.origin,{body:new t,method:"POST",get duplex(){return p=!0,"half"}}),P=b.headers.has("Content-Type");return b.body!=null&&b.body.cancel(),p&&!P}),y=m&&g&&$g(()=>z.isReadableStream(new c("").body)),E={stream:y&&(p=>p.body)};f&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!E[p]&&(E[p]=(b,P)=>{let A=b&&b[p];if(A)return A.call(b);throw new Pe(`Response type '${p}' is not supported`,Pe.ERR_NOT_SUPPORT,P)})});const T=async p=>{if(p==null)return 0;if(z.isBlob(p))return p.size;if(z.isSpecCompliantForm(p))return(await new l(on.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(z.isArrayBufferView(p)||z.isArrayBuffer(p))return p.byteLength;if(z.isURLSearchParams(p)&&(p=p+""),z.isString(p))return(await v(p)).byteLength},S=async(p,b)=>{const P=z.toFiniteNumber(p.getContentLength());return P??T(b)};return async p=>{let{url:b,method:P,data:A,signal:q,cancelToken:O,timeout:U,onDownloadProgress:G,onUploadProgress:L,responseType:C,headers:k,withCredentials:ue="same-origin",fetchOptions:te,maxContentLength:fe,maxBodyLength:pe,maxRedirects:ce}=ov(p);const de=z.isNumber(fe)&&fe>-1,B=z.isNumber(pe)&&pe>-1,he=ae=>z.hasOwnProp(p,ae)?p[ae]:void 0;let se=o||fetch;C=C?(C+"").toLowerCase():"text";let I=SA([q,O&&O.toAbortSignal()],U),K=null;const be=I&&I.unsubscribe&&(()=>{I.unsubscribe()});let X,oe=null;const ve=()=>new Pe("Request body larger than maxBodyLength limit",Pe.ERR_BAD_REQUEST,p,K);try{let ae;const Te=he("auth");if(Te){const Ee=z.getSafeProp(Te,"username")||"",ot=z.getSafeProp(Te,"password")||"";ae={username:Ee,password:ot}}if(UA(b)){const Ee=new URL(b,on.origin);if(!ae&&(Ee.username||Ee.password)){const ot=Yg(Ee.username),ze=Yg(Ee.password);ae={username:ot,password:ze}}(Ee.username||Ee.password)&&(Ee.username="",Ee.password="",b=Ee.href)}if(ae&&(k.delete("authorization"),k.set("Authorization","Basic "+btoa(NA((ae.username||"")+":"+(ae.password||""))))),de&&typeof b=="string"&&b.startsWith("data:")&&LA(b)>fe)throw new Pe("maxContentLength size of "+fe+" exceeded",Pe.ERR_BAD_RESPONSE,p,K);if(B&&P!=="get"&&P!=="head"){const Ee=await T(A);if(typeof Ee=="number"&&isFinite(Ee)&&(X=Ee,Ee>pe))throw ve()}const Ue=B&&(z.isReadableStream(A)||z.isStream(A)),Ze=(Ee,ot,ze)=>Wg(Ee,qg,D=>{if(B&&D>pe)throw oe=ve();ot&&ot(D)},ze);if(x&&P!=="get"&&P!=="head"&&(L||Ue)){if(X=X??await S(k,A),X!==0||Ue){let Ee=new l(b,{method:"POST",body:A,duplex:"half"}),ot;if(z.isFormData(A)&&(ot=Ee.headers.get("content-type"))&&k.setContentType(ot),Ee.body){const[ze,D]=L&&zg(X,uu(Hg(L)))||[];A=Ze(Ee.body,ze,D)}}}else if(Ue&&!h&&g&&P!=="get"&&P!=="head")A=Ze(A);else if(Ue&&h&&!x&&P!=="get"&&P!=="head")throw new Pe("Stream request bodies are not supported by the current fetch implementation",Pe.ERR_NOT_SUPPORT,p,K);z.isString(ue)||(ue=ue?"include":"omit");const vt=h&&"credentials"in l.prototype;if(z.isFormData(A)){const Ee=k.getContentType();Ee&&/^multipart\/form-data/i.test(Ee)&&!/boundary=/i.test(Ee)&&k.delete("content-type")}k.set("User-Agent","axios/"+qd,!1);const et=te==null?te:Object.assign(Object.create(null),te);et&&(delete et.body,delete et.headers,delete et.method,delete et.signal,delete et.duplex,delete et.credentials);const pt=Object.assign(Object.create(null),et,{signal:I,method:P.toUpperCase(),headers:X_(k.normalize()),body:A,duplex:"half",credentials:vt?ue:void 0});h&&(z.forEach(DA,(Ee,ot)=>{pt[ot]===void 0&&(pt[ot]=Ee)}),pt.signal===void 0&&(pt.signal=null),pt.body===void 0&&(pt.body=null)),ce===0&&(pt.redirect="manual",et&&(et.redirect="manual")),K=h&&new l(b,pt);let V=await(h?se(K,et):se(b,pt));const en=yn.from(V.headers);if(de){const Ee=z.toFiniteNumber(en.getContentLength());if(Ee!=null&&Ee>fe)throw new Pe("maxContentLength size of "+fe+" exceeded",Pe.ERR_BAD_RESPONSE,p,K)}const ft=y&&(C==="stream"||C==="response");if(y&&V.body&&(G||de||ft&&be)){const Ee={};["status","statusText","headers"].forEach(me=>{Ee[me]=V[me]});const ot=z.toFiniteNumber(en.getContentLength()),[ze,D]=G&&zg(ot,uu(Hg(G),!0))||[];let w=0;const J=me=>{if(de&&(w=me,w>fe))throw new Pe("maxContentLength size of "+fe+" exceeded",Pe.ERR_BAD_RESPONSE,p,K);ze&&ze(me)};V=new c(Wg(V.body,qg,J,()=>{D&&D(),be&&be()}),Ee)}C=C||"text";let nt=await E[z.findKey(E,C)||"text"](V,p);if(de&&!y&&!ft){let Ee;if(nt!=null&&(typeof nt.byteLength=="number"?Ee=nt.byteLength:typeof nt.size=="number"?Ee=nt.size:typeof nt=="string"&&(Ee=typeof s=="function"?new s().encode(nt).byteLength:nt.length)),typeof Ee=="number"&&Ee>fe)throw new Pe("maxContentLength size of "+fe+" exceeded",Pe.ERR_BAD_RESPONSE,p,K)}return!ft&&be&&be(),await new Promise((Ee,ot)=>{iv(Ee,ot,{data:nt,headers:yn.from(V.headers),status:V.status,statusText:V.statusText,config:p,request:K})})}catch(ae){if(be&&be(),I&&I.aborted&&I.reason instanceof Pe){const Te=I.reason;throw Te.config=p,K&&(Te.request=K),ae!==Te&&Object.defineProperty(Te,"cause",{__proto__:null,value:ae,writable:!0,enumerable:!1,configurable:!0}),Te}if(oe)throw K&&!oe.request&&(oe.request=K),oe;if(ae instanceof Pe)throw K&&!ae.request&&(ae.request=K),ae;if(ae&&ae.name==="TypeError"&&/Load failed|fetch/i.test(ae.message)){const Te=new Pe("Network Error",Pe.ERR_NETWORK,p,K,ae&&ae.response);throw Object.defineProperty(Te,"cause",{__proto__:null,value:ae.cause||ae,writable:!0,enumerable:!1,configurable:!0}),Te}throw Pe.from(ae,ae&&ae.code,p,K,ae&&ae.response)}}},OA=new Map,lv=i=>{let e=i&&i.env||{};const{fetch:t,Request:s,Response:o}=e,l=[s,o,t];let c=l.length,f=c,h,m,g=OA;for(;f--;)h=l[f],m=g.get(h),m===void 0&&g.set(h,m=f?new Map:IA(e)),g=m;return m};lv();const Yd={http:G1,xhr:yA,fetch:{get:lv}};z.forEach(Yd,(i,e)=>{if(i){try{Object.defineProperty(i,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(i,"adapterName",{__proto__:null,value:e})}});const Kg=i=>`- ${i}`,FA=i=>z.isFunction(i)||i===null||i===!1;function kA(i,e){i=z.isArray(i)?i:[i];const{length:t}=i;let s,o;const l={};for(let c=0;c<t;c++){s=i[c];let f;if(o=s,!FA(s)&&(o=Yd[(f=String(s)).toLowerCase()],o===void 0))throw new Pe(`Unknown adapter '${f}'`);if(o&&(z.isFunction(o)||(o=o.get(e))))break;l[f||"#"+c]=o}if(!o){const c=Object.entries(l).map(([h,m])=>`adapter ${h} `+(m===!1?"is not supported by the environment":"is not available in the build"));let f=t?c.length>1?`since :
`+c.map(Kg).join(`
`):" "+Kg(c[0]):"as no adapter specified";throw new Pe("There is no suitable adapter to dispatch the request "+f,Pe.ERR_NOT_SUPPORT)}return o}const uv={getAdapter:kA,adapters:Yd};function Bf(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new pa(null,i)}function zf(i){const e=z.toSafeFlatObject(i);return Bf(e),e.headers=yn.from(z.getSafeProp(e,"headers")),e.data=Ff.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),uv.getAdapter(e.adapter||ha.adapter,e)(e).then(function(o){Bf(e),e.response=o;try{o.data=Ff.call(e,e.transformResponse,o)}finally{delete e.response}return o.headers=yn.from(o.headers),o},function(o){if(!nv(o)&&(Bf(e),o&&o.response)){e.response=o.response;try{o.response.data=Ff.call(e,e.transformResponse,o.response)}finally{delete e.response}o.response.headers=yn.from(o.response.headers)}return Promise.reject(o)})}const _u={};["object","boolean","number","function","string","symbol"].forEach((i,e)=>{_u[i]=function(s){return typeof s===i||"a"+(e<1?"n ":" ")+i}});const Zg={};_u.transitional=function(e,t,s){function o(l,c){return"[Axios v"+qd+"] Transitional option '"+l+"'"+c+(s?". "+s:"")}return(l,c,f)=>{if(e===!1)throw new Pe(o(c," has been removed"+(t?" in "+t:"")),Pe.ERR_DEPRECATED);return t&&!Zg[c]&&(Zg[c]=!0,console.warn(o(c," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(l,c,f):!0}};_u.spelling=function(e){return(t,s)=>(console.warn(`${s} is likely a misspelling of ${e}`),!0)};function BA(i,e,t){if(typeof i!="object"||i===null)throw new Pe("options must be an object",Pe.ERR_BAD_OPTION_VALUE);const s=Object.keys(i);let o=s.length;for(;o-- >0;){const l=s[o],c=Object.prototype.hasOwnProperty.call(e,l)?e[l]:void 0;if(c){const f=i[l],h=f===void 0||c(f,l,i);if(h!==!0)throw new Pe("option "+l+" must be "+h,Pe.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Pe("Unknown option "+l,Pe.ERR_BAD_OPTION)}}const eu={assertOptions:BA,validators:_u},vn=eu.validators;let rs=class{constructor(e){this.defaults=e||{},this.interceptors={request:new kg,response:new kg}}async request(e,t){try{return await this._request(e,t)}catch(s){if(s instanceof Error)try{let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=o.stack;let c="";if(typeof l=="string"){const f=l.indexOf(`
`);c=f===-1?"":l.slice(f+1)}if(!s.stack)s.stack=c;else if(c){const f=c.indexOf(`
`),h=f===-1?-1:c.indexOf(`
`,f+1),m=h===-1?"":c.slice(h+1);String(s.stack).endsWith(m)||(s.stack+=`
`+c)}}catch{}throw s}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=us(this.defaults,t);const{transitional:s,paramsSerializer:o,headers:l}=t;s!==void 0&&eu.assertOptions(s,{silentJSONParsing:vn.transitional(vn.boolean),forcedJSONParsing:vn.transitional(vn.boolean),clarifyTimeoutError:vn.transitional(vn.boolean),legacyInterceptorReqResOrdering:vn.transitional(vn.boolean),advertiseZstdAcceptEncoding:vn.transitional(vn.boolean),validateStatusUndefinedResolves:vn.transitional(vn.boolean)},!1),o!=null&&(z.isFunction(o)?t.paramsSerializer={serialize:o}:eu.assertOptions(o,{encode:vn.function,serialize:vn.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),eu.assertOptions(t,{baseUrl:vn.spelling("baseURL"),withXsrfToken:vn.spelling("withXSRFToken")},!0),t.method=(z.getSafeProp(t,"method")||z.getSafeProp(this.defaults,"method")||"get").toLowerCase();let c=l&&z.merge(l.common,l[t.method]);l&&z.forEach(tv.concat("common"),E=>{delete l[E]}),t.headers=yn.concat(c,l);const f=[];let h=!0;this.interceptors.request.forEach(function(T){if(typeof T.runWhen=="function"&&T.runWhen(t)===!1)return;h=h&&T.synchronous;const S=t.transitional||jd;S&&S.legacyInterceptorReqResOrdering?f.unshift(T.fulfilled,T.rejected):f.push(T.fulfilled,T.rejected)});const m=[];this.interceptors.response.forEach(function(T){m.push(T.fulfilled,T.rejected)});let g,v=0,x;if(!h){const E=[zf.bind(this),void 0];for(E.unshift(...f),E.push(...m),x=E.length,g=Promise.resolve(t);v<x;)g=g.then(E[v++],E[v++]);return g}x=f.length;let y=t;for(;v<x;){const E=f[v++],T=f[v++];try{y=E?E(y):y}catch(S){if(!T){g=Promise.reject(S);break}try{const p=T.call(this,S);z.isThenable(p)&&(g=Promise.resolve(p).then(()=>zf.call(this,y)))}catch(p){g=Promise.reject(p)}break}}if(!g)try{g=zf.call(this,y)}catch(E){g=Promise.reject(E)}for(v=0,x=m.length;v<x;)g=g.then(m[v++],m[v++]);return g}getUri(e){e=us(this.defaults,e);const t=sv(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Z_(t,e.params,e.paramsSerializer)}};z.forEach(["delete","get","head","options"],function(e){rs.prototype[e]=function(t,s){return this.request(us(s||{},{method:e,url:t,data:s&&z.hasOwnProp(s,"data")?s.data:void 0}))}});z.forEach(["post","put","patch","query"],function(e){function t(s){return function(l,c,f){return this.request(us(f||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:l,data:c}))}}rs.prototype[e]=t(),e!=="query"&&(rs.prototype[e+"Form"]=t(!0))});let zA=class cv{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(l){t=l});const s=this;this.promise.then(o=>{if(!s._listeners)return;let l=s._listeners.length;for(;l-- >0;)s._listeners[l](o);s._listeners=null}),this.promise.then=o=>{let l;const c=new Promise(f=>{s.subscribe(f),l=f}).then(o);return c.cancel=function(){s.unsubscribe(l)},c},e(function(l,c,f){s.reason||(s.reason=new pa(l,c,f),t(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=s=>{e.abort(s)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new cv(function(o){e=o}),cancel:e}}};function HA(i){return function(t){return i.apply(null,t)}}function VA(i){return z.isObject(i)&&i.isAxiosError===!0}const tu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(tu).forEach(([i,e])=>{tu[e]===void 0&&(tu[e]=i)});function fv(i){const e=new rs(i),t=I_(rs.prototype.request,e);return z.extend(t,rs.prototype,e,{allOwnKeys:!0}),z.extend(t,e,null,{allOwnKeys:!0}),t.create=function(o){return fv(us(i,o))},t}const Vt=fv(ha);Vt.Axios=rs;Vt.CanceledError=pa;Vt.CancelToken=zA;Vt.isCancel=nv;Vt.VERSION=qd;Vt.toFormData=gu;Vt.AxiosError=Pe;Vt.Cancel=Vt.CanceledError;Vt.all=function(e){return Promise.all(e)};Vt.spread=HA;Vt.isAxiosError=VA;Vt.mergeConfig=us;Vt.AxiosHeaders=yn;Vt.formToJSON=i=>ev(z.isHTMLForm(i)?new FormData(i):i);Vt.getAdapter=uv.getAdapter;Vt.HttpStatusCode=tu;Vt.default=Vt;const{Axios:eR,AxiosError:tR,CanceledError:nR,isCancel:iR,CancelToken:rR,VERSION:sR,all:oR,Cancel:aR,isAxiosError:lR,spread:uR,toFormData:cR,AxiosHeaders:fR,HttpStatusCode:dR,formToJSON:hR,getAdapter:pR,mergeConfig:mR,create:gR}=Vt,$d="/api";async function GA(i,e=null,t=null){var s;try{const o={};return e&&(o.date=e),t&&(t.lat&&(o.lat=t.lat),t.lon&&(o.lon=t.lon),t.name&&(o.locationName=t.name)),(s=(await Vt.get(`${$d}/planet/${i}`,{params:o,timeout:8e3})).data)==null?void 0:s.data}catch(o){throw console.error(`[API Service] Error fetching details for ${i}:`,o),o}}async function WA(){var i;try{return((i=(await Vt.get(`${$d}/locations`,{timeout:4e3})).data)==null?void 0:i.data)||[]}catch(e){return console.warn("[API Service] Failed to fetch preset locations:",e.message),[{name:"New Delhi, India",lat:28.6139,lon:77.209},{name:"London, UK",lat:51.5074,lon:-.1278},{name:"New York, USA",lat:40.7128,lon:-74.006},{name:"Tokyo, Japan",lat:35.6762,lon:139.6503}]}}async function jA(){var i;try{return((i=(await Vt.get(`${$d}/health`,{timeout:3e3})).data)==null?void 0:i.status)==="ONLINE"}catch{return!1}}function XA({isOpen:i,onClose:e,onSelectLocation:t}){const[s,o]=Ut.useState([]),[l,c]=Ut.useState(""),[f,h]=Ut.useState(""),[m,g]=Ut.useState("");if(Ut.useEffect(()=>{i&&WA().then(o)},[i]),!i)return null;const v=x=>{x.preventDefault(),l&&f&&(t({name:m||`Lat: ${l}, Lon: ${f}`,lat:parseFloat(l),lon:parseFloat(f)}),e())};return ee.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999},children:ee.jsxs("div",{className:"crt-box-double",style:{padding:"20px",width:"420px",color:"var(--primary-green)",maxHeight:"90vh",overflowY:"auto"},children:[ee.jsx("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"10px"},children:"◆ SELECT EARTH WEATHER LOCATION"}),ee.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",marginBottom:"12px"},children:"Choose a preset station or input custom geographic coordinates:"}),ee.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"16px"},children:s.map((x,y)=>ee.jsxs("button",{onClick:()=>{t(x),e()},style:{background:"var(--panel-bg)",border:"1px solid var(--border-green)",color:"var(--primary-green)",padding:"6px 8px",fontSize:"13px",textAlign:"left",cursor:"pointer"},children:["> ",x.name]},y))}),ee.jsxs("form",{onSubmit:v,style:{borderTop:"1px dashed var(--border-green)",paddingTop:"12px"},children:[ee.jsx("div",{style:{fontSize:"13px",marginBottom:"6px",color:"var(--secondary-cyan)"},children:"CUSTOM COORDINATES:"}),ee.jsx("div",{style:{display:"flex",gap:"8px",marginBottom:"8px"},children:ee.jsx("input",{type:"text",placeholder:"Location Name",value:m,onChange:x=>g(x.target.value),style:{flex:1,background:"var(--panel-bg)",border:"1px solid var(--border-green)",color:"var(--primary-green)",padding:"4px 6px",fontFamily:"VT323, monospace",fontSize:"14px"}})}),ee.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"12px"},children:[ee.jsx("input",{type:"number",step:"any",placeholder:"Latitude (-90 to 90)",value:l,onChange:x=>c(x.target.value),style:{flex:1,background:"var(--panel-bg)",border:"1px solid var(--border-green)",color:"var(--primary-green)",padding:"4px 6px",fontFamily:"VT323, monospace",fontSize:"14px"}}),ee.jsx("input",{type:"number",step:"any",placeholder:"Longitude (-180 to 180)",value:f,onChange:x=>h(x.target.value),style:{flex:1,background:"var(--panel-bg)",border:"1px solid var(--border-green)",color:"var(--primary-green)",padding:"4px 6px",fontFamily:"VT323, monospace",fontSize:"14px"}})]}),ee.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[ee.jsx("button",{type:"button",onClick:e,style:{background:"none",border:"1px solid var(--alert-red)",color:"var(--alert-red)",padding:"4px 12px",fontSize:"13px"},children:"CANCEL"}),ee.jsx("button",{type:"submit",style:{background:"var(--dark-green)",border:"1px solid var(--primary-green)",color:"var(--primary-green)",padding:"4px 14px",fontSize:"13px",fontWeight:"bold"},children:"SET LOCATION"})]})]})]})})}function qA({enabled:i=!0}){return i?ee.jsx("div",{className:"crt-scanlines"}):null}function YA(i="earth"){const[e,t]=Ut.useState(i),[s,o]=Ut.useState(null),[l,c]=Ut.useState(!0),[f,h]=Ut.useState([]),[m,g]=Ut.useState(null),[v,x]=Ut.useState("ONLINE"),[y,E]=Ut.useState(null),[T,S]=Ut.useState({name:"New Delhi, India (Default)",lat:28.6139,lon:77.209}),p=Ut.useCallback(async(P,A,q)=>{var O,U;c(!0),g(null),h(["> INITIALIZING TELEMETRY LINK...",`> TARGET: ${P.toUpperCase()}`,"> CONNECTING TO NASA/JPL HORIZONS...","> REQUESTING STATE VECTORS & EPHEMERIS...","> PROCESSING ENVIRONMENTAL TELEMETRY..."]);try{const G=await jA();G||x("OFFLINE");const L=await GA(P,A,q);h(C=>[...C,"> UPDATING 3D VISUALIZATION...","> READY"]),o(L),((O=L.ephemeris)==null?void 0:O.dataType)==="CACHED"||((U=L.weather)==null?void 0:U.dataType)==="CACHED"?x("CACHED"):G&&x("ONLINE")}catch(G){console.error("[usePlanetData] Fetch error:",G),g(G.message||"Failed to connect to Planetary Data Link"),x("OFFLINE"),h(L=>[...L,"> ERROR: DATA LINK TIMEOUT","> RETRYING LOCAL CACHE..."])}finally{setTimeout(()=>{c(!1)},400)}},[]);return Ut.useEffect(()=>{p(e,y,T)},[e,y,T,p]),{selectedPlanet:e,selectPlanet:P=>{P!==e&&t(P)},planetData:s,loading:l,loadingSteps:f,error:m,dataLinkStatus:v,selectedDate:y,setSelectedDate:E,earthLocation:T,setEarthLocation:S,refreshData:()=>p(e,y,T)}}const Tr=["sun","mercury","venus","earth","mars","jupiter","saturn","uranus","neptune","moon","pluto"];function $A(i,e){Ut.useEffect(()=>{function t(s){if(s.target.tagName==="INPUT"||s.target.tagName==="TEXTAREA"||s.target.tagName==="SELECT")return;const o=Tr.indexOf(i.toLowerCase());if(s.key==="ArrowRight"){s.preventDefault();const l=(o+1)%Tr.length;e(Tr[l])}else if(s.key==="ArrowLeft"){s.preventDefault();const l=(o-1+Tr.length)%Tr.length;e(Tr[l])}else if(s.key>="1"&&s.key<="9"){s.preventDefault();const l=parseInt(s.key,10)-1;l<Tr.length&&e(Tr[l])}else s.key==="0"?(s.preventDefault(),e("moon")):s.key==="Escape"&&e("earth")}return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[i,e])}function KA(){const{selectedPlanet:i,selectPlanet:e,planetData:t,loading:s,loadingSteps:o,error:l,dataLinkStatus:c,selectedDate:f,setSelectedDate:h,setEarthLocation:m}=YA("earth"),[g,v]=Ut.useState(!1),[x,y]=Ut.useState(!0),[E,T]=Ut.useState(!1),[S,p]=Ut.useState(!1);$A(i,e);const b=P=>{const A=P.toLowerCase().trim();["sun","mercury","venus","earth","mars","jupiter","saturn","uranus","neptune","moon","pluto"].includes(A)?e(A):A==="pause"?v(!0):A==="resume"?v(!1):A==="date"||A==="time"?T(!0):A==="location"?p(!0):A==="crt"?y(!x):alert(A==="help"?`PLANET TERMINAL COMMANDS:
- [planet name] (e.g. 'mars', 'saturn', 'sun')
- 'pause' / 'resume'
- 'date' (ephemeris time picker)
- 'location' (Earth weather location)
- 'crt' (toggle CRT scanlines)`:`Command '${P}' not recognized. Type 'help' for available commands.`)};return ee.jsxs("div",{className:"crt-frame",children:[ee.jsxs("div",{className:`crt-screen ${x?"flicker":""}`,children:[ee.jsx(qA,{enabled:x}),ee.jsx(nx,{selectedPlanetName:i,dataLinkStatus:c,onTimeClick:()=>T(!0),onToggleScanlines:()=>y(!x),scanlinesEnabled:x}),ee.jsx(Tw,{planetId:i,isPaused:g,onTogglePause:()=>v(!g)}),ee.jsx(Rw,{planetData:t,loading:s,loadingSteps:o,error:l,onOpenLocationModal:()=>p(!0)}),ee.jsx(Cw,{onExecuteCommand:b}),ee.jsx(Lw,{selectedPlanet:i,onSelectPlanet:e})]}),ee.jsx(Dw,{isOpen:E,onClose:()=>T(!1),selectedDate:f,onSelectDate:h}),ee.jsx(XA,{isOpen:S,onClose:()=>p(!1),onSelectLocation:m})]})}ex.createRoot(document.getElementById("root")).render(ee.jsx(q0.StrictMode,{children:ee.jsx(KA,{})}));
