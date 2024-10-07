import { useRouter } from "next/router";
import FooterPresenter from "./footer.presenter";

export default function FooterContainer() {
    const router = useRouter()
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
        />
    )
}