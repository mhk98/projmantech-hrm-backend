module.exports = (sequelize, DataTypes) => {
  const Clientmassage = sequelize.define(
    "clientmassage",
    {
      Massage_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      Client_Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Subject: {
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

      Massage: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },

    {
      updatedAt: false,
    }
  );

  return Clientmassage;
};
