/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-14 11:38:23
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-16 21:34:06
 */
import { Button, Dropdown, Menu, Modal, Space } from 'antd';
import { EditorState } from 'draft-js';
import { useCallback, useMemo, useState } from 'react';
import {
  toggleCustomInlineStyle,
  getSelectionCustomInlineStyle,
} from 'draftjs-utils';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';
interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}

const FontFamily = (props: Props) => {
  const { onChange, editorState } = props;
  const [visible, setVisible] = useState<boolean>(false);

  const handleClick = (info: MenuInfo) => {
    const newEditState = toggleCustomInlineStyle(
      editorState,
      'fontFamily',
      info.key
    );
    onChange(newEditState);
  };

  const fontFamilyArray = [
    { label: '微软雅黑', key: 'Microsoft YaHei' },
    { label: '新罗马', key: 'Times New Roman' },
    { label: '宋体', key: 'SimSun' },
    { label: '平方', key: 'PingFang SC' },
    { label: '楷体', key: 'kaiti' },
    { label: '华文楷体', key: 'STKaiti' },
    { label: 'Arial', key: 'Arial' },
    { label: 'Calibri', key: 'Calibri' },
    { label: 'Comic Sans MS', key: 'Comic Sans MS' },
    { label: 'Verdana', key: 'Verdana' },
  ];

  const fontFamilyMap = useMemo(() => {
    const data: Record<string, string> = {};
    fontFamilyArray.map((item) => {
      data[item.key] = item.label;
    });
    return data;
  }, []);

  const getCurrentFontFamily = () => {
    const currentFontFamily: string = getSelectionCustomInlineStyle(
      editorState,
      ['FONTFAMILY']
    ).FONTFAMILY;
    if (currentFontFamily) {
      return fontFamilyMap[currentFontFamily.substring(11)];
    } else {
      return '楷体';
    }
  };
  const renderMenu = () => {
    return <Menu items={fontFamilyArray} onClick={handleClick}></Menu>;
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
      <Button style={{ width: 100 }}>
        <Space>
          {getCurrentFontFamily()}
          {renderArrow()}
        </Space>
      </Button>
    </Dropdown>
  );
};

export default FontFamily;
