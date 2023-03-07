module.exports = (sequelize, DataTypes) => {
    const Slide = sequelize.define(
    "slide",
       {
          Content_Id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
          
          Img: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          Content: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
        },
           
        {
          updatedAt: false,
        }
  );
  
  return Slide;
  };