import redirects from "./redirects";
const paths = Object.keys(redirects);

export default {
    fetch(request: Request) {
        const requestPath = new URL(request.url).pathname;
        return paths.includes(requestPath) ? Response.redirect(redirects[requestPath], 302) : new Response("Hello there");
    }
}