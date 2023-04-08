import { Link } from "react-router-dom"

function Error() {
    return (
        <main>
            <div>404</div>
            <h2>Oups! La page que vous avez demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la pade d'accueil</Link>
        </main>
    )
}

export default Error