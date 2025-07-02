import { useForm } from "react-hook-form"

import { FileImages } from "../../../assets/images"

import { Container, Form, ContainerLinks, LinksFooter, Button } from "./style"

const Footer = () => {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        const mensagem = `Olá, meu nome é ${data.nome}, tenho interesse e gostaria de mais informações.`
        const numeroDaEmpresa = "5511995183688"

        const url = `https://wa.me/${numeroDaEmpresa}?text=${encodeURIComponent(mensagem)}`
        window.open(url, '_blank')
        reset();
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h3>Digite seu nome para um orçamento!</h3>
                <label>
                    Nome *
                    <input type="text"{...register("nome", { required: true })} />
                </label>
                <Button type="submit">Enviar</Button>
            </Form>
            <img src={FileImages.background.imgfooter} />
            <ContainerLinks>
                <LinksFooter to="/">Home</LinksFooter>
                <LinksFooter to="/trabalhos">Trabalhos</LinksFooter>
                <LinksFooter to="/sobre">Sobre</LinksFooter>
                <LinksFooter to="https://w.app/nezfvh" target="_blank"> Contato </LinksFooter>
            </ContainerLinks>
        </Container>
    )
}

export default Footer