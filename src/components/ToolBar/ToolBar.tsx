/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-09 23:46:29
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-14 23:42:43
 */
import { DraftStyleMap, EditorState, RichUtils } from 'draft-js';
import React, {
  memo,
  ReactPropTypes,
  useCallback,
  useMemo,
  useState,
} from 'react';
import PickerColor from './modules/PickerColor/PickerColor';
import style from './styles/index.module.less';
import actions from './actions';
import { ToolbarParam } from './@types';
import Undo from './modules/Undo';
import Bold from './modules/Bold';
import Italic from './modules/Italic';
import Redo from './modules/Redo';
import Unstyled from './modules/Unstyled';
import Heading from './modules/Heading';
import List from './modules/List';
import FontFamily from './modules/FontFamily';
import TextAlign from './modules/TextAlign';

interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
  toolbar?: ToolbarParam[];
}

const HeadControls = memo((props: Props) => {
  // const toolbar = props.toolbar
  //   ? props.toolbar.map((key: string) => {
  //       if (actions[key])
  //         return (
  //           <span
  //             className={['iconfont', style.utilsItem, actions[key].icon].join(
  //               ' '
  //             )}
  //             title={actions[key].title}
  //             key={key}
  //             onClick={() => {
  //               props.onClick(key, actions[key].type);
  //             }}
  //           >
  //             |
  //           </span>
  //         );
  //     })
  //   : Object.keys(actions).map((key: string) => {
  //       return (
  //         <span
  //           className={['iconfont', style.utilsItem, actions[key].icon].join(
  //             ' '
  //           )}
  //           title={actions[key].title}
  //           key={key}
  //           onClick={() => {
  //             props.onClick(key, actions[key].type);
  //           }}
  //         >
  //           |
  //         </span>
  //       );
  //     });
  const { editorState, onChange } = props;
  const [clickKey, setClickKey] = useState<ToolbarParam>();
  const [
    bold,
    italic,
    undo,
    redo,
    unstyled,
    heading,
    list,
    fontfamily,
    textalign,
  ] = props.toolbar;

  const handleToolChange = (newEditorState: EditorState) => {
    onChange(newEditorState);
  };

  const handleToolClick = (key: ToolbarParam) => {
    setClickKey(key);
  };
  const renderUndo = () => {
    return (
      undo && (
        <Undo
          editorState={editorState}
          // key={clickKey}
          onChange={handleToolChange}
          // onClick={handleToolClick}
        ></Undo>
      )
    );
  };

  const renderRedo = () => {
    return (
      redo && (
        <Redo
          editorState={editorState}
          // key={clickKey}
          onChange={handleToolChange}
          // onClick={handleToolClick}
        ></Redo>
      )
    );
  };
  const renderUnstyled = () => {
    return (
      unstyled && (
        <Unstyled
          editorState={editorState}
          // key={clickKey}
          onChange={handleToolChange}
          // onClick={handleToolClick}
        ></Unstyled>
      )
    );
  };
  const renderBold = () => {
    return (
      bold && (
        <Bold
          editorState={editorState}
          // key={clickKey}
          onChange={handleToolChange}
          // onClick={handleToolClick}
        ></Bold>
      )
    );
  };

  const renderItalic = () => {
    return (
      italic && (
        <Italic
          editorState={editorState}
          // key={clickKey}
          onChange={handleToolChange}
          // onClick={handleToolClick}
        ></Italic>
      )
    );
  };
  const renderHeading = () => {
    return (
      heading && (
        <Heading
          editorState={editorState}
          // key={clickKey}
          onChange={handleToolChange}
          // onClick={handleToolClick}
        ></Heading>
      )
    );
  };
  const renderList = () => {
    return (
      list && (
        <List
          editorState={editorState}
          // key={clickKey}
          onChange={handleToolChange}
          // onClick={handleToolClick}
        ></List>
      )
    );
  };

  const renderFontFamily = () => {
    return (
      fontfamily && (
        <FontFamily
          editorState={editorState}
          // key={clickKey}
          onChange={handleToolChange}
          // onClick={handleToolClick}
        />
      )
    );
  };

  const renderTextAlign = () => {
    return (
      textalign && (
        <TextAlign
          editorState={editorState}
          // key={clickKey}
          onChange={handleToolChange}
          // onClick={handleToolClick}
        />
      )
    );
  };

  const renderComponent = [
    renderUndo,
    renderRedo,
    renderUnstyled,
    renderBold,
    renderItalic,
    renderHeading,
    renderList,
    renderFontFamily,
    renderTextAlign,
  ];

  return (
    <div id={style.headControls}>
      {renderComponent.map((item, index) => (
        <div key={index}>{item()}</div>
      ))}
    </div>
  );
});

export default HeadControls;
