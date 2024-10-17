import * as AS from "../../../commons/authStyle";
import { Button, Input } from "antd";

export default function SignUpPresenter(props: any) {

    return (
        <AS.PageSize style={{ backgroundColor: '#e9e9e7' }}>
            <AS.LoginImg src="img/img1.jpg" />
            <AS.LoginTitle>가는김에 회원가입</AS.LoginTitle>
            <AS.InputBox>
                <Input placeholder='아이디를 입력해주세요.' type="text"></Input>
            </AS.InputBox>
            <AS.InputBox>
                <Input placeholder="비밀번호를 입력해주세요" type="password" />
            </AS.InputBox>
            <AS.InputBox>
                <Input placeholder="비밀번호를 다시 입력해주세요" type="password" />
            </AS.InputBox>
            <AS.InputBox>
                <Input placeholder='별칭을 입력해주세요.' type="text"></Input>
            </AS.InputBox>
            <AS.InputBox>
                <Input placeholder="이메일을 입력해주세요" />
            </AS.InputBox>
            <AS.InputBox>
                <Button type="primary" style={{ width: '300px'}}>회원가입</Button>
            </AS.InputBox>
            <AS.InputBox>
                <Button style={{ width: '300px', marginBottom: '15px'}} onClick={props.onClickCancel}>취소</Button>
            </AS.InputBox>
        </AS.PageSize>
    )
}