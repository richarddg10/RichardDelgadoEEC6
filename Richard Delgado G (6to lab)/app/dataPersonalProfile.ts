interface DataShape {
    uuid: number;
    username: string;
    nombrecompleto: string;
    profilephoto: string;
    opcioncambiar: string;
  }

const dataPersonalProfile: DataShape[] = [
    {
        "uuid": 1,
        "username": "Richi_jeje",
        "nombrecompleto": "Richard Delgado Garzon",
        "profilephoto": "./assets/perfilRichard.png",
        "opcioncambiar": "Cambiar"
    }
];
export default dataPersonalProfile;