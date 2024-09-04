'use strict';

/**
 * bug-log router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::bug-log.bug-log');
