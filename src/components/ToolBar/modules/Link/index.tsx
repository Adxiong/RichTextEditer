/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-12 22:29:54
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-19 13:42:20
 */

import { Button, Form, Input, Popover } from 'antd';
import { EditorState, Modifier, RichUtils } from 'draft-js';
import { BaseSyntheticEvent, useCallback, useState } from 'react';

// export default
// (editorState: EditorState, url: string) => {
//   const contentState = editorState.getCurrentContent();
//   const contentStateWithEntity = contentState.createEntity('link', 'MUTABLE', url);
//   const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
//   const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
//   return RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey);
// }
interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}

const Link = (props: Props) => {
  const { editorState, onChange } = props;
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);

  const handleClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    form.validateFields().then((form) => {
      console.log(form);
      const contentStateWithEntity = editorState
        .getCurrentContent()
        .createEntity('LINK', 'SEGMENTED', { url: form.addr });
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      const contentState = Modifier.replaceText(
        editorState.getCurrentContent(),
        editorState.getSelection(),
        form.title,
        editorState.getCurrentInlineStyle(),
        entityKey
      );
      const newEditorState = EditorState.push(
        editorState,
        contentState,
        'insert-characters'
      );
      onChange(newEditorState);
      //
    });
  };

  const renderForm = () => {
    return (
      <Form form={form}>
        <Form.Item label="文本内容" name="title">
          <Input></Input>
        </Form.Item>
        <Form.Item label="图片地址" name="addr">
          <Input></Input>
        </Form.Item>
        <Form.Item>
          <Button onClick={(e) => handleClick(e)}>上传</Button>
        </Form.Item>
      </Form>
    );
  };

  const handleVisibleChange = (visible: boolean) => {
    if (visible) {
      const title = getBeginTitle();
      const url = getBeginUrl();
      form.setFieldsValue({ title: title });
      form.setFieldsValue({ addr: url });
    }
    setVisible(visible);
  };
  const getBeginUrl = () => {
    const selection = editorState.getSelection();
    let editorUrl = '';
    if (!selection.isCollapsed()) {
      const contentState = editorState.getCurrentContent();
      const startKey = editorState.getSelection().getStartKey();
      const startOffset = editorState.getSelection().getStartOffset();
      const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);

      const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);

      if (linkKey) {
        const linkInstance = contentState.getEntity(linkKey);
        editorUrl = linkInstance.getData().url;
      }
    }

    return editorUrl;
  };
  // 得到editorState的title
  const getBeginTitle = () => {
    const selectionState = editorState.getSelection();
    const anchorKey = selectionState.getAnchorKey();
    const currentContent = editorState.getCurrentContent();
    const currentContentBlock = currentContent.getBlockForKey(anchorKey);
    const start = selectionState.getStartOffset();
    const end = selectionState.getEndOffset();
    const title = currentContentBlock.getText().slice(start, end);
    return title;
  };
  return (
    <Popover
      content={renderForm()}
      // trigger="hover"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <Button>链接</Button>
    </Popover>
  );
};

export default Link;
