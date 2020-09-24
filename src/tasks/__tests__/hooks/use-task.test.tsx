import React from 'react'
import * as ReactRedux from 'react-redux'
import { render } from '@testing-library/react'
import { act, renderHook, RenderHookResult } from '@testing-library/react-hooks'
import { useTask } from '../../hooks/useTask'
import { ProviderStore } from '../../../utils/unitTest/ProviderStore'
import { Task } from '../../Task'
import { IUseTask } from '../../interfaces/hooks.interface'
import { StoreAndRouter } from '../../../utils/unitTest/StoreAndRouter'

describe('useTask hook', () => {
  let renderHookResult: RenderHookResult<null, IUseTask>
  let spyOnUseDispatch: jest.SpyInstance

  beforeEach(() => {
    render(
      <StoreAndRouter>
        <Task id={0} title="example" />
      </StoreAndRouter>
    )
    renderHookResult = renderHook(() => useTask(), { wrapper: ProviderStore })
    spyOnUseDispatch = jest.spyOn(ReactRedux, 'useDispatch')
  })
  describe('handleOpenDesc function', () => {
    it('should set isOpenDesc flag', async () => {
      await act(async () => {
        await renderHookResult.result.current.handleOpenDesc()
      })
      expect(renderHookResult.result.current.isOpenDesc).toEqual(true)
      expect(spyOnUseDispatch).toHaveBeenCalledTimes(1)
    })
  })
  describe('handleDeleteTask function',() => {
    it('should call dispatch again',async () => {
      await act( async () => {
        await renderHookResult.result.current.handleDeleteTask(0)
      })
      expect(spyOnUseDispatch).toHaveBeenCalledTimes(3)
    })
  })
})
