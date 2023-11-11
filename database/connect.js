const readYamlFile = require('read-yaml-file')
const mysql = require('mysql');

readYamlFile('./config/database.dev.yaml').then(data => {

    const connect = mysql.createConnection({
        host: data.host,
        database: data.database,
        port: data.port,
        user: data.user,
        password: data.password,
    });

    module.exports = connect;
})
