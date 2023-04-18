import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/about">À Propos</Link>
    </nav>
  )
}

export default Nav
