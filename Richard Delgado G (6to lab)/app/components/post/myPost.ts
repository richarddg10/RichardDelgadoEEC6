export enum Variablespost {
    username = "username",
    profilephoto = "profilephoto",
    ubicacion = "ubicacion",
    publicacion = "publicacion",
    usernamecomentario = "usernamecomentario",
    micomentario1 = "micomentario1",
    micomentario2 = "micomentario2",
    fechapublicacion = "fechapublicacion"
}

class MyPost extends HTMLElement {

    username?: string;
    profilephoto?: string;
    ubicacion?: string;
    publicacion?: string;
    usernamecomentario?: string;
    micomentario1?: string;
    micomentario2?: string;
    fechapublicacion?: string;
    
    static get observedAttributes() {
        const variab: Record<Variablespost, null> = { username: null, profilephoto: null, ubicacion: null, publicacion: null, usernamecomentario: null, micomentario1: null, micomentario2: null, fechapublicacion: null };
        return Object.keys(variab);
    }
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Variablespost, oldValue: string, newValue: string) {
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
            <link rel="stylesheet" href="./components/post/stylesMyPosts.css">
            <section class="fondoGeneral">
                <section class="fondoArriba">
                    <img id="fotoPerfilPosts" src="${this.profilephoto}"/>
                    <h1 id="nombreUsuario">${this.username}</h1>
                    <h2 id="ubicacion">${this.ubicacion}</h2>
                    <img id="punticosOpciones" src="./assets/scroll.png"/>
                </section>
            
                <img id="publicacion" src="${this.publicacion}"/>
                <section class="fondoAbajo">
                    <section class="contenedorIconos">
                        <img id="heart" src="./assets/heart.png"/>
                        <img id="comentario" src="./assets/comment.png"/>
                        <img id="share" src="./assets/share.png"/>
                    </section>
                    <img id="save" src="./assets/save.png"/>
                    <h1 id="nombreUsuarioComentario">${this.usernamecomentario}</h1>
                    <p id="miComentario1">${this.micomentario1}</p>
                    <p id="miComentario2">${this.micomentario2}</p>
                    <h2 id="fechaPublicacion">${this.fechapublicacion}</h2>
                </section>
            </section>
        `;
        }
    }
}

customElements.define("my-post", MyPost);
export default MyPost;