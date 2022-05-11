/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-10 11:25:41
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-11 23:41:53
 */

import {
  Editor as DraftEditor,
  EditorState,
  DraftStyleMap,
  RichUtils,
} from 'draft-js';
import { BaseSyntheticEvent, ReactPropTypes, useState } from 'react';
import 'draft-js/dist/Draft.css';
import ToolBar from '../ToolBar/ToolBar';
import { Input } from 'antd';
import Header from '../Header/Header';

interface Props {
  toolbar?: string[];
}
const customStyleMap: Record<string, any> = {};

const DraftInlineStyleTypeMap: Record<string, any> = {
  bold: 'BOLD',
  italic: 'ITALIC',
  strikethrough: 'STRIKETHROUGH',
  underline: 'UNDERLINE',
  code: 'CODE',
};

const DraftBlockStyleTypeMap: Record<string, any> = {
  //块级
  heading1: 'header-one',
  heading2: 'header-two',
  heading3: 'header-three',
  heading4: 'header-four',
  heading5: 'header-five',
  heading6: 'header-sex',
  unstyled: 'unstyled', //无样式
  paragraph: 'paragraph', //段落
  ul: 'unordered-list-item', //无序列表项
  ol: 'ordered-list-item', //有序列表项
  blockquote: 'blockquote', //块引用
  code: 'code-block', //代码块
  atomic: 'atomic', //原子
};

const Editor = (props: Props) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const editorChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };
  const handleControlClick = (key: string, type: string) => {
    switch (type) {
      case 'inline':
        return setEditorState(
          RichUtils.toggleInlineStyle(editorState, DraftInlineStyleTypeMap[key])
        );
      case 'block':
        return setEditorState(
          RichUtils.toggleBlockType(editorState, DraftBlockStyleTypeMap[key])
        );
    }
  };
  const handleKeyCommand = (command: string) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const handleHeaderChange = (e: BaseSyntheticEvent) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <Header defaultValue="[无标题]" onChange={handleHeaderChange}></Header>
      <ToolBar toolbar={props.toolbar} onClick={handleControlClick}></ToolBar>
      <DraftEditor
        editorState={editorState}
        placeholder={'请输入内容......'}
        handleKeyCommand={handleKeyCommand}
        // customStyleMap={customStyleMap}
        onChange={editorChange}
      ></DraftEditor>
    </div>
  );
};

export default Editor;
