
module.exports = (sequelize, DataTypes) => {
  const BestService = sequelize.define(
    "bestservice",
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

  return BestService;
};
