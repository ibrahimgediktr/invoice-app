import React from 'react'
import styled from 'styled-components';

function Avatar() {
  return (
    <AvatarButton>
        <Img src="/images/avatar.webp" alt="İbrahim Gedik Avatar" />
    </AvatarButton>
  )
}

export default Avatar

const AvatarButton = styled.button`
    cursor: pointer;    
    background-color:transparent ;
    border:none;
    margin:1.5rem 0;
    @media (max-width:992px){
        margin:0 1.5rem;
    }
`

const Img = styled.img`
    width:35px;
    height:35px;
    border-radius:50%;
    object-fit:cover;
`