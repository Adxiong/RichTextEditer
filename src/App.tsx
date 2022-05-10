/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-09 23:00:09
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-10 23:00:09
 */
import './App.css';
import Editor from './components/Editor/Editor';

function App() {
  const toolbar = {
    bold: {
      fontWeight: 'bold',
    },
    italic: {
      fontStyle: 'italic',
    },
    red: {
      color: 'red',
    },
  };

  return (
    <div className="App">
      <Editor toolbar={toolbar}></Editor>
    </div>
  );
}

export default App;
