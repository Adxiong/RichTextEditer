/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-13 17:57:45
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-13 22:44:14
 */
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
    <div className={commonStyle.toolbarItem} onClick={handleClick}>
      <i className="iconfont icon-26quxiaochehui" />
      <span>重做</span>
    </div>
  );
};

export default Redo;
