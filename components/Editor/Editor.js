// "use client"
// import { MDXEditor, headingsPlugin } from "@mdxeditor/editor"
// const { MDXEditor , codeBlockPlugin, headingsPlugin, listsPlugin, linkPlugin, quotePlugin, markdownShortcutPlugin, useCodeBlockEditorContext } = await import('@mdxeditor/editor')


/**
* Extend this Component further with the necessary plugins or props you need.
* proxying the ref is necessary. Next.js dynamically imported components don't support refs.
*/

// const Editor = ({ markdown, editorRef }) => {
//   return (
//     <MDXEditor
//         onChange={console.log}
//         markdown={'Hello world!'}
//         plugins={[
//             codeBlockPlugin({ codeBlockEditorDescriptors: [PlainTextCodeEditorDescriptor] }),
//             headingsPlugin(),
//             listsPlugin(),
//             linkPlugin(),
//             quotePlugin(),
//             markdownShortcutPlugin()
//         ]}
//     />
//   )
// }

// export default Editor