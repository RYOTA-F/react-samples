export type State = {
  text: string
  count: number
}

export const initialState: State = {
  text: '',
  count: 0,
}

export type Action =
  | { type: 'change'; text: string }
  | { type: 'add' }
  | { type: 'sub' }

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        text: action.text,
      }
    case 'add':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'sub':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}
