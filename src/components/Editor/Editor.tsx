/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-10 11:25:41
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-10 23:44:45
 */

import {
  Editor as DraftEditor,
  EditorState,
  DraftStyleMap,
  RichUtils,
} from 'draft-js';
import { ReactPropTypes, useState } from 'react';
import 'draft-js/dist/Draft.css';
import ToolBar from '../ToolBar/ToolBar';

interface Props {
  toolbar?: Record<string, any>;
}
const customStyleMap = {
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
};
const Editor = (props: Props) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const editorChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };
  const handleControlClick = (key: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, key));
  };

  return (
    <div>
      <ToolBar toolbar={props.toolbar} onClick={handleControlClick}></ToolBar>
      <DraftEditor
        editorState={editorState}
        customStyleMap={customStyleMap}
        onChange={editorChange}
      ></DraftEditor>
    </div>
  );
};

export default Editor;
