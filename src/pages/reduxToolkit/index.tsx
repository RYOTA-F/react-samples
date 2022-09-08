import { FC } from 'react'
import ReduxToolkitChild from './child'
import { store } from './counter.store'
import { Provider } from 'react-redux'

const ReduxToolkit: FC = () => {
  return (
    <>
      <Provider store={store}>
        <h1>ReduxToolkit</h1>
        <hr />
        <ReduxToolkitChild />
      </Provider>
    </>
  )
}

export default ReduxToolkit
