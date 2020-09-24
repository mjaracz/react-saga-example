import React from 'react'
import { render } from '@testing-library/react'
import { AddTask } from '../AddTask'
import { StoreAndRouter } from '../../utils/unitTest/StoreAndRouter'

describe('<AddTask />', () => {
  it('should match the snapshot', () => {
    const { baseElement } = render(
      <StoreAndRouter>
        <AddTask handleAddTaskIcon={jest.fn()} isOpen={true} setIsOpenModal={jest.fn()}/>
      </StoreAndRouter>
    )
    expect(baseElement).toMatchSnapshot()
  })
})
