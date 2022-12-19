type Config = {
    title?: string;
    description?: string;
    redirects: Record<string, Link>
};

type Link = {
    url: string;
    showInHome?: boolean;
    icon?: string;
    name?: string;
};

export default {
    title: "Leon's Links",
    description: "A collection of useful links where you can connect with me.",
    redirects: {
        "/home": {
            url: "https://leonlarsson.com",
            showInHome: true,
            icon: "fa-solid fa-house-user",
            name: "Home",
        },
        "/projects": {
            url: "https://leonlarsson.com/projects",
            showInHome: true,
            icon: "fa-solid fa-hammer",
            name: "Projects"
        },
        "/gh": {
            url: "https://github.com/leonlarsson",
            showInHome: true,
            icon: "fa-brands fa-github",
            name: "GitHub"
        },
        "/li": {
            url: "https://www.linkedin.com/in/leonlarsson",
            showInHome: true,
            icon: "fa-brands fa-linkedin",
            name: "LinkedIn"
        },
        "/tw": {
            url: "https://twitter.com/MozzyFX",
            showInHome: true,
            icon: "fa-brands fa-twitter",
            name: "Twitter"
        },
        "/p": { url: "https://leonlarsson.com/projects" },
        "/ls": { url: "https://logsorter.net" },
        "/morse": { url: "https://bf1morse.leonlarsson.com" },
        "/stats": { url: "https://bfstats.leonlarsson.com" },
        "/trash": { url: "https://api.onlyraccoons.com" },
        "/joy": { url: "https://joy.leonlarsson.com" },
        "/bfvmenu": { url: "https://bfvmenu.leonlarsson.com/" }
    }
} as Config;