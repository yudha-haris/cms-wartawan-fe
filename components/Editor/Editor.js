import React, { useRef } from "react";
import { MDXEditor } from "@mdxeditor/editor/MDXEditor";
import { UndoRedo } from "@mdxeditor/editor/plugins/toolbar/components/UndoRedo";
import { BoldItalicUnderlineToggles } from "@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles";
import { toolbarPlugin } from "@mdxeditor/editor/plugins/toolbar";
import { BlockTypeSelect } from "@mdxeditor/editor/plugins/toolbar/components/BlockTypeSelect";
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
            <div className="flex w-full px-4">
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <BlockTypeSelect />
            </div>
          ),
        }),
      ]
      }
      ref={ref}
      onChange={onChange}
      contentEditableClassName="prose"
    />
  );
};

export default Editor;