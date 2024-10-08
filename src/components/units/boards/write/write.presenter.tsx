import { Input, Radio } from 'antd'
import * as S from './write.style'
import { PlusOutlined } from '@ant-design/icons'
import TextArea from 'antd/es/input/TextArea';

export default function WritePresenter(props: any) {

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    
    return (
        <S.MainBox>
            <S.ImgBox>
                <S.ImgInput
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={true}
                    action=""
                    beforeUpload={props.beforeUpload}
                    onChange={props.handleChange}
                >
                    {props.imageUrl ? <img src={props.imageUrl} alt="avatar" style={{ width: '100%' }} /> : props.uploadButton}
                </S.ImgInput>
            </S.ImgBox>
            <S.InputBox>
                <Radio.Group block options={props.options} defaultValue="해주세요" optionType="button" />
            </S.InputBox>
            <S.InputBox>
                <Input placeholder='제목'></Input>
            </S.InputBox>
            <S.InputBox>
                <Input placeholder='가격'></Input>
            </S.InputBox>
            <S.InputBox>
                <TextArea rows={4} placeholder='자세한 설명'></TextArea>
            </S.InputBox>
            <S.InputBox>
                <Input placeholder='거래희망 날짜'></Input>
            </S.InputBox>
            <S.InputBox>
                <Input placeholder='거래 지역'></Input>
            </S.InputBox>
            <S.InputBox>
                <S.BoardButton type="primary">등록</S.BoardButton>
            </S.InputBox>
            <S.InputBox>
                <S.BoardButton>취소</S.BoardButton>
            </S.InputBox>
        </S.MainBox>
        
    )
}