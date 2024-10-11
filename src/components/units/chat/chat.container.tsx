import { useRouter } from "next/router";
import ChatPresenter from "./chat.presenter";

export default function ChatContainer() {
    const router = useRouter()
    
    const onClickChatDetail = () => {
        router.push('/chat/1')
    }

    return (
        <ChatPresenter onClickChatDetail={onClickChatDetail} />
    )
}