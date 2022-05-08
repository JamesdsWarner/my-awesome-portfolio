import styled from "styled-components";

export const ContactContainer = styled.div`
  font-size: 30px;
  text-align: center;
  width: 40%;
  margin: 120px auto 140px;
`;

export const ContactBox = styled(ContactContainer)`
  background-color: #8ecae6;
  height: 462px;
  position: absolute;
  margin: -80px auto 0;
  z-index: -1;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  opacity: 75%;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  display: inline-block;
`;

export const FormInputWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

export const FormInput = styled.input`
  padding: 10px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: 0;
  display: block;
  width: 25vw;
`;

export const Message = styled.textarea`
  padding: 10px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 25vw;
  border: 0;
  height: 100px;
  margin-bottom: 15px;
`;

export const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  height: 665px;

  & h3 {
    margin-bottom: 30px;
  }
`;
