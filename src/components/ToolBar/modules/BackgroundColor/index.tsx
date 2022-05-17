import { EditorState } from 'draft-js';
import { useCallback, useState } from 'react';
import { getSelectedBlocksMetadata } from 'draftjs-utils';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import PickerColor from '../PickerColor/PickerColor';
import { Button, Dropdown, Space } from 'antd';
import setBackgroundColor from './setBackgroundColor';
/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-17 18:14:03
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-17 20:17:48
 */
interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}
const BackgroundColor = (props: Props) => {
  const { editorState, onChange } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const handleColorClick = (color: string) => {
    const newEditorState = setBackgroundColor(editorState, `bc${color}`);
    onChange(newEditorState);
  };

  const getCurrentBackgroundColor = () => {
    const currentBackgroundColor: string =
      getSelectedBlocksMetadata(editorState).get('background-color');

    if (currentBackgroundColor) {
      return '#' + currentBackgroundColor.substring(2);
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
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: getCurrentBackgroundColor(),
            }}
          ></div>
          {renderArrow()}
        </Space>
      </Button>
    </Dropdown>
  );
};

export default BackgroundColor;
