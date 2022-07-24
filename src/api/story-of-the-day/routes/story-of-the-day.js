'use strict';

/**
 * story-of-the-day router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::story-of-the-day.story-of-the-day');
