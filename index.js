const express = require('express');
const todoRoutes = require("./routes/todo");
const db = require("./models")
const app = express();
const port = 5555;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/todos",todoRoutes);

app.listen(port, () => {
    console.log(`server starting on port ${port}`);
});

db.sequelize.sync({force:false}).then(()=>{
    console.log("Database connected");
}).catch(err=>{
    console.log(err);
})