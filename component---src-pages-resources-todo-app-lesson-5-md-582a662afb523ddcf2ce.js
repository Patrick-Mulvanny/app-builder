"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[8029],{52780:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return s}});var n=a(87462),o=a(63366),i=(a(15007),a(64983)),l=a(91515),m=["components"],r={},p={_frontmatter:r},d=l.Z;function s(e){var t=e.components,a=(0,o.Z)(e,m);return(0,i.mdx)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",null,"Lesson 5: Setup the TodoList component"),(0,i.mdx)("p",null,"In this lesson, we'll create a TodoList React component that will be able to: "),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Create a new Todo item."),(0,i.mdx)("li",{parentName:"ul"},"Delete the whole todo list. "),(0,i.mdx)("li",{parentName:"ul"},"Display Todo items we have built in the previous lesson.  ")),(0,i.mdx)("p",null,"We'll create the React component file under ",(0,i.mdx)("inlineCode",{parentName:"p"},"web-src/src/components/")," and name it ",(0,i.mdx)("inlineCode",{parentName:"p"},"TodoList.js"),"."),(0,i.mdx)("h2",{id:"import-react-spectrum-components"},"Import React Spectrum components"),(0,i.mdx)("p",null,"This component will make use of several React Spectrum components: "),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://react-spectrum.adobe.com/react-spectrum/View.html"},"View")," a generic container."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://react-spectrum.adobe.com/react-spectrum/Well.html"},"Well")," a generic pre-styled container which will contain the todo list."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://react-spectrum.adobe.com/react-spectrum/Flex.html"},"Flex")," for the layout."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://react-spectrum.adobe.com/react-spectrum/Form.html"},"Form")," to submit the todo."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://react-spectrum.adobe.com/react-spectrum/TextField.html"},"TextField")," the input field for the todo value."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://react-spectrum.adobe.com/react-spectrum/ActionButton.html"},"ActionButton")," to trigger form submission."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://react-spectrum.adobe.com/react-spectrum/AlertDialog.html"},"AlertDialog")," to warn the user before deleting a todo list."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html"},"DialogTrigger")," to open the AlertDialog.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import { View, Flex, Form, TextField, ActionButton, AlertDialog, DialogTrigger, Well } from '@adobe/react-spectrum';\n")),(0,i.mdx)("h2",{id:"component-properties"},"Component properties"),(0,i.mdx)("p",null,"The component will accept 3 properties:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"todoList")," which corresponds to the todo list object which holds the todo list name and todo items.  "),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onDelete")," the callback function to delete a todo list."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onUpdate")," the callback function to update a todo list.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"function TodoList({ todoList, onDelete, onUpdate }) {\n  const { name, todos } = todoList;\n  // ...\n}\n")),(0,i.mdx)("h2",{id:"spectrum-icons"},"Spectrum Icons"),(0,i.mdx)("p",null,"We'll add ",(0,i.mdx)("a",{parentName:"p",href:"https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html"},"React Spectrum Workflow Icons")," to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"TodoList")," component. The icons are simply SVGs packed as React components.",(0,i.mdx)("br",{parentName:"p"}),"\n","To import icons, you have to install the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@spectrum-icons/workflow")," dependency. It's pre-installed if you initialize the App Builder app with the React Spectrum template."),(0,i.mdx)("p",null,"Each icon has to be imported individually with a single statement."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import TaskList from '@spectrum-icons/workflow/TaskList';\nimport Close from '@spectrum-icons/workflow/Close';\nimport Add from '@spectrum-icons/workflow/Add';\n")),(0,i.mdx)("p",null,"A ",(0,i.mdx)("a",{parentName:"p",href:"https://spectrum.adobe.com/page/icons/"},"searchable list of workflow icons")," is available on the Spectrum website. The name of the icon without any whitespace matches the import in React Spectrum.  "),(0,i.mdx)("h2",{id:"displaying-the-todo-list-name"},"Displaying the todo list name"),(0,i.mdx)("p",null,"React Spectrum has made available a set of components and keeps delivering new components with every release. Unfortunately, some components are not available yet in React Spectrum but available in ",(0,i.mdx)("a",{parentName:"p",href:"https://opensource.adobe.com/spectrum-css/"},"Spectrum CSS")," which is the CSS framework used by React Spectrum to style components.\nLuckily for us, we can use React Spectrum together with Spectrum CSS to fill the gap of missing components."),(0,i.mdx)("p",null,"In this case, we're going to install the ",(0,i.mdx)("a",{parentName:"p",href:"https://opensource.adobe.com/spectrum-css/typography.html"},"Spectrum CSS Typography")," dependency to render Spectrum headings.\nSince React Spectrum already defines the Spectrum CSS variables, you'll only need to install the Spectrum CSS Typography package."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"npm i --save @spectrum-css/typography\n")),(0,i.mdx)("p",null,"Then you can simply import the CSS with:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import '@spectrum-css/typography';\n")),(0,i.mdx)("p",null,"Now you can use the Spectrum CSS Heading classes to render the todo list name."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'<h2 className="spectrum-Heading spectrum-Heading--sizeM spectrum-Heading--serif">{name}</h2>\n')),(0,i.mdx)("h2",{id:"rendering-todo-items"},"Rendering todo items"),(0,i.mdx)("p",null,"Once again, we're going to use the ",(0,i.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-state.html"},"State hook")," ",(0,i.mdx)("inlineCode",{parentName:"p"},"useState")," to declare a state variable which will hold a list of todo items.\nThis list will be updated whenever a new todo item is created. By default, it's initialized with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"todos")," from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"todoList")," prop. "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const [todoItems, setTodoItems] = useState(todos);\n")),(0,i.mdx)("p",null,"Next we'll iterate over the ",(0,i.mdx)("inlineCode",{parentName:"p"},"todoItems")," array using the ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"},"map()")," function to render each item as ",(0,i.mdx)("inlineCode",{parentName:"p"},"Todo")," component."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'<View marginTop="size-100">\n  {todoItems.map((todo) => (\n    <Todo key={todo.id} name={name} todo={todo} onUpdate={onUpdate} />\n  ))}\n</View>\n')),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"key")," property is necessary in React to uniquely identify the todo item. In this case, we use the todo id.\nYou can read more about React lists and keys ",(0,i.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/lists-and-keys.html"},"here"),"."),(0,i.mdx)("p",null,"We're also passing the ",(0,i.mdx)("inlineCode",{parentName:"p"},"name"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"todo")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"onUpdate")," props down to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Todo")," component.      "),(0,i.mdx)("h2",{id:"creating-a-todo-item"},"Creating a todo item"),(0,i.mdx)("p",null,"If you remember in ",(0,i.mdx)("a",{parentName:"p",href:"lesson2.md"},"lesson 2"),", we defined a ",(0,i.mdx)("inlineCode",{parentName:"p"},"MAX_TODO_ITEMS")," value within a global configuration file ",(0,i.mdx)("inlineCode",{parentName:"p"},"defaults.json")," at the root of the App Builder App."),(0,i.mdx)("p",null,"We'll use it to block the user from creating too many todo items inside a todo list. We can import the value similarly to what we have done in the Runtime action."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import { MAX_TODO_ITEMS } from '../../defaults.json';\n")),(0,i.mdx)("p",null,"Then we're going to use the ",(0,i.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"React hook")," ",(0,i.mdx)("inlineCode",{parentName:"p"},"useState")," again to bind it to the TextField to create a new todo item similarly to the previous lesson. "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const [newTodo, setNewTodo] = useState('');\n")),(0,i.mdx)("p",null,"This time we're going to disable the input once we reach the count of ",(0,i.mdx)("inlineCode",{parentName:"p"},"MAX_TODO_ITEMS")," by setting the ",(0,i.mdx)("inlineCode",{parentName:"p"},"isDisabled")," prop."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'<TextField\n  autoComplete="off"\n  isDisabled={todoItems.length >= MAX_TODO_ITEMS}\n  aria-label="New todo"\n  width="100%"\n  value={newTodo}\n  onChange={(value) => {\n    setNewTodo(value);\n  }}\n  placeholder="Todo"\n  minLength={1}\n  maxLength={140}\n/>\n<ActionButton type="submit" isDisabled={todoItems.length >= MAX_TODO_ITEMS}>\n  <Add />\n</ActionButton>\n')),(0,i.mdx)("p",null,"Finally, we'll wrap the ",(0,i.mdx)("inlineCode",{parentName:"p"},"TextField")," and the submit ",(0,i.mdx)("inlineCode",{parentName:"p"},"ActionButton")," with a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Form")," component so that we can invoke the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onUpdate")," callback function on form submission.\nWe'll prevent the default form submission behavior with ",(0,i.mdx)("inlineCode",{parentName:"p"},"event.preventDefault()")," and create a new todo item object that we pass to the callback function.\nAdditionally, we're clearing the value of ",(0,i.mdx)("inlineCode",{parentName:"p"},"TextField"),".  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"<Form\n  onSubmit={async (event) => {\n    event.preventDefault();\n\n    const index = todoItems.length;\n    const newTodoItem = { name, id: index, value: newTodo, done: false };\n    setTodoItems([newTodoItem, ...todoItems]);\n    setNewTodo('');\n\n    onUpdate && (await onUpdate(name, newTodoItem));\n  }}>\n")),(0,i.mdx)("h3",{id:"deleting-a-todo-list"},"Deleting a todo list"),(0,i.mdx)("p",null,"Next to the todo list name, we'll add a trigger to delete the list. The trigger will open an ",(0,i.mdx)("inlineCode",{parentName:"p"},"AlertDialog")," to warn the user about the destructive action.\nConfirming the operation will simply call the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onDelete")," callback function passing it the ",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," of the todo list. The dialog will close itself automatically.  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'<DialogTrigger>\n    <ActionButton isQuiet>\n      <Close />\n    </ActionButton>\n    <AlertDialog\n      title="Clear todo list"\n      variant="destructive"\n      primaryActionLabel="Delete"\n      secondaryActionLabel="Cancel"\n      onPrimaryAction={async () => {\n        onDelete && (await onDelete(name));\n      }}>\n      This action will clear the todo list <strong>{name}</strong>. Are you sure you want to continue ?\n    </AlertDialog>\n</DialogTrigger>\n')),(0,i.mdx)("h2",{id:"full-component"},"Full component"),(0,i.mdx)("p",null,"Finally, we'll wrap the whole component inside a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Well")," and use the Flex layout to vertically align the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Todo")," items."),(0,i.mdx)("p",null,"See the full component code ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/adobeio-samples-todoapp/blob/master/web-src/src/components/TodoList.js"},"here"),"."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"578px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"170.3125%",position:"relative",bottom:"0",left:"0",display:"block"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/4b62c399ea23e48390c508b2e54d54d7/5530d/todolist.webp 320w","/app-builder/static/4b62c399ea23e48390c508b2e54d54d7/9cd87/todolist.webp 578w"],sizes:"(max-width: 578px) 100vw, 578px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/4b62c399ea23e48390c508b2e54d54d7/dd4a7/todolist.png 320w","/app-builder/static/4b62c399ea23e48390c508b2e54d54d7/8c7b4/todolist.png 578w"],sizes:"(max-width: 578px) 100vw, 578px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/4b62c399ea23e48390c508b2e54d54d7/8c7b4/todolist.png",alt:"App",title:"App",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-todo-app-lesson-5-md-582a662afb523ddcf2ce.js.map