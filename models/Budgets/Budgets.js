module.exports = (sequelize, DataTypes) => {
    const Budgets = sequelize.define(
    "budgets",
       {
          Budget_Id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
         Budget_Title: {
          type: DataTypes.STRING,
          allowNull: true,
        },
         Budget_Type: {
          type: DataTypes.STRING,
          allowNull: true,
        },
         
          Start_Date: {
            type: DataTypes.DATE,
            allowNull: true,
          },
          End_Date: {
            type: DataTypes.DATE,
            allowNull: true,
          },
          Total_Revenue: {
            type: DataTypes.DECIMAL(10,4),
            allowNull: true,
          },
          Total_Expreses: {
            type: DataTypes.DECIMAL(10,4),
            allowNull: true,
          },
          Tax_Amount: {
            type: DataTypes.DECIMAL(10,4),
            allowNull: true,
          },
          Budget_Amount: {
            type: DataTypes.DECIMAL(10,4),
            allowNull: true,
          },
          
        },  
        {
          updatedAt: false,
        }
  );
  
  return Budgets;
  };
  