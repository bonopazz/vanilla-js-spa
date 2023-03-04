const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/": "../pages/top.html",
    "/home": "../pages/home.html",
    "/profile": "../pages/profile.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes["/"];
    const html = await fetch(route).then((data) => data.text());

    document.getElementById("app").innerHTML = html;
};

window.onpopstate = handleLocation;

handleLocation();
