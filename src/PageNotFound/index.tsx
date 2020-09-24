import React, { FC } from 'react'
import './page-not-found.css'
import { Link } from 'react-router-dom'

export const PageNotFound: FC = () => {

  return (
    <div className="pageNotFound">
      <h1 className="pageNotFound__title">Page Not Found</h1>
      <Link className="pageNotFound__link" to="/">Go to home page</Link>
    </div>
  )
}
