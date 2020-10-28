const db = require('../models');

const getAllpersons = async (req, res) => {
    const allPersons = await db.Person.findAll({ include: [db.Todo] });
    res.status(200).send(allPersons);
}

const getPersonById = async (req, res) => {
    //Get by ID
    const targetId = req.params.id;
    const targetPerson = await db.Person.findOne({ where: { id: targetId }, include: [db.Todo] });
    res.status(200).send(targetPerson);
}

const createPerson = async (req, res) => {
    const { name, age, todoss } = req.body;
    const newPerson = await db.Person.create({
        name, 
        age,
        Todos:todoss 
    },{
        include:[db.Todo]
    }); //await db.Person.create({name:name,age:age}) 
    res.status(201).send(newPerson);
}
const upDatePerson = async (req, res) => {
    const { name, age } = req.body;
    const targetId = req.params.id;
    const targetPerson = await db.Person.findOne({ where: { id: targetId } });
    if (targetPerson) {
        await targetPerson.update({ name, age }); //await ไม่มีผลสำหรับการ update ไม่จำเป็นต้องเขียนก็ได้
        res.status(200).send({ message: "Updated" });
    } else {
        res.status(404).send();
    }
}

const deletePerson = async (req, res) => {
    const targetId = req.params.id;
    const targetPerson = await db.Person.findOne({ where: { id: targetId } });
    if (targetPerson) {
        await targetPerson.destroy();
        res.status(200).send({ message: "Updated" });
    } else {
        res.status(404).send();
    }
}

module.exports = {
    getAllpersons,
    getPersonById,
    createPerson,
    upDatePerson,
    deletePerson
}