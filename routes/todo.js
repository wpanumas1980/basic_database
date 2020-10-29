const router = require('express').Router();
const todoController = require("../controllers/todo")
const passport = require("passport");

const auth = passport.authenticate("jwt", { session: false });

router.get("/", auth, todoController.getAlltodos);
router.get("/:id", auth, todoController.getTodoById);
router.post("/", auth, todoController.createToto);
router.put("/:id", auth, todoController.upDateTodo);
router.delete("/:id", auth, todoController.deleteTodo);


module.exports = router;



