import styled from '@emotion/styled';
import { Avatar, Card, Button, Radio } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

export const MainBox = styled.div`
    background-color: #e6f7ff;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 60px;
    
`
export const Board = styled(Card)`
    background-color: #f0f0f0;
    margin: 10px 0;
    width: 300px;

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .ant-card-meta{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .ant-card-meta-title {
        font-size: 13px;
        font-weight: bold;
        color: #333;
        
    }
    .ant-card-body {
        padding: 18px;
    }

    .ant-card-meta-description {
        font-size: 12px;
        text-align: end;
        color: #333;

    }
    .ant-card-meta-avatar {
        margin: auto;
    }
`
export const BoardWriteButton = styled(PlusCircleOutlined)`
    position: fixed;
    font-size: 40px;
    bottom: 100px;
    right: 30px;
`

export const BoardCategoryBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 30px;
    margin-top: 5px;
`

export const BoardCategoryButton = styled(Button)`
    /* border: none;
    text-decoration: underline; */
    font-size: 15px;
    font-weight: bold;
    color: #003366;
    background-color: #ffffff;
`

export const RadioButton = styled(Radio.Group)`
    margin-top: 10px;
    width: 300px;
`