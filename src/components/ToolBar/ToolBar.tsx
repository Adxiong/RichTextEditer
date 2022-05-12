/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-09 23:46:29
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-12 23:16:07
 */
import { DraftStyleMap } from 'draft-js';
import React, { ReactPropTypes } from 'react';
import PickerColor from './modules/PickerColor/PickerColor';
import style from './styles/index.module.less';
import actions from './actions';

interface Props {
  onClick: (key: string, type: string) => void;
  toolbar?: string[];
}

const HeadControls = (props: Props) => {
  const toolbar = props.toolbar
    ? props.toolbar.map((key: string) => {
        if (actions[key])
          return (
            <span
              className={['iconfont', style.utilsItem, actions[key].icon].join(
                ' '
              )}
              title={actions[key].title}
              key={key}
              onClick={() => {
                props.onClick(key, actions[key].type);
              }}
            >
              |
            </span>
          );
      })
    : Object.keys(actions).map((key: string) => {
        return (
          <span
            className={['iconfont', style.utilsItem, actions[key].icon].join(
              ' '
            )}
            title={actions[key].title}
            key={key}
            onClick={() => {
              props.onClick(key, actions[key].type);
            }}
          >
            |
          </span>
        );
      });

  return (
    <div id={style.headControls}>
      {toolbar}
      {/* <PickerColor></PickerColor> */}
    </div>
  );
};

export default HeadControls;
