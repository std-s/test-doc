"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[5030],{36977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:1},o="Components Basics",p={unversionedId:"basics/components-basics",id:"basics/components-basics",title:"Components Basics",description:"Learn about the structure of an individual component and figure out how to use the UI Kit effectively.",source:"@site/docs/react-ui-kit/basics/components-basics.mdx",sourceDirName:"basics",slug:"/basics/components-basics",permalink:"/react-ui-kit/basics/components-basics",draft:!1,editUrl:"https://github.com/OpenIMSDK/OpenIM-Docs/tree/main/docs/docs/react-ui-kit/basics/components-basics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Atomic Design",permalink:"/react-ui-kit/basics/atomic-design"},next:{title:"Design System",permalink:"/react-ui-kit/basics/design-system"}},s={},l=[{value:"Usage Guide",id:"usage-guide",level:2},{value:"Write less code",id:"write-less-code",level:3},{value:"Using individual components",id:"using-individual-components",level:3},{value:"Default Props",id:"default-props",level:2},{value:"Component Specific Props",id:"component-specific-props",level:2},{value:"Button variants",id:"button-variants",level:3},{value:"Participant components",id:"participant-components",level:3},{value:"Grid Components",id:"grid-components",level:3},{value:"Parent Grid Component",id:"parent-grid-component",level:4},{value:"Normal Grid Components",id:"normal-grid-components",level:4},{value:"DyteSimpleGrid",id:"dytesimplegrid",level:5},{value:"DyteSimpleGrid",id:"dytesimplegrid-1",level:5},{value:"DyteMixedGrid",id:"dytemixedgrid",level:5},{value:"Example for SimpleGrid",id:"example-for-simplegrid",level:5}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"components-basics"},"Components Basics"),(0,a.kt)("p",null,"Learn about the structure of an individual component and figure out how to use the UI Kit effectively."),(0,a.kt)("h2",{id:"usage-guide"},"Usage Guide"),(0,a.kt)("p",null,"With the UI Kit, we provide a few set of ways to use it, depending on your needs and use case."),(0,a.kt)("h3",{id:"write-less-code"},"Write less code"),(0,a.kt)("p",null,"You can use the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"<DyteMeeting />")," monolith component in case you want to write less code and not handle all the states and components rendering."),(0,a.kt)("p",null,"DyteMeeting takes care of all of it and loads the entire meeting UI from your preset."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function MyMeeting() {\n  const { meeting } = useDyteMeeting();\n\n  return (\n    <div style={{ height: '480px' }}>\n      <DyteMeeting mode=\"fill\" meeting={meeting} />\n    </div>\n  );\n}\n")),(0,a.kt)("h3",{id:"using-individual-components"},"Using individual components"),(0,a.kt)("p",null,"If you wish to integrate UI Kit components into your UI at various parts, you can use the individual components."),(0,a.kt)("p",null,"Here is a basic example with the help of hooks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function MyMeeting() {\n  const roomJoined = useDyteSelector((meeting) => meeting.self.roomJoined);\n  const activeParticipants = useDyteSelector((meeting) => meeting.participants.active);\n\n  if (!roomJoined) return null;\n\n  return (\n    <div\n      style={{\n        display: 'flex',\n        flexWrap: 'wrap',\n        placeItems: 'center',\n        justifyContent: 'center',\n        gap: '12px',\n      }}\n    >\n      {activeParticipants.toArray().map((participant) => (\n        <DyteParticipantTile participant={participant} key={participant.id}>\n          <DyteAvatar participant={participant} />\n          <DyteNameTag participant={participant}>\n            <DyteAudioVisualizer participant={participant} slot=\"start\" />\n          </DyteNameTag>\n        </DyteParticipantTile>\n      ))}\n    </div>\n  );\n}\n")),(0,a.kt)("h2",{id:"default-props"},"Default Props"),(0,a.kt)("p",null,"Most of the components accept a set of a ",(0,a.kt)("strong",{parentName:"p"},"Default Props")," for essential features such as meeting data, meeting APIs, UI Configuration, internationalisation & icons."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Prop"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"meeting")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The web-core ",(0,a.kt)("inlineCode",{parentName:"td"},"DyteClient")," object. Contains all the meeting specific data & APIs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"config")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The ",(0,a.kt)("a",{parentName:"td",href:"../reference/interfaces/UIConfig"},(0,a.kt)("inlineCode",{parentName:"a"},"UI Config"))," config")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"t")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../reference/#dytei18n"},"i18n helper")," method")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"iconPack")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../reference/#iconpack"},(0,a.kt)("inlineCode",{parentName:"a"},"IconPack"))," object")))),(0,a.kt)("p",null,"Here is a simple example of how you pass these props to components, here a ",(0,a.kt)("inlineCode",{parentName:"p"},"DyteGrid"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  // load your data\n\n  return <DyteGrid meeting={meeting} config={config} t={t} iconPack={iconPack} />;\n}\n")),(0,a.kt)("h2",{id:"component-specific-props"},"Component Specific Props"),(0,a.kt)("p",null,"Each component also has a set of props specifically."),(0,a.kt)("p",null,"Here are some examples:"),(0,a.kt)("h3",{id:"button-variants"},"Button variants"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>\n  <DyteButton>Primary button</DyteButton>\n  <DyteButton variant=\"secondary\">Secondary button</DyteButton>\n  <DyteButton variant=\"danger\">Danger button</DyteButton>\n  <DyteButton variant=\"ghost\">Ghost button</DyteButton>\n</div>\n")),(0,a.kt)("h3",{id:"participant-components"},"Participant components"),(0,a.kt)("p",null,"These are components which depend on a single participant object or a participant list."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"meeting.self")," and participant objects from ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.participants")," can be passed as a participant to this prop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example() {\n  const { meeting } = useDyteMeeting();\n\n  if (!meeting) return null;\n\n  return (\n    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>\n      <DyteNameTag participant={meeting.self} />\n      {/* You should also pass the `meeting` object to see the `(you)` text */}\n      <DyteNameTag participant={meeting.self} meeting={meeting} />\n    </div>\n  );\n}\n")),(0,a.kt)("h3",{id:"grid-components"},"Grid Components"),(0,a.kt)("p",null,"We have a set of grid components that help you to have any kind of grid you wish."),(0,a.kt)("p",null,"There are two types of grid components, so that the grid can be easily extended and modularized."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Parent Grid component - ",(0,a.kt)("inlineCode",{parentName:"li"},"DyteGrid")),(0,a.kt)("li",{parentName:"ul"},"Normal Grid components - ",(0,a.kt)("inlineCode",{parentName:"li"},"DyteSimpleGrid"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"DyteMixedGrid"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"DyteSpotlightGrid"))),(0,a.kt)("h4",{id:"parent-grid-component"},"Parent Grid Component"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DyteGrid")," component is a monolith component which handles all grid related events and data on it's own and passes the following props to it's children."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Prop"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"participants[]")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Active Participants")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"pinnedParticipants[]")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Pinned Participants")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"screenShareParticipants[]")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Participants who are screen sharing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"plugins[]")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Active Plugins")))),(0,a.kt)("p",null,"These props are passed to it's children which it computes from the UI Config which is passed to it. By default it will use the default UI Config."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Try editing the ",(0,a.kt)("inlineCode",{parentName:"p"},"aspectRatio")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"gap")," props.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function Example() {\n  const { meeting } = useDyteMeeting();\n\n  return (\n    <div style={{ width: \'100%\', height: \'400px\' }}>\n      <DyteGrid meeting={meeting} aspectRatio="16:9" gap="8" size="sm" />\n    </div>\n  );\n}\n')),(0,a.kt)("h4",{id:"normal-grid-components"},"Normal Grid Components"),(0,a.kt)("p",null,"These components just accept the props mentioned above and render the UI."),(0,a.kt)("p",null,"Read more about them in their Reference pages."),(0,a.kt)("h5",{id:"dytesimplegrid"},"DyteSimpleGrid"),(0,a.kt)("p",null,"Accepts: ",(0,a.kt)("inlineCode",{parentName:"p"},"participants"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pinnedParticipants"),"."),(0,a.kt)("p",null,"This grid renders just the ParticipantTiles of the participants you pass to it.\nIt also brings ",(0,a.kt)("inlineCode",{parentName:"p"},"pinnedParticipants")," to the start of the grid."),(0,a.kt)("h5",{id:"dytesimplegrid-1"},"DyteSimpleGrid"),(0,a.kt)("p",null,"Accepts: ",(0,a.kt)("inlineCode",{parentName:"p"},"participants"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pinnedParticipants"),"."),(0,a.kt)("p",null,"This grid renders the ParticipantTiles of the participants and pinnedParticipants in separate grids."),(0,a.kt)("p",null,"Pinned participants are in spotlight area, i.e; larger grid."),(0,a.kt)("h5",{id:"dytemixedgrid"},"DyteMixedGrid"),(0,a.kt)("p",null,"Accepts: ",(0,a.kt)("inlineCode",{parentName:"p"},"participants"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pinnedParticipants"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"screenShareParticipants"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins"),"."),(0,a.kt)("p",null,"This grid renders screenshares as well as plugins in the main larger view and renders a smaller grid on the right side which is configurable via the UI Config. You can use SimleGrid or SpotlightGrid here."),(0,a.kt)("p",null,"If you just want to render ",(0,a.kt)("inlineCode",{parentName:"p"},"self")," twice in a SimpleGrid:"),(0,a.kt)("h5",{id:"example-for-simplegrid"},"Example for SimpleGrid"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example() {\n  const { meeting } = useDyteMeeting();\n  const [count, setCount] = useState(2);\n\n  if (!meeting) return null;\n\n  const add = () => setCount((count) => count + 1);\n  const remove = () => count > 1 && setCount((count) => count - 1);\n\n  const participants = new Array(count).fill(meeting.self);\n\n  return (\n    <div>\n      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>\n        <DyteButton onClick={add}>Add</DyteButton>\n        <DyteButton variant=\"danger\" onClick={remove}>\n          Remove\n        </DyteButton>\n      </div>\n      <div style={{ width: '100%', height: '400px' }}>\n        <DyteSimpleGrid aspectRatio=\"16:9\" gap=\"8\" participants={participants} />\n      </div>\n    </div>\n  );\n}\n")))}c.isMDXComponent=!0}}]);