import dataPosts from "../../dataPosts.js";
import dataPersonalProfile from "../../dataPersonalProfile.js";
import dataSugerencias from "../../dataSugerencias.js";
export class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const comptsProfile = dataPersonalProfile.map(({ username, profilephoto, nombrecompleto, opcioncambiar }) => `
        <personal-profile
        username="${username}"
        profilephoto="${profilephoto}"
        nombrecompleto="${nombrecompleto}"
        opcioncambiar="${opcioncambiar}"
        ></personal-profile>
        `);
        const comptsSugerencias = dataSugerencias.map(({ username, profilephoto, userinfo, opcionseguir }) => `
        <my-sugerencias
        username="${username}"
        profilephoto="${profilephoto}"
        userinfo="${userinfo}"
        opcionseguir="${opcionseguir}"
        ></my-sugerencias>
        `);
        const comptsPosts = dataPosts.map(({ username, profilephoto, ubicacion, publicacion, usernamecomentario, micomentario1, micomentario2, fechapublicacion }) => `
        <my-post
        username="${username}"
        profilephoto="${profilephoto}"
        ubicacion="${ubicacion}"
        publicacion="${publicacion}"
        usernamecomentario="${usernamecomentario}"
        micomentario1="${micomentario1}"
        micomentario2="${micomentario2}"
        fechapublicacion="${fechapublicacion}"
        ></my-post>
        `);
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        
        <link rel="stylesheet" href="./components/sugerencias/stylesSugerencias.css">
            <section class="fondoTitulosSugerencias">
                <h1 id="tituloSugerencias">Sugerencias para ti</h1>
                <h1 id="verTodo">Ver Todo</h1>
            </section>

        <section>
        <up-menu></up-menu>
        <my-historias></my-historias>

        ${comptsProfile.join("")}
        ${comptsSugerencias.join("")}
        ${comptsPosts.join("")}
        </section>
        `;
    }
}
customElements.define("app-home", Home);
