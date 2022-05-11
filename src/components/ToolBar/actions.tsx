/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-05-11 16:18:33
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-05-11 17:56:12
 */

const actions: Record<string, any> = {
  bold: {
    type: 'inline',
    icon: 'icon-01jiacu',
    title: '粗体',
  },
  italic: {
    type: 'inline',
    icon: 'icon-02xieti',
    title: '斜体',
  },
  strikethrough: {
    type: 'inline',
    icon: 'icon-02xieti',
    title: '删除线',
  },
  underline: {
    type: 'inline',
    icon: 'icon-02xieti',
    title: '下划线',
  },
  heading1: {
    type: 'block',
    icon: 'icon-13biaoti1',
    title: '标题1',
  },
  heading2: {
    type: 'block',
    icon: 'icon-14biaoti2',
    title: '标题2',
  },
  heading3: {
    type: 'block',
    icon: 'icon-15biaoti3',
    title: '标题3',
  },
  heading4: {
    type: 'block',
    icon: 'icon-16biaoti4',
    title: '标题4',
  },
  heading5: {
    type: 'block',
    icon: 'icon-17biaoti5',
    title: '标题5',
  },
  heading6: {
    type: 'block',
    icon: 'icon-18biaoti6',
    title: '标题6',
  },
  unstyled: {
    type: 'block',
    icon: 'icon-24zitiyanse',
    title: '取消样式',
  },
  paragraph: {
    type: 'block',
    icon: '',
    title: '段落',
  },
  ul: {
    type: 'block',
    icon: 'icon-20xiangmufuhao',
    title: '无序列表',
  },
  ol: {
    type: 'block',
    icon: 'icon-20xiangmufuhao',
    title: '有序列表',
  },
};

export default actions;
