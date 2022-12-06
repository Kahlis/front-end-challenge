import styled from "styled-components";

export const Box = styled.div`
    width: 300px;
    height: fit-content;

    display: flex;
    position: absolute;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    left: 50vw;
    top: 50vh;

    transform: translate(-50%, -50%);
    gap: 5px;

    h1 {
        font-family: "Inter", sans-serif;
        font-weight: 600;
        font-size: 48px;
        color: #656565;
    }

    p {
        font-family: "Inter", sans-serif;
        font-size: 13px;
        color: #666666;
    }

    span {
        font-family: "Inter", sans-serif;
        font-size: 13px;
        color: blue;
        cursor: pointer;
    }
`;
