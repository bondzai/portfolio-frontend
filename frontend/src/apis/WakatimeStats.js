import { getList } from './common/logics.js'
import { WAKA_BACKEND_URL } from './common/urls.js';
import { CustomSortEnum } from '../utils/choices.js';

const getWakatimeStats = () => getList({
    urls: WAKA_BACKEND_URL,
    endpoint: "/",
    customSort: CustomSortEnum.ASCENDING,
})

export { getWakatimeStats }
