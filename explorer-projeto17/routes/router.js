export class Router {
  routes = {};

  add(route, link) {
    this.routes[route] = link;
  }

  print() {
    const { pathname, port, href, host } = window.location;
    const route = this.routes[pathname] || this.routes[404];

    fetch(route)
      .then((data) => data.text())
      .then((html) => (document.getElementById("app").innerHTML = html));
  }

  init(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }
}
