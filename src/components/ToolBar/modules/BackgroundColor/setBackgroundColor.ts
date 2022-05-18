/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-05-17 19:55:07
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-18 17:14:26
 */

import { EditorState, Modifier } from "draft-js";

const setBackgroundColor = (editorState: EditorState, value: string): EditorState => {
  const lastStyle = editorState.getCurrentContent().getFirstBlock().toJS().data
  
  const newContentState = Modifier.setBlockData(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    {...lastStyle, 'background-color': value }
  );
  const newState = EditorState.push(
    editorState,
    newContentState,
    'change-block-data'
  );
  return newState;
};

export default setBackgroundColor ;