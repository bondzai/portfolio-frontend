export const avengers = {
    0: {
        avatar: "https://avatars.githubusercontent.com/u/4670056?v=4",
        title: "Anthony",
        url: "https://www.youtube.com/@anthonygg_/",
        repoUrl: "https://github.com/anthdm/",
        description: "",
    },
    1: {
        avatar: "https://avatars.githubusercontent.com/u/24481316?v=4",
        title: "Sub-J",
        url: "",
        repoUrl: "https://github.com/sapjarern/",
        description: "",
    },
    2: {
        avatar: "https://avatars.githubusercontent.com/u/88017471?v=4",
        title: "Ninja",
        repoUrl: "https://github.com/chaninlaw/",
        url: "https://chaninlaw.vercel.app/",
        description: "",
    },
    3: {
        avatar: "https://avatars.githubusercontent.com/u/132638455?v=4",
        title: "Tum",
        url: "https://nuttapat-portfolio.onrender.com/",
        repoUrl: "https://github.com/nuttapat-swd",
        description: "",
    },
    4: {
        avatar: "https://avatars.githubusercontent.com/u/77603903?v=4",
        title: "Fluke",
        url: "https://jeerawut.vercel.app/",
        repoUrl: "https://github.com/jeerawut97/",
        description: "",
    },
    5: {
        avatar: "https://avatars.githubusercontent.com/u/103378900?v=4",
        title: "Gug",
        url: "https://bt144p-portfolio.vercel.app/",
        repoUrl: "https://github.com/B144p/",
        description: "",
    },
    6: {
        avatar: "https://avatars.githubusercontent.com/u/57356777?v=4",
        title: "Phoon",
        url: "",
        repoUrl: "https://github.com/phoon-phoon/",
        description: "",
    },
}

if (import.meta.env.DEV) {
    avengers[Object.keys(avengers).length + 1] = {
        avatar: "https://avatars.githubusercontent.com/u/168957872?v=4",
        title: "Anonymous",
        url: "",
        repoUrl: "https://github.com/0xtokiya/",
        description: "",
    };
}
