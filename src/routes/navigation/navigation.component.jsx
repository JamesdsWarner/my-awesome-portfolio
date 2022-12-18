import * as Styled from "./navigation.styles";
import { Outlet } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import { useState } from "react";
import Logo from "../../components/logo/logo.component";
import Footer from "../../components/footer/footer.component";
import { useWindowSize } from "../../utils/responsive.helper";
import { Link } from "react-router-dom";
import GithubLogo from "../../components/github-logo/github-logo.component";

const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeDropdown = () => setClick(false);

  const isWide = useWindowSize();

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
