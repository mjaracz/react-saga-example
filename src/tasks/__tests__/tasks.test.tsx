import React from 'react'
import { render } from '@testing-library/react'
import { Tasks } from '../index'
import { StoreAndRouter } from '../../utils/unitTest/StoreAndRouter'

describe('<Tasks />', () => {
  it('should match the snapshot', () => {
    const { baseElement } = render(
      <StoreAndRouter>
        <Tasks/>
      </StoreAndRouter>
    )
    expect(baseElement).toMatchSnapshot()
  })
})
