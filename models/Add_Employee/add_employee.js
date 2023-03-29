module.exports = (sequelize, DataTypes) => {
  const Add_Employee = sequelize.define(
    "add_employee",
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
        unique: true,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Phone: {
        type: DataTypes.STRING,
        allowNull: false,
        Unique: true,
      },
      Company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Joining_Date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      Designation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Status: {
        type: DataTypes.STRING,
        defaultValue: "Active",
      },
      Img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      updatedAt: false,
    },
    {
      hooks: {
        beforeCreate: async (add_employee) => {
          if (add_employee.Password) {
            const salt = await bcrypt.genSaltSync(10);
            add_employee.Password = bcrypt.hashSync(
              add_employee.Password,
              salt
            );
          }
        },
      },
    }
  );

  Add_Employee.prototype.validPassword = async (Password, hash) => {
    return await bcrypt.compareSync(Password, hash);
  };
  Add_Employee.prototype.getHashPass = async (Password) => {
    const salt = await bcrypt.genSaltSync(10);
    const hashed = bcrypt.hashSync(Password, salt);
    return hashed;
  };

  return Add_Employee;
};
