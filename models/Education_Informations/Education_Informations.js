module.exports = (sequelize, DataTypes) => {
  const Education_Informations = sequelize.define(
    "education_informations",
    {
      Education_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      Subject: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Starting_Date: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      Complete_Date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      Degree: {
        type: DataTypes.STRING,
        allowNull: true,

      },
      Institution: {
        type: DataTypes.STRING,
        allowNull: true,
      },

    },
    {
      updatedAt: false,
    }
  );

  return Education_Informations;
};