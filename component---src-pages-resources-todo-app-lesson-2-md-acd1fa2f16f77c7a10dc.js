"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[926],{56328:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return p}});var o=n(87462),a=n(63366),i=(n(15007),n(64983)),d=n(91515),l=["components"],s={},r={_frontmatter:s},m=d.Z;function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.mdx)(m,(0,o.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",null,"Lesson 2: Setup Runtime actions"),(0,i.mdx)("p",null,"In this lesson, we'll setup the Runtime actions to handle the CRUD operations.\nThe app we're building can handle multiple todo lists and each todo list can have several todo items."),(0,i.mdx)("h2",{id:"global-configuration-file"},"Global configuration file"),(0,i.mdx)("p",null,"To avoid long todo lists, we'll define a ",(0,i.mdx)("inlineCode",{parentName:"p"},"MAX_TODO_ITEMS")," value within a global configuration file that we will import from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"actions")," folder but also from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"web-src")," folder.\nWe'll create the file at the root of the App Builder App and name it ",(0,i.mdx)("inlineCode",{parentName:"p"},"defaults.json"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "MAX_TODO_ITEMS": 10\n}\n')),(0,i.mdx)("p",null,"Then we're going to import the value in our action ",(0,i.mdx)("inlineCode",{parentName:"p"},"todolist/index.js"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const { MAX_TODO_ITEMS } = require('../../defaults.json');\n")),(0,i.mdx)("p",null,"In the next lesson, we'll also show how to import the value from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"web-src")," folder."),(0,i.mdx)("h2",{id:"install-aio-lib-state"},"Install aio-lib-state"),(0,i.mdx)("p",null,"We'll be using ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-state"},"aio-lib-state")," to store the todo items. So first we're going to install the dependency with:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"npm i --save @adobe/aio-lib-state\n")),(0,i.mdx)("p",null,"Then we're going to import it as well:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const stateLib = require('@adobe/aio-lib-state');\n")),(0,i.mdx)("h2",{id:"main-function"},"Main function"),(0,i.mdx)("p",null,"We'll setup the ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"},"CRUD")," operations inside the main function. "),(0,i.mdx)("h3",{id:"parameters"},"Parameters"),(0,i.mdx)("p",null,"First, we'll define an ",(0,i.mdx)("inlineCode",{parentName:"p"},"operation")," parameter and make it required: "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const requiredParams = ['operation']; \n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"operation")," parameter can take 4 possible values: "),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"create")," to create an empty todo list"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"read")," to read a todo list"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"update")," to update a todo list with a todo item "),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"delete")," to delete a todo list")),(0,i.mdx)("p",null,"We'll also use additional optional parameters: "),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"name")," to identify a list"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"todo")," to identify a todo inside a list  ")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const { operation, name, todo } = params;\n")),(0,i.mdx)("h3",{id:"crud-operations"},"CRUD operations"),(0,i.mdx)("p",null,"Next, we'll initialize the state library and retrieve a ",(0,i.mdx)("inlineCode",{parentName:"p"},"todolist")," value with ",(0,i.mdx)("inlineCode",{parentName:"p"},"state.get()"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const state = await stateLib.init();\n\nlet todoList = await state.get(`todolist`);\nif (todoList?.value) {\n  todoList = todoList.value;\n}\nelse {\n  todoList = [];\n}\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"todolist")," will hold all todo lists objects and is an empty array by default."),(0,i.mdx)("p",null,"Finally, we'll define which operation to perform based on the value of ",(0,i.mdx)("inlineCode",{parentName:"p"},"operation")," and return the response."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'let body = {};\nswitch (operation) {\n  case \'create\':\n    // Find the todo list by name\n    if (!todoList.find(({ name: todoListName }) => todoListName === name)) {\n      // If none found, create an empty list with the given name\n      todoList.unshift({\n        name,\n        todos: []\n      });\n      \n      // Store the new list in the state storage with no expiry time\n      await state.put(`todolist`, todoList, { ttl: -1 });\n\n      body.message = `"${name}" added.`;\n    } else {\n      return errorResponse(400, `"${name}" already exists.`, logger);\n    }\n    break;\n\n  case \'read\':\n    // Simply return the todo lists\n    body.todoList = todoList;\n    break;\n\n  case \'update\':\n    if (todo) {\n      // Find the todo list by name\n      const foundTodoList = todoList.find(({ name: todoListName }) => todoListName === name);\n      if (foundTodoList) {\n        // Find the todo item by id\n        const todoIndex = foundTodoList.todos.findIndex(({ id }) => id === todo.id);\n        if (todoIndex !== -1) {\n          // Update the todo item\n          foundTodoList.todos[todoIndex] = todo;\n          body.message = `Todo "${todo.id}" updated in "${name}".`;\n          \n          await state.put(`todolist`, todoList, { ttl: -1 });\n        } else {\n          // Create a new todo item\n          if (foundTodoList.todos.length < MAX_TODO_ITEMS) {\n            foundTodoList.todos.unshift(todo);\n            body.message = `Todo "${todo.id}" added to "${name}".`;\n            \n            await state.put(`todolist`, todoList, { ttl: -1 });\n          } else {\n            return errorResponse(400, `Max ${MAX_TODO_ITEMS} todos reached for "${name}".`, logger);\n          }\n        }\n      } else {\n        return errorResponse(400, `${name} not found.`, logger);\n      }\n    } else {\n      return errorResponse(400, `Todo is missing.`, logger);\n    }\n    break;\n\n  case \'delete\':\n    // Filter out the todo list to delete by name\n    const updatedTodoList = todoList.filter(({ name: todoListName }) => todoListName !== name);\n    \n    await state.put(`todolist`, updatedTodoList, { ttl: -1 });\n    \n    body.message = `"${name}" todo list deleted.`;\n    break;\n\n  default:\n    return errorResponse(400, \'CRUD operation not found\', logger);\n}\n\nreturn {\n  statusCode: 200,\n  body\n};\n')),(0,i.mdx)("p",null,"For every operation except ",(0,i.mdx)("inlineCode",{parentName:"p"},"read"),", we are using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"state.put()")," function to update the ",(0,i.mdx)("inlineCode",{parentName:"p"},"todolist")," value.\nAdditionally, we set the time to live option to ",(0,i.mdx)("inlineCode",{parentName:"p"},"-1")," so that the value of ",(0,i.mdx)("inlineCode",{parentName:"p"},"todolist")," won't expire."),(0,i.mdx)("p",null,"See the full action code ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/adobeio-samples-todoapp/blob/master/actions/todolist/index.js"},"here"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-todo-app-lesson-2-md-acd1fa2f16f77c7a10dc.js.map