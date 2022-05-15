/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-14 09:29:36
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-15 11:46:31
 */

import { EditorState, RichUtils } from 'draft-js';
import { BaseSyntheticEvent, useState } from 'react';
import commonStyle from '../../common/commonToolbar.module.less';

interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}

interface SubmenuMapType {
  title: string;
  icon: string;
  command: string;
}

const List = (props: Props) => {
  const { onChange, editorState } = props;
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
  const handleShowSubmenuClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setShowSubmenu(!showSubmenu);
  };
  const submenuMap: SubmenuMapType[] = [
    {
      title: '有序列表',
      icon: 'icon-youxuliebiao',
      command: 'ordered-list-item',
    },
    {
      title: '无序列表',
      icon: 'icon-wuxuliebiao',
      command: 'unordered-list-item',
    },
  ];

  const handleSubmenuClick = (e: BaseSyntheticEvent, command: string) => {
    e.preventDefault();
    onChange(RichUtils.toggleBlockType(editorState, command));
  };
  return (
    <div className={commonStyle.toolbarItem}>
      <i className="iconfont icon-liebiao"></i>
      <span onMouseDown={handleShowSubmenuClick}>
        列表
        <i
          className={[
            'iconfont',
            `${showSubmenu ? 'icon-arrow-up' : 'icon-arrow-down'}`,
          ].join(' ')}
        />
      </span>
      {showSubmenu && (
        <div className={commonStyle.submenu}>
          {submenuMap.map((item: SubmenuMapType, index: number) => (
            <div
              className={commonStyle.submenuItem}
              onMouseDown={(e) => handleSubmenuClick(e, item.command)}
              key={index}
            >
              <i className={['iconfont', `${item.icon}`].join(' ')}></i>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
