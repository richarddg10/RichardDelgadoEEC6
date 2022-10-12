import dataPosts from "../../dataPosts.js";
export var Variableshistorias;
(function (Variableshistorias) {
    Variableshistorias["username"] = "username";
    Variableshistorias["profilephoto"] = "profilephoto";
})(Variableshistorias || (Variableshistorias = {}));
class Historias extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const variab = { username: null, profilephoto: null };
        return Object.keys(variab);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        const a = dataPosts.map((profile) => `
        <section>
        <img id="fotoPerfilHistorias" src="${profile.profilephoto}"/>
        <h1 id="nombreUsuarioHistorias">${profile.username}</h1>
        </section>
        `);
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/historias/stylesHistorias.css">
                <section class="fondoHistorias">
                    <img id="flechaHistorias" src="./assets/flechaHistorias.png"/>
                    ${a.join("")}
                </section>
        `;
        }
    }
}
customElements.define("my-historias", Historias);
export default Historias;
