module.exports = (sequelize, DataTypes) => {
    const Protfolio = sequelize.define(
    "protfolio",
       {
          Content_Id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
          
          Title: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          Title_details: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
      },
           
        {
          updatedAt: false,
        }
  );
  
  return Protfolio;
  };