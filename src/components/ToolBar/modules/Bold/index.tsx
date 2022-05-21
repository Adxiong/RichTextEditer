/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-12 23:39:39
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-21 16:20:00
 */
import { BoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { EditorState, RichUtils } from 'draft-js';
import { BaseSyntheticEvent } from 'react';
import { ToolbarParam } from '../../@types';
import commonStyle from '../../common/commonToolbar.module.less';
interface Props {
  editorState: EditorState;
  // key?: ToolbarParam;
  // onClick: (key: ToolbarParam) => void;
  onChange: (newEditorState: EditorState) => void;
}
const Bold = (props: Props) => {
  const { onChange, editorState } = props;
  const handleClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };
  return (
    <div onMouseDown={handleClick}>
      <Button icon={<BoldOutlined />}>加粗</Button>
    </div>
  );
};

export default Bold;
