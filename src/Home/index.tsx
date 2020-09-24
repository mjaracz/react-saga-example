import React, { FC } from 'react'
import logo from '../icons/logo.svg'
import { Link } from 'react-router-dom'
import './Home.css'

export const Home: FC = () => {
  return (
    <div className="home">
      <header className="home__header">
        <img src={logo} className="header__logo" alt="logo" />
        <p>
          Example of React with Saga
        </p>
        <Link
          className="home__link"
          rel="noopener noreferrer"
          to="tasks"
        >
          Go to Tasks Page
        </Link>
      </header>
    </div>
  )
}
