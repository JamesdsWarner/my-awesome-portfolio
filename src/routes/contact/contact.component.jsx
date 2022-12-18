import * as Styled from "./contact.styles";
import { useState, useRef } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import emailjs from "@emailjs/browser";
import Typography from "../../components/Typography/typography.component";
import { Link } from "react-router-dom";

const Contact = () => {
  const FORM_ENDPOINT = "";
  const [submitted, setSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    setSubmitted(true);
    e.preventDefault();

    emailjs.sendForm("service_p7iuh9p", "template_ebuj7wa", form.current, "FZ9sXFZ-eYKw1qdEO").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  if (submitted) {
    return (
      <Styled.ThankYouContainer>
        <Typography size="large" type="fancy">
          Thank you!
        </Typography>{" "}
        <Typography type="fancy">We'l be in touch soon</Typography> <Styled.ContactBox />
        <Styled.ThankYouButtonWrapper>
          <Link to="/">
            <Button buttonType={BUTTON_TYPE_CLASSES.baseLarge}>Home</Button>
          </Link>
        </Styled.ThankYouButtonWrapper>
      </Styled.ThankYouContainer>
    );
  }

  return (
    <Styled.ContactPageContainer>
      <Styled.ContactContainer>
        <Typography type="fancy">Contact me</Typography> <Styled.ContactBox />
        <Styled.ContactForm action={FORM_ENDPOINT} onSubmit={sendEmail} ref={form}>
          <Styled.FormInputWrapper>
            <Styled.FormInput type="text" placeholder="Your name" name="name" required />
          </Styled.FormInputWrapper>
          <Styled.FormInputWrapper>
            <Styled.FormInput type="email" placeholder="Email" name="email" required />
          </Styled.FormInputWrapper>
          <Styled.FormInputWrapper>
            <Styled.Message placeholder="Your message" name="message" required />
          </Styled.FormInputWrapper>
          <Styled.FormInputWrapper>
            <Button buttonType={BUTTON_TYPE_CLASSES.baseLarge} type="submit">
              Send message
            </Button>
          </Styled.FormInputWrapper>
        </Styled.ContactForm>
      </Styled.ContactContainer>
    </Styled.ContactPageContainer>
  );
};

export default Contact;
