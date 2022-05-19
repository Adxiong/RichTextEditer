/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-19 22:34:52
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-19 22:57:20
 */
import { Button, Dropdown, Form, Input, Popover } from 'antd';
import { FormInstance, useForm } from 'antd/lib/form/Form';
import { AtomicBlockUtils, EditorState, Modifier, RichUtils } from 'draft-js';
import { BaseSyntheticEvent, useCallback, useState } from 'react';

interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}

const Audio = (props: Props) => {
  const [form] = Form.useForm();
  const { editorState, onChange } = props;

  const handleClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    form.validateFields().then((form) => {
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity(
        'audio',
        'IMMUTABLE',
        { src: form.addr }
      );
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      const newEditorState = EditorState.set(editorState, {
        currentContent: contentStateWithEntity,
      });

      const newNewEditorState = AtomicBlockUtils.insertAtomicBlock(
        newEditorState,
        entityKey,
        ' '
      );
      onChange(newNewEditorState);
      //
    });
  };
  const renderForm = useCallback(() => {
    return (
      <Form form={form}>
        <Form.Item label="音频地址" name="addr">
          <Input></Input>
        </Form.Item>
        <Form.Item>
          <Button onClick={(e) => handleClick(e)}>上传</Button>
        </Form.Item>
      </Form>
    );
  }, []);

  return (
    <Popover content={renderForm()} trigger="click">
      <Button>插入音频</Button>
    </Popover>
  );
};

export default Audio;
