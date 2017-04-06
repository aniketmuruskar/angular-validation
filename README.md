# Simple Angular-Validation using custom directives


## Overview

This repository demonstrates the simple form validation  in web-application using
AngularJS.


## Prerequisites

### Git

- A good place to learn about setting up git is [here][git-setup].
- You can find documentation and download git [here][git-home].

### Node.js and Tools

- Get [Node.js][node-download].
- Install the tool dependencies: `npm install`

### Bower
- Install [Bower][bower] globally.

### Running the Application during Development

- Run `npm start`.
- Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application 
- running.


## Workings of the Application

- The app is having only single page form i.e `index.html` in app folder
- This app use simple local static web server i.e Http-Server
- There is no dynamic backend (no application server) for this app. Instead we use the
  static JSON files for validation which require server validation i.e unique email address.
- This app using [ngMessages][angular-messages] modules for displaying messages within templates.


## Application Directory Layout

```
app/                     --> all the source code of the app
  bower_components/...   --> 3rd party JS/CSS libraries, including Angular and Angular Messages
  angular-validator/
  	users.json  		 --> already register email address
  	validator.module.js  --> the main validator module, here we can extra validation
  app.module.js          --> the main app module
  index.html             --> app layout file (the main HTML template file of the app)

node_modules/...         --> development tools (fetched using `npm`)

bower.json               --> Bower specific metadata, including client-side dependencies
package.json             --> Node.js specific metadata, including development tools dependencies
.bowerrc				 --> This file specify directory where to place install front end libraries using bower, 
							 by default within `app/bower_components/`



## Contact

For more information on AngularJS, please check out https://angularjs.org/.

[bower]: http://bower.io/
[git-home]: https://git-scm.com
[git-setup]: https://help.github.com/articles/set-up-git/
[node-download]: https://nodejs.org/en/download/package-manager/
[angular-messages]: https://docs.angularjs.org/api/ngMessages