/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-05-17 11:52:38
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-17 20:21:23
 */
import { ContentBlock } from "draft-js";

const customBlockStyleMap = (contentBlock: ContentBlock) => {
  const metaData = contentBlock.toJS().data;
  console.log(metaData);
  
  const textIndent = metaData['text-indent'];
  const backgroundColor = metaData['background-color']
  const lineHeight = metaData['line-height'];
  const letterSpacing = metaData['letter-spacing'];
  const textAlign = metaData['text-align'];
  let className: string[] = [];
  textAlign && className.push(textAlign);
  textIndent && className.push(textIndent);
  lineHeight && className.push(lineHeight);
  backgroundColor && className.push(backgroundColor)

  console.log(className);
  
  
  return className.join(' ');
};

export default customBlockStyleMap