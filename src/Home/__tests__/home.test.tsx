import React from 'react'
import { render } from '@testing-library/react'
import { Home } from '../index'
import { StoreAndRouter } from '../../utils/unitTest/StoreAndRouter'

describe('<Home />', () => {
  it('should match the snapshot', () => {
    const { baseElement } = render(
      <StoreAndRouter>
        <Home/>
      </StoreAndRouter>
    )
    expect(baseElement).toMatchSnapshot()
  })
})
