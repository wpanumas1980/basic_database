module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("Person", {
        name: DataTypes.STRING,
        age: DataTypes.INTEGER
    }, {
        tableName: "persons",
        timestamps: false //ไม่เอา crateTime กับ updateTime ใน Database
    })

    model.associate = (models) => {
        model.hasMany(models.Todo,{foreignKey:"person_id"});
    }

    return model;
}
