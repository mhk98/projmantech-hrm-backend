module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define("attendance", {
    Attendance_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Employee_Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Time_In: {
      type: DataTypes.TIME,
      // defaultValue: DataTypes.NOW,
      allowNull: true,
    },
    Time_Out: {
      type: DataTypes.TIME,
      // defaultValue: DataTypes.NOW,
      allowNull: true,
    },
    Date_Today: {
      type: DataTypes.DATEONLY,
      // defaultValue: DataTypes.NOW,
      allowNull: true,
    },
    // Month: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // Year: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },

    Attendance_Status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Device_Ip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    addEmployeeEmployeeId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Attendance;
};
