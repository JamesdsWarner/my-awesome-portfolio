import * as Styled from "./github-logo.styles";

const GithubLogo = () => {
  return (
    <a target="_blank" href="https://github.com/JamesdsWarner/my-awesome-portfolio">
      <Styled.GithubLogoContainer>
        <Styled.GithubLogoImage />
      </Styled.GithubLogoContainer>
    </a>
  );
};

export default GithubLogo;
