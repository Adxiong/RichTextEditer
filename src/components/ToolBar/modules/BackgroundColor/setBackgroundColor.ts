/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-05-17 19:55:07
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-17 20:11:25
 */

import { EditorState, Modifier } from "draft-js";

const setBackgroundColor = (editorState: EditorState, value: string): EditorState => {
  const newContentState = Modifier.setBlockData(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    { 'background-color': value }
  );
  const newState = EditorState.push(
    editorState,
    newContentState,
    'change-block-data'
  );
  return newState;
};

export default setBackgroundColor ;