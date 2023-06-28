"use strict";var u=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ur=u(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.last=void 0;function ft(e){return e[e.length-1]}U.last=ft});var Le=u(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.moveIndex=void 0;function lt(e,t,r){if(t===r)return e;let i=e.splice(t,1);return e.splice(r,0,i[0]),e}I.moveIndex=lt});var or=u(L=>{"use strict";Object.defineProperty(L,"__esModule",{value:!0});L.moveItem=void 0;var _t=Le();function bt(e,t,r){let i=e.indexOf(t);if(i===-1)return e;let n=(i+r)%5;return n<0&&(n+=e.length),(0,_t.moveIndex)(e,i,n)}L.moveItem=bt});var cr=u(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});F.range=void 0;function sr(e,t){return t!==void 0?sr(t-e+1).map(r=>r+e):Array.from(Array(e).keys())}F.range=sr});var ar=u(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.removeItem=void 0;function vt(e,t){let r=e.indexOf(t);return r===-1||e.splice(r,1),e}H.removeItem=vt});var D=u(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.getJson=void 0;function Ot(e,t,r){try{return JSON.stringify(e,null,r?2:0)}catch{return t}}C.getJson=Ot});var S=u(K=>{"use strict";Object.defineProperty(K,"__esModule",{value:!0});K.isArray=void 0;function gt(e){return Array.isArray(e)}K.isArray=gt});var N=u(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});z.isRecord=void 0;var ht=S();function pt(e){return typeof e=="object"&&!(0,ht.isArray)(e)}z.isRecord=pt});var X=u(V=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});V.isFunction=void 0;function yt(e){return typeof e=="function"}V.isFunction=yt});var P=u(Z=>{"use strict";Object.defineProperty(Z,"__esModule",{value:!0});Z.isNil=void 0;function jt(e){return e==null}Z.isNil=jt});var Fe=u(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.valueBy=void 0;var Pt=N(),qt=S(),dr=X(),fr=P();function wt(e,t,r){let i={},n=(0,dr.isFunction)(t)?t:(0,fr.isNil)(t)?(o,s)=>s:o=>o[t],c=(0,dr.isFunction)(r)?r:(0,fr.isNil)(r)?o=>o:o=>o[r];return(0,qt.isArray)(e)&&e.forEach((o,s)=>{i[n(o,s)]=c(o,s)}),(0,Pt.isRecord)(e)&&Object.entries(e).forEach(([o,s])=>{i[n(s,o)]=c(s,o)}),i}G.valueBy=wt});var lr=u(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});Q.uniq=void 0;var Mt=D(),St=Fe();function mt(e){return Object.values((0,St.valueBy)(e,t=>(0,Mt.getJson)(t)))}Q.uniq=mt});var _r=u(_=>{"use strict";var Bt=_&&_.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),E=_&&_.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&Bt(t,e,r)};Object.defineProperty(_,"__esModule",{value:!0});E(ur(),_);E(Le(),_);E(or(),_);E(cr(),_);E(ar(),_);E(lr(),_)});var br=u(W=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0});W.toArray=void 0;var Rt=S(),Dt=P();function Nt(e,t=[]){return(0,Dt.isNil)(e)?t:(0,Rt.isArray)(e)?e:[e]}W.toArray=Nt});var He=u(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.isString=void 0;function Et(e){return typeof e=="string"}Y.isString=Et});var vr=u($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});$.toBoolean=void 0;var At=P(),Jt=He();function Tt(e,t){return(0,Jt.isString)(e)?["true","ok","on","1"].indexOf(String(e).toLowerCase())!==-1:(0,At.isNil)(e)?t:!!e}$.toBoolean=Tt});var Or=u(x=>{"use strict";Object.defineProperty(x,"__esModule",{value:!0});x.toDate=void 0;function Ut(e,t){return e instanceof Date?e:typeof e=="string"?new Date(e):typeof e=="number"?new Date(e):t===void 0?new Date:t}x.toDate=Ut});var gr=u(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.toError=void 0;function It(e){return e instanceof Error?e:new Error(String(e))}k.toError=It});var pr=u(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.nbr=A.toNumber=void 0;function hr(e,t){let r=typeof e=="string"?e.replace(/,/g,".").replace(/[^0-9\-\.]/g,""):String(e),i=r!==""?Number(r):Number.NaN;return Number.isNaN(i)?t:i}A.toNumber=hr;A.nbr=hr});var yr=u(ee=>{"use strict";Object.defineProperty(ee,"__esModule",{value:!0});ee.toRecord=void 0;function Lt(e,t={}){return e===null||typeof e!="object"||Array.isArray(e)?t:e}ee.toRecord=Lt});var jr=u(re=>{"use strict";Object.defineProperty(re,"__esModule",{value:!0});re.toString=void 0;var Ft=P();function Ht(e,t=""){return(0,Ft.isNil)(e)?t:String(e)}re.toString=Ht});var Pr=u(f=>{"use strict";var Ct=f&&f.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),m=f&&f.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&Ct(t,e,r)};Object.defineProperty(f,"__esModule",{value:!0});m(br(),f);m(vr(),f);m(Or(),f);m(gr(),f);m(pr(),f);m(yr(),f);m(jr(),f)});var qr=u(te=>{"use strict";Object.defineProperty(te,"__esModule",{value:!0});te.isDate=void 0;function Kt(e){return e instanceof Date}te.isDate=Kt});var wr=u(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.isEmpty=void 0;var zt=S(),Vt=P(),Xt=N();function Zt(e){return(0,Vt.isNil)(e)||e===""||(0,zt.isArray)(e)&&e.length===0||(0,Xt.isRecord)(e)&&Object.keys(e).length===0}ie.isEmpty=Zt});var Mr=u(ne=>{"use strict";Object.defineProperty(ne,"__esModule",{value:!0});ne.isUndefined=void 0;function Gt(e){return typeof e>"u"}ne.isUndefined=Gt});var Sr=u(ue=>{"use strict";Object.defineProperty(ue,"__esModule",{value:!0});ue.isUuid=void 0;function Qt(e){let t=String(e).replace(/[a-zA-Z0-9]+/g,r=>""+r.length);return t==="8-4-4-4-12"||t==="32"}ue.isUuid=Qt});var mr=u(d=>{"use strict";var Wt=d&&d.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),g=d&&d.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&Wt(t,e,r)};Object.defineProperty(d,"__esModule",{value:!0});g(S(),d);g(qr(),d);g(wr(),d);g(N(),d);g(X(),d);g(P(),d);g(N(),d);g(He(),d);g(Mr(),d);g(Sr(),d)});var T=u(oe=>{"use strict";Object.defineProperty(oe,"__esModule",{value:!0});oe.parseJson=void 0;function Yt(e,t){try{return JSON.parse(e)}catch{return t}}oe.parseJson=Yt});var ce=u(se=>{"use strict";Object.defineProperty(se,"__esModule",{value:!0});se.storage=void 0;var Ce={},Br=globalThis.localStorage||{getItem:e=>Ce[e]||null,removeItem:e=>{delete Ce[e]},setItem:(e,t)=>Ce[e]=t};function $t(e){return e&&(Br=e),Br}se.storage=$t});var de=u(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.getStored=void 0;var xt=T(),kt=ce();function ei(e,t){let r=(0,kt.storage)().getItem(e);return(0,xt.parseJson)(r,t)}ae.getStored=ei});var Ke=u(fe=>{"use strict";Object.defineProperty(fe,"__esModule",{value:!0});fe.setStored=void 0;var ri=D(),Rr=ce();function ti(e,t){let r=t!==void 0?(0,ri.getJson)(t):void 0;r===void 0?(0,Rr.storage)().removeItem(e):(0,Rr.storage)().setItem(e,r)}fe.setStored=ti});var Ve=u(y=>{"use strict";var ii=y&&y.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),ze=y&&y.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&ii(t,e,r)};Object.defineProperty(y,"__esModule",{value:!0});ze(de(),y);ze(Ke(),y);ze(ce(),y)});var Dr=u(le=>{"use strict";Object.defineProperty(le,"__esModule",{value:!0});le.copy=void 0;var ni=D(),ui=Ve();function oi(e){return(0,ui.setStored)("__clipboard",e),navigator&&navigator.clipboard?navigator.clipboard.writeText((0,ni.getJson)(e,"")):Promise.resolve()}le.copy=oi});var Er=u(_e=>{"use strict";Object.defineProperty(_e,"__esModule",{value:!0});_e.paste=void 0;var si=T(),Nr=de();function ci(){return navigator&&navigator.clipboard?navigator.clipboard.readText().then(e=>(0,si.parseJson)(e,e)).catch(()=>(0,Nr.getStored)("__clipboard")):Promise.resolve((0,Nr.getStored)("__clipboard"))}_e.paste=ci});var Jr=u(q=>{"use strict";var ai=q&&q.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),Ar=q&&q.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&ai(t,e,r)};Object.defineProperty(q,"__esModule",{value:!0});Ar(Dr(),q);Ar(Er(),q)});var Tr=u(be=>{"use strict";Object.defineProperty(be,"__esModule",{value:!0});be.cloneJson=void 0;var di=T(),fi=D();function li(e,t){return(0,di.parseJson)((0,fi.getJson)(e),t)}be.cloneJson=li});var Ur=u(j=>{"use strict";var _i=j&&j.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),Xe=j&&j.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&_i(t,e,r)};Object.defineProperty(j,"__esModule",{value:!0});Xe(Tr(),j);Xe(D(),j);Xe(T(),j)});var Ir=u(ve=>{"use strict";Object.defineProperty(ve,"__esModule",{value:!0});ve.bounds=void 0;function bi(e,t,r){return t!==void 0&&e<t&&(e=t),r!==void 0&&e>r&&(e=r),e}ve.bounds=bi});var Lr=u(Oe=>{"use strict";Object.defineProperty(Oe,"__esModule",{value:!0});Oe.diff=void 0;function vi(e,t){return Math.abs(e-t)}Oe.diff=vi});var Fr=u(ge=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});ge.rand=void 0;function Oi(e,t){return Math.random()*(t-e)+e}ge.rand=Oi});var Hr=u(he=>{"use strict";Object.defineProperty(he,"__esModule",{value:!0});he.round=void 0;function gi(e,t){let r=Math.pow(10,t||0);return Math.round(e*r)/r}he.round=gi});var Cr=u(h=>{"use strict";var hi=h&&h.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),pe=h&&h.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&hi(t,e,r)};Object.defineProperty(h,"__esModule",{value:!0});pe(Ir(),h);pe(Lr(),h);pe(Fr(),h);pe(Hr(),h)});var Ge=u(ye=>{"use strict";Object.defineProperty(ye,"__esModule",{value:!0});ye.Observer=void 0;var pi=de(),yi=Ke(),ji=e=>e!=null,Ze=class e{constructor(t,r){this.hs=[],this.val=t,r&&(this.key=r)}get(){return this.val}set(t){let r=this.val;return this.val=typeof t=="function"?t(this.val):t,r!==this.val&&this.hs.forEach(i=>i(this.val,r)),this}on(t){return this.hs.push(t),!this.srcOff&&this.src&&this.srcH&&(this.srcOff=this.src.on(this.srcH)),()=>this.off(t)}off(t){this.hs.splice(this.hs.indexOf(t),1),this.srcOff&&this.hs.length===0&&(this.srcOff(),delete this.srcOff)}store(t){if(this.sKey===t)return this;this.sKey=t,this.on(i=>(0,yi.setStored)(t,i));let r=(0,pi.getStored)(t);return r!==void 0&&this.set(r),this}map(t){let r=new e(t(this.val));return r.src=this,r.srcH=()=>r.set(t(this.val)),r}debounce(t){let r,i=new e(this.val);return i.src=this,i.srcH=()=>{clearTimeout(r),r=setTimeout(()=>i.set(this.val),t)},i}throttle(t){let r=null,i=0,n=new e(this.val);n.src=this;let c=()=>{r=null,i=Date.now(),n.set(this.val)};return n.srcH=()=>{if(r!==null)return;let o=t-(Date.now()-i);if(o<0)return c();r=setTimeout(c,o)},n}toPromise(t=ji){return new Promise(r=>{if(t(this.val))return r(this.val);let i=this.on(n=>{t(n)&&(i(),r(n))})})}};ye.Observer=Ze});var zr=u(je=>{"use strict";Object.defineProperty(je,"__esModule",{value:!0});je.getObserver=void 0;var Qe=Ge(),Kr={};function Pi(e,t,r){return e===null?new Qe.Observer(t):Kr[e]||(Kr[e]=r?new Qe.Observer(t,e):new Qe.Observer(t,e).store(e))}je.getObserver=Pi});var Xr=u(w=>{"use strict";var qi=w&&w.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),Vr=w&&w.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&qi(t,e,r)};Object.defineProperty(w,"__esModule",{value:!0});Vr(zr(),w);Vr(Ge(),w)});var Zr=u(Pe=>{"use strict";Object.defineProperty(Pe,"__esModule",{value:!0});Pe.sleep=void 0;function wi(e){return new Promise(t=>setTimeout(t,e))}Pe.sleep=wi});var Gr=u(J=>{"use strict";Object.defineProperty(J,"__esModule",{value:!0});J.withTimeout=J.TimeoutError=void 0;var qe=class extends Error{constructor(t){super(t),this.name="TimeoutError"}};J.TimeoutError=qe;function Mi(e,t=5e3){return Promise.race([e,new Promise((r,i)=>setTimeout(()=>i(new qe),t))])}J.withTimeout=Mi});var Wr=u(M=>{"use strict";var Si=M&&M.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),Qr=M&&M.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&Si(t,e,r)};Object.defineProperty(M,"__esModule",{value:!0});Qr(Zr(),M);Qr(Gr(),M)});var Yr=u(we=>{"use strict";Object.defineProperty(we,"__esModule",{value:!0});we.cloneRecord=void 0;function mi(e){return Object.assign({},e)}we.cloneRecord=mi});var $r=u(Me=>{"use strict";Object.defineProperty(Me,"__esModule",{value:!0});Me.deleteKey=void 0;function Bi(e,t){return delete e[t],e}Me.deleteKey=Bi});var et=u(Se=>{"use strict";Object.defineProperty(Se,"__esModule",{value:!0});Se.groupBy=void 0;var Ri=N(),Di=S(),xr=X(),kr=P();function Ni(e,t,r){let i={},n=(0,xr.isFunction)(t)?t:(0,kr.isNil)(t)?(o,s)=>s:o=>o[t],c=(0,xr.isFunction)(r)?r:(0,kr.isNil)(r)?o=>o:o=>o[r];return(0,Di.isArray)(e)&&e.forEach((o,s)=>{let O=n(o,s);(i[O]||(i[O]=[])).push(c(o,s))}),(0,Ri.isRecord)(e)&&Object.entries(e).forEach(([o,s])=>{let O=n(s,o);(i[O]||(i[O]=[])).push(c(s,o))}),i}Se.groupBy=Ni});var rt=u(p=>{"use strict";var Ei=p&&p.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),me=p&&p.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&Ei(t,e,r)};Object.defineProperty(p,"__esModule",{value:!0});me(Yr(),p);me($r(),p);me(et(),p);me(Fe(),p)});var Ye=u(Be=>{"use strict";Object.defineProperty(Be,"__esModule",{value:!0});Be.RestError=void 0;var Ai=e=>String(e&&e.message||e),Ji=e=>String(e&&e.code),We=class extends Error{constructor(t){super(Ai(t.response)||t.statusText),this.xhr=t,this.code=Ji(t.response)||String(t.status)}};Be.RestError=We});var $e=u(Re=>{"use strict";Object.defineProperty(Re,"__esModule",{value:!0});Re.xhrRest=void 0;var Ti=Ye(),tt="application/json; charset=utf-8",Ui={json:tt,text:"text/*; charset=utf-8",blob:"*/*",document:"text/html, application/xhtml+xml, application/xml; q=0.9; charset=utf-8",arraybuffer:"*/*"};async function Ii(e,t,r={}){try{if(r.onInit&&r.onInit(e),e.timeout=r.timeout||2e4,e.responseType=r.responseType||"json",r.params||r.baseUrl){let c=new URL(t,r.baseUrl);r.params&&Object.entries(r.params).forEach(([o,s])=>{if(Array.isArray(s)){c.searchParams.delete(o),Object.values(s).forEach(O=>c.searchParams.append(o,String(O)));return}if(typeof s=="object"){c.searchParams.set(o,JSON.stringify(s));return}c.searchParams.set(o,String(s))}),t=c}if(e.open((r.method||"POST").toUpperCase(),t),r.data&&e.setRequestHeader("Content-Type","application/json; charset=utf-8"),e.setRequestHeader("Accept",Ui[e.responseType]||tt),r.headers){let c=typeof r.headers=="function"?r.headers():r.headers;Object.entries(c).forEach(([o,s])=>e.setRequestHeader(o,s))}if(r.onProgress){let c=r.onProgress;e.addEventListener("progress",o=>c(o,o.loaded/o.total))}let i=r.data?JSON.stringify(r.data):r.formData,n=new Promise((c,o)=>{e.onload=c,e.onerror=o});if(r.send?r.send(e,i):e.send(i),await n,e.status>=400)throw e.status;return r.onSuccess&&r.onSuccess(e.response,e),console.debug("Rest success",t,r,e.response),e.response}catch(i){console.debug("Rest error",t,r,i);let n=new Ti.RestError(e);throw r.onError&&r.onError(n,e),n}}Re.xhrRest=Ii});var ke=u(De=>{"use strict";Object.defineProperty(De,"__esModule",{value:!0});De.Rest=void 0;var Li=$e(),xe=class e{constructor(t){this.baseOptions=t}new(t){return new e(t)}newXhr(){return new XMLHttpRequest}send(t,r={}){let i=this.newXhr();return this.baseOptions&&(r={...this.baseOptions,...r}),(0,Li.xhrRest)(i,t,r)}get(t,r={}){return this.send(t,{method:"GET",...r})}delete(t,r={}){return this.send(t,{method:"DELETE",...r})}post(t,r,i={}){return this.send(t,{method:"POST",data:r,...i})}patch(t,r,i={}){return this.send(t,{method:"PATCH",data:r,...i})}put(t,r,i={}){return this.send(t,{method:"PUT",data:r,...i})}upload(t,r,i,n,c={}){let o=new FormData;return o.append(r,i,n||i.name),this.send(t,{method:"POST",formData:o,...c})}};De.Rest=xe});var nt=u(it=>{"use strict";Object.defineProperty(it,"__esModule",{value:!0})});var ut=u(b=>{"use strict";var Fi=b&&b.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),Ne=b&&b.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&Fi(t,e,r)};Object.defineProperty(b,"__esModule",{value:!0});b.rest=void 0;var Hi=ke();Ne(ke(),b);Ne(Ye(),b);Ne(nt(),b);Ne($e(),b);b.rest=new Hi.Rest});var er=u(Ee=>{"use strict";Object.defineProperty(Ee,"__esModule",{value:!0});Ee.firstLower=void 0;function Ci(e){return e&&e[0].toLowerCase()+e.substring(1)}Ee.firstLower=Ci});var rr=u(Ae=>{"use strict";Object.defineProperty(Ae,"__esModule",{value:!0});Ae.firstUpper=void 0;function Ki(e){return e&&e[0].toUpperCase()+e.substring(1)}Ae.firstUpper=Ki});var tr=u(Je=>{"use strict";Object.defineProperty(Je,"__esModule",{value:!0});Je.clean=void 0;function zi(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\w]/g," ").trim()}Je.clean=zi});var ir=u(Te=>{"use strict";Object.defineProperty(Te,"__esModule",{value:!0});Te.words=void 0;var Vi=tr();function Xi(e){return(0,Vi.clean)(e).replace(/[a-z0-9][A-Z]/g,t=>t[0]+" "+t[1].toLowerCase()).toLowerCase().trim().split(" ").filter(t=>t)}Te.words=Xi});var nr=u(Ue=>{"use strict";Object.defineProperty(Ue,"__esModule",{value:!0});Ue.pascal=void 0;var Zi=rr(),Gi=ir();function Qi(e){return(0,Gi.words)(e).map(Zi.firstUpper).join("")}Ue.pascal=Qi});var ot=u(Ie=>{"use strict";Object.defineProperty(Ie,"__esModule",{value:!0});Ie.camel=void 0;var Wi=er(),Yi=nr();function $i(e){return(0,Wi.firstLower)((0,Yi.pascal)(e))}Ie.camel=$i});var st=u(B=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0});B.uuid=B._uuid=void 0;var xi=e=>e.randomUUID?e.randomUUID.bind(e):e.getRandomValues?function(){var r=new Uint16Array(8);e.getRandomValues(r);let i=n=>r[n].toString(16).padStart(4,"0");return i(0)+i(1)+"-"+i(2)+"-"+i(3)+"-"+i(4)+"-"+i(5)+i(6)+i(7)}:function(){let r="0123456789abcdef",i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",n="",c=0,o=Math.random()*4294967295|0;for(;c++<36;){var s=i[c-1],O=o&15,dt=s=="x"?O:O&3|8;n+=s=="-"||s=="4"?s:r[dt],o=c%8==0?Math.random()*4294967295|0:o>>4}return n};B._uuid=xi;B.uuid=(0,B._uuid)(require("crypto")||{})});var ct=u(l=>{"use strict";var ki=l&&l.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),R=l&&l.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&ki(t,e,r)};Object.defineProperty(l,"__esModule",{value:!0});R(ot(),l);R(tr(),l);R(er(),l);R(rr(),l);R(nr(),l);R(st(),l);R(ir(),l)});var at=u(a=>{"use strict";var en=a&&a.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),v=a&&a.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&en(t,e,r)};Object.defineProperty(a,"__esModule",{value:!0});v(_r(),a);v(Pr(),a);v(mr(),a);v(Jr(),a);v(Ur(),a);v(Cr(),a);v(Xr(),a);v(Wr(),a);v(rt(),a);v(ut(),a);v(Ve(),a);v(ct(),a)});var rn=exports&&exports.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),tn=exports&&exports.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&rn(t,e,r)};Object.defineProperty(exports,"__esModule",{value:!0});tn(at(),exports);
