import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
width: 100vw;
height: 100vh;

video {
    width: 85%;
    height: 700px;
    object-fit: cover;
    align-self: flex-start;
}

 @media screen and (max-width: 800px) {
    width: 100%;
    padding: 10px 0;

    video {
      width: 85%;
      height: auto;
      max-height: 400px;
    }
  }
`
export const ContainerVideo = styled.div`
display: flex;
`
export const OverlayText = styled.div`
position: absolute;
top: 50%;
right: 40%;
transform: translate(-50%, -50%);
color: #fff;
font-size: 50px;
z-index: 2;

img {
    margin: 10px 0px -5px 15px;
    width: 40px;
}
@media screen and (max-width: 800px) {
    font-size: 20px;
    margin-left: 21%;
    
    img {
        display: none;
    }
}

`
export const LinkButton = styled(Link)`
display: flex;
margin: 0 auto;
writing-mode: sideways-rl;
align-self: anchor-center;
text-decoration: none;
`
export const Button = styled.button`
border: none;
cursor: pointer;
display: flex;
align-items: center;
gap: 10px;
font-size: 18px;
background-color: #fff;

div {
    border: 1px solid #714822;
    height: 120px;
    margin-right: 1%;
}
&:hover {
    opacity: 0.9;
    color: #714822;
    font-weight: 600;
}
@media screen and (max-width: 800px) {  
    font-size: 13px;

    div {
        height: 50px;
    }
}
`
export const TextInsta = styled.h3`
color: #714822;
font-weight: 300;
font-size: 18px;
writing-mode: sideways-lr;
transform: rotate(180deg);
margin-right: -1%;

@media screen and (max-width: 800px) {
    font-size: 13px;
}
`
export const ContainerInfo = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 50px;
text-align: center;

h2 {
    font-size: 25px;
    font-weight: 700;
    color: #714822;
}
p {
    max-width: 900px;
    font-size: 18px;
    line-height: 25px;
    font-weight: 200;
    color: #000;
    margin-top: 10px;
}
@media screen and (max-width: 800px) {
    text-align: center;
    padding: 0 10px;
    h2 {
        font-size: 20px;
    }
    p {
        font-size: 15px;
    } 
}
`
export const ContainerImages = styled.div`
margin-top: 30px;
max-width: 100vw; 
overflow: hidden;

 .swiper {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
}
  .swiper-slide img {
    height: 450px;
    background-size: cover;

     @media screen and (max-width: 800px) {
      height: 250px;
    }
}
  .swiper-button-prev,
  .swiper-button-next {
    color: #714822; 

    &:hover {
        opacity: 0.8;
        color: #000;
    }
}

`
export const ContainerBolo = styled.div`
display: flex;
margin-top: 50px;
align-items: center;
justify-content: space-between;

div {
    width: 50%;
    padding: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
h2 {
    font-size: 25px;
    color: #714822;
}
p {
    font-size: 18px;
    color: #000;
}

img {
    width: 50%; 
}

@media screen and (max-width: 800px) {
    flex-direction: column;
    margin-top: 20px;
    
    div {
        width: 100%;
        padding: 50px;
        gap: 20px;
    }
     h2 {
        font-size: 20px;
    }
    p {
        font-size: 15px;
    }
    img {
        width: 100%;
    }
}
`
export const ContainerBrigadeiro = styled.div `
display: flex;
margin-top: 50px;
align-items: center;
justify-content: space-between;

div {
    width: 50%;
    padding: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
h2 {
    font-size: 25px;
    color: #714822;
}
p {
    font-size: 18px;
    color: #000;
}
img {
    width: 50%; 
}

@media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    margin-top: 20px;
    
    div {
        width: 100%;
        padding: 50px;
        gap: 20px;
    }
    h2 {
        font-size: 20px;
    }
    p {
        font-size: 15px;
    }
    img {
        width: 100%;
    }
}
`


