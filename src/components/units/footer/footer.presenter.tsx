import { HomeOutlined, SearchOutlined, UserOutlined, EnvironmentOutlined, CommentOutlined } from "@ant-design/icons"
import * as S from './footer.styles'

export default function FooterPresenter(props: any) {
    return (
        <S.FooterBox>
            <S.IconBox>
                <S.HomeButton onClick={props.onClickHome} />
            </S.IconBox>
            <S.IconBox>
                <S.LocationButton />
            </S.IconBox>
            <S.IconBox>
                <S.SearchButton />
            </S.IconBox>
            <S.IconBox>
                <S.ChatButton onClick={props.onClickChat} />
            </S.IconBox>
            <S.IconBox>
                <S.UserButton onClick={props.onClickProfile} />
            </S.IconBox>
        </S.FooterBox>
        
    )
}