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
        "id": "go-id",
        "image_url": "https://www.vectorlogo.zone/logos/golang/golang-icon.svg",
        "is_showing": true,
        "name": "Go",
        "topic": "language",
        "url": "https://go.dev/"
    },
    {
        "id": "rust-lang-generated-id",
        "image_url": "https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg",
        "is_showing": true,
        "name": "Rust",
        "topic": "language",
        "url": "https://www.rust-lang.org/"
    },
    {
        "id": "javascript-id",
        "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        "is_showing": true,
        "name": "JavaScript",
        "topic": "language",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/"
    },
    {
        "id": "typescript-id",
        "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        "is_showing": true,
        "name": "TypeScript",
        "topic": "language",
        "url": "https://www.typescriptlang.org/"
    },
    {
        "id": "python-id",
        "image_url": "https://www.vectorlogo.zone/logos/python/python-icon.svg",
        "is_showing": true,
        "name": "Python",
        "topic": "language",
        "url": "https://www.python.org/"
    },
    {
        "id": "shell-id",
        "image_url": "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
        "is_showing": true,
        "name": "Shell",
        "topic": "language",
        "url": "https://www.gnu.org/software/bash/"
    },
    {
        "id": "solidity-id",
        "image_url": "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/solidity/solidity-original.svg",
        "is_showing": true,
        "name": "Solidity",
        "topic": "language",
        "url": "https://soliditylang.org/"
    },
    {
        "id": "plc-id",
        "image_url": "https://res.cloudinary.com/dbdacfhye/image/upload/v1668240741/Portfolio/skills/PLC.svg",
        "is_showing": true,
        "name": "PLC",
        "topic": "language",
        "url": "https://en.wikipedia.org/wiki/Programmable_logic_controller/"
    },
    {
        "id": "next-js-id",
        "image_url": "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
        "is_showing": true,
        "name": "Next.js",
        "topic": "frontend",
        "url": "https://nextjs.org/"
    },
    {
        "id": "react-id",
        "image_url": "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
        "is_showing": true,
        "name": "React",
        "topic": "frontend",
        "url": "https://reactjs.org/"
    },
    {
        "id": "fiber-id",
        "image_url": "https://www.gitbook.com/cdn-cgi/image/width=256,height=40,fit=contain,dpr=1,format=auto/https%3A%2F%2F373165937-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-M-XEvRn3rhe8BDVGkss%252Favatar-rectangle.png%3Fgeneration%3D1582298855816936%26alt%3Dmedia",
        "is_showing": true,
        "name": "Fiber",
        "topic": "backend",
        "url": "https://docs.gofiber.io/"
    },
    {
        "id": "elysia-js-id",
        "image_url": "https://elysiajs.com/assets/elysia.svg",
        "is_showing": true,
        "name": "ElysiaJS",
        "topic": "backend",
        "url": "https://elysiajs.com/"
    },
    {
        "id": "express-id",
        "image_url": "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
        "is_showing": true,
        "name": "Express",
        "topic": "backend",
        "url": "https://expressjs.com"
    },
    {
        "id": "nest-id",
        "image_url": "https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg",
        "is_showing": false,
        "name": "Nest",
        "topic": "backend",
        "url": "https://nestjs.com/"
    },
    {
        "id": "django-id",
        "image_url": "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg",
        "is_showing": true,
        "name": "Django",
        "topic": "backend",
        "url": "https://www.djangoproject.com/"
    },
    {
        "id": "fast-api-id",
        "image_url": "https://cdn.worldvectorlogo.com/logos/fastapi.svg",
        "is_showing": true,
        "name": "Fast-API",
        "topic": "backend",
        "url": "https://fastapi.tiangolo.com/"
    },
    {
        "id": "graphql-id",
        "image_url": "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
        "is_showing": true,
        "name": "GraphQL",
        "topic": "commu",
        "url": "https://graphql.org/"
    },
    {
        "id": "websocket-id",
        "image_url": "https://www.svgrepo.com/show/354553/websocket.svg",
        "is_showing": true,
        "name": "WebSocket",
        "topic": "commu",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
    },
    {
        "id": "sse-id",
        "image_url": "",
        "is_showing": true,
        "name": "SSE",
        "topic": "commu",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events"
    },
    {
        "id": "mqtt-id",
        "image_url": "https://mqtt.org/assets/img/mqtt-logo-ver.jpg",
        "is_showing": true,
        "name": "MQTT",
        "topic": "commu",
        "url": "https://mqtt.org/"
    },
    {
        "id": "nostr-id",
        "image_url": "https://user-images.githubusercontent.com/99301796/219715119-8d2d017a-3a76-4f16-abc2-08f9ea0e985d.png",
        "is_showing": true,
        "name": "Nostr",
        "topic": "commu",
        "url": "https://nostr.com/"
    },
    {
        "id": "postgresql-id",
        "image_url": "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
        "is_showing": true,
        "name": "PostreSQL",
        "topic": "database",
        "url": "https://www.postgresql.org/"
    },
    {
        "id": "mysql-id",
        "image_url": "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
        "is_showing": true,
        "name": "MySQL",
        "topic": "database",
        "url": "https://www.mysql.com/"
    },
    {
        "id": "influx-id",
        "image_url": "https://www.vectorlogo.zone/logos/influxdata/influxdata-icon.svg",
        "is_showing": true,
        "name": "Influx",
        "topic": "database",
        "url": "https://www.influxdata.com/"
    },
    {
        "id": "mongo-id",
        "image_url": "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
        "is_showing": true,
        "name": "Mongo",
        "topic": "database",
        "url": "https://www.mongodb.com/"
    },
    {
        "id": "kafka-id",
        "image_url": "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
        "is_showing": true,
        "name": "Kafka",
        "topic": "commu",
        "url": "https://kafka.apache.org/"
    },
    {
        "id": "redis-id",
        "image_url": "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
        "is_showing": true,
        "name": "Redis",
        "topic": "database",
        "url": "https://redis.io/"
    },
    {
        "id": "sqlserver-id",
        "image_url": "https://img.icons8.com/color/96/microsoft-sql-server.png",
        "is_showing": true,
        "name": "SQLServer",
        "topic": "database",
        "url": "https://www.microsoft.com/en-us/sql-server/sql-server-downloads"
    },
    {
        "id": "git-id",
        "image_url": "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
        "is_showing": true,
        "name": "Git",
        "topic": "tools",
        "url": "https://git-scm.com/"
    },
    {
        "id": "github-id",
        "image_url": "https://www.vectorlogo.zone/logos/github/github-icon.svg",
        "is_showing": true,
        "name": "GitHub",
        "topic": "tools",
        "url": "https://github.com/"
    },
    {
        "id": "vmware-id",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg",
        "is_showing": true,
        "name": "VMware",
        "topic": "tools",
        "url": "https://www.vmware.com/"
    },
    {
        "id": "docker-id",
        "image_url": "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
        "is_showing": true,
        "name": "Docker",
        "topic": "tools",
        "url": "https://www.docker.com/"
    },
    {
        "id": "replit-id",
        "image_url": "https://www.vectorlogo.zone/logos/replit/replit-icon.svg",
        "is_showing": true,
        "name": "Replit",
        "topic": "tools",
        "url": "https://replit.com/"
    },
    {
        "id": "rabbitmq-id",
        "image_url": "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
        "is_showing": true,
        "name": "RabbitMQ",
        "topic": "commu",
        "url": "https://www.rabbitmq.com/"
    },
    {
        "id": "grafana-id",
        "image_url": "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg",
        "is_showing": true,
        "name": "Grafana",
        "topic": "tools",
        "url": "https://grafana.com/"
    },
    {
        "id": "virtualbox-id",
        "image_url": "https://www.vectorlogo.zone/logos/virtualbox/virtualbox-icon.svg",
        "is_showing": true,
        "name": "Virtualbox",
        "topic": "tools",
        "url": "https://www.virtualbox.org/"
    },
    {
        "id": "gcp-id",
        "image_url": "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
        "is_showing": true,
        "name": "GCP",
        "topic": "tools",
        "url": "https://cloud.google.com/"
    },
    {
        "id": "aws-id",
        "image_url": "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
        "is_showing": true,
        "name": "AWS",
        "topic": "tools",
        "url": "https://aws.amazon.com/"
    },
    {
        "id": "k8s-id",
        "image_url": "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
        "is_showing": true,
        "name": "K8s",
        "topic": "tools",
        "url": "https://kubernetes.io/"
    },
    {
        "id": "nginx-id",
        "image_url": "https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg",
        "is_showing": true,
        "name": "Nginx",
        "topic": "tools",
        "url": "https://nginx.org/"
    },
    {
        "id": "ubuntu-id",
        "image_url": "https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg",
        "is_showing": true,
        "name": "Ubuntu",
        "topic": "os",
        "url": "https://ubuntu.com/"
    },
    {
        "id": "arch-id",
        "image_url": "https://www.vectorlogo.zone/logos/archlinux/archlinux-icon.svg",
        "is_showing": true,
        "name": "Arch",
        "topic": "os",
        "url": "https://archlinux.org/"
    },
    {
        "id": "debian-id",
        "image_url": "https://www.vectorlogo.zone/logos/debian/debian-icon.svg",
        "is_showing": true,
        "name": "Debian",
        "topic": "os",
        "url": "https://www.debian.org/"
    },
    {
        "id": "raspberrypi-id",
        "image_url": "https://www.vectorlogo.zone/logos/raspberrypi/raspberrypi-icon.svg",
        "is_showing": true,
        "name": "RaspberryPi",
        "topic": "os",
        "url": "https://www.raspberrypi.com/software/"
    },
    {
        "id": "arduino-id",
        "image_url": "https://www.vectorlogo.zone/logos/arduino/arduino-icon.svg",
        "is_showing": true,
        "name": "Arduino",
        "topic": "automation",
        "url": "https://www.arduino.cc/"
    },
    {
        "id": "rockwell-id",
        "image_url": "https://www.rockwellautomation.com/content/dam/rockwell-automation/sites/images/logos/2019_Logo_rgb_RA_Bug-LeftText_color.svg",
        "is_showing": true,
        "name": "Rockwell",
        "topic": "automation",
        "url": "https://www.rockwellautomation.com/en-us/tools/software-subscriptions-updated.html"
    },
    {
        "id": "aveva-id",
        "image_url": "https://www.aveva.com/content/experience-fragments/aveva/en/site/header-2/master/_jcr_content/root/responsivegrid/globalheader/logo.coreimg.svg/1655394323761/header-logo.svg",
        "is_showing": true,
        "name": "Aveva",
        "topic": "automation",
        "url": "https://www.aveva.com/en/solutions/operations/operations-control-hmi/"
    },
    {
        "id": "grpc-id",
        "image_url": "https://www.vectorlogo.zone/logos/grpcio/grpcio-ar21.svg",
        "is_showing": true,
        "name": "gRPC",
        "topic": "commu",
        "url": "https://grpc.io/"
    },
    {
        "id": "apisix-id",
        "image_url": "https://apisix.apache.org/img/logo2.svg",
        "is_showing": true,
        "name": "APISIX",
        "topic": "tools",
        "url": "https://apisix.apache.org/"
    },
    {
        "id": "wireguard-id",
        "image_url": "https://www.vectorlogo.zone/logos/wireguard/wireguard-icon.svg",
        "is_showing": true,
        "name": "Wireguard",
        "topic": "tools",
        "url": "https://www.wireguard.com/"
    },
    {
        "id": "tailscale-id",
        "image_url": "https://cdn.brandfetch.io/id7QyaLp8E/w/768/h/768/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
        "is_showing": true,
        "name": "Tailscale",
        "topic": "tools",
        "url": "https://tailscale.com/"
    }
]

export { getSkillList }
