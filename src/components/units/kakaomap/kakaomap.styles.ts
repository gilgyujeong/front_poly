import styled from "@emotion/styled";
import { Button } from "antd";

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

export const MapBox = styled.div`
    width: 360px;
    height: 535px;
`

export const TextBox = styled.div`
    font-size: 15px;
    font-weight: bold;
    color: gray;
    margin-top: 10px;
`

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 300px;
    margin-top: 10px;
`

export const MapButton = styled(Button)`
    width: 130px;
`