import * as Styled from './home.styles';
import Button from '../../components/button/button.component';
import Banner from '../../components/banner/banner.component';
import VideoCatalogue from '../../components/video-catalogue/video-catalogue.component';
import { Link } from 'react-router-dom';
import Skills from '../../components/skills/skills.component';
import WebpageCatalogue from '../../components/webpage-catalogue/webpage-catalogue.component';
import Typography from '../../components/Typography/typography.component';

const Home = () => {
  return (
    <>
      <Styled.HomeGradientBackground>
        <Styled.HomeBorderBackground>
          <Styled.HomeBackground>
            <Styled.HomeContainer>
              <Styled.IntroductionContainer>
                <Styled.TitleContainer>
                  <Typography type="heading">I'm James Warner.</Typography>
                  <Typography type="second-heading">Web Developer/Video Editor</Typography>
                </Styled.TitleContainer>
                <Styled.MainImageContainer>
                  <Styled.MainImageBackground alt="Profile image background" />
                  <Styled.MainImage
                    rel="preload"
                    as="img"
                    src="https://res.cloudinary.com/dbq4xtolf/image/upload/w_560,h_560,c_scale/portfolio/main-profile-image.webp"
                    alt="profile image"
                  />
                </Styled.MainImageContainer>
                <Typography type="base">
                  London based creative & technical professional. Experience in Storytelling, motion
                  graphics and sound design.
                </Typography>
                <Styled.ButtonsContainer>
                  {' '}
                  <Link to="/contact">
                    <Button buttonType="contact-large">Contact me</Button>
                  </Link>
                </Styled.ButtonsContainer>
              </Styled.IntroductionContainer>
              <Skills />
              <Styled.LineBreak />
              <WebpageCatalogue />
              <Styled.LineBreak />
              <Typography size="large" type="fancy">
                Video Editing{' '}
              </Typography>
              <VideoCatalogue />
              <Banner />
            </Styled.HomeContainer>
          </Styled.HomeBackground>
        </Styled.HomeBorderBackground>
      </Styled.HomeGradientBackground>
    </>
  );
};

export default Home;
