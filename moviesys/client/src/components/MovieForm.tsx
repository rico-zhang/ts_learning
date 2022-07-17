import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  message,
  Switch,
} from 'antd';
import React, { useEffect } from 'react';
import { IMovie } from '../services/MoviceService';
import { useNavigate } from 'react-router-dom';
import ImgUploader from './ImgUploader';
import { useForm } from 'antd/lib/form/Form';

interface IFormProps {
  movie?: IMovie;
  onSubmit: (movie: IMovie) => Promise<string>;
}

const formItemLayout = {
  label: {
    span: 4,
  },
  wrapperCol: {
    span: 19,
    offset: 1,
  },
};

const allAreas: { label: string; value: string }[] = [
  { label: '中国大陆', value: '中国大陆' },
  { label: '美国', value: '美国' },
  { label: '中国台湾', value: '中国台湾' },
  { label: '中国香港', value: '中国香港' },
];

const AreaGroups = Checkbox.Group;

const AllTypes: { label: string; value: string }[] = [
  { label: '喜剧', value: '喜剧' },
  { label: '灾难', value: '灾难' },
  { label: '动作', value: '动作' },
  { label: '爱情', value: '爱情' },
];
const TypeGroups = Checkbox.Group;

const MovieForm: React.FC<IFormProps> = (props) => {
  const [form] = useForm();
  const { movie } = props;
  const navigate = useNavigate();
  async function handleSubmit() {
    try {
      await form.validateFields();
      const formData = form.getFieldsValue();
      const result = await props.onSubmit(formData as any);
      if (result) {
        message.error(result);
      } else {
        message.success('处理成功', 1, () => {
          navigate('/movie/list');
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    form.setFieldsValue(movie);
  }, [movie, form]);
  return (
    <div>
      <Form
        onFinish={handleSubmit}
        {...formItemLayout}
        style={{ width: '100%' }}
        form={form}
      >
        <Form.Item
          label="电影名称"
          name="name"
          rules={[{ required: true, message: '请填写电影名称' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="封面图" name="poster">
          <ImgUploader />
        </Form.Item>
        <Form.Item
          label="地区"
          name="areas"
          rules={[{ required: true, message: '请选择地区' }]}
        >
          <AreaGroups options={allAreas} />
        </Form.Item>
        <Form.Item
          label="类型"
          name="types"
          rules={[{ required: true, message: '请选择类型' }]}
        >
          <TypeGroups options={AllTypes} />
        </Form.Item>
        <Form.Item
          label="时长(分钟)"
          name="timeLong"
          rules={[{ required: true, message: '请填写时长' }]}
        >
          <InputNumber min={1} max={9999} step={10} />
        </Form.Item>

        <Form.Item label="正在热映" name="isHot" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="即将上瘾" name="isComing" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="经典影片" name="isClassic" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="描述" name="description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item labelCol={{ span: 0 }} wrapperCol={{ span: 19, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MovieForm;
