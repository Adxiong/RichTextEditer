/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-12 23:39:39
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-12 23:42:37
 */
import { EditorState, RichUtils } from 'draft-js';
export default (
  editorState: EditorState,
  onChange: (newEditorState: EditorState) => void
) => {
  const handleClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'bold'));
  };
  return (
    <div onClick={handleClick}>
      <i>B</i>
      <span>加粗</span>
    </div>
  );
};
