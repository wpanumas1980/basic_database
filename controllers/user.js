const db = require('../models');
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    const { username, password, name, age } = req.body;
    const targetUser = await db.Person.findOne({ where: { username } });//Return เป็น object กลับมา
    if(targetUser){
        res.status(400).send({message:"Username already taker."});
    }else{
        const salt = bcryptjs.genSaltSync(12);//มีแบบ sync กับไม่ sync
        const hashedPassword = bcryptjs.hashSync(password,salt);

        await db.Person.create({
            username,
            name,
            age,
            password:hashedPassword
        });
        res.status(201).send({message:"User created"});
    }
   
}
const login = async (req, res) =>{
    const{username,password} = req.body;
    const targetUser =  await db.Person.findOne({where:{username}});
    if (!targetUser) {
        res.status(400).send({message:"User not true"});
    }else{
        const isCorrect = bcryptjs.compareSync(password,targetUser.password);
        if (isCorrect) {
            const payload ={
                id:targetUser.id,
                name:targetUser.name
            };
            const token = jwt.sign(payload,"panumassaewong",{expiresIn:3600});
            res.status(200).send({token})
        }else{
            res.status(400).send({message:"Password incorect..."})
        }
    }
}

module.exports = {register,login}