import * as Styled from "./github-logo.styles";

const GithubLogo = () => {
  return (
    <Styled.GithubLink target="_blank" href="https://github.com/JamesdsWarner/my-awesome-portfolio">
      <Styled.GithubLogoContainer>
        <Styled.GithubLogoImage />
      </Styled.GithubLogoContainer>
    </Styled.GithubLink>
  );
};

export default GithubLogo;
