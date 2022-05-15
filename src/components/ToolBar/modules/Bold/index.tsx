/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-12 23:39:39
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-15 11:41:59
 */
import { EditorState, RichUtils } from 'draft-js';
import { BaseSyntheticEvent } from 'react';
import { ToolbarParam } from '../../@types';
import commonStyle from '../../common/commonToolbar.module.less';
interface Props {
  editorState: EditorState;
  // key?: ToolbarParam;
  // onClick: (key: ToolbarParam) => void;
  onChange: (newEditorState: EditorState) => void;
}
const Bold = (props: Props) => {
  const { onChange, editorState } = props;
  const handleClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };
  return (
    <div className={commonStyle.toolbarItem} onMouseDown={handleClick}>
      <i className="iconfont icon-01jiacu" />
      <span>加粗</span>
    </div>
  );
};

export default Bold;
