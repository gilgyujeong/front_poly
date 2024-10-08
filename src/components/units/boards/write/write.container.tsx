import { useState } from "react";
import WritePresenter from "./write.presenter";
import { message, type GetProp, type UploadProps} from 'antd'
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('JPG/PNG file!');
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('2MB!');
    }
    return isJpgOrPng && isLt2M;
};

export default function WriteContainer() {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    const handleChange: UploadProps['onChange'] = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj as FileType, (url) => {
            setLoading(false);
            setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    const options = [
        { label: '해주세요', value: '해주세요' },
        { label: '해줄게요', value: '해줄게요' }
    ];

    return(
        <WritePresenter 
            uploadButton={uploadButton}
            imageUrl={imageUrl}
            beforeUpload={beforeUpload}
            handleChange={handleChange}
            options={options}
        />
    )
}