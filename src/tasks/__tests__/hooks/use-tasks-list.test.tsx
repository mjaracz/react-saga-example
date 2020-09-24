import React from 'react'
import * as ReactRedux from 'react-redux'
import { render } from '@testing-library/react'
import { act, renderHook, RenderHookResult } from '@testing-library/react-hooks'
import { useTasksList } from '../../hooks/useTasksList'
import { ProviderStore } from '../../../utils/unitTest/ProviderStore'
import { TasksList } from '../../TasksList'
import { IUseTasksList } from '../../interfaces/hooks.interface'
import { StoreAndRouter } from '../../../utils/unitTest/StoreAndRouter'

describe('useTasksList hook', () => {
  let renderHookResult: RenderHookResult<null, IUseTasksList>
  let spyOnDispatch: jest.SpyInstance
  let spyOnUseEffect: jest.SpyInstance

  beforeEach(() => {
    render(
      <StoreAndRouter>
        <TasksList/>
      </StoreAndRouter>
    )
    renderHookResult = renderHook(() => useTasksList(), { wrapper: ProviderStore })
    spyOnUseEffect = jest.spyOn(React, 'useEffect')
    spyOnDispatch = jest.spyOn(ReactRedux, 'useDispatch')
  })
  it('should call useEffect with dispatch',async () => {
    await act(async () => {
      await renderHookResult.rerender()
    })
    expect(spyOnUseEffect).toHaveBeenCalledTimes(1)
    expect(spyOnDispatch).toHaveBeenCalledTimes(1)
  })
  describe('handleAddTaskIcon function' , () => {
    it('should set isOpenModal', async () => {
      await act(async () => {
        await renderHookResult.result.current.handleAddTaskIcon()
      })
      expect(renderHookResult.result.current.isOpenModal).toEqual(true)
    })
  })
})
