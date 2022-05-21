/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-13 17:14:57
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-21 16:20:36
 */
import { ItalicOutlined } from '@ant-design/icons';
import { Button } from 'antd';
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
    <div onMouseDown={handleClick}>
      <Button icon={<ItalicOutlined />}>斜体</Button>
    </div>
  );
};

export default Italic;
