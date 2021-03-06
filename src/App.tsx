/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-09 23:00:09
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-20 15:46:22
 */
import { Button } from 'antd';
import { EditorState } from 'draft-js';
import { useState } from 'react';
import './App.css';
import decorator from './components/Editor/decoratar';
import Editor from './components/Editor/Editor';
import { ToolbarParam } from './components/ToolBar/@types';
import { convertToHTML } from 'draft-convert';

function App() {
  const toolbar: ToolbarParam[] = [
    'bold', //加粗
    'italic', //斜体
    'undo', //撤销
    'redo', //重做
    // 'indent', //首行缩进
    'underline', //下划线
    'strikethrough', //删除线
    'heading', // 标题
    // 'heading1', //标题1
    // 'heading2', //标题2
    // 'heading3', //标题3
    // 'heading4', //标题4
    // 'heading5', //标题5
    // 'heading6', //标题6
    'unstyled', //无样式
    'textalign',
    'list', //列表
    // 'paragraph', //段落
    // 'ol', //有序列表项
    // 'ul', //无序列表项
    'fontfamily',
    'fontsize',
    'fontcolor',
    'backgroundcolor',
    // 'blockquote', //块引用
    // 'atomic', //原子
    // 'line',
    'link',
    'image',
    'video',
  ];
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty(decorator)
  );
  const handleClick = () => {
    console.log(convertToHTML(editorState.getCurrentContent()));
  };
  return (
    <div className="App">
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        toolbar={toolbar}
      ></Editor>
      <Button onClick={handleClick}>daochu</Button>
    </div>
  );
}

export default App;
