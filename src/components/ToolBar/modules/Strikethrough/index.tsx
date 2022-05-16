/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-13 18:25:25
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-16 17:31:22
 */
import { EditorState, RichUtils } from 'draft-js';
import { BaseSyntheticEvent } from 'react';
import commonStyle from '../../common/commonToolbar.module.less';

interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}
const Strikethrough = (props: Props) => {
  const { editorState, onChange } = props;

  const handleClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    onChange(RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH'));
  };
  return (
    <div className={commonStyle.toolbarItem} onMouseDown={handleClick}>
      <i className="iconfont icon-04shanchuxian"></i>
      <span>删除线</span>
    </div>
  );
};

export default Strikethrough;
