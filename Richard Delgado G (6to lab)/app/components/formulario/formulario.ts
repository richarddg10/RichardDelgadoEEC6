export class Formulario extends HTMLElement {
    
    email = "";
    password = "";
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();

        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click", () => {
            const event: CustomEvent<{ email: string, password: string }> = new CustomEvent("formulario-fullfiled", {
                detail: { email: this.email, password: this.password },
                composed: true
            });

            this.dispatchEvent(event);
        });

        const emailInput = this.shadowRoot?.querySelector('input[type="email"]');
        const passwordInput = this.shadowRoot?.querySelector('input[type="password"]');
        
        emailInput?.addEventListener("change", (evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.email = value;
        });

        passwordInput?.addEventListener("change", (evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.password = value;
        });
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/formulario/stylesLogin.css">

            <article class="input">

            ${true?`

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
                    
            `: "es falso"}

            </article>
        `;
        }
        
    }
}

customElements.define("my-formulario", Formulario);
