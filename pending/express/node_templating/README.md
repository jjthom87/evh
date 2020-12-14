# Connecting the Server to the Client/The Front End to the Back End

1. run your npm init, and install your dependencies - ```npm init``` && ```npm i express body-parser --save```
2. create your server folder, and inside that folder, make a controller folder, a models folders, and a server.js file. In your package.json, inside script, make sure to have start look like this:
* ```node <path/to/server/file>.js```. Look at the package.json in this directory for examples.
3. Server.js
* Set up your express server (listener) and import your routes into here
* Set up your connection to your static files (html, css, front end javascript)with ```app.use(express.static(</path/to/static/files/>));```. Have that path point to the directory where the static files are. Use the "setup_with_mvc" directory as an example.
* For heroku purposes, set up your port like this ```var PORT = process.env.PORT || 8000```
4. Routes.js
* store ```express.Router()``` in a variable, and put that variable in front of every route, i.e. router.get, router.post. That variable will be exported at the end of the file.
* Make a connection to your home route "/" with router.get('/') and connect it to your html as so: ```res.sendFile(path.join(__dirname, '/path/to/html/file'));```
5. Then create your client folder, and have the folders inside just like the way they are set up in the 'setup_with_mvc' directory. Instead of a public folder, you can do the usual, such as have an html folder, a css folder, a js folder, audio folder, etc...
6. Keep looking over the "setup_with_mvc" directory, keep making connections between the client and server side.
7. Run your application by typing ```npm start```. If you remember, you set up the 'start script' in your package.json, script, and start by telling it that you want it to start by running your server.js file. Take a look at the package.json as an example. Scripts, start, and the path to your server.js. This is always how you will start up your server when setting it up with the client side.
```
{
  "name": "first_client_server",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "nodemon ./server/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.18.2",
    "express": "^4.16.2"
  }
}
```


<strong>JSON.stringify explanation</strong>
https://stackoverflow.com/questions/17785592/difference-between-json-stringify-and-json-parse