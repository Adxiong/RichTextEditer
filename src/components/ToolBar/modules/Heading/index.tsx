/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-13 22:51:19
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-15 11:45:26
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
  const handleShowSubmenuClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();
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
  const handleSubmenuClick = (e: BaseSyntheticEvent, index: number) => {
    e.preventDefault();
    onChange(RichUtils.toggleBlockType(editorState, commandMap[index]));
  };
  return (
    <div className={commonStyle.toolbarItem}>
      <i className="iconfont icon-02xieti"></i>
      <span onMouseDown={handleShowSubmenuClick}>
        标题
        <i
          className={[
            'iconfont',
            `${showSubmenu ? 'icon-arrow-up' : 'icon-arrow-down'}`,
          ].join(' ')}
        />
      </span>
      {showSubmenu && (
        <div className={commonStyle.submenu}>
          {new Array(6).fill(1).map((item, index) => (
            <div
              className={commonStyle.submenuItem}
              onMouseDown={(e) => handleSubmenuClick(e, index + 1)}
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
