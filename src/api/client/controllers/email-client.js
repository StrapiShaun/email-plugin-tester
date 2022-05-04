'use strict';

/**
 * A set of functions called "actions" for `email-client`
 */

 module.exports = {
  async afterCreate(event) {
      const { result } = event;

      try{
          await strapi.plugins['email'].services.email.send({
              to: 'shaun.brown@strapi.io',
              from: 'shaun.brown@strapi.io',
              subject: 'test',
              text: '${welcomeMessage}'
          })
      } catch(err) {
          console.log(err);
      }
  }
}
