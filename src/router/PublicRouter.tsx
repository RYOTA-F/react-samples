import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouterProps } from '../types/router'

const PublicRouter: FC<RouterProps> = (props) => {
  return <Route {...props} />
}

export default PublicRouter
