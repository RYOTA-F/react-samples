import { FC } from 'react'
import { Provider } from 'react-redux'
/* components */
import ReduxToolkitChild from './child'
import PageTitle from '../../components/pageTitle'
/* redux */
import { store } from './counter.store'

const ReduxToolkit: FC = () => {
  return (
    <>
      <Provider store={store}>
        <PageTitle title="ReduxToolkit" />
        <hr />
        <ReduxToolkitChild />
      </Provider>
    </>
  )
}

export default ReduxToolkit
