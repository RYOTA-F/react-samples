import { FC } from 'react'
import ReduxToolkitChild from './child'
import { store } from './store'
import { Provider } from 'react-redux'

const ReduxToolkit: FC = () => {
  return (
    <>
      <Provider store={store}>
        <h1>ReduxToolkit</h1>
        <ReduxToolkitChild />
      </Provider>
    </>
  )
}

export default ReduxToolkit
