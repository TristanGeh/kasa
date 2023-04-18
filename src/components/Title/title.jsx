import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function PageTitle({ title }) {
  const location = useLocation()

  useEffect(() => {
    document.title = title
  }, [title, location])

  return null
}

export default PageTitle
