/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-18 23:21:25
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-19 23:06:07
 */

import { Popover, Space } from 'antd';
import { CompositeDecorator } from 'draft-js';
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  useState,
} from 'react';
import Image from './Entity/Media/Image';
import Link from './Entity/Link';
import Video from './Entity/Media/Video';

// decorator，用于超链接
const decorator = new CompositeDecorator([
  {
    strategy(contentBlock, callback, contentState) {
      // 这个方法接收2个函数作为参数，如果第一个参数的函数执行时�返回true，就会执行第二个参数函数，同时会�将匹配的�字符的起始位置和结束位置传递给第二个参数。
      contentBlock.findEntityRanges(
        (character) => {
          const entityKey = character.getEntity();
          return (
            entityKey !== null &&
            contentState.getEntity(entityKey).getType() === 'LINK'
          );
        },
        (...arr) => {
          callback(...arr);
        }
      );
    },
    component: Link,
  },
]);

export default decorator;
