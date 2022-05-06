import * as Styled from "./navigation.styles";
import { Outlet } from "react-router-dom";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import { useState } from "react";
import Logo from "../../components/logo/logo.component";
import Footer from "../../components/footer/footer.component";
import { useWindowSize } from "../../utils/responsive.helper";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeDropdown = () => setClick(false);

  const isWide = useWindowSize();

  return (
    <>
      <Styled.NavigationContainer>
        <Logo />
        <Styled.MenuIconContainer onClick={handleClick}>
          <Styled.MenuIcon className={click ? "fas fa-times" : "fas fa-bars"} />
        </Styled.MenuIconContainer>

        <Styled.NavLinks isClicked={click}>
          <Styled.NavItem>
            <Styled.NavLink to="/about" onClick={closeDropdown}>
              ABOUT ME
            </Styled.NavLink>
          </Styled.NavItem>

          <Styled.NavItem>
            <Styled.NavLink to="/videos" onClick={closeDropdown}>
              VIDEOS
            </Styled.NavLink>
          </Styled.NavItem>

          <Styled.NavItem
            onClick={() => navigator.clipboard.writeText("james@seenit.io")}
          >
            {
              <Link to="/contact" onClick={closeDropdown}>
                {isWide ? (
                  <Button buttonType={BUTTON_TYPE_CLASSES.contact}>
                    CONTACT ME
                  </Button>
                ) : (
                  <Styled.NavLink as="span">CONTACT ME</Styled.NavLink>
                )}
              </Link>
            }
          </Styled.NavItem>
        </Styled.NavLinks>
      </Styled.NavigationContainer>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
