module.exports = (sequelize, DataTypes) => {
    const WorkForce  = sequelize.define(
    "workforce",
       {
          WF_Id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          },
          
          Project_Id: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          
          Employee_Id: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          
        },
        {
          updatedAt: false,
        }
  );
  return WorkForce;
  };