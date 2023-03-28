const express = require("express");
const router = express.Router();
const Animal = require("../models/animals.models");

router.get("/animals", async function (request, response, next) {
  try {
    let result = await Animal.find();
    return response.status(200).json(result);
  } catch (error) {
    return next(error);
  }
});
//add animal by id

//delete an animal by id
router.delete("/animals/:id", auth, async function (request, response, next) {
  try {
    await Animal.findByIdAndDelete(request.params.id);

    return response.status(204).end();
  } catch (error) {
    return next(error);
  }
});
module.exports = router;
