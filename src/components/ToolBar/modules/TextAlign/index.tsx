/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-14 21:59:43
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-16 21:32:56
 */
import { Button, Dropdown, Menu, MenuProps, Space } from 'antd';
import { EditorState, Modifier } from 'draft-js';
import { MenuInfo } from 'rc-menu/lib/interface';
import {
  BaseSyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ToolbarParam } from '../../@types';
import commonStyle from '../../common/commonToolbar.module.less';
import {
  getSelectionCustomInlineStyle,
  getSelectedBlocksMetadata,
} from 'draftjs-utils';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
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
  const [visible, setVisible] = useState<boolean>(false);
  const handleClick = (info: MenuInfo) => {
    const newContentState = Modifier.setBlockData(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      { 'text-align': info.key }
    );
    const newState = EditorState.push(
      editorState,
      newContentState,
      'change-block-data'
    );

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
