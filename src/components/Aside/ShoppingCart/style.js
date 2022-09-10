import styled from "styled-components";

export const ContainerCart = styled.div`
  background-color: var(--lightGrey);

  display: flex;
  flex-direction: column;
  width: 100%;

  border-radius: 5px;

  margin: 0 auto;
  height: 100%;
  min-height: 200px;

  @media (min-width: 925px) {
    margin: 0px;
    min-width: 350px;
  }
`;

export const TitleSection = styled.section`
  display: flex;
  align-items: center;

  width: 100%;
  height: 50px;

  background-color: var(--green);

  border-radius: 5px 5px 0px 0px;

  margin-bottom: 10px;
`;
export const Title = styled.h3`
  color: var(--white);

  margin-left: 15px;

  font-size: 18px;
  font-weight: 700;
`;
