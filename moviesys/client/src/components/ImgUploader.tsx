import React, { useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { message, Modal, Upload, UploadFile } from 'antd';
import { IResponseData, IResponseError } from '../services/CommonTypes';

interface IImgUploaderProps {
  value?: string;
  onChange?: (imgUrl: string) => void;
}

const ImgUploader: React.FC<IImgUploaderProps> = (props) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const getUploadContent = () => {
    if (props.value) {
      return null;
    } else {
      return (
        <div>
          <PlusCircleOutlined />
          <div>上传</div>
        </div>
      );
    }
  };
  const getFileList: () => UploadFile[] = () => {
    if (props.value) {
      return [
        {
          uid: props.value,
          name: props.value,
          url: props.value,
        },
      ];
    }
    return [];
  };

  const handleRequest: (p: any) => void = async (p) => {
    let formData = new FormData();
    formData.append(p.filename, p.file);
    const request = new Request(p.action, {
      method: 'post',
      body: formData,
    });
    const resp: IResponseData<string> | IResponseError = await fetch(
      request
    ).then((resp) => resp.json());
    if (resp.err) {
      message.error('上传失败');
    } else {
      if (props.onChange) {
        props.onChange(resp.data!);
      }
    }
  };
  return (
    <div>
      <Upload
        action="/api/upload"
        name="imgfile"
        accept=".jpg,.png,.gif"
        listType="picture-card"
        fileList={getFileList()}
        customRequest={handleRequest}
        onRemove={() => {
          if (props.onChange) {
            props.onChange('');
          }
        }}
        onPreview={() => {
          setShowModal(true);
        }}
      >
        {getUploadContent()}
      </Upload>

      <Modal
        visible={showModal}
        footer={null}
        onCancel={() => {
          setShowModal(false);
        }}
      >
        <img style={{ width: '100%' }} src={props.value} alt="" />
      </Modal>
    </div>
  );
};

export default ImgUploader;
