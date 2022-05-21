import React, {useState} from 'react'
import styled from 'styled-components';
import DropdownList from './DropdownList';

const labels = [
    {
        id:1,
        value:"paid",
        checked:false,
    },
    {
        id:2,
        value:"pending",
        checked:false,
    },
    {
        id:3,
        value:"draft",
        checked:false,
    }
]
    
function Dropdown() {
  const [options, setOptions] = useState(labels);
  const [open, setOpen] = useState(false);

  function handleClick(id){
      setOptions(options.map((option) => {
          if(id === option.id){
              return {...option, checked: !option.checked}
          }
          return {...option, checked:false}
      }))
  }

  return (
    <DropdownWrapper>
       <Header onClick={() => setOpen(!open)}>
        <Text>Filter by status</Text>
        <Icon src="images/icon-arrow-down.svg" />
       </Header>
       {open && (
           <DropdownList options={options} handleClick={handleClick} />
       )}
    </DropdownWrapper>
  )
}

export default Dropdown

const DropdownWrapper = styled.div`
    position:relative;
    
`;
const Header = styled.button`
    background-color: transparent;
    border:none;
    cursor: pointer;
    letter-spacing:0.5px;
    padding:0.5rem;
    @media (max-width:576px){
       padding-left:0;
  }
`;
const Text = styled.span`
    color:${(props) => props.theme.text.primary.color};
    margin-right:0.5rem;
`;
const Icon = styled.img``;