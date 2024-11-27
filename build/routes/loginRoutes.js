"use strict";
// NOTE: When a file starts with a capital letter in typescript,
// it means the the file will be exported
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (req, res) => {
    // If the user is logged in
    // display:, in order to do that, we need to get client's cookie
    if (req.session && req.session.loggedIn) {
        // return back to login page
        res.send(`
    <div>
        <h2>You are logged in!</h2>
        <a href="/login">Logout</a>
    </div>
`);
    }
    else {
        // otherwise display a message that a user has to login
        res.send(`<div>
        <h2>You are not logged in!</h2>
        <a href="/login">Login</a>
      </div>
    `);
    }
});
router.get("/login", (req, res) => {
    res.send(`
    <form method="POST">
        <div>
            <label>Email: </label>
            <input name="email" />
        </div>
        <div>
            <label>Password: </label>
            <input name="password" type="password"/>
        </div>
        <button>Submit</button>
    </form>
`);
});
router.post("/login", (req, res) => {
    // properties would be the names that we provided on those two inputs
    // email and password
    // body property is undefined if bodyParser middleware is removed
    const { email, password } = req.body;
    console.log(`Email: ${email}, password: ${password}`);
    // We have to validate username and password first,
    // then make sure that such user doesn't already exist
    if (email &&
        password &&
        email === "admin@gmail.com" &&
        password === "password") {
        // mark this person as logged in
        req.session = { loggedIn: true };
        res.redirect("/");
        // redirect to the root route
        // res.json({
        //   email: email.toUpperCase(),
        //   password: password.toUpperCase(),
        // });
    }
    else {
        res.status(422).send("Email or password is not valid");
    }
});
