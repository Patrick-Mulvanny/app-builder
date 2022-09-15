"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[7696],{30073:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return u},default:function(){return l}});var s=r(87462),o=r(63366),a=(r(15007),r(64983)),t=r(91515),i=["components"],u={},c={_frontmatter:u},m=t.Z;function l(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.mdx)(m,(0,s.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",null,"Caching HTTP responses"),(0,a.mdx)("p",null,"Demonstrating how to cache response of an action at Gateway level. To test this functionality, make sure that the Cache-Control header in your HTTP request is not set to ",(0,a.mdx)("inlineCode",{parentName:"p"},"no-cache"),"\n(which is by default if you use Postman or browser's developer tools). More info ",(0,a.mdx)("a",{parentName:"p",href:"/app-builder/apis/experienceplatform/runtime/docs.html#!adobedocs/adobeio-runtime/master/guides/throughput_tuning.md#caching-responses"},"here"),". "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"const { Core } = require('@adobe/aio-sdk')\nconst { errorResponse, stringParameters, checkMissingRequestInputs } = require('../utils')\n\n// main function that will be executed by Adobe I/O Runtime\nasync function main (params) {\n  // create a Logger\n  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })\n\n  try {\n    // 'info' is the default level if not set\n    logger.info('Calling the main action')\n\n    // log parameters, only if params.LOG_LEVEL === 'debug'\n    logger.debug(stringParameters(params))\n\n    // check for missing request input parameters and headers\n    const requiredParams = ['name']\n    const requiredHeaders = []\n    const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)\n    if (errorMessage) {\n      // return and log client errors\n      return errorResponse(400, errorMessage, logger)\n    }\n\n    // sleeping 2 secs to simulate an outgoing server call\n    await new Promise(r => setTimeout(r, 2000))\n\n    const response = {\n      headers: {\n        'Cache-Control': 'max-age=300' // cached 5 min\n      },\n      statusCode: 200,\n      body: { message: `Hi ${params.name}, I am ready!` }\n    }\n\n    // log the response status code\n    logger.info(`${response.statusCode}: successful request`)\n    return response\n  } catch (error) {\n    // log any server errors\n    logger.error(error)\n    // return with 500\n    return errorResponse(500, 'server error', logger)\n  }\n}\n\nexports.main = main\n")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-sample-apps-code-snippets-index-md-1c648efc07cbb6cc1d74.js.map