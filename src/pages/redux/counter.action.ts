import { INCREMENT, DECREMENT } from './counter.constants'

export const incrementCounter = (count: number) => {
  return { type: INCREMENT, payload: { count } } as const
}

export const decrementCounter = (count: number) => {
  return { type: DECREMENT, payload: { count } } as const
}
