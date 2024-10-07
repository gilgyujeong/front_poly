import Head from "next/head";
import Image from "next/image";
import * as AS from '../src/components/commons/authStyle'
import FooterPresenter from "../src/components/units/footer/footer.presenter";
import HeaderContainer from "../src/components/units/header/header.container";
import MainPageContainer from "../src/components/units/mainpage/mainpage.container";

export default function Home() {
  return (
    <AS.PageSize>
      <HeaderContainer />
      <MainPageContainer />
      <FooterPresenter />
    </AS.PageSize>
  );
}
