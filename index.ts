import redirects from "./redirects";
const paths = Object.keys(redirects);

export default {
    fetch(request: Request ) {
        const requestURL = new URL(request.url);
        return paths.includes(requestURL.pathname) ? Response.redirect(redirects[requestURL.pathname], 302) : new Response("Hello there");
    }
}
