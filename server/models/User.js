module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
        "user",
        {
            no: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            deleted: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        },
        {
            sequelize,
            tableName: "users",
            timestamps: true,
        }
    );
    user.associate = (models) => {
        user.hasMany(models.history, {
            foreignKey: "user_no",
            onDelete: "cascade",
            allowNull: "false",
        });
    };
    return user;
};
