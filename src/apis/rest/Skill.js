import { getList } from "./common/logics.js"
import { BACKEND_URLS } from "./common/urls.js";
import { CustomSortEnum } from "../../utils/choices.js";

const getSkillList = () => getList({
    urls: BACKEND_URLS,
    endpoint: "/skills/",
    customSort: CustomSortEnum.ASCENDING,
    defaultData: defaultData,
})

const defaultData = [
    {
        "id": "665abccb73aa09d61a46dfff",
        "image_url": "https://www.vectorlogo.zone/logos/golang/golang-icon.svg",
        "is_showing": true,
        "name": "Go",
        "topic": "language",
        "url": "https://go.dev/"
    },
    {
        "id": "665abccb73aa09d61a46e000",
        "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        "is_showing": true,
        "name": "JavaScript",
        "topic": "language",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/"
    },
    {
        "id": "665abccb73aa09d61a46e001",
        "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        "is_showing": false,
        "name": "TypeScript",
        "topic": "language",
        "url": "https://www.typescriptlang.org/"
    },
    {
        "id": "665abccb73aa09d61a46e002",
        "image_url": "https://www.vectorlogo.zone/logos/python/python-icon.svg",
        "is_showing": true,
        "name": "Python",
        "topic": "language",
        "url": "https://www.python.org/"
    },
    {
        "id": "665abccb73aa09d61a46e003",
        "image_url": "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
        "is_showing": true,
        "name": "Shell",
        "topic": "language",
        "url": "https://www.gnu.org/software/bash/"
    },
    {
        "id": "665abccb73aa09d61a46e004",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1668240741/Portfolio/skills/PLC.svg",
        "is_showing": true,
        "name": "PLC",
        "topic": "language",
        "url": "https://en.wikipedia.org/wiki/Programmable_logic_controller/"
    },
    {
        "id": "665abccb73aa09d61a46e005",
        "image_url": "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
        "is_showing": true,
        "name": "React",
        "topic": "frontend",
        "url": "https://reactjs.org/"
    },
    {
        "id": "665abccb73aa09d61a46e006",
        "image_url": "https://www.gitbook.com/cdn-cgi/image/width=256,height=40,fit=contain,dpr=1,format=auto/https%3A%2F%2F373165937-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-M-XEvRn3rhe8BDVGkss%252Favatar-rectangle.png%3Fgeneration%3D1582298855816936%26alt%3Dmedia",
        "is_showing": true,
        "name": "Fiber",
        "topic": "backend",
        "url": "https://docs.gofiber.io/"
    },
    {
        "id": "665abccb73aa09d61a46e007",
        "image_url": "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
        "is_showing": true,
        "name": "NodeJS",
        "topic": "backend",
        "url": "https://nodejs.org"
    },
    {
        "id": "665abccb73aa09d61a46e008",
        "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
        "is_showing": true,
        "name": "Express",
        "topic": "backend",
        "url": "https://expressjs.com"
    },
    {
        "id": "665abccb73aa09d61a46e009",
        "image_url": "https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg",
        "is_showing": false,
        "name": "Nest",
        "topic": "backend",
        "url": "https://nestjs.com/"
    },
    {
        "id": "665abccb73aa09d61a46e00a",
        "image_url": "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg",
        "is_showing": true,
        "name": "Django",
        "topic": "backend",
        "url": "https://www.djangoproject.com/"
    },
    {
        "id": "665abccb73aa09d61a46e00b",
        "image_url": "https://cdn.worldvectorlogo.com/logos/fastapi.svg",
        "is_showing": false,
        "name": "Fast",
        "topic": "backend",
        "url": "https://fastapi.tiangolo.com/"
    },
    {
        "id": "665abccb73aa09d61a46e00c",
        "image_url": "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
        "is_showing": true,
        "name": "GraphQL",
        "topic": "commu",
        "url": "https://graphql.org/"
    },
    {
        "id": "665abccb73aa09d61a46e00d",
        "image_url": "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
        "is_showing": true,
        "name": "PostreSQL",
        "topic": "database",
        "url": "https://www.postgresql.org/"
    },
    {
        "id": "665abccb73aa09d61a46e00e",
        "image_url": "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
        "is_showing": true,
        "name": "MySQL",
        "topic": "database",
        "url": "https://www.mysql.com/"
    },
    {
        "id": "665abccb73aa09d61a46e00f",
        "image_url": "https://img.icons8.com/color/96/microsoft-sql-server.png",
        "is_showing": true,
        "name": "SQLServer",
        "topic": "database",
        "url": "https://www.microsoft.com/en-us/sql-server/sql-server-downloads"
    },
    {
        "id": "665abccb73aa09d61a46e010",
        "image_url": "https://www.vectorlogo.zone/logos/influxdata/influxdata-icon.svg",
        "is_showing": true,
        "name": "Influx",
        "topic": "database",
        "url": "https://www.influxdata.com/"
    },
    {
        "id": "665abccb73aa09d61a46e011",
        "image_url": "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
        "is_showing": true,
        "name": "Mongo",
        "topic": "database",
        "url": "https://www.mongodb.com/"
    },
    {
        "id": "665abccb73aa09d61a46e012",
        "image_url": "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
        "is_showing": true,
        "name": "Kafka",
        "topic": "commu",
        "url": "https://kafka.apache.org/"
    },
    {
        "id": "665abccb73aa09d61a46e013",
        "image_url": "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
        "is_showing": true,
        "name": "Redis",
        "topic": "database",
        "url": "https://redis.io/"
    },
    {
        "id": "665abccb73aa09d61a46e014",
        "image_url": "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
        "is_showing": true,
        "name": "Git",
        "topic": "tools",
        "url": "https://git-scm.com/"
    },
    {
        "id": "665abccb73aa09d61a46e015",
        "image_url": "https://www.vectorlogo.zone/logos/github/github-icon.svg",
        "is_showing": true,
        "name": "GitHub",
        "topic": "tools",
        "url": "https://github.com/"
    },
    {
        "id": "665abccb73aa09d61a46e016",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg",
        "is_showing": true,
        "name": "VMware",
        "topic": "tools",
        "url": "https://www.vmware.com/"
    },
    {
        "id": "665abccb73aa09d61a46e017",
        "image_url": "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
        "is_showing": true,
        "name": "Docker",
        "topic": "tools",
        "url": "https://www.docker.com/"
    },
    {
        "id": "665abccb73aa09d61a46e018",
        "image_url": "https://www.vectorlogo.zone/logos/replit/replit-icon.svg",
        "is_showing": true,
        "name": "Replit",
        "topic": "tools",
        "url": "https://replit.com/"
    },
    {
        "id": "665abccb73aa09d61a46e019",
        "image_url": "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
        "is_showing": true,
        "name": "RabbitMQ",
        "topic": "commu",
        "url": "https://www.rabbitmq.com/"
    },
    {
        "id": "665abccb73aa09d61a46e01a",
        "image_url": "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg",
        "is_showing": true,
        "name": "Grafana",
        "topic": "tools",
        "url": "https://grafana.com/"
    },
    {
        "id": "665abccb73aa09d61a46e01b",
        "image_url": "https://www.vectorlogo.zone/logos/virtualbox/virtualbox-icon.svg",
        "is_showing": true,
        "name": "Virtualbox",
        "topic": "tools",
        "url": "https://www.virtualbox.org/"
    },
    {
        "id": "665abccb73aa09d61a46e01c",
        "image_url": "https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg",
        "is_showing": true,
        "name": "Ubuntu",
        "topic": "os",
        "url": "https://ubuntu.com/"
    },
    {
        "id": "665abccb73aa09d61a46e01d",
        "image_url": "https://www.vectorlogo.zone/logos/archlinux/archlinux-icon.svg",
        "is_showing": true,
        "name": "Arch",
        "topic": "os",
        "url": "https://archlinux.org/"
    },
    {
        "id": "665abccb73aa09d61a46e01e",
        "image_url": "https://www.vectorlogo.zone/logos/debian/debian-icon.svg",
        "is_showing": true,
        "name": "Debian",
        "topic": "os",
        "url": "https://www.debian.org/"
    },
    {
        "id": "665abccb73aa09d61a46e01f",
        "image_url": "https://www.vectorlogo.zone/logos/raspberrypi/raspberrypi-icon.svg",
        "is_showing": true,
        "name": "RaspberryPi",
        "topic": "os",
        "url": "https://www.raspberrypi.com/software/"
    },
    {
        "id": "665abccb73aa09d61a46e020",
        "image_url": "https://www.vectorlogo.zone/logos/arduino/arduino-icon.svg",
        "is_showing": true,
        "name": "Arduino",
        "topic": "automation",
        "url": "https://www.arduino.cc/"
    },
    {
        "id": "665abccb73aa09d61a46e021",
        "image_url": "https://www.rockwellautomation.com/content/dam/rockwell-automation/sites/images/logos/2019_Logo_rgb_RA_Bug-LeftText_color.svg",
        "is_showing": true,
        "name": "Rockwell",
        "topic": "automation",
        "url": "https://www.rockwellautomation.com/en-us/tools/software-subscriptions-updated.html"
    },
    {
        "id": "665abccb73aa09d61a46e022",
        "image_url": "https://www.aveva.com/content/experience-fragments/aveva/en/site/header-2/master/_jcr_content/root/responsivegrid/globalheader/logo.coreimg.svg/1655394323761/header-logo.svg",
        "is_showing": true,
        "name": "Aveva",
        "topic": "automation",
        "url": "https://www.aveva.com/en/solutions/operations/operations-control-hmi/"
    },
    {
        "id": "665abccb73aa09d61a46e023",
        "image_url": "https://www.vectorlogo.zone/logos/grpcio/grpcio-ar21.svg",
        "is_showing": true,
        "name": "gRPC",
        "topic": "commu",
        "url": "https://grpc.io/"
    },
    {
        "id": "665c4cfcdba3b853e64ff67b",
        "image_url": "https://apisix.apache.org/img/logo2.svg",
        "is_showing": true,
        "name": "APISIX",
        "topic": "tools",
        "url": "https://apisix.apache.org/"
    },
    {
        "id": "665c4e84dba3b853e64ff67c",
        "image_url": "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg",
        "is_showing": true,
        "name": "Elastic",
        "topic": "database",
        "url": "https://www.elastic.co/"
    },
    {
        "id": "665c4e84dba3b853e64ff67d",
        "image_url": "https://www.vectorlogo.zone/logos/wireguard/wireguard-icon.svg",
        "is_showing": true,
        "name": "Wireguard",
        "topic": "tools",
        "url": "https://www.wireguard.com/"
    },
    {
        "id": "677df98e569992f08579af6a",
        "image_url": "https://cdn.brandfetch.io/id7QyaLp8E/w/768/h/768/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
        "is_showing": true,
        "name": "Tailscale",
        "topic": "tools",
        "url": "https://tailscale.com/"
    }
]

export { getSkillList }
