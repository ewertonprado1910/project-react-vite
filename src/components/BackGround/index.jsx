
import { ContainerInicio, ContainerStyle, ImgHeart } from "./style"
import { FileImages } from "../../assets/images"
import { ButtonInsta } from "../ButtonInsta"

const BackGround = ({ title, description }) => {
    return (
        <ContainerStyle>
            <ContainerInicio>
                <div>
                    <h3>{title}</h3>
                    {description && <p>{description}</p>}
                    <ImgHeart src={FileImages.background.logosobre} />
                </div>
            </ContainerInicio>
            <ButtonInsta />
        </ContainerStyle>
    )
}

export default BackGround