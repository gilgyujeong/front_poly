import { Avatar } from 'antd';
import * as S from './detail.styles'
import { UserOutlined } from '@ant-design/icons';
import { BoardButton } from '../write/write.style';

interface DetailPresenterProps {
    images: string[];
    onClickBack: () => void;
}

export default function DetailPresenter(props: DetailPresenterProps) {
    return (
        <S.MainBox>
            <S.ImagesBox arrows infinite={false}>
                {props.images.map((image:string) => (
                    <div key={image}>
                        <S.BoardImage src={image} style={{height: '200px', width: '300px', objectFit: 'cover'}} />
                    </div>
                ))}
            </S.ImagesBox>
            <S.InputBox>
                <Avatar icon={<UserOutlined />} /><S.Nickname>아이디</S.Nickname><S.Price>가격</S.Price>
            </S.InputBox>
            <S.Line></S.Line>
            <S.ContentsBox>게시글 내용</S.ContentsBox>
            <S.DateBox>2024-10-24</S.DateBox>
            <S.LocationBox>대구 평리동</S.LocationBox>
            <S.BoardButton type='primary'>요청</S.BoardButton>
            <S.BoardButton onClick={props.onClickBack}>뒤로</S.BoardButton>
        </S.MainBox>
    )
}