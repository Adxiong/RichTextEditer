/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-13 22:51:19
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-21 16:59:35
 */
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Space } from 'antd';
import { EditorState, RichUtils } from 'draft-js';
import { MenuInfo } from 'rc-menu/lib/interface';
import {
  BaseSyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import commonStyle from '../../common/commonToolbar.module.less';
interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}

const Heading = (props: Props) => {
  const { editorState, onChange } = props;
  const [visible, setVisible] = useState<boolean>(false);

  const handleClick = (info: MenuInfo) => {
    onChange(RichUtils.toggleBlockType(editorState, info.key));
  };

  const MenuItem = [
    { label: '标题一', key: 'header-one' },
    { label: '标题二', key: 'header-two' },
    { label: '标题三', key: 'header-three' },
    { label: '标题四', key: 'header-four' },
    { label: '标题五', key: 'header-five' },
    { label: '标题六', key: 'header-six' },
  ];

  const RenderMenu = () => {
    return <Menu items={MenuItem} onClick={handleClick}></Menu>;
  };
  const renderArrow = useCallback(() => {
    return visible ? <CaretUpOutlined /> : <CaretDownOutlined />;
  }, [visible]);

  const handleVisibleChange = (visible: boolean) => {
    setVisible(visible);
  };
  const getCurrentHeading = () => {
    // console.log(editorState.getCurrentContent().toJS());
    const entityKey = editorState.getSelection().getAnchorKey();
    const type = editorState
      .getCurrentContent()
      .getBlockForKey(entityKey)
      .getType();

    if (type) {
      for (let i = 0; i < MenuItem.length; i++) {
        if (MenuItem[i].key === type) {
          return MenuItem[i].label;
        }
      }
    }
    return '标题';
  };
  return (
    <div className={commonStyle.toolbarItem}>
      <Dropdown overlay={RenderMenu()} onVisibleChange={handleVisibleChange}>
        <Button style={{ width: 100 }}>
          <Space>
            {getCurrentHeading()}
            {renderArrow()}
          </Space>
        </Button>
      </Dropdown>
    </div>
  );
};

export default Heading;
