import FooterContainer from "../../../src/components/units/footer/footer.container";
import HeaderContainer from "../../../src/components/units/header/header.container";

export default function BoardNewPage() {

    return (
        <>
            <HeaderContainer />
            <div style={{ position: 'fixed', top: '70px'}}>게시글 작성 페이지</div>
            <FooterContainer />
        </>
    )
}