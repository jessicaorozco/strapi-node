// const path = require('path');

// module.exports = ({ env }) => ({
//   "defaultConnection": "default",
//   "connections": {
//     "default": {
//       "connector": "strapi-hook-mongoose",
//       "settings": {
//         "client": "mongo",
//         "uri": "mongodb+srv://jess:Marta22916248@cluster0.de85e.mongodb.net/dbstrapi?retryWrites=true&w=majority",
//         "host": "cluster0.de85e.mongodb.net",
//         "srv": false,
//         "port": "27017",
//         "database": "dbstorestrapi",
//         "username": "jess",
//         "password": "Marta22916248"
//       },
//       "options": {
//         "authenticationDatabase": "",
//         "ssl": false
//       }
//     }
//   }
// });

const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mongo',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_URL', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
