import { EditorState, RichUtils } from 'draft-js';
import { setTextAlign } from '../ToolBar/modules/TextAlign/utils';

/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-17 11:40:58
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-17 11:54:10
 */
const handleKeyCommand = (
  editorState: EditorState,
  editorChange: (editorState: EditorState) => void,
  command: string
) => {
  let newState: EditorState | null;
  switch (command) {
    case 'textAlign-center': {
      newState = setTextAlign(editorState, 'text-align-center');
      break;
    }
    case 'textAlign-left': {
      newState = setTextAlign(editorState, 'text-align-left');
      break;
    }
    case 'textAlign-right': {
      newState = setTextAlign(editorState, 'text-align-right');
      break;
    }
    case 'textAlign-justify': {
      newState = setTextAlign(editorState, 'text-align-justify');
      break;
    }
    default: {
      newState = RichUtils.handleKeyCommand(editorState, command);
    }
  }
  if (newState) {
    editorChange(newState);
    return 'handled';
  }
  return 'not-handled';
};

export default handleKeyCommand;
