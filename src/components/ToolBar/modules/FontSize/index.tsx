/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-16 13:49:04
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-16 21:35:19
 */
import { Button, Dropdown, Menu, MenuProps, Space } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { EditorState, RichUtils } from 'draft-js';
import { BaseSyntheticEvent, useCallback, useState } from 'react';
import commonStyle from '../../common/commonToolbar.module.less';
import {
  toggleCustomInlineStyle,
  getSelectionCustomInlineStyle,
} from 'draftjs-utils';
import { MenuClickEventHandler, MenuInfo } from 'rc-menu/lib/interface';
import {
  CaretDownOutlined,
  CaretUpOutlined,
  FontSizeOutlined,
} from '@ant-design/icons';
interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}

const FontSize = (props: Props) => {
  const { onChange, editorState } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const handleMenuClick = (info: MenuInfo) => {
    const newEditState = toggleCustomInlineStyle(
      editorState,
      'fontSize',
      Number(info.key)
    );
    onChange(newEditState);
  };

  const getCurrentFontSize = () => {
    const currentFontSize: string = getSelectionCustomInlineStyle(editorState, [
      'FONTSIZE',
    ]).FONTSIZE;

    if (currentFontSize) {
      return currentFontSize.substring(9);
    } else {
      return 16;
    }
  };

  const menuItem: ItemType[] = [
    { label: '8', key: 8 },
    { label: '9', key: 9 },
    { label: '10', key: 10 },
    { label: '11', key: 11 },
    { label: '12', key: 12 },
    { label: '14', key: 14 },
    { label: '16', key: 16 },
    { label: '18', key: 18 },
    { label: '20', key: 20 },
    { label: '24', key: 24 },
    { label: '30', key: 30 },
    { label: '36', key: 36 },
    { label: '48', key: 48 },
    { label: '60', key: 60 },
    { label: '72', key: 72 },
    { label: '96', key: 96 },
  ];
  const renderMenu = () => {
    return <Menu items={menuItem} onClick={handleMenuClick} />;
  };

  const renderArrow = useCallback(() => {
    return visible ? <CaretUpOutlined /> : <CaretDownOutlined />;
  }, [visible]);
  const handleVisibleChange = useCallback(
    (visible: boolean) => {
      setVisible(visible);
    },
    [visible]
  );
  return (
    <Dropdown overlay={renderMenu()} onVisibleChange={handleVisibleChange}>
      <Button
        style={{
          width: 80,
        }}
      >
        <Space>
          <FontSizeOutlined />
          {getCurrentFontSize()}
          {renderArrow()}
        </Space>
      </Button>
    </Dropdown>
  );
};

export default FontSize;
