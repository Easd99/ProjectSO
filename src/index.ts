const dotenv = require('dotenv-yaml');

dotenv.config();


import app from './app'


const server = app.listen(app.get('port'))


console.log('Server on port ', app.get('port'))

export {app, server}