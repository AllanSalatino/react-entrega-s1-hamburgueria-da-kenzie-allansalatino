import styled from "styled-components";

export const ProductList = styled.ul`
    display: flex;

    width: 100%;

    overflow-y: hidden;

    margin-bottom: 25px;

    @media (min-width: 600px){
        flex-direction: row;
        flex-wrap: wrap;
        overflow-y: initial;
        width: 100%;
        max-width: 840px;
    }
`