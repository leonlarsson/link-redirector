import home from "./home";
import config from "./config";
const paths = Object.keys(config.redirects);

export default {
    fetch(request: Request) {
        const requestPath = new URL(request.url).pathname;
        return paths.includes(requestPath) ? Response.redirect(config.redirects[requestPath].url, 302) : home(requestPath);
    }
}