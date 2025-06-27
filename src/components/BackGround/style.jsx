import styled from "styled-components"

export const ContainerStyle = styled.div `
display: flex;
`
export const ContainerInicio = styled.div `
background-color: #F8C7C7;
width: 85%;
height: 400px;
display: flex;
justify-content: center;
padding-top: 40px;

div {
    text-align: center;
}
h3 {
    font-size: 40px;
    font-weight: 100;
    color: #714822;
}
p {
    font-size: 25px;
    font-weight: 100;
    color: #714822;
}

@media screen and (max-width: 800px) {
    height: 220px;
    padding-top: 10px;
    h3 {
        font-size: 20px;
    }
    p {
        font-size: 15px;
    }
    
}
`
export const ImgHeart = styled.img `
max-width: 300px;

@media screen and (max-width: 800px) {
    width: 130px; 
}
`

