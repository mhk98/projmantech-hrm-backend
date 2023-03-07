module.exports = (sequelize, DataTypes) => {
    const Bestfeature = sequelize.define(
    "bestfeature",
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
  
  return Bestfeature;
  };