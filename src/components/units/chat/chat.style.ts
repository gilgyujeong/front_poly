import styled from "@emotion/styled";

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

export const SearchBox = styled.div`
    width: 300px;
    margin-top: 10px;
`

export const ChatListBox = styled.div`
    width: 300px;
    height: 60px;
    margin-top: 10px;
    background-color: white;
    display: grid;
    grid-template-columns: 40px auto auto 65px;
    grid-template-rows: auto auto;
    gap: 5px;
    padding: 10px;
    border-radius: 15px;
`

export const AvatarBox = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 3;
`

export const Nickname = styled.span`
    font-size: 13px;
    font-weight: bold;
    grid-column: 2 / 4;
    grid-row: 1 / 2;
    padding-left: 10px;
`

export const DateBox = styled.span`
    font-size: 10px;
    color: lightgray;
    grid-column: 4 / 5;
    grid-row: 1 / 2;
    text-align: end;
`

export const ContentBox = styled.span`
    font-size: 11px;
    color: lightgray;
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    padding-left: 10px;
`