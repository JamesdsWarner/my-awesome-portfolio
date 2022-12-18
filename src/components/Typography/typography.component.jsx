import * as Styled from "./typography.styles";

export const TYPOGRAPHY_TYPE_CLASSES = {
  base: "base",
  fancy: "fancy",
  heading: "heading",
  secondHeading: "second-heading",
};

const getTypography = (type = TYPOGRAPHY_TYPE_CLASSES.base) =>
  ({
    [TYPOGRAPHY_TYPE_CLASSES.base]: Styled.Base,
    [TYPOGRAPHY_TYPE_CLASSES.fancy]: Styled.Fancy,
    [TYPOGRAPHY_TYPE_CLASSES.heading]: Styled.Heading,
    [TYPOGRAPHY_TYPE_CLASSES.secondHeading]: Styled.SecondHeading,
  }[type]);
const Typography = ({ color, size, type, children, ...otherProps }) => {
  const CustomTypography = getTypography(type);
  return (
    <Styled.TypographyContainer {...otherProps}>
      <CustomTypography color={color} size={size}>
        {children}
      </CustomTypography>
    </Styled.TypographyContainer>
  );
};

export default Typography;
