import styled from "styled-components";

export const Total = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: var(--lightGrey);

    border-radius: 7px;

    margin-top: 15px;

    width: 100%;

    & > div{
        display: flex;
        justify-content: space-between;
        padding: 10px;

        & > p{
            font-size: 14px;
            font-weight: 600;
        }

        & > span{
            font-size: 14px;
            font-weight: 600;
            color: #828282;
        }
    }

    & > button{
        background-color: var(--mediumGrey);

        padding: 10px;
        margin: 10px;

        border-radius: 7px;
    }
`