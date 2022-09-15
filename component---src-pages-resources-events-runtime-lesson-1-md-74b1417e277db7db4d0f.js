"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[9904],{15208:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return s},default:function(){return l}});var n=t(87462),i=t(63366),d=(t(15007),t(64983)),p=t(91515),c=["components"],s={},r={_frontmatter:s},b=p.Z;function l(e){var a=e.components,t=(0,i.Z)(e,c);return(0,d.mdx)(b,(0,n.Z)({},r,t,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("h1",null,"Lesson 1: Step by Step Guide"),(0,d.mdx)("h2",{id:"initialize-an-app-builder-app-using-template"},"Initialize an App Builder app using template"),(0,d.mdx)("p",null,"If you don't have an App Builder app, please follow ",(0,d.mdx)("a",{parentName:"p",href:"../event-driven/lesson1.md"},"Create a New App Builder App from Template")," to create one, make sure you have ",(0,d.mdx)("inlineCode",{parentName:"p"},"publish-event"),"in the template and add ",(0,d.mdx)("inlineCode",{parentName:"p"},"I/O management API"),"in console. After done, and run ",(0,d.mdx)("inlineCode",{parentName:"p"},"aio app deploy")," you should have seen this\n",(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.875%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/1407cb1293d94d4fb427b6de779c2078/5530d/publishevent-1.webp 320w","/app-builder/static/1407cb1293d94d4fb427b6de779c2078/0c8fb/publishevent-1.webp 640w","/app-builder/static/1407cb1293d94d4fb427b6de779c2078/94b1e/publishevent-1.webp 1280w","/app-builder/static/1407cb1293d94d4fb427b6de779c2078/0b34d/publishevent-1.webp 1920w","/app-builder/static/1407cb1293d94d4fb427b6de779c2078/e7d6d/publishevent-1.webp 2045w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/1407cb1293d94d4fb427b6de779c2078/dd4a7/publishevent-1.png 320w","/app-builder/static/1407cb1293d94d4fb427b6de779c2078/0f09e/publishevent-1.png 640w","/app-builder/static/1407cb1293d94d4fb427b6de779c2078/bbbf7/publishevent-1.png 1280w","/app-builder/static/1407cb1293d94d4fb427b6de779c2078/ac7a9/publishevent-1.png 1920w","/app-builder/static/1407cb1293d94d4fb427b6de779c2078/cc602/publishevent-1.png 2045w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/1407cb1293d94d4fb427b6de779c2078/bbbf7/publishevent-1.png",alt:"publishevent",title:"publishevent",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("p",null,"and here is the project I set up at adobe developer console\n",(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.9375%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/09857b35d01162fea3d6791b27275105/5530d/console-project-2.webp 320w","/app-builder/static/09857b35d01162fea3d6791b27275105/0c8fb/console-project-2.webp 640w","/app-builder/static/09857b35d01162fea3d6791b27275105/94b1e/console-project-2.webp 1280w","/app-builder/static/09857b35d01162fea3d6791b27275105/0b34d/console-project-2.webp 1920w","/app-builder/static/09857b35d01162fea3d6791b27275105/aea7a/console-project-2.webp 2046w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/09857b35d01162fea3d6791b27275105/dd4a7/console-project-2.png 320w","/app-builder/static/09857b35d01162fea3d6791b27275105/0f09e/console-project-2.png 640w","/app-builder/static/09857b35d01162fea3d6791b27275105/bbbf7/console-project-2.png 1280w","/app-builder/static/09857b35d01162fea3d6791b27275105/ac7a9/console-project-2.png 1920w","/app-builder/static/09857b35d01162fea3d6791b27275105/57859/console-project-2.png 2046w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/09857b35d01162fea3d6791b27275105/bbbf7/console-project-2.png",alt:"consoleproject",title:"consoleproject",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("h2",{id:"event-registration"},"Event Registration"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Follow ",(0,d.mdx)("a",{parentName:"li",href:"../event-driven/lesson2.md"},"Register the App as Event Provider")," to register the event provider, in my case, while at the step:")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre"},"aio event registration create \n")),(0,d.mdx)("p",null,"It will show you a sample of JSON format, make sure you select ",(0,d.mdx)("inlineCode",{parentName:"p"},"webhook")," in my case, here is an example of .json file"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre"},'{\n    "name": "event-runtime-integration",\n    "description": "test event runtime",\n    "delivery_type": "WEBHOOK",\n    "webhook_url": "https://io-webhook.herokuapp.com/webhook/testjie",\n    "events_of_interest": [\n        {\n        "provider_id": "ccefc74d-9696-4b99-a799-f2d34a4189cd",\n        "event_code": "eventrt"\n        }\n    ]\n}\n')),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"After finish the steps above, you should be able to see in your terminal that you successfully create register the event, and you will also see it at adobe developer console under the left bottom corner ",(0,d.mdx)("inlineCode",{parentName:"li"},"event")," your registration provider ",(0,d.mdx)("inlineCode",{parentName:"li"},"eventrt")," will show up there\n",(0,d.mdx)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.5625%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/e59fbebd9af75ac3366af23053669315/5530d/console-event-3.webp 320w","/app-builder/static/e59fbebd9af75ac3366af23053669315/0c8fb/console-event-3.webp 640w","/app-builder/static/e59fbebd9af75ac3366af23053669315/94b1e/console-event-3.webp 1280w","/app-builder/static/e59fbebd9af75ac3366af23053669315/0b34d/console-event-3.webp 1920w","/app-builder/static/e59fbebd9af75ac3366af23053669315/9a5b7/console-event-3.webp 2043w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/e59fbebd9af75ac3366af23053669315/dd4a7/console-event-3.png 320w","/app-builder/static/e59fbebd9af75ac3366af23053669315/0f09e/console-event-3.png 640w","/app-builder/static/e59fbebd9af75ac3366af23053669315/bbbf7/console-event-3.png 1280w","/app-builder/static/e59fbebd9af75ac3366af23053669315/ac7a9/console-event-3.png 1920w","/app-builder/static/e59fbebd9af75ac3366af23053669315/0c665/console-event-3.png 2043w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/e59fbebd9af75ac3366af23053669315/bbbf7/console-event-3.png",alt:"console-event",title:"console-event",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,d.mdx)("h2",{id:"create-event-consumer"},"Create Event Consumer"),(0,d.mdx)("p",null,"We will use the ",(0,d.mdx)("inlineCode",{parentName:"p"},"generic")," App Builder template to modify the code to create event consumer, I will name the action to ",(0,d.mdx)("inlineCode",{parentName:"p"},"consume-event"),", after deploy the event you will be able to set up an event registration runtime actions you deployed."),(0,d.mdx)("p",null,"Note: here is one simple sample code that you could refer to test the webhook feature: "),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre"},"function main(params) {\n  console.log('user action is processing event ' + params.event);\n  var event = params.event;\n  var id = event.id;\n  var event_processed = \"Event Received And Processed :: \" + JSON.stringify(params.event)\n    return {\n        body: event_processed,\n        statusCode: 200,\n        headers: {\n          'Content-Type': 'application/json'\n        }\n    };\n  }\n")),(0,d.mdx)("p",null,"or you could use below one to create webhook send to slack "),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre"},'/* this is a sample action sent a message to slack */\nvar request = require(\'request\');\n\n/* default slackwebhook and channel add yours here and replace the TODO below */\nvar slackWebhook = "Your webhook";\nvar slackChannel = "your channel";\n\nasync function main (params) {\n  \n  /* print event detail */\n  console.log(\'in main + event detail: \', params.event);\n\n  var returnObject = {\n    statusCode: 200,\n    headers: {\n      \'Content-Type\': \'application/json\'\n    },\n    body: ""\n  };\n\n  /* handle the challenge */\n  if (params.challenge) {\n\n    console.log(\'Returning challenge: \' + params.challenge);\n\n    returnObject.body = new Buffer(JSON.stringify({\n      "challenge": params.challenge\n    })).toString(\'base64\');\n\n    return returnObject;\n\n  } else {\n\n    /* we need it to run asynchronously, so we are returning a Promise */\n    return new Promise(function (resolve, reject) {\n\n      var slackMessage = " Event received: " + JSON.stringify(params);\n\n      var payload = {\n        "channel": slackChannel,\n        "username": "incoming-webhook",\n        "text": slackMessage,\n        "mrkdwn": true,\n      };\n\n      var options = {\n        method: \'POST\',\n        url: slackWebhook,\n        headers:\n            { \'Content-type\': \'application/json\' },\n        body: JSON.stringify(payload)\n      };\n\n      request(options, function (error, response, body) {\n        if (error) {\n\n          console.log("ERROR: fail to post " + response);\n\n          reject(error);\n\n        } else {\n\n          console.log ("SUCCESS: posted to slack " + slackMessage);\n\n          returnObject.body = new Buffer(JSON.stringify({\n            "slackMessage": slackMessage\n          })).toString(\'base64\');\n\n          resolve(returnObject);\n        }\n\n      });\n\n    });\n\n  }\n}\n\nexports.main = main\n')),(0,d.mdx)("p",null,"Please note that: An action used as event consumer does not need to be ",(0,d.mdx)("inlineCode",{parentName:"p"},"web: yes"),", and doesn't need ",(0,d.mdx)("inlineCode",{parentName:"p"},"require-adobe-auth: true")," in the manifest.yml file, please modify accordingly to ensure your app security. "),(0,d.mdx)("h2",{id:"event-runtime-integration"},"Event Runtime Integration"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"With all above setup, now you get your ",(0,d.mdx)("inlineCode",{parentName:"p"},"providerId"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"eventCode"),", you can go back to your App Builder App trying to invoke a custom event like below:\n",(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.8125%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/771057cff3127bc895c45b88c685eeec/5530d/event-invoke-4.webp 320w","/app-builder/static/771057cff3127bc895c45b88c685eeec/0c8fb/event-invoke-4.webp 640w","/app-builder/static/771057cff3127bc895c45b88c685eeec/94b1e/event-invoke-4.webp 1280w","/app-builder/static/771057cff3127bc895c45b88c685eeec/0b34d/event-invoke-4.webp 1920w","/app-builder/static/771057cff3127bc895c45b88c685eeec/e7d6d/event-invoke-4.webp 2045w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/771057cff3127bc895c45b88c685eeec/dd4a7/event-invoke-4.png 320w","/app-builder/static/771057cff3127bc895c45b88c685eeec/0f09e/event-invoke-4.png 640w","/app-builder/static/771057cff3127bc895c45b88c685eeec/bbbf7/event-invoke-4.png 1280w","/app-builder/static/771057cff3127bc895c45b88c685eeec/ac7a9/event-invoke-4.png 1920w","/app-builder/static/771057cff3127bc895c45b88c685eeec/cc602/event-invoke-4.png 2045w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/771057cff3127bc895c45b88c685eeec/bbbf7/event-invoke-4.png",alt:"invoke-event",title:"invoke-event",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"You should see this runtime action created in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"user defined actions"),"\n",(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.9375%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/49418f3ef2fd6369136025cafb5c0424/5530d/user-define-action-5.webp 320w","/app-builder/static/49418f3ef2fd6369136025cafb5c0424/0c8fb/user-define-action-5.webp 640w","/app-builder/static/49418f3ef2fd6369136025cafb5c0424/94b1e/user-define-action-5.webp 1280w","/app-builder/static/49418f3ef2fd6369136025cafb5c0424/0b34d/user-define-action-5.webp 1920w","/app-builder/static/49418f3ef2fd6369136025cafb5c0424/60834/user-define-action-5.webp 2047w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/49418f3ef2fd6369136025cafb5c0424/dd4a7/user-define-action-5.png 320w","/app-builder/static/49418f3ef2fd6369136025cafb5c0424/0f09e/user-define-action-5.png 640w","/app-builder/static/49418f3ef2fd6369136025cafb5c0424/bbbf7/user-define-action-5.png 1280w","/app-builder/static/49418f3ef2fd6369136025cafb5c0424/ac7a9/user-define-action-5.png 1920w","/app-builder/static/49418f3ef2fd6369136025cafb5c0424/d43ae/user-define-action-5.png 2047w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/49418f3ef2fd6369136025cafb5c0424/bbbf7/user-define-action-5.png",alt:"user-define-action",title:"user-define-action",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"User now adds the event api to the project to setup the event registration\n",(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.5625%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/7a7cfdb4983356c255c7594f94997d11/5530d/add-event-6.webp 320w","/app-builder/static/7a7cfdb4983356c255c7594f94997d11/0c8fb/add-event-6.webp 640w","/app-builder/static/7a7cfdb4983356c255c7594f94997d11/94b1e/add-event-6.webp 1280w","/app-builder/static/7a7cfdb4983356c255c7594f94997d11/0b34d/add-event-6.webp 1920w","/app-builder/static/7a7cfdb4983356c255c7594f94997d11/08f7b/add-event-6.webp 2041w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/7a7cfdb4983356c255c7594f94997d11/dd4a7/add-event-6.png 320w","/app-builder/static/7a7cfdb4983356c255c7594f94997d11/0f09e/add-event-6.png 640w","/app-builder/static/7a7cfdb4983356c255c7594f94997d11/bbbf7/add-event-6.png 1280w","/app-builder/static/7a7cfdb4983356c255c7594f94997d11/ac7a9/add-event-6.png 1920w","/app-builder/static/7a7cfdb4983356c255c7594f94997d11/223a1/add-event-6.png 2041w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/7a7cfdb4983356c255c7594f94997d11/bbbf7/add-event-6.png",alt:"add-event",title:"add-event",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Adding from our custom event provider we just registered ",(0,d.mdx)("inlineCode",{parentName:"p"},"eventruntime")," (you should be able to see your register event in this list)\n",(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.81250000000001%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/bce4da9eab08a8a18c7894143328245e/5530d/add-event-7.webp 320w","/app-builder/static/bce4da9eab08a8a18c7894143328245e/0c8fb/add-event-7.webp 640w","/app-builder/static/bce4da9eab08a8a18c7894143328245e/94b1e/add-event-7.webp 1280w","/app-builder/static/bce4da9eab08a8a18c7894143328245e/0b34d/add-event-7.webp 1920w","/app-builder/static/bce4da9eab08a8a18c7894143328245e/e7d6d/add-event-7.webp 2045w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/bce4da9eab08a8a18c7894143328245e/dd4a7/add-event-7.png 320w","/app-builder/static/bce4da9eab08a8a18c7894143328245e/0f09e/add-event-7.png 640w","/app-builder/static/bce4da9eab08a8a18c7894143328245e/bbbf7/add-event-7.png 1280w","/app-builder/static/bce4da9eab08a8a18c7894143328245e/ac7a9/add-event-7.png 1920w","/app-builder/static/bce4da9eab08a8a18c7894143328245e/cc602/add-event-7.png 2045w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/bce4da9eab08a8a18c7894143328245e/bbbf7/add-event-7.png",alt:"add-event",title:"add-event",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},'Subscribing to the "eventrt" event type\n',(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.75%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/aa172d130f22bd1717c2dc7c33a20a9f/5530d/add-event-8.webp 320w","/app-builder/static/aa172d130f22bd1717c2dc7c33a20a9f/0c8fb/add-event-8.webp 640w","/app-builder/static/aa172d130f22bd1717c2dc7c33a20a9f/94b1e/add-event-8.webp 1280w","/app-builder/static/aa172d130f22bd1717c2dc7c33a20a9f/0b34d/add-event-8.webp 1920w","/app-builder/static/aa172d130f22bd1717c2dc7c33a20a9f/aea7a/add-event-8.webp 2046w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/aa172d130f22bd1717c2dc7c33a20a9f/dd4a7/add-event-8.png 320w","/app-builder/static/aa172d130f22bd1717c2dc7c33a20a9f/0f09e/add-event-8.png 640w","/app-builder/static/aa172d130f22bd1717c2dc7c33a20a9f/bbbf7/add-event-8.png 1280w","/app-builder/static/aa172d130f22bd1717c2dc7c33a20a9f/ac7a9/add-event-8.png 1920w","/app-builder/static/aa172d130f22bd1717c2dc7c33a20a9f/57859/add-event-8.png 2046w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/aa172d130f22bd1717c2dc7c33a20a9f/bbbf7/add-event-8.png",alt:"add-event",title:"add-event",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Generate the JWT service account credentials key pair\n",(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.125%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/e3e3db64d4b06bbb52273dc6acc94d09/5530d/add-event-9.webp 320w","/app-builder/static/e3e3db64d4b06bbb52273dc6acc94d09/0c8fb/add-event-9.webp 640w","/app-builder/static/e3e3db64d4b06bbb52273dc6acc94d09/94b1e/add-event-9.webp 1280w","/app-builder/static/e3e3db64d4b06bbb52273dc6acc94d09/0b34d/add-event-9.webp 1920w","/app-builder/static/e3e3db64d4b06bbb52273dc6acc94d09/61c64/add-event-9.webp 2059w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/e3e3db64d4b06bbb52273dc6acc94d09/dd4a7/add-event-9.png 320w","/app-builder/static/e3e3db64d4b06bbb52273dc6acc94d09/0f09e/add-event-9.png 640w","/app-builder/static/e3e3db64d4b06bbb52273dc6acc94d09/bbbf7/add-event-9.png 1280w","/app-builder/static/e3e3db64d4b06bbb52273dc6acc94d09/ac7a9/add-event-9.png 1920w","/app-builder/static/e3e3db64d4b06bbb52273dc6acc94d09/f6c02/add-event-9.png 2059w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/e3e3db64d4b06bbb52273dc6acc94d09/bbbf7/add-event-9.png",alt:"add-event",title:"add-event",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"On the registration details page provide name and select the runtime user action created to setup event registration, select the user action from the dropdown of Runtime Actions, as we create the ",(0,d.mdx)("inlineCode",{parentName:"p"},"consume-event"),"and deployed previously, so we will choose this one, then click ",(0,d.mdx)("inlineCode",{parentName:"p"},"Save configured events"),". This will create an event registration with an event handler webhook pointing to your runtime action.\n",(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.5625%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/2dbcfade30056be26712a6a230dd2c82/5530d/add-event-10-3.webp 320w","/app-builder/static/2dbcfade30056be26712a6a230dd2c82/0c8fb/add-event-10-3.webp 640w","/app-builder/static/2dbcfade30056be26712a6a230dd2c82/94b1e/add-event-10-3.webp 1280w","/app-builder/static/2dbcfade30056be26712a6a230dd2c82/801d7/add-event-10-3.webp 1895w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/2dbcfade30056be26712a6a230dd2c82/dd4a7/add-event-10-3.png 320w","/app-builder/static/2dbcfade30056be26712a6a230dd2c82/0f09e/add-event-10-3.png 640w","/app-builder/static/2dbcfade30056be26712a6a230dd2c82/bbbf7/add-event-10-3.png 1280w","/app-builder/static/2dbcfade30056be26712a6a230dd2c82/306a2/add-event-10-3.png 1895w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/2dbcfade30056be26712a6a230dd2c82/bbbf7/add-event-10-3.png",alt:"add-event",title:"add-event",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},'If user goes to his aio-cli and do "aio runtime list", he can see the below entities created as part of the new flow of event registration\n',(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"24.375000000000004%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/a34732ceafa99f6244247ba31f2c7bcb/5530d/add-event-12.webp 320w","/app-builder/static/a34732ceafa99f6244247ba31f2c7bcb/0c8fb/add-event-12.webp 640w","/app-builder/static/a34732ceafa99f6244247ba31f2c7bcb/94b1e/add-event-12.webp 1280w","/app-builder/static/a34732ceafa99f6244247ba31f2c7bcb/0b34d/add-event-12.webp 1920w","/app-builder/static/a34732ceafa99f6244247ba31f2c7bcb/b3265/add-event-12.webp 1955w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/a34732ceafa99f6244247ba31f2c7bcb/dd4a7/add-event-12.png 320w","/app-builder/static/a34732ceafa99f6244247ba31f2c7bcb/0f09e/add-event-12.png 640w","/app-builder/static/a34732ceafa99f6244247ba31f2c7bcb/bbbf7/add-event-12.png 1280w","/app-builder/static/a34732ceafa99f6244247ba31f2c7bcb/ac7a9/add-event-12.png 1920w","/app-builder/static/a34732ceafa99f6244247ba31f2c7bcb/4d915/add-event-12.png 1955w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/a34732ceafa99f6244247ba31f2c7bcb/bbbf7/add-event-12.png",alt:"add-event",title:"add-event",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-events-runtime-lesson-1-md-74b1417e277db7db4d0f.js.map