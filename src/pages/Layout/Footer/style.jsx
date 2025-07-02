import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
width: auto;
background-color: #F8C7C7;
display: flex;
align-items: center;
justify-content: space-evenly;
margin-top: 80px;
gap: 40px;

img {
  width: 350px;
}

@media screen and (max-width: 800px) {
  width: 100%;
  margin-top: 50px;
  gap: 10px;
  padding-bottom: 10px;

  img {
    display: none;
  }
}
`
export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;

h3 {
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 5rem;
  color: #714822;
}
label {
    display: flex;
    flex-direction: column;
    font-size: 17px;
    color: #714822;
}

input {
    background: #F8C7C7;
    width: 300px;
    border: none;
    outline: none;
    border-bottom: 1px solid #714822;
    margin: 25px 0px 25px 0px;
    padding: 0px 0px 5px 5px;
    font-size: 15px;
    font-weight: 200;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  } 
}

@media screen and (max-width: 800px) {
  padding: 20px;
}
`
export const ContainerLinks = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

@media screen and (max-width: 800px) {
  display: none;
}
`
export const LinksFooter = styled(Link)`
font-size: 18px;
font-weight: 700;
text-decoration: none;
margin-bottom: 25px;
color: #714822;


&:hover{
  border-bottom: 1px solid #714822;
}
&:active {
    opacity: 0.8;
    color: #714822;
}
`
export const Button = styled.button `
width: 170px;
height: 40px;
background-color: #fff;
font-size: 18px;
font-weight: 400;
border: 1px solid #010101;
text-decoration: none;
text-align: center;
color: #000;
cursor: pointer;

   &:hover {
    background-color: #714822;
    border: 1px solid #714822;
    transition: 0ms.9;
}
   &:active {
    opacity: 0.5;
    background-color: #714822;
   }

`