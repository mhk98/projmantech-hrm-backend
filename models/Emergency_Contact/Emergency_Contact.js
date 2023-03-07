module.exports = (sequelize, DataTypes) => {
  const Emergency_Contact = sequelize.define(
    "emergency_contact",
    {
      Contact_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      Contact_Type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      Relationship: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Phone: {
        type: DataTypes.STRING,
        allowNull: true,
        Unique: true,
      },
      Phone2: {
        type: DataTypes.STRING,
        allowNull: true,
        Unique: true,
      },

    },
    {
      updatedAt: false,
    }
  );

  return Emergency_Contact;
};