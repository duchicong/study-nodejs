require('dotenv').config();

const env = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT || 8080,
    DB_PORT: process.env.DB_PORT,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    AVATAR_DIR: process.env.AVATAR_DIR
}

module.exports = env;
