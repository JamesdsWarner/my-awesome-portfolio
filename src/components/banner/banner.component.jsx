import * as Styled from "./banner.styles";
import Typography from "../Typography/typography.component";

const Banner = () => {
  return (
    <>
      <Styled.BannerContainer>
        <Styled.BannerBox />

        <Typography size="large" type="fancy">
          Companies I've worked with
        </Typography>
        <Styled.LogoContainer>
          <Styled.Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1206px-Amazon_logo.svg.png" />
          <Styled.Logo src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" />
          <Styled.Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/1054px-PayPal_logo.svg.png?20170220144729" />
          <Styled.Logo src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Trustpilot_logo.png" />
          <Styled.Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Viacom_blue_logo.svg/2560px-Viacom_blue_logo.svg.png" />
        </Styled.LogoContainer>
      </Styled.BannerContainer>
    </>
  );
};

export default Banner;
