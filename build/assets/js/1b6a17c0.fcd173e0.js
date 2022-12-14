"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[9497],{4897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));const s={},r="Livestreaming any RTMP input using Dyte",l={unversionedId:"livestreaming-any-rtmp-streams",id:"livestreaming-any-rtmp-streams",title:"Livestreaming any RTMP input using Dyte",description:"Dyte can livestream any service that can accept an RTMP input (Zoom, YouTube etc.) in few simple steps.",source:"@site/docs/guides/livestreaming-any-rtmp-streams.mdx",sourceDirName:".",slug:"/livestreaming-any-rtmp-streams",permalink:"/guides/livestreaming-any-rtmp-streams",draft:!1,editUrl:"https://github.com/OpenIMSDK/OpenIM-Docs/tree/main/docs/docs/guides/livestreaming-any-rtmp-streams.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Integrating with Webhooks",permalink:"/guides/integrating-with-webhooks"},next:{title:"Livestreaming API Integration Guide",permalink:"/guides/livestreaming-api-integration"}},p={},m=[{value:"Create a live stream",id:"create-a-live-stream",level:2},{value:"Get a livestream instance information",id:"get-a-livestream-instance-information",level:2}],o={toc:m};function u(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"livestreaming-any-rtmp-input-using-dyte"},"Livestreaming any RTMP input using Dyte"),(0,i.kt)("p",null,"Dyte can livestream any service that can accept an RTMP input (Zoom, YouTube etc.) in few simple steps."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a live stream using the API call"),(0,i.kt)("li",{parentName:"ol"},"Add the RTMP input received from the response into your service.")),(0,i.kt)("h2",{id:"create-a-live-stream"},"Create a live stream"),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'https://api.dyte.in/v2/livestreams' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic ORGID:APIKEY' \\\n--data-raw '{\n    \"name\": \"some name\"\n}'\n")),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "data": {\n    "id": "STREAMID",\n    "title": "STREAMNAME",\n    "input_rtmp_url": "rtmp://URL/LiveApp/STREAMID?token=TOKENID",\n    "token_id": "TOKENID",\n    "stream_key": "STREAMID?token=TOKENID",\n    "player_url": "https://URL/LiveApp/play.html?name=STREAMID",\n    "status": "OFFLINE",\n    "hls_play_url": "https://URL/LiveApp/streams/STREAMID.m3u8"\n  }\n}\n')),(0,i.kt)("p",null,"From the response"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"data.input_rtmp_url")," can be used as an input to any other RTMP compatible app or API (such as OBS, Twitch, YouTube, etc)")),(0,i.kt)("p",null,"For example, for adding it to OBS:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"obs-example",src:n(74403).Z,width:"2186",height:"1732"}),"\n",(0,i.kt)("em",{parentName:"p"},"User is adding the input stream to OBS")),(0,i.kt)("h2",{id:"get-a-livestream-instance-information"},"Get a livestream instance information"),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://api.cluster.dyte.in/v2/livestreams/STREAMID' \\\n--header 'Authorization: Basic your-api-key'\n")),(0,i.kt)("p",null,"Respone:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "data": {\n    "id": "STREAMID",\n    "title": "STREAMNAME",\n    "input_rtmp_url": "rtmp://URL/LiveApp/STREAMID?token=TOKENID",\n    "token_id": "TOKENID",\n    "stream_key": "STREAMID?token=TOKENID",\n    "player_url": "https://URL/LiveApp/play.html?name=STREAMID",\n    "status": "OFFLINE",\n    "hls_play_url": "https://URL/LiveApp/streams/STREAMID.m3u8"\n  }\n}\n')))}u.isMDXComponent=!0},74403:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/obs-example-080392c3429cb6c16c6f64913a8826ab.png"}}]);