interface DataShape {
    uuid: number;
    username: string;
    profilephoto: string;
    ubicacion: string;
    publicacion: string;
    usernamecomentario: string;
    micomentario1: string;
    micomentario2: string;
    fechapublicacion: string;
  }

const dataPosts: DataShape[] = [
    {
        "uuid": 1,
        "username": "Richi_jeje",
        "profilephoto": "./assets/perfilRichard.png",
        "ubicacion": "Universidad-ICESI",
        "publicacion": "./assets/HTML-JS-NODE-CSS.png",
        "usernamecomentario": "Richi-jeje:",
        "micomentario1": "Hola profe esta es mi primer publicación,",
        "micomentario2": "aprendí a programar jajajaja.",
        "fechapublicacion": "Hace 10mins"
    },
    {
        "uuid": 2,
        "username": "Bela__04",
        "profilephoto": "./assets/perfilIsa.png",
        "ubicacion": "Cali,Valle-del-Cauca",
        "publicacion": "./assets/publicacionCSS.png",
        "usernamecomentario": "Bela__04:",
        "micomentario1": "Apenas un día programando y ya soy una crack,",
        "micomentario2": "mejor dicho proxima monitora de programación.",
        "fechapublicacion": "Hace 35mins"
    },
    {
        "uuid": 3,
        "username": "Santgomez5",
        "profilephoto": "./assets/perfilSantiago.png",
        "ubicacion": "Colombia",
        "publicacion": "./assets/publicacionHTML.png",
        "usernamecomentario": "Santgomez5:",
        "micomentario1": "Que chimba programación, estoy con ganas de",
        "micomentario2": "hacer ya mismo ese parcial jeje.",
        "fechapublicacion": "Hace 1 hora"
    },
    {
        "uuid": 4,
        "username": "Jcdorado2001",
        "profilephoto": "./assets/perfilJuanca.png",
        "ubicacion": "EE.UU",
        "publicacion": "./assets/publicacionJS.jpeg",
        "usernamecomentario": "Jcdorado2001:",
        "micomentario1": "Nada de UX solo pura programación, así es que vale",
        "micomentario2": "la pena venir a la U un sábado a las 7am a un parcial.",
        "fechapublicacion": "Hace 57mins"
    },
    {
        "uuid": 5,
        "username": "Que_chimba:)",
        "profilephoto": "./assets/perfilQueChimba.png",
        "ubicacion": "Por-ahi:)",
        "publicacion": "./assets/publicacionNode.webp",
        "usernamecomentario": "Que_chimba:):",
        "micomentario1": "Ya no se que más poner de comentarios profe jajaja",
        "micomentario2": "eso fue todo profe.",
        "fechapublicacion": "Hace 12 horas"
    }
];
export default dataPosts;