let t=globalThis.localStorage;const e=t=>null!=t;class s{constructor(t){this.hs=[],this.val=t}get(){return this.val}set(t){if(t!==this.val){let e=this.val;this.val=t,this.hs.forEach(s=>s(t,e))}return this}setCb(t){this.set(t(this.val))}on(t){return this.hs.push(t),!this.srcOff&&this.src&&this.h&&(this.srcOff=this.src.on(this.h)),()=>this.off(t)}off(t){this.hs.splice(this.hs.indexOf(t),1),this.srcOff&&0===this.hs.length&&(this.srcOff(),delete this.srcOff)}store(e){this.on(s=>(function(e,s){let l=void 0!==s?function(t,e,s){try{return JSON.stringify(t,null,0)}catch(t){return}}(s):void 0;void 0===l?t.removeItem(e):t.setItem(e,l)})(e,s));let s=function(e,s){let l=t.getItem(e);return function(t,e){try{return JSON.parse(t)}catch(t){return e}}(l,void 0)}(e);return void 0!==s&&this.set(s),this}map(t){let e=new s(t(this.val));return e.src=this,e.h=()=>e.set(t(this.val)),e}debounce(t){let e;let l=new s(this.val);return l.src=this,l.h=()=>{clearTimeout(e),e=setTimeout(()=>l.set(this.val),t)},l}toPromise(t=e){return new Promise(e=>{if(t(this.val))return e(this.val);let s=this.on(l=>{t(l)&&(s(),e(l))})})}}const l={};function o(t,e){return t?l[t]||(l[t]=new s(e)):new s(e)}describe("Message",()=>{test("Message next and subscribe",()=>{let t=new s(0);expect(t.get()).toEqual(0);let e=-1,l=-1,o=t.on(t=>e=t),i=t.on(t=>l=t);t.set(1),expect(t.get()).toEqual(1),expect(e).toEqual(1),expect(l).toEqual(1),o(),t.set(2),expect(t.get()).toEqual(2),expect(e).toEqual(1),expect(l).toEqual(2),i(),t.set(3),expect(t.get()).toEqual(3),expect(e).toEqual(1),expect(l).toEqual(2)}),test("Message toPromise",async()=>{let t=new s(0),e=1;t.toPromise(t=>3===t).then(t=>e=t),expect(e).toEqual(1),t.set(2),expect(e).toEqual(1),t.set(3),console.debug("messagePromise a",e);let l=await t.toPromise();expect(e).toEqual(3),expect(l).toEqual(3)}),test("Message map",async()=>{let t=new s(0),e=t.map(t=>t+1),l=e.get();e.on(t=>l=t),expect(e.get()).toEqual(1),expect(l).toEqual(1),t.set(50),expect(e.get()).toEqual(51),expect(l).toEqual(51)}),test("Message getter setter",()=>{let t=new s(0),e=t.get.bind(t),l=t.set.bind(t);l(1),expect(e()).toEqual(1),l.call(void 0,2),expect(e.call(void 0)).toEqual(2)}),test("message",()=>{expect(o(null,1)).not.toEqual(o(null,2)),expect(o("a",1)).toEqual(o("a",2))})});
//# sourceMappingURL=message.spec.js.map
