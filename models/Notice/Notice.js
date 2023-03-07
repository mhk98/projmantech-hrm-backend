module.exports = (sequelize, DataTypes) => {
  const Notice = sequelize.define('notice',
    {
      notice_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      notice_text: {
        type: DataTypes.STRING,
        allowNull: true
      },
      notice_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      is_for_all: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      Assigned_to: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });

  return Notice;
};
