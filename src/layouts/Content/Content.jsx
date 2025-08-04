import './Content.scss'

const Content = (props) => {
    const { children } = props

    return (
        <main className="content container">
            Content {children}
        </main>
    )
}

export default Content