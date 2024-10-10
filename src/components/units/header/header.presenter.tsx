import * as S from './header.styles'

export default function HeaderPresenter(props: any) {
    return (
        <S.HeaderBox>
            <S.ImageBox src='./img/img1.jpg'/>
            <S.LocationInfo>현재위치</S.LocationInfo>
            <S.LoginButton onClick={props.onClickLogin}>로그인</S.LoginButton>
            <S.SignUpButton onClick={props.onClickSignUp}>회원가입</S.SignUpButton>
        </S.HeaderBox>
    )
}