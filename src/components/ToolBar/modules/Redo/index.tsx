/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-13 17:57:45
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-21 16:16:53
 */
import { RedoOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { EditorState } from 'draft-js';
import commonStyle from '../../common/commonToolbar.module.less';
interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}
const Redo = (props: Props) => {
  const { onChange, editorState } = props;
  const handleClick = () => {
    onChange(EditorState.redo(editorState));
  };
  return (
    <div onClick={handleClick}>
      <Button icon={<RedoOutlined />}>重做</Button>
    </div>
  );
};

export default Redo;
