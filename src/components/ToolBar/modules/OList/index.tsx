import { EditorState, RichUtils } from 'draft-js';

/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-13 23:36:59
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-13 23:45:47
 */

import commonStyle from '../../common/commonToolbar.module.less';

interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}

const OList = (props: Props) => {
  const { editorState, onChange } = props;
  const handleClick = () => {
    onChange(RichUtils.toggleBlockType(editorState, 'ordered-list-item'));
  };
  return (
    <div className={commonStyle.toolbarItem} onClick={handleClick}>
      <i className="iconfont icon-20xiangmufuhao"></i>
      <span>有序列表</span>
    </div>
  );
};

export default OList;
