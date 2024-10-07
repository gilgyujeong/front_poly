import { useRouter } from "next/router";
import FooterPresenter from "./footer.presenter";
import { Modal } from 'antd';
import { useState } from "react";

export default function FooterContainer() {
    const router = useRouter()

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };


    const onClickHome = () => {
        router.push('/')
    }

    const onClickProfile = () => {
        router.push('/profile/1')
    }

    const onClickChat = () => {
        router.push('/chat/1')
    }



    return (
        <FooterPresenter 
            onClickHome={onClickHome} 
            onClickProfile={onClickProfile} 
            onClickChat={onClickChat}
            isModalOpen={isModalOpen}
            showModal={showModal}
            handleOk={handleOk}
            handleCancel={handleCancel}
        />
    )
}