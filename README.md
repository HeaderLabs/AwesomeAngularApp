
### Node.js and Tools

- Get [Node.js][node-download].
- Install the tool dependencies (`npm install`).


## Workings of the application

- How to add new page screen.

### Step 1

- Add a new html file inside screens(app/screens) folder.

### Step 2

- After adding html file, update variable 'screens' with newly added file's path in app.js(app/js/app.js).
```
var screens = [
            {
                url: 'screens/_1.html'
            },
            {
                url: 'screens/_2.html'
            },
            {
                url: 'screens/_3.html'
            }
        ]
```
- You can check it by locally deploying your project on browser.

### Installing dependencies

The application relies upon various node.js tools, such as Bower, Karma and Protractor.  You can
install these by running:

```
npm install
```

This will also run bower, which will download the angular files needed for the current step of the
tutorial.

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like.


### Running the app during development

- Run `npm start`
- navigate your browser to `http://localhost:8000/app/index.html` to see the app running in your browser.


Requires a webserver that serves the application. See Running the app during development, above.

- Serve the application: run `npm start`.

## Application Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      index.html        --> app layout file (the main html template file of the app)
      js/               --> javascript files
        app.js          --> the main application module
        controllers.js  --> application controllers
        services.js     --> custom angular services
        animations.js   --> hooks for running JQuery animations with ngAnimate
      screens/         --> angular views
        _1.html
        _2.html
        _3.html
      bower_components  --> 3rd party js libraries, including angular and jquery
