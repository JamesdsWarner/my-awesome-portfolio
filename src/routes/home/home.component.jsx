import * as Styled from "./home.styles";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import Banner from "../../components/banner/banner.component";
import VideoCatalogue from "../../components/video-catalogue/video-catalogue.component";
import { Link } from "react-router-dom";
import Skills from "../../components/skills/skills.component";

const Home = () => {
  return (
    <Styled.HomeContainer>
      <Styled.IntroductionContainer>
        <Styled.TitleContainer>
          <Styled.HomeTitle>I'm James Warner.</Styled.HomeTitle>
          <Styled.SubTitle>Video Editor/Web Developer</Styled.SubTitle>
        </Styled.TitleContainer>
        <Styled.MainImageContainer>
          <Styled.MainImageBackground />
          <Styled.MainImage />
        </Styled.MainImageContainer>
        <Styled.DescriptionText>
          London based creative & technical professional. Experience in
          Storytelling, motion graphics and sound design.
        </Styled.DescriptionText>
        <Styled.ButtonsContainer>
          <Button buttonType={BUTTON_TYPE_CLASSES.baseLarge}>ABOUT ME</Button>
          <Link to="/contact">
            <Button buttonType={BUTTON_TYPE_CLASSES.contactLarge}>
              CONTACT ME
            </Button>
          </Link>
        </Styled.ButtonsContainer>
      </Styled.IntroductionContainer>
      <Skills />
      <Styled.LineBreak />
      <Banner />
      <Styled.LineBreak />
      <VideoCatalogue></VideoCatalogue>
    </Styled.HomeContainer>
  );
};

export default Home;
