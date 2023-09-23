import { lazy } from "react"
import { RouteObject } from "react-router-dom"
import { withLoading } from "../components/hocs/withLoading"

const Home = withLoading(lazy(() => import("../pages/Home")))
const Experience = withLoading(lazy(() => import("../pages/Experience")))
const Skills = withLoading(lazy(() => import("../pages/Skills")))
const Certifications = withLoading(lazy(() => import("../pages/Certifications")))
const Stats = withLoading(lazy(() => import("../pages/Stats")))

export const Routes: RouteObject[] = [
    { path: '/', element: <Home /> },
    { path: '/experience', element: <Experience /> },
    { path: '/skills', element: <Skills /> },
    { path: '/certifications', element: <Certifications /> },
    { path: '/stats', element: <Stats /> },
]
