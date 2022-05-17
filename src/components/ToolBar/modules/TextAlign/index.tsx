/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-14 21:59:43
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-17 11:35:52
 */
import { Button, Dropdown, Menu, Space } from 'antd';
import { EditorState, Modifier } from 'draft-js';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useCallback, useMemo, useState } from 'react';
import commonStyle from '../../common/commonToolbar.module.less';
import { getSelectedBlocksMetadata } from 'draftjs-utils';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { setTextAlign } from './utils';
interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}

const TextAlign = (props: Props) => {
  const { editorState, onChange } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const handleClick = (info: MenuInfo) => {
    const newState = setTextAlign(editorState, info.key);
    onChange(newState);
  };

  const align = [
    {
      label: '左对齐',
      key: 'text-align-left',
    },
    {
      label: '右对齐',
      key: 'text-align-right',
    },
    {
      label: '居中对齐',
      key: 'text-align-center',
    },
    {
      label: '两端对齐',
      key: 'text-align-justify',
    },
  ];

  const renderMenu = () => {
    return <Menu items={align} onClick={handleClick}></Menu>;
  };

  const textAlignMap = useMemo(() => {
    const data: Record<string, string> = {};
    align.map((item) => {
      data[item.key] = item.label;
    });
    return data;
  }, []);

  const getCurrentTextAlign = () => {
    const currentTextAlign =
      getSelectedBlocksMetadata(editorState).get('text-align');

    if (currentTextAlign) {
      return textAlignMap[currentTextAlign];
    } else {
      return '左对齐';
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
    <Dropdown overlay={renderMenu()} onVisibleChange={handleVisibleChange}>
      <Button style={{ width: 130 }}>
        <Space>
          <>
            <i className="iconfont icon-11juzhongduiqi"></i>
            {getCurrentTextAlign()}
            {renderArrow()}
          </>
        </Space>
      </Button>
    </Dropdown>
  );
};

export default TextAlign;
