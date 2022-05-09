/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-09 23:00:09
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-09 23:51:52
 */
import { useState } from 'react';
import './App.css';
import 'draft-js/dist/Draft.css';
import {
  Editor,
  EditorState,
  EditorProps,
  convertFromHTML,
  convertFromRaw,
} from 'draft-js';
import HeadControls from './components/headControls/HeadControls';

function App() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const editorChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };
  const render = () => {
    console.log(editorState.getCurrentContent());
  };
  return (
    <div className="App">
      <HeadControls></HeadControls>
      <Editor editorState={editorState} onChange={editorChange}></Editor>
      <button onClick={render}>渲染</button>
    </div>
  );
}

export default App;
