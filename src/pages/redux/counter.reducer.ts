import { INCREMENT, DECREMENT } from './counter.constants'
import { incrementCounter, decrementCounter } from './counter.action'

export type CounterState = {
  count: number
}

const inititalState: CounterState = {
  count: 0,
}

type Actiton = ReturnType<typeof incrementCounter | typeof decrementCounter>

const bankReducer = (state = inititalState, action: Actiton) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload.count,
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload.count,
      }

    default:
      return inititalState
  }
}

export default bankReducer
