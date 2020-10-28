module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("Todo", {
        task: DataTypes.STRING(255)
    }, {
        tableName: "todos",
        timestamps:false //ไม่เอา crateTime กับ updateTime ใน Database
    })

    model.associate = (models) => {
        model.belongsTo(models.Person,{foreignKey:"person_id"});
    }

    return model;
}

