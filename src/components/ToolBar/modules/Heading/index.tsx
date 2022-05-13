/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-13 22:51:19
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-13 23:34:24
 */
import { EditorState, RichUtils } from 'draft-js';
import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import commonStyle from '../../common/commonToolbar.module.less';
interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}

const Heading = (props: Props) => {
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
  const { editorState, onChange } = props;
  const handleShowSubmenuClick = () => {
    setShowSubmenu(!showSubmenu);
  };
  const commandMap = [
    'header-one',
    'header-two',
    'header-three',
    'header-four',
    'header-five',
    'header-six',
  ];
  const handleSubmenuClick = (index: number) => {
    onChange(RichUtils.toggleBlockType(editorState, commandMap[index]));
  };
  return (
    <div className={commonStyle.toolbarItem}>
      <i className="iconfont icon-02xieti"></i>
      <span onClick={handleShowSubmenuClick}>标题^</span>
      {showSubmenu && (
        <div className={commonStyle.submenu}>
          {new Array(6).fill(1).map((item, index) => (
            <div
              className={commonStyle.submenuItem}
              onClick={() => handleSubmenuClick(index + 1)}
              key={index}
            >
              <i
                className={[
                  'iconfont',
                  `icon-1${3 + index}biaoti${index + 1}`,
                ].join(' ')}
              ></i>
              <span>h{index + 1}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Heading;
