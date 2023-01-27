import home from "./home";
import config from "./config";

export default {
    fetch(request: Request) {
        const requestPath = new URL(request.url).pathname;
        const requestedLink = config.redirects.find(x => x.paths.includes(requestPath));
        return requestedLink ? Response.redirect(requestedLink.url, 302) : config.useHome ? home(requestPath) : Response.redirect(config.homeRedirectUrl, 302);
    }
}