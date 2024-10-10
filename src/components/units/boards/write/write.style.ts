import styled from "@emotion/styled";
import { Button, Radio, Upload } from "antd";

export const MainBox = styled.div`
    background-color: #e6f7ff;
    width: 100%;
    height: 620px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 60px;
`
export const ImgBox = styled.div`
    width: 360px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

export const ImgInput = styled(Upload)`
    margin: 15px;
`

export const InputBox = styled.div`
    width: 300px;
    margin: 10px;
`

export const BoardButton = styled(Button)`
    width: 300px;
`