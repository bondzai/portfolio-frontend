class project {
    constructor(name, image, description, url, source, language, tools, note, remark) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.url = url;
        this.source = source;
        this.language = language;
        this.tools = tools;
        this.note = note;
        this.remark = remark; 
    }
}

export const ProjectList = [
    new project(
        "API: E-Commerce", 
        "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634064/Portfolio/project-ecommerce.png", 
        "API: E-Commerce system", 
        "https://ecommerce.introbond.repl.co/api-docs/",
        "https://replit.com/@introbond/eCommerce?v=1",
        "JavaScript",
        "ExpressJS, MongoDB Atlast",
        `Learn how to interation services.`,
        `*Automatically sleep after after a period of inactivity.`
        ),
    new project(
        "Currency Exchange", 
        "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634065/Portfolio/project-exchange.png", 
        "Simple currency converter web application", 
        "https://introbond.github.io/micro-app-api-currency-exchange/", 
        "https://github.com/introbond/micro-app-api-currency-exchange/tree/main",
        "JavaScript",
        "ReactJS",
        `Learn about how to fetching data from public API.`,
        ``
        ),
    new project(
        "Microservice: SHA-256", 
        "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634064/Portfolio/project-hash.png", 
        "Simple SHA256 algorithm hashing function", 
        "https://introbond-crypto-ui.onrender.com/",
        "https://github.com/introbond/micro-app-crypto-ui",
        "JavaScript",
        "ExpressJS, EJS veiw engine",
        `Learn how to deal crypto flow.`,
        `*Automatically sleep after after a period of inactivity.`
        ),
    new project(
        "Microservice: Request Parser", 
        "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634064/Portfolio/project-req-parser.png", 
        "Simple SHA256 algorithm hashing function", 
        "https://microservice-headerparser.introbond.repl.co/",
        "https://replit.com/@introbond/microservice-headerparser#index.js",
        "JavaScript",
        "ExpressJS",
        `Learn more about request.`,
        `*Automatically sleep after after a period of inactivity.`
        ),
    new project(
        "Calculator", 
        "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634064/Portfolio/project-calculator.png", 
        "Simple calculator web application", 
        "https://introbond.github.io/micro-app-simple-calculator/",
        "https://github.com/introbond/micro-app-api-currency-exchange/tree/main",
        "JavaScript",
        "ReactJS",
        `Just a simple logic built with useState and JavaScript 'eval' trick.`,
        ``
        ),
    new project(
        "Microservice: Timestamp", 
        "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634065/Portfolio/project-timestamp.png", 
        "Free code camp backend assignment", 
        "https://microservice-timestamp.introbond.repl.co",
        "https://replit.com/@introbond/microservice-timestamp#index.js",
        "JavaScript",
        "NodeJS",
        ``,
        `*Automatically sleep after after a period of inactivity.`
        ),
    new project(
        "Countries info", 
        "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634064/Portfolio/project-contries-info.png", 
        "Fetch information from API then filter by country name or capital name", 
        "https://introbond.github.io/micro-app-contries-search-filter/",
        "https://github.com/introbond/micro-app-contries-search-filter/tree/main",
        "JavaScript",
        "ReactJS",
        `Fetch data from restcountries API v2 then loop with simple JavaScript array method.`,
        ``
        ),
    new project(
        "To-Do List", 
        "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634065/Portfolio/project-todolist.png", 
        "Simple to-do list web application", 
        "https://introbond.github.io/micro-app-todolist/",
        "https://github.com/introbond/micro-app-todolist/tree/main",
        "JavaScript",
        "ReactJS",
        `Learn about how to CRUD with React.`,
        ``
        ),
    new project(
        "Quiz", 
        "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634064/Portfolio/project-quiz.png", 
        "Simple quiz web application", 
        "https://introbond.github.io/micro-app-quiz/", 
        "https://github.com/introbond/micro-app-quiz/tree/main",
        "JavaScript",
        "ReactJS",
        `Learn about React hooks (state, probs & context) with the simple structure.`,
        ``
        ),
    new project(
        "Microservice: Files Upload", 
        "https://res.cloudinary.com/dbdacfhye/image/upload/v1667634064/Portfolio/project-cloudinary.png", 
        "API: file uploading service", 
        "https://introbond-upload.cyclic.app/",
        "https://github.com/introbond/Lab-express-cloudinary",
        "JavaScript",
        "ExpressJS, EJS veiw engine, Cloudinary, Cyclic",
        `Learn how to deal with files system.`,
        ``
        ),
]