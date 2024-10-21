import { EnvironmentOutlined, PictureOutlined, SmileOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";


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
export const WriteBox = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    position: fixed;
    align-items: end;
    bottom: 60px;
    background-color: white;
`

export const WriteInput = styled(TextArea)`
    width: 100%;
    height: 80px;
`

export const WriteInputBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 35px;
`

export const WriteButton = styled(Button)`
    width: 20%;
    height: 30px;
    margin: 2px;   
`

export const IconBox = styled.div`
    width: 80%;
    height: 30px;
    display: flex;
    flex-direction: row;
    padding: 8px;
`

export const locationButton = styled(EnvironmentOutlined)`
    font-size: 20px;
    margin-right: 10px;
    cursor: pointer;
`

export const ImageButton = styled(PictureOutlined)`
    font-size: 20px;
    margin-right: 10px;
    cursor: pointer;
`

export const EmoticonButton = styled(SmileOutlined)`
    font-size: 20px;
    margin-right: 10px;
    cursor: pointer;
`