//const sequelize = require("sequelize");
const db = require("../../models");
const sequelize = db.sequelize;
const Tasks = db.Task;
const Employees = db.add_employee;
const Projects = db.PMT_Projects;
const Add_Employee = db.Add_Employee;
const { customerLogger, ErrorLogger } = require("../../utils/logger");
module.exports = {
  async createTask(req, res) {
    console.log("createTask");
    try {
      const {
        Task,
        Assigned_Date,
        Due_Date,
        Description,
        Status,
        Assigned_to,
        projectProjectId,
      } = req.body;
      console.log("taskInfo", req.body);
      const employee = await Employees.findOne({
        where: { Employee_Id: Assigned_to },
      });
      const project = await Projects.findOne({
        where: { Project_Id: projectProjectId },
      });
      if (!employee) {
        return res.status(400).send("Employee not found");
      }
      if (!project) {
        return res.status(400).send("Project not found");
      }
      const task = await Tasks.create({
        Task,
        Assigned_Date,
        Due_Date,
        Description,
        Status,
        Assigned_to,
        projectProjectId,
      });
      return res
        .status(200)
        .send({ message: "Task created successfully", task });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  },
  async getTasks(req, res) {
    try {
      const { Employee_Id } = req.params;
      const tasks = await Tasks.findAll({
        where: { Assigned_to: Employee_Id },
      });
      return res.status(200).send(tasks);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async updateTask(req, res) {
    console.log("updateTask");
    try {
      const { Task_Id } = req.params;
      const [updated] = await Tasks.update(req.body, { where: { Task_Id } });
      if (updated) {
        const updatedTask = await Tasks.findOne({ where: { Task_Id } });
        return res.status(200).send(updatedTask);
      }
      throw new Error("Task not found");
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async deleteTask(req, res) {
    try {
      const { Task_Id } = req.params;
      const deleted = await Tasks.destroy({ where: { Task_Id } });
      if (deleted) {
        return res.status(204).send();
      }
      throw new Error("Task not found");
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async updateTaskStatus(req, res) {
    console.log("updateTaskStatus");
    try {
      const { Employee_Id, Project_Id } = req.params;
      const { Status } = req.body;
      const task = await Tasks.findOne({
        where: {
          Assigned_to: Employee_Id,
          projectProjectId: Project_Id,
        },
      });
      if (!task) {
        return res.status(400).send("Task not found");
      }
      const updatedTask = await task.update({ Status });
      return res.status(200).send(updatedTask);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
module.exports.getTasksInvidual = async (req, res) => {
  try {
    const { Employee_Id, Project_Id } = req.params;
    const tasks = await Tasks.findAll({
      where: {
        Assigned_to: Employee_Id,
        projectProjectId: Project_Id,
      },
    });
    return res.status(200).send(tasks);
  } catch (error) {
    ErrorLogger.error("get task invidual" + " " + error.message);
    return res.status(400).send(error);
  }
};
// get project based taskes
module.exports.getProject = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Project_Id", id);
    const tasks = await Tasks.findAll({ where: { projectProjectId: id } });
    return res.status(200).send(tasks);
  } catch (error) {
    ErrorLogger.error(req.originalUrl + " " + error.message);
    return res.status(400).send(error);
  }
};
//for report of task
module.exports.allTasks = async (req, res) => {
  try {
    console.log("dhukse naki?");
    const task = await sequelize.query(
      "select t.*, a.Employee_FirstName ,a.Employee_LastName  from tasks t , add_employees a where t.Assigned_to = a.Employee_Id ;",
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
};
//for report of pending task
module.exports.allPendingTasks = async (req, res) => {
  try {
    const task = await Tasks.findAll({ where: { Status: "Pending" } });
    res.status(200).send(task);
  } catch (error) {
    ErrorLogger.error("allPendingTasks" + " " + error.message);
    res.status(500).send(error);
  }
};
//for report of Complete task
module.exports.allCompleteTasks = async (req, res) => {
  try {
    const task = await Tasks.findAll({ where: { Status: "Complete" } });
    res.status(200).send(task);
  } catch (error) {
    ErrorLogger.error("allCompleteTasks" + " " + error.message);
    res.status(500).send(error);
  }
};
//for report of On going task
module.exports.allOngoingTasks = async (req, res) => {
  try {
    const task = await Tasks.findAll({ where: { Status: "Inprogress" } });
    res.status(200).send(task);
  } catch (error) {
    ErrorLogger.error("allOngoingTasks" + " " + error.message);
    res.status(500).send(error);
  }
};
//for report of individualTask
module.exports.individualInprogressTask = async (req, res) => {
  try {
    const { id } = req.params;
    const inprogressTask = await Tasks.findAll({
      where: {
        Assigned_to: id,
        Status: "Inprogress",
      },
    });
    res.status(200).send(inprogressTask);
  } catch (error) {
    ErrorLogger.error(
      "inprogress_Task_For_Individual_Employee" + " " + error.message
    );
    res.status(500).send(error);
  }
};

//for report of individualPendingTask
module.exports.individualPendingTask = async (req, res) => {
  try {
    const { id } = req.params;
    const pendingTask = await Tasks.findAll({
      where: {
        Assigned_to: id,
        Status: "Pending",
      },
    });
    res.status(200).send(pendingTask);
  } catch (error) {
    ErrorLogger.error(
      "Pending_Task_For_Individual_Employee" + " " + error.message
    );
    res.status(500).send(error);
  }
};

//for report of individualTask
module.exports.individualCompleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const completeTask = await Tasks.findAll({
      where: {
        Assigned_to: id,
        Status: "Complete",
      },
    });
    res.status(200).send(completeTask);
  } catch (error) {
    ErrorLogger.error(
      "Complete_Task_For_Individual_Employee" + " " + error.message
    );
    res.status(500).send(error);
  }
};

//Total task count here
module.exports.TaskCount = async (req, res) => {
  try {
    const taskCount = await Tasks.count().then((task) => {
      console.log("Tasks", task);
      // if (!task) {
      //     return res.status(404).send('Taskcount not found')
      // }
      res.status(200).send({
        status: "Success",
        message: "Successfully got total employeee count",
        task,
      });
    });
  } catch (error) {
    ErrorLogger.error("TaskCount" + " " + error.message);
    res.status(400).send({
      status: "fail",
      message: "Couldn't find tasks information",
      error: error.message,
    });
  }
};
