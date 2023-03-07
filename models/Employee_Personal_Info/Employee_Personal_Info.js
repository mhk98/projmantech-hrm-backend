module.exports = (sequelize, DataTypes) => {
  const Employee_Personal_Info = sequelize.define(
    "employeePI",
    {
      Employee_Id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      Employee_img: {
        type: DataTypes.STRING,
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

      Employee_Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Passport_No: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Contact_No: {
        type: DataTypes.STRING,
        allowNull: true,
        Unique: true,
      },

      Religion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Employment_of_Spouse: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Passport_Expire_Date: {
        type: DataTypes.DATE,
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
      No_of_Children: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

    },
    {
      updatedAt: false,
    }
  );

  return Employee_Personal_Info;
};
