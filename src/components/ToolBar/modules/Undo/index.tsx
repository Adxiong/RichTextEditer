/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-13 17:51:22
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-21 16:15:12
 */
import { UndoOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { EditorState } from 'draft-js';
import commonStyle from '../../common/commonToolbar.module.less';
interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}
const Undo = (props: Props) => {
  const { onChange, editorState } = props;
  const handleClick = () => {
    onChange(EditorState.undo(editorState));
  };
  return (
    <div onClick={handleClick}>
      <Button icon={<UndoOutlined />}>撤销</Button>
    </div>
  );
};
export default Undo;
