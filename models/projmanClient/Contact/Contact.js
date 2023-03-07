
module.exports = (sequelize, DataTypes) => {
    const Contact= sequelize.define(
    "contact",
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
          
          Location: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          Phone: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          Email: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          
          Map: {
            type: DataTypes.STRING,
            allowNull: true,
          },
      },
           
        {
          updatedAt: false,
        }
  );
  
  return Contact;
  };