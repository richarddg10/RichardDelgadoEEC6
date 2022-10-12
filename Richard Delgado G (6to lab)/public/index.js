import "./components/index.js";
var Screens;
(function (Screens) {
    Screens[Screens["login"] = 0] = "login";
    Screens[Screens["registro"] = 1] = "registro";
    Screens[Screens["home"] = 2] = "home";
})(Screens || (Screens = {}));
class MyContainer extends HTMLElement {
    constructor() {
        super();
        this.screen = Screens.login;
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a, _b;
        this.render();
        const login = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("my-login");
        login === null || login === void 0 ? void 0 : login.addEventListener("login-success", () => {
            this.screen = Screens.home;
            this.render();
        });
        const registro = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("my-registro");
        registro === null || registro === void 0 ? void 0 : registro.addEventListener("Welcome", () => {
            var _a;
            this.screen = Screens.login;
            this.render();
            const login = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("my-login");
            login === null || login === void 0 ? void 0 : login.addEventListener("login-success", () => {
                this.screen = Screens.home;
                this.render();
            });
        });
    }
    render() {
        if (this.shadowRoot) {
            switch (this.screen) {
                case Screens.home:
                    this.shadowRoot.innerHTML = "<app-home></app-home>";
                    break;
                case Screens.login:
                    this.shadowRoot.innerHTML = "<my-login></my-login>";
                    break;
                case Screens.registro:
                    this.shadowRoot.innerHTML = "<my-registro></my-registro>";
                    break;
                default:
                    break;
            }
        }
    }
}
customElements.define("my-container", MyContainer);
