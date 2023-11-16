import redirects from "./redirects";

export default {
  fetch(request: Request) {
    const requestPath = new URL(request.url).pathname;
    const requestedLink = redirects.find(x => x.paths.includes(requestPath));
    return Response.redirect(
      requestedLink?.url ?? "https://leonlarsson.com",
      302
    );
  },
};
