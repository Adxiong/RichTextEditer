/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-09 23:46:29
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-10 17:34:46
 */
import { DraftStyleMap } from 'draft-js';
import React, { ReactPropTypes } from 'react';
import style from './styles/index.module.less';

interface Props {
  onClick: (key: string) => void;
  toolbar?: DraftStyleMap;
}
const toolbar: DraftStyleMap = {
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  red: {
    color: 'red',
  },
};
const HeadControls = (props: Props) => {
  return (
    <div id={style.headControls}>
      {Object.keys(props.toolbar || toolbar).map((key) => (
        <span
          key={key}
          onClick={() => {
            props.onClick(key);
          }}
        >
          {key}｜
        </span>
      ))}
    </div>
  );
};

export default HeadControls;
