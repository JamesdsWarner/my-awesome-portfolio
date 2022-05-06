import * as Styled from "./contact.styles";
import { useState, useRef } from "react";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const Contact = () => {
  const FORM_ENDPOINT = "";
  const [submitted, setSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    setSubmitted(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p7iuh9p",
        "template_ebuj7wa",
        form.current,
        "FZ9sXFZ-eYKw1qdEO"
      )
      .then(
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
        <h2>Thank you!</h2>
        <h3>We'll be in touch soon.</h3>
        <Link to="/">
          <Button buttonType={BUTTON_TYPE_CLASSES.baseLarge}>Home</Button>
        </Link>
      </Styled.ThankYouContainer>
    );
  }

  return (
    <Styled.ContactContainer>
      <h2>Contact Me</h2>
      <Styled.ContactBox />
      <Styled.ContactForm
        action={FORM_ENDPOINT}
        onSubmit={sendEmail}
        ref={form}
      >
        <Styled.FormInputWrapper>
          <Styled.FormInput
            type="text"
            placeholder="Your name"
            name="name"
            required
          />
        </Styled.FormInputWrapper>
        <Styled.FormInputWrapper>
          <Styled.FormInput
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </Styled.FormInputWrapper>
        <Styled.FormInputWrapper>
          <Styled.Message placeholder="Your message" name="message" required />
        </Styled.FormInputWrapper>
        <Styled.FormInputWrapper>
          <Button buttonType={BUTTON_TYPE_CLASSES.baseLarge} type="submit">
            Send a message
          </Button>
        </Styled.FormInputWrapper>
      </Styled.ContactForm>
    </Styled.ContactContainer>
  );
};

export default Contact;
