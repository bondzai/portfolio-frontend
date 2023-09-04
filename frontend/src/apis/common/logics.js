import axios from 'axios';
import { CustomSortEnum } from '../../utils/choices.js';

const customSortReponse = (customSort, response) => {
    if (customSort == CustomSortEnum.DESCENDING) {
        return response.data.sort((a, b) => b.id - a.id);
    }

    if (customSort == CustomSortEnum.ASCENDING) {
        return response.data;
    }

    if (!customSort) {
        return response.data;
    }
}

const getList = (async ( {...Props} ) => {
    let urls = Props.urls.map(url => url + Props.endpoint);

    for (let url of urls) {
        try {
            const response = await axios.get(url);
            return customSortReponse(Props.customSort, response)
        } catch (error) {
            console.error(`Error with URL ${url}: ${error}`);
        }
    }
    throw new Error('All backend services are unavailable.');
});

export { getList }
