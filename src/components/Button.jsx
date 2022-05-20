import styled, {css} from 'styled-components';

export const Button = styled.button`
    border:none;
    border-radius:500px;
    padding:1rem 1.5rem;
    ${props => props.primary && css`
        background: ${props.theme.buttons.primary.backgroundColor};
        color: ${props.theme.buttons.primary.color};
    `};
    ${props => props.secondary && css`
        background: ${props.theme.buttons.secondary.backgroundColor};
        color: ${props.theme.buttons.secondary.color};
    `};
    ${props => props.tertiary && css`
        background: ${props.theme.buttons.tertiary.backgroundColor};
        color: ${props.theme.buttons.tertiary.color};
    `};
`
