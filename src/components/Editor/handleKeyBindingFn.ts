/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-17 11:41:26
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-17 11:49:56
 */
import { getDefaultKeyBinding } from 'draft-js';

const handleKeyBindingFn = (e: SyntheticKeyboardEvent) => {
  if (e.key === 'e' && e.metaKey) {
    return 'textAlign-center';
  }
  if (e.key === 'l' && e.metaKey) {
    return 'textAlign-left';
  }
  if (e.key === 'r' && e.metaKey) {
    return 'textAlign-right';
  }
  if (e.key === 'j' && e.metaKey) {
    return 'textAlign-justify';
  }
  return getDefaultKeyBinding(e);
};

export default handleKeyBindingFn;
