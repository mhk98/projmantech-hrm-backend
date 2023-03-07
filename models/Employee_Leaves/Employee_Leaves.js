module.exports = (sequelize, DataTypes) => {
  const Employee_Leaves = sequelize.define(
    "leaves",
       {
          Leave_Id: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
          },
          
          Leave_Type: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          From_date: {
            type: DataTypes.DATE,
            allowNull: true,
          },
        
          To_date: {
            type: DataTypes.DATE,
            allowNull: true,
          },
          Reason: {
              type: DataTypes.STRING,
              allowNull: true,
              
          },
          annualLeave: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          remainingAnnualLeave: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          remainingMedicalLeave: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          remainingCasualLeave: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          remainingOtherLeave: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          leaveType:  {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          daysTaken: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          leaveBalance: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          leaveEntitlement: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          remainingLeave:  {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          daysTaken: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          No_of_Days: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          Status: {
              type: DataTypes.STRING,
              allowNull: true,
              
            },
          
        },
        {
          updatedAt: false,
        }
  );

  return Employee_Leaves;
};