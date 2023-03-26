# OAuth Demo

A simple demo to demonstrate OAuth using GitHub OAuth

## Usage

Step 1: Install [Node.js](https://nodejs.org/) if you haven't already.

Step 2: Install the dependencies and devDependencies.

```sh
cd oauth-demo
npm i
```

Step 3: Register your OAuth app on GitHub using this [link](https://github.com/settings/applications/new)

Step 4: Add the Homepage URL as http://localhost:2400 and the Authorization callback URL as http://localhost:2400/github/callback

Step 5: Once you have obtained the const clientID and client secret key, search for the below variables in the index.js file and add them

```js
const clientID = "YOUR_CLIENT_ID_HERE"; // Add your client ID inside the quotes
const clientSecret = "YOUR_CLIENT_SECRET_HERE"; // Add your client secret inside the quotes
```

Step 6: Start the server

```sh
node index.js
```
