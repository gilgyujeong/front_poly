import { useRouter } from "next/router";
import SignUpPresenter from "./signUp.presenter";

export default function SignUpContainer() {
    const router = useRouter()

    const onClickCancel = () => {
        router.push('/login')
    }
    
    return (
        <SignUpPresenter onClickCancel={onClickCancel} />
    )
}