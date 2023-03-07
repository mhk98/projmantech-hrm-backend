module.exports = (sequelize, DataTypes) => {
  const Personal_Information = sequelize.define(
    "personal_informations",
    {

      Employee_Id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },

      Passport_No: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Nationality: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      Marital_Status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Employment_of_Spouse: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Tel: {
        type: DataTypes.STRING,
        allowNull: true,
        Unique: true,
      },

      Religion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      No_of_Children: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Passport_Expiry_Date: {
        type: DataTypes.DATE,
        allowNull: true,
      },

    },
    {
      updatedAt: false,
    }
  );

  return Personal_Information;
};