module.exports = (sequelize, DataTypes) => {
  const Countof = sequelize.define(
    "countof",
    {
      Count_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      Title: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      Img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Counted: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },

    {
      updatedAt: false,
    }
  );

  return Countof;
};
