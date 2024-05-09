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

const getUserById = async (id) => {
    try {
        const [data] = await connection.query(`SELECT * FROM Users WHERE id = ?`, [id])
        const user = data && data.length ? data[0] : null;

        return user;
    } catch (err) {
        return err
    }
}

const updateUserById = async (id, data) => {
    const { name, email, city } = data;
    try {
        const data = await connection.query(
            `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`,
            [email, name, city, id],
        )
        return data;
    } catch (err) {
        return err
    }
}

const deleteUserById = async (id) => {
    try {
        const data = await connection.query(
            `DELETE FROM Users WHERE id = ?`,
            [id],
        )
        return data;
    } catch (err) {
        return err
    }
}

module.exports = {
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById
}
