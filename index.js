const express = require('express');
const todoRoutes = require("./routes/todo");
const personRoutes = require("./routes/person");
const userRoutes = require("./routes/user");
const db = require("./models");
const app = express();
const port = 5555;

require("./config/passport"); //สำหรับ Pssport JS

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/todos",todoRoutes);
app.use("/persons",personRoutes);
app.use("/auth",userRoutes);

app.listen(port, () => {
    console.log(`server starting on port ${port}`);
});

db.sequelize.sync({force:false}).then(()=>{
    console.log(`Database connected...`);
}).catch(err=>{
    console.log(err);
})