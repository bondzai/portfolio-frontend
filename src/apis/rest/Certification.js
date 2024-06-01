import { getList } from "./common/logics.js"
import { BACKEND_URLS } from "./common/urls.js";
import { CustomSortEnum } from "../../utils/choices.js";

const getCertificationList = () => getList({
    urls: BACKEND_URLS,
    endpoint: "/certifications/",
    customSort: CustomSortEnum.ASCENDING,
})

export { getCertificationList }
