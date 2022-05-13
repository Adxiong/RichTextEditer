/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-13 18:03:44
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-13 22:45:20
 */
import { EditorState, RichUtils } from 'draft-js';
import commonStyle from '../../common/commonToolbar.module.less';
interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}
const Unstyled = (props: Props) => {
  const { onChange, editorState } = props;
  const handleClick = () => {
    onChange(RichUtils.toggleBlockType(editorState, 'unstyled'));
  };
  return (
    <div className={commonStyle.toolbarItem} onClick={handleClick}>
      <i className="iconfont icon-25chehui" />
      <span>清除格式</span>
    </div>
  );
};

export default Unstyled;
