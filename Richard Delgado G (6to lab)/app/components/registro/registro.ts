import { addUser } from "../../services/db.js";

export class Registro extends HTMLElement {
    
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

            addUser({email,password}).then(value => {
                if(value) {
                    const event: CustomEvent = new CustomEvent("Welcome",{
                        composed: true
                    })
                    console.log(this);

                    this.dispatchEvent(event);
                } else {
                    alert("info incorrecta");
                }
            })
        })
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="">
            
            <section>
                <h1>Este es el Registro<h1>
                
            </section>
            <my-formulario></my-formulario>
        `;
        }
    }
}

customElements.define("my-registro", Registro);
