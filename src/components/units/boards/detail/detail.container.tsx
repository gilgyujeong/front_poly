import { useRouter } from "next/router";
import DetailPresenter from "./detail.presenter";

export default function DetailContainer() {

    const images = [
        "https://png.pngtree.com/thumb_back/fw800/background/20230515/pngtree-blue-clouds-in-the-sky-wallpaper-stock-videos-e-broll-footage-image_2541971.jpg",
        "https://img.freepik.com/free-vector/gradient-pastel-sky-background_23-2148902194.jpg",
        "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    ]

    const router = useRouter()

    const onClickBack = () => {
        router.push('/')
    }

    return (
        <DetailPresenter 
            images={images} 
            onClickBack={onClickBack}    
        />
    )
}