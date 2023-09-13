import { getList } from './common/logics.js'
import { BACKEND_URLS } from './common/urls.js';
import { CustomSortEnum } from '../../utils/choices.js';

const getRoadmapList = () => getList({
    urls: BACKEND_URLS,
    endpoint: "/roadmap/",
    customSort: CustomSortEnum.DESCENDING,
})

export { getRoadmapList }

export const years = [
    {
        label: '2022',
        key: '2022',
    },
    {
        label: '2023',
        key: '2023',
    },
];

export const columns = [
    {
        title: 'Ideas',
        icon: 'TipsAndUpdatesIcon',
    },
    {
        title: 'Todo',
        icon: 'ListAltIcon',
    },
    {
        title: 'Focusing',
        icon: 'RiFocus3Fill',
    },
    {
        title: 'Done',
        icon: 'TaskAltIcon',
    },
];
