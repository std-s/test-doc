"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[8407],{87406:(e,t,i)=>{i.d(t,{d:()=>s});const s={chat:"Chat","chat.new":"New",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",mute:"Mute",kick:"Kick","participant.turn_off_video":"Turn off video",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all","stage_request.header_title":"Join Stage Requests","stage_request.deny_request":"Deny request","stage_request.accept_request":"Accept request","stage_request.accept_all":"Accept all","stage_request.deny_all":"Deny all","stage_request.approval_pending":"Pending","stage_request.denied":"Denied","stage_request.request":"Join stage","stage_request.leave_stage":"Leave stage","stage_request.request_tip":"Request to join the discussion","stage_request.leave_tip":"Leave the stage","stage_request.pending_tip":"Request pending","stage_request.denied_tip":"Rejected request","stage.empty_host":"The stage is empty","stage.empty_host_summary":"To begin the webinar, please join the stage or accept a join stage request from the participants tab.","stage.empty_viewer":"Webinar has not yet been started","stage.remove_from_stage":"Remove from stage","stage.add_to_stage":"Add to stage","stage.join_title":"Joining webinar stage","stage.join_summary":"Upon joining the stage, your video & audio as shown above will be visible to all participants.","stage.join_cancel":"Cancel","stage.join_confirm":"Confirm & Join stage","setup_screen.join_in_as":"Join in as","setup_screen.joining_as":"Joining as","setup_screen.your_name":"Your name","stage.reconnecting":"Reconnecting...",pip_on:"Show PiP",pip_off:"Hide PiP","recording.started":"This meeting is being recorded.","recording.stopped":"Recording for this meeting has been stopped.",mute_all:"Mute all","mute_all.description":"Everyone in the meeting will be muted","mute_all.header":"Are you sure?","mute_all.allow_unmute":"Allow others to unmute"}},28407:(e,t,i)=>{i.r(t),i.d(t,{dyte_settings_audio:()=>d,dyte_settings_video:()=>c});var s=i(35007),o=i(85294),a=i(2190),r=i(85114),n=i(43541);i(87406),i(60804);const d=class{constructor(e){(0,s.r)(this,e),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.iconPack=o.d,this.t=(0,a.u)(),this.audioDevices=[],this.speakerDevices=[]}connectedCallback(){this.meetingChanged(this.meeting)}meetingChanged(e){null!=e&&(0,s.w)((async()=>{var t,i,s,o;const a=await e.self.getAudioDevices(),r=await e.self.getSpeakerDevices(),n=null===(t=e.self.getCurrentDevices())||void 0===t?void 0:t.audio,d=null===(i=e.self.getCurrentDevices())||void 0===i?void 0:i.speaker;this.audioDevices=null!=n?[null!==(s=a.find((e=>e.deviceId===n.deviceId)))&&void 0!==s?s:n,...a.filter((e=>e.deviceId!==n.deviceId))]:a,this.speakerDevices=null!=d?[null!==(o=r.find((e=>e.deviceId===d.deviceId)))&&void 0!==o?o:d,...r.filter((e=>e.deviceId!==d.deviceId))]:r}))}testAudio(){var e;null===(e=this.testAudioEl)||void 0===e||e.play()}setDevice(e,t){var i,s;const o="audio"===e?this.audioDevices.find((e=>e.deviceId===t)):this.speakerDevices.find((e=>e.deviceId===t));null!=o&&(null===(i=this.meeting)||void 0===i||i.self.setDevice(o),"audiooutput"===o.kind&&(null===(s=this.testAudioEl)||void 0===s||s.setSinkId(o.deviceId)))}render(){var e,t,i;if(null==this.meeting)return null;let o=0,a=0;const d=null===(e=this.meeting)||void 0===e?void 0:e.self.getCurrentDevices(),c=this.states||n.s,l=!0===(null===(t=null==c?void 0:c.prefs)||void 0===t?void 0:t.muteNotificationSounds)||"true"===(0,r.a)("mute-notification-sounds");return(0,s.h)(s.H,null,(0,s.h)("audio",{preload:"auto",src:"https://assets.dyte.io/ui-kit/speaker-test.mp3",ref:e=>this.testAudioEl=e}),(0,s.h)("div",{class:"group",part:"microphone-selection"},(0,s.h)("label",null,"Microphone (input)"),(0,s.h)("div",{class:"row"},(0,s.h)("select",{class:"dyte-select",onChange:e=>this.setDevice("audio",e.target.value)},this.audioDevices.map((({deviceId:e,label:t})=>{var i;return(0,s.h)("option",{value:e,selected:(null===(i=d.audio)||void 0===i?void 0:i.deviceId)===e},t||"Microphone "+ ++o)}))),(0,s.h)("dyte-audio-visualizer",{participant:null===(i=this.meeting)||void 0===i?void 0:i.self}))),(0,s.h)("div",{class:"group",part:"speaker-selection"},this.speakerDevices.length>0&&(0,s.h)("div",null,(0,s.h)("label",null,"Speaker (output)"),(0,s.h)("div",{class:"row"},(0,s.h)("select",{class:"dyte-select",onChange:e=>this.setDevice("speaker",e.target.value)},this.speakerDevices.map((({deviceId:e,label:t})=>{var i;return(0,s.h)("option",{value:e,selected:(null===(i=d.speaker)||void 0===i?void 0:i.deviceId)===e},t||"Speaker "+ ++a)}))))),(0,s.h)("dyte-button",{variant:"secondary",onClick:()=>this.testAudio()},(0,s.h)("dyte-icon",{icon:this.iconPack.speaker,slot:"start"}),"Test")),(0,s.h)("div",{class:"group",part:"notification-toggle"},(0,s.h)("div",{class:"row"},(0,s.h)("label",{htmlFor:"notification-toggle"},"Notification sound"),(0,s.h)("dyte-switch",{id:"notification-toggle",checked:!l,onDyteChange:e=>{var t;const{checked:i}=e.target,s=!i;this.stateUpdate.emit({prefs:{muteNotificationSounds:s}}),n.s.prefs=Object.assign(Object.assign({},null!==(t=n.s.prefs)&&void 0!==t?t:{}),{muteNotificationSounds:s}),(0,r.s)("mute-notification-sounds",s)}}))))}static get watchers(){return{meeting:["meetingChanged"]}}};d.style=".dyte-select{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.dyte-select:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.dyte-select{display:block;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--dyte-space-3, 12px);font-size:16px;--icon-size:var(--dyte-select-chevron-size, var(--dyte-space-6, 24px));--icon-right-position:var(--dyte-select-chevron-right-position, var(--dyte-space-2, 8px));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right var(--icon-right-position) center;background-repeat:no-repeat;background-size:var(--icon-size) var(--icon-size);padding-right:calc(var(--icon-right-position) * 5)}:host{display:flex;width:100%;flex-direction:column;font-family:var(--dyte-font-family, sans-serif)}select{font-family:var(--dyte-font-family, sans-serif)}audio{visibility:hidden}label{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:14px}.group{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px)}.group>*{margin-bottom:var(--dyte-space-2, 8px)}.group>*:last-child{margin-bottom:var(--dyte-space-0, 0px)}.group select{flex:1 1 0%}.row{display:flex;align-items:center;justify-content:space-between;gap:var(--dyte-space-3, 12px)}.dyte-select{width:100%;max-width:100%}dyte-audio-visualizer{flex-shrink:0}dyte-button{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}dyte-button dyte-icon{margin-right:var(--dyte-space-2, 8px)}";const c=class{constructor(e){(0,s.r)(this,e),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.iconPack=o.d,this.t=(0,a.u)(),this.videoDevices=[],this.onVideoUpdate=e=>{this.videoEnabled=e.videoEnabled}}componentDidLoad(){this.meetingChanged(this.meeting)}meetingChanged(e){var t;null!=e&&(this.videoEnabled=e.self.videoEnabled,null===(t=e.self)||void 0===t||t.addListener("videoUpdate",this.onVideoUpdate),(0,s.w)((async()=>{var t,i;const s=await e.self.getVideoDevices(),o=null===(t=e.self.getCurrentDevices())||void 0===t?void 0:t.video;this.videoDevices=null!=o?[null!==(i=s.find((e=>e.deviceId===o.deviceId)))&&void 0!==i?i:o,...s.filter((e=>e.deviceId!==o.deviceId))]:s})))}disconnectedCallback(){var e;null===(e=this.meeting.self)||void 0===e||e.removeListener("videoUpdate",this.onVideoUpdate)}async setDevice(e){var t;const i=this.videoDevices.find((t=>t.deviceId===e));this.currentDevice=i,null!=i&&await(null===(t=this.meeting)||void 0===t?void 0:t.self.setDevice(i))}render(){var e,t;if(null==this.meeting)return null;let i=0;const o=this.states||n.s,a=!0===(null===(e=null==o?void 0:o.prefs)||void 0===e?void 0:e.mirrorVideo)||"true"===(0,r.a)("mirror-video");return(0,s.h)(s.H,null,(0,s.h)("div",{class:"group",part:"tile-preview"},!0===this.videoEnabled?(0,s.h)("dyte-participant-tile",{participant:null===(t=this.meeting)||void 0===t?void 0:t.self,iconPack:this.iconPack,t:this.t,states:o,isPreview:!0}):(0,s.h)("div",{class:"camera-off-helper"},(0,s.h)("dyte-participant-tile",{participant:void 0},(0,s.h)("div",null,(0,s.h)("dyte-icon",{id:"icon",icon:this.iconPack.video_off,tabIndex:-1,"aria-hidden":!0}),(0,s.h)("div",null,"Camera is off"))))),(0,s.h)("div",{class:"group",part:"camera-selection"},(0,s.h)("label",null,"Camera"),(0,s.h)("div",{class:"row"},(0,s.h)("select",{class:"dyte-select",onChange:e=>this.setDevice(e.target.value)},this.videoDevices.map((({deviceId:e,label:t})=>(0,s.h)("option",{value:e},t||"Camera "+ ++i)))))),(0,s.h)("div",{class:"group",part:"mirror-toggle"},(0,s.h)("div",{class:"row"},(0,s.h)("label",{htmlFor:"mirror-toggle"},"Mirror my Video"),(0,s.h)("dyte-switch",{checked:a,onDyteChange:e=>{var t;const{checked:i}=e.target;this.stateUpdate.emit({prefs:{mirrorVideo:i}}),n.s.prefs=Object.assign(Object.assign({},null!==(t=n.s.prefs)&&void 0!==t?t:{}),{mirrorVideo:i}),(0,r.s)("mirror-video",i)}}))))}static get watchers(){return{meeting:["meetingChanged"]}}};c.style=".dyte-select{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.dyte-select:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.dyte-select{display:block;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:var(--dyte-space-3, 12px);font-size:16px;--icon-size:var(--dyte-select-chevron-size, var(--dyte-space-6, 24px));--icon-right-position:var(--dyte-select-chevron-right-position, var(--dyte-space-2, 8px));background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");background-position:right var(--icon-right-position) center;background-repeat:no-repeat;background-size:var(--icon-size) var(--icon-size);padding-right:calc(var(--icon-right-position) * 5)}:host{display:flex;width:100%;flex-direction:column;font-family:var(--dyte-font-family, sans-serif)}select{font-family:var(--dyte-font-family, sans-serif)}dyte-participant-tile{margin-left:auto;margin-right:auto;margin-bottom:var(--dyte-space-4, 16px);max-width:100%}#icon{padding-bottom:var(--dyte-space-1, 4px)}.apply-button{height:var(--dyte-space-10, 40px)}label{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:14px}.group{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px)}.group>*{margin-bottom:var(--dyte-space-2, 8px)}.group>*:last-child{margin-bottom:var(--dyte-space-0, 0px)}.group select{flex:1 1 0%}.row{display:flex;align-items:center;justify-content:space-between;gap:var(--dyte-space-3, 12px)}"},60804:(e,t,i)=>{i.d(t,{g:()=>a});const s={get:(e,t,i)=>(...s)=>{try{return Reflect.get(e,t,i).apply(e,s)}catch(o){return null}}};let o;try{o=new Proxy(localStorage,s)}catch(r){o=new Proxy({},s)}const a=o},2190:(e,t,i)=>{i.d(t,{g:()=>o,u:()=>a});var s=i(87406);const o=async e=>{if(null==e||"en"===e||""===e.trim())return s.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},s.d,await t.json()):s.d}catch(t){return s.d}},a=(e=s.d)=>t=>{var i;return null!==(i=e[t])&&void 0!==i?i:t}},43541:(e,t,i)=>{i.d(t,{o:()=>c,s:()=>d});var s=i(35007);const o=e=>!("isConnected"in e)||e.isConnected,a=((e,t)=>{let i;return(...s)=>{i&&clearTimeout(i),i=setTimeout((()=>{i=0,e(...s)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(o))}),2e3),r=e=>"function"==typeof e?e():e,n=(e,t)=>{const i=e.indexOf(t);i>=0&&(e[i]=e[e.length-1],e.length--)},{state:d,onChange:c}=((e,t)=>{const i=((e,t=((e,t)=>e!==t))=>{const i=r(e);let s=new Map(Object.entries(null!=i?i:{}));const o={dispose:[],get:[],set:[],reset:[]},a=()=>{var t;s=new Map(Object.entries(null!==(t=r(e))&&void 0!==t?t:{})),o.reset.forEach((e=>e()))},d=e=>(o.get.forEach((t=>t(e))),s.get(e)),c=(e,i)=>{const a=s.get(e);t(i,a,e)&&(s.set(e,i),o.set.forEach((t=>t(e,i,a))))},l="undefined"==typeof Proxy?{}:new Proxy(i,{get:(e,t)=>d(t),ownKeys:e=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,i)=>(c(t,i),!0)}),p=(e,t)=>(o[e].push(t),()=>{n(o[e],t)});return{state:l,get:d,set:c,on:p,onChange:(t,i)=>{const s=p("set",((e,s)=>{e===t&&i(s)})),o=p("reset",(()=>i(r(e)[t])));return()=>{s(),o()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(p("set",t.set)),t.get&&e.push(p("get",t.get)),t.reset&&e.push(p("reset",t.reset)),t.dispose&&e.push(p("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{o.dispose.forEach((e=>e())),a()},reset:a,forceUpdate:e=>{const t=s.get(e);o.set.forEach((i=>i(e,t,t)))}}})(e,t);return i.use((()=>{if("function"!=typeof s.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const i=(0,s.a)();i&&((e,t,i)=>{const s=e.get(t);s?s.includes(i)||s.push(i):e.set(t,[i])})(e,t,i)},set:t=>{const i=e.get(t);i&&e.set(t,i.filter(s.f)),a(e)},reset:()=>{e.forEach((e=>e.forEach(s.f))),a(e)}}})()),i})({})},85114:(e,t,i)=>{i.d(t,{a:()=>r,c:()=>d,g:()=>n,s:()=>a});var s=i(60804);const o="dyte-prefs",a=(e,t)=>{const i=JSON.parse(s.g.getItem(o)||"{}");i[e]=JSON.stringify(t),s.g.setItem("dyte-prefs",JSON.stringify(i))},r=e=>JSON.parse(s.g.getItem(o)||"{}")[e],n=()=>{const e=JSON.parse(s.g.getItem(o)||"{}");return{mirrorVideo:!e["mirror-video"]||"true"===e["mirror-video"],muteNotificationSounds:!!e["mute-notification-sounds"]&&"true"===e["mute-notification-sounds"]}},d={}}}]);