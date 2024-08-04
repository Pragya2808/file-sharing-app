const express = require("express");
const router = express.Router();
const filesController = require("../app/controllers/filesControllers");
const { verify } = require('../middleware/authentication');

// [GET] /files/
router.get('/api/all', filesController.showAll);
router.post("/delete", filesController.delete);
router.get("/:slug", filesController.showDetail);
router.get("/", filesController.show);

module.exports = router;
