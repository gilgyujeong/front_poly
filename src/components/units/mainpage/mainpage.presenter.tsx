import { EllipsisOutlined, HeartOutlined, CommentOutlined, UserOutlined } from '@ant-design/icons';
import * as S from './mainpage.styles'
import { Avatar, Card } from 'antd';
const { Meta } = Card;



export default function MainPagePresenter(props: any) {
    return (
        <S.MainBox>
            <S.RadioButton block options={props.options} defaultValue="전체" optionType="button" />
            <S.Board
                cover={
                <img onClick={props.onClickBoardDetail}
                    alt=""
                    src="https://cdn.crowdpic.net/detail-thumb/thumb_d_1A8BCDE5FEEF53D0EFF70EB4D5666C5D.jpg"
                />
                }
                actions={[
                    <HeartOutlined key="heart" />,
                    <CommentOutlined key="chat" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
            >
                <Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title="마카롱 사주실수 있나요?"
                description='경북 경주시 북부동'
                />
            </S.Board>
            <S.Board
                cover={
                <img
                    alt=""
                    src="https://mblogthumb-phinf.pstatic.net/MjAyNDAyMDFfMTky/MDAxNzA2NzY4MTE3ODYz.AIVJfKB6zWdYhtXSPdsOY_rkms80Arx2NVtzRg5Brpsg.1VCLA16G7M7vCs2LLQAhG_lQ7F-jj9LJ4WOy_a5XKQ4g.JPEG.jiyoul0908/SE-346806b3-ccee-46ae-8927-f9ba0238c1a2.jpg?type=w800"
                />
                }
                actions={[
                <HeartOutlined key="heart" />,
                <CommentOutlined key="chat" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title="무침회 골목 지나가시는분"
                description='대구 서구 내당동'
                />
            </S.Board>
            <S.Board
                cover={
                <img
                    alt=""
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5524%2F2024%2F10%2F16%2F0000316664_001_20241016060016176.jpg&type=sc960_832"
                />
                }
                actions={[
                    <HeartOutlined key="heart" />,
                    <CommentOutlined key="chat" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
            >
                <Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title="맥스x800도씨 이마트 오픈런 구매해주실분"
                description='대구시 수성구 시지동'
                />
            </S.Board>
            <S.Board
                cover={
                <img
                    alt=""
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA0MDVfMjk5%2FMDAxNTU0NDc0OTEzMzg3.dPOcZ5VVOEtvqzoCemPwTiJWaTx7_BLA_HCxEbzKviUg.1v1AbsEHV8HaUiFnPf9Aur66Y47IE4Ue3_ys26QKnucg.JPEG.sje4842%2FDSC08966.JPG&type=sc960_832"
                />
                }
                actions={[
                    <HeartOutlined key="heart" />,
                    <CommentOutlined key="chat" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
            >
                <Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title="캠핑중인데 지나가시는 분 고기좀 사주실수 있나요?"
                description='경북 영천시 삼매리'
                />
            </S.Board>
            <S.Board
                cover={
                <img
                    alt=""
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140723_62%2Ftnsfks0513_1406086545744LB381_JPEG%2FIMG_5107.JPG&type=sc960_832"
                />
                }
                actions={[
                    <HeartOutlined key="heart" />,
                    <CommentOutlined key="chat" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
            >
                <Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title="혹시 안동 맘모스 제과 지나가시는 분 있나요?"
                description='대구시 수성구 시지동'
                />
            </S.Board>
            <S.Board
                cover={
                <img
                    alt=""
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMDNfMjk3%2FMDAxNzA0MjQ1MTUyNDkz.WySBqT1baQoAkb8IbuefNlquO8KDgRXsJQ85jR1BrCcg.q85HBI4K8IzCfx5CWbHZaR-C51iFIlOQb-Qmc7i43QUg.JPEG.jinjem2%2Foutput_44139190.jpg&type=sc960_832"
                />
                }
                actions={[
                    <HeartOutlined key="heart" />,
                    <CommentOutlined key="chat" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
            >
                <Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title="죽도시장 연다라회식당에서 대게 포장 해주실분"
                description='대구시 달서구 평리동'
                />
            </S.Board>
            <S.BoardWriteButton onClick={props.onClickBoardsNewButton} />
        </S.MainBox>
    )
}