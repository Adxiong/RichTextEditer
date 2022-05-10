/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-10 11:25:41
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-10 17:30:07
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
  toolbar?: DraftStyleMap;
}

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
        customStyleMap={props.toolbar}
        onChange={editorChange}
      ></DraftEditor>
    </div>
  );
};

export default Editor;
