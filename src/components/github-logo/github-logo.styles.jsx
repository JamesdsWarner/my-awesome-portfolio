import styled from "styled-components";
import GithubLogo from "../../assets/images/seenit-logo-brand-white-rgb.png";

export const GithubLogoContainer = styled.div`
  object-fit: contain;
  width: 250px;
`;

export const GithubLogoImage = styled.img.attrs({
  src: `${GithubLogo}`,
})`
  max-width: 100%;
  max-height: 100%;
`;
