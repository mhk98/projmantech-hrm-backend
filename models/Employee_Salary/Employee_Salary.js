module.exports = (sequelize, DataTypes) => {
  const Employee_Salary = sequelize.define(
    "employeeSalary",
    {
      Salary_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },

      Employee_Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Salary_Month: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Monthly_Salary: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },

      Employee_Id: {
        type: DataTypes.STRING,
        allowNull: true,
      },

    },
    {
      updatedAt: false,
    }
  );
  return Employee_Salary;
};
