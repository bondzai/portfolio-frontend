import { getList } from "./common/logics.js"
import { BACKEND_URLS } from "./common/urls.js";
import { CustomSortEnum } from "../../utils/choices.js";

const getProjectList = () => getList({
    urls: BACKEND_URLS,
    endpoint: "/projects/",
    customSort: CustomSortEnum.ASCENDING,
})

export { getProjectList }

export const statusOptions = [
    { value: "", label: "all" },
    { value: "online", label: "Online" },
    { value: "offline", label: "Offline" },
    { value: "inprogress", label: "In progress" }
];
