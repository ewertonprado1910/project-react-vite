import { useLocation } from "react-router-dom"

import { FileImages } from "../../assets/images"

import { Container, ImgLogo, Title, LinkHeader, ContainerLinks } from "./style"

const Header = () => {
    const location = useLocation()

    return (
        <Container>
            <div>
                <ImgLogo src={FileImages.background.logo} />
                <Title>Patricia Portela</Title>
            </div>
            <ContainerLinks>
                <LinkHeader to="/" active={location.pathname === "/"}>Home</LinkHeader>
                <LinkHeader to="/trabalhos" active={location.pathname === "/trabalhos"}>Trabalhos</LinkHeader>
                <LinkHeader to="/sobre" active={location.pathname === "/sobre"}>Sobre</LinkHeader>
                <LinkHeader to="https://wa.me/5511995183688?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!" target="_blank">Contato</LinkHeader>
            </ContainerLinks>
        </Container>
    )
}

export default Header