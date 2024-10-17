import styled from "@emotion/styled";
import { Button } from "antd";

export const MainBox = styled.div`
    background-color: #e6f7ff;
    width: 100%;
    height: 680px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 60px;
    padding-bottom: 60px;
`

export const InputBox = styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    border: 1px solid lightgray;
    
    border-radius: 7px;
`

export const NicknameBox = styled.span`
    display: block;
    width: 200px;
    border: 1px solid lightgray;
    border-radius: 7px;
    font-size: 17px;
    padding: 7px;
    margin: 10px;
    background-color: white;
    text-align: center;
    font-weight: bold;
`

export const ProfileImage = styled.img`
    width: 40px;
    margin-left: 10px;
`

export const FootSizeBox = styled.div`
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    margin-left: 40px;
`

export const EmptyBox = styled.div`
    width: 95px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const MoneyInputBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 300px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 7px;
    padding: 5px;
    margin-top: 15px;
`

export const MoneyTitle = styled.div`
    width: 90px;
    font-size: 17px;
    font-weight: 600;
    color: gray;
`

export const MoneyValue = styled.div`
    width: 160px;
    font-size: 17px;
    font-weight: 600;
    text-align: end;
    color: gray;
`

export const MoneyUnit = styled.div`
    width: 50px;
    font-size: 17px;
    font-weight: 600;
    text-align: end;
    color: gray;
`

export const MoneyButton = styled(Button)`
    width: 130px;
    height: 35px;
    margin: 10px;
`

export const LinkButton = styled(Button)`
    width: 300px;
    height: 35px;
    font-weight: 17px;
    color: gray;
`

export const bannerBox = styled.div`
    width: 300px;
    height: 70px;
    border: 1px solid lightgray;
    border-radius: 7px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`