import { queryUser } from "../../services/db.js";

export class Login extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();

        const form = this.shadowRoot?.querySelector("my-formulario");
        form.addEventListener("formulario-fullfiled", (evt: CustomEvent) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            queryUser({email,password}).then(value => {
                if(value) {
                    const event: CustomEvent = new CustomEvent("login-success", {
                        composed: true
                    });

                    console.log(this);
                    
                    this.dispatchEvent(event);

                } else {
                    alert("usuario o contraseña incorrecta");
                }
            });
        });
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="">
            
            <section>
                <my-formulario></my-formulario>
            </section>
            
        `;
        }
    }
}

customElements.define("my-login", Login);
