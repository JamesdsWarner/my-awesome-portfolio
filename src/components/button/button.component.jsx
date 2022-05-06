import * as Styled from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  contact: "contact",
  baseLarge: "base-large",
  contactLarge: "contact-large",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: Styled.BaseButton,
    [BUTTON_TYPE_CLASSES.contact]: Styled.ContactButton,
    [BUTTON_TYPE_CLASSES.baseLarge]: Styled.LargeBaseButton,
    [BUTTON_TYPE_CLASSES.contactLarge]: Styled.LargeContactButton,
  }[buttonType]);

const Button = ({ buttonType, children, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <Styled.ButtonContainer {...otherProps}>
      <CustomButton>{children}</CustomButton>
    </Styled.ButtonContainer>
  );
};

export default Button;
