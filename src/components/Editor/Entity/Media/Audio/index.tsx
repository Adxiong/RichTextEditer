/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-19 22:37:23
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-19 23:07:27
 */
import { Popover, Space } from 'antd';
import { ContentState } from 'draft-js';
import { FC, ReactElement, ReactNode, ReactPropTypes, useState } from 'react';
import ReactDom from 'react-dom';

interface Props {
  src: any;
}

const Image: FC<Props> = (props: Props) => {
  const { src } = props;

  return (
    <div style={{ textAlign: 'center' }}>
      <audio
        controls
        src={src}
        style={{ width: '100%', whiteSpace: 'initial' }}
      ></audio>
    </div>
  );
};

export default Image;
