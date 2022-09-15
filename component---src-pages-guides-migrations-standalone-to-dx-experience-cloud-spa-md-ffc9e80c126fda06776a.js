"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[6646],{20629:function(e,a,i){i.r(a),i.d(a,{_frontmatter:function(){return d},default:function(){return c}});var n=i(87462),t=i(63366),l=(i(15007),i(64983)),p=i(91515),o=["components"],d={},r={_frontmatter:d},m=p.Z;function c(e){var a=e.components,i=(0,t.Z)(e,o);return(0,l.mdx)(m,(0,n.Z)({},r,i,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",null,"Migration Guide - Standalone Application to DX Experience Cloud SPA v1"),(0,l.mdx)("h2",{id:"overview"},"Overview"),(0,l.mdx)("p",null,"In this guide, you will learn one of the ways to migrate an App Builder application that was originally initialized as a Standalone Application to a\nDX Experience Cloud SPA v1. It is possible to accomplish this by only modifying the configuration of the project, but following this guide will allow your application to closely mirror that of an application that is generated when you initialize an App Builder application as DX Experience Cloud SPA v1. "),(0,l.mdx)("h2",{id:"who-is-this-migration-guide-for"},"Who is This Migration Guide For?"),(0,l.mdx)("p",null,"If you are having trouble viewing your application in Adobe Experience Cloud, you may have initialized your application as a\nStandalone Application, and this guide may help you. "),(0,l.mdx)("p",null,"Applications built with App Builder can only be accessed via the App Builder Catalog in Adobe Experience Cloud if they have been initialized as ",(0,l.mdx)("strong",{parentName:"p"},"DX\nExperience Cloud SPA v1"),". "),(0,l.mdx)("h2",{id:"how-can-i-tell-if-my-project-is-a-standalone-application"},"How can I tell if my project is a Standalone Application?"),(0,l.mdx)("p",null,"Your application will ",(0,l.mdx)("strong",{parentName:"p"},"not")," have the ",(0,l.mdx)("inlineCode",{parentName:"p"},"App Builder ExcShell")," sub-heading in Adobe Exchange. "),(0,l.mdx)("h3",{id:"standalone-application"},"Standalone Application"),(0,l.mdx)("p",null,(0,l.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,l.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"11.5625%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,l.mdx)("picture",{parentName:"span"},"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/54213c1ec0fac52679de9189ad8b36b9/5530d/experience_cloud_standalone_application.webp 320w","/app-builder/static/54213c1ec0fac52679de9189ad8b36b9/0c8fb/experience_cloud_standalone_application.webp 640w","/app-builder/static/54213c1ec0fac52679de9189ad8b36b9/94b1e/experience_cloud_standalone_application.webp 1280w","/app-builder/static/54213c1ec0fac52679de9189ad8b36b9/0d053/experience_cloud_standalone_application.webp 1612w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/54213c1ec0fac52679de9189ad8b36b9/dd4a7/experience_cloud_standalone_application.png 320w","/app-builder/static/54213c1ec0fac52679de9189ad8b36b9/0f09e/experience_cloud_standalone_application.png 640w","/app-builder/static/54213c1ec0fac52679de9189ad8b36b9/bbbf7/experience_cloud_standalone_application.png 1280w","/app-builder/static/54213c1ec0fac52679de9189ad8b36b9/f0f3e/experience_cloud_standalone_application.png 1612w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,l.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/54213c1ec0fac52679de9189ad8b36b9/bbbf7/experience_cloud_standalone_application.png",alt:"Standalone Application",title:"Standalone Application",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,l.mdx)("h3",{id:"dx-experience-cloud-spa-v1"},"DX Experience Cloud SPA v1"),(0,l.mdx)("p",null,(0,l.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"801px"}},"\n      ",(0,l.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"11.249999999999998%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,l.mdx)("picture",{parentName:"span"},"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/b39b38ed8f38a49c5e103a4b5f08b982/5530d/experience_cloud_dx_experience_cloud_spa.webp 320w","/app-builder/static/b39b38ed8f38a49c5e103a4b5f08b982/0c8fb/experience_cloud_dx_experience_cloud_spa.webp 640w","/app-builder/static/b39b38ed8f38a49c5e103a4b5f08b982/13ad5/experience_cloud_dx_experience_cloud_spa.webp 801w"],sizes:"(max-width: 801px) 100vw, 801px",type:"image/webp"}),"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/b39b38ed8f38a49c5e103a4b5f08b982/dd4a7/experience_cloud_dx_experience_cloud_spa.png 320w","/app-builder/static/b39b38ed8f38a49c5e103a4b5f08b982/0f09e/experience_cloud_dx_experience_cloud_spa.png 640w","/app-builder/static/b39b38ed8f38a49c5e103a4b5f08b982/0a55f/experience_cloud_dx_experience_cloud_spa.png 801w"],sizes:"(max-width: 801px) 100vw, 801px",type:"image/png"}),"\n          ",(0,l.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/b39b38ed8f38a49c5e103a4b5f08b982/0a55f/experience_cloud_dx_experience_cloud_spa.png",alt:"DX Experience Cloud SPA v1",title:"DX Experience Cloud SPA v1",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,l.mdx)("h2",{id:"understanding-the-difference"},"Understanding the Difference"),(0,l.mdx)("p",null,"See ",(0,l.mdx)("a",{parentName:"p",href:"../extensions/extension_migration_guide.md#old-file-structure"},"this")," guide to\nbetter understand the difference between a Standalone Application and a DX Experience Cloud SPA v1. This guide also provides an overview of the\ndirectory structure for a DX Experience Cloud SPA v1 application (Under ",(0,l.mdx)("strong",{parentName:"p"},"New File Structure"),") and a deeper dive into extension point configuration. "),(0,l.mdx)("h2",{id:"migration-steps"},"Migration Steps"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"Modify local directory ",(0,l.mdx)("ol",{parentName:"li"},(0,l.mdx)("li",{parentName:"ol"},"Create a new ",(0,l.mdx)("inlineCode",{parentName:"li"},"src/dx-excshell-1")," folder"),(0,l.mdx)("li",{parentName:"ol"},"Move ",(0,l.mdx)("inlineCode",{parentName:"li"},"web-src"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"test"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"e2e"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"actions")," under ",(0,l.mdx)("inlineCode",{parentName:"li"},"src/dx-excshell-1")))),(0,l.mdx)("li",{parentName:"ol"},"Add extension configuration ",(0,l.mdx)("ol",{parentName:"li"},(0,l.mdx)("li",{parentName:"ol"},"Create ",(0,l.mdx)("inlineCode",{parentName:"li"},"src/dx-excshell-1/ext.config.yaml")," "),(0,l.mdx)("li",{parentName:"ol"},"Copy the contents of ",(0,l.mdx)("inlineCode",{parentName:"li"},"app.config.yaml")," to ",(0,l.mdx)("inlineCode",{parentName:"li"},"src/dx-excshell-1/ext.config.yaml")," "),(0,l.mdx)("li",{parentName:"ol"},"Delete the ",(0,l.mdx)("inlineCode",{parentName:"li"},"application")," tag in ",(0,l.mdx)("inlineCode",{parentName:"li"},"src/dx-excshell-1/ext.config.yaml")," "),(0,l.mdx)("li",{parentName:"ol"},"Shift contents of ",(0,l.mdx)("inlineCode",{parentName:"li"},"src/dx-excshell-1/ext.config.yaml")," left one tab space "),(0,l.mdx)("li",{parentName:"ol"},"Add an ",(0,l.mdx)("inlineCode",{parentName:"li"},"operations")," tag at the top of ",(0,l.mdx)("inlineCode",{parentName:"li"},"src/dx-excshell-1/ext.config.yaml")," with the following contents: ",(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-yaml"},"operations:\n  view:\n    - type: web\n      impl: index.html\n"))),(0,l.mdx)("li",{parentName:"ol"},"Replace the contents of ",(0,l.mdx)("inlineCode",{parentName:"li"},"app.config.yaml")," with the following: ",(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-yaml"},"extensions:\n    dx/excshell/1:\n        $include: src/dx-excshell-1/ext.config.yaml\n"))))),(0,l.mdx)("li",{parentName:"ol"},"Revoke the application (Optional: Only if application is published)",(0,l.mdx)("ol",{parentName:"li"},(0,l.mdx)("li",{parentName:"ol"},"If admin",(0,l.mdx)("ol",{parentName:"li"},(0,l.mdx)("li",{parentName:"ol"},"Navigate to Adobe Exchange "),(0,l.mdx)("li",{parentName:"ol"},"Select ",(0,l.mdx)("strong",{parentName:"li"},"Manage")," in the top toolbar "),(0,l.mdx)("li",{parentName:"ol"},"Select ",(0,l.mdx)("strong",{parentName:"li"},"Approved Apps")," in the top sub toolbar"),(0,l.mdx)("li",{parentName:"ol"},"Find your application in the list, click ",(0,l.mdx)("strong",{parentName:"li"},"Revoke")),(0,l.mdx)("li",{parentName:"ol"},"Click ",(0,l.mdx)("strong",{parentName:"li"},"Revoke")))),(0,l.mdx)("li",{parentName:"ol"},"If not admin",(0,l.mdx)("ol",{parentName:"li"},(0,l.mdx)("li",{parentName:"ol"},"Ping admin to revoke"),(0,l.mdx)("li",{parentName:"ol"},"Wait for admin to revoke "))))),(0,l.mdx)("li",{parentName:"ol"},"Re-initialize application ",(0,l.mdx)("ol",{parentName:"li"},(0,l.mdx)("li",{parentName:"ol"},"Run ",(0,l.mdx)("inlineCode",{parentName:"li"},"aio app init"),(0,l.mdx)("ol",{parentName:"li"},(0,l.mdx)("li",{parentName:"ol"},"Select your organization "),(0,l.mdx)("li",{parentName:"ol"},"Select your project "),(0,l.mdx)("li",{parentName:"ol"},"Select ",(0,l.mdx)("strong",{parentName:"li"},"DX Experience Cloud SPA v1")),(0,l.mdx)("li",{parentName:"ol"},"Overwrite package.json "),(0,l.mdx)("li",{parentName:"ol"},"Overwrite .env"))))),(0,l.mdx)("li",{parentName:"ol"},"Deploy your application",(0,l.mdx)("ol",{parentName:"li"},(0,l.mdx)("li",{parentName:"ol"},"Run ",(0,l.mdx)("inlineCode",{parentName:"li"},"aio app deploy")," "))),(0,l.mdx)("li",{parentName:"ol"},"Submit application for approval",(0,l.mdx)("ol",{parentName:"li"},(0,l.mdx)("li",{parentName:"ol"},"Navigate to the Adobe Developer Console "),(0,l.mdx)("li",{parentName:"ol"},"Select your project"),(0,l.mdx)("li",{parentName:"ol"},"Select the Production workspace "),(0,l.mdx)("li",{parentName:"ol"},"Find and click ",(0,l.mdx)("strong",{parentName:"li"},"Submit for Approval")),(0,l.mdx)("li",{parentName:"ol"},"Fill out the relevant submission details"),(0,l.mdx)("li",{parentName:"ol"},"Find and click ",(0,l.mdx)("strong",{parentName:"li"},"Submit")," "))),(0,l.mdx)("li",{parentName:"ol"},"Approve application ",(0,l.mdx)("ol",{parentName:"li"},(0,l.mdx)("li",{parentName:"ol"},"If admin",(0,l.mdx)("ol",{parentName:"li"},(0,l.mdx)("li",{parentName:"ol"},"Navigate to Adobe Exchange "),(0,l.mdx)("li",{parentName:"ol"},"Select ",(0,l.mdx)("strong",{parentName:"li"},"Manage")," in the top toolbar "),(0,l.mdx)("li",{parentName:"ol"},"Select ",(0,l.mdx)("strong",{parentName:"li"},"Apps Pending Review")," in the top sub toolbar"),(0,l.mdx)("li",{parentName:"ol"},"Find your application in the list, click ",(0,l.mdx)("strong",{parentName:"li"},"Review"),(0,l.mdx)("ol",{parentName:"li"},(0,l.mdx)("li",{parentName:"ol"},"Note: Application should have ",(0,l.mdx)("inlineCode",{parentName:"li"},"App Builder ExcShell")," sub-heading"))),(0,l.mdx)("li",{parentName:"ol"},"Fill in approval notes, click ",(0,l.mdx)("strong",{parentName:"li"},"Approve")," "))),(0,l.mdx)("li",{parentName:"ol"},"If not admin",(0,l.mdx)("ol",{parentName:"li"},(0,l.mdx)("li",{parentName:"ol"},"Ping admin for approval"),(0,l.mdx)("li",{parentName:"ol"},"Wait for approval"))))),(0,l.mdx)("li",{parentName:"ol"},"Done, your application should now be in the App Builder Catalog in Adobe Experience Cloud")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-migrations-standalone-to-dx-experience-cloud-spa-md-ffc9e80c126fda06776a.js.map