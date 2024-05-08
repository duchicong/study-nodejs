const connection = require("../config/database")

const getUsers = async() => {
    try {
        const [users] = await connection.query('SELECT * FROM Users')

        if (!users) throw new Error({ status: 500, error_code: 'GET_FAIL', error_message: 'Get users failed',  })
        return users;
    } catch (err) {
        return err
    }
}

module.exports = {
    getUsers
}
