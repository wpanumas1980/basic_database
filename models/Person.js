module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("Person", {
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        username:{
            type:DataTypes.STRING,
            unique:true,
            allowNull:false, //มีค่าเท่ากับ notNull: true
        },
        password:{
            type:DataTypes.STRING,
            notNull: true //ใช้แบบนี้ก็ได้
        }
    }, {
        tableName: "persons",
        timestamps: false //ไม่เอา crateTime กับ updateTime ใน Database
    })

    model.associate = (models) => {
        model.hasMany(models.Todo,{foreignKey:"person_id"});
    }

    return model;
}
