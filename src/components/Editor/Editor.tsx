/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-10 11:25:41
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-16 17:18:04
 */

import {
  Editor as DraftEditor,
  EditorState,
  DraftStyleMap,
  RichUtils,
  ContentState,
  ContentBlock,
} from 'draft-js';
import {
  BaseSyntheticEvent,
  KeyboardEvent,
  ReactPropTypes,
  useCallback,
  useRef,
  useState,
} from 'react';
import 'draft-js/dist/Draft.css';
import ToolBar from '../ToolBar/ToolBar';
import Header from '../Header/Header';
import { ToolbarParam } from '../ToolBar/@types';
import './styles/index.css';
import { getCustomStyleMap } from 'draftjs-utils';
interface Props {
  toolbar?: ToolbarParam[];
}

// const customStyleMap: Record<string, any> = {
//   'Microsoft YaHei': {
//     fontFamily: 'Microsoft YaHei',
//   },

//   'Times New Roman': {
//     fontFamily: 'Times New Roman',
//   },

//   SimSun: {
//     fontFamily: 'SimSun',
//   },

//   'PingFang SC': {
//     fontFamily: 'PingFang SC',
//   },

//   STKaiti: {
//     fontFamily: 'STKaiti',
//   },

//   Arial: {
//     fontFamily: 'Arial',
//   },

//   Calibri: {
//     fontFamily: 'Calibri',
//   },

//   'Comic Sans MS': {
//     fontFamily: 'Comic Sans MS',
//   },

//   Verdana: {
//     fontFamily: 'Verdana',
//   },
//   'fontSize8': {
//     fontSize: 8
//   },
// 'fontSize9': {
//   fontSize: 9
// },
// 'fontSize10': {
//   fontSize: 10
// },
// 'fontSize11': {
//   fontSize: 11
// },
// 'fontSize12': {
//   fontSize: 12
// },
// 'fontSize14': {
//   fontSize: 14
// },
// 'fontSize16'
// 'fontSize18'
// 'fontSize20'
// 'fontSize24'
// 'fontSize30'
// 'fontSize36'
// 'fontSize48'
// 'fontSize60'
// 'fontSize72'
// 'fontSize96'
// };
const Editor = (props: Props) => {
  const editorRef = useRef<DraftEditor>(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [dymanicCssList, setDymanicCssList] = useState<string[]>([]);

  const editorChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  // const handleControlClick = (key: string, type: string) => {
  //   switch (type) {
  //     case 'inline':
  //       return setEditorState(
  //         RichUtils.toggleInlineStyle(editorState, DraftInlineStyleTypeMap[key])
  //       );
  //     case 'block':
  //       return setEditorState(
  //         RichUtils.toggleBlockType(editorState, DraftBlockStyleTypeMap[key])
  //       );
  //     case 'command':
  //       return setEditorState(EditorState[DraftCommandMap[key]](editorState));
  //   }
  // };
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
  const handleTab = (event: KeyboardEvent) => {
    setEditorState(RichUtils.onTab(event, editorState, 2));
  };

  const customBlockStyleMap = (contentBlock: ContentBlock) => {
    const metaData = contentBlock.toJS().data;

    const textIndent = metaData['text-indent'];
    const lineHeight = metaData['line-height'];
    const letterSpacing = metaData['letter-spacing'];
    const textAlign = metaData['text-align'];
    let className: string[] = [];
    textAlign && className.push(textAlign);
    textIndent && className.push(textIndent);
    lineHeight && className.push(lineHeight);
    return className.join(' ');
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
        handleKeyCommand={handleKeyCommand}
        customStyleMap={getCustomStyleMap()}
        blockStyleFn={customBlockStyleMap}
        // blockRendererFn={CustomDefineBlockStyleFn}
        onChange={editorChange}
        onTab={handleTab}
      ></DraftEditor>
    </div>
  );
};

export default Editor;
