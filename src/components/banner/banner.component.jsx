import * as Styled from "./banner.styles";
import Typography from "../Typography/typography.component";

const Banner = () => {
  const companiesArray = ["Amazon", "HandM", "PayPal", "Trustpilot", "Viacom"];

  return (
    <>
      <Styled.BannerContainer>
        <Styled.BannerBox />
        <Typography type="fancy">Companies I've worked with</Typography>{" "}
        <Styled.LogoContainer>
          {companiesArray.map((company, i) => {
            return (
              <Styled.Logo
                src={`https://res.cloudinary.com/dbq4xtolf/image/upload/w_0.5,h_0.5,c_scale/portfolio/${company}.webp`}
                alt={`${company} logo`}
                key={i}
                loading="lazy"
              />
            );
          })}
        </Styled.LogoContainer>
      </Styled.BannerContainer>
    </>
  );
};

export default Banner;
