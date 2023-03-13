module.exports = (sequelize, DataTypes) => {
  const Notice = sequelize.define('notice',
    {
      notice_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      notice_title: {
        type: DataTypes.STRING,
        allowNull: true
      },
      notice_description: {
        type: DataTypes.TEXT('long'),
        allowNull: true
      },
      notice_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },

    });

  return Notice;
};
