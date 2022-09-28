import { FC } from 'react'
import { Provider } from 'react-redux'
/* components */
import ReduxToolkitChild from './child'
import PageTitle from '../../components/pageTitle'
/* redux */
import { store } from './counter.store'
/* styles */
import { Container } from './style'

const ReduxToolkit: FC = () => {
  return (
    <>
      <Provider store={store}>
        <PageTitle title="ReduxToolkit" />
        <Container>
          <h2>Parent Page</h2>
          <ReduxToolkitChild />
        </Container>
      </Provider>
    </>
  )
}

export default ReduxToolkit
