import { Button, Dropdown, Form, Input, Popover } from 'antd';
import { FormInstance, useForm } from 'antd/lib/form/Form';
import { EditorState, Modifier, RichUtils } from 'draft-js';
import { BaseSyntheticEvent, useCallback, useState } from 'react';

interface Props {
  editorState: EditorState;
  onChange: (newEditorState: EditorState) => void;
}

const Image = (props: Props) => {
  const [form] = Form.useForm();
  const { editorState, onChange } = props;
  const [visible, setVisible] = useState<boolean>(false);

  const handleClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    form.validateFields().then((form) => {
      console.log(form);
      // let contentState = editorState.getCurrentContent();
      const contentStateWithEntity = editorState
        .getCurrentContent()
        .createEntity('link', 'MUTABLE', { url: form.addr });
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      // const newEditorState = EditorState.set(editorState, {
      //   currentContent: contentStateWithEntity,
      // });
      const contentState = Modifier.replaceText(
        editorState.getCurrentContent(),
        editorState.getSelection(),
        'aa',
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
  const renderForm = useCallback(() => {
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
  }, []);

  const handleVisibleChange = (visible: boolean) => {
    setVisible(visible);
    if (visible) {
      const content = getBeginTitle();
      console.log(content);
    }
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
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <Button>插入图片</Button>
    </Popover>
  );
};

export default Image;
