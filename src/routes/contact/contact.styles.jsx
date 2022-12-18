import styled from "styled-components";

export const ContactContainer = styled.div`
  font-size: 30px;
  text-align: center;
  width: 40%;
  min-width: 200px;
  margin: auto;
  padding-top: 10%;
`;

export const ContactPageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
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
  width: 15vw;
  min-width: 200px;
`;

export const Message = styled.textarea`
  padding: 10px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 15vw;
  min-width: 200px;
  border: 0;
  height: 100px;
  margin-bottom: 15px;
`;

export const ThankYouContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-top: 300px;
  justify-content: center;
  text-align: center;
`;

export const ThankYouButtonWrapper = styled.div`
  margin-top: 30px;
`;
