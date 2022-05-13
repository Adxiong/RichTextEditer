/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-12 23:39:39
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-13 22:44:54
 */
import { EditorState, RichUtils } from 'draft-js';
import commonStyle from '../../common/commonToolbar.module.less';
interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}
const Bold = (props: Props) => {
  const { onChange, editorState } = props;
  const handleClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };
  return (
    <div className={commonStyle.toolbarItem} onClick={handleClick}>
      <i className="iconfont icon-01jiacu" />
      <span>加粗</span>
    </div>
  );
};

export default Bold;
