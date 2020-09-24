import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../../redux/store'

export const StoreAndRouter: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        { children }
      </BrowserRouter>
    </Provider>
  )
}
