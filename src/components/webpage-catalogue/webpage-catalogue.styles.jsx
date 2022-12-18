import styled from "styled-components";

export const WebpageCatalogueContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;

  > * {
    &:first-child {
      margin-bottom: 30px;
    }
  }
`;
