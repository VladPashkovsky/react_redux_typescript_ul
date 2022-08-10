import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import ActionCreators from '../store/action-creator/'


export const useAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(ActionCreators, dispatch)
}