const sequelize = require('sequelize');
const db = require('../../models');
const Add_Employee = db.add_employee;
const Notice = db.Notice;


module.exports.createNotice = async (req, res) => {
  try {
    const { notice_text, is_for_all, notice_date, employee_id } = req.body;
    if (!is_for_all) {
      const employee = await Add_Employee.findOne({
        where: { Employee_Id: employee_id }
      });
      if (!employee) {
        return res.status(404).send("Employee not found");
      }
    }
    const notice = await Notice.create({
      notice_text,
      is_for_all,
      notice_date,
      employee_id
    });
    res.status(201).send(notice);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.getNotices = async (req, res) => {
  try {
    const notices = await Notice.findAll();
    res.status(200).send(notices);
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
    const { notice_id } = req.params;
    const [updated] = await Notice.update(req.body, {
      where: { notice_id }
    });
    if (updated) {
      const updatedNotice = await Notice.findByPk(notice_id);
      return res.status(200).send(updatedNotice);
    }
    throw new Error("Notice not found");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.deleteNotice = async (req, res) => {
  try {
    const { notice_id } = req.params;
    const deleted = await Notice.destroy({
      where: { notice_id }
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error("Notice not found");
  } catch (error) {
    res.status(500).send(error);
  }
};

