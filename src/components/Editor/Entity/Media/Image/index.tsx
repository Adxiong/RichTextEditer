/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-19 11:52:49
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-19 23:07:32
 */

import { Popover, Space } from 'antd';
import { ContentState } from 'draft-js';
import { FC, ReactElement, ReactNode, ReactPropTypes, useState } from 'react';
import ReactDom from 'react-dom';

// 自定义组件，用于超链接

interface Props {
  src: any;
}

const Image: FC<Props> = (props: Props) => {
  const { src } = props;

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={src} style={{ width: '100%', whiteSpace: 'initial' }}></img>
    </div>
  );
};

export default Image;
