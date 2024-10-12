import * as S from './kakaomap.styles'

interface IKakaoMapPresenterProps {
    location: { 
        lat: number;
        lng: number;
    };
    address: string;
    onClickUpdate: () => void;
    onClickCancel: () => void;
}

export default function KakaoMapPresenter(props: IKakaoMapPresenterProps) {
    return (
        <S.MainBox>
            <S.MapBox id='map'>
            </S.MapBox>
            <S.TextBox>
                현재 주소: {props.address}
            </S.TextBox>
            <S.ButtonBox>
                <S.MapButton type='primary' onClick={props.onClickUpdate}>위치 갱신</S.MapButton>
                <S.MapButton onClick={props.onClickCancel}>취소</S.MapButton>
            </S.ButtonBox>
        </S.MainBox>
    )
}