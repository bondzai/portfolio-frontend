import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { withLoading } from "../components/hocs/withLoading";

import { getCertificationList } from "../apis/rest/endpoints";

import DisplayModal from "../components/modals/DisplayModal";

const Home = withLoading(lazy(() => import("../pages/Home")));
const Experience = withLoading(lazy(() => import("../pages/Experience")));
const Skills = withLoading(lazy(() => import("../pages/Skills")));
const Certifications = withLoading(lazy(() => import("../pages/Certifications")));
const Stats = withLoading(lazy(() => import("../pages/Stats")));
const Labs = withLoading(lazy(() => import("../pages/Labs")));
const Roadmap = withLoading(lazy(() => import("../pages/Roadmap")));

export const Routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/experience", element: <Experience /> },
    { path: "/skills", element: <Skills /> },
    { path: "/labs", element: <Labs /> },
    { path: "/certifications", element: <Certifications /> },
    { path: "/certification/:id", element: <DisplayModal getDataList={getCertificationList} dataRoutePath="/certifications" /> },
    { path: "/stats", element: <Stats /> },
    { path: "/roadmap", element: <Roadmap /> },
];

if (import.meta.env.DEV) {
    const DevelopmentPage = withLoading(lazy(() => import("../pages/Development")))
    
    Routes.push(
        {
            path: "/development",
            element: <DevelopmentPage />,
        },
    )
}

// import DisplayModal from './components/DisplayModal';

// import { getProjectList } from "./apis/rest/Project";
// import { getCertificationList } from "./apis/rest/Certification";

// <Route path='/project/:id' element={<DisplayModal getDataList={getProjectList} dataRoutePath="/projects" />} />
// <Route path='/certifications' element={<Certifications />} />
// <Route path='/certification/:id' element={<DisplayModal getDataList={getCertificationList} dataRoutePath="/certifications" />} />