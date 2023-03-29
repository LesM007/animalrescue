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

// get single animal by id
router.get("/animals/:id", async function (request, response, next) {
  try {
    let result = await Animal.findById(request.params.id);
    return response.status(200).json(result);
  } catch (error) {
    return next(error);
  }
});

//add an animal by id ??
router.post("/animals/:id", async function (request, response, next) {
  try {
    let animal = await Animal.create(request.body.id); //let animal = await new Animal(request.body)
    return response.status(201).json(animal); //animal.save() *er det samme*
  } catch (error) {
    return next(error);
  }
});

//update an animal by id
router.patch("/animals/:id", async function (request, response, next) {
  try {
    let updatedAnimal = await Animal.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );
    return response.status(200).json(updatedAnimal);
  } catch (error) {
    return next(error);
  }
});

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
