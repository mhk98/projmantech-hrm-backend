module.exports = (sequelize, DataTypes) => {
    const Leaves = sequelize.define('leave', {
        Leave_Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        leaveType: {
            type: DataTypes.ENUM('annualLeave', 'unpaidLeave'),
            defaultValue: 'annualLeave'
        },
        status: {
            type: DataTypes.ENUM('pending', 'approved', 'rejected'),
            defaultValue: 'pending'
        },
        annualLeaves: {
            type: DataTypes.INTEGER,
            defaultValue: 12
        },
        remainingLeaves: {
            type: DataTypes.INTEGER,
            defaultValue: 12
        },
        lastAnnualLeaveUpdate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        msgFromAdmin: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.NOW
        },
        CountedDaysOfTakenLeave: {
            type: DataTypes.INTEGER,
            defaultValue: DataTypes.NOW
        },
        Leave_Reason: {
            type: DataTypes.STRING,
            allowNull: true,

        }
    }
        ,
        {
            updatedAt: false,
        }
    );

    return Leaves;
};
