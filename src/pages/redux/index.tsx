import { FC } from 'react'
/* components */
import ReduxChild from './child'
import PageTitle from '../../components/pageTitle'
/* redux */
import { Provider } from 'react-redux'
import store from './counter.store'
/* styles */
import { Container } from './style'

const Redux: FC = () => {
  return (
    <Provider store={store}>
      <PageTitle title="Redux" />
      <Container>
        <h2>Parent Component</h2>
        <ReduxChild />
      </Container>
    </Provider>
  )
}

export default Redux
