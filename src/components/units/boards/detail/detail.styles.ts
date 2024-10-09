import styled from "@emotion/styled";
import { Image, Carousel } from "antd";

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

export const InputBox = styled.div`
    width: 300px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
   
`

export const BoardImage = styled(Image)`
    width: 300px;
    height: 200px;
    object-fit: cover;
`

export const ImagesBox = styled(Carousel)`
    margin: 10px;
    width: 300px;
    height: 200px;
    overflow: hidden;
`

export const Nickname = styled.span`
    font-size: 15px;
    margin: 10px;
`

export const Price = styled.span`
    font-size: 13px;
    margin-left: 160px;
`