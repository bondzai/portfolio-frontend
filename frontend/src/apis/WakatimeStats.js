import { getSingleObject } from './common/logics.js'
import { BACKEND_URLS } from './common/urls.js';
import { CustomSortEnum } from '../utils/choices.js';

const getWakatimeStats = () => getSingleObject({
    urls: BACKEND_URLS,
    endpoint: "/wakatime/",
})

export { getWakatimeStats }
