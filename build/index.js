"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        // use body parser middleware
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        // cookie session middleware
        // in order for request.session property to exist
        this.app.use((0, cookie_session_1.default)({ keys: ["some-key"] }));
        // route middleware
        this.app.use(loginRoutes_1.router);
    }
    serve(port) {
        this.app.listen(port, () => {
            console.log(`Listening on port: ${port}`);
        });
    }
}
const server = new Server();
server.serve(5050);
