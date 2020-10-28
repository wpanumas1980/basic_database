const db = require('../models');

exports.getAlltodos = async (req, res) => {
    //Get All todos
    const allTodos = await db.Todo.findAll();
    res.status(200).send(allTodos);
}

exports.getTodoById = async (req, res) => {
    //Get by ID
    const targetId = req.params.id;
    const targetTodo = await db.Todo.findOne({ where: { id: targetId } });
    res.status(200).send(targetTodo);
}

exports.createToto = async (req, res) => {
    //Create todo
    const { task } = req.body;
    const newTodo = await db.Todo.create({ task });
    res.status(201).send(newTodo);

}

exports.upDateTodo = async (req, res) => {
    //Update todo
    const targetId = req.params.id;
    const { task } = req.body;
    const targetTodo = await db.Todo.findOne({ where: { id: targetId } });

    if (targetTodo) {
        targetTodo.update({ task });
        res.status(200).send({ message: `Todo ID:${targetId} has been updated` });
    } else {
        res.status(404).send({ message: `Not found ID: ${targetId}` });
    }
}

exports.deleteTodo = async (req, res) => {
    //Delete todo
    const targetId = req.params.id;
    const targetTodo = await db.Todo.findOne({ where: { id: targetId } });

    if (targetTodo) {
        targetTodo.destroy();
        res.status(200).send({ message: `Todo ID: ${ targetId } has been deleted.` });
      } else {
    res.status(404).send({ message: `Not found ID: ${ targetId }` });
      }
}

