import './SocialLinks.scss'
import classNames from "classnames";
// import Button from "../../components/Button";
import Button from "../Button";

const SocialLinks = (props) => {
    const {
        url,
        c,
        className,
        customClass
    } = props

    const socialLinks = [
        {label: 'vk', href: 'https://vk.com/nataljaray'},
        {label: 'tg', href: 'https://t.me/nataljaray_music'},
        {label: 'link', href: '/'},
    ]

    return (
        <div className={className}>
            {socialLinks.map(({label, href}, index) => (
                <Button href={href}
                        label={label}
                        isLabelHidden
                        iconName={label}
                        mode="transparent"
                        key={index}
                        target="_blank"
                        // customClass="button--transparent-white"
                        customClass={customClass}
                />
            ))}
        </div>
    )

}

export default SocialLinks