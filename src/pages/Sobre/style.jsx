import styled from "styled-components"

export const Container = styled.div `
width: 100%;
min-height: 100vh;
overflow: hidden;

@media screen and (max-width: 800px) {
    width: 100%;
    padding: 10px 0; 
}
`
export const ContainerSobre = styled.div `
display: flex;

img {
    width: 450px;
    height: 600px;
    margin: -5% 10%;
}
div {
  max-width: 28%;
  text-align: center;
}
h1 {
  font-size: 30px;
  font-weight: 400;
  color: #714822;
  margin: 10px 0 10px 0;
}
p {
  font-size: 18px;
  font-weight: 200;
  line-height: 1.5;
  color: #714822;
}

@media screen and (max-width: 800px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -20px;
  
  img {
    max-width: 200px;
    max-height: 280px;  
  }
  div {
    max-width: 100%;
    margin: 20px;
    padding: 5px;
  }
  h1 {
    font-size: 20px;
  }
  p {
    font-size: 15px;
  }
  
}
`
export const ContainerImages = styled.div `
  
  margin-top: 10rem;

  div {
    display: flex;
    justify-content: center;
    max-width: 100%;
  }

  img {
    flex: 1;
    height: 350px;
    object-fit: cover;
    max-width: 100%;
  }

  @media screen and (max-width: 800px) {
    max-width: 100%;
    margin-top: 30px;

  div {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    justify-content: center;
  }
  img {
      flex: 1;
      max-width: 45%;
      max-height: 200px;
    }
  }
`
