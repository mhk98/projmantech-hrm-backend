module.exports = (sequelize, DataTypes) => {
    const OurClient  = sequelize.define(
    "ourclient",
       {
          Client_Id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          },
          
          Client_Name: {
            type: DataTypes.STRING,
            allowNull: true,
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
  return OurClient;
  };