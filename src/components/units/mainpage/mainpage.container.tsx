import { useRouter } from "next/router";
import MainPagePresenter from "./mainpage.presenter";

export default function MainPageContainer() {
    const router = useRouter()

    const onClickBoardsNewButton = () => {
        router.push('/boards/new')
    }

    const onClickBoardDetail = () => {
        router.push('/boards/1')
    }

    const options = [
        { label: '전체', value: '전체' },
        { label: '해주세요', value: '해주세요' },
        { label: '해줄게요', value: '해줄게요' }
    ];

    return (
        <MainPagePresenter 
            onClickBoardsNewButton={onClickBoardsNewButton} 
            onClickBoardDetail={onClickBoardDetail}
            options={options}
        />
    )
}