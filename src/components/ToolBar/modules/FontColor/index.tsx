/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-17 16:01:56
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-21 17:00:23
 */
import { Button, Dropdown, Space } from 'antd';
import { EditorState } from 'draft-js';
import PickerColor from '../PickerColor/PickerColor';
import {
  getSelectionCustomInlineStyle,
  toggleCustomInlineStyle,
} from 'draftjs-utils';
import { useCallback, useState } from 'react';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}
const FontColor = (props: Props) => {
  const { editorState, onChange } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const handleColorClick = (color: string) => {
    const newEditorState = toggleCustomInlineStyle(
      editorState,
      'color',
      `#${color}`
    );
    onChange(newEditorState);
  };

  const getCurrentFontColor = () => {
    const currentFontColor: string = getSelectionCustomInlineStyle(
      editorState,
      ['COLOR']
    ).COLOR;

    if (currentFontColor) {
      return currentFontColor.substring(6);
    } else {
      return '#000000';
    }
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
    <Dropdown
      overlay={() => <PickerColor onClick={handleColorClick}></PickerColor>}
      onVisibleChange={handleVisibleChange}
    >
      <Button>
        <Space>
          字体颜色
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: getCurrentFontColor(),
            }}
          ></div>
          {renderArrow()}
        </Space>
      </Button>
    </Dropdown>
  );
};

export default FontColor;
