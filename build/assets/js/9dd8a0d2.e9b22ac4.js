"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[7054],{34866:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(6103);function l(e){let{title:t,className:n}=e;return r.createElement(a._,{title:t,className:n},r.createElement(a.w,{title:"Dyte Embed",description:"Embed a dyte meeting easily",to:"/guides/embed"}),r.createElement(a.w,{title:"Integrating with Webhooks",description:"Use webhooks to keep track of meeting events",to:"/guides/integrating-with-webhooks"}),r.createElement(a.w,{title:"Recording your meetings",description:"Record meetings easily and store in the cloud",to:"/guides/recording-your-meetings"}),r.createElement(a.w,{title:"Livestreaming to other platforms",description:"Livestream to platforms like YouTube, Twitch etc.",to:"/guides/livestreaming-other-platforms"}),r.createElement(a.w,{title:"Livestreaming to HLS",description:"Livestream to HLS using REST APIs",to:"/guides/livestreaming-rtmp-hls"}),r.createElement(a.w,{title:"Livestreaming any RTMP input",description:"Livestream to any service that accepts an RTMP input",to:"/guides/integrating-with-webhooks"}),r.createElement(a.w,{title:"Controlling an Active Session",description:"Control an active meeting with REST APIs",to:"/guides/controlling-an-active-session"}))}},6103:(e,t,n)=>{n.d(t,{w:()=>p,_:()=>m});var r=n(67294),a=n(70655);function l(e){return e.toLowerCase()}var i=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],o=/[^A-Z0-9]+/gi;function c(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function s(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,r=void 0===n?i:n,a=t.stripRegexp,s=void 0===a?o:a,u=t.transform,f=void 0===u?l:u,d=t.delimiter,m=void 0===d?" ":d,p=c(c(e,r,"$1\0$2"),s,"\0"),h=0,v=p.length;"\0"===p.charAt(h);)h++;for(;"\0"===p.charAt(v-1);)v--;return p.slice(h,v).split("\0").map(f).join(m)}(e,(0,a.__assign)({delimiter:"."},t))}function u(e,t){return void 0===t&&(t={}),s(e,(0,a.__assign)({delimiter:"-"},t))}var f=n(39960),d=n(86010);function m(e){let{id:t,title:n,children:a,description:l,className:i,hasSubSections:o=!1,HeadingTag:c="h3"}=e;return r.createElement("div",{className:(0,d.Z)("homepage-section",o&&"has-sub-sections",i)},n&&r.createElement(c,{id:null!=t?t:u(n)},n),l&&r.createElement("p",{className:"section-description"},l),r.createElement("div",{className:"section-content"},a))}function p(e){let{id:t,icon:n,title:a,description:l,to:i}=e;return r.createElement(f.Z,{to:i,className:"homepage-card"},n&&r.createElement("div",{className:"icon"},n),r.createElement("div",{className:"card-content"},r.createElement("div",{className:"title",id:t&&u(a)},a),r.createElement("div",{className:"description"},l)))}},69448:(e,t,n)=>{n.d(t,{mH:()=>m,QI:()=>l,ih:()=>p,J$:()=>i,ug:()=>s,O:()=>f,gQ:()=>o,OH:()=>u,Fx:()=>d,pJ:()=>c});var r=n(67294);var a=n(87462);function l(e){return r.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",fill:"none"},e),r.createElement("rect",{width:64,height:64,rx:10,fill:"#262626"}),r.createElement("g",{clipPath:"url(#clip0_5634_80959)"},r.createElement("path",{d:"M9.018 16.033l22.201-7.91 22.8 7.77-3.692 29.373L31.219 55.85 12.41 45.407 9.018 16.033z",fill:"#E23237"}),r.createElement("path",{d:"M54.018 15.893L31.22 8.123v47.726l19.108-10.565 3.691-29.391z",fill:"#B52E31"}),r.createElement("path",{d:"M31.254 13.695L17.42 44.475l5.168-.088 2.777-6.943h12.41l3.042 7.031 4.94.088-14.503-30.868zm.035 9.862l4.676 9.773h-8.79l4.114-9.773z",fill:"#fff"})),r.createElement("defs",null,r.createElement("clipPath",{id:"clip0_5634_80959"},r.createElement("path",{fill:"#fff",transform:"translate(9 8)",d:"M0 0H45.1765V48H0z"}))))}function i(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},e),r.createElement("rect",{width:48,height:48,rx:10,fill:"#262626"}),r.createElement("g",{clipPath:"url(#clip0)"},r.createElement("path",{d:"M27.226 5.908L8.86 24.272l5.684 5.684 24.05-24.048h-11.37zM27.098 22.843l-9.832 9.833 5.705 5.79 5.674-5.673 9.95-9.95H27.098z",fill:"#47C5FB"}),r.createElement("path",{d:"M22.97 38.467l4.32 4.319h11.304l-9.95-9.993-5.673 5.674z",fill:"#00569E"}),r.createElement("path",{d:"M17.201 32.74l5.684-5.685 5.76 5.738-5.674 5.674-5.77-5.727z",fill:"#00B5F8"}),r.createElement("path",{d:"M22.97 38.467l4.725-1.568.47-3.626-5.194 5.194z",fill:"url(#paint0_linear)",fillOpacity:.8})),r.createElement("defs",null,r.createElement("linearGradient",{id:"paint0_linear",x1:23.176,y1:34.6749,x2:26.9125,y2:36.0213,gradientUnits:"userSpaceOnUse"},r.createElement("stop",null),r.createElement("stop",{offset:1,stopOpacity:0})),r.createElement("clipPath",{id:"clip0"},r.createElement("path",{fill:"#fff",d:"M8.86133 5.90771H38.67933V42.83081H8.86133z"}))))}function o(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},e),r.createElement("rect",{width:48,height:48,rx:10,fill:"#262626"}),r.createElement("path",{d:"M23.676 26.874a3.23 3.23 0 100-6.461 3.23 3.23 0 000 6.461z",fill:"#00D8FF"}),r.createElement("path",{d:"M23.676 31.05a36.682 36.682 0 01-11.475-1.55 14.602 14.602 0 01-4.726-2.53 4.578 4.578 0 01-1.891-3.327c0-2.136 2.347-4.23 6.278-5.6a37.161 37.161 0 0111.814-1.741 37.054 37.054 0 0111.66 1.71 14.7 14.7 0 014.572 2.412 4.382 4.382 0 011.86 3.22c0 2.22-2.623 4.47-6.849 5.868a37.219 37.219 0 01-11.243 1.539zm0-13.203a36.116 36.116 0 00-11.306 1.657c-3.619 1.262-5.24 2.989-5.24 4.135 0 1.2 1.743 3.085 5.57 4.394a35.16 35.16 0 0010.976 1.472c3.64.065 7.268-.427 10.759-1.46 3.974-1.317 5.783-3.205 5.783-4.402a3.007 3.007 0 00-1.305-2.033 13.174 13.174 0 00-4.085-2.137 35.49 35.49 0 00-11.152-1.626z",fill:"#00D8FF"}),r.createElement("path",{d:"M16.337 39.757a3.41 3.41 0 01-1.726-.424c-1.85-1.067-2.492-4.145-1.715-8.236a37.16 37.16 0 014.394-11.104 37.055 37.055 0 017.305-9.246 14.7 14.7 0 014.373-2.756 4.382 4.382 0 013.72 0c1.924 1.109 2.56 4.505 1.663 8.864a37.226 37.226 0 01-4.286 10.51 36.679 36.679 0 01-7.076 9.167 14.602 14.602 0 01-4.553 2.828 6.366 6.366 0 01-2.099.397zm2.291-18.997a36.118 36.118 0 00-4.212 10.622c-.715 3.767-.029 6.032.969 6.609 1.034.598 3.543.03 6.59-2.632 2.701-2.55 4.981-5.511 6.755-8.774a35.672 35.672 0 004.111-10.05c.846-4.102.115-6.615-.921-7.212a3.007 3.007 0 00-2.414.115 13.173 13.173 0 00-3.89 2.479 35.491 35.491 0 00-6.979 8.851l-.009-.008z",fill:"#00D8FF"}),r.createElement("path",{d:"M31.013 39.774c-1.752 0-3.976-1.06-6.291-3.051a37.161 37.161 0 01-7.427-9.353 37.06 37.06 0 01-4.36-10.947 14.701 14.701 0 01-.205-5.169 4.383 4.383 0 011.854-3.214c1.921-1.113 5.182.031 8.51 2.985a37.22 37.22 0 016.965 8.961 36.68 36.68 0 014.407 10.71c.389 1.76.449 3.576.177 5.357a4.579 4.579 0 01-1.931 3.302 3.347 3.347 0 01-1.7.419zm-12.38-13.182a36.118 36.118 0 007.097 8.955c2.906 2.5 5.212 3.038 6.203 2.455 1.034-.6 1.796-3.053 1.01-7.022a35.166 35.166 0 00-4.227-10.224 35.668 35.668 0 00-6.649-8.58c-3.132-2.782-5.673-3.403-6.708-2.804a3.007 3.007 0 00-1.105 2.148 13.172 13.172 0 00.198 4.607 35.491 35.491 0 004.182 10.468l-.002-.003z",fill:"#00D8FF"}))}function c(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},e),r.createElement("rect",{width:48,height:48,rx:10,fill:"#8000FF"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.89 13.442v4.227h-3.688c.779-1.651 1.847-3.083 3.123-4.199.186-.017.376-.02.564-.028zm.849 0c.19.008.38.011.566.028 1.278 1.117 2.35 2.546 3.13 4.199h-3.696v-4.227zm-2.91.282a14.04 14.04 0 00-2.573 3.945h-3.427a10.6 10.6 0 016-3.945zm4.968 0a10.6 10.6 0 016.002 3.945h-3.422a14.034 14.034 0 00-2.58-3.945zm-11.544 4.794h3.663a15.926 15.926 0 00-.963 5.098h-4.238a10.55 10.55 0 011.538-5.098zm4.59 0h4.046v5.098h-5.086a14.98 14.98 0 011.04-5.098zm4.896 0h4.052c.616 1.56.991 3.277 1.04 5.098H24.74v-5.098zm4.978 0h3.658a10.549 10.549 0 011.538 5.098h-4.231a15.926 15.926 0 00-.965-5.098zm-16.002 5.948h4.238a15.93 15.93 0 00.963 5.098h-3.664a10.554 10.554 0 01-1.537-5.098zm5.088 0h5.086v5.098h-4.046a14.98 14.98 0 01-1.04-5.098zm5.936 0h5.071c-.09 1.6-.526 3.36-1.29 5.098h-3.78v-5.098zm5.923 0h4.251a10.554 10.554 0 01-1.536 5.098h-3.934c.716-1.724 1.135-3.47 1.219-5.098zm-14.833 5.948h3.427a14.042 14.042 0 002.574 3.944 10.596 10.596 0 01-6-3.944zm4.373 0h3.687v4.227c-.188-.008-.377-.012-.562-.029-1.278-1.116-2.346-2.546-3.125-4.198zm4.537 0h3.367a18.802 18.802 0 01-2.858 4.202c-.168.014-.339.018-.51.025v-4.227zm4.323 0h3.737a10.597 10.597 0 01-6.27 4.014 19.764 19.764 0 002.533-4.014z",fill:"#F5F5F7"}),r.createElement("path",{d:"M43.471 13.595a2.827 2.827 0 11-5.653 0 2.827 2.827 0 015.653 0zM7.826 17.207c.223 0 .44-.02.652-.059v15.094l13.106 7.567c-.342.395-.6.865-.746 1.382L6.908 33.15V17.09c.293.077.6.118.918.118zM27.79 41.191l13.93-8.042V17.044a3.61 3.61 0 01-1.57.129v15.07l-13.106 7.566c.343.395.6.865.746 1.382zM11.225 12.37l13.09-7.557 12.959 7.483c.193-.5.493-.946.873-1.31L24.314 3l-13.932 8.043c.371.372.662.824.843 1.327zm-.572 1.225a2.826 2.826 0 11-5.653 0 2.826 2.826 0 015.653 0zM27.14 42.174a2.826 2.826 0 11-5.652 0 2.826 2.826 0 015.652 0z",fill:"#F5F5F7"}))}function s(e){return r.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",width:64,height:64,viewBox:"0 0 64 64",fill:"none"},e),r.createElement("rect",{width:64,height:64,rx:10,fill:"#262626"}),r.createElement("g",{clipPath:"url(#clip0_5523_78768)"},r.createElement("path",{d:"M50.811 16.193l-3.347 37.504-15.049 4.172-15.006-4.166-3.345-37.51h36.747z",fill:"#E44D26"}),r.createElement("path",{d:"M32.438 54.68l12.16-3.37 2.86-32.05h-15.02v35.42z",fill:"#F16529"}),r.createElement("path",{d:"M25.93 28.46h6.508v-4.6H20.902l.11 1.235 1.13 12.677h10.296v-4.6H26.35l-.42-4.711zm1.037 11.612h-4.619l.645 7.223 9.423 2.616.022-.006V45.12l-.02.005-5.124-1.383-.328-3.669z",fill:"#EBEBEB"}),r.createElement("path",{d:"M17.483 6h2.338v2.31h2.138V6h2.338v6.995H21.96v-2.343h-2.138v2.343h-2.338V6zm9.889 2.32h-2.058V6h6.455v2.32h-2.06v4.675h-2.337V8.32zM32.793 6h2.438l1.5 2.458L38.228 6h2.438v6.995H38.34V9.527l-1.608 2.487h-.04l-1.61-2.487v3.466h-2.288V6zm9.038 0h2.338v4.683h3.288v2.312H41.83V6z",fill:"#F5F5F7"}),r.createElement("path",{d:"M32.422 37.772h5.665l-.535 5.966-5.13 1.385v4.786l9.43-2.614.07-.777 1.081-12.111.112-1.235H32.422v4.6zm0-9.322v.01h11.112l.092-1.033.21-2.332.11-1.235H32.422v4.59z",fill:"#fff"})),r.createElement("defs",null,r.createElement("clipPath",{id:"clip0_5523_78768"},r.createElement("path",{fill:"#fff",transform:"translate(14 6)",d:"M0 0H36.8753V52H0z"}))))}function u(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 119 109",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M73.318 0c52.308 36.468 35.388 76.685 35.388 76.685s14.875 17.218 8.863 32.275c0 0-6.136-10.547-16.424-10.547-9.916 0-15.742 10.547-35.698 10.547C21.01 108.96 0 70.903 0 70.903c40.037 27.002 67.368 7.879 67.368 7.879C49.333 68.044 10.97 16.709 10.97 16.709c33.405 29.162 47.846 36.85 47.846 36.85C50.2 46.252 26.03 10.547 26.03 10.547 45.367 30.623 83.792 58.64 83.792 58.64 94.7 27.637 73.318 0 73.318 0z",fill:"#F4AA45"}))}function f(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 140 139",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M.898 42.806L43.585 138.8l95.923-42.707-.072-.161-34.481-13.398-34.492-13.422 13.12-34.64L96.608.193.898 42.806z",fill:"#E89069"}),r.createElement("path",{d:"M49.949 20.967L22.727 91.893l20.858 46.906.425-.189 26.633-69.39-.153-.059 13.117-34.635L96.608.193 49.95 20.967z",fill:"#EF9543"}))}function d(e){return r.createElement("svg",(0,a.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",style:{color:"#1abc9c"}},e),r.createElement("path",{fillRule:"evenodd",d:"M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z",clipRule:"evenodd"}))}function m(e){return r.createElement("svg",(0,a.Z)({fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M9.25 7a.75.75 0 01.11 1.492l-.11.008H7a3.5 3.5 0 00-.206 6.994L7 15.5h2.25a.75.75 0 01.11 1.492L9.25 17H7a5 5 0 01-.25-9.994L7 7h2.25zM17 7a5 5 0 01.25 9.994L17 17h-2.25a.75.75 0 01-.11-1.492l.11-.008H17a3.5 3.5 0 00.206-6.994L17 8.5h-2.25a.75.75 0 01-.11-1.492L14.75 7H17zM7 11.25h10a.75.75 0 01.102 1.493L17 12.75H7a.75.75 0 01-.102-1.493L7 11.25h10H7z",fill:"currentColor"}))}function p(e){return r.createElement("svg",(0,a.Z)({fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:{color:"#db60db"}},e),r.createElement("path",{d:"M21.707 3.707a1 1 0 00-1.414-1.414L18.496 4.09a4.252 4.252 0 00-5.251.604l-1.068 1.069a1.75 1.75 0 000 2.474l3.585 3.586a1.75 1.75 0 002.475 0l1.068-1.068a4.252 4.252 0 00.605-5.25l1.797-1.798zm-11 8a1 1 0 00-1.414-1.414l-1.47 1.47-.293-.293a.75.75 0 00-1.06 0l-1.775 1.775a4.252 4.252 0 00-.605 5.25l-1.797 1.798a1 1 0 101.414 1.414l1.798-1.797a4.252 4.252 0 005.25-.605l1.775-1.775a.75.75 0 000-1.06l-.293-.293 1.47-1.47a1 1 0 00-1.414-1.414l-1.47 1.47-1.586-1.586 1.47-1.47z",fill:"currentColor"}))}},37275:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(67294),a=n(20774),l=n(76775),i=(n(53538),n(6103)),o=n(69448),c=n(34866);function s(){(0,l.k6)();return r.createElement(a.Z,{description:"Real-time audio & video SDKs, ready to launch \ud83d\ude80",wrapperClassName:"homepage"},r.createElement("div",{className:"pad"},r.createElement("div",{className:"center homepage-content"},r.createElement(i._,{title:"Get to know Dyte"},r.createElement(i.w,{title:"How OpenIM works",description:"Essential reading for a better understanding of how to best use OpenIM SDKs",to:"/how-dyte-works"}),r.createElement(i.w,{title:"Guides",description:"Take a look at all the available guides",to:"/guides/"})),r.createElement(i._,{title:"\ud83c\udf10 Web SDKs",id:"web-sdks",hasSubSections:!0},r.createElement(i._,{title:"\u2699\ufe0f Core SDKs",id:"core-sdks",HeadingTag:"h4",description:r.createElement(r.Fragment,null,"Realtime communication SDKs to add high quality audio/video calls to your web applications. ",r.createElement("br",null),"These are generally used with our UI Kit but you can create your own UI as well, it's pretty easy.")},r.createElement(i.w,{title:"Core SDK",description:"Realtime communication SDKs to add high quality audio/video calls to your web applications.",to:"/web-core/",icon:r.createElement(o.pJ,null)}),r.createElement(i.w,{title:"Plugin SDK",description:"Create your own plugins for use in meetings",to:"/plugin-sdk",icon:r.createElement(o.ih,null)})),r.createElement(i._,{title:"\ud83c\udfa8 UI Kit",id:"ui-kit",HeadingTag:"h4"},r.createElement(i.w,{title:"React UI Kit",description:"Add UI Kit to your React App",to:"/react-ui-kit/",icon:r.createElement(o.gQ,null)}),r.createElement(i.w,{title:"UI Kit",description:"HTML Web Components",to:"/ui-kit/",icon:r.createElement(o.ug,null)}),r.createElement(i.w,{title:"Angular UI Kit",description:"Add UI Kit to your Angular App",to:"/angular-ui-kit/",icon:r.createElement(o.QI,null)}))),r.createElement(i._,{title:"\ud83d\udcf1 Mobile SDKs",id:"mobile-sdks"},r.createElement(i.w,{title:"React Native",description:"Integrate Dyte in your React Native App",to:"/react-native/",icon:r.createElement(o.gQ,null)}),r.createElement(i.w,{title:"Android",description:"Integrate Dyte in your Android App (Kotlin)",to:"/android/",icon:r.createElement(o.O,null)}),r.createElement(i.w,{title:"iOS",description:"Integrate Dyte in your iOS App (Swift)",to:"/ios/",icon:r.createElement(o.OH,null)}),r.createElement(i.w,{title:"Flutter",description:"Integrate Dyte in your Flutter App",to:"/flutter/",icon:r.createElement(o.J$,null)})),r.createElement(i._,{title:"\ud83d\udee0 Tools"},r.createElement(i.w,{title:"Dyte CLI",description:"A command line tool to get things done quick!",to:"/cli/",icon:r.createElement(o.Fx,null)})),r.createElement(i._,{title:"\ud83d\udcdc API Reference"},r.createElement(i.w,{title:"API Reference",description:"Dyte REST API Reference",to:"/api/",icon:r.createElement(o.mH,null)})),r.createElement(c.Z,{title:"\ud83d\udcd6 Advanced Guides"}))))}},70655:(e,t,n)=>{n.r(t),n.d(t,{__assign:()=>l,__asyncDelegator:()=>b,__asyncGenerator:()=>E,__asyncValues:()=>_,__await:()=>y,__awaiter:()=>u,__classPrivateFieldGet:()=>S,__classPrivateFieldIn:()=>A,__classPrivateFieldSet:()=>P,__createBinding:()=>d,__decorate:()=>o,__exportStar:()=>m,__extends:()=>a,__generator:()=>f,__importDefault:()=>O,__importStar:()=>M,__makeTemplateObject:()=>z,__metadata:()=>s,__param:()=>c,__read:()=>h,__rest:()=>i,__spread:()=>v,__spreadArray:()=>g,__spreadArrays:()=>w,__values:()=>p});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function o(e,t,n,r){var a,l=arguments.length,i=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(i=(l<3?a(i):l>3?a(t,n,i):a(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i}function c(e,t){return function(n,r){t(n,r,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,n,r){return new(n||(n=Promise))((function(a,l){function i(e){try{c(r.next(e))}catch(t){l(t)}}function o(e){try{c(r.throw(e))}catch(t){l(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}c((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,a,l,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(l){return function(o){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(o){l=[6,o],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function m(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function h(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,l=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(o){a={error:o}}finally{try{r&&!r.done&&(n=l.return)&&n.call(l)}finally{if(a)throw a.error}}return i}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]));return e}function w(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var l=arguments[t],i=0,o=l.length;i<o;i++,a++)r[a]=l[i];return r}function g(e,t,n){if(n||2===arguments.length)for(var r,a=0,l=t.length;a<l;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function E(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,a=n.apply(e,t||[]),l=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){a[e]&&(r[e]=function(t){return new Promise((function(n,r){l.push([e,t,n,r])>1||o(e,t)}))})}function o(e,t){try{(n=a[e](t)).value instanceof y?Promise.resolve(n.value.v).then(c,s):u(l[0][2],n)}catch(r){u(l[0][3],r)}var n}function c(e){o("next",e)}function s(e){o("throw",e)}function u(e,t){e(t),l.shift(),l.length&&o(l[0][0],l[0][1])}}function b(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,a){t[r]=e[r]?function(t){return(n=!n)?{value:y(e[r](t)),done:"return"===r}:a?a(t):t}:a}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,a){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,a,(t=e[n](t)).done,t.value)}))}}}function z(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var x=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function M(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return x(t,e),t}function O(e){return e&&e.__esModule?e:{default:e}}function S(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function P(e,t,n,r,a){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!a)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?a.call(e,n):a?a.value=n:t.set(e,n),n}function A(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}}}]);