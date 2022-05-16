/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-16 14:09:34
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-16 17:31:27
 */
import { EditorState, RichUtils } from 'draft-js';
import { BaseSyntheticEvent } from 'react';
import commonStyle from '../../common/commonToolbar.module.less';

interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}
const Underline = (props: Props) => {
  const { editorState, onChange } = props;

  const handleClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };
  return (
    <div className={commonStyle.toolbarItem} onMouseDown={handleClick}>
      <i className="iconfont icon-03xiahuaxian"></i>
      <span>下划线</span>
    </div>
  );
};

export default Underline;
