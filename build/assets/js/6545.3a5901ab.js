"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[6545],{87406:(e,t,s)=>{s.d(t,{d:()=>o});const o={chat:"Chat","chat.new":"New",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",mute:"Mute",kick:"Kick","participant.turn_off_video":"Turn off video",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all","stage_request.header_title":"Join Stage Requests","stage_request.deny_request":"Deny request","stage_request.accept_request":"Accept request","stage_request.accept_all":"Accept all","stage_request.deny_all":"Deny all","stage_request.approval_pending":"Pending","stage_request.denied":"Denied","stage_request.request":"Join stage","stage_request.leave_stage":"Leave stage","stage_request.request_tip":"Request to join the discussion","stage_request.leave_tip":"Leave the stage","stage_request.pending_tip":"Request pending","stage_request.denied_tip":"Rejected request","stage.empty_host":"The stage is empty","stage.empty_host_summary":"To begin the webinar, please join the stage or accept a join stage request from the participants tab.","stage.empty_viewer":"Webinar has not yet been started","stage.remove_from_stage":"Remove from stage","stage.add_to_stage":"Add to stage","stage.join_title":"Joining webinar stage","stage.join_summary":"Upon joining the stage, your video & audio as shown above will be visible to all participants.","stage.join_cancel":"Cancel","stage.join_confirm":"Confirm & Join stage","setup_screen.join_in_as":"Join in as","setup_screen.joining_as":"Joining as","setup_screen.your_name":"Your name","stage.reconnecting":"Reconnecting...",pip_on:"Show PiP",pip_off:"Hide PiP","recording.started":"This meeting is being recorded.","recording.stopped":"Recording for this meeting has been stopped.",mute_all:"Mute all","mute_all.description":"Everyone in the meeting will be muted","mute_all.header":"Are you sure?","mute_all.allow_unmute":"Allow others to unmute"}},16545:(e,t,s)=>{s.r(t),s.d(t,{dyte_breakout_rooms_toggle:()=>r});var o=s(35007),i=s(85294),a=s(2190),n=s(43541);s(87406);const r=class{constructor(e){(0,o.r)(this,e),this.stateUpdate=(0,o.c)(this,"dyteStateUpdate",7),this.variant="button",this.iconPack=i.d,this.t=(0,a.u)(),this.breakoutRoomToggle=()=>{var e,t,s,o,i;const a=null===(e=this.meeting.connectedMeetings.list.filter((e=>"ACTIVE"===e.status)))||void 0===e?void 0:e.length;this.states.activeBreakoutRooms||a>0?(this.stateUpdate.emit({activeBreakoutRoomGrid:!(null===(t=this.states)||void 0===t?void 0:t.activeBreakoutRoomGrid)}),n.s.activeBreakoutRoomGrid=!n.s.activeBreakoutRoomGrid):(this.stateUpdate.emit({activeBreakoutRoomsManager:{active:!(null===(o=null===(s=this.states)||void 0===s?void 0:s.activeBreakoutRoomsManager)||void 0===o?void 0:o.active),mode:"create"}}),n.s.activeBreakoutRoomsManager={active:!(null===(i=n.s.activeBreakoutRoomsManager)||void 0===i?void 0:i.active),mode:"create"})}}render(){var e;const t=null===(e=this.meeting.self.permissions)||void 0===e?void 0:e.connectedMeetings;if((null==t?void 0:t.canAlterConnectedMeetings)||this.states.activeBreakoutRooms)return(0,o.h)(o.H,{title:this.t("Breakout Rooms")},(0,o.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,onClick:this.breakoutRoomToggle,class:{active:this.states.activeBreakoutRooms&&this.states.activeBreakoutRoomGrid},icon:this.iconPack.breakout_rooms,label:this.t("Breakout Rooms"),variant:this.variant}))}};r.style=":host{display:block;font-family:var(--dyte-font-family, sans-serif)}"},2190:(e,t,s)=>{s.d(t,{g:()=>i,u:()=>a});var o=s(87406);const i=async e=>{if(null==e||"en"===e||""===e.trim())return o.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},o.d,await t.json()):o.d}catch(t){return o.d}},a=(e=o.d)=>t=>{var s;return null!==(s=e[t])&&void 0!==s?s:t}},43541:(e,t,s)=>{s.d(t,{o:()=>l,s:()=>c});var o=s(35007);const i=e=>!("isConnected"in e)||e.isConnected,a=((e,t)=>{let s;return(...o)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...o)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(i))}),2e3),n=e=>"function"==typeof e?e():e,r=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:c,onChange:l}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{const s=n(e);let o=new Map(Object.entries(null!=s?s:{}));const i={dispose:[],get:[],set:[],reset:[]},a=()=>{var t;o=new Map(Object.entries(null!==(t=n(e))&&void 0!==t?t:{})),i.reset.forEach((e=>e()))},c=e=>(i.get.forEach((t=>t(e))),o.get(e)),l=(e,s)=>{const a=o.get(e);t(s,a,e)&&(o.set(e,s),i.set.forEach((t=>t(e,s,a))))},u="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>c(t),ownKeys:e=>Array.from(o.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>o.has(t),set:(e,t,s)=>(l(t,s),!0)}),d=(e,t)=>(i[e].push(t),()=>{r(i[e],t)});return{state:u,get:c,set:l,on:d,onChange:(t,s)=>{const o=d("set",((e,o)=>{e===t&&s(o)})),i=d("reset",(()=>s(n(e)[t])));return()=>{o(),i()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(d("set",t.set)),t.get&&e.push(d("get",t.get)),t.reset&&e.push(d("reset",t.reset)),t.dispose&&e.push(d("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{i.dispose.forEach((e=>e())),a()},reset:a,forceUpdate:e=>{const t=o.get(e);i.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof o.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,o.a)();s&&((e,t,s)=>{const o=e.get(t);o?o.includes(s)||o.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(o.f)),a(e)},reset:()=>{e.forEach((e=>e.forEach(o.f))),a(e)}}})()),s})({})}}]);