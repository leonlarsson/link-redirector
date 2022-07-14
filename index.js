import redirects from "./redirects.js";
const paths = Object.keys(redirects);

addEventListener("fetch", event => event.respondWith(handleRequest(event.request)));

const handleRequest = request => {
    const requestURL = new URL(request.url);
    return paths.includes(requestURL.pathname) ? Response.redirect(redirects[requestURL.pathname], 302) : new Response("Hello there");
}