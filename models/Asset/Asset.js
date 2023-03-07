module.exports = (sequelize, DataTypes) => {
    const Asset  = sequelize.define(
    "asset",
       {
          Assets_Id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          },
          
          Assets_Name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          
          Purchase_Date: {
            type: DataTypes.DATE,
            allowNull: true,
          },
          
          Purchase_From: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          Expense_Date: {
            type: DataTypes.DATE,
            allowNull: true,
          },
        
          Manufacturer: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          Model: {
              type: DataTypes.STRING,
              allowNull: true,
          },
          Serial_Number: {
              type: DataTypes.STRING,
              allowNull: true,
          },
          Supplier: {
              type: DataTypes.STRING,
              allowNull: true,
          },
          Condition: {
              type: DataTypes.STRING,
              allowNull: true,
          },
          Warranty: {
              type: DataTypes.INTEGER,
              allowNull: true,
          },
          Value: {
              type: DataTypes.DECIMAL(60,10),
              allowNull: true,
          },
          Description: {
              type: DataTypes.TEXT,
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
  return Asset;
  };