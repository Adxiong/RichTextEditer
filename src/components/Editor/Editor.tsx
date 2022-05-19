/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-10 11:25:41
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-19 22:44:29
 */

import {
  Editor as DraftEditor,
  EditorState,
  RichUtils,
  ContentBlock,
} from 'draft-js';
import { BaseSyntheticEvent, KeyboardEvent, useRef, useState } from 'react';
import 'draft-js/dist/Draft.css';
import ToolBar from '../ToolBar/ToolBar';
import Header from '../Header/Header';
import { ToolbarParam } from '../ToolBar/@types';
import './styles/index.css';
import { getCustomStyleMap } from 'draftjs-utils';
import handleKeyCommand from './handleKeyCommand';
import handleKeyBindingFn from './handleKeyBindingFn';
import customBlockStyleMap from './customBlockStyleMap';
import decorator from './decoratar';
import Media from './Entity/Media';
interface Props {
  toolbar?: ToolbarParam[];
}

const Editor = (props: Props) => {
  const editorRef = useRef<DraftEditor>(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(decorator)
  );

  const editorChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  const handleHeaderChange = (e: BaseSyntheticEvent) => {
    console.log(e.target.value);
  };
  const handleTab = (event: KeyboardEvent) => {
    setEditorState(RichUtils.onTab(event, editorState, 2));
  };

  const mediaBlockRenderer = (block: ContentBlock) => {
    if (block.getType() === 'atomic') {
      return {
        component: Media,
        editable: false,
      };
    }

    return null;
  };

  return (
    <div>
      <Header defaultValue="[无标题]" onChange={handleHeaderChange}></Header>
      <ToolBar
        toolbar={props.toolbar}
        editorState={editorState}
        onChange={editorChange}
      ></ToolBar>
      <DraftEditor
        ref={editorRef}
        editorState={editorState}
        placeholder={'请输入内容......'}
        handleKeyCommand={(command: string) =>
          handleKeyCommand(editorState, editorChange, command)
        }
        keyBindingFn={(e) => handleKeyBindingFn(e)}
        customStyleMap={getCustomStyleMap()}
        blockStyleFn={customBlockStyleMap}
        blockRendererFn={mediaBlockRenderer}
        onChange={editorChange}
        onTab={handleTab}
      ></DraftEditor>
    </div>
  );
};

export default Editor;
