export enum Variablessugerencias {
    profilephoto = "profilephoto",
    username = "username",
    userinfo = "userinfo",
    opcionseguir = "opcionseguir"
}

class Sugerencias extends HTMLElement {

    profilephoto?: string;
    username?: string;
    userinfo?: string;
    opcionseguir?: string;
    
    static get observedAttributes() {
        const variab: Record<Variablessugerencias, null> = { username: null, userinfo: null, profilephoto: null, opcionseguir: null };
        return Object.keys(variab);
    }
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Variablessugerencias, oldValue: string, newValue: string) {
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