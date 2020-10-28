const router = require('express').Router();
const todoController = require("../controllers/todo")

router.get("/",todoController.getAlltodos);
router.get("/:id", todoController.getTodoById);
router.post("/", todoController.createToto);
router.put("/:id",todoController.upDateTodo);
router.delete("/:id",todoController.deleteTodo);


module.exports = router;



