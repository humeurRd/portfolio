class Router {
    // Metodo inicial.
     
    constructor(paths) {
        this.paths = paths;
        this.initRouter();
    }

    // Permite inicializar el router
  
    initRouter() {
        const {
            location: {
                pathname = "/"
            }
        } = window;
        const URI = pathname === "/" ? "home" : pathname.replace("/", "");
        this.load(URI);
    }

     // inicializa la carga de las paginas.
    
    load(page = "home") {
        const { paths } = this;
        const { path, template } = paths[page] || paths.error;
        const $CONTAINER = document.querySelector("#content");
        $CONTAINER.innerHTML = template;
        window.history.pushState({}, "Funciona", path);
    }

}


