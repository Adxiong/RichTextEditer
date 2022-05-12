/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-05-12 22:29:54
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-12 22:39:31
 */

import { EditorState, RichUtils } from "draft-js";

export default (editorState: EditorState, url: string) => {
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity('link', 'MUTABLE', url);
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
  return RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey);
}