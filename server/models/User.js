module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
        "user",
        {
            no: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncreament: true,
            },
            user_id: {
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
                default: false,
            },
        },
        {
            sequelize,
            tableName: "users",
            timestamps: true,
        }
    );
    return user;
};