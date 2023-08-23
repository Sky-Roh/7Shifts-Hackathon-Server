const express = require("express");
const router = express.Router();
const controllerName = require("../controllers/name-controller");
const {  nameValidation } = require('../middleware/nameValidation.js');

router
  .route("/")
  .get(controllerName.getAll)
  .post(nameValidation, controllerName.add)

router
  .route("/:id")
  .get(controllerName.getSingle)
  .put(naemValidation, controllerName.edit)
  .delete(controllerName.delete)

module.exports = router;