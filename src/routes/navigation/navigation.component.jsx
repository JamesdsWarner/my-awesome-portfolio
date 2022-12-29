import * as Styled from "./navigation.styles";
import { Outlet } from "react-router-dom";
import Logo from "../../components/logo/logo.component";
import Footer from "../../components/footer/footer.component";
import GithubLogo from "../../components/github-logo/github-logo.component";

const Navigation = () => {
  return (
    <>
      <Styled.EntireApp>
        <Styled.EntireAppOverlay>
          <Styled.NavigationContainer>
            <Logo />
            <GithubLogo />
          </Styled.NavigationContainer>
          <Styled.App>
            <Outlet />
            <Footer />
          </Styled.App>
        </Styled.EntireAppOverlay>
      </Styled.EntireApp>
    </>
  );
};

export default Navigation;
