"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[4601],{31:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const s={sidebar_position:1},o="Atomic Design",l={unversionedId:"basics/atomic-design",id:"basics/atomic-design",title:"Atomic Design",description:"Inspired by Atomic Design pricinciples, our UI Kit is built in layers.",source:"@site/docs/react-ui-kit/basics/atomic-design.mdx",sourceDirName:"basics",slug:"/basics/atomic-design",permalink:"/react-ui-kit/basics/atomic-design",draft:!1,editUrl:"https://github.com/OpenIMSDK/OpenIM-Docs/tree/main/docs/docs/react-ui-kit/basics/atomic-design.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/react-ui-kit/quickstart"},next:{title:"Components Basics",permalink:"/react-ui-kit/basics/components-basics"}},r={},c=[{value:"Pages",id:"pages",level:2},{value:"Atoms",id:"atoms",level:2},{value:"Molecules",id:"molecules",level:2},{value:"Organisms",id:"organisms",level:2},{value:"Tight integration with our Core SDK",id:"tight-integration-with-our-core-sdk",level:3}],u={toc:c};function p(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"atomic-design"},"Atomic Design"),(0,a.kt)("p",null,"Inspired by Atomic Design pricinciples, our UI Kit is built in layers."),(0,a.kt)("p",null,"What that means is you can quickly get started by using just one component and keep combining even more components that will give you an entire prebuilt UI."),(0,a.kt)("p",null,"But you can also go down layers as your need for customization evolves."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Atomic Design Illustration",src:n(11190).Z,width:"900",height:"270"})),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"../components/"},"Components")," page to see the full list of grouped components."),(0,a.kt)("h2",{id:"pages"},"Pages"),(0,a.kt)("p",null,"Our topmost, easiest to use layer."),(0,a.kt)("p",null,"An example is the ",(0,a.kt)("inlineCode",{parentName:"p"},"DyteMeeting")," component you saw in the ",(0,a.kt)("a",{parentName:"p",href:"/react-ui-kit/"},"Quickstart")," page."),(0,a.kt)("p",null,"Implement quickly with just a few lines of code!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example() {\n  const { meeting } = useDyteMeeting();\n\n  return (\n    <div style={{ height: '400px' }}>\n      <DyteMeeting meeting={meeting} mode=\"fill\" />\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,"Now going down layers for more customization."),(0,a.kt)("h2",{id:"atoms"},"Atoms"),(0,a.kt)("p",null,"Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input, image or a button."),(0,a.kt)("p",null,"Design tokens such as brand colors, font, spacing are also part of atoms."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>\n  <DyteButton>Primary Button (Default)</DyteButton>\n  <DyteButton variant=\"secondary\">Secondary button</DyteButton>\n  <DyteButton variant=\"danger\">Danger button</DyteButton>\n  <DyteButton variant=\"ghost\">Ghost button</DyteButton>\n</div>\n")),(0,a.kt)("h2",{id:"molecules"},"Molecules"),(0,a.kt)("p",null,"Things start getting more interesting and tangible when we start combining atoms together."),(0,a.kt)("p",null,"Here is the Notification component which uses the Button component and animates a notification for you!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example() {\n  return (\n    <div>\n      <DyteNotification\n        notification={{\n          id: 'any-identifier-for-this-notification',\n          message: 'Vaibhav says Hi!',\n          image: 'https://github.com/vaibhavshn.png',\n          button: {\n            text: 'Say Hi Back',\n            variant: 'secondary',\n            onClick: () => alert('Hey!'),\n          },\n        }}\n      />\n    </div>\n  );\n}\n")),(0,a.kt)("h2",{id:"organisms"},"Organisms"),(0,a.kt)("p",null,"Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface."),(0,a.kt)("p",null,"Render a participants grid, in a single line of code with ",(0,a.kt)("inlineCode",{parentName:"p"},"DyteGrid"),"."),(0,a.kt)("p",null,"This component will handle all Participant Tiles, Screenshare Views, Plugins."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example() {\n  const { meeting } = useDyteMeeting();\n\n  return (\n    <div style={{ height: '480px' }}>\n      <DyteGrid meeting={meeting} size=\"sm\" />\n    </div>\n  );\n}\n")),(0,a.kt)("h3",{id:"tight-integration-with-our-core-sdk"},"Tight integration with our Core SDK"),(0,a.kt)("p",null,"You don't need to handle all the participants, screenshares, plugins. You just pass the Core SDK ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting")," object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<DyteGrid meeting={meeting} />\n")),(0,a.kt)("p",null,"It takes all the data on its own, listens to all the events and calls every method it needs to call on its own."))}p.isMDXComponent=!0},11190:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/atomic-design-deb8eea954f92834ff05d474443c889b.svg"}}]);