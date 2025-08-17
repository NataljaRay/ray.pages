import './Content.scss'
import Hero from "../../sections/Hero";

const Content = (props) => {
    const { children } = props

    return (
        <div>
        <Hero/>
        <main className="content container">
            {children}
        </main>
        </div>
    )
}

export default Content