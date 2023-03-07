module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define(
    "tasks",
    {
      Task_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      Task: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Assigned_Date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      Due_Date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      Description: {
        type: DataTypes.TEXT,
        allowNull: true,

      },
      Status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Assigned_to: {
        type: DataTypes.STRING,
        allowNull: true,

      }

    },
    {
      updatedAt: false,
    }
  );
  return Tasks;
};