import * as AS from "../../../commons/authStyle";
import { Button, Input } from "antd";
import * as S from './loginStyles'

export default function LoginPresenter(props: any):JSX.Element {
    return (
        <AS.PageSize>
            <AS.LoginImg src="img/img1.jpg" />
            <AS.LoginTitle>가는김에 로그인</AS.LoginTitle>
            <S.InputBox>
                <Input placeholder='아이디를 입력해주세요.'></Input>
            </S.InputBox>
            <S.InputBox>
                <Input placeholder='비밀번호를 입력해주세요.' type="password"></Input>
            </S.InputBox>
            <S.InputBox>
                <Button type="primary" style={{ width: '300px'}}>로그인</Button>
            </S.InputBox>
            <S.InputBox>
                <Button style={{ width: '300px' }} onClick={props.onClickCancel}>취소</Button>
            </S.InputBox>
            <S.RouterBox>
                <S.SignUpA onClick={props.onClickSignUp}>회원가입하러 가기</S.SignUpA>
            </S.RouterBox>            
        </AS.PageSize>
    )
}