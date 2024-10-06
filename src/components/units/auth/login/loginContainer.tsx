import { useRouter } from "next/router";
import LoginPresenter from "./loginPresenter";

export default function LoginContainer() {
    const router = useRouter()

    const onClickSingUp = () => {
        router.push('/signUp')
    }

    return (
        <LoginPresenter onClickSignUp={onClickSingUp} />
    )
}