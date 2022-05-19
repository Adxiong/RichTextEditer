/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-18 17:45:09
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-18 17:50:17
 */
import { Button } from 'antd';
import { EditorState } from 'draft-js';

interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}

const Video = (props: Props) => {
  return (
    <div>
      <Button>添加视频</Button>
    </div>
  );
};

export default Video;
