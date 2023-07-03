"use strict";var u=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var sr=u(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.last=void 0;function _t(e){return e[e.length-1]}U.last=_t});var Fe=u(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.moveIndex=void 0;function bt(e,t,r){if(t===r)return e;let i=e.splice(t,1);return e.splice(r,0,i[0]),e}I.moveIndex=bt});var cr=u(L=>{"use strict";Object.defineProperty(L,"__esModule",{value:!0});L.moveItem=void 0;var vt=Fe();function Ot(e,t,r){let i=e.indexOf(t);if(i===-1)return e;let n=(i+r)%5;return n<0&&(n+=e.length),(0,vt.moveIndex)(e,i,n)}L.moveItem=Ot});var dr=u(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});F.range=void 0;function ar(e,t){return t!==void 0?ar(t-e+1).map(r=>r+e):Array.from(Array(e).keys())}F.range=ar});var fr=u(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.removeItem=void 0;function ht(e,t){let r=e.indexOf(t);return r===-1||e.splice(r,1),e}H.removeItem=ht});var R=u(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.getJson=void 0;function gt(e,t,r){try{return JSON.stringify(e,null,r?2:0)}catch{return t}}C.getJson=gt});var S=u(K=>{"use strict";Object.defineProperty(K,"__esModule",{value:!0});K.isArray=void 0;function yt(e){return Array.isArray(e)}K.isArray=yt});var N=u(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});z.isRecord=void 0;var pt=S();function jt(e){return typeof e=="object"&&!(0,pt.isArray)(e)}z.isRecord=jt});var X=u(V=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});V.isFunction=void 0;function Pt(e){return typeof e=="function"}V.isFunction=Pt});var q=u(Z=>{"use strict";Object.defineProperty(Z,"__esModule",{value:!0});Z.isNil=void 0;function qt(e){return e==null}Z.isNil=qt});var He=u(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.valueBy=void 0;var wt=N(),Mt=S(),lr=X(),_r=q();function St(e,t,r){let i={},n=(0,lr.isFunction)(t)?t:(0,_r.isNil)(t)?(o,s)=>s:o=>o[t],c=(0,lr.isFunction)(r)?r:(0,_r.isNil)(r)?o=>o:o=>o[r];return(0,Mt.isArray)(e)&&e.forEach((o,s)=>{i[n(o,s)]=c(o,s)}),(0,wt.isRecord)(e)&&Object.entries(e).forEach(([o,s])=>{i[n(s,o)]=c(s,o)}),i}G.valueBy=St});var br=u(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});Q.uniq=void 0;var mt=R(),Bt=He();function Dt(e){return Object.values((0,Bt.valueBy)(e,t=>(0,mt.getJson)(t)))}Q.uniq=Dt});var vr=u(_=>{"use strict";var Rt=_&&_.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),E=_&&_.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&Rt(t,e,r)};Object.defineProperty(_,"__esModule",{value:!0});E(sr(),_);E(Fe(),_);E(cr(),_);E(dr(),_);E(fr(),_);E(br(),_)});var Or=u(W=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0});W.toArray=void 0;var Nt=S(),Et=q();function At(e,t=[]){return(0,Et.isNil)(e)?t:(0,Nt.isArray)(e)?e:[e]}W.toArray=At});var Ce=u(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.isString=void 0;function Jt(e){return typeof e=="string"}Y.isString=Jt});var hr=u($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});$.toBoolean=void 0;var Tt=q(),Ut=Ce();function It(e,t){return(0,Ut.isString)(e)?["true","ok","on","1"].indexOf(String(e).toLowerCase())!==-1:(0,Tt.isNil)(e)?t:!!e}$.toBoolean=It});var gr=u(x=>{"use strict";Object.defineProperty(x,"__esModule",{value:!0});x.toDate=void 0;function Lt(e,t){return e instanceof Date?e:typeof e=="string"?new Date(e):typeof e=="number"?new Date(e):t===void 0?new Date:t}x.toDate=Lt});var yr=u(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.toError=void 0;function Ft(e){return e instanceof Error?e:new Error(String(e))}k.toError=Ft});var jr=u(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.nbr=A.toNumber=void 0;function pr(e,t){let r=typeof e=="string"?e.replace(/,/g,".").replace(/[^0-9\-\.]/g,""):String(e),i=r!==""?Number(r):Number.NaN;return Number.isNaN(i)?t:i}A.toNumber=pr;A.nbr=pr});var Pr=u(ee=>{"use strict";Object.defineProperty(ee,"__esModule",{value:!0});ee.toRecord=void 0;function Ht(e,t={}){return e===null||typeof e!="object"||Array.isArray(e)?t:e}ee.toRecord=Ht});var qr=u(re=>{"use strict";Object.defineProperty(re,"__esModule",{value:!0});re.toString=void 0;var Ct=q();function Kt(e,t=""){return(0,Ct.isNil)(e)?t:String(e)}re.toString=Kt});var wr=u(f=>{"use strict";var zt=f&&f.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),m=f&&f.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&zt(t,e,r)};Object.defineProperty(f,"__esModule",{value:!0});m(Or(),f);m(hr(),f);m(gr(),f);m(yr(),f);m(jr(),f);m(Pr(),f);m(qr(),f)});var Mr=u(te=>{"use strict";Object.defineProperty(te,"__esModule",{value:!0});te.isDate=void 0;function Vt(e){return e instanceof Date}te.isDate=Vt});var Sr=u(ie=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});ie.isEmpty=void 0;var Xt=S(),Zt=q(),Gt=N();function Qt(e){return(0,Zt.isNil)(e)||e===""||(0,Xt.isArray)(e)&&e.length===0||(0,Gt.isRecord)(e)&&Object.keys(e).length===0}ie.isEmpty=Qt});var mr=u(ne=>{"use strict";Object.defineProperty(ne,"__esModule",{value:!0});ne.isUndefined=void 0;function Wt(e){return typeof e>"u"}ne.isUndefined=Wt});var Br=u(ue=>{"use strict";Object.defineProperty(ue,"__esModule",{value:!0});ue.isUuid=void 0;function Yt(e){let t=String(e).replace(/[a-zA-Z0-9]+/g,r=>""+r.length);return t==="8-4-4-4-12"||t==="32"}ue.isUuid=Yt});var Dr=u(d=>{"use strict";var $t=d&&d.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),h=d&&d.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&$t(t,e,r)};Object.defineProperty(d,"__esModule",{value:!0});h(S(),d);h(Mr(),d);h(Sr(),d);h(N(),d);h(X(),d);h(q(),d);h(N(),d);h(Ce(),d);h(mr(),d);h(Br(),d)});var T=u(oe=>{"use strict";Object.defineProperty(oe,"__esModule",{value:!0});oe.parseJson=void 0;function xt(e,t){try{return JSON.parse(e)}catch{return t}}oe.parseJson=xt});var ce=u(se=>{"use strict";Object.defineProperty(se,"__esModule",{value:!0});se.storage=void 0;var Ke={},Rr=globalThis.localStorage||{getItem:e=>Ke[e]||null,removeItem:e=>{delete Ke[e]},setItem:(e,t)=>Ke[e]=t};function kt(e){return e&&(Rr=e),Rr}se.storage=kt});var de=u(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.getStored=void 0;var ei=T(),ri=ce();function ti(e,t){let r=(0,ri.storage)().getItem(e);return(0,ei.parseJson)(r,t)}ae.getStored=ti});var ze=u(fe=>{"use strict";Object.defineProperty(fe,"__esModule",{value:!0});fe.setStored=void 0;var ii=R(),Nr=ce();function ni(e,t){let r=t!==void 0?(0,ii.getJson)(t):void 0;r===void 0?(0,Nr.storage)().removeItem(e):(0,Nr.storage)().setItem(e,r)}fe.setStored=ni});var Xe=u(p=>{"use strict";var ui=p&&p.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),Ve=p&&p.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&ui(t,e,r)};Object.defineProperty(p,"__esModule",{value:!0});Ve(de(),p);Ve(ze(),p);Ve(ce(),p)});var Er=u(le=>{"use strict";Object.defineProperty(le,"__esModule",{value:!0});le.copy=void 0;var oi=R(),si=Xe();function ci(e){return(0,si.setStored)("__clipboard",e),navigator&&navigator.clipboard?navigator.clipboard.writeText((0,oi.getJson)(e,"")):Promise.resolve()}le.copy=ci});var Jr=u(_e=>{"use strict";Object.defineProperty(_e,"__esModule",{value:!0});_e.paste=void 0;var ai=T(),Ar=de();function di(){return navigator&&navigator.clipboard?navigator.clipboard.readText().then(e=>(0,ai.parseJson)(e,e)).catch(()=>(0,Ar.getStored)("__clipboard")):Promise.resolve((0,Ar.getStored)("__clipboard"))}_e.paste=di});var Ur=u(w=>{"use strict";var fi=w&&w.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),Tr=w&&w.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&fi(t,e,r)};Object.defineProperty(w,"__esModule",{value:!0});Tr(Er(),w);Tr(Jr(),w)});var Ir=u(be=>{"use strict";Object.defineProperty(be,"__esModule",{value:!0});be.cloneJson=void 0;var li=T(),_i=R();function bi(e,t){return(0,li.parseJson)((0,_i.getJson)(e),t)}be.cloneJson=bi});var Lr=u(j=>{"use strict";var vi=j&&j.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),Ze=j&&j.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&vi(t,e,r)};Object.defineProperty(j,"__esModule",{value:!0});Ze(Ir(),j);Ze(R(),j);Ze(T(),j)});var Fr=u(ve=>{"use strict";Object.defineProperty(ve,"__esModule",{value:!0});ve.bounds=void 0;function Oi(e,t,r){return t!==void 0&&e<t&&(e=t),r!==void 0&&e>r&&(e=r),e}ve.bounds=Oi});var Hr=u(Oe=>{"use strict";Object.defineProperty(Oe,"__esModule",{value:!0});Oe.diff=void 0;function hi(e,t){return Math.abs(e-t)}Oe.diff=hi});var Cr=u(he=>{"use strict";Object.defineProperty(he,"__esModule",{value:!0});he.rand=void 0;function gi(e,t){return Math.random()*(t-e)+e}he.rand=gi});var Kr=u(ge=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});ge.round=void 0;function yi(e,t){let r=Math.pow(10,t||0);return Math.round(e*r)/r}ge.round=yi});var zr=u(g=>{"use strict";var pi=g&&g.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),ye=g&&g.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&pi(t,e,r)};Object.defineProperty(g,"__esModule",{value:!0});ye(Fr(),g);ye(Hr(),g);ye(Cr(),g);ye(Kr(),g)});var Qe=u(pe=>{"use strict";Object.defineProperty(pe,"__esModule",{value:!0});pe.Observer=void 0;var ji=de(),Pi=ze(),qi=e=>e!=null,Ge=class e{constructor(t,r){this.hs=[],this.val=t,r&&(this.key=r)}get(){return this.val}set(t){let r=this.val;return this.val=typeof t=="function"?t(this.val):t,r!==this.val&&this.hs.forEach(i=>i(this.val,r)),this}on(t){return this.hs.push(t),!this.srcOff&&this.src&&this.srcH&&(this.srcOff=this.src.on(this.srcH)),()=>this.off(t)}off(t){this.hs.splice(this.hs.indexOf(t),1),this.srcOff&&this.hs.length===0&&(this.srcOff(),delete this.srcOff)}store(t){if(this.sKey===t)return this;this.sKey=t,this.on(i=>(0,Pi.setStored)(t,i));let r=(0,ji.getStored)(t);return r!==void 0&&this.set(r),this}map(t){let r=new e(t(this.val));return r.src=this,r.srcH=()=>r.set(t(this.val)),r}debounce(t){let r,i=new e(this.val);return i.src=this,i.srcH=()=>{clearTimeout(r),r=setTimeout(()=>i.set(this.val),t)},i}throttle(t){let r=null,i=0,n=new e(this.val);n.src=this;let c=()=>{r=null,i=Date.now(),n.set(this.val)};return n.srcH=()=>{if(r!==null)return;let o=t-(Date.now()-i);if(o<0)return c();r=setTimeout(c,o)},n}toPromise(t=qi){return new Promise(r=>{if(t(this.val))return r(this.val);let i=this.on(n=>{t(n)&&(i(),r(n))})})}};pe.Observer=Ge});var Xr=u(je=>{"use strict";Object.defineProperty(je,"__esModule",{value:!0});je.getObserver=void 0;var We=Qe(),Vr={};function wi(e,t,r){return e===null?new We.Observer(t):Vr[e]||(Vr[e]=r?new We.Observer(t,e):new We.Observer(t,e).store(e))}je.getObserver=wi});var Gr=u(M=>{"use strict";var Mi=M&&M.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),Zr=M&&M.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&Mi(t,e,r)};Object.defineProperty(M,"__esModule",{value:!0});Zr(Xr(),M);Zr(Qe(),M)});var Qr=u(Pe=>{"use strict";Object.defineProperty(Pe,"__esModule",{value:!0});Pe.retry=void 0;async function Si(e,t=2){let r;for(let i=0;i<t;i++)try{return await e()}catch(n){r=n}throw r}Pe.retry=Si});var Wr=u(qe=>{"use strict";Object.defineProperty(qe,"__esModule",{value:!0});qe.sleep=void 0;function mi(e){return new Promise(t=>setTimeout(t,e))}qe.sleep=mi});var Yr=u(J=>{"use strict";Object.defineProperty(J,"__esModule",{value:!0});J.withTimeout=J.TimeoutError=void 0;var we=class extends Error{constructor(t){super(t),this.name="TimeoutError"}};J.TimeoutError=we;function Bi(e,t=5e3){return new Promise((r,i)=>{let n=setTimeout(()=>i(new we),t);e.then(r).catch(i).finally(()=>clearTimeout(n))})}J.withTimeout=Bi});var $r=u(P=>{"use strict";var Di=P&&P.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),Ye=P&&P.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&Di(t,e,r)};Object.defineProperty(P,"__esModule",{value:!0});Ye(Qr(),P);Ye(Wr(),P);Ye(Yr(),P)});var xr=u(Me=>{"use strict";Object.defineProperty(Me,"__esModule",{value:!0});Me.cloneRecord=void 0;function Ri(e){return Object.assign({},e)}Me.cloneRecord=Ri});var kr=u(Se=>{"use strict";Object.defineProperty(Se,"__esModule",{value:!0});Se.deleteKey=void 0;function Ni(e,t){return delete e[t],e}Se.deleteKey=Ni});var tt=u(me=>{"use strict";Object.defineProperty(me,"__esModule",{value:!0});me.groupBy=void 0;var Ei=N(),Ai=S(),et=X(),rt=q();function Ji(e,t,r){let i={},n=(0,et.isFunction)(t)?t:(0,rt.isNil)(t)?(o,s)=>s:o=>o[t],c=(0,et.isFunction)(r)?r:(0,rt.isNil)(r)?o=>o:o=>o[r];return(0,Ai.isArray)(e)&&e.forEach((o,s)=>{let O=n(o,s);(i[O]||(i[O]=[])).push(c(o,s))}),(0,Ei.isRecord)(e)&&Object.entries(e).forEach(([o,s])=>{let O=n(s,o);(i[O]||(i[O]=[])).push(c(s,o))}),i}me.groupBy=Ji});var it=u(y=>{"use strict";var Ti=y&&y.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),Be=y&&y.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&Ti(t,e,r)};Object.defineProperty(y,"__esModule",{value:!0});Be(xr(),y);Be(kr(),y);Be(tt(),y);Be(He(),y)});var xe=u(De=>{"use strict";Object.defineProperty(De,"__esModule",{value:!0});De.RestError=void 0;var Ui=e=>String(e&&e.message||e),Ii=e=>String(e&&e.code),$e=class extends Error{constructor(t){super(Ui(t.response)||t.statusText),this.xhr=t,this.code=Ii(t.response)||String(t.status)}};De.RestError=$e});var ke=u(Re=>{"use strict";Object.defineProperty(Re,"__esModule",{value:!0});Re.xhrRest=void 0;var Li=xe(),nt="application/json; charset=utf-8",Fi={json:nt,text:"text/*; charset=utf-8",blob:"*/*",document:"text/html, application/xhtml+xml, application/xml; q=0.9; charset=utf-8",arraybuffer:"*/*"};async function Hi(e,t,r={}){try{if(r.onInit&&r.onInit(e),e.timeout=r.timeout||2e4,e.responseType=r.responseType||"json",r.params||r.baseUrl){let c=new URL(t,r.baseUrl);r.params&&Object.entries(r.params).forEach(([o,s])=>{if(Array.isArray(s)){c.searchParams.delete(o),Object.values(s).forEach(O=>c.searchParams.append(o,String(O)));return}if(typeof s=="object"){c.searchParams.set(o,JSON.stringify(s));return}c.searchParams.set(o,String(s))}),t=c}if(e.open((r.method||"POST").toUpperCase(),t),r.data&&e.setRequestHeader("Content-Type","application/json; charset=utf-8"),e.setRequestHeader("Accept",Fi[e.responseType]||nt),r.headers){let c=typeof r.headers=="function"?r.headers():r.headers;Object.entries(c).forEach(([o,s])=>e.setRequestHeader(o,s))}if(r.onProgress){let c=r.onProgress;e.addEventListener("progress",o=>c(o,o.loaded/o.total))}let i=r.data?JSON.stringify(r.data):r.formData,n=new Promise((c,o)=>{e.onload=c,e.onerror=o});if(r.send?r.send(e,i):e.send(i),await n,e.status>=400)throw e.status;return r.onSuccess&&r.onSuccess(e.response,e),e.response}catch{let n=new Li.RestError(e);throw r.onError&&r.onError(n,e),n}}Re.xhrRest=Hi});var rr=u(Ne=>{"use strict";Object.defineProperty(Ne,"__esModule",{value:!0});Ne.Rest=void 0;var Ci=ke(),er=class e{constructor(t){this.baseOptions=t}new(t){return new e(t)}newXhr(){return new XMLHttpRequest}send(t,r={}){let i=this.newXhr();return this.baseOptions&&(r={...this.baseOptions,...r}),(0,Ci.xhrRest)(i,t,r)}get(t,r={}){return this.send(t,{method:"GET",...r})}delete(t,r={}){return this.send(t,{method:"DELETE",...r})}post(t,r,i={}){return this.send(t,{method:"POST",data:r,...i})}patch(t,r,i={}){return this.send(t,{method:"PATCH",data:r,...i})}put(t,r,i={}){return this.send(t,{method:"PUT",data:r,...i})}upload(t,r,i,n,c={}){let o=new FormData;return o.append(r,i,n||i.name),this.send(t,{method:"POST",formData:o,...c})}};Ne.Rest=er});var ot=u(ut=>{"use strict";Object.defineProperty(ut,"__esModule",{value:!0})});var st=u(b=>{"use strict";var Ki=b&&b.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),Ee=b&&b.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&Ki(t,e,r)};Object.defineProperty(b,"__esModule",{value:!0});b.rest=void 0;var zi=rr();Ee(rr(),b);Ee(xe(),b);Ee(ot(),b);Ee(ke(),b);b.rest=new zi.Rest});var tr=u(Ae=>{"use strict";Object.defineProperty(Ae,"__esModule",{value:!0});Ae.firstLower=void 0;function Vi(e){return e&&e[0].toLowerCase()+e.substring(1)}Ae.firstLower=Vi});var ir=u(Je=>{"use strict";Object.defineProperty(Je,"__esModule",{value:!0});Je.firstUpper=void 0;function Xi(e){return e&&e[0].toUpperCase()+e.substring(1)}Je.firstUpper=Xi});var nr=u(Te=>{"use strict";Object.defineProperty(Te,"__esModule",{value:!0});Te.clean=void 0;function Zi(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\w]/g," ").trim()}Te.clean=Zi});var ur=u(Ue=>{"use strict";Object.defineProperty(Ue,"__esModule",{value:!0});Ue.words=void 0;var Gi=nr();function Qi(e){return(0,Gi.clean)(e).replace(/[a-z0-9][A-Z]/g,t=>t[0]+" "+t[1].toLowerCase()).toLowerCase().trim().split(" ").filter(t=>t)}Ue.words=Qi});var or=u(Ie=>{"use strict";Object.defineProperty(Ie,"__esModule",{value:!0});Ie.pascal=void 0;var Wi=ir(),Yi=ur();function $i(e){return(0,Yi.words)(e).map(Wi.firstUpper).join("")}Ie.pascal=$i});var ct=u(Le=>{"use strict";Object.defineProperty(Le,"__esModule",{value:!0});Le.camel=void 0;var xi=tr(),ki=or();function en(e){return(0,xi.firstLower)((0,ki.pascal)(e))}Le.camel=en});var at=u(B=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0});B.uuid=B._uuid=void 0;var rn=e=>e.randomUUID?e.randomUUID.bind(e):e.getRandomValues?function(){var r=new Uint16Array(8);e.getRandomValues(r);let i=n=>r[n].toString(16).padStart(4,"0");return i(0)+i(1)+"-"+i(2)+"-"+i(3)+"-"+i(4)+"-"+i(5)+i(6)+i(7)}:function(){let r="0123456789abcdef",i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",n="",c=0,o=Math.random()*4294967295|0;for(;c++<36;){var s=i[c-1],O=o&15,lt=s=="x"?O:O&3|8;n+=s=="-"||s=="4"?s:r[lt],o=c%8==0?Math.random()*4294967295|0:o>>4}return n};B._uuid=rn;B.uuid=(0,B._uuid)(require("crypto")||{})});var dt=u(l=>{"use strict";var tn=l&&l.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),D=l&&l.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&tn(t,e,r)};Object.defineProperty(l,"__esModule",{value:!0});D(ct(),l);D(nr(),l);D(tr(),l);D(ir(),l);D(or(),l);D(at(),l);D(ur(),l)});var ft=u(a=>{"use strict";var nn=a&&a.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),v=a&&a.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&nn(t,e,r)};Object.defineProperty(a,"__esModule",{value:!0});v(vr(),a);v(wr(),a);v(Dr(),a);v(Ur(),a);v(Lr(),a);v(zr(),a);v(Gr(),a);v($r(),a);v(it(),a);v(st(),a);v(Xe(),a);v(dt(),a)});var un=exports&&exports.__createBinding||(Object.create?function(e,t,r,i){i===void 0&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){i===void 0&&(i=r),e[i]=t[r]}),on=exports&&exports.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&un(t,e,r)};Object.defineProperty(exports,"__esModule",{value:!0});on(ft(),exports);
