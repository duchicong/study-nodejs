const { getAllCode } = require('../service/allCode.service');

const getCodes = async (req, res) => {
  try {
    const data = await getAllCode(req.query?.type);
    res.status(200).json({ status: 'ok', data })
  } catch (err) {
    console.log(err)
    res.status(502).json({ status_code: 'error' })
  }
}

module.exports = {
  getCodes
}
