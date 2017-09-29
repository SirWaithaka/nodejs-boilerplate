const Router = require('express').Router()

Router.get('/', (res, req) => {
   console.log('Index page requested')
});

module.exports = Router