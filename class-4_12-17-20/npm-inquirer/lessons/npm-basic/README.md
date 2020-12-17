## NPM
- https://docs.npmjs.com/cli/v6/commands/npm
- NPM is the package manager for the Node JavaScript platform. It puts modules in place so that node can find them, and manages dependency conflicts intelligently. It is extremely configurable to support a wide variety of use cases. Most commonly, it is used to publish, discover, install, and develop node programs.
- In relation to front end javascript, think of NPM like how we import jQuery, Bootstrap, Firebase, etc. NPM is used to import external libraries and use them in your application.
- NPM is installed on your company along with the installation of node
- The NPM Registry is what holds all of these external libraries: https://www.npmjs.com/
- When you run 'npm install' on your project, you're pulling the external dependency from the NPM registry.

# package.json
- The package.json is the external dependency (package manager) for NPM
- In relation to front end, think of the package.json as a group of <script> tags of external libraries that you're importing into your project.
- The package.json is used to manage all of your projects NPM imports.

# NPM Commands
- To initiate NPM into your project, 'cd' to your project directory and run:
```
npm init
```
- To install an external library into your project, 'cd' to your project and run:
```
npm install <package> --save
```
i.e.
```
npm install inquirer --save
```
- To install all of the packages mentioned in the package.json, 'cd' to the directory with the package.json, and run:
```
npm install
```
