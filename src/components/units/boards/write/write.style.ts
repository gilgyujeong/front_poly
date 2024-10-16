import styled from "@emotion/styled";
import { Button, DatePicker, Radio, Upload } from "antd";

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
    margin: 10px;
`

export const InputBox = styled.div`
    width: 300px;
    margin: 7px;
`

export const BoardButton = styled(Button)`
    width: 300px;
`

export const TimeBox = styled.div`
    border: 1px solid lightgray;
    border-radius: 5px;
    margin: 5px;
`

export const InputDate = styled(DatePicker)`
    width: 300px;
`