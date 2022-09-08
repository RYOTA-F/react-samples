import { FC } from 'react'
/* components */
import ReduxChild from './child'
/* redux */
import { Provider } from 'react-redux'
import store from './counter.store'

const Redux: FC = () => {
  return (
    <Provider store={store}>
      <h1>Redux</h1>
      <hr />
      <ReduxChild />
    </Provider>
  )
}

export default Redux
