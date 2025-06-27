import styled from "styled-components"

export const TripleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -4%;

  @media screen and (max-width: 800px) {
    margin-top: 0;
  }
`
export const TripleImage = styled.img`
  width: 500px;

@media screen and (max-width: 800px) {
  width: 150px;
  margin-top: -15%;
}
`
export const TripleContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35%;
  padding: 0px 0px 0px 30px;
  gap: 20px;

@media screen and (max-width: 800px) {
  width: 100%;
  padding: 0px 10px 0px 10px;
  gap: 5px;
}
`
export const TripleTitle = styled.h2`
  color: #714822;
  font-size: 30px;

@media screen and (max-width: 800px) {
  font-size: 18px; 
}
`
export const TripleText = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: 100;

@media screen and (max-width: 800px) {
  font-size: 10px; 
}  
`