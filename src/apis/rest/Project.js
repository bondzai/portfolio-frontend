import { getList } from "./common/logics.js"
import { BACKEND_URLS } from "./common/urls.js";
import { CustomSortEnum } from "../../utils/choices.js";

const getProjectList = () => getList({
    urls: BACKEND_URLS,
    endpoint: "/projects/",
    customSort: CustomSortEnum.ASCENDING,
    defaultData: defaultData,
})

export { getProjectList }

const defaultData = [
    {
        "id": "565abccb73aa09d61a46dffe",
        "host_url": "https://zero-buddy.onrender.com",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1766303918/Portfolio/project-zero-buddy.png",
        "is_highlight": true,
        "is_sleep": false,
        "language": "Javascript",
        "name": "Zero-Buddy",
        "source_url": "https://github.com/bondzai/zero-buddy",
        "status": "online",
        "tools": ""
    },
    {
        "id": "665abccb73aa09d61a46dffe",
        "host_url": "https://apollo-catstronauts-server.introbond.repl.co",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1694937857/Portfolio/projects/project-cats-server.png",
        "is_highlight": true,
        "is_sleep": true,
        "language": "Javascript",
        "name": "GraphQL-Catstronauts-server",
        "source_url": "https://github.com/bondzai/apollo-catstronauts-server",
        "status": "offline",
        "tools": ""
    },
    {
        "id": "665abccb73aa09d61a46dffd",
        "host_url": "https://apollo-catstronauts-client.vercel.app/",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1694937857/Portfolio/projects/project-cats-client.png",
        "is_highlight": true,
        "is_sleep": true,
        "language": "Javascript",
        "name": "GraphQL-Catstronauts-client",
        "source_url": "https://github.com/bondzai/apollo-catstronauts-client",
        "status": "online",
        "tools": ""
    },
    {
        "id": "665abccb73aa09d61a46dffc",
        "host_url": "https://swiftdev.onrender.com/",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1681039500/project-scrum.png",
        "is_highlight": false,
        "is_sleep": false,
        "language": "Javascript",
        "name": "Scrum Dashboard",
        "source_url": "https://github.com/bondzai/scrum-dashboard",
        "status": "offline",
        "tools": ""
    },
    {
        "id": "665abccb73aa09d61a46dffb",
        "host_url": "https://ecommerce.introbond.repl.co/api-docs/",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634064/Portfolio/project-ecommerce.png",
        "is_highlight": false,
        "is_sleep": true,
        "language": "Javascript",
        "name": "API: E-Commerce",
        "source_url": "https://replit.com/@introbond/eCommerce?v=1",
        "status": "offline",
        "tools": ""
    },
    {
        "id": "665abccb73aa09d61a46dffa",
        "host_url": "https://bondzai.github.io/micro-app-api-currency-exchange/",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634065/Portfolio/project-exchange.png",
        "is_highlight": false,
        "is_sleep": false,
        "language": "Javascript",
        "name": "Currency Exchange",
        "source_url": "https://github.com/bondzai/micro-app-api-currency-exchange/tree/main",
        "status": "online",
        "tools": ""
    },
    {
        "id": "665abccb73aa09d61a46dff9",
        "host_url": "https://introbond-crypto-ui.onrender.com/",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634064/Portfolio/project-hash.png",
        "is_highlight": false,
        "is_sleep": true,
        "language": "Javascript",
        "name": "Microservice: SHA-256",
        "source_url": "https://github.com/bondzai/micro-app-crypto-ui",
        "status": "online",
        "tools": ""
    },
    {
        "id": "665abccb73aa09d61a46dff8",
        "host_url": "https://microservice-headerparser.introbond.repl.co/",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634064/Portfolio/project-req-parser.png",
        "is_highlight": false,
        "is_sleep": true,
        "language": "Javascript",
        "name": "Microservice: Request Parser",
        "source_url": "https://replit.com/@introbond/microservice-headerparser#index.js",
        "status": "offline",
        "tools": ""
    },
    {
        "id": "665abccb73aa09d61a46dff7",
        "host_url": "https://bondzai.github.io/micro-app-simple-calculator/",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634064/Portfolio/project-calculator.png",
        "is_highlight": false,
        "is_sleep": false,
        "language": "Javascript",
        "name": "Calculator",
        "source_url": "https://github.com/bondzai/micro-app-api-currency-exchange/tree/main",
        "status": "online",
        "tools": ""
    },
    {
        "id": "665abccb73aa09d61a46dff6",
        "host_url": "https://microservice-timestamp.introbond.repl.co",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634065/Portfolio/project-timestamp.png",
        "is_highlight": false,
        "is_sleep": true,
        "language": "Javascript",
        "name": "Microservice: Time Stamp",
        "source_url": "https://replit.com/@introbond/microservice-timestamp#index.js",
        "status": "offline",
        "tools": ""
    },
    {
        "id": "665abccb73aa09d61a46dff5",
        "host_url": "https://bondzai.github.io/micro-app-contries-search-filter/",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634064/Portfolio/project-contries-info.png",
        "is_highlight": false,
        "is_sleep": false,
        "language": "Javascript",
        "name": "Contries Information",
        "source_url": "https://github.com/bondzai/micro-app-contries-search-filter/tree/main",
        "status": "online",
        "tools": ""
    },
    {
        "id": "665abccb73aa09d61a46dff4",
        "host_url": "https://bondzai.github.io/micro-app-todolist/",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634065/Portfolio/project-todolist.png",
        "is_highlight": false,
        "is_sleep": false,
        "language": "Javascript",
        "name": "To-Do List",
        "source_url": "https://github.com/bondzai/micro-app-todolist/tree/main",
        "status": "online",
        "tools": ""
    },
    {
        "id": "665abccb73aa09d61a46dff3",
        "host_url": "https://bondzai.github.io/micro-app-quiz/",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634064/Portfolio/project-quiz.png",
        "is_highlight": false,
        "is_sleep": false,
        "language": "Javascript",
        "name": "Quiz",
        "source_url": "https://github.com/bondzai/micro-app-quiz/tree/main",
        "status": "online",
        "tools": ""
    },
    {
        "id": "665abccb73aa09d61a46dff2",
        "host_url": "https://introbond-upload.cyclic.app/",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634064/Portfolio/project-cloudinary.png",
        "is_highlight": false,
        "is_sleep": false,
        "language": "Javascript",
        "name": "Microservice: File Upload",
        "source_url": "https://github.com/introbond/Lab-express-cloudinary",
        "status": "offline",
        "tools": ""
    }
]

export const statusOptions = [
    { value: "", label: "all" },
    { value: "online", label: "Online" },
    { value: "offline", label: "Offline" },
    { value: "inprogress", label: "In progress" }
];
