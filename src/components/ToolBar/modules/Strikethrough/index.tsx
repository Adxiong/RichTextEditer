/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-13 18:25:25
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-13 22:43:56
 */
import { EditorState, RichUtils } from 'draft-js';
import commonStyle from '../../common/commonToolbar.module.less';

interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}
const Strikethrough = (props: Props) => {
  // const handleDropClick = () => {};
  // const handleSubItemClick = () => {};
  // const subMenuRef = useRef<HTMLDivElement>(null);
  const { editorState, onChange } = props;
  const handleClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'strkethrough'));
  };
  return (
    <div className={commonStyle.toobarItem} onClick={handleClick}>
      <i className="iconfont icon-02xieti"></i>
      <span>删除线</span>
      {/* <span>标题</span>
        <i>^</i>
        <div ref={subMenuRef}>
          {new Array(6).fill(0).map((item, index) => {
            return (
              <div key={index}>
                <i></i>
                <span>h{index + 1}</span>
              </div>
            );
          })}
        </div> */}
    </div>
  );
};

export default Strikethrough;
