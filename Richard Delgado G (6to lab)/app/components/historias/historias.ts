import dataPosts from "../../dataPosts.js";

export enum Variableshistorias {
    username = "username",
    profilephoto = "profilephoto"
}

class Historias extends HTMLElement {

    username?: string;
    profilephoto?: string;
    
    static get observedAttributes() {
        const variab: Record<Variableshistorias, null> = { username: null, profilephoto:null };
        return Object.keys(variab);
    }
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Variableshistorias, oldValue: string, newValue: string) {
        switch (propName) {
        default:
            this[propName] = newValue;
            break;
        }
        this.render();
    }

    render() {
        const a = dataPosts.map((profile)=> `
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