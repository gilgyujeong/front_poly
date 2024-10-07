import styled from '@emotion/styled';
import { Avatar, Card } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

export const MainBox = styled.div`
    background-color: #e6f7ff;
    width: 360px;
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

    .ant-card-meta{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .ant-card-meta-title {
        font-size: 18px;
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
