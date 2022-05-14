/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-09 23:46:29
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-14 09:47:43
 */
import { DraftStyleMap, EditorState, RichUtils } from 'draft-js';
import React, { memo, ReactPropTypes, useCallback, useMemo } from 'react';
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
import OList from './modules/OList';
import UList from './modules/UList';
import List from './modules/List';

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
  const [bold, italic, undo, redo, unstyled, heading, list] = props.toolbar;

  const handleToolChange = (newEditorState: EditorState) => {
    onChange(newEditorState);
  };

  const renderUndo = () => {
    return (
      undo && (
        <Undo editorState={editorState} onChange={handleToolChange}></Undo>
      )
    );
  };

  const renderRedo = () => {
    return (
      redo && (
        <Redo editorState={editorState} onChange={handleToolChange}></Redo>
      )
    );
  };
  const renderUnstyled = () => {
    return (
      unstyled && (
        <Unstyled
          editorState={editorState}
          onChange={handleToolChange}
        ></Unstyled>
      )
    );
  };
  const renderBold = () => {
    return (
      bold && (
        <Bold editorState={editorState} onChange={handleToolChange}></Bold>
      )
    );
  };

  const renderItalic = () => {
    return (
      italic && (
        <Italic editorState={editorState} onChange={handleToolChange}></Italic>
      )
    );
  };
  const renderHeading = () => {
    return (
      heading && (
        <Heading
          editorState={editorState}
          onChange={handleToolChange}
        ></Heading>
      )
    );
  };
  const renderList = () => {
    return (
      list && (
        <List editorState={editorState} onChange={handleToolChange}></List>
      )
    );
  };
  // const renderOl = () => {
  //   if (ol) {
  //     return (
  //       <OList editorState={editorState} onChange={handleToolChange}></OList>
  //     );
  //   }
  // };
  // const renderUl = () => {
  //   if (ul) {
  //     return (
  //       <UList editorState={editorState} onChange={handleToolChange}></UList>
  //     );
  //   }
  // };

  const renderComponent = [
    renderUndo,
    renderRedo,
    renderUnstyled,
    renderBold,
    renderItalic,
    renderHeading,
    renderList,
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
