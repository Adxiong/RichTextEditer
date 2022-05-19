/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-19 11:52:49
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-19 13:43:25
 */

import { Popover, Space } from 'antd';
import { ContentState } from 'draft-js';
import { FC, ReactElement, ReactNode, ReactPropTypes, useState } from 'react';
import ReactDom from 'react-dom';

// 自定义组件，用于超链接

type Props = React.PropsWithChildren<{
  contentState: ContentState;
  entityKey: string;
}>;

const Link: FC<Props> = ({ contentState, entityKey, children }) => {
  // 这里通过contentState来获取entity�，之后通过getData获取entity中包含的数据
  const { url } = contentState.getEntity(entityKey).getData();
  const [visible, setVisible] = useState<boolean>(false);
  const handleMouseOver = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    // @ts-ignore
    <span onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <Popover
        content={() => {
          return (
            <Space>
              <div>访问链接</div>
              <div>编辑链接</div>
              <div>删除链接</div>
            </Space>
          );
        }}
      >
        <a href={url}>{children}</a>
      </Popover>
    </span>
  );
};

export default Link;
