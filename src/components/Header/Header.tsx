/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-11 22:25:55
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-11 22:37:03
 */
import { Input } from 'antd';
import { BaseSyntheticEvent } from 'react';
import styles from './styles/index.module.less';

interface Props {
  defaultValue: string;
  onChange: (event: BaseSyntheticEvent) => void;
}
const Header = (props: Props) => {
  return (
    <header id={styles.EditorHeader}>
      <Input
        onChange={props.onChange}
        defaultValue={'[无标题]'}
        type="text"
        maxLength={150}
        showCount
        allowClear
      ></Input>
    </header>
  );
};

export default Header;
