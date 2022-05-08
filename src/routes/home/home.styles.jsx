import styled from "styled-components";
import myImage from "../../assets/image50-modified (1).png";
import myImageBackground from "../../assets/image50-modified-modified.png";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: center;
  font-size: 30px;
  width: 77.1vw;
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
  min-height: 101vw;
  position: relative;
  background-image: linear-gradient(to bottom right, #c4dbf6, #3b8beb);
`;

export const LineBreak = styled.hr`
  border: 1px solid black;
  border-radius: 5px;
  opacity: 0.2;
  margin: 40px auto 10px;
  width: 60px;
`;

export const HomeTitle = styled.h2``;

export const TitleContainer = styled.div`
  z-index: 0;
  @media screen and (min-width: 961px) {
    margin-top: 120px;
  }
`;

export const SubTitle = styled(HomeTitle)`
  color: #457b9d;
  font-size: 30px;
`;
export const IntroductionContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-start;

  @media screen and (min-width: 961px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const MainImageContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;

  overflow: hidden;
  justify-content: center;
  transition: transform 0.2s;
  position: relative;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (min-width: 961px) {
    margin-top: 90px;
  }

  @media screen and (min-width: 961px) and (max-width: 1420px) {
    height: 45%;
    width: 45%;
  }

  @media screen and (min-width: 1421px) {
    width: 493px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const MainImage = styled.img.attrs({
  src: `${myImage}`,
})`
  width: 100%;
  &:hover {
    opacity: 0;
  }
`;

export const MainImageBackground = styled.img.attrs({
  src: `${myImageBackground}`,
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
    margin-top: 290px;
    left: 11.45vw;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media screen and (min-width: 961px) {
    position: absolute;
    width: 40%;
    margin-top: 400px;
    justify-content: flex-start;
    left: 11.45vw;
  }
`;
