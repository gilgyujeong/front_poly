import { Avatar } from 'antd';
import * as S from './detail.styles'
import { UserOutlined } from '@ant-design/icons';

interface DetailPresenterProps {
    images: string[];
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
        </S.MainBox>
    )
}