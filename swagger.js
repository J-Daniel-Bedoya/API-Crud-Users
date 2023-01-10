// importamos las dos depencias que acabamos de instalar
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0", 
    info: {
      title: "Contacto",
      version: "1.0.0",
      description: "API para el contacto desde el portafolio.",
    },
  },
  apis: [
    "./src/routes/contacto.routes.js",
    "./src/models/contacto.models.js",

  ],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {

  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

};

module.exports = swaggerDocs; 

