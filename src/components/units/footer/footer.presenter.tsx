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
                <S.ChatButton />
            </S.IconBox>
            <S.IconBox>
                <S.UserButton />
            </S.IconBox>
        </S.FooterBox>
        
    )
}