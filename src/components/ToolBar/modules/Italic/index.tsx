/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-13 17:14:57
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-15 11:45:59
 */
import { EditorState, RichUtils } from 'draft-js';
import { BaseSyntheticEvent } from 'react';
import commonStyle from '../../common/commonToolbar.module.less';
interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}
const Italic = (props: Props) => {
  const { onChange, editorState } = props;
  const handleClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    onChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };
  return (
    <div className={commonStyle.toolbarItem} onMouseDown={handleClick}>
      <i className="iconfont icon-02xieti" />
      <span>斜体</span>
    </div>
  );
};

export default Italic;
