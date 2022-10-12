export var Variablesprofile;
(function (Variablesprofile) {
    Variablesprofile["username"] = "username";
    Variablesprofile["nombrecompleto"] = "nombrecompleto";
    Variablesprofile["profilephoto"] = "profilephoto";
    Variablesprofile["opcioncambiar"] = "opcioncambiar";
})(Variablesprofile || (Variablesprofile = {}));
class PersonalProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const variab = { username: null, nombrecompleto: null, profilephoto: null, opcioncambiar: null };
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
