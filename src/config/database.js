require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : 'env'
})

module.exports = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'postgres',
    storage: './__tests__/database.sqlite',
    operadorAliases: false,
    define: {
        timestamps: true,
        underscore: true,
        underscoreAll: true
    }

}
