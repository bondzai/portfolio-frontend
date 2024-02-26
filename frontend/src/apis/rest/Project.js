import { getList } from "./common/logics.js"
import { BACKEND_URLS } from "./common/urls.js";
import { CustomSortEnum } from "../../utils/choices.js";

const getProjectList = () => getList({
    urls: BACKEND_URLS,
    endpoint: "/projects/",
    customSort: CustomSortEnum.DESCENDING,
})

export { getProjectList }

export const statusOptions = [
    { value: "", label: "all" },
    { value: "online", label: "Online" },
    { value: "offline", label: "Offline" },
    { value: "inprogress", label: "In progress" }
];

export const columns = [
    { field: "id", headerName: "id", width: 90 },
    {
        field: "name",
        headerName: "name",
        width: 250,
    },
    {
        field: "language",
        headerName: "language",
        width: 120,
    },
    {
        field: "status",
        headerName: "status",
        width: 120,
    },
];
