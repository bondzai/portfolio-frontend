import axios from 'axios';
import { CustomSortEnum } from '../../utils/choices.js';

const customSortResponse = (customSort, response) => {
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

const getList = async ({ ...Props }) => {
    let urls = Props.urls.map(url => url + Props.endpoint);

    for (let url of urls) {
        try {
            const response = await axios.get(url);

            if (Array.isArray(response.data)) {
                return customSortResponse(Props.customSort, response);
            } else {
                console.error(`Error with URL ${url}: Response data is not an array.`);
            }

        } catch (error) {
            console.error(`Error with URL ${url}: ${error}`);
        }
    }
    
    throw new Error('All backend services are unavailable.');
};

export { getList };

