import React from 'react'
import { render } from '@testing-library/react'
import { Task } from '../Task'
import { StoreAndRouter } from '../../utils/unitTest/StoreAndRouter'

describe('<Task />', () => {
  it('should match the snapshot', () => {
    const { baseElement } = render(
      <StoreAndRouter>
        <Task title='title example' id={0} />
      </StoreAndRouter>
    )
    expect(baseElement).toMatchSnapshot()
  })
})
