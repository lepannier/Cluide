'use strict'
const { createCoreService } = require('@strapi/strapi').factories
module.exports = createCoreService('api::health-resource.health-resource')
