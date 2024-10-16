import { Input, Modal, Radio, RadioChangeEvent, Select, UploadProps } from 'antd'
import * as S from './write.style'
import TextArea from 'antd/es/input/TextArea';
import { ReactNode } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';

interface IWritePresenterProps {
    uploadButton: ReactNode,
    imageUrl?: string,
    beforeUpload: (file: File) => boolean,
    handleChange: UploadProps['onChange'],
    options: {label: string, value: string}[],
    onClickBack: () => void
    onChangeAmPm: (e:RadioChangeEvent) => void
    amPm: Number
    onChangeHour: String
    onChangeMin: String
}

export default function WritePresenter(props: any) {

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    
    return (
        <S.MainBox>
            <S.InputBox>
                <Radio.Group block options={props.options} onChange={props.onChangeOption} defaultValue="해주세요" optionType="button" />
            </S.InputBox>
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
                <Input placeholder='제목'></Input>
            </S.InputBox>
            <S.InputBox>
                <Input placeholder='가격'></Input>
            </S.InputBox>
            <S.InputBox>
                <TextArea rows={4} placeholder='자세한 설명'></TextArea>
            </S.InputBox>
            <S.InputBox>
                <Radio.Group onChange={props.onChangeAmPm} value={props.amPm}>
                    <Radio value={1}>AM</Radio>
                    <Radio value={2}>PM</Radio>
                </Radio.Group>
                <Select
                    defaultValue="시간"
                    style={{ width: '80px' }}
                    onChange={props.onChangeHour}
                    options={[
                        { value: '시간', label: '시간', disabled: true },
                        { value: '1', label: '1' },
                        { value: '2', label: '2' },
                        { value: '3', label: '3' },
                        { value: '4', label: '4' },
                        { value: '5', label: '5' },
                        { value: '6', label: '6' },
                        { value: '7', label: '7' },
                        { value: '8', label: '8' },
                        { value: '9', label: '9' },
                        { value: '10', label: '10' },
                        { value: '11', label: '11' },
                    ]}
                />
                <Select
                    defaultValue="분"
                    style={{ width: '80px', marginLeft: '17px'}}
                    onChange={props.onChangeMin}
                    options={[
                        { value: '분', label: '분', disabled: true },
                        { value: '10', label: '10' },
                        { value: '20', label: '20' },
                        { value: '30', label: '30' },
                        { value: '40', label: '40' },
                        { value: '50', label: '50' },
                    ]}
                />
            </S.InputBox>
            <S.InputBox>
            <S.InputDate onChange={props.onChangDate} placeholder='거래희망 날짜' />
            </S.InputBox>
            <S.InputBox>
                <Input onClick={props.togglesAddressModal} placeholder='거래 지역' value={props.address}></Input>
            </S.InputBox>
            <S.InputBox>
                <S.BoardButton type="primary">등록</S.BoardButton>
            </S.InputBox>
            <S.InputBox>
                <S.BoardButton onClick={props.onClickBack}>취소</S.BoardButton>
            </S.InputBox>
            {props.isModalOpen && (
                <Modal open={true} onOk={props.togglesAddressModal} onCancel={props.togglesAddressModal}>
                    <DaumPostcodeEmbed onComplete={props.addressInput} />
                </Modal>
            )}
        </S.MainBox>
    )
}