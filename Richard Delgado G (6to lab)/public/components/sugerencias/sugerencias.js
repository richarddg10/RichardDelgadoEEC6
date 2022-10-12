export var Variablessugerencias;
(function (Variablessugerencias) {
    Variablessugerencias["profilephoto"] = "profilephoto";
    Variablessugerencias["username"] = "username";
    Variablessugerencias["userinfo"] = "userinfo";
    Variablessugerencias["opcionseguir"] = "opcionseguir";
})(Variablessugerencias || (Variablessugerencias = {}));
class Sugerencias extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const variab = { username: null, userinfo: null, profilephoto: null, opcionseguir: null };
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
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/sugerencias/stylesSugerencias.css">
                <section class="fondoSugerencias">
                    <img id="fotoSugerencias" src="${this.profilephoto}"/>
                    <h1 id="nombreUsuarioSugerencias">${this.username}</h1>
                    <h2 id="userInfo">${this.userinfo}</h2>
                    <h3 id="opcionSeguir">${this.opcionseguir}</h3>
                </section>
            `;
        }
    }
}
customElements.define("my-sugerencias", Sugerencias);
export default Sugerencias;
