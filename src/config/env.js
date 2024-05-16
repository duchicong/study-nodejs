require('dotenv').config();

const env = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 8080,
    DB_PORT: process.env.DB_PORT || '3306',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_NAME: process.env.DB_NAME || 'database',
    AVATAR_DIR: process.env.AVATAR_DIR,
    DIALECT: process.env.DIALECT || 'mysql'
}

module.exports = env;
