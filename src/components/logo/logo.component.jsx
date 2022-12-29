import * as Styled from "./logo.styles";

const Logo = () => {
  return (
    <Styled.LogoContainer aria-label="Homepage" to="/">
      <Styled.StyledLogo />
    </Styled.LogoContainer>
  );
};

export default Logo;
