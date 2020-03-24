const connection = require('../db/connection')

module.exports = {
  async create(req, res) {
    const { id } = req.body

    const ong = await connection('ongs')
      .select('name')
      .where('id', id)
      .first()

    if(!ong) {
      return res.status(400).json({ error: 'No ONG found with this id' })
    }
    return res.json(ong)

  }
}