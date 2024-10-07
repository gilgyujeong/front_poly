import { EllipsisOutlined, HeartOutlined, CommentOutlined } from '@ant-design/icons';
import * as S from './mainpage.styles'
import { Avatar, Card } from 'antd';
const { Meta } = Card;

export default function MainPagePresenter(props: any) {
    return (
        <S.MainBox>
            <S.BoardCategoryBox>
                <S.BoardCategoryButton type="primary">전체</S.BoardCategoryButton>
                <S.BoardCategoryButton type="primary">요청하기</S.BoardCategoryButton>
                <S.BoardCategoryButton type="primary">요청받기</S.BoardCategoryButton>
            </S.BoardCategoryBox>
            <S.Board
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                    <HeartOutlined key="heart" />,
                    <CommentOutlined key="chat" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
            >
                <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title="Board title"
                />
            </S.Board>
            <S.Board
                cover={
                <img
                    alt="example"
                    src="https://png.pngtree.com/thumb_back/fw800/background/20230515/pngtree-blue-clouds-in-the-sky-wallpaper-stock-videos-e-broll-footage-image_2541971.jpg"
                />
                }
                actions={[
                <HeartOutlined key="heart" />,
                <CommentOutlined key="chat" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title="Board title"
                />
            </S.Board>
            <S.Board
                cover={
                <img
                    alt="example"
                    src="https://img.freepik.com/free-vector/gradient-pastel-sky-background_23-2148902194.jpg"
                />
                }
                actions={[
                    <HeartOutlined key="heart" />,
                    <CommentOutlined key="chat" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
            >
                <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title="Board title"
                />
            </S.Board>
            <S.BoardWriteButton onClick={props.onClickBoardsNewButton} />
        </S.MainBox>
    )
}