class skill {
    constructor(name, image, url, topic) {
        this.name = name;
        this.image = image;
        this.url = url;
        this.topic = topic;
    }
}
export const SkillList = [
    // ========== Programming Language ==========
    new skill(
        "Go", 
        "https://www.vectorlogo.zone/logos/golang/golang-icon.svg", 
        "https://go.dev/", 
        "language", 
        ),
    new skill(
        "JavaScript", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", 
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript", 
        "language", 
        ),
    new skill(
        "TypeScript", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", 
        "https://www.typescriptlang.org/", 
        "language", 
        ),
    new skill(
        "Python", 
        "https://www.vectorlogo.zone/logos/python/python-vertical.svg", 
        "https://www.python.org/", 
        "language", 
        ),
    new skill(
        "Shell", 
        "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg", 
        "https://www.gnu.org/software/bash/", 
        "language", 
        ),
    new skill(
        "PLC", 
        "https://res.cloudinary.com/dbdacfhye/image/upload/v1668240741/Portfolio/skills/PLC.svg", 
        "https://en.wikipedia.org/wiki/Programmable_logic_controller", 
        "language", 
        ),
        
    // ========== Frontend ==========
    new skill(
        "ReactJS", 
        "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg", 
        "https://reactjs.org/", 
        "frontend", 
    ),
    new skill(
        "HTML", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", 
        "https://www.w3.org/html/", 
        "frontend", 
        ),
    new skill(
        "CSS", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", 
        "https://www.w3schools.com/css/", 
        "frontend", 
        ),

    // ========== Backend ==========
    new skill(
        "Fiber", 
        "https://www.gitbook.com/cdn-cgi/image/width=256,height=40,fit=contain,dpr=1,format=auto/https%3A%2F%2F373165937-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-M-XEvRn3rhe8BDVGkss%252Favatar-rectangle.png%3Fgeneration%3D1582298855816936%26alt%3Dmedia", 
        "https://docs.gofiber.io/", 
        "backend", 
        ),
    new skill(
        "NodeJS", 
        "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg", 
        "https://nodejs.org", 
        "backend", 
        ),
    new skill(
        "ExpressJS", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg", 
        "https://expressjs.com", 
        "backend", 
        ),
    new skill(
        "NestJS", 
        "https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg", 
        "https://nestjs.com/", 
        "backend", 
        ),
    new skill(
        "Django", 
        "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg", 
        "https://www.djangoproject.com/", 
        "backend", 
        ),
    new skill(
        "Flask", 
        "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg", 
        "https://flask.palletsprojects.com/en/2.2.x/", 
        "backend", 
        ),
    new skill(
        "GraphQl", 
        "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg", 
        "https://graphql.org/", 
        "backend", 
        ),

    // ========== Databases ==========
    new skill(
        "Postgres", 
        "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg", 
        "https://www.postgresql.org/", 
        "database", 
        ),
    new skill(
        "MySQL", 
        "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg", 
        "https://www.mysql.com/", 
        "database", 
        ),
    new skill(
        "SQLserver", 
        "https://img.icons8.com/color/96/microsoft-sql-server.png", 
        "https://www.microsoft.com/en-us/sql-server/sql-server-downloads", 
        "database", 
        ),
    new skill(
        "Influx", 
        "https://www.vectorlogo.zone/logos/influxdata/influxdata-icon.svg", 
        "https://www.influxdata.com/", 
        "database", 
        ),
    new skill(
        "MongoDB", 
        "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg", 
        "https://www.mongodb.com/", 
        "database", 
        ),
    new skill(
        "Firebase", 
        "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", 
        "https://firebase.google.com/", 
        "database", 
        ),
    new skill(
        "SQLite", 
        "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg", 
        "https://www.sqlite.org/index.html", 
        "database", 
        ),
    new skill(
        "Prometheus", 
        "https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg", 
        "https://prometheus.io/", 
        "database", 
        ),
    new skill(
        "Redis", 
        "https://www.vectorlogo.zone/logos/redis/redis-icon.svg", 
        "https://redis.io/", 
        "database", 
        ),

    // ========== DevOp & Other Tools ==========
    new skill(
        "Git", 
        "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", 
        "https://git-scm.com/", 
        "tools", 
        ),
    new skill(
        "GitHub", 
        "https://www.vectorlogo.zone/logos/github/github-icon.svg", 
        "https://github.com/", 
        "tools", 
        ),
    new skill(
        "VMware", 
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg", 
        "https://www.vmware.com/", 
        "tools", 
        ),
    new skill(
        "Docker", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg", 
        "https://www.docker.com/", 
        "tools", 
        ),
    new skill(
        "Kubernetes", 
        "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg", 
        "https://kubernetes.io/", 
        "tools", 
        ),
    new skill(
        "Replit", 
        "https://www.vectorlogo.zone/logos/replit/replit-icon.svg", 
        "https://replit.com/", 
        "tools", 
        ),
    new skill(
        "AWS", 
        "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg", 
        "https://aws.amazon.com/", 
        "tools", 
        ),
    new skill(
        "RabbitMQ", 
        "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg", 
        "https://www.rabbitmq.com/", 
        "tools", 
        ),
    new skill(
        "Kafka", 
        "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-vertical.svg", 
        "https://kafka.apache.org/", 
        "tools", 
        ),
    new skill(
        "Nginx", 
        "https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg", 
        "https://www.nginx.com/", 
        "tools", 
        ),
    new skill(
        "Grafana", 
        "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg", 
        "https://grafana.com/", 
        "tools", 
        ),
    // ========== Blockchain & smart contract ==========

    // ========== OS ==========
    new skill(
        "Mint", 
        "https://img.icons8.com/color/1x/linux-mint.png", 
        "https://linuxmint.com/", 
        "os", 
        ),
    new skill(
        "Arch", 
        "https://www.vectorlogo.zone/logos/archlinux/archlinux-icon.svg", 
        "https://archlinux.org/", 
        "os", 
        ),
    new skill(
        "CentOS", 
        "https://www.vectorlogo.zone/logos/centos/centos-icon.svg", 
        "https://www.centos.org/", 
        "os", 
        ),
    new skill(
        "Ubuntu", 
        "https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg", 
        "https://ubuntu.com/", 
        "os", 
        ),        
    new skill(
        "RaspberryPiOS", 
        "https://www.vectorlogo.zone/logos/raspberrypi/raspberrypi-icon.svg", 
        "https://www.raspberrypi.com/software/", 
        "os", 
        ),

    // ========== Automation & IOT Stuff ==========
    new skill(
        "Arduino", 
        "https://www.vectorlogo.zone/logos/arduino/arduino-icon.svg", 
        "https://www.arduino.cc/", 
        "automation", 
        ),
    new skill(
        "Rockwell", 
        "https://symbols-electrical.getvecta.com/stencil_262/71_rockwell-automation-icon.05b6277eb8.svg", 
        "https://www.rockwellautomation.com/en-us/tools/software-subscriptions-updated.html", 
        "automation", 
        ),
    new skill(
        "Aveva", 
        "https://www.aveva.com/content/experience-fragments/aveva/en/site/header-2/master/_jcr_content/root/responsivegrid/globalheader/logo.coreimg.svg/1655394323761/header-logo.svg", 
        "https://www.aveva.com/en/solutions/operations/operations-control-hmi/", 
        "automation", 
        ),
    // new skill(
    //     "SE", 
    //     "https://res.cloudinary.com/dbdacfhye/image/upload/v1676471086/Portfolio/skills/SE.jpg", 
    //     "https://www.se.com/th/en/work/products/industrial-automation-control/", 
    //     "automation", 
    //     ),
    ]