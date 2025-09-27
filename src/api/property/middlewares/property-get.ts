export default (config, { strapi }) => {
  return async (ctx, next) => {
    // Only override if no query already passed
    {
      ctx.query = {
        fields: [
          "title",
          "location",
          "description",
          "monthly_price",
          "deposit_price",
          "available",
          "floors",
          "size",
          "property_type",
          "bedrooms",
          "bathrooms",
          "heating",
          "parking_spots",
        ],
        populate: {
          property_images: {
            fields: ["url", "width", "height", "alternativeText"],
          },
          floor_plan: {
            fields: ["url", "width", "height", "alternativeText"],
          },
        },
      };
    }

    await next();
  };
};
