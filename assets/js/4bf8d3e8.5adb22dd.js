"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[27015],{55233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={description:"We love contributions to Airbyte, big or small."},i="Contributing to Airbyte",l={unversionedId:"contributing-to-airbyte/README",id:"contributing-to-airbyte/README",title:"Contributing to Airbyte",description:"We love contributions to Airbyte, big or small.",source:"@site/../docs/contributing-to-airbyte/README.md",sourceDirName:"contributing-to-airbyte",slug:"/contributing-to-airbyte/",permalink:"/contributing-to-airbyte/",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/contributing-to-airbyte/README.md",tags:[],version:"current",frontMatter:{description:"We love contributions to Airbyte, big or small."},sidebar:"mySidebar",previous:{title:"Airbyte Databases Data Catalog",permalink:"/understanding-airbyte/database-data-catalog"},next:{title:"Code of Conduct",permalink:"/contributing-to-airbyte/code-of-conduct"}},s={},u=[{value:"Code of conduct",id:"code-of-conduct",level:2},{value:"Airbyte specification",id:"airbyte-specification",level:2},{value:"First-time contributors, welcome!",id:"first-time-contributors-welcome",level:2},{value:"Contributing to the codebase",id:"contributing-to-the-codebase",level:2},{value:"Steps to contributing code",id:"steps-to-contributing-code",level:3},{value:"1. Open an issue, or find a similar one.",id:"1-open-an-issue-or-find-a-similar-one",level:4},{value:"2. Code your contribution",id:"2-code-your-contribution",level:4},{value:"3. Open a pull request",id:"3-open-a-pull-request",level:4},{value:"4. Review process",id:"4-review-process",level:4},{value:"New connectors",id:"new-connectors",level:3},{value:"Semantic versioning for connectors",id:"semantic-versioning-for-connectors",level:3},{value:"Examples",id:"examples",level:4},{value:"Airbyte CI workflows",id:"airbyte-ci-workflows",level:3},{value:"Contributing to documentation",id:"contributing-to-documentation",level:2},{value:"Contributing community content",id:"contributing-community-content",level:2},{value:"Other ways to contribute",id:"other-ways-to-contribute",level:2},{value:"Upvoting issues, feature and connector requests",id:"upvoting-issues-feature-and-connector-requests",level:3},{value:"Requesting new features",id:"requesting-new-features",level:3},{value:"Requesting new connectors",id:"requesting-new-connectors",level:3},{value:"Reporting bugs",id:"reporting-bugs",level:3},{value:"Reporting security issues",id:"reporting-security-issues",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributing-to-airbyte"},"Contributing to Airbyte"),(0,o.kt)("p",null,"Thank you for your interest in contributing! We love community contributions. Contribution guidelines are listed below. If you're unsure about how to start contributing or have any questions even after reading them, feel free to ask us on ",(0,o.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack")," in the ","#","dev or ","#","general channel."),(0,o.kt)("p",null,"However, for those who want a bit more guidance on the best way to contribute to Airbyte, read on. This document will cover what we're looking for. By addressing the points below, the chances that we can quickly merge or address your contributions will increase."),(0,o.kt)("h2",{id:"code-of-conduct"},"Code of conduct"),(0,o.kt)("p",null,"Please follow our ",(0,o.kt)("a",{parentName:"p",href:"/contributing-to-airbyte/code-of-conduct"},"Code of conduct")," in the context of any contributions made to Airbyte."),(0,o.kt)("h2",{id:"airbyte-specification"},"Airbyte specification"),(0,o.kt)("p",null,"Before you can start contributing, you need to understand ",(0,o.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-protocol"},"Airbyte's data protocol specification"),"."),(0,o.kt)("h2",{id:"first-time-contributors-welcome"},"First-time contributors, welcome!"),(0,o.kt)("p",null,"We appreciate first time contributors and we are happy to assist you in getting started. In case of questions, just reach out to us via ",(0,o.kt)("a",{parentName:"p",href:"mailto:hey@airbyte.io"},"email")," or ",(0,o.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),"!"),(0,o.kt)("p",null,"Here is a list of easy ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/labels/good%20first%20issue"},"good first issues")," to do."),(0,o.kt)("h2",{id:"contributing-to-the-codebase"},"Contributing to the codebase"),(0,o.kt)("p",null,"We gladly welcome all improvements to the codebase."),(0,o.kt)("h3",{id:"steps-to-contributing-code"},"Steps to contributing code"),(0,o.kt)("h4",{id:"1-open-an-issue-or-find-a-similar-one"},"1. Open an issue, or find a similar one."),(0,o.kt)("p",null,"Before jumping into the code please first:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Verify if an existing ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/issues"},"connector")," or ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte-platform/issues"},"platform")," GitHub issue matches your contribution project."),(0,o.kt)("li",{parentName:"ol"},"If you don't find an existing issue, create a new ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"connector")," or ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte-platform/issues/new/choose"},"platform")," issue to explain what you want to achieve."),(0,o.kt)("li",{parentName:"ol"},"Assign the issue to yourself and add a comment to tell that you want to work on this.")),(0,o.kt)("p",null,"This will enable our team to make sure your contribution does not overlap with existing works and will comply with the design orientation we are currently heading the product toward.\nIf you do not receive an update on the issue from our team, please ping us on ",(0,o.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),"!"),(0,o.kt)("h4",{id:"2-code-your-contribution"},"2. Code your contribution"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To contribute to a connector, fork the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte"},"Connector repository"),". To contribute to the Airbyte platform, fork our ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte-platform"},"Platform repository"),".  "),(0,o.kt)("li",{parentName:"ol"},"If contributing a new connector, check out our ",(0,o.kt)("a",{parentName:"li",href:"#new-connectors"},"new connectors guide"),"."),(0,o.kt)("li",{parentName:"ol"},"Open a branch for your work."),(0,o.kt)("li",{parentName:"ol"},"Code, and please write ",(0,o.kt)("strong",{parentName:"li"},"tests"),"."),(0,o.kt)("li",{parentName:"ol"},"Ensure all tests pass. For connectors, this includes acceptance tests as well. "),(0,o.kt)("li",{parentName:"ol"},"For connectors, make sure to increment the connector's version according to our ",(0,o.kt)("a",{parentName:"li",href:"#semantic-versioning-for-connectors"},"Semantic Versioning")," guidelines.")),(0,o.kt)("h4",{id:"3-open-a-pull-request"},"3. Open a pull request"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Rebase master with your branch before submitting a pull request."),(0,o.kt)("li",{parentName:"ol"},"Open the pull request."),(0,o.kt)("li",{parentName:"ol"},"Wait for a review from a community maintainer or our team.")),(0,o.kt)("h4",{id:"4-review-process"},"4. Review process"),(0,o.kt)("p",null,"When we review, we look at:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u200cDoes the PR solve the issue?"),(0,o.kt)("li",{parentName:"ul"},"Is the proposed solution reasonable?"),(0,o.kt)("li",{parentName:"ul"},"Is it tested? ","(","unit tests or integration tests",")"),(0,o.kt)("li",{parentName:"ul"},"Is it introducing security risks?\n\u200cOnce your PR passes, we will merge it \ud83c\udf89.")),(0,o.kt)("h3",{id:"new-connectors"},"New connectors"),(0,o.kt)("p",null,"It's easy to add your own connector to Airbyte! ",(0,o.kt)("strong",{parentName:"p"},"Since Airbyte connectors are encapsulated within Docker containers, you can use any language you like.")," Here are some links on how to add sources and destinations. We haven't built the documentation for all languages yet, so don't hesitate to reach out to us if you'd like help developing connectors in other languages."),(0,o.kt)("p",null,"For sources, simply head over to our ",(0,o.kt)("a",{parentName:"p",href:"../connector-development/cdk-python/"},"Python CDK"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The CDK currently does not support creating destinations, but it will very soon.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("a",{parentName:"li",href:"../connector-development/"},"Building new connectors")," to get started."),(0,o.kt)("li",{parentName:"ul"},"Since we frequently build connectors in Python, on top of Singer or in Java, we've created generator libraries to get you started quickly: ",(0,o.kt)("a",{parentName:"li",href:"/connector-development/tutorials/building-a-python-source"},"Build Python Source Connectors")," and ",(0,o.kt)("a",{parentName:"li",href:"/connector-development/tutorials/building-a-java-destination"},"Build Java Destination Connectors")),(0,o.kt)("li",{parentName:"ul"},"Integration tests ","(","tests that run a connector's image against an external resource",")"," can be run one of three ways, as detailed ",(0,o.kt)("a",{parentName:"li",href:"/connector-development/testing-connectors/connector-acceptance-tests-reference"},"here"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please note that, at no point in time, we will ask you to maintain your connector.")," The goal is that the Airbyte team and the community helps maintain the connector."),(0,o.kt)("h3",{id:"semantic-versioning-for-connectors"},"Semantic versioning for connectors"),(0,o.kt)("p",null,"Changes to connector behavior should always be accompanied by a version bump and a changelog entry. We use ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning")," to version changes to connectors. Since connectors are a bit different from APIs, we have our own take on semantic versioning, focusing on maintaining the best user experience of using a connector."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Major: a version in which a change is made which requires manual intervention (update to config or configured catalog) for an existing connection to continue to succeed, or one in which data that was previously being synced will no longer be synced"),(0,o.kt)("li",{parentName:"ul"},"Minor: a version that introduces user-facing functionality in a backwards compatible manner"),(0,o.kt)("li",{parentName:"ul"},"Patch: a version that introduces backwards compatible bug fixes or performance improvements")),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Here are some examples of code changes and their respective version changes:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Change"),(0,o.kt)("th",{parentName:"tr",align:null},"Impact"),(0,o.kt)("th",{parentName:"tr",align:null},"Version Change"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Adding a required parameter to a connector's ",(0,o.kt)("inlineCode",{parentName:"td"},"spec")),(0,o.kt)("td",{parentName:"tr",align:null},"Users will have to add the new parameter to their ",(0,o.kt)("inlineCode",{parentName:"td"},"config")),(0,o.kt)("td",{parentName:"tr",align:null},"Major")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Changing a format of a parameter in a connector's ",(0,o.kt)("inlineCode",{parentName:"td"},"spec")," from a single parameter to a ",(0,o.kt)("inlineCode",{parentName:"td"},"oneOf")),(0,o.kt)("td",{parentName:"tr",align:null},"Users will have to edit their ",(0,o.kt)("inlineCode",{parentName:"td"},"config")," to define their old parameter value in the ",(0,o.kt)("inlineCode",{parentName:"td"},"oneOf")," format"),(0,o.kt)("td",{parentName:"tr",align:null},"Major")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Removing a stream from a connector's ",(0,o.kt)("inlineCode",{parentName:"td"},"catalog")),(0,o.kt)("td",{parentName:"tr",align:null},"Data that was being synced will no longer be synced"),(0,o.kt)("td",{parentName:"tr",align:null},"Major")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Renaming a stream in a connector's ",(0,o.kt)("inlineCode",{parentName:"td"},"catalog")),(0,o.kt)("td",{parentName:"tr",align:null},"Users will have to update the name of the stream in their ",(0,o.kt)("inlineCode",{parentName:"td"},"catalog")),(0,o.kt)("td",{parentName:"tr",align:null},"Major")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Removing a column from a stream in a connector's ",(0,o.kt)("inlineCode",{parentName:"td"},"catalog")),(0,o.kt)("td",{parentName:"tr",align:null},"Users will have to remove that column from their ",(0,o.kt)("inlineCode",{parentName:"td"},"catalog"),", data that was being synced will no longer be synced"),(0,o.kt)("td",{parentName:"tr",align:null},"Major")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Renaming a column from a stream in a connector's ",(0,o.kt)("inlineCode",{parentName:"td"},"catalog")),(0,o.kt)("td",{parentName:"tr",align:null},"Users will have to update the name of the column in their ",(0,o.kt)("inlineCode",{parentName:"td"},"catalog")),(0,o.kt)("td",{parentName:"tr",align:null},"Major")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Changing the datatype for a column of a stream in a connector's ",(0,o.kt)("inlineCode",{parentName:"td"},"catalog")),(0,o.kt)("td",{parentName:"tr",align:null},"Users will have to update that data type in their ",(0,o.kt)("inlineCode",{parentName:"td"},"catalog"),", data that was being synced will have changed format"),(0,o.kt)("td",{parentName:"tr",align:null},"Major")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Adding a non-required parameter to a connector's ",(0,o.kt)("inlineCode",{parentName:"td"},"spec")),(0,o.kt)("td",{parentName:"tr",align:null},"Users will have the option to use the required parameter in the future"),(0,o.kt)("td",{parentName:"tr",align:null},"Minor")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Adding a stream in a connector's ",(0,o.kt)("inlineCode",{parentName:"td"},"catalog")),(0,o.kt)("td",{parentName:"tr",align:null},"Additional data will be synced"),(0,o.kt)("td",{parentName:"tr",align:null},"Minor")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Adding a column to a stream's schema in a connector's ",(0,o.kt)("inlineCode",{parentName:"td"},"catalog")),(0,o.kt)("td",{parentName:"tr",align:null},"Additional data will be synced"),(0,o.kt)("td",{parentName:"tr",align:null},"Minor")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Updating the format of the connector's ",(0,o.kt)("inlineCode",{parentName:"td"},"STATE")),(0,o.kt)("td",{parentName:"tr",align:null},"Incremental streams will automatically run a full refresh only for the next sync"),(0,o.kt)("td",{parentName:"tr",align:null},"Patch")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Optimizing a connector's performance"),(0,o.kt)("td",{parentName:"tr",align:null},"Syncs will be faster"),(0,o.kt)("td",{parentName:"tr",align:null},"Patch")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Fixing a bug in a connector"),(0,o.kt)("td",{parentName:"tr",align:null},"Some syncs that would have failed will now succeed"),(0,o.kt)("td",{parentName:"tr",align:null},"Patch")))),(0,o.kt)("p",null,"Trying to contribute, and don't see the change you want to make in this list? Call it out in your PR and your reviewer will help you pick the correct type of version change. Feel free to contribute the results back to this list!"),(0,o.kt)("h3",{id:"airbyte-ci-workflows"},"Airbyte CI workflows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/contributing-to-airbyte/sonar-qube-workflow"},"Testing by SonarQube"))),(0,o.kt)("h2",{id:"contributing-to-documentation"},"Contributing to documentation"),(0,o.kt)("p",null,"Our goal is to keep our docs comprehensive and updated. If you would like to help us in doing so, we are grateful for any kind of contribution:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Report missing content"),(0,o.kt)("li",{parentName:"ul"},"Fix errors in existing docs"),(0,o.kt)("li",{parentName:"ul"},"Help us in adding to the docs")),(0,o.kt)("p",null,"The contributing guide for docs can be found ",(0,o.kt)("a",{parentName:"p",href:"/contributing-to-airbyte/updating-documentation"},"here"),"."),(0,o.kt)("h2",{id:"contributing-community-content"},"Contributing community content"),(0,o.kt)("p",null,"We welcome contributions as new tutorials / showcases / articles, or to any of the existing guides on our ",(0,o.kt)("a",{parentName:"p",href:"https://airbyte.com/tutorials"},"tutorials page"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix errors in existing tutorials"),(0,o.kt)("li",{parentName:"ul"},"Add new tutorials ","(","please reach out to us if you have ideas to avoid duplicate work",")"),(0,o.kt)("li",{parentName:"ul"},"Request tutorials")),(0,o.kt)("p",null,"We have a repo dedicated to community content. Everything is documented ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/community-content/"},"there"),"."),(0,o.kt)("p",null,"Feel free to submit a pull request in this repo, if you have something to add even if it's not related to anything mentioned above."),(0,o.kt)("h2",{id:"other-ways-to-contribute"},"Other ways to contribute"),(0,o.kt)("h3",{id:"upvoting-issues-feature-and-connector-requests"},"Upvoting issues, feature and connector requests"),(0,o.kt)("p",null,"You are welcome to add your own reactions to the existing issues. We will take them in consideration in our prioritization efforts, especially for connectors."),(0,o.kt)("p",null,"\u2764\ufe0f means that this task is CRITICAL to you.",(0,o.kt)("br",{parentName:"p"}),"\n","\ud83d\udc4d means it is important to you."),(0,o.kt)("h3",{id:"requesting-new-features"},"Requesting new features"),(0,o.kt)("p",null,"To request new features, please create an issue on this project."),(0,o.kt)("p",null,'If you would like to suggest a new feature, we ask that you please use our issue template. It contains a few essential questions that help us understand the problem you are looking to solve and how you think your recommendation will address it. We also tag incoming issues from this template with the "',(0,o.kt)("strong",{parentName:"p"},"community","_","new"),'" label. This lets our teams quickly see what has been raised and better address the community recommendations.'),(0,o.kt)("p",null,"To see what has already been proposed by the community, you can look ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/labels/community"},"here"),"."),(0,o.kt)("p",null,"Watch out for duplicates! If you are creating a new platform issue, please check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte-platform/issues"},"open"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte-platform/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aclosed%20"},"recently closed"),". "),(0,o.kt)("h3",{id:"requesting-new-connectors"},"Requesting new connectors"),(0,o.kt)("p",null,"This is very similar to requesting new features. The template will change a bit and all connector requests will be tagged with the \u201c",(0,o.kt)("strong",{parentName:"p"},"community"),"\u201d and \u201c",(0,o.kt)("strong",{parentName:"p"},"area/connectors"),"\u201d labels."),(0,o.kt)("p",null,"To see what has already been proposed by the community, you can look ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/labels/area%2Fconnectors"},"here"),". Again, watch out for duplicates!"),(0,o.kt)("h3",{id:"reporting-bugs"},"Reporting bugs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u200c"),"Bug reports help us make Airbyte better for everyone. We provide a preconfigured template for bugs to make it very clear what information we need."),(0,o.kt)("p",null,"\u200cPlease search within our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues?q=is%3Aissue+is%3Aopen+label%3Atype%2Fbug"},"already reported bugs")," before raising a new one to make sure you're not raising a duplicate."),(0,o.kt)("h3",{id:"reporting-security-issues"},"Reporting security issues"),(0,o.kt)("p",null,"Please do not create a public GitHub issue. If you've found a security issue, please email us directly at ",(0,o.kt)("a",{parentName:"p",href:"mailto:security@airbyte.io"},"security@airbyte.io")," instead of raising an issue."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);