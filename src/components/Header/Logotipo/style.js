import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    width: 135px;

    margin-bottom: 15px;

    @media (min-width: 600px){
        margin-left: 10%;
    }
`

export const Logo = styled.h1`
    font-size: 22px;
    color: var(--black);
`

export const Tipo = styled.h1`
    font-size: 14px;
    color: var(--pink);
`