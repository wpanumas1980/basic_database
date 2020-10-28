const router = require("express").Router();
const personController = require("../controllers/person")

router.get("/", personController.getAllpersons);
router.get("/:id", personController.getPersonById);
router.post("/", personController.createPerson);
router.put("/:id", personController.upDatePerson);
router.delete("/:id", personController.deletePerson);

    
module.exports = router;