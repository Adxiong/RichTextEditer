/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-14 09:29:36
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-21 16:59:15
 */

import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';
import { EditorState, RichUtils } from 'draft-js';
import { MenuInfo } from 'rc-menu/lib/interface';
import { BaseSyntheticEvent, useCallback, useState } from 'react';
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
  const [visible, setVisible] = useState<boolean>(false);

  const handleClick = (info: MenuInfo) => {
    onChange(RichUtils.toggleBlockType(editorState, info.key));
  };
  const renderArrow = useCallback(() => {
    return visible ? <CaretUpOutlined /> : <CaretDownOutlined />;
  }, [visible]);

  const MenuItems = [
    { label: '有序列表', key: 'ordered-list-item' },
    { label: '无序列表', key: 'unordered-list-item' },
  ];
  const renderMenu = () => {
    return <Menu items={MenuItems} onClick={handleClick}></Menu>;
  };

  const getCurrentListType = () => {
    const entityKey = editorState.getSelection().getAnchorKey();
    const type = editorState
      .getCurrentContent()
      .getBlockForKey(entityKey)
      .getType();
    if (type) {
      for (let i = 0; i < MenuItems.length; i++) {
        if (MenuItems[i].key == type) {
          return MenuItems[i].label;
        }
      }
    }
    return '列表';
  };
  return (
    <div className={commonStyle.toolbarItem}>
      <Dropdown overlay={renderMenu()}>
        <Button>
          {getCurrentListType()}
          {renderArrow()}
        </Button>
      </Dropdown>
    </div>
  );
};

export default List;
