/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-18 17:45:09
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-19 23:18:36
 */
import { Button, Form, Input, Popover } from 'antd';
import { AtomicBlockUtils, EditorState } from 'draft-js';
import { BaseSyntheticEvent, useCallback } from 'react';

interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}

const Video = (props: Props) => {
  const [form] = Form.useForm();
  const { editorState, onChange } = props;

  const handleClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    form.validateFields().then((form) => {
      let contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity(
        'video',
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
        <Form.Item label="视频地址" name="addr">
          <Input></Input>
        </Form.Item>
        <Form.Item>
          <Button onClick={(e) => handleClick(e)}>上传</Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <Popover content={renderForm()} trigger="click">
      <Button>插入视频</Button>
    </Popover>
  );
};

export default Video;
