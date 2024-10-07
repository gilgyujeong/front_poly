import { useRouter } from "next/router";
import FooterPresenter from "./footer.presenter";

export default function FooterContainer() {
    const router = useRouter()
    const onClickHome = () => {
        router.push('/')
    }

    return (
        <FooterPresenter onClickHome={onClickHome} />
    )
}