import { Avatar } from 'antd'
import * as S from './profile.style'
import { UserOutlined } from '@ant-design/icons'

export default function ProfilePresenter() {
    return (
        <S.MainBox>
            <S.InputBox>
                <Avatar size={54} icon={<UserOutlined />} />
                <S.NicknameBox>닉네임</S.NicknameBox>
            </S.InputBox>
            <S.InputBox>
                <S.LinkButton>개인정보 수정</S.LinkButton>
            </S.InputBox>
            <S.InputBox>
                <S.EmptyBox><S.ProfileImage src='/img/foot.png' /></S.EmptyBox>
                <S.EmptyBox><S.FootSizeBox>100 cm</S.FootSizeBox></S.EmptyBox>
                <S.EmptyBox></S.EmptyBox>
            </S.InputBox>
            <S.MoneyInputBox>
                <S.MoneyTitle>충전금액 :</S.MoneyTitle>
                <S.MoneyValue>10000</S.MoneyValue>
                <S.MoneyUnit>원</S.MoneyUnit>
            </S.MoneyInputBox>
            <S.InputBox>
                <S.MoneyButton type='primary'>충전</S.MoneyButton>
                <S.MoneyButton>송금</S.MoneyButton>
            </S.InputBox>
            <S.InputBox>
                <S.LinkButton>관심 목록</S.LinkButton>
            </S.InputBox>
            <S.InputBox>
                <S.LinkButton>거래 목록</S.LinkButton>
            </S.InputBox>
            <S.InputBox>
                <S.LinkButton>리뷰 목록</S.LinkButton>
            </S.InputBox>
            <S.bannerBox>광 고</S.bannerBox>
        </S.MainBox>
    )
}