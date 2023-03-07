module.exports = (sequelize, DataTypes) => {
  const PMT_Clients = sequelize.define(
    "clients",
    {
      Client_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Client_FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Client_LastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      Client_Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Client_Position: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Contact_No: {
        type: DataTypes.STRING,
        allowNull: true,
        Unique: true,
      },

      Client_DOB: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      Address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Company_Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      updatedAt: false,
    }
  );

  return PMT_Clients;
};
