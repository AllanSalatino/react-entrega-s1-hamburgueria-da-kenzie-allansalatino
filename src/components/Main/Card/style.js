import styled from "styled-components";

export const Cards = styled.li`
    min-width: 250px;
    height: 320px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    border: 1px solid var(--lightGrey);
    border-radius: 8px;

    margin: 15px;

    button{
        margin-left: 15px;
        margin-bottom: 15px;
    }
`

export const SectionImage = styled.section`
    width: 100%;

    background-color: var(--lightGrey);

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px 8px 0px 0px;
`

export const ImageCard = styled.img`
    width: 60%;
`

export const NameCard = styled.h3`
    color: var(--black);

    font-size: 18px;
    font-weight: 700;

    margin-left: 15px;
`

export const ProductCard = styled.p`
    color: var(--darkGrey);

    font-size: 12px;
    font-weight: 400;

    margin-left: 15px;
`

export const PriceCard = styled.span`
    color: var(--green);

    font-size: 14px;
    font-weight: 600;

    margin-left: 15px;
`

