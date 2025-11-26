Document (DOM) is an already determinated specific interface from typescript that extends all elements within the document whole object. It also detects so it can use methods.

lib.dom.d.ts has all the references to use these types when needed to manipulate DOM within typescript.

If you want to disable the default lib that inclues DOM types, check lib property.

Files ending in .d.ts are type declaration types.

HTML element type on DOM methods

- It's normally an union type that can be null that is there to prevent if doesn't find anything, such as in getElementById. You can use the question mark about being optional the existence of the HTML Element and typescript will accept.

Different approach in typescript: non-null assertion operation.

- You can use the exclamation mark after the DOM method call to say to typescript that it definitely exists.

Type Assertions

- When you use the alias "as", typescript will treat the data as the type asserted. It won't change the value per se.
- Per example, HTMLElements don't have a value, but HTMLInputElement has, so we can use the type assertion to guarantee that it will retrieve the right elements
