import * as Styled from './github-logo.styles';

const GithubLogo = () => {
  return (
    <Styled.GithubLink
      target="_blank"
      href="https://github.com/stars/JamesdsWarner/lists/portfolio"
    >
      <Styled.GithubLogoContainer>
        <Styled.GithubLogoImage />
      </Styled.GithubLogoContainer>
    </Styled.GithubLink>
  );
};

export default GithubLogo;
