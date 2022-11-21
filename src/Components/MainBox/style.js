import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    height: fit-content;

    border: solid 1px #c4c4c4;
    margin: auto;

    transform: translate(0, 23vh);
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const Left = styled.div`
    display: flex;

    width: 310px;
    height: 320px;

    background: #ffffff;

    align-items: center;
    justify-content: center;

    flex-direction: column;
    padding-right: 25px;
    gap: 15px;

    h1 {
        margin-right: 45px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 5px;
        color: #656565;
    }
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 220px;
    height: 320px;

    background: #f7f9fa;
    gap: 15px;

    h2 {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 15px;
        font-style: italic;

        color: #4279bd;
    }

    hr {
        width: 150px;
        height: 1px;
        background-color: #4279bd;
        border: none;
    }
`

export const Bold = styled.span`
    font-weight: 600;
    font-size: 16px !important;
    color: #4279bd !important;
`

export const Prices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: Left;
    justify-content: Left;
    width: 150px;
    gap: 15px;

    font-style: italic;
    font-size: 15px;

    color: #6999d6;
`

export const SpanRow = styled.div`
    display: flex;
    flex-direction: column;
`