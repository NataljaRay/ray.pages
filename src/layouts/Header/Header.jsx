import './Header.scss'
import classNames from "classnames";
import Button from "../../components/Button";
import BurgerButton from "../../components/BurgerButton";

const Header = (props) => {
    const {
        url,
    } = props

    const menuItems = [
        {label: 'Главная', href: '/'},
        {label: 'Обо мне', href: '/about'},
        {label: 'О книге', href: '/book'},
        {label: 'Саундтреки', href: '/soundtracks'},
        {label: 'Музыка', href: '/music'},
        {label: 'Новости', href: '/news'},
        {label: 'Контакты', href: '/contacts'},
    ]

    const socialLinks = [
        {label: 'vk', href: 'https://vk.com/nataljaray'},
        {label: 'tg', href: 'https://t.me/nataljaray_music'},
        {label: 'link', href: '/'},
    ]

    return (
        <header className="header" data-js-overlay-menu="">
            <div className="header__inner container">
                <a className="header__logo logo" href="/" aria-label="Home">Natalja Ray</a>

                <dialog
                    className="header__overlay-menu-dialog"
                    data-js-overlay-menu-dialog=""
                >
                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            {menuItems.map(({label, href}, index) => (
                                <li className="header__menu-item" key={index}>
                                    <a href={href}
                                       className={classNames('header__menu-link', {
                                           'is-active': href === url
                                       })}
                                    >{label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="header__actions">
                        {socialLinks.map(({label, href}, index) => (
                            <Button href={href}
                                    label={label}
                                    isLabelHidden
                                    iconName={label}
                                    mode="transparent"
                                    key={index}
                                    target="_blank"
                            />
                        ))}
                    </div>
                    <div className="header__actions">
                        <Button className="header__button"
                                href="/"
                                label="Купить книгу"
                                color="brown"
                        />
                    </div>
                </dialog>

                <BurgerButton
                    className="header__burger-button visible-menu"
                    extraAttrs={{
                        'data-js-overlay-menu-burger-button': '',
                    }}
                />
            </div>
        </header>
    )
}

export default Header