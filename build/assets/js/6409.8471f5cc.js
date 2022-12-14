"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[6409],{87406:(e,t,i)=>{i.d(t,{d:()=>s});const s={chat:"Chat","chat.new":"New",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",mute:"Mute",kick:"Kick","participant.turn_off_video":"Turn off video",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all","stage_request.header_title":"Join Stage Requests","stage_request.deny_request":"Deny request","stage_request.accept_request":"Accept request","stage_request.accept_all":"Accept all","stage_request.deny_all":"Deny all","stage_request.approval_pending":"Pending","stage_request.denied":"Denied","stage_request.request":"Join stage","stage_request.leave_stage":"Leave stage","stage_request.request_tip":"Request to join the discussion","stage_request.leave_tip":"Leave the stage","stage_request.pending_tip":"Request pending","stage_request.denied_tip":"Rejected request","stage.empty_host":"The stage is empty","stage.empty_host_summary":"To begin the webinar, please join the stage or accept a join stage request from the participants tab.","stage.empty_viewer":"Webinar has not yet been started","stage.remove_from_stage":"Remove from stage","stage.add_to_stage":"Add to stage","stage.join_title":"Joining webinar stage","stage.join_summary":"Upon joining the stage, your video & audio as shown above will be visible to all participants.","stage.join_cancel":"Cancel","stage.join_confirm":"Confirm & Join stage","setup_screen.join_in_as":"Join in as","setup_screen.joining_as":"Joining as","setup_screen.your_name":"Your name","stage.reconnecting":"Reconnecting...",pip_on:"Show PiP",pip_off:"Hide PiP","recording.started":"This meeting is being recorded.","recording.stopped":"Recording for this meeting has been stopped.",mute_all:"Mute all","mute_all.description":"Everyone in the meeting will be muted","mute_all.header":"Are you sure?","mute_all.allow_unmute":"Allow others to unmute"}},56409:(e,t,i)=>{i.r(t),i.d(t,{dyte_notification:()=>r});var s=i(35007),a=i(85294),o=i(2190);i(87406);const r=class{constructor(e){(0,s.r)(this,e),this.dismiss=(0,s.c)(this,"dyteNotificationDismiss",7),this.iconPack=a.d,this.t=(0,o.u)(),this.imageState="loading"}connectedCallback(){this.notificationChanged(this.notification)}notificationChanged(e){null!=e&&"number"==typeof e.duration&&setTimeout((()=>{this.dismiss.emit(e.id)}),e.duration)}render(){return(0,s.h)(s.H,null,(0,s.h)("div",{class:"ctr"},null!=this.notification.icon&&(0,s.h)("dyte-icon",{class:"icon",icon:this.notification.icon}),null!=this.notification.image&&null==this.notification.icon&&"errored"!==this.imageState&&(0,s.h)("img",{src:this.notification.image,class:{loaded:"loaded"===this.imageState},onLoad:()=>this.imageState="loaded",onError:()=>this.imageState="errored"}),(0,s.h)("p",{class:"message"},this.notification.message),(0,s.h)("div",{class:"right"},null!=this.notification.button&&(0,s.h)("dyte-button",{size:"sm",variant:this.notification.button.variant,onClick:()=>this.notification.button.onClick()},this.notification.button.text),(0,s.h)("dyte-icon",{"aria-label":this.t("dismiss"),class:"dismiss",icon:this.iconPack.dismiss,onClick:()=>this.dismiss.emit(this.notification.id)}))))}static get watchers(){return{notification:["notificationChanged"]}}};r.style=":host{pointer-events:none;z-index:10;display:block;height:var(--dyte-space-10, 40px);font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-1000, 255 255 255));-webkit-animation:show 0.4s ease;animation:show 0.4s ease;transition:0.4s}.ctr{box-sizing:border-box;display:inline-flex;height:100%;min-width:var(--dyte-space-40, 160px);align-items:center;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:rgb(var(--dyte-colors-background-1000, 8 8 8));--tw-shadow:var(--tw-shadow-colored);pointer-events:auto}img{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-0, 0px);width:var(--dyte-space-0, 0px);border-radius:9999px}img.loaded{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}.message{margin-right:var(--dyte-space-3, 12px)}dyte-icon.icon{margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}dyte-icon.dismiss{margin-left:auto;height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);border-radius:var(--dyte-border-radius-md, 8px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}dyte-icon.dismiss:hover{cursor:pointer;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}dyte-icon.dismiss{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}dyte-button{margin-left:var(--dyte-space-4, 16px);margin-right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px)}.right{margin-left:auto;display:flex;align-items:center}.right>*{margin-left:var(--dyte-space-2, 8px)}.right>*:first-child{margin-left:var(--dyte-space-0, 0px)}:host(.exit){-webkit-animation:exit 0.4s ease;animation:exit 0.4s ease}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-120px)}100%{opacity:1;transform:translateX(0px)}}@keyframes show{0%{opacity:0;transform:translateX(-120px)}100%{opacity:1;transform:translateX(0px)}}@-webkit-keyframes exit{0%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(-120px)}}@keyframes exit{0%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(-120px)}}:host([size='sm']){font-size:14px}"},2190:(e,t,i)=>{i.d(t,{g:()=>a,u:()=>o});var s=i(87406);const a=async e=>{if(null==e||"en"===e||""===e.trim())return s.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},s.d,await t.json()):s.d}catch(t){return s.d}},o=(e=s.d)=>t=>{var i;return null!==(i=e[t])&&void 0!==i?i:t}}}]);