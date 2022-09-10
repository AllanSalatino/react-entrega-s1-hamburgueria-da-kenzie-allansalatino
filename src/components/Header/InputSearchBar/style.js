import styled from "styled-components";

export const Form = styled.form`
  width: 90%;
  padding-left: 15px;
  @media (min-width: 600px) {
    width: 365px;
    margin-right: 10%;
  }
`;

export const Input = styled.input`
  background-color: var(--white);

  border: 2px solid var(--mediumGrey);
  border-radius: 8px;

  width: 100%;
  height: 50px;

  padding-left: 15px;

  ::placeholder {
    color: var(--mediumGrey);
  }
`;

export const ButtonEmpty = styled.button`
  padding: 10px;
  background-color: #ff000000;
  color: #242424;
  margin-right: 98px;
  font-size: 18px;
`;
