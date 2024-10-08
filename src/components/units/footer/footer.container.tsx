import { useRouter } from "next/router";
import FooterPresenter from "./footer.presenter";
import { useState } from "react";
import useGeolocation from "react-hook-geolocation";

export default function FooterContainer() {
    const router = useRouter()
    const geolocation = useGeolocation();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleSearchModal = () => {
        setIsModalOpen((prev) => !prev);
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

    const onClickLocation = () => {
        if (!geolocation.error) {
            alert(`위도: ${geolocation.latitude} 경도: ${geolocation.longitude}`)
        }
    }
    
    return (
        <FooterPresenter 
            onClickHome={onClickHome} 
            onClickProfile={onClickProfile} 
            onClickChat={onClickChat}
            onClickLocation={onClickLocation}
            isModalOpen={isModalOpen}
            toggleSearchModal={toggleSearchModal}
        />
    )
}