export const cardDetails = {
    1: {
        avatar: "https://avatars.githubusercontent.com/u/88017471?v=4",
        title: "Ninja",
        repoUrl: "https://github.com/chaninlaw/",
        url: "https://chaninlaw.vercel.app/",
        description: "",
    },
    2: {
        avatar: "https://avatars.githubusercontent.com/u/132638455?v=4",
        title: "Tum",
        url: "https://nuttapat-portfolio.onrender.com/",
        repoUrl: "https://github.com/nuttapat-swd",
        description: "",
    },
    3: {
        avatar: "https://avatars.githubusercontent.com/u/77603903?v=4",
        title: "Fluke",
        url: "https://jeerawut.vercel.app/",
        repoUrl: "https://github.com/jeerawut97/",
        description: "",
    },
    4: {
        avatar: "https://avatars.githubusercontent.com/u/103378900?v=4",
        title: "Gug",
        url: "https://bt144p-portfolio.vercel.app/",
        repoUrl: "https://github.com/B144p/",
        description: "",
    },
}

if (import.meta.env.DEV) {
    cardDetails[0] = {
        avatar: "https://avatars.githubusercontent.com/u/168957872?v=4",
        title: "Anonymous",
        url: "",
        repoUrl: "https://github.com/0xtokiya/",
        description: "",
    }
}
