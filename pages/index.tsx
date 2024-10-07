import Head from "next/head";
import Image from "next/image";
import * as AS from '../src/components/commons/authStyle'
import FooterPresenter from "../src/components/units/footer/footer.presenter";
import HeaderContainer from "../src/components/units/header/header.container";

export default function Home() {
  return (
    <AS.PageSize style={{ backgroundColor: '#e6f7ff' }}>
      <HeaderContainer />
      <div style={{ margin: '10px auto'}}>메인 페이지</div>
      <FooterPresenter />
    </AS.PageSize>
  );
}
