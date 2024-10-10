import styled from "@emotion/styled";
import { Image, Carousel, Button } from "antd";

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
    margin: 5px;
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
export const Line = styled.hr`
    border-top: 2px solid black;
    width: 280px;
`

export const ContentsBox = styled.div`
    width: 300px;
    height: 130px;
    font-size: 13px;
    padding: 10px;
    margin-top: 15px;
    border: 2px solid lightblue;
    background-color: white;
`

export const DateBox = styled.div`
    width: 300px;
    height: 30px;
    font-size: 13px;
    font-weight: bold;
    margin-top: 15px;
    padding: 4px 10px;
    border: 2px solid lightblue;
    background-color: white;
`

export const LocationBox = styled.div`
    width: 300px;
    height: 30px;
    font-size: 13px;
    font-weight: bold;
    margin-top: 15px;
    padding: 4px 10px;
    border: 2px solid lightblue;
    background-color: white;
`

export const BoardButton = styled(Button)`
    width: 300px;
    margin-top: 15px;
`