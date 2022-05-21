/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-13 18:03:44
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-21 16:19:31
 */
import { ClearOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { EditorState, RichUtils } from 'draft-js';
import { BaseSyntheticEvent } from 'react';
import commonStyle from '../../common/commonToolbar.module.less';
interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}
const Unstyled = (props: Props) => {
  const { onChange, editorState } = props;
  const handleClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    onChange(RichUtils.toggleBlockType(editorState, 'unstyled'));
  };
  return (
    <div onMouseDown={handleClick}>
      <Button icon={<ClearOutlined />}>清除格式</Button>
    </div>
  );
};

export default Unstyled;
