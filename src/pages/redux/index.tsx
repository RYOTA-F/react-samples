import { FC } from 'react'
/* components */
import ReduxChild from './child'
import PageTitle from '../../components/pageTitle'
/* redux */
import { Provider } from 'react-redux'
import store from './counter.store'

const Redux: FC = () => {
  return (
    <Provider store={store}>
      <PageTitle title="Redux" />
      <ReduxChild />
    </Provider>
  )
}

export default Redux
