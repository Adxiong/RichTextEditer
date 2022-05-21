/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-16 14:09:34
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-21 16:21:06
 */
import { UnderlineOutlined } from '@ant-design/icons';
import { Button } from 'antd';
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
    <div onMouseDown={handleClick}>
      <Button icon={<UnderlineOutlined />}>下划线</Button>
    </div>
  );
};

export default Underline;
