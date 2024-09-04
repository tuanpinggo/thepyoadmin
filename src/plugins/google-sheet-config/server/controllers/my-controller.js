'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('google-sheet-config')
      .service('myService')
      .getWelcomeMessage();
  },
  async find(ctx){
    try {
      return await strapi.plugin("google-sheet-config").service("googleSheetConfig").find(ctx.query)
    } catch (error) {
      ctx.throw(500,error)
    }
  },
  async update(ctx){
    try {
      return await strapi.plugin("google-sheet-config").service("googleSheetConfig").update(ctx.request.body)
    } catch (error) {
      ctx.throw(500,error)
    }
  }
});
