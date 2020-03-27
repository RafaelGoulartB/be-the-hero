const routes = require('express').Router()
const { celebrate, Joi, errors, Segments } = require('celebrate');

const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

routes.route('/sessions')
  .post(SessionController.create)
// Ongs
routes.route('/ongs')
  .get(OngController.index)
  .post(celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    })
  }), OngController.create)

// Incidents
routes.route('/incidents')
  .get(celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }), IncidentsController.index)
  .post(celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number().required()
    })
  }), IncidentsController.create)

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}) ,IncidentsController.delete)

// Profile
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
  }).unknown(),
}), ProfileController.index)

module.exports = routes