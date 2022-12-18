import styled from "styled-components";
import GithubLogo from "../../assets/images/Github-logo.svg.png";

export const GithubLogoContainer = styled.div`
  object-fit: contain;
  width: 70px;
  margin-right: 50px;
`;

export const GithubLogoImage = styled.img.attrs({
  src: `${GithubLogo}`,
})`
  max-width: 100%;
  max-height: 100%;
`;
