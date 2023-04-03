"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[42744],{29523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={},i="Manage syncs",l={unversionedId:"cloud/managing-airbyte-cloud/edit-stream-configuration",id:"cloud/managing-airbyte-cloud/edit-stream-configuration",title:"Manage syncs",description:"After you have created a connection, you can change how your data syncs to the destination by modifying the configuration settings and the stream settings.",source:"@site/../docs/cloud/managing-airbyte-cloud/edit-stream-configuration.md",sourceDirName:"cloud/managing-airbyte-cloud",slug:"/cloud/managing-airbyte-cloud/edit-stream-configuration",permalink:"/cloud/managing-airbyte-cloud/edit-stream-configuration",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/cloud/managing-airbyte-cloud/edit-stream-configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Using Airbyte Cloud",permalink:"/category/using-airbyte-cloud"},next:{title:"Manage schema changes",permalink:"/cloud/managing-airbyte-cloud/manage-schema-changes"}},s={},c=[{value:"Configure connection settings",id:"configure-connection-settings",level:2},{value:"Modify streams in your connection",id:"modify-streams-in-your-connection",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manage-syncs"},"Manage syncs"),(0,o.kt)("p",null,"After you have created a connection, you can change how your data syncs to the destination by modifying the ",(0,o.kt)("a",{parentName:"p",href:"#configure-connection-settings"},"configuration settings")," and the ",(0,o.kt)("a",{parentName:"p",href:"#modify-streams-in-your-connection"},"stream settings"),"."),(0,o.kt)("h2",{id:"configure-connection-settings"},"Configure connection settings"),(0,o.kt)("p",null,"Configuring the connection settings allows you to manage various aspects of the sync, such as how often data syncs and where data is written. "),(0,o.kt)("p",null,"To configure these settings:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("a",{parentName:"p",href:"http://cloud.airbyte.com"},"Airbyte Cloud")," dashboard, click ",(0,o.kt)("strong",{parentName:"p"},"Connections")," and then click the connection you want to change. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Replication")," tab.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Configuration")," dropdown."))),(0,o.kt)("p",null,"You can configure the following settings:"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"These settings apply to all streams in the connection.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Setting"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Replication frequency"),(0,o.kt)("td",{parentName:"tr",align:null},"How often the data syncs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Destination namespace"),(0,o.kt)("td",{parentName:"tr",align:null},"Where the replicated data is written")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Destination stream prefix"),(0,o.kt)("td",{parentName:"tr",align:null},"How you identify streams from different connectors")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://docs.airbyte.com/cloud/managing-airbyte-cloud/manage-schema-changes/#review-non-breaking-schema-changes"},"Non-breaking schema updates")," detected"),(0,o.kt)("td",{parentName:"tr",align:null},"How Airbyte handles syncs when it detects non-breaking schema changes in the source")))),(0,o.kt)("p",null,"To use ",(0,o.kt)("a",{parentName:"p",href:"http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html"},"cron scheduling"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Replication Frequency")," dropdown, click ",(0,o.kt)("strong",{parentName:"p"},"Cron"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a cron expression and choose a time zone to create a sync schedule."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Only one sync per connection can run at a time. "),(0,o.kt)("li",{parentName:"ul"},"If a sync is scheduled to run before the previous sync finishes, the scheduled sync will start after the completion of the previous sync."),(0,o.kt)("li",{parentName:"ul"},"Airbyte Cloud does not support schedules that sync more frequently than once per hour. "))),(0,o.kt)("h2",{id:"modify-streams-in-your-connection"},"Modify streams in your connection"),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"Activate the streams you want to sync")," table, you can choose which streams to sync and how they are loaded to the destination."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"A connection's schema consists of one or many streams. Each stream is most commonly associated with a database table or an API endpoint. Within a stream, there can be one or many fields or columns.")),(0,o.kt)("p",null,"To modify streams:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("a",{parentName:"p",href:"http://cloud.airbyte.com"},"Airbyte Cloud")," dashboard, click ",(0,o.kt)("strong",{parentName:"p"},"Connections")," and then click the connection you want to change. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Replication")," tab.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scroll down to the ",(0,o.kt)("strong",{parentName:"p"},"Activate the streams you want to sync")," table."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can modify a single stream, or you can modify multiple streams at once.")),(0,o.kt)("p",null,"Modify an individual stream:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/106352739/226917693-068256da-c948-4f22-bdce-49f5bad95bf6.gif",alt:"gif-single-edit-march-2023"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Activate the streams you want to sync")," table, toggle ",(0,o.kt)("strong",{parentName:"p"},"Sync")," on or off for your selected stream.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Sync mode")," dropdown and select the sync mode you want to apply."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Depending on the sync mode you select, you may need to choose a cursor or primary key.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Cursor")," or ",(0,o.kt)("strong",{parentName:"li"},"Primary keys")," when they are required by the stream sync mode.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Source-defined cursors and primary keys are selected automatically and cannot be changed in the table.")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on a stream to display the stream details panel.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Toggle individual fields to include or exclude them in the sync, or use the toggle in the table header to select all fields at once."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"You can only deselect top-level fields. You cannot deselect nested fields."),(0,o.kt)("li",{parentName:"ul"},"The Airbyte platform may read all data from the source (depending on the source), but it will only write data to the destination from fields you selected. Deselecting fields will not prevent the Airbyte platform from reading them."),(0,o.kt)("li",{parentName:"ul"},"When you refresh the schema, newly added fields will be selected by default, even if you have previously deselected fields in that stream."))),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Depending on the sync mode you chose for your connection, you can select the ",(0,o.kt)("strong",{parentName:"p"},"Cursor")," or ",(0,o.kt)("strong",{parentName:"p"},"Primary keys")," for individual fields in this table. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"X")," to close the stream details panel.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save changes"),", or click ",(0,o.kt)("strong",{parentName:"p"},"Cancel")," to discard the changes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Stream configuration changed")," dialog displays. This gives you the option to reset streams when you save the changes."))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Airbyte recommends that you reset streams. A reset will delete data in the destination of the affected streams and then re-sync that data. Skipping a reset is discouraged and might lead to unexpected behavior.")),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save connection"),".")),(0,o.kt)("p",null,"Modify multiple streams:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/106352739/226917994-c43941db-bb54-4a12-8270-f24fc4e2e6a7.gif",alt:"gif-batch-edit-march-2023"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Activate the streams you want to sync")," table, select the checkboxes of streams that you want to apply changes to.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To select or deselect all streams, click the checkbox in the table header. To deselect an individual stream, deselect its checkbox in the table.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the highlighted footer of the table:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Toggle ",(0,o.kt)("strong",{parentName:"p"},"Sync")," on or off.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Sync mode")," dropdown and select the sync mode you want to apply."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Depending on the sync mode you select, you may need to choose a cursor or primary key."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("strong",{parentName:"p"},"Cursor")," and ",(0,o.kt)("strong",{parentName:"p"},"Primary keys")," if there are dropdowns in those fields."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Source-defined cursors and primary keys cannot be changed while configuring multiple streams."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Apply")," to apply these changes to the streams you selected, or click ",(0,o.kt)("strong",{parentName:"p"},"Cancel")," to discard the changes."))))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save changes"),", or click ",(0,o.kt)("strong",{parentName:"p"},"Cancel")," to discard the changes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Stream configuration changed")," dialog displays. This gives you the option to reset streams when you save the changes."))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Airbyte recommends that you reset streams. A reset will delete data in the destination of the affected streams and then re-sync that data. Skipping a reset is discouraged and might lead to unexpected behavior.")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save connection"),".")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);