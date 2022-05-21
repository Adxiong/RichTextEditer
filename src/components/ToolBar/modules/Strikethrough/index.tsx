/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-13 18:25:25
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-21 16:21:52
 */
import { StrikethroughOutlined } from '@ant-design/icons';
import { Button } from 'antd';
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
    <div onMouseDown={handleClick}>
      <Button icon={<StrikethroughOutlined />}>删除线</Button>
    </div>
  );
};

export default Strikethrough;
