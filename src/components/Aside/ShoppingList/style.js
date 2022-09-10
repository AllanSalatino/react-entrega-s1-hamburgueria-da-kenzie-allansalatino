import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    width: 100%;

    & > div{
        text-align: center;
        margin: 0 auto;
        margin-top: 30px;

        & > h1{
            font-size: 18px;
            font-weight: 700;
        }

        & > p{
            font-size: 14px;
            font-weight: 400;
            color: #828282;
        }
    }
`