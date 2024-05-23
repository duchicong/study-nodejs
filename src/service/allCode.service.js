const db = require("../model");

const getAllCode = async (type) => {
  const condition = type ? { where: { type } } : {};
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.AllCode.findAll({
        ...condition,
        attributes: ['key', 'type', 'value']
      });
      resolve(res);
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  getAllCode
}
