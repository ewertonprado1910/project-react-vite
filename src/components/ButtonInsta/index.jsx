import { SlSocialInstagram } from "react-icons/sl"

import { LinkButton, Button } from "./style"

export const ButtonInsta = () => {
    return (
        <LinkButton
            as="a"
            href="https://www.instagram.com/paty.bolos_e_doces/"
            target="_blank"
            rel="nofollow noopener">
            <Button>
                <h3>Instagram</h3>
                <div />
                <SlSocialInstagram
                    style={{ color: "#714822" }} />
            </Button>
        </LinkButton>

    )
}