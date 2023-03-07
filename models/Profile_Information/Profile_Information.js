module.exports = (sequelize, DataTypes) => {
  const Profile_Information = sequelize.define(
    "profile_information",
    {
      Employee_Id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      Employee_FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Employee_LastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      Address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Phone: {
        type: DataTypes.STRING,
        allowNull: true,
        Unique: false,
      },

      State: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Birth_Date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      Designation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Pin_Code: {
        type: DataTypes.STRING,
        allowNull: true,
        Unique: true,
      },

      Country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Reports_To: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      updatedAt: false,
    }
  );

  return Profile_Information;
};
