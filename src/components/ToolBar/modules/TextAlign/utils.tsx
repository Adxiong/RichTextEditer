/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-17 11:33:43
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-18 17:22:04
 */
import { EditorState, Modifier } from 'draft-js';

const setTextAlign = (editorState: EditorState, value: string): EditorState => {
  const lastStyle = editorState.getCurrentContent().getFirstBlock().toJS().data;

  const newContentState = Modifier.setBlockData(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    { ...lastStyle, 'text-align': value }
  );
  const newState = EditorState.push(
    editorState,
    newContentState,
    'change-block-data'
  );
  return newState;
};

export { setTextAlign };
