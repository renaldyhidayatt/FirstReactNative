const router = require("express").Router();

const {
  getAll,
  Adding,
  updateData,
  deleteData,
} = require("../controllers/employee.controllers");

router.get("/", getAll);
router.post("/add", Adding);
router.put("/update", updateData);
router.delete("/delete", deleteData);

module.exports = router;
