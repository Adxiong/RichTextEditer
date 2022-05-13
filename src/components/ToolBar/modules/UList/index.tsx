/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-13 23:38:00
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-13 23:44:54
 */

import { RichUtils } from 'draft-js';
import commonStyle from '../../common/commonToolbar.module.less';

interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}

const UList = (props: Props) => {
  const { editorState, onChange } = props;
  const handleClick = () => {
    onChange(RichUtils.toggleBlockType(editorState, 'unordered-list-item'));
  };
  return (
    <div className={commonStyle.toolbarItem} onClick={handleClick}>
      <i className="iconfont icon-20xiangmufuhao"></i>
      <span>无序列表</span>
    </div>
  );
};

export default UList;
