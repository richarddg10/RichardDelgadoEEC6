interface DataShape {
    uuid: number;
    username: string;
    profilephoto: string;
    userinfo: string;
    opcionseguir: string;
  }

const dataSugerencias: DataShape[] = [
    {
        "uuid": 1,
        "username": "nacionaloficial",
        "profilephoto": "./assets/perfilNacional.png",
        "userinfo": "Bela__04 y 99 personas más siguiendo esta cuenta",
        "opcionseguir": "seguir"
    },
    {
        "uuid": 2,
        "username": "icesiposting",
        "profilephoto": "./assets/perfilICESIPosting.png",
        "userinfo": "Jcdorado2001 y 10 personas más siguiendo esta cuenta",
        "opcionseguir": "seguir"
    },
    {
        "uuid": 3,
        "username": "icesidmi",
        "profilephoto": "./assets/perfilDMI.png",
        "userinfo": "Nuevo en Instagram",
        "opcionseguir": "seguir"
    },
    {
        "uuid": 4,
        "username": "Universidad_icesi",
        "profilephoto": "./assets/perfilICESI.png",
        "userinfo": "Santgomez5 y 7 personas más siguiendo esta cuenta",
        "opcionseguir": "seguir"
    },
    {
        "uuid": 5,
        "username": "leomessi",
        "profilephoto": "./assets/perfilMessi.png",
        "userinfo": "Todo el mundo siguiendo esta cuenta",
        "opcionseguir": "seguir"
    }
];
export default dataSugerencias;