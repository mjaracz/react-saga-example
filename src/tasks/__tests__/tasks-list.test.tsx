import React from 'react'
import { render } from '@testing-library/react'
import { TasksList } from '../TasksList'
import { StoreAndRouter } from '../../utils/unitTest/StoreAndRouter'

describe('<TasksList />', () => {
  it('should match the snapshot', () => {
    const { baseElement } = render(
      <StoreAndRouter>
        <TasksList/>
      </StoreAndRouter>
    )
    expect(baseElement).toMatchSnapshot()
  })
})
