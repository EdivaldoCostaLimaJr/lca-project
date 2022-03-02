const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href); // /about
  handleLocation();
};

const routes = {
  404: "/pages/404.html",
  "/": "/index.html",
  "/about": "/pages/about.html",
  "/lorem": "/pages/lorem.html",
  "/primeiro": "/pages/primeiro.html",
  "/segundo": "/pages/segundo.html"
};

const handleLocation = async () => {
  const path = window.location.pathname; // "/about"
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("container").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
