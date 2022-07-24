'use strict';

/**
 *  story-of-the-day controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::story-of-the-day.story-of-the-day');
