class UpMenu extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/upMenu/stylesMenu.css">
            <section class="barraMenu">
                <img id="logoIG" src="./assets/logoIG.png"/>
                
                <section class="barraBuscar">
                <p id="buscar">buscar</p>
                <img id="lupaMenu" src="./assets/lupa.png"/>
                </section>
                
                <img id="homeMenu" src="./assets/homeMenu.png"/>
                <img id="mensajesMenu" src="./assets/mensajesMenu.png"/>
                <img id="moreMenu" src="./assets/moreMenu.png"/>
                <img id="exploreMenu" src="./assets/exploreMenu.png"/>
                <img id="heartMenu" src="./assets/heartMenu.png"/>
                <img id="fotoPerfilMenu" src="./assets/perfilRichard.png"/>
            </section>
        `;
        }
        
    }
}

customElements.define("up-menu", UpMenu);
export default UpMenu;