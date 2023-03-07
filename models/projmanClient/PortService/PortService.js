module.exports = (sequelize, DataTypes) => {
  const PortService = sequelize.define(
    "portservice",
    {
      Content_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Category: {
        type: DataTypes.STRING,
        allowNull: true,
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

      SiteURL: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },

    {
      updatedAt: false,
    }
  );

  return PortService;
};
