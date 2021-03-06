import { Button, Dropdown, Form, Input, Popover } from 'antd';
import { FormInstance, useForm } from 'antd/lib/form/Form';
import { AtomicBlockUtils, EditorState, Modifier, RichUtils } from 'draft-js';
import { BaseSyntheticEvent, useCallback, useState } from 'react';

interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}

const Image = (props: Props) => {
  const [form] = Form.useForm();
  const { editorState, onChange } = props;

  const handleClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    form.validateFields().then((form) => {
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity(
        'image',
        'IMMUTABLE',
        { src: form.addr }
      );
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      const newEditorState = EditorState.set(editorState, {
        currentContent: contentStateWithEntity,
      });

      onChange(
        AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ')
      );
    });
  };
  const renderForm = () => {
    return (
      <Form form={form}>
        <Form.Item label="图片地址" name="addr">
          <Input></Input>
        </Form.Item>
        <Form.Item>
          <Button onClick={(e) => handleClick(e)}>上传</Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <Popover content={renderForm()}>
      <Button>插入图片</Button>
    </Popover>
  );
};

export default Image;
