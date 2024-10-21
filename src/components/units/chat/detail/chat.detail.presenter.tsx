import * as S from './chat.detail.styles'

export default function ChatDetailPresenter() {
    return (
        <S.MainBox>
            <S.WriteBox>
                <S.WriteInput placeholder='메시지 입력' rows={4} />
                <S.WriteInputBox>
                    <S.IconBox>
                        <S.locationButton />
                        <S.ImageButton />
                        <S.EmoticonButton />
                    </S.IconBox>
                    <S.WriteButton>전송</S.WriteButton>
                </S.WriteInputBox>
                
            </S.WriteBox>
        </S.MainBox>
    )
}