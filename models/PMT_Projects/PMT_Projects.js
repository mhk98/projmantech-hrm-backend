module.exports = (sequelize, DataTypes) => {
  const PMT_Projects = sequelize.define(
    "projects",
    {
      Project_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },

      Project_Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Start_Date: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      Due_Date: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      Priority: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      Status: {
        type: DataTypes.STRING,
        allowNull: true,
      },

    },
    {
      updatedAt: false,
    }
  );

  return PMT_Projects;
};
