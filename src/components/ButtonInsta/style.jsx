import { Link } from "react-router-dom"
import styled from "styled-components"

export const LinkButton = styled(Link) `
display: flex;
margin: 0 auto;
writing-mode: sideways-rl;
align-self: anchor-center;
text-decoration: none;
`
export const Button = styled.button `
border: none;
cursor: pointer;
display: flex;
align-items: center;
gap: 10px;
font-size: 16px;
background-color: #fff;

h3 {
    color: #714822;
    font-weight: 300;
    font-size: 16px;
    writing-mode: sideways-lr;
    transform: rotate(180deg);
    margin-right: -1%;
}
div {
    border: 1px solid #714822;
    height: 50px;
    margin-right: 1%;
}

@media screen and (max-width: 800px) {
font-size: 13px;

    h3 {
        font-size: 13px;
    }   
}
`