import styled from "styled-components";

export const BannerContainer = styled.div`
  margin-top: 40px;
  justify-content: space-around;
  overflow: hidden;
  border-radius: 50px;
  box-shadow: 0 0 25px -13px #1d3557;
  text-align: center;
  position: relative;
  max-width: 1000px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  > * {
    &:nth-child(2) {
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 1305px) {
    border-radius: 50px;
  }
`;

export const BannerBox = styled.div`
  height: 900px;
  width: 100%;
  background: #f1faee;
  position: absolute;
  border-radius: 5px;
`;

export const Logo = styled.img`
  width: 120px;
  height: 80px;
  object-fit: contain;
  margin-top: -20px;
  margin-bottom: 15px;

  :nth-child(2) {
    height: 60px;
    margin-top: -12px;
  }

  :first-child {
    height: 60px;
    margin-top: -2px;
  }

  @media screen and (max-width: 585px) {
    width: 100px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5%;
  opacity: 0.6;
  filter: brightness(125%);
  top: 30px;
  margin-top: 30px;
`;
