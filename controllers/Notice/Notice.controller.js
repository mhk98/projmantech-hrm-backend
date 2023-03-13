const sequelize = require('sequelize');
const db = require('../../models');
const Add_Employee = db.add_employee;
const Notice = db.Notice;


module.exports.createNotice = async (req, res) => {
  try {

    if (!req.body) {
      return res.status(404).send("Notice info not found");
    }
    const notice = await Notice.create(req.body);
    res.status(200).send(notice);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.getNotices = async (req, res) => {
  try {
    const result = await Notice.findAll();
    if (!result) {
      return res.status(404).send('result not found')
    }
    res.status(200).send({
      status: 'Success',
      message: 'Successfully got notice info',
      data: result
    })
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.getNoticeById = async (req, res) => {
  try {
    const { Employee_Id } = req.params;
    const notice = await Notice.findByPk(Employee_Id);
    if (!notice) {
      return res.status(404).send("Notice not found");
    }
    res.status(200).send(notice);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.updateNotice = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Notice.update(req.body, {
      where: { notice_id: id }
    });

    if (!result) {
      return res.status(404).send('Result not found')
    }
    res.status(200).send({
      status: 'Success',
      message: 'Successfully update notice info',
      data: result
    })

  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.deleteNotice = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('NoticeId', id);
    const deleted = await Notice.destroy({
      where: { notice_id: id }
    });
    if (deleted) {
      return res.status(200).send('Successfully delete notice');
    }

  } catch (error) {
    res.status(500).send(error);
  }
};

