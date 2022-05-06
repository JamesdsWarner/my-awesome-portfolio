import * as Styled from "./footer.styles";
import Logo from "../logo/logo.component";
import SeenitLogo from "../seenit-logo/seenit-logo.component";

const Footer = () => {
  return (
    <Styled.FooterContainer>
      <Logo />
      <SeenitLogo />
    </Styled.FooterContainer>
  );
};

export default Footer;
