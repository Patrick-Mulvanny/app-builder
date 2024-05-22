"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[247],{95189:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return u}});var a=t(87462),i=t(63366),o=(t(15007),t(64983)),r=t(91515),s=["components"],l={},d={_frontmatter:l},p=r.Z;function u(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.mdx)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"lesson-1-create-an-event-provider-using-app-builder"},"Lesson 1: Create an Event Provider using App Builder"),(0,o.mdx)("p",null,"In this lesson, we will do the follow steps:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Create an event provider using App Builder template"),(0,o.mdx)("li",{parentName:"ul"},"Register the App as event provider "),(0,o.mdx)("li",{parentName:"ul"},"Fire Events"),(0,o.mdx)("li",{parentName:"ul"},"Scheduling cron jobs with alarms")),(0,o.mdx)("h2",{id:"create-an-event-provider-using-app-builder-template"},"Create an event provider using App Builder template"),(0,o.mdx)("p",null,"In this codelab, to provide an end to end solution, we need to have an event provider generating tons of events sending to journaling API, and the events provider need to be configurable to send x events/min to help user to test. so we choose to use OpenWhisk Alarms Package in App Builder application to create\ncron jobs. "),(0,o.mdx)("p",null,"First, let's create a new App Builder App from template by follow the below codelab:\n",(0,o.mdx)("a",{parentName:"p",href:"../event-driven/lesson1.md"},"here"),"\nplease make sure you add ",(0,o.mdx)("inlineCode",{parentName:"p"},"I/O management API")," in console and choose ",(0,o.mdx)("inlineCode",{parentName:"p"},"publish-event")," in the cli template. "),(0,o.mdx)("h2",{id:"register-the-app-as-event-provider"},"Register the App as Event Provider"),(0,o.mdx)("p",null,"Now we use cli to register the app as event provider, we need to install the Adobe I/O event cli plugin, simply run below:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install -g @adobe/aio-cli-plugin-events\n")),(0,o.mdx)("p",null,"and then follow below codelab step by step:\n",(0,o.mdx)("a",{parentName:"p",href:"../event-driven/lesson2.md"},"here")),(0,o.mdx)("h2",{id:"fire-events-and-set-up-consume-events"},"Fire Events and set up consume Events"),(0,o.mdx)("p",null,"Now we can set up fire event by follow ",(0,o.mdx)("a",{parentName:"p",href:"../event-driven/index.md"},"this")," and make sure that you choose journaling API as the way to consume events by follow ",(0,o.mdx)("a",{parentName:"p",href:"https://adobeio-codelabs-custom-events-adobedocs.project-helix.page/?src=/lessons/lesson4.html"},"this")),(0,o.mdx)("h2",{id:"scheduling-cron-jobs-with-alarms"},"Scheduling cron jobs with alarms"),(0,o.mdx)("p",null,"Follow this codelab to automatically fire event by using runtime alarms package ",(0,o.mdx)("a",{parentName:"p",href:"../cron-jobs/index.md"},"Scheduling Cron Jobs with Alarms")),(0,o.mdx)("p",null,"Your ",(0,o.mdx)("inlineCode",{parentName:"p"},"app.config.yaml")," should look like this as below."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"application:\n  actions: actions\n  web: web-src\n  runtimeManifest:\n    packages:\n      my-app:\n        license: Apache-2.0\n        actions:\n          generic:\n            function: actions/generic/index.js\n            web: 'yes'\n            runtime: 'nodejs:14'\n            inputs:\n              LOG_LEVEL: debug\n            annotations:\n              require-adobe-auth: true\n              final: true\n          publish-events:\n            function: actions/publish-events/index.js\n            web: 'yes'\n            runtime: 'nodejs:14'\n            inputs:\n              LOG_LEVEL: debug\n              apiKey: $SERVICE_API_KEY\n              providerId: $PROVIDER_ID\n              eventCode: $EVENT_CODE\n              client_id: $CLIENT_ID\n              client_secret: $CLIENT_SECRET\n              technical_account_email: $TECH_ACCOUNT_EMAIL\n              technical_account_id: $TECH_ACCOUNT_ID\n              ims_org_id: $IMS_ORG_ID\n              private_key: $PRIVATE_KEY\n            annotations:\n              final: true\n        Triggers:\n          everyMin:\n            feed: /whisk.system/alarms/interval\n            inputs:\n              minutes: 1\n          rules:\n            everyMinRule:\n              trigger: everyMin\n              action: publish-events\n")),(0,o.mdx)("p",null,"In order to test the action, you could execute ",(0,o.mdx)("inlineCode",{parentName:"p"},"aio app deploy")," in the VSCode terminal. Once the deployment is finished, run ",(0,o.mdx)("inlineCode",{parentName:"p"},"aio rt action invoke your-app-name/generic"),", and then verify its result and logs using ",(0,o.mdx)("inlineCode",{parentName:"p"},"aio rt activation get ID")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"aio rt activation logs ID")),(0,o.mdx)("p",null,"If successful, the event provider should automatically send the events, you should be able to use postman or curl to verify the journaling API to receive events. "))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-journaling-events-lesson-1-md-c80e24709e3277bd8279.js.map