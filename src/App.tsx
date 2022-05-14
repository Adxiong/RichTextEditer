/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-09 23:00:09
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-14 09:48:30
 */
import './App.css';
import Editor from './components/Editor/Editor';
import { ToolbarParam } from './components/ToolBar/@types';

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
    'list', //列表
    // 'paragraph', //段落
    // 'ol', //有序列表项
    // 'ul', //无序列表项
    'fontfamile',
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

  return (
    <div className="App">
      <Editor toolbar={toolbar}></Editor>
    </div>
  );
}

export default App;
