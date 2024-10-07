import { useRouter } from "next/router";
import HeaderPresenter from "./header.presenter";

export default function HeaderContainer() {
    const router = useRouter()

    const onClickLogin = (): void => {
        router.push('/login')
    }

    const onClickSignUp = () => {
        router.push('/signUp')
    }

    return (
        <HeaderPresenter onClickLogin={onClickLogin} onClickSignUp={onClickSignUp} />
    )
}