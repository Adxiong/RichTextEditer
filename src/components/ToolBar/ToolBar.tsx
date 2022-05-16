/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-09 23:46:29
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-16 23:21:27
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
import FontSize from './modules/FontSize';
import Strikethrough from './modules/Strikethrough';
import Underline from './modules/Underline';

interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
  toolbar?: ToolbarParam[];
}

const HeadControls = memo((props: Props) => {
  const { editorState, onChange } = props;
  const [clickKey, setClickKey] = useState<ToolbarParam>();
  const [
    bold,
    italic,
    undo,
    redo,
    unstyled,
    underline,
    strikethrough,
    heading,
    list,
    fontfamily,
    fontsize,
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
  const renderUnderline = () => {
    return (
      underline && (
        <Underline
          editorState={editorState}
          onChange={handleToolChange}
        ></Underline>
      )
    );
  };
  const renderStrikethrough = () => {
    return (
      strikethrough && (
        <Strikethrough
          editorState={editorState}
          onChange={handleToolChange}
        ></Strikethrough>
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

  const renderFontFamily = () => {
    return (
      fontfamily && (
        <FontFamily editorState={editorState} onChange={handleToolChange} />
      )
    );
  };

  const renderFontSize = () => {
    return (
      fontsize && (
        <FontSize editorState={editorState} onChange={handleToolChange} />
      )
    );
  };

  const renderTextAlign = () => {
    return (
      textalign && (
        <TextAlign editorState={editorState} onChange={handleToolChange} />
      )
    );
  };

  const renderComponent = [
    renderUndo,
    renderRedo,
    renderUnstyled,
    renderBold,
    renderItalic,
    renderUnderline,
    renderStrikethrough,
    renderHeading,
    renderList,
    renderFontFamily,
    renderFontSize,
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
