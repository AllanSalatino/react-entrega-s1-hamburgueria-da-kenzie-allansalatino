import styled from "styled-components";

export const HeaderPage = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  background-color: var(--lightGrey);

  padding: 10px 0px;
  margin-bottom: 20px;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }

  button {
    position: absolute;
    top: 62px;
    right: 7%;

    @media (min-width: 600px) {
      top: 17px;
      right: 11%;
    }
  }
`;
