'use strict';

module.exports = ({ strapi }) => ({
  async index(ctx){
    try {
      return await strapi.entityService.findOne('api::config.config', 1)
    } catch (error) {
      ctx.throw(500,error)
    }
  },
  async update(ctx){
    try {
      await strapi.entityService.update('api::config.config', 1, {
        data: ctx.request.body
      })

      return ctx.request.body
      
    } catch (error) {
      ctx.throw(500,error)
    }
  }
});
