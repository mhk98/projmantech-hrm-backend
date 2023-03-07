module.exports = (sequelize, DataTypes) => {
    const Designation  = sequelize.define(
    "designation",
       {
          Designation_Id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          },
          
          Designation_Name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          Department_Name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          
        },
        {
          updatedAt: false,
        }
  );
  return Designation;
  };