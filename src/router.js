const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href); // /about
  handleLocation();
};

const routes = {
  404: "/pages/404.html",
  "/": "/pages/main.html",
  "/index": "/pages/main.html",
  "/index.html": "/pages/main.html",
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

const firstDegree = () => {
  const input = document.getElementById("valor01").value;
  alert(`Valor remoto: R$${input*0.7}\nValor possivel: R$${input*0.3}`);
}

const secondDegree = () => {
  const perdaEfetiva = document.getElementById("valor01").value;
  const contadorVara = document.getElementById("valor02").value;
  const contadorClaro = document.getElementById("valor03").value;
  const provavel = contadorClaro;
  const possivel = contadorVara - provavel;
  alert(
    `Valor provavel: R$${provavel}\nValor possivel: R$${possivel}\nValor remoto: R$${perdaEfetiva - (provavel - (-possivel))}`
  );
}

/*
VALOR PROVAVEL == CONTADOR DA VARA
VALOR DO POSSIVEL == CONTADOR DA VARA - CONTADOR DA CLARO
VALOR REMOTO == VALOR DA PERDA EFETIVA - (PROVAVEL + POSSIVEL)
*/