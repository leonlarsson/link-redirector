type RedirectLink = {
  /** An array of paths you want to match. */
  paths: string[];
  /** The URL to redirect to. */
  url: string;
};

export default [
  {
    paths: ["/home"],
    url: "https://leonlarsson.com",
  },
  {
    paths: ["/projects", "/p"],
    url: "https://leonlarsson.com/projects",
  },
  {
    paths: ["/github", "/gh"],
    url: "https://github.com/leonlarsson",
  },
  {
    paths: ["/linkedin", "/li"],
    url: "https://www.linkedin.com/in/leonlarsson",
  },
  {
    paths: ["/twitter", "/tw", "/x"],
    url: "https://x.com/MozzyFX",
  },
  { paths: ["/logsorter", "/ls"], url: "https://logsorter.com" },
  { paths: ["/morse"], url: "https://bf1morse.leonlarsson.com" },
  { paths: ["/stats"], url: "https://battlefieldstats.com/" },
  { paths: ["/http", "/trash"], url: "https://httpraccoons.com" },
  { paths: ["/joy"], url: "https://joy.leonlarsson.com" },
  { paths: ["/bfvmenu"], url: "https://bfvmenu.leonlarsson.com/" },
] satisfies RedirectLink[];
