"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[4527],{7959:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return p},default:function(){return s}});var i=n(87462),l=n(63366),o=(n(15007),n(64983)),t=n(91515),d=["components"],p={},r={_frontmatter:p},m=t.Z;function s(e){var a=e.components,n=(0,l.Z)(e,d);return(0,o.mdx)(m,(0,i.Z)({},r,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"packaging-for-developer-distribution"},"Packaging for Developer Distribution"),(0,o.mdx)("p",null,"To get your App Builder app listed for ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/developer-distribution/"},"Adobe Developer Distribution"),", you will need to package it."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"aio app pack")," command will verify and bundle your app. In the root of your app folder, run this command:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-sh"},"aio app pack\n")),(0,o.mdx)("p",null,"After this command completes running, you can find the app package in your app folder as: ",(0,o.mdx)("inlineCode",{parentName:"p"},"dist/app.zip"),"."),(0,o.mdx)("h2",{id:"app-validation"},"App Validation"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"app.config.yaml")," ",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"will be checked if it is in a valid format, and will show specific config errors for you to fix, if necessary"))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"package.json")," version",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"application version format must be ",(0,o.mdx)("inlineCode",{parentName:"li"},"X.Y.Z"),", where X, Y, and Z are non-negative integers"))),(0,o.mdx)("li",{parentName:"ol"},"files to be packaged. All the files in your app folder will be packaged EXCEPT:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"files specified in ",(0,o.mdx)("inlineCode",{parentName:"li"},".gitignore")),(0,o.mdx)("li",{parentName:"ul"},"files specified in ",(0,o.mdx)("inlineCode",{parentName:"li"},".npmignore")),(0,o.mdx)("li",{parentName:"ul"},"any ",(0,o.mdx)("inlineCode",{parentName:"li"},"dist")," folders"),(0,o.mdx)("li",{parentName:"ul"},"any dot files (.env, .gitignore, etc)"),(0,o.mdx)("li",{parentName:"ul"},"any OS junk files (.DS_Store, thumbs.db, etc)"))),(0,o.mdx)("li",{parentName:"ol"},"event registrations will be validated (if any)")),(0,o.mdx)("h2",{id:"hooks"},"Hooks"),(0,o.mdx)("p",null,"Two new ",(0,o.mdx)("a",{parentName:"p",href:"./app-hooks.md"},"hooks")," have been added for this command, and will run before and after the command is run (respectively):"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"pre-pack"),(0,o.mdx)("li",{parentName:"ol"},"post-pack")),(0,o.mdx)("p",null,"Your hook handler function will be passed two items:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"appConfig")," (object) - this contains the config of the current application"),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"artifactsFolder")," (string) - this will be the location of the folder containing all the packaging artifacts that will be bundled")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-packaging-md-f08d2e3f03cfad07c8ee.js.map