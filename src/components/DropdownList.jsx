import React from "react";
import styled from "styled-components";

function DropdownList({ options, handleClick }) {
  return (
    <DropdownListWrapper>
      {options.map((option) => (
        <StyledLabel key={option.id}>
          <input type="checkbox" checked={option.checked} onChange={() => {handleClick(option.id)}} />
          <CustomCheckbox>
            <Icon src="/images/icon-check.svg" alt="" />
          </CustomCheckbox>
          <Text>{option.value}</Text>
        </StyledLabel>
      ))}
    </DropdownListWrapper>
  );
}

export default DropdownList;

const DropdownListWrapper = styled.div`
    position:absolute;
    box-shadow: rgba(72,84,159, 0.25) 0px 2px 20px;
    width:12rem;
    background-color: ${(props) =>
    props.theme.type === "dark" ? "rgb(37, 41, 69)" : "rgb(255, 255, 255)"};
    padding:1rem;
    border-radius:8px;
    top:2.5rem;
    left:50%;
    transform:translateX(-50%);
    @media (max-width:992px){
       width:100%;
    }
`;
const StyledLabel = styled.label`
  display: flex;
  margin: 0.75rem 0;
  input {
      display:none;
      &:hover + div {
        border:1px solid rgb(124, 93, 250);
      }
      &:checked + div {
        background:rgb(124, 93, 250);
        img {
            opacity:1;
        }
      }
  }
`;
const CustomCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width:1rem;
  min-height:1rem;
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  border: 1px solid transparent;
  border-radius: 2px;
  background: rgb(223, 227, 250);
  background-color: ${(props) =>
    props.theme.type === "dark" ? "rgb(30, 33, 57)" : "rgb(223, 227, 250)"};
`;
const Icon = styled.img`
    opacity:0;
`
const Text = styled.div`
  text-transform: capitalize;
  color: ${(props) => props.theme.text.primary.color};
`;
