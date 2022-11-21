import styled from "styled-components";

export const Vertical = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const Title = styled.span`
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #666666;
`;

export const Input = styled.input`
    width: 230px;
    height: 30px !important;
    height: auto;
    box-shadow: none;
    border: solid 1px #b2b2b2;
    outline: none !important;
    border-radius: 3px;

    :focus {
        border: solid 1px #2596be;
    }


`