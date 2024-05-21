const bcrypt = require('bcryptjs');
const db = require('../model/index');

const salt = bcrypt.genSaltSync(10);


const hashPassword = async (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hash = await bcrypt.hashSync(password, salt);
      resolve(hash);
    } catch (err) {
      reject(e)
    }
  })
}

const createNewUser = async (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPwd = await hashPassword(user.password);
      await db.User.create({
        email: user.email,
        password: hashPwd,
        fistName: user.fistName,
        lastName: user.lastName,
        address: user?.address,
        gender: !!user?.gender,
        phoneNumber: user?.phoneNumber,
        image: user?.image,
        roleId: user?.roleId,
      })

      resolve({ status: 'ok' });
    } catch (err) {
      reject(e)
    }
  })
}

const getAllUsers = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.User.findAll();
      resolve(data);
    } catch (err) {
      reject(err);
    }
  })
}

const getUserById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id || !Number(id)) {
        // throw Error({ error_code: 'not_found', message: 'Not Found' })
        throw new Error('not_found')
      }
      const data = await db.User.findOne({ where: { id } });
      if (!data) {
        // throw Error({ error_code: 'not_found', message: 'Not Found' })
        throw new Error('not_found')
      } else
      resolve(data);
    } catch (err) {
      console.log('modql ', err)
      reject(err);
    }
  })
}

const updateUserData = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { id: data.id } });

      if (user) {
        user.email = data?.email
        user.fistName = data?.fistName
        user.lastName = data?.lastName
        user.address = data?.address
        user.gender = data?.gender
        user.phoneNumber = data?.phoneNumber
        user.image = data?.image
        user.roleId = data?.roleId
        user.positionId = data?.positionId
        await user.save();
        resolve(user);
      } else {
        throw new Error('User not found')
      }
    } catch (err) {
      reject(err);
    }
  })
}

const deleteUserById = async (id, userType) => {
  const role = userType ?? 'R3';
  return new Promise(async (resolve, reject) => {
    try {
      const existUser = await getUserById(id)
      if (existUser) {
        if (existUser.roleId === role) {
          existUser.destroy();
          return resolve();
        } else {
          throw new Error('Not permission')
        }
      } else throw new Error('User not found')
    } catch (err) {
      reject(err)
    }
  });
}

const existUserEmail = async (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const existEmail = await db.User.findOne({ 
        attributes: ['email', 'roleId', 'password'],
        where: { email },
        raw: true
      })
      if (existEmail) {
        resolve(existEmail)
      } else resolve(undefined)
    } catch (err) {
      reject(err)
    }
  });
}

const isValidPassword = (pwdLogin, pwdDB) => {
  return bcrypt.compareSync(pwdLogin, pwdDB);
}

const handleUserLogin = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    let userData = {};
    try {
      const existUser = await existUserEmail(email);
      if (existUser) {
        console.log('existUser ', existUser)
        const isValid = isValidPassword(password, existUser.password)
        if (isValid) {
          userData.status = 'ok';
          delete existUser?.password;

          userData.data = existUser;
        } else {
          userData.error_code = 400
          userData.message = 'Email or password incorrect!'
        }
      } else {
        userData.error_code = 400
        userData.message = 'Email or password incorrect!'
      }
      resolve({ ...userData })
    } catch (err) {
      reject(err)
    }
  });
}

module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
  updateUserData,
  deleteUserById,
  existUserEmail,
  handleUserLogin
}
