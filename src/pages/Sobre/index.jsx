import "aos/dist/aos.css"

import Header from "../../pages/Layout/Header/index"
import Footer from "../../pages/Layout/Footer/index"
import BackGround from "../../components/BackGround"
import { FileImages } from "../../assets/images"

import { Container, ContainerSobre, ContainerImages } from "./style"


const Sobre = () => {
    return (
        <Container>
            <Header />
            <BackGround title="Um pouco da minha História..." />
            <ContainerSobre data-aos="fade-up">
                <img src={FileImages.person.portela} />
                <div>
                    <h1>Sobre a Patricia</h1>
                    <p>
                        Olá! Eu sou a Patrícia, apaixonada pela arte de transformar ingredientes em momentos especiais.
                        Nasci em 24/12/1974 na cidade de Caieiras (SP) e, além de atuar há mais de 13 anos no Atacadista, encontrei na confeitaria a minha verdadeira vocação.

                        Tudo começou de um jeito simples e cheio de carinho: preparando bolos e doces em casa para celebrar os aniversários da família e dos amigos. A cada receita, a paixão pela confeitaria só crescia. O que era um hobby virou um sonho maior: estudar, me aperfeiçoar, aprender novas técnicas e oferecer produtos que, além de saborosos, carregam amor em cada detalhe.

                        Hoje, tenho o propósito de adoçar a vida das pessoas com bolos, doces e sobremesas feitos com dedicação e ingredientes selecionados. Acredito que cada doce tem o poder de transformar momentos simples em lembranças inesquecíveis.

                        Meu compromisso é continuar inovando, criando novidades e atendendo com carinho e atenção a todos que confiam no meu trabalho. Seja para uma pequena reunião em família ou para grandes comemorações, estou sempre em busca de surpreender e encantar com muito sabor.

                        Seja bem-vindo ao meu mundo doce! 💖
                    </p>
                </div>
            </ContainerSobre>
            <ContainerImages>
                <div>
                    <img src={FileImages.bolos.bolosorvete} />
                    <img src={FileImages.bolos.bolobrigadeiro} />
                    <img src={FileImages.bolos.bolomorango} />
                    <img src={FileImages.doces.tortaxcake} />

                </div>
                <div>
                    <img src={FileImages.doces.cookies} />
                    <img src={FileImages.bolos.bolofolha} />
                    <img src={FileImages.doces.rosquinha} />
                    <img src={FileImages.doces.enroladinho} />

                </div>
            </ContainerImages>
            <Footer />
        </Container>
    )

}

export default Sobre