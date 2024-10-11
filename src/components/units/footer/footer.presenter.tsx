import { HomeOutlined, SearchOutlined, UserOutlined, EnvironmentOutlined, CommentOutlined } from "@ant-design/icons"
import * as S from './footer.styles'
import { Modal, Button, Input } from 'antd';
import { useState } from "react";

interface FooterPresenterProps {
    onClickHome: () => void;
    onClickProfile: () => void;
    onClickChat: () => void;
    onClickLocation: () => void;
    isModalOpen: boolean;
    toggleSearchModal: () => void;
}

export default function FooterPresenter(props: FooterPresenterProps) {

    return (
        <S.FooterBox>
            {props.isModalOpen && (
            <Modal 
                title="검색" 
                open={props.isModalOpen} 
                onCancel={props.toggleSearchModal}
                footer={[
                    <Button key="search" onClick={props.toggleSearchModal} type="primary">
                        검색
                    </Button>,
                    <Button key="cancel" onClick={props.toggleSearchModal}>
                        닫기
                    </Button>,
                ]}
                >
                <Input placeholder="검색할 내용을 입력해주세요." prefix={<SearchOutlined />} />
            </Modal>
            )}
            <S.IconBox>
                <S.HomeButton onClick={props.onClickHome} />
            </S.IconBox>
            <S.IconBox>
                <S.LocationButton onClick={props.onClickLocation} />
            </S.IconBox>
            <S.IconBox>
                <S.SearchButton onClick={props.toggleSearchModal} />
            </S.IconBox>
            <S.IconBox>
                <S.ChatButton onClick={props.onClickChat} />
            </S.IconBox>
            <S.IconBox>
                <S.UserButton onClick={props.onClickProfile} />
            </S.IconBox>
        </S.FooterBox>
        
    )
}