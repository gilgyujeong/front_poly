import { useRouter } from "next/router";
import MainPagePresenter from "./mainpage.presenter";

export default function MainPageContainer() {
    const router = useRouter()
    const onClickBoardsNewButton = () => {
        router.push('/boards/new')
    }

    return (
        <MainPagePresenter onClickBoardsNewButton={onClickBoardsNewButton} />
    )
}