import styled from "styled-components"

export const SectionContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: ${({ imageLeft }) => (imageLeft ? "row" : "row-reverse")};
width: 100%;
gap: 0; 
margin-top: ${({ marginTop }) => marginTop || "0"};
`
export const SectionContent = styled.div`
display: flex;
flex-direction: column;
max-width: 40%;
padding: 0 30px;
gap: 20px;

@media screen and (max-width: 800px) {
  width: 100%;
  padding: 5px 10px 0px 10px;
  gap: 5px;
}
`
export const SectionTitle = styled.h2`
color: #714822;
font-size: 30px;

@media screen and (max-width: 800px) {
    font-size: 18px; 
}
`
export const SectionText = styled.p`
color: #000;
font-size: 20px;
font-weight: 100;

@media screen and (max-width: 800px) {
  font-size: 10px; 
} 
`
export const SectionImage = styled.img`
width: 800px;
height: auto;
object-fit: cover;

@media screen and (max-width: 800px) {
  width: 200px;
}
`