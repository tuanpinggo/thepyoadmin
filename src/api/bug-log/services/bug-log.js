'use strict';

/**
 * bug-log service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bug-log.bug-log');
