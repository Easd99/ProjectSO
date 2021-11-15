"use strict";
console.log('Environment:', process.env.NODE_ENV);
var connection = {
    type: "postgres",
    "host": process.env.TYPEORM_HOST,
    "port": parseInt(process.env.TYPEORM_PORT + ""),
    "username": process.env.TYPEORM_USERNAME,
    "password": process.env.TYPEORM_PASSWORD,
    "database": process.env.TYPEORM_DATABASE,
    logging: ["error"],
    synchronize: true,
    entities: [
        __dirname + "/../models/**",
    ],
    migrations: [
        __dirname + "/../migrations/**"
    ],
    cli: {
        entitiesDir: "src/models",
        migrationsDir: "src/migrations"
    },
    name: "default"
};
module.exports = connection;
