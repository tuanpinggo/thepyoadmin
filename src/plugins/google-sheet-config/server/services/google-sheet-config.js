'use strict';

module.exports = ({ strapi }) => ({
  async find(query) {
    return await strapi.entityService.findOne("plugin::google-sheet-config.googlesheet", query);
  },
  async update(data) {
    return await strapi.entityService.update("plugin::google-sheet-config.googlesheet",1,data)
  }
});
