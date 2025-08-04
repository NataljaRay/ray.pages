import './Header.scss'
import classNames from "classnames";

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

    return (
        <header className="header">
            <div className="header__inner container">
                <a className="header__logo logo" href="/" aria-label="Home">Natalja Ray</a>
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
                    <a href="/book" className="btn btn--brown">Купить книгу</a>
                </div>
            </div>
        </header>
    )
}

export default Header