// index.js

//Loading Environment variables
require("dotenv").config();

// Import the axios library, to make HTTP requests
const axios = require("axios");

/*  EXPRESS */
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
	res.render("pages/index", { client_id: clientID });
});

const port = process.env.PORT || 2400;
app.listen(port, () => console.log("App listening on port " + port));

// This is the client ID and client secret that you obtained
// while registering on github app
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

// Declare the callback route
app.get("/github/callback", (req, res) => {
	axios({
		method: "post",
		url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${req?.query?.code}`,
		// Set the content type header, so that we get the response in JSON
		headers: {
			accept: "application/json",
		},
	}).then((response) => {
		const access_token = response.data.access_token;
		res.redirect("/success");

		app.get("/success", function (req, res) {
			axios({
				method: "get",
				url: `https://api.github.com/user`,
				headers: {
					Authorization: "token " + access_token,
				},
			}).then((response) => {
				res.render("pages/success", { userData: response.data });
			});
		});
	});
});
