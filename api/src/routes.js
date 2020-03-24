const routes = require('express').Router()
const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

routes.route('/sessions')
  .post(SessionController.create)

routes.route('/ongs')
  .get(OngController.index)
  .post(OngController.create)

routes.route('/incidents')
  .get(IncidentsController.index)
  .post(IncidentsController.create)
routes.route('/incidents/:id')
  .delete(IncidentsController.delete)

routes.get('/profile', ProfileController.index)

module.exports = routes