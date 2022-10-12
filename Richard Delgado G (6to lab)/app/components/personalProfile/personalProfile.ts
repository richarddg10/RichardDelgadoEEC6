export enum Variablesprofile {
    username = "username",
    nombrecompleto = "nombrecompleto",
    profilephoto = "profilephoto",
    opcioncambiar = "opcioncambiar"
}

class PersonalProfile extends HTMLElement {

    username?: string;
    profilephoto?: string;
    nombrecompleto?: string;
    opcioncambiar?: string;
    
    static get observedAttributes() {
        const variab: Record<Variablesprofile, null> = { username: null, nombrecompleto: null, profilephoto:null, opcioncambiar: null };
        return Object.keys(variab);
    }
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Variablesprofile, oldValue: string, newValue: string) {
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
            <link rel="stylesheet" href="./components/personalProfile/stylesProfile.css">
                <section class="fondoPersonalProfile">
                    <img id="fotoPersonalProfile" src="${this.profilephoto}"/>
                    <h1 id="nombreUsuarioPerfil">${this.username}</h1>
                    <p id="nombrecompleto">${this.nombrecompleto}</p>
                    <h2 id="opcionCambiar">${this.opcioncambiar}</h2>
                </section>
        `;
        }
    }
}

customElements.define("personal-profile", PersonalProfile);
export default PersonalProfile;