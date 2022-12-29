import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: center;
  font-size: 30px;
  margin: auto;
  padding-top: 40px;
`;

export const HomeBackground = styled.div`
  background-image: url("https://www.transparenttextures.com/patterns/french-stucco.png");
  z-index: 4;
`;

export const HomeBorderBackground = styled.div`
  background-image: -webkit-linear-gradient(110deg, transparent 53%, #fff 53%);
  z-index: 0;
`;

export const HomeGradientBackground = styled.div`
  width: 100%;
  min-height: 95vw;
  position: relative;
  background-image: linear-gradient(to bottom right, #c4dbf6, #3b8beb);
  overflow: hidden;
`;

export const LineBreak = styled.hr`
  border: 1px solid black;
  border-radius: 5px;
  opacity: 0.2;
  margin: 40px auto 10px;
  width: 60px;
`;

export const TitleContainer = styled.div`
  z-index: 0;
  @media screen and (min-width: 961px) {
    margin-top: 115px;
  }
`;

export const IntroductionContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin-bottom: 60px;
  flex-direction: column;
  width: 77.1vw;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 961px) {
    flex-direction: row;
  }
`;

export const MainImageContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;

  overflow: hidden;
  justify-content: center;
  transition: transform 0.2s;
  position: relative;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 50vw;
  height: 50vw;
  max-width: 280px;
  max-height: 280px;

  @media screen and (max-width: 961px) {
    margin-top: 30px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const MainImage = styled.img`
  &:hover {
    opacity: 0;
  }
`;

export const MainImageBackground = styled.img.attrs({
  src: "https://res.cloudinary.com/dbq4xtolf/image/upload/w_560,h_560,c_scale/portfolio/main-profile-image-background.webp",
})`
  opacity: 0;
  position: absolute;
  transition: opacity 0.2s;
  width: 100%;

  &:hover {
    opacity: 1;
    transition: opacity 0.4s;
  }
`;

export const DescriptionText = styled.span`
  margin-top: 30px;
  font-size: 20px;
  @media screen and (min-width: 961px) {
    position: absolute;
    width: 32%;
    margin-top: 230px;
    left: 11.45vw;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  @media screen and (min-width: 961px) {
    position: absolute;
    width: 40%;
    margin-top: 430px;
    justify-content: flex-start;
    left: 11.45vw;
  }
`;
