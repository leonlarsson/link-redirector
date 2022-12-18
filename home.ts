import redirects from "./redirects";
const paths = Object.entries(redirects);

export default (requestPath: string) => {

    const html = `
    <!DOCTYPE html>
<html lang="en">

<head>

    <title>Leon Links</title>
    <meta name="title" content="Leon Links">
    <meta name="description" content="Links and things.">
    <meta name="theme-color" content="#7289da">

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://x.leon.ms/">
    <meta property="og:title" content="Leon Links">
    <meta property="og:description" content="Links and things.">

    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://x.leon.ms/">
    <meta property="twitter:title" content="Leon Links">
    <meta property="twitter:description" content="Links and things.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/7ebec69507.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class="container text-center">
        <h1>Links</h1>
        ${requestPath !== "/" ? `<h6>No redirect found for <code>${requestPath}</code><h6>` : ""}
        <hr>
        <div class="d-grid gap-2">
        <!-- Add d-grid class to <a> for alternative look -->
        ${paths.filter(x => x[1].visibleInHome).map(x => (`<a href="${x[1].url}" target="_blank" class="btn btn-lg btn-outline-dark">${x[1].icon ? `<i class="${x[1].icon}"></i> ` : ""}${x[1].name}</a>`)).join("\n")}
        </div>
    </div>
</body>

</html>
`;

    return new Response(html, { headers: { "Content-Type": "text/html" } });

}