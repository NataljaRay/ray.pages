import './Footer.scss'
import SocialLinks from "../../components/SocialLinks";
import Button from "../../components/Button";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner container">
                <h5 className="h1 footer__title">Связь со мной</h5>
                <p className="footer__text">
                    Хочешь задать вопрос, оставить отзыв или предложить сотрудничество?<br/>
                    Напиши мне!
                </p>
                <SocialLinks className="footer__links" customClass="button--transparent-white"/>
                <Button className="footer__button"
                        href="mailto:nray92v@gmail.com"
                        label="Написать на почту"
                />
                <p className="footer__copyright">© 2025 Natalja Ray</p>
            </div>
        </footer>
    )
}

export default Footer