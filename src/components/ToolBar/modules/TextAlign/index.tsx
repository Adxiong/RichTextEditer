/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-14 21:59:43
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-15 12:29:04
 */
import { EditorState, RichUtils, convertToRaw } from 'draft-js';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { ToolbarParam } from '../../@types';
import commonStyle from '../../common/commonToolbar.module.less';
interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}
interface AlignType {
  label: string;
  value: string;
  icon: string;
}
const TextAlign = (props: Props) => {
  const { editorState, onChange } = props;
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
  const handleSubmenuClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setShowSubmenu(!showSubmenu);
  };
  useEffect(() => {
    console.log(convertToRaw(editorState.getCurrentContent()));
  });
  const handleClick = (e: BaseSyntheticEvent, value: string) => {
    e.preventDefault();
    console.log(
      convertToRaw(
        RichUtils.toggleBlockType(editorState, value).getCurrentContent()
      )
    );

    onChange(RichUtils.toggleBlockType(editorState, value));
  };

  const align: AlignType[] = [
    {
      label: '左对齐',
      value: 'justifyContentLeft',
      icon: 'icon-09zuoduiqi',
    },
    {
      label: '右对齐',
      value: 'justifyContentRight',
      icon: 'icon-10youduiqi',
    },
    {
      label: '居中对齐',
      value: 'justifyContentCenter',
      icon: 'icon-11juzhongduiqi',
    },
    {
      label: '两端对齐',
      value: 'justifyContentSpaceAround',
      icon: 'icon-12liangduanduiqi',
    },
  ];
  return (
    <div className={commonStyle.toolbarItem}>
      <i className="iconfont icon-11juzhongduiqi"></i>
      <span onMouseDown={handleSubmenuClick}>
        对齐{' '}
        <i
          className={[
            'iconfont',
            `${showSubmenu ? 'icon-arrow-up' : 'icon-arrow-down'}`,
          ].join(' ')}
        />
      </span>
      {showSubmenu && (
        <div className={commonStyle.submenu}>
          {align.map((item) => (
            <div
              key={item.label}
              className={commonStyle.submenuItem}
              onMouseDown={(e) => handleClick(e, item.value)}
            >
              <i className={['iconfont ', `${item.icon}`].join(' ')}></i>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TextAlign;
