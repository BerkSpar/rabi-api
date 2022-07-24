'use strict';

/**
 * story-of-the-day service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::story-of-the-day.story-of-the-day');
