import { HomeOutlined, SearchOutlined, UserOutlined, EnvironmentOutlined, CommentOutlined } from "@ant-design/icons"
import styled from "@emotion/styled"

export const FooterBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background-color: #d1e0e5;
    position: fixed;
    bottom: 0px;
`

export const IconBox = styled.span`
    margin: 15px;
    
`

export const HomeButton = styled(HomeOutlined)`
    font-size: 30px;
    cursor: pointer;
    
`

export const LocationButton = styled(EnvironmentOutlined)`
    font-size: 30px;
    cursor: pointer;
`

export const SearchButton = styled(SearchOutlined)`
    font-size: 30px;
    cursor: pointer;
`

export const ChatButton = styled(CommentOutlined)`
    font-size: 30px;
    cursor: pointer;
`

export const UserButton = styled(UserOutlined)`
    font-size: 30px;
    cursor: pointer;
`