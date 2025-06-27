import styled from "styled-components"

export const StyledButton = styled.button.attrs(() => ({}))`
width: 170px;
height: 40px;
background-color: #714822;
font-size: 18px;
font-weight: 400;
border: 1px solid #010101;
text-decoration: none;
text-align: center;
color: #000;
cursor: pointer;

   &:hover {
    opacity: 0.9;
    background-color: #fff;
    border: 1px solid #714822;
    transition: 0ms.9;
}
   &:active {
    opacity: 0.5;
    background-color: #714822;
   }

 
@media screen and (max-width: 800px) {
   width: 80px;
   height: 25px;
   font-size: 15px;
   font-weight: 300;
   
}
`