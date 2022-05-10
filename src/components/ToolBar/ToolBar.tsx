/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-09 23:46:29
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-10 23:55:34
 */
import { DraftStyleMap } from 'draft-js';
import React, { ReactPropTypes } from 'react';
import style from './styles/index.module.less';

interface Props {
  onClick: (key: string) => void;
  toolbar?: Record<string, any>;
}

const HeadControls = (props: Props) => {
  const toolbar = props.toolbar || {
    bold: {
      icon: 'icon-01jiacu',
      title: '粗体',
    },
    italic: {
      icon: 'I',
      title: '斜体',
    },
    red: {
      icon: '👀',
      title: '颜色',
    },
  };

  return (
    <div id={style.headControls}>
      {Object.keys(toolbar).map((key) => (
        <span
          title={toolbar[key].title}
          key={key}
          onClick={() => {
            props.onClick(key);
          }}
        >
          <i className={['iconfont', toolbar[key].icon].join(' ')}></i>|
        </span>
      ))}
    </div>
  );
};

export default HeadControls;
