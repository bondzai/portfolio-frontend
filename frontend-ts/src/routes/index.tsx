import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
// import { Loader } from '../components/Loader'

const Home = lazy(() => import('../pages/Home'))

export const Routes: RouteObject[] = [
    { path: '/', element: <Home /> },
]
