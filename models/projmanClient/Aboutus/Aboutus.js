
module.exports = (sequelize, DataTypes) => {
    const Aboutus = sequelize.define(
    "aboutus",
       {
          Content_Id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        Aboutus: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          
          Img: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          Mission: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          Vision: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
       },
           
        {
          updatedAt: false,
        }
  );
  
  return Aboutus;
  };