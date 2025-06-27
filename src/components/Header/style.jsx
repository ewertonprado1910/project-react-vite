import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
background-color: #fff;
display: flex;
align-items: center;
justify-content: space-around;
position: sticky;
z-index: 1000;
top: 0;
margin: 5px 0;
 
div {
    max-width: 200px;
    margin-left: -20%;
}
 @media screen and (max-width: 800px) {
  display: flex;
  flex-direction: column;
  justify-content: center;

 div {
  margin: -5px 10px 20px 0px;
 }
}
`
export const ContainerLinks = styled.div`
display: flex;
gap: 50px;
padding-right: 10rem;

@media screen and (max-width: 800px) {
    justify-content: center;   
    padding-right: 0;          
    gap: 15px;                 
  }
`
export const ImgLogo = styled.img`
max-width: 200px;
border-radius: 4px;
`
export const Title = styled.h1`
font-size: 20px;
font-weight: 700;
color: #714822;
text-align: center;
`
export const LinkHeader = styled(Link)`
text-decoration: none;
color: #714822;
font-size: 20px;
font-weight: 500;
border-bottom: ${({ active }) => (active ? '1px solid #714822' : 'none')};

&:hover {
    opacity: 0.9;
    border-bottom: 1px solid #714822;
}
&:active {
    opacity: 0.8;
    color: #714822;
    font-weight: 600;
}
` 
