/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-09 23:00:09
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-10 23:56:24
 */
import './App.css';
import Editor from './components/Editor/Editor';

function App() {
  const toolbar = {
    bold: {
      icon: 'icon-01jiacu',
      title: '粗体',
    },
    italic: {
      icon: 'I',
      title: '斜体',
    },
    red: {
      icon: '👀',
      title: '颜色',
    },
  };

  return (
    <div className="App">
      <Editor toolbar={toolbar}></Editor>
    </div>
  );
}

export default App;
