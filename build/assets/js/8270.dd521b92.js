"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[8270],{87406:(e,t,n)=>{n.d(t,{d:()=>i});const i={chat:"Chat","chat.new":"New",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",mute:"Mute",kick:"Kick","participant.turn_off_video":"Turn off video",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all","stage_request.header_title":"Join Stage Requests","stage_request.deny_request":"Deny request","stage_request.accept_request":"Accept request","stage_request.accept_all":"Accept all","stage_request.deny_all":"Deny all","stage_request.approval_pending":"Pending","stage_request.denied":"Denied","stage_request.request":"Join stage","stage_request.leave_stage":"Leave stage","stage_request.request_tip":"Request to join the discussion","stage_request.leave_tip":"Leave the stage","stage_request.pending_tip":"Request pending","stage_request.denied_tip":"Rejected request","stage.empty_host":"The stage is empty","stage.empty_host_summary":"To begin the webinar, please join the stage or accept a join stage request from the participants tab.","stage.empty_viewer":"Webinar has not yet been started","stage.remove_from_stage":"Remove from stage","stage.add_to_stage":"Add to stage","stage.join_title":"Joining webinar stage","stage.join_summary":"Upon joining the stage, your video & audio as shown above will be visible to all participants.","stage.join_cancel":"Cancel","stage.join_confirm":"Confirm & Join stage","setup_screen.join_in_as":"Join in as","setup_screen.joining_as":"Joining as","setup_screen.your_name":"Your name","stage.reconnecting":"Reconnecting...",pip_on:"Show PiP",pip_off:"Hide PiP","recording.started":"This meeting is being recorded.","recording.stopped":"Recording for this meeting has been stopped.",mute_all:"Mute all","mute_all.description":"Everyone in the meeting will be muted","mute_all.header":"Are you sure?","mute_all.allow_unmute":"Allow others to unmute"}},18270:(e,t,n)=>{n.r(t),n.d(t,{dyte_screen_share_toggle:()=>c});var i=n(35007),s=n(85294),r=n(2190),o=n(63677);n(87406);const a=()=>"undefined"!=typeof navigator&&void 0!==navigator.mediaDevices&&"getDisplayMedia"in navigator.mediaDevices,c=class{constructor(e){(0,i.r)(this,e),this.variant="button",this.iconPack=s.d,this.t=(0,r.u)(),this.maxScreenShareCount=-1,this.screenShareCount=0,this.screenShareEnabled=!1,this.canScreenShare=!1,this.shareScreenPermission="NOT_REQUESTED",this.selfScreenShareListener=({screenShareEnabled:e})=>{this.screenShareEnabled=e},this.screenShareListener=({screenShareEnabled:e})=>{const t=this.screenShareCount+(e?1:-1);this.screenShareCount=Math.max(t,0)},this.participantLeftListener=({screenShareEnabled:e})=>{e&&(this.screenShareCount=Math.max(this.screenShareCount-1,0))},this.selfJoinStateListener=()=>{this.updateCanProduce(this.meeting)},this.selfStageLeftListener=()=>{this.canScreenShare=!1},this.selfJoinStateRejectedListener=()=>{this.updateCanProduce(this.meeting)},this.mediaPermissionErrorListener=({kind:e,message:t})=>{"screenshare"===e&&(this.shareScreenPermission=t)},this.reachedMaxScreenShares=()=>this.maxScreenShareCount>0&&this.screenShareCount>=this.maxScreenShareCount,this.toggleScreenShare=()=>{var e;const t=null===(e=this.meeting)||void 0===e?void 0:e.self;null==t||!this.canScreenShare||this.reachedMaxScreenShares()||this.hasPermissionError()||(t.screenShareEnabled?t.disableScreenShare():t.enableScreenShare())}}connectedCallback(){a()?this.meetingChanged(this.meeting):o.l.error("[dyte-screenshare-toggle] Device does not support screensharing.")}disconnectedCallback(){var e,t,n,i,s,r,o,a,c;null===(e=this.meeting)||void 0===e||e.participants.joined.removeListener("screenShareUpdate",this.screenShareListener),null===(t=this.meeting)||void 0===t||t.participants.joined.removeListener("participantLeft",this.participantLeftListener),null===(n=this.meeting)||void 0===n||n.self.removeListener("screenShareUpdate",this.selfScreenShareListener),null===(i=this.meeting)||void 0===i||i.self.removeListener("mediaPermissionError",this.mediaPermissionErrorListener),null===(s=this.meeting)||void 0===s||s.self.removeListener("joinStageRequestAccepted",this.selfJoinStateListener),null===(r=this.meeting)||void 0===r||r.self.removeListener("joinStageRequestRejected",this.selfJoinStateRejectedListener),null===(o=this.meeting)||void 0===o||o.self.removeListener("stageJoined",this.selfJoinStateListener),null===(a=this.meeting)||void 0===a||a.self.removeListener("stageLeft",this.selfStageLeftListener),null===(c=this.meeting)||void 0===c||c.self.removeListener("removedFromStage",this.selfJoinStateListener)}meetingChanged(e){if(null!=e){const t=e.self;this.updateCanProduce(e),this.maxScreenShareCount=t.config.maxScreenShareCount,this.screenShareEnabled=t.screenShareEnabled;let n=0;for(const i of e.participants.joined.toArray())i.screenShareEnabled&&n++;this.screenShareCount=n,e.participants.joined.addListener("screenShareUpdate",this.screenShareListener),e.participants.joined.addListener("participantLeft",this.participantLeftListener),t.addListener("screenShareUpdate",this.selfScreenShareListener),t.addListener("mediaPermissionError",this.mediaPermissionErrorListener),t.addListener("joinStageRequestAccepted",this.selfJoinStateListener),t.addListener("joinStageRequestRejected",this.selfJoinStateRejectedListener),t.addListener("stageJoined",this.selfJoinStateListener),t.addListener("stageLeft",this.selfStageLeftListener),t.addListener("removedFromStage",this.selfJoinStateListener)}}updateCanProduce(e){const{self:t,meta:n}=e,i="ALLOWED"===t.permissions.canProduceScreenshare,s="WEBINAR"===n.viewType;if(this.canScreenShare=!1,i)this.canScreenShare=!0;else if(s){!("CAN_REQUEST"===t.permissions.canProduceScreenshare)||"ON_STAGE"!==t.webinarStageStatus&&"ACCEPTED_TO_JOIN_STAGE"!==t.webinarStageStatus||(this.canScreenShare=!0)}}hasPermissionError(){return"SYSTEM_DENIED"===this.shareScreenPermission||"COULD_NOT_START"===this.shareScreenPermission}getState(){let e="",t="",n="",i={};const s=this.hasPermissionError(),r=this.reachedMaxScreenShares();return this.screenShareEnabled&&!s?(t=this.t("share_screen_stop"),n=this.iconPack.share_screen_stop,i["red-icon"]=!0):(t=this.t("share_screen_start"),n=this.iconPack.share_screen_start),"SYSTEM_DENIED"===this.shareScreenPermission?(e=this.t("perm_sys_denied"),i["red-icon"]=!0):e=t,r&&(e=this.t("Maximum screen share limit reached")),{tooltipLabel:e,label:t,icon:n,classList:i,showWarning:s||r}}render(){if(!a()||!this.canScreenShare)return null;const{tooltipLabel:e,label:t,icon:n,classList:s,showWarning:r}=this.getState();return(0,i.h)(i.H,{title:t},(0,i.h)("dyte-tooltip",{placement:"top",kind:"block",label:e,delay:600,part:"tooltip"},(0,i.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,variant:this.variant,label:t,icon:n,class:s,onClick:this.toggleScreenShare,disabled:r,showWarning:r})))}static get watchers(){return{meeting:["meetingChanged"]}}};c.style=":host{display:block;font-family:var(--dyte-font-family, sans-serif)}"},2190:(e,t,n)=>{n.d(t,{g:()=>s,u:()=>r});var i=n(87406);const s=async e=>{if(null==e||"en"===e||""===e.trim())return i.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},i.d,await t.json()):i.d}catch(t){return i.d}},r=(e=i.d)=>t=>{var n;return null!==(n=e[t])&&void 0!==n?n:t}},63677:(e,t,n)=>{n.d(t,{a:()=>i,c:()=>s,l:()=>r});var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function s(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var r=s((function(e){var t,n;t=i,n=function(){var e=function(){},t="undefined",n=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),i=["trace","debug","info","warn","error"];function s(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(i){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function r(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function o(i){return"debug"===i&&(i="log"),typeof console!==t&&("trace"===i&&n?r:void 0!==console[i]?s(console,i):void 0!==console.log?s(console,"log"):e)}function a(t,n){for(var s=0;s<i.length;s++){var r=i[s];this[r]=s<t?e:this.methodFactory(r,t,n)}this.log=this.debug}function c(e,n,i){return function(){typeof console!==t&&(a.call(this,n,i),this[e].apply(this,arguments))}}function l(e,t,n){return o(e)||c.apply(this,arguments)}function d(e,n,s){var r,o=this;n=null==n?"WARN":n;var c="loglevel";function d(){var e;if(typeof window!==t&&c){try{e=window.localStorage[c]}catch(s){}if(typeof e===t)try{var n=window.document.cookie,i=n.indexOf(encodeURIComponent(c)+"=");-1!==i&&(e=/^([^;]+)/.exec(n.slice(i))[1])}catch(s){}return void 0===o.levels[e]&&(e=void 0),e}}"string"==typeof e?c+=":"+e:"symbol"==typeof e&&(c=void 0),o.name=e,o.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},o.methodFactory=s||l,o.getLevel=function(){return r},o.setLevel=function(n,s){if("string"==typeof n&&void 0!==o.levels[n.toUpperCase()]&&(n=o.levels[n.toUpperCase()]),!("number"==typeof n&&n>=0&&n<=o.levels.SILENT))throw"log.setLevel() called with invalid level: "+n;if(r=n,!1!==s&&function(e){var n=(i[e]||"silent").toUpperCase();if(typeof window!==t&&c){try{return void(window.localStorage[c]=n)}catch(s){}try{window.document.cookie=encodeURIComponent(c)+"="+n+";"}catch(s){}}}(n),a.call(o,n,e),typeof console===t&&n<o.levels.SILENT)return"No console available for logging"},o.setDefaultLevel=function(e){n=e,d()||o.setLevel(e,!1)},o.resetLevel=function(){o.setLevel(n,!1),function(){if(typeof window!==t&&c){try{return void window.localStorage.removeItem(c)}catch(e){}try{window.document.cookie=encodeURIComponent(c)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},o.enableAll=function(e){o.setLevel(o.levels.TRACE,e)},o.disableAll=function(e){o.setLevel(o.levels.SILENT,e)};var h=d();null==h&&(h=n),o.setLevel(h,!1)}var h=new d,u={};h.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=u[e];return t||(t=u[e]=new d(e,h.getLevel(),h.methodFactory)),t};var p=typeof window!==t?window.log:void 0;return h.noConflict=function(){return typeof window!==t&&window.log===h&&(window.log=p),h},h.getLoggers=function(){return u},h.default=h,h},e.exports?e.exports=n():t.log=n()}));r.enableAll()}}]);