import * as Styled from "./footer.styles";
import Logo from "../logo/logo.component";
import GithubLogo from "../github-logo/github-logo.component";

const Footer = () => {
  return (
    <Styled.FooterContainer>
      <Logo />
      <GithubLogo />
    </Styled.FooterContainer>
  );
};

export default Footer;
