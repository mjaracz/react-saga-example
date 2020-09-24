import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

export const ProviderStore: FC = ({ children }) => {
  return (
    <Provider store={store}>
      { children }
    </Provider>
  )
}
