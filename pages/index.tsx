import * as AS from '../src/components/commons/authStyle'
import MainPageContainer from "../src/components/units/mainpage/mainpage.container";
import Layout from "../src/components/commons/layout/layout";

export default function Home() {
  return (
    <AS.PageSize>
      <Layout>
        <MainPageContainer />
      </Layout>
    </AS.PageSize>
  );
}
