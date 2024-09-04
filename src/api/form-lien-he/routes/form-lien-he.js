module.exports = {
    routes: [
      {
        method: "POST",
        path: "/form-lien-he",
        handler: "form-lien-he.submitForm",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
};