/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-13 17:51:22
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-13 22:43:35
 */
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
    <div className={commonStyle.toolbarItem} onClick={handleClick}>
      <i className="iconfont icon-25chehui" />
      <span>撤销</span>
    </div>
  );
};
export default Undo;
