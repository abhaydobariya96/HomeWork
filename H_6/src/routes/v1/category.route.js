const express = require("express")
const { userController } = require("../../controllers");
const { categoryController } = require("../../controllers");
const router = express.Router();

// create category
router.post(
  "/create-category",
  validate(categoryValidation.createCategory),
  categoryController.createCategory
);

module.exports = router;