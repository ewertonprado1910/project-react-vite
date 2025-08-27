import "aos/dist/aos.css"

import { ComponentButton } from "../Button"

import {
    TripleContainer,
    TripleImage,
    TripleContent,
    TripleTitle,
    TripleText,
} from "./style"

export const SectionTripleBlock = ({
    title,
    text,
    leftImageSrc,
    rightImageSrc,
    buttonText,
    aos = "fade-up",
    styleMarginTop,
    whatsappNumber = "5511995183688",
    whatsappMessage = "Olá. Quero solicitar um orçamento!"
}) => {
    const whatsLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <TripleContainer data-aos={aos} style={{ marginTop: styleMarginTop }}>
            <TripleImage src={leftImageSrc} alt="Bolo de chocolate personalizado em Caieiras"/>
            <TripleContent>
                <TripleTitle>{title}</TripleTitle>
                <TripleText>{text}</TripleText>
                <a href={whatsLink}
                    target="_blank"
                    rel="nofollow noopener">
                    <ComponentButton>
                        {buttonText}
                    </ComponentButton>
                </a>
            </TripleContent>
            <TripleImage src={rightImageSrc} />
        </TripleContainer>
    );
};