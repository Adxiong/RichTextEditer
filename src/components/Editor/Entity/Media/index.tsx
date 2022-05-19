/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-19 22:28:58
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-19 22:41:44
 */
import { ContentBlock, ContentState } from 'draft-js';
import React from 'react';
import Image from './Image';
import Audio from './Audio';
import Video from './Video';

interface Props {
  contentState: ContentState;
  block: ContentBlock;
}

const Media = (props: Props) => {
  const entity = props.contentState.getEntity(props.block.getEntityAt(0));
  const { src } = entity.getData();
  const type = entity.getType();

  let media;
  if (type === 'audio') {
    media = <Audio src={src} />;
  } else if (type === 'image') {
    media = <Image src={src} />;
  } else if (type === 'video') {
    media = <Video src={src} />;
  }

  return media;
};

export default Media;
