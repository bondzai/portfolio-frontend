import { getList, getSingleObject } from './logics.js'
import { BACKEND_URLS } from './urls.js';
import { CustomSortEnum } from '../../utils/choices.js';

export const getSkillList = () => getList({
    urls: BACKEND_URLS,
    endpoint: "/skills/",
    customSort: CustomSortEnum.ASCENDING,
})

export const getCertificationList = () => getList({
    urls: BACKEND_URLS,
    endpoint: "/certifications/",
    customSort: CustomSortEnum.DESCENDING,
})

export const getProjectList = () => getList({
    urls: BACKEND_URLS,
    endpoint: "/projects/",
    customSort: CustomSortEnum.DESCENDING,
})

export const getRoadmapList = () => getList({
    urls: BACKEND_URLS,
    endpoint: "/roadmap/",
    customSort: CustomSortEnum.DESCENDING,
})

export const getWakatimeStats = () => getSingleObject({
    urls: BACKEND_URLS,
    endpoint: "/wakatime/",
})
