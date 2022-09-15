"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[2009],{91852:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return m}});var a=t(87462),r=t(63366),i=(t(15007),t(64983)),o=t(91515),s=["components"],l={},p={_frontmatter:l},d=o.Z;function m(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.mdx)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",null,"Lesson 2: Explore the App Builder App"),(0,i.mdx)("p",null,"Within the newly created app, you have seen the ",(0,i.mdx)("inlineCode",{parentName:"p"},".env")," file which contains your credentials for running the app. Let's explore further."),(0,i.mdx)("p",null,"Firstly, ",(0,i.mdx)("inlineCode",{parentName:"p"},"package.json")," is the ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.npmjs.com/creating-a-package-json-file"},"crucial part")," of almost every NodeJS project. It contains the list of dependencies, version, reproducible builds, etc."),(0,i.mdx)("p",null,"Then ",(0,i.mdx)("inlineCode",{parentName:"p"},"ext.config.yaml")," in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"src/dx-excshell-1/")," folder is the cockpit of your App Builder app backend. It lists the declaration of serverless actions including name, source files, runtime kind, default params, annotations, and so on. You can find the grammar of writing manifest ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/apache/openwhisk-wskdeploy/blob/master/docs/programming_guide.md#wskdeploy-utility-by-example"},"here"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"operations:\n  workerProcess:\n    - type: action\n      impl: dx-asset-compute-worker-1/worker\nhooks:\n  post-app-run: adobe-asset-compute devtool\n  test: adobe-asset-compute test-worker\nactions: actions\nruntimeManifest:\n  packages:\n    dx-asset-compute-worker-1:\n      license: Apache-2.0\n      actions:\n        get-profiles:\n          function: actions/get-profiles/index.js\n          web: 'yes'\n          runtime: 'nodejs:14'\n          inputs:\n              LOG_LEVEL: debug\n              tenant: $CAMPAIGN_STANDARD_TENANT\n              apiKey: $SERVICE_API_KEY\n          annotations:\n            require-adobe-auth: true\n            final: true\n")),(0,i.mdx)("p",null,"Currently your app only has one action ",(0,i.mdx)("inlineCode",{parentName:"p"},"get-profiles"),"."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Source code is at ",(0,i.mdx)("inlineCode",{parentName:"li"},"src/dx-excshell-1/actions/get-profiles/index.js")),(0,i.mdx)("li",{parentName:"ul"},"It is a ",(0,i.mdx)("a",{parentName:"li",href:"/app-builder/apis/experienceplatform/runtime/docs.html#!adobedocs/adobeio-runtime/master/guides/creating_actions.md#invoking-actions"},"web action")),(0,i.mdx)("li",{parentName:"ul"},"The action will be run in the ",(0,i.mdx)("inlineCode",{parentName:"li"},"nodejs:12")," ",(0,i.mdx)("a",{parentName:"li",href:"/app-builder/apis/experienceplatform/runtime/docs.html#!adobedocs/adobeio-runtime/master/reference/runtimes.md"},"runtime container on I/O Runtime")),(0,i.mdx)("li",{parentName:"ul"},"It has some ",(0,i.mdx)("a",{parentName:"li",href:"/app-builder/apis/experienceplatform/runtime/docs.html#!adobedocs/adobeio-runtime/master/guides/creating_actions.md#working-with-parameters"},"default params")," such as ",(0,i.mdx)("inlineCode",{parentName:"li"},"LOG_LEVEL"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"tenant"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"apiKey"),", which are automatically available in the ",(0,i.mdx)("inlineCode",{parentName:"li"},"params")," object of the action without passing it to the action for every invocation. The ",(0,i.mdx)("inlineCode",{parentName:"li"},"final")," annotation set as ",(0,i.mdx)("inlineCode",{parentName:"li"},"true")," tells that those params are immutable."),(0,i.mdx)("li",{parentName:"ul"},"Setting the ",(0,i.mdx)("inlineCode",{parentName:"li"},"require-adobe-auth")," annotation as ",(0,i.mdx)("inlineCode",{parentName:"li"},"true")," enables this action to be protected by Adobe IMS user token in the request header. Without it, the action will return ",(0,i.mdx)("inlineCode",{parentName:"li"},"401 Unauthorized")," error.")),(0,i.mdx)("p",null,"Now let's have a deeper look at the action's source code."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"/**\n * This action gets a list of customer profiles the Adobe Campaign Standard API\n */\n\nconst { Core } = require('@adobe/aio-sdk')\nconst { CampaignStandard } = require('@adobe/aio-sdk')\nconst { errorResponse, getBearerToken, stringParameters, checkMissingRequestInputs } = require('../utils')\n\n// main function that will be executed by Adobe I/O Runtime\nasync function main (params) {\n  // create a Logger\n  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })\n\n  try {\n    // 'info' is the default level if not set\n    logger.info('Calling the main action')\n\n    // log parameters, only if params.LOG_LEVEL === 'debug'\n    logger.debug(stringParameters(params))\n\n    // check for missing request input parameters and headers\n    const requiredParams = ['apiKey', 'tenant']\n    const errorMessage = checkMissingRequestInputs(params, requiredParams, ['Authorization'])\n    if (errorMessage) {\n      // return and log client errors\n      return errorResponse(400, errorMessage, logger)\n    }\n\n    // extract the user Bearer token from the input request parameters\n    const token = getBearerToken(params)\n\n    // initialize the sdk\n    const campaignClient = await CampaignStandard.init(params.tenant, params.apiKey, token)\n\n    // get profiles from Campaign Standard\n    const profiles = await campaignClient.getAllProfiles()\n    logger.debug('profiles = ' + JSON.stringify(profiles, null, 2))\n    const response = {\n      statusCode: 200,\n      body: profiles\n    }\n\n    // log the response status code\n    logger.info(`${response.statusCode}: successful request`)\n    return response\n  } catch (error) {\n    // log any server errors\n    logger.error(error)\n    // return with 500\n    return errorResponse(500, 'server error', logger)\n  }\n}\n\nexports.main = main\n")),(0,i.mdx)("p",null,"What happens here, is that the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/apache/openwhisk/blob/master/docs/actions-nodejs.md"},"action")," exposes a ",(0,i.mdx)("inlineCode",{parentName:"p"},"main")," function, which accepts a list of params from the client. It checks that required params for using the Campaign Standard SDK are present in this list, including the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Authorization")," header for authentication against Adobe IMS.",(0,i.mdx)("br",{parentName:"p"}),"\n","An access token is retrieved to initiate the SDK client instance, which is then used to retrieve the list of customer profiles using the ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.adobe.com/content/help/en/campaign-standard/using/working-with-apis/managing-profiles/retrieving-profiles.html"},"getAllProfiles()")," function. Finally the profiles are returned to the client. This whole execution is wrapped within a try-catch block, so that errors are handled appropriately."),(0,i.mdx)("p",null,"Next, let's see how the web UI communicates with the backend. All web assets are placed in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"src/dx-excshell-1/web-src")," folder.",(0,i.mdx)("br",{parentName:"p"}),"\n","Beside a few auto-generated files that are useful for running your app on Adobe Experience Cloud (ExC) Shell, ",(0,i.mdx)("inlineCode",{parentName:"p"},"App.js")," is the extension point of your UI.",(0,i.mdx)("br",{parentName:"p"}),"\n",'By default, it contains 3 pages: Home and About are just static pages showing listing reference docs, and ActionsForm lists all available backend actions, allows you to select the action to be invoke, and once you click on the "invoke" button, it shows the invocation results in the browser console.'),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"<View gridArea='content' padding='size-200'>\n  <Switch>\n    <Route exact path='/'>\n      <Home></Home>\n    </Route>\n    <Route path='/actions'>\n      <ActionsForm runtime={props.runtime} ims={props.ims} />\n    </Route>\n    <Route path='/about'>\n      <About></About>\n    </Route>\n  </Switch>\n</View>\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-customer-dashboard-lesson-2-md-ea8c23e1ba5603c63b7c.js.map