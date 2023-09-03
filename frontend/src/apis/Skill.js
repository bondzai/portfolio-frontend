import { getList } from './common/logics.js'
import { BACKEND_URLS } from './common/urls.js';
import { CustomSortEnum } from '../utils/choices.js';

const getSkillList = () => getList({
    urls: BACKEND_URLS,
    endpoint: "/skills/",
    customSort: CustomSortEnum.ASCENDING,
})

export { getSkillList }
