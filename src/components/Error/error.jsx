import { Link } from "react-router-dom"
import './error.scss'
function Error() {
    return (
        <section className="error-section">
            <div className="error">404</div>
            <h2>Oups! La page que vous avez demandez n'existe pas.</h2>
            <Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
        </section>
    )
}

export default Error