import React, {ChangeEvent} from 'react'
import * as ReactRedux from 'react-redux'
import { Dispatch, SetStateAction } from 'react'
import { act, renderHook, RenderHookResult } from '@testing-library/react-hooks'
import { useAddTask } from '../../hooks/useAddTask'
import { IUseAddTask } from '../../interfaces/hooks.interface'
import { ProviderStore } from '../../../utils/unitTest/ProviderStore'
import { render } from '@testing-library/react'
import { StoreAndRouter } from '../../../utils/unitTest/StoreAndRouter'
import { AddTask } from '../../AddTask'

describe('useAddTask hook', () => {
  let renderHookResult: RenderHookResult<Dispatch<SetStateAction<boolean>>, IUseAddTask>
  let spyOnUseDispatch: jest.SpyInstance

  beforeEach(() => {
    render(
      <StoreAndRouter>
        <AddTask setIsOpenModal={jest.fn()} isOpen={false} handleAddTaskIcon={jest.fn()} />
      </StoreAndRouter>
    )
    renderHookResult = renderHook(() => useAddTask(jest.fn() as Dispatch<SetStateAction<boolean>>), { wrapper: ProviderStore })
    spyOnUseDispatch = jest.spyOn(ReactRedux, 'useDispatch')
  })
  it('should correctly rerender and call useDispatch', () => {
    act(() => {
      renderHookResult.rerender()
    })
    expect(renderHookResult.result).toBeDefined()
    expect(spyOnUseDispatch).toHaveBeenCalled()
  })
  describe('handleAddTask function', () => {
    describe('when titleTask is save', () => {
      it('should set titleIsRequired state to false',async () => {
        await act(async () => {
          await renderHookResult.result.current.setTitleTask('example title')
          await renderHookResult.result.current.handleAddTask()
        })
        expect(renderHookResult.result.current.titleIsRequired).toEqual(false)
      })
    })
    describe('when titleTask is not save', () => {
      it('should set titleIsRequired sate to true', async () => {
        await act(async () => {
          await renderHookResult.result.current.setTitleTask('')
          await renderHookResult.result.current.handleAddTask()
        })
        expect(renderHookResult.result.current.titleIsRequired).toEqual(true)
      })
    })
  })
  describe('handleSetTitleTask function', () => {
    it('should set titleIsRequired to false and set titleTask', async () => {
      await act(async () => {
        await renderHookResult.result.current.handleSetTitleTask({ target: { value: 'example value' } } as ChangeEvent<HTMLInputElement>)
      })
      expect(renderHookResult.result.current.titleIsRequired).toEqual(false)
      expect(renderHookResult.result.current.titleTask).toEqual('example value')
    })
  })
  describe('handleSetDescriptionTask function', () => {
    it('should set DescriptionTask', async () => {
      await act(async () => {
        await renderHookResult.result.current.handleSetDescriptionTask({ target: { value: 'example description' } } as ChangeEvent<HTMLInputElement>)
      })
      expect(renderHookResult.result.current.descriptionTask).toEqual('example description')
    })
  })
})
