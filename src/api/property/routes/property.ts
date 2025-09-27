/**
 * property router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter(
  "api::property.property",

  {
    config: {
      find: {
        middlewares: ["api::property.property-get"],
      },
      findOne: {
        middlewares: ["api::property.property-get"],
      },
    },
  }
);
