import "aos/dist/aos.css"

import Header from "../../pages/Layout/Header/index"
import Footer from "../../pages/Layout/Footer/index"
import BackGround from "../../components/BackGround"

import { SectionTripleBlock } from "../../components/SectionTripleBlock"
import { SectionBlock } from "../../components/SectionBlock"

import { FileImages } from "../../assets/images"

import { Container } from "./style"

const Works = () => {
    return (
        <Container>
            <Header />
            <BackGround title="Meus trabalhos" description="Aqui tudo é feito com muito carinho e amor!" />
            <SectionTripleBlock
                title="Bolos"
                text="Você vai se apaixonar pelos nossos bolos! Temos uma variedade incrível de sabores, opções de bolos numéricos, temáticos e muito mais. Faça seu pedido e deixe o resto com a gente!"
                leftImageSrc={FileImages.bolos.bolofolha}
                rightImageSrc={FileImages.bolos.bolorosa}
                buttonText="Sabores"
                aos="fade-up"
                whatsappNumber="5511995183688"
                whatsappMessage="Olá. Gostaria de saber quais sabores!"
            />

            <SectionBlock
                title="Sonhos"
                text="Temos Sonhos maravilhosos, daqueles que derretem na boca e despertam os melhores sentimentos! Recheados com muito carinho e sabores irresistíveis, como creme, chocolate e doce de leite, nossos Sonhos são perfeitos para adoçar seu dia. Venha experimentar essa delícia que faz jus ao nome — é impossível comer um só!"
                imageSrc={FileImages.doces.sonhos}
                buttonText="Saiba mais"
                imageLeft={true}
                aos="fade-up"
                styleMarginTop="50px"
                whatsappNumber="5511995183688"
                whatsappMessage="Olá. Gostaria de solicitar um orçamento!"
            />

            <SectionBlock
                title="Torta Xcake"
                text="Nossa Torta Xcake é feita com uma massa leve e fofinha, recheada com camadas generosas de creme especial e ingredientes selecionados, como pedaços de chocolate, frutas ou doce de leite dependendo do sabor escolhido."
                imageSrc={FileImages.doces.tortaxcake}
                buttonText="Saiba mais"
                imageLeft={false}
                aos="fade-up"
                styleMarginTop="50px"
                whatsappNumber="5511995183688"
                whatsappMessage="Olá. Gostaria de solicitar um orçamento!"
            />

            <SectionTripleBlock
                title="Doces"
                text="Nossos cookies são crocantes por fora, macios por dentro e cheios de pedacinhos de chocolate que tornam cada mordida inesquecível. Já as rosquinhas têm aquele sabor caseiro que aquece a alma — macias, levemente açucaradas e perfeitas para qualquer momento do dia. Difícil é escolher só um… então leve os dois e se permita essa dupla irresistível!"
                leftImageSrc={FileImages.doces.cookies}
                rightImageSrc={FileImages.doces.rosquinha}
                buttonText="Saiba mais"
                aos="fade-up"
                styleMarginTop="50px"
                whatsappNumber="5511995183688"
                whatsappMessage="Olá. Gostaria de solicitar um orçamento!"
            />

            <SectionBlock
                title="Bolos Temáticos"
                text="Transformamos sonhos em sabor! Nossos bolos temáticos são feitos com criatividade, carinho e atenção a cada detalhe. Seja para aniversários, casamentos, chá revelação ou qualquer ocasião especial, criamos bolos únicos que combinam beleza e um sabor inesquecível. Personalize seu momento com um bolo que tem a sua cara – porque celebrar é muito mais gostoso com arte e açúcar!"
                imageSrc={FileImages.bolos.boloborboleta}
                buttonText="Sabores"
                imageLeft={true}
                aos="fade-up"
                styleMarginTop="50px"
                whatsappNumber="5511995183688"
                whatsappMessage="Olá. Gostaria de saber quais sabores!"
            />

            <SectionBlock
                title="Caçarola Italiana"
                text="Uma combinação perfeita de massa fofinha com recheio cremoso e sabor marcante. Feita com muito carinho pra adoçar seu dia e deixar qualquer momento mais especial!"
                imageSrc={FileImages.doces.cacarola}
                buttonText="Saiba mais"
                imageLeft={false}
                aos="fade-up"
                styleMarginTop="50px"
                whatsappNumber="5511995183688"
                whatsappMessage="Olá. Gostaria de solicitar um orçamento!"
            />
            <Footer />
        </Container>
    )
}

export default Works