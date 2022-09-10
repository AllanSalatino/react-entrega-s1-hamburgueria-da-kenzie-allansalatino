import styled from "styled-components";

export const CardsCart = styled.li`
    display: flex;
    align-items: flex-start;

    width: 98%;
    height: 60px;

    padding-left: 10px;

    margin-bottom: 10px;
`
export const ContainerCard = styled.section`
    display: flex;

    width: 80%;
    height: 100%;
`
export const Image = styled.img`
    background-color: var(--mediumGrey);
    
    width: 80px;

    border-radius: 5px;

    margin-right: 10px;
`
export const Name = styled.div`
    color: var(--black);

    font-size: 18px;
    font-weight: 700;
`
export const Product = styled.div`
    color: var(--darkGrey);

    font-size: 12px;
    font-weight: 400;
`

export const DivNameProduct = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    width: 60%;
`

export const ButtonRemove = styled.div`
    color: var(--darkGrey);

    font-size: 12px;
    font-weight: 400;

    margin-top: 10px;
`