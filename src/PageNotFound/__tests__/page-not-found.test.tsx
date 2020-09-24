import React from 'react'
import { render } from '@testing-library/react'
import { PageNotFound } from '../index'
import { StoreAndRouter } from '../../utils/unitTest/StoreAndRouter'

describe('<PageNotFound />', () => {
  it('should match the snapshot', () => {
    const { baseElement } = render(
      <StoreAndRouter>
        <PageNotFound/>
      </StoreAndRouter>
    )
    expect(baseElement).toMatchSnapshot()
  })
})
