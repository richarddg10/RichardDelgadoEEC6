export class Formulario extends HTMLElement {
    constructor() {
        super();
        this.email = "";
        this.password = "";
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a, _b, _c;
        this.render();
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("button");
        btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
            const event = new CustomEvent("formulario-fullfiled", {
                detail: { email: this.email, password: this.password },
                composed: true
            });
            this.dispatchEvent(event);
        });
        const emailInput = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('input[type="email"]');
        const passwordInput = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('input[type="password"]');
        emailInput === null || emailInput === void 0 ? void 0 : emailInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.email = value;
        });
        passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.password = value;
        });
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/formulario/stylesLogin.css">

            <article class="input">

            ${true ? `

                <section class="fondoInput">
            
                    <img id="logoIG" src="./assets/logoIG.png"/>

                    <input id="contraseña" type="password" placeholder="Contraseña">
                    <input id="email" type="text" placeholder="Correo electrónico">

                    <button id="iniciarSesión" type="submit">Iniciar sesión</button>

                </section>

                <section class="fondoInput2">

                    <h1 id="infoRegistro">¿No tienes una cuenta?</h1>
                    <a id="registrate" href="">Regístrate</a>
                
                </section>

                <img id="telefonoLogin" src="./assets/telefonoLogin.png"/>
                    
            ` : "es falso"}

            </article>
        `;
        }
    }
}
customElements.define("my-formulario", Formulario);
