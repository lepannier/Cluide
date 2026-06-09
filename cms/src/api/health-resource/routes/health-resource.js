'use strict'
const { createCoreRouter } = require('@strapi/strapi').factories
module.exports = createCoreRouter('api::health-resource.health-resource')
