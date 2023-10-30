import React, { useRef } from "react";
import { MDXEditor } from "@mdxeditor/editor/MDXEditor";
import { UndoRedo } from "@mdxeditor/editor/plugins/toolbar/components/UndoRedo";
import { BoldItalicUnderlineToggles } from "@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles";
import { toolbarPlugin } from "@mdxeditor/editor/plugins/toolbar";
import "@mdxeditor/editor/style.css";

const Editor = ({ contents, onChange = "", className }) => {
  const ref = useRef();

  return (
    <MDXEditor
      className={className}
      markdown={contents}
      plugins={onChange && [
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
            </>
          ),
        }),
      ]
      }
      ref={ref}
      onChange={onChange}
    />
  );
};

export default Editor;