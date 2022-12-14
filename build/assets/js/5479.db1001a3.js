"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[5479],{35479:(e,t,s)=>{s.r(t),s.d(t,{dyte_broadcast_message_modal:()=>n});var r=s(35007),o=s(85294),a=s(43541);const n=class{constructor(e){(0,r.r)(this,e),this.stateUpdate=(0,r.c)(this,"dyteStateUpdate",7),this.iconPack=o.d,this.messagePayload={to:"Everyone",message:""},this.successMessage=!1}close(){var e;null===(e=this.stateUpdate)||void 0===e||e.emit({activeBroadcastMessageModal:!1}),a.s.activeBroadcastMessageModal=!1}sendMessage(){this.successMessage=!0,setTimeout((()=>{this.close()}),2e3)}render(){return(0,r.h)(r.H,null,(0,r.h)("div",{class:"content-col"},(0,r.h)("h2",null,"Broadcast message to"),(0,r.h)("select",{onChange:e=>{this.messagePayload=Object.assign(Object.assign({},this.messagePayload),{to:e.target.value})}},(0,r.h)("option",null,"Everyone"),(0,r.h)("option",null,"List of rooms")),(0,r.h)("textarea",{placeholder:"Type message here...",onInput:e=>{this.messagePayload=Object.assign(Object.assign({},this.messagePayload),{message:e.target.value})}}),this.successMessage?(0,r.h)("p",null,"Message sent to ",this.messagePayload.to,(0,r.h)("dyte-icon",{icon:this.iconPack.checkmark})):(0,r.h)("div",{class:"content-row"},(0,r.h)("dyte-button",{onClick:()=>this.close(),variant:"secondary"},"Cancel"),"\u2002",(0,r.h)("dyte-button",{variant:"primary",onClick:()=>this.sendMessage()},"Send"))))}};n.style=":host{position:relative;display:flex;flex-direction:column;overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px);padding:var(--dyte-space-4, 16px);width:100%;font-family:var(--dyte-font-family, sans-serif);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));width:400px;max-width:80%}.content-col{display:flex;width:100%;flex-direction:column}h2{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-2, 8px)}.content-row{display:flex;width:100%;flex-direction:row}.content-row dyte-button{margin-top:var(--dyte-space-4, 16px);width:100%}textarea{margin-top:var(--dyte-space-3, 12px);resize:none;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;outline:2px solid transparent;outline-offset:2px;height:var(--dyte-space-16, 64px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px);color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76));font-family:var(--dyte-font-family, sans-serif)}textarea::-moz-placeholder{color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}textarea::placeholder{color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}select{border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);outline:2px solid transparent;outline-offset:2px;border-right-width:var(--dyte-border-width-md, 2px);border-style:solid;border-color:transparent;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}p{margin:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-2, 8px);width:100%;text-align:center;font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));display:flex;flex-direction:row;align-items:center;justify-content:center}p dyte-icon{margin-left:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px)}"},43541:(e,t,s)=>{s.d(t,{o:()=>i,s:()=>c});var r=s(35007);const o=e=>!("isConnected"in e)||e.isConnected,a=((e,t)=>{let s;return(...r)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...r)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(o))}),2e3),n=e=>"function"==typeof e?e():e,d=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:c,onChange:i}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{const s=n(e);let r=new Map(Object.entries(null!=s?s:{}));const o={dispose:[],get:[],set:[],reset:[]},a=()=>{var t;r=new Map(Object.entries(null!==(t=n(e))&&void 0!==t?t:{})),o.reset.forEach((e=>e()))},c=e=>(o.get.forEach((t=>t(e))),r.get(e)),i=(e,s)=>{const a=r.get(e);t(s,a,e)&&(r.set(e,s),o.set.forEach((t=>t(e,s,a))))},l="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>c(t),ownKeys:e=>Array.from(r.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>r.has(t),set:(e,t,s)=>(i(t,s),!0)}),p=(e,t)=>(o[e].push(t),()=>{d(o[e],t)});return{state:l,get:c,set:i,on:p,onChange:(t,s)=>{const r=p("set",((e,r)=>{e===t&&s(r)})),o=p("reset",(()=>s(n(e)[t])));return()=>{r(),o()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(p("set",t.set)),t.get&&e.push(p("get",t.get)),t.reset&&e.push(p("reset",t.reset)),t.dispose&&e.push(p("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{o.dispose.forEach((e=>e())),a()},reset:a,forceUpdate:e=>{const t=r.get(e);o.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof r.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,r.a)();s&&((e,t,s)=>{const r=e.get(t);r?r.includes(s)||r.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(r.f)),a(e)},reset:()=>{e.forEach((e=>e.forEach(r.f))),a(e)}}})()),s})({})}}]);