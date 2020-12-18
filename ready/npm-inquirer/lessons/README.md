# NPM

NPM is the package manager for JavaScript and the world’s largest software registry. Discover packages of reusable code — and assemble them in powerful new ways - https://www.npmjs.com/

To start NPM in your project:

1. 'cd' to your projects main directory
2. run 'npm init'
3. press enter all the ways through, and type in yes at the end
4. You will see a package.json is created. This lists all of the packages you've imported.

To install a package, run ```npm install <"package name"> --save```
<br>
Finally, make sure to add that package to your js file as follows:
<br>
	     - ```var <"Your choice of variable name"> = require('<"package name">')```
<br>
This will create a node_modules folder, which holds the packages imported

You will see that .gitignore file is added to all the directories.
This is stating that I dont want the node modules folder to be pushed to github.
I dont want the node_modules folder in github because the packages are very large and unnecessary in github

<strong>NPM Cheatsheet</strong>
<br>
```npm install``` or ```npm i``` - install all the node modules listed in your package.json file
<br>
```npm install express```- install the express module into your local directory
<br>
```npm install express --save``` - install the express module into your local directory and update your package.json file to show it as a dependency
<br>
```npm uninstall express``` - remove the express module
<br>
```npm install nodemon -g``` - install the nodemon module globally
<br>
```npm init``` - interactive tool to create a package.json file
<br>
```npm start``` - can run a command to start your project. for example, ```npm start``` can run the command ```node index.js```
