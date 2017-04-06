# Simple Angular-Validation using custom directives


## Overview

This repository demonstrates the simple form validation in web-application using AngularJS.


## Getting Started

To get you started with angularjs validation you can simply clone the `angular-validation` repository and install the dependencies.

## Prerequisites

### Git

* You need git to clone the `angular-validation` repository. You can get git from  [here][git-home].
* You can get git & documentation from [here][git-home].

#### Clone `angular-validation`

```
git clone https://github.com/aniketmuruskar/angular-validation.git
cd angular-validation
```

### Node.js and Tools

* Get [Node.js][node-download].
* Install the tool dependencies: `npm install`

### Bower

* Install [Bower][bower] globally by using `npm install -g bower`
* Now install client-side dependencies using `bower intall`


*Note that the `bower_components` folder would normally be installed in the root folder but
`angular-validation` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Running the Application during Development

* Run `npm start`.
* Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application running.


## Workings of the Application

* The app is having only single page form i.e `index.html` in app folder
* This app use simple local static web server i.e Http-Server serve from app root directory
* There is no dynamic backend (no application server) for this app. Instead we use the
  static JSON files for validation which require server validation i.e unique email address.
* This app using [ngMessages][angular-messages] modules for displaying messages within templates.


## Application Directory Layout

```
app/			--> all the source code of the app
  bower_components/...	--> 3rd party JS/CSS libraries, including Angular and Angular Messages
  angular-validator/
  	validator.module.js 	--> the main validator module, here we can extra validation
  app.module.js 	--> the main app module
  index.html 	--> app layout file (the main HTML template file of the app)
  users.json 	--> already register email address for demonstration purpose

node_modules/...	--> development tools (fetched using `npm`)

bower.json 	--> Bower specific metadata, including client-side dependencies
package.json 	--> Node.js specific metadata, including development tools dependencies
.bowerrc 	--> This file specify directory where to place install front end libraries 
		using bower, by default within `app/bower_components/`
```


## Contact

For more information on AngularJS please check out [angularjs.org][angularjs].

[bower]: http://bower.io/
[git-home]: https://git-scm.com
[git-setup]: https://help.github.com/articles/set-up-git/
[node-download]: https://nodejs.org/en/download/package-manager/
[angular-messages]: https://docs.angularjs.org/api/ngMessages
[angularjs]: https://angularjs.org/
