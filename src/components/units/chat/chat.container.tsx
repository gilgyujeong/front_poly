import { useRouter } from "next/router";
import ChatPresenter from "./chat.presenter";

export default function ChatContainer() {
    const router = useRouter()
    
    return (
        <ChatPresenter />
    )
}