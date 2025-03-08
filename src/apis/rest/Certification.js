import { getList } from "./common/logics.js"
import { BACKEND_URLS } from "./common/urls.js";
import { CustomSortEnum } from "../../utils/choices.js";

const getCertificationList = () => getList({
    urls: BACKEND_URLS,
    endpoint: "/certifications/",
    customSort: CustomSortEnum.ASCENDING,
    defaultData: defaultData,
})

const defaultData = [
    {
        "id": "665abcca73aa09d61a46dff1",
        "description": "Apollo GraphQL",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1694930735/Portfolio/cirtifications/Cir-Apollo-Associate.png",
        "name": "Apoll-Associate",
        "other_url": "https://www.apollographql.com/tutorials/certifications/03d75505-810a-4c6a-a9d1-85d18a27b941"
    },
    {
        "id": "665abcca73aa09d61a46dff0",
        "description": "ChatGPT",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1689411286/Portfolio/cirtifications/Cir-ChatGPT.png",
        "name": "ChatGPT",
        "other_url": ""
    },
    {
        "id": "665abcca73aa09d61a46dfef",
        "description": "Go",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1667635442/Portfolio/cirtifications/Cir-Udemy-Backend-Master.jpg",
        "name": "Go",
        "other_url": ""
    },
    {
        "id": "665abcca73aa09d61a46dfee",
        "description": "Protocols",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1667635442/Portfolio/cirtifications/Cir-Udemy-Protocols.jpg",
        "name": "Protocols",
        "other_url": ""
    },
    {
        "id": "665abcca73aa09d61a46dfed",
        "description": "Backend",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1667635442/Portfolio/cirtifications/Cir-Udemy-Backend.jpg",
        "name": "Backend",
        "other_url": ""
    },
    {
        "id": "665abcca73aa09d61a46dfec",
        "description": "DevLab3",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1667635442/Portfolio/cirtifications/Cir-DevLab.png",
        "name": "DevLab3",
        "other_url": ""
    },
    {
        "id": "665abcca73aa09d61a46dfeb",
        "description": "Pre-CCNA",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1667635442/Portfolio/cirtifications/Cir-Network.jpg",
        "name": "Pre-CCNA",
        "other_url": ""
    },
    {
        "id": "665abcca73aa09d61a46dfea",
        "description": "CSI Intouch",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1667635441/Portfolio/cirtifications/Cir-CSI.png",
        "name": "CSI Intouch",
        "other_url": ""
    },
    {
        "id": "665abcca73aa09d61a46dfe9",
        "description": "Thin manager",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1667635443/Portfolio/cirtifications/Cir-Thin.png",
        "name": "Thin manager",
        "other_url": ""
    }
]

export { getCertificationList }
