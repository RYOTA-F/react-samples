import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouterProps } from '../types/router'

const PublicRouter: FC<RouterProps> = (props) => {
  return (
    <Routes>
      <Route {...props} />
    </Routes>
  )
}

export default PublicRouter
