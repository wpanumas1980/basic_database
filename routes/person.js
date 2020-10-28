const { request } = require("express");
const { Model } = require("sequelize/types");

const router = require("express").Router();
const db = require("../models")
router.get("/", async (req, res) => {
    const allPersons = await db.Person.findAll();
    res.status(200).send(allPersons);
});
router.get("/:id", async (req, res) => {
    const targetId = request.params.id;
    const targetPerson = await db.Person.findOne({where :{id:targetId}}); 
    res.status(200).send(targetPerson);
});
router.post("/", async (req, res) => {
    const {name, age} =req.body;
    const newPerson = await db.Person.create({name,age}); //await db.Person.create({name:name,age:age}) 
    res.status(201).send(newPerson);
});
router.put("/", async (req, res) => {
    const {name, age} = req.body;
    const targetId = req.params.id;
    const targetPerson = await db.Person.findOne({where:{id:targetId}});
    if(targetPerson){
        await targetPerson.update({name,age}); //await ไม่มีผลสำหรับการ update ไม่จำเป็นต้องเขียนก็ได้
        res.status(200).send({message:"Updated"});
    }else{
        res.status(404).send();
    }
});
router.delete("/:id", async (req, res) => {
    const targetId = req.params.id;
    const targetPerson = await db.Person.findOne({where:{id:targetId}});
    if(targetPerson){
        await targetPerson.destroy();
        res.status(20ภ).send({message:"Updated"});
    }else{
        res.status(404).send();
    }
});
module.exports = router;