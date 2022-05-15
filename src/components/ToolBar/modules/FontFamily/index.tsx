/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-14 11:38:23
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-15 12:12:04
 */
import { Modal, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import { EditorState, RichUtils } from 'draft-js';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import commonStyle from '../../common/commonToolbar.module.less';

interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}

interface FontFamilyType {
  label: string;
  value: string;
}

const FontFamily = (props: Props) => {
  const { onChange, editorState } = props;
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
  const handleClick = (e: BaseSyntheticEvent, value: string) => {
    e.preventDefault();
    onChange(RichUtils.toggleInlineStyle(editorState, value));
  };

  const handleSubmenuClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    setShowSubmenu(!showSubmenu);
  };

  const fontFamilyArray: FontFamilyType[] = [
    { label: '微软雅黑', value: 'Microsoft YaHei' },
    { label: '新罗马', value: 'Times New Roman' },
    { label: '宋体', value: 'SimSun' },
    { label: '平方', value: 'PingFang SC' },
    { label: '华文楷体', value: 'STKaiti' },
    { label: 'Arial', value: 'Arial' },
    { label: 'Calibri', value: 'Calibri' },
    { label: 'Comic Sans MS', value: 'Comic Sans MS' },
    { label: 'Verdana', value: 'Verdana' },
  ];
  return (
    <div className={commonStyle.toolbarItem}>
      <i className="iconfont icon-font-size"></i>
      <span onMouseDown={handleSubmenuClick}>
        字体
        <i
          className={[
            'iconfont',
            `${showSubmenu ? 'icon-arrow-up' : 'icon-arrow-down'}`,
          ].join(' ')}
        />
      </span>
      {showSubmenu && (
        <div className={commonStyle.submenu}>
          {fontFamilyArray.map((item) => (
            <div
              key={item.label}
              className={commonStyle.submenuItem}
              onMouseDown={(e) => handleClick(e, item.value)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FontFamily;
