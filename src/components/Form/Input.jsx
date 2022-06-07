import styled from 'styled-components';

export const Input = styled.input`
    width:100%;
    outline:none;
    padding:1rem 1.25rem;
    background-color: ${(props) =>
    props.theme.type === "dark" ? "rgb(30, 33, 57)" : "rgb(255, 255, 255)"};
    color: ${(props) => props.theme.text.primary.color};
    border: ${(props) =>
    props.theme.type === "dark" ? "1px solid rgb(37, 41, 69)" : "1px solid rgb(223, 227, 250)"};
    border-radius:0.5rem;
    font-weight:bold;
    &::placeholder {
        color: #bdc3c7;
    }
    &:focus {
        border: 1px solid #9277FF;
    }

`
