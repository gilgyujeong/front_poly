import { EllipsisOutlined, HeartOutlined } from '@ant-design/icons';
import * as S from './mainpage.styles'
import { Avatar, Card } from 'antd';
const { Meta } = Card;

export default function MainPagePresenter(props: any) {
    return (
        <S.MainBox>
            <S.Board
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                    <HeartOutlined key="heart" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
            >
                <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title="Card title"
                />
            </S.Board>
            <S.Board
                style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                <HeartOutlined key="heart" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title="Card title"
                />
            </S.Board>
            <S.Board
                style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                    <HeartOutlined key="heart" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
            >
                <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title="Card title"
                />
            </S.Board>
            <S.BoardWriteButton onClick={props.onClickBoardsNewButton} />
        </S.MainBox>
    )
}