import Search from 'antd/es/input/Search'
import * as S from './chat.style'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

interface IChatPresenterProps {
    onClickChatDetail: () => void;
}

export default function ChatPresenter(props: IChatPresenterProps) {
    return(
        <S.MainBox>
            <S.SearchBox>
                <Search />
            </S.SearchBox>
            <S.ChatListBox onClick={props.onClickChatDetail}>
                <S.AvatarBox>
                    <Avatar shape="square" size="large" icon={<UserOutlined />} />
                </S.AvatarBox>
                <S.Nickname>아이디</S.Nickname> <S.DateBox>날짜시간</S.DateBox>
                <S.ContentBox>최근내용</S.ContentBox>
            </S.ChatListBox>
            <S.ChatListBox>
                <S.AvatarBox>
                    <Avatar shape="square" size="large" icon={<UserOutlined />} />
                </S.AvatarBox>
                <S.Nickname>아이디</S.Nickname> <S.DateBox>날짜시간</S.DateBox>
                <S.ContentBox>최근내용</S.ContentBox>
            </S.ChatListBox>
            <S.ChatListBox>
                <S.AvatarBox>
                    <Avatar shape="square" size="large" icon={<UserOutlined />} />
                </S.AvatarBox>
                <S.Nickname>아이디</S.Nickname> <S.DateBox>날짜시간</S.DateBox>
                <S.ContentBox>최근내용</S.ContentBox>
            </S.ChatListBox>
        </S.MainBox>
    )
}