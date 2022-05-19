/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-19 11:52:49
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-19 23:07:04
 */

import { Popover, Space } from 'antd';
import { ContentState } from 'draft-js';
import { FC, ReactElement, ReactNode, ReactPropTypes, useState } from 'react';
import ReactDom from 'react-dom';

// 自定义组件，用于超链接

interface Props {
  src: any;
}

const Video: FC<Props> = (props: Props) => {
  const { src } = props;
  return (
    <div style={{ textAlign: 'center' }}>
      <video
        controls
        src={src}
        style={{ width: '100%', whiteSpace: 'initial' }}
      ></video>
    </div>
  );
};

export default Video;
