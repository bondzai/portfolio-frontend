import axios, { AxiosResponse } from 'axios';
import { CustomSortEnum } from "../../utils/choices";

interface Props {
    urls: string[];
    endpoint: string;
    customSort: CustomSortEnum | undefined;
}

const customSortResponse = (customSort: CustomSortEnum | undefined, response: AxiosResponse<any>): any[] | undefined => {
    if (customSort === CustomSortEnum.DESCENDING) {
        return response.data.sort((a: any, b: any) => b.id - a.id);
    }

    if (customSort === CustomSortEnum.ASCENDING || !customSort) {
        return response.data;
    }
};

export const getList = async (props: Props): Promise<any[]> => {
    if (!props.urls || props.urls.length === 0 || !props.endpoint) {
        throw new Error('Props.urls and Props.endpoint must be defined.');
    }

    const urls = props.urls.map(url => url + props.endpoint);

    for (let url of urls) {
        try {
            const response = await axios.get(url, {
                headers: import.meta.env.DEV ? {
                    Authorization: `Bearer ${import.meta.env.VITE_DEV_TOKEN}`,
                } : {},
            });

            if (Array.isArray(response.data)) {
                return customSortResponse(props.customSort, response) || [];
            }
        } catch (error) {
            console.error(`Error with URL ${url}: ${error}`);
        }
    }

    throw new Error('All backend services are unavailable.');
};

export const getSingleObject = async (props: Props): Promise<any> => {
    if (!props.urls || props.urls.length === 0 || !props.endpoint) {
        throw new Error('Props.urls and Props.endpoint must be defined.');
    }

    const urls = props.urls.map(url => url + props.endpoint);

    for (let url of urls) {
        try {
            const response = await axios.get(url, {
                headers: import.meta.env.DEV ? {
                    Authorization: `Bearer ${import.meta.env.VITE_DEV_TOKEN}`,
                } : {},
            });

            return response.data;
        } catch (error) {
            console.error(`Error with URL ${url}: ${error}`);
        }
    }

    throw new Error('All backend services are unavailable.');
};