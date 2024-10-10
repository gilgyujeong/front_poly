import { useRouter } from "next/router";
import MainPagePresenter from "./mainpage.presenter";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MainPageContainer() {
    const router = useRouter()
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://koreanjson.com/posts/1');
                    setData(response.data);
                    setLoading(false);
                } catch (error: any) {
                    setError(error.message);
                    setLoading(false);
                }
        }
        fetchData();
    }, []);

    return (
        <MainPagePresenter 
            onClickBoardsNewButton={onClickBoardsNewButton} 
            onClickBoardDetail={onClickBoardDetail}
            options={options}
            data={data}
        />
    )
}