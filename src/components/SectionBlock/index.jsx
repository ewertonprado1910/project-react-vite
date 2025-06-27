import "aos/dist/aos.css"

import { ComponentButton } from "../Button"

import {
  SectionContainer,
  SectionTitle,
  SectionText,
  SectionImage,
  SectionContent,
} from "./style"

export const SectionBlock = ({
  title,
  text,
  imageSrc,
  buttonText,
  imageLeft = false,
  aos = "fade-up",
  imageStyle,
  styleMarginTop,
  whatsappNumber = "5511995183688",
  whatsappMessage = "Olá. Gostaria de solicitar um orçamento"
}) => {

  const whatsLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <SectionContainer imageLeft={imageLeft} style={{ marginTop: styleMarginTop }}>
      <SectionImage src={imageSrc} data-aos={aos} style={imageStyle} />
      <SectionContent>
        <SectionTitle>{title}</SectionTitle>
        <SectionText>{text}</SectionText>
        <a href={whatsLink} target="_blank" rel="nofollow noopener">
          <ComponentButton>
            {buttonText}
          </ComponentButton>
        </a>
      </SectionContent>
    </SectionContainer>
  )
}