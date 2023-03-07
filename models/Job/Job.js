module.exports = (sequelize, DataTypes) => {
    const Job  = sequelize.define(
    "job",
       {
          Job_Id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          },
          
          Job_Position: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          
          Department: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          
          Post_Date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
          },
          Apply_deadline: {
            type: DataTypes.DATEONLY,
            allowNull: true,
          },
        
          Description: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          Requirement: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          Academic_Requirement: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          Additional_Requirement: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          Job_Type: {
              type: DataTypes.STRING,
              allowNull: true,
          },
          Salary: {
              type: DataTypes.STRING,
              allowNull: true,
          },
          Experience: {
              type: DataTypes.STRING,
              allowNull: true,
          },
          Vacancy: {
              type: DataTypes.INTEGER,
              allowNull: true,
          },
          Location: {
              type: DataTypes.STRING,
              allowNull: true,
          },
          Mail: {
              type: DataTypes.STRING,
              allowNull: true,
          },
          
        },
        {
          updatedAt: false,
        }
  );
  return Job;
  };
