import styled from "styled-components";

export const SkillsContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 6%;

  @media screen and (min-width: 961px) {
    width: 740.156px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SkillsLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const SkillsLogoWrapper = styled.span`
  width: 15%;
  @media screen and (max-width: 961px) {
    width: 112px;
  }
`;

export const SkillsHeader = styled.h2`
  text-align: center;
  font-family: "Courgette", cursive;
  font-size: 5rem;
  color: #264653;
  margin-top: 30px;
`;
