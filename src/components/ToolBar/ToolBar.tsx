/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-09 23:46:29
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-13 23:03:30
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
  const [bold, italic, undo, redo, unstyled, heading] = props.toolbar;

  const handleToolChange = (newEditorState: EditorState) => {
    onChange(newEditorState);
  };

  const renderUndo = () => {
    if (undo) {
      return (
        <Undo editorState={editorState} onChange={handleToolChange}></Undo>
      );
    }
  };

  const renderRedo = () => {
    if (redo) {
      return (
        <Redo editorState={editorState} onChange={handleToolChange}></Redo>
      );
    }
  };
  const renderUnstyled = () => {
    if (unstyled) {
      return (
        <Unstyled
          editorState={editorState}
          onChange={handleToolChange}
        ></Unstyled>
      );
    }
  };
  const renderBold = () => {
    if (bold) {
      return (
        <Bold editorState={editorState} onChange={handleToolChange}></Bold>
      );
    }
  };

  const renderItalic = () => {
    if (italic) {
      return (
        <Italic editorState={editorState} onChange={handleToolChange}></Italic>
      );
    }
  };
  const renderHeading = () => {
    if (heading) {
      return (
        <Heading
          editorState={editorState}
          onChange={handleToolChange}
        ></Heading>
      );
    }
  };

  const renderComponent = [
    renderUndo,
    renderRedo,
    renderUnstyled,
    renderBold,
    renderItalic,
    renderHeading,
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
