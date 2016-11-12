# hapi-mvc-boilerplate
This is a Hapi MVC boilerplate with some of the prefered libraries already configured.

## Getting Started
```
git clone https://github.com/timhysniu/hapi-mvc-boilerplate.git
cd hapi-mvc-boilerplate
npm install
npm start
```

**npm start** is going to run the following in sequence. You may choose to run them individually if you like:
```
bower install
gulp
node index.js
```

## Packages
### Hapi
Application and services framework of choice. For details check http://hapijs.com/.
I have added additional libraries that are useful with hapi, eg. Joi for validation and Swagger.
### Handlebars
This is a templating engine of choice. Details can be found at http://handlebarsjs.com/
Currently only one layout is setup. Partial and helper paths are already set but no samples at the moment. Use instructions on how to create and use them.
### Bluebird
Faster and better memory usage than V8 promises.
### Swagger
I find this to be a must have if you are implementing APIs. Documentation if your APIs can be easily accessible by going to **/documentation** which you can also use as a testing UI.
### Config
Manage your environments by simply creating $env.json files in your config directory. Configs are loaded based on your NODE_ENV environment variable or will fallback to default.json config.
### Mongoose
A preferred library for modeling your application data and interacting with MongoDB database. If you're not planning to MongoDB you can remove it, no problem.
### Underscore
You may remove this if you dont need it. Its handy collection of helpers that I find useful

## Application Structure

### Static files
When you clone this project you will see that there is a **public** directory. This is where all the static files will sit which all accessible publicly. Do not store your front end code in there; **gulp** will use javascripts in **src/js** and compile sass files in **src/stylesheets**, minify and uglify them and store them in public **css** and **js** folders. When adding new css or js files you may need to update **gulpfile.js** to add these new libraries.

### Adding New Modules
A module consists of a controller and route file. To add a new one create {moduleName}Controller.js in **server/controllers** and {moduleName}Route.js in **server/routes**. Finally, add the module name in **config/default.json**. This doesn't look like a module in literal sense but this structure is flexible because I don't necessarily want to isolate modules from my models.

### Adding New Models
Create {model}.js in **server/models** and add it to models array in **config/default.json**

## Feedback

Fork it, use it and feel free to submit ideas on how to make this better!

