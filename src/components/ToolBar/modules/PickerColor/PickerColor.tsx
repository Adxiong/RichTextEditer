/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-11 12:12:00
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-17 20:03:04
 */
import { Col, Row } from 'antd';
import style from './styles/index.module.less';
const color = [
  '0D0016',
  'FE2C24',
  'FF9900',
  'FFD900',
  'A2E043',
  '38D8F0',
  '4DA8EE',
  '956FE7',
  'F3F3F4',
  'CCCCCC',
  'FEF2F0',
  'FFF5E6',
  'FEFCD8',
  'EDF6E8',
  'E7FAFA',
  'EAF4FC',
  'EFEDF6',
  'D7D8D9',
  'A5A5A5',
  'FBD4D0',
  'FFD7B9',
  'F9EDA6',
  'D4E9D5',
  'C7E6EA',
  'CBE0F1',
  'DAD5E9',
  '7B7F82',
  '494949',
  'ED7976',
  'FAA572',
  'E6B223',
  '98C091',
  '79C6CD',
  '6EAAD7',
  '9C8EC1',
  '333333',
  'BE191C',
  'B95514',
  'AD720D',
  '1C7331',
  '1C7892',
  '1A439C',
  '511B78',
];

interface Props {
  onClick: (color: string) => void;
}
const PickerColor = (props: Props) => {
  const handleClick = (color: string) => {
    props.onClick(color);
  };
  return (
    <div className={style.pickerColor}>
      {color.map((item) => (
        <a
          className={style.colorBlock}
          key={item}
          onClick={() => handleClick(item)}
          style={{
            backgroundColor: `#${item}`,
          }}
        ></a>
      ))}
    </div>
  );
};

export default PickerColor;
