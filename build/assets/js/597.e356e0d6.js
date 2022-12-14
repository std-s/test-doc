"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[597],{87406:(e,t,i)=>{i.d(t,{d:()=>o});const o={chat:"Chat","chat.new":"New",participants:"Participants",polls:"Polls",plugins:"Plugins",mic_off:"Mic Off",mic_on:"Mic On",video_off:"Video Off",video_on:"Video On",left_meeting:"You left the meeting",share_screen_start:"Share Screen",share_screen_stop:"Stop Sharing",leave:"Leave",dismiss:"Dismiss",page:"Page",settings:"Settings",audio:"Audio",video:"Video",connection:"Connection",leave_confirmation:"Are you sure you want to leave the call?",end_meeting_for_all:"End meeting for all",cancel:"Cancel",mute:"Mute",kick:"Kick","participant.turn_off_video":"Turn off video",perm_browser_denied:"Permission denied by browser","perm.sys_denied.message":"To enable system permission, go to Mac's System Preferences -> Security & Privacy ->  Privacy -> Select Microphone, Camera or 'Screen Recording' and allow permission for your specific browser",perm_sys_denied:"Permission denied by system",perm_denied_title:"Camera and mic permissions denied",perm_denied_text:"It seems like your browser or system has blocked permissions for us to access camera, microphone. Please allow these permissions and reload for a smoother experience.",full_screen:"Full Screen","full_screen.exit":"Exit Full Screen","waitlist.header_title":"Waiting","waitlist.body_text":"You are in the waiting room, the host will let you in soon.","waitlist.deny_request":"Deny request","waitlist.accept_request":"Accept request","waitlist.accept_all":"Accept all","stage_request.header_title":"Join Stage Requests","stage_request.deny_request":"Deny request","stage_request.accept_request":"Accept request","stage_request.accept_all":"Accept all","stage_request.deny_all":"Deny all","stage_request.approval_pending":"Pending","stage_request.denied":"Denied","stage_request.request":"Join stage","stage_request.leave_stage":"Leave stage","stage_request.request_tip":"Request to join the discussion","stage_request.leave_tip":"Leave the stage","stage_request.pending_tip":"Request pending","stage_request.denied_tip":"Rejected request","stage.empty_host":"The stage is empty","stage.empty_host_summary":"To begin the webinar, please join the stage or accept a join stage request from the participants tab.","stage.empty_viewer":"Webinar has not yet been started","stage.remove_from_stage":"Remove from stage","stage.add_to_stage":"Add to stage","stage.join_title":"Joining webinar stage","stage.join_summary":"Upon joining the stage, your video & audio as shown above will be visible to all participants.","stage.join_cancel":"Cancel","stage.join_confirm":"Confirm & Join stage","setup_screen.join_in_as":"Join in as","setup_screen.joining_as":"Joining as","setup_screen.your_name":"Your name","stage.reconnecting":"Reconnecting...",pip_on:"Show PiP",pip_off:"Hide PiP","recording.started":"This meeting is being recorded.","recording.stopped":"Recording for this meeting has been stopped.",mute_all:"Mute all","mute_all.description":"Everyone in the meeting will be muted","mute_all.header":"Are you sure?","mute_all.allow_unmute":"Allow others to unmute"}},50597:(e,t,i)=>{i.r(t),i.d(t,{dyte_participants_audio:()=>s});var o=i(35007),n=i(63677),a=i(2190);i(87406);class r{constructor(){this.audio=document.createElement("audio"),this.audio.autoplay=!0,this.audioStream=new MediaStream,this.audio.srcObject=this.audioStream,this.audioTracks=[]}addTrack(e,t){this.audioTracks.some((t=>t.id===e))||(this.audioTracks.push({id:e,track:t}),this.audioStream.addTrack(t),this.play())}removeTrack(e){const t=this.audioTracks.find((t=>t.id===e));null!=t&&(this.audioStream.removeTrack(t.track),this.audioTracks=this.audioTracks.filter((t=>t.id!==e)))}async play(){var e;this.audio.srcObject=this.audioStream,await(null===(e=this.audio.play())||void 0===e?void 0:e.catch((e=>{"NotAllowedError"===e.name?null!=this._onError&&this._onError():"AbortError"!==e.name&&n.l.error("[dyte-audio] play() error\n",e)})))}async setDevice(e){var t,i,o;await(null===(o=null===(i=(t=this.audio).setSinkId)||void 0===i?void 0:i.call(t,e))||void 0===o?void 0:o.catch((e=>{n.l.error("[dyte-audio] setSinkId() error\n",e)})))}onError(e){this._onError=e}}const s=class{constructor(e){(0,o.r)(this,e),this.t=(0,a.u)(),this.showPlayDialog=!1}componentDidLoad(){this.meetingChanged(this.meeting)}disconnectedCallback(){null!=this.meeting&&(this.audioUpdateListener&&this.meeting.participants.active.removeListener("audioUpdate",this.audioUpdateListener),this.screenShareUpdateListener&&this.meeting.participants.joined.removeListener("screenShareUpdate",this.screenShareUpdateListener),this.participantLeftListener&&this.meeting.participants.joined.removeListener("participantLeft",this.participantLeftListener),this.deviceUpdateListener&&this.meeting.self.removeListener("deviceUpdate",this.deviceUpdateListener))}async meetingChanged(e){if(null!=e){this.audio=new r,this.audio.onError((()=>{this.showPlayDialog=!0})),this.audio.play();const t=e.self.getCurrentDevices();null!=t.speaker&&await this.audio.setDevice(t.speaker.deviceId),this.audioUpdateListener=({id:e,audioEnabled:t,audioTrack:i})=>{const o=`audio-${e}`;t&&null!=i?this.audio.addTrack(o,i):this.audio.removeTrack(o)};{const t=e.participants.joined.toArray();for(const e of t)this.audioUpdateListener(e)}this.participantLeftListener=({id:e})=>{this.audio.removeTrack(`audio-${e}`),this.audio.removeTrack(`screenshare-${e}`)},this.screenShareUpdateListener=({id:e,screenShareEnabled:t,screenShareTracks:i})=>{const o=`screenshare-${e}`;t&&null!=i.audio?this.audio.addTrack(o,i.audio):this.audio.removeTrack(o)},this.deviceUpdateListener=({device:e,preview:t})=>{t||"audiooutput"===e.kind&&this.audio.setDevice(e.deviceId)},e.participants.joined.addListener("audioUpdate",this.audioUpdateListener),e.participants.joined.addListener("screenShareUpdate",this.screenShareUpdateListener),e.participants.joined.addListener("participantLeft",this.participantLeftListener),e.self.addListener("deviceUpdate",this.deviceUpdateListener)}}render(){return(0,o.h)(o.H,null,this.showPlayDialog&&(0,o.h)("dyte-dialog",{open:!0,onDyteDialogClose:()=>{this.showPlayDialog=!1}},(0,o.h)("div",{class:"modal"},(0,o.h)("h3",null,this.t("Allow Audio Playback")),(0,o.h)("p",null,this.t("In order to play audio properly on your device, click the button below")),(0,o.h)("dyte-button",{kind:"wide",onClick:()=>{this.audio.play(),this.showPlayDialog=!1},title:this.t("Play Audio")},this.t("Play Audio")))))}static get watchers(){return{meeting:["meetingChanged"]}}};s.style=":host{display:block;font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.modal{box-sizing:border-box;width:100%;max-width:var(--dyte-space-96, 384px);padding:var(--dyte-space-4, 16px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.modal h3{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px);font-size:24px;font-weight:500}.modal p{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-6, 24px)}.modal dyte-button{width:100%}"},2190:(e,t,i)=>{i.d(t,{g:()=>n,u:()=>a});var o=i(87406);const n=async e=>{if(null==e||"en"===e||""===e.trim())return o.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},o.d,await t.json()):o.d}catch(t){return o.d}},a=(e=o.d)=>t=>{var i;return null!==(i=e[t])&&void 0!==i?i:t}},63677:(e,t,i)=>{i.d(t,{a:()=>o,c:()=>n,l:()=>a});var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==i.g?i.g:"undefined"!=typeof self?self:{};function n(e,t,i){return e(i={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},i.exports),i.exports}var a=n((function(e){var t,i;t=o,i=function(){var e=function(){},t="undefined",i=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),o=["trace","debug","info","warn","error"];function n(e,t){var i=e[t];if("function"==typeof i.bind)return i.bind(e);try{return Function.prototype.bind.call(i,e)}catch(o){return function(){return Function.prototype.apply.apply(i,[e,arguments])}}}function a(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function r(o){return"debug"===o&&(o="log"),typeof console!==t&&("trace"===o&&i?a:void 0!==console[o]?n(console,o):void 0!==console.log?n(console,"log"):e)}function s(t,i){for(var n=0;n<o.length;n++){var a=o[n];this[a]=n<t?e:this.methodFactory(a,t,i)}this.log=this.debug}function d(e,i,o){return function(){typeof console!==t&&(s.call(this,i,o),this[e].apply(this,arguments))}}function l(e,t,i){return r(e)||d.apply(this,arguments)}function c(e,i,n){var a,r=this;i=null==i?"WARN":i;var d="loglevel";function c(){var e;if(typeof window!==t&&d){try{e=window.localStorage[d]}catch(n){}if(typeof e===t)try{var i=window.document.cookie,o=i.indexOf(encodeURIComponent(d)+"=");-1!==o&&(e=/^([^;]+)/.exec(i.slice(o))[1])}catch(n){}return void 0===r.levels[e]&&(e=void 0),e}}"string"==typeof e?d+=":"+e:"symbol"==typeof e&&(d=void 0),r.name=e,r.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},r.methodFactory=n||l,r.getLevel=function(){return a},r.setLevel=function(i,n){if("string"==typeof i&&void 0!==r.levels[i.toUpperCase()]&&(i=r.levels[i.toUpperCase()]),!("number"==typeof i&&i>=0&&i<=r.levels.SILENT))throw"log.setLevel() called with invalid level: "+i;if(a=i,!1!==n&&function(e){var i=(o[e]||"silent").toUpperCase();if(typeof window!==t&&d){try{return void(window.localStorage[d]=i)}catch(n){}try{window.document.cookie=encodeURIComponent(d)+"="+i+";"}catch(n){}}}(i),s.call(r,i,e),typeof console===t&&i<r.levels.SILENT)return"No console available for logging"},r.setDefaultLevel=function(e){i=e,c()||r.setLevel(e,!1)},r.resetLevel=function(){r.setLevel(i,!1),function(){if(typeof window!==t&&d){try{return void window.localStorage.removeItem(d)}catch(e){}try{window.document.cookie=encodeURIComponent(d)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},r.enableAll=function(e){r.setLevel(r.levels.TRACE,e)},r.disableAll=function(e){r.setLevel(r.levels.SILENT,e)};var u=c();null==u&&(u=i),r.setLevel(u,!1)}var u=new c,p={};u.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=p[e];return t||(t=p[e]=new c(e,u.getLevel(),u.methodFactory)),t};var h=typeof window!==t?window.log:void 0;return u.noConflict=function(){return typeof window!==t&&window.log===u&&(window.log=h),u},u.getLoggers=function(){return p},u.default=u,u},e.exports?e.exports=i():t.log=i()}));a.enableAll()}}]);