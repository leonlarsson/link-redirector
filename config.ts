type Config = {
    /** The title of the page. Shown in meta and on page. */
    title?: string;
    /** The description of the page. Shown in meta and on page. Omitting will remove the description on the page. */
    description?: string;
    /** An array of Links (redirect objects). */
    redirects: Link[];
};

type Link = {
    /** An array of paths you want to match. */
    paths: string[];
    /** The URL to redirect to. */
    url: string;
    /** Whether or not to show in Home. */
    showInHome?: boolean;
    /** The FontAwesome Icon classes. Omitting = no icon. You should specify at least one of icon or name. */
    icon?: string;
    /** The name of the button. Omitting = no name. You should specify at least one of icon or name. */
    name?: string;
};

// If showInHome is true, you should specify at least icon OR home. Include both to display both name and icon. Omitting both will display an empty button, which does not look good...

export default {
    title: "Leon's Links",
    description: "A collection of useful links where you can connect with me.",
    redirects: [
        {
            paths: ["/home"],
            url: "https://leonlarsson.com",
            showInHome: true,
            icon: "fa-solid fa-house-user",
            name: "Home"
        },
        {
            paths: ["/projects", "/p"],
            url: "https://leonlarsson.com/projects",
            showInHome: true,
            icon: "fa-solid fa-hammer",
            name: "Projects"
        },
        {
            paths: ["/github", "/gh"],
            url: "https://github.com/leonlarsson",
            showInHome: true,
            icon: "fa-brands fa-github",
            name: "GitHub"
        },
        {
            paths: ["/linkedin", "/li"],
            url: "https://www.linkedin.com/in/leonlarsson",
            showInHome: true,
            icon: "fa-brands fa-linkedin",
            name: "LinkedIn"
        },
        {
            paths: ["/twitter", "/tw"],
            url: "https://twitter.com/MozzyFX",
            showInHome: true,
            icon: "fa-brands fa-twitter",
            name: "Twitter"
        },
        { paths: ["/logsorter", "/ls"], url: "https://logsorter.net" },
        { paths: ["/morse"], url: "https://bf1morse.leonlarsson.com" },
        { paths: ["/stats"], url: "https://bfstats.leonlarsson.com" },
        { paths: ["/http", "/trash"], url: "https://api.onlyraccoons.com" },
        { paths: ["/joy"], url: "https://joy.leonlarsson.com" },
        { paths: ["/bfvmenu"], url: "https://bfvmenu.leonlarsson.com/" }
    ]
} as Config;