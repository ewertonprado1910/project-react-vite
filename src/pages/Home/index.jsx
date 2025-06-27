import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import { SlSocialInstagram } from "react-icons/sl"
import { Helmet } from "react-helmet"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { ComponentButton } from "../../components/Button"

import { FileImages } from "../../assets/images"
import Video from "../../assets/video/video.mp4"

import {
  Container,
  ContainerVideo,
  OverlayText,
  LinkButton,
  Button,
  TextInsta,
  ContainerInfo,
  ContainerImages,
  ContainerBolo,
  ContainerBrigadeiro
} from "./style"


const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true
    })
    AOS.refresh()
  }, [])

  const whatsAppLink = (number, message) => {
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
  }

  const whatsappNumber = "5511995183688"
  const whatsappMessage = "Olá. Gostaria de solicitar um orçamento!"

  return (
    <>
      <Helmet>
        <title>Patricia Bolos</title>
        <meta name="google-site-verification" content="Wnj1iI2teNp73n3N8er80cJAzaW5IEfEg7DqeAcMNig" />
        <meta name="description" content="Bolos personalizados, doces e tortas deliciosas em Caieiras. Encomende já com a Confeitaria Patricia Portela." />
        <meta name="keywords" content="bolos em Caieiras, confeitaria Caieiras, doces Caieiras, bolo personalizado Caieiras" />
        <meta property="og:title" content="Patricia Bolos" />
        <meta property="og:description" content="Confeitaria em geral, doces, salgados, brigadeiros, bolos, bolos tematicos e muito mais." />
      </Helmet>
      <Container>
        <Header />
        <ContainerVideo data-aos="fade-up">
          <video loop autoPlay muted>
            <source src={Video} />
          </video>
          <OverlayText>
            Seu momento <br />
            mais doce começa aqui...
            <img src={FileImages.background.coracao} />
          </OverlayText>
          <LinkButton
            to="https://www.instagram.com/paty.bolos_e_doces/"
            target="_blank"
            rel="nofollow noopener">
            <Button>
              <TextInsta>Instagram</TextInsta>
              <div />
              <SlSocialInstagram style={{ color: "#714822" }} />
            </Button>
          </LinkButton>
        </ContainerVideo>

        <ContainerInfo data-aos="fade-up">
          <h2>Bem-vindos.</h2>
          <p>Tudo aqui é feito com carinho e aquele toque artesanal que faz toda a diferença. Quer um bolo temático incrível? A gente faz! Vai comemorar algo especial? Nossos docinhos são perfeitos pra isso. Bateu aquela vontade de um doce? Temos delícias que vão adoçar seu dia! E não esquece de provar nossos bombons e sobremesas — é impossível resistir!</p>
          <ContainerImages>
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={10}
              slidesPerView={3}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 3,
                },
              }}
              data-aos="fade-up"
            >
              <SwiperSlide>
                <img src={FileImages.bolos.bolocoberturadechoc} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={FileImages.bolos.bololaco} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={FileImages.bolos.bolocereja} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={FileImages.bolos.bolofutas} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={FileImages.bolos.bolofatia} />
              </SwiperSlide>
            </Swiper>
          </ContainerImages>
        </ContainerInfo>

        <ContainerBolo data-aos="fade-up">
          <div data-aos="fade-up">
            <h2>Bolos</h2>
            <p>Você precisa experimentar um de nossos bolos! Escolha entre uma grande variedade de sabores, encomende um bolo numérico, peça um bolo temático e nós cuidamos de tudo para você!</p>
            <a href={whatsAppLink(whatsappNumber, whatsappMessage)}
              target="_blank" rel="nofollow noopener">
              <ComponentButton>Saiba mais</ComponentButton>
            </a>
          </div>
          <img src={FileImages.bolos.bolochocolate} />
        </ContainerBolo>

        <ContainerBrigadeiro data-aos="fade-up">
          <img src={FileImages.doces.brigadeiro} />
          <div data-aos="fade-up">
            <h2>Brigadeiros</h2>
            <p>Brigadeiros deliciosos, trufas, mini éclair, pão de mel com doce de leite, bombons, brownies e muito mais! Perfeitos para um café no meio da tarde para tornar o seu dia, seu evento ou aniversário inesquecível!</p>
            <a href={whatsAppLink(whatsappNumber, whatsappMessage)}
              target="_blank" rel="nofollow noopener">
              <ComponentButton>Saiba mais</ComponentButton>
            </a>
          </div>
        </ContainerBrigadeiro>
        <Footer />
      </Container >
    </>
  )
}

export default Home


// 