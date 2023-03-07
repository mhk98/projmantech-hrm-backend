const db = require('../../models');
const Employee_Leaves = db.Employee_Leaves;
const Add_Employee = db.add_employee;

module.exports.createLeave = (req, res) => {
    const {    Leave_Id,Leave_Type,From_date,To_date,Reason,No_of_Days, Status } = req.body;
    Employee_Leaves.create({
        Leave_Id,
        Leave_Type,
        From_date,
        To_date,
        Reason,
        No_of_Days,
        Status
    })
    .then(leave => {
        res.status(201).json({
            message: 'Leave request created successfully!',
            leave
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'Error creating leave request: ' + error
        });
    });
};

//////create function for employee leaves

// module.exports.createLeave = async (req, res) => {
//   (req.body);
//   try {
//     const {
//       Leave_Id,
//       Leave_Type,
//       From_date,
//       To_date,
//       Reason,
//       No_of_Days,
//       Status

//     } = req.body;

//     (req.body.Toll_Gate_No, " bla bla ", Toll_Gate_No);

//     if (
//       !Leave_Id ||
//       !Leave_Type ||
//       !From_date ||
//       !To_date ||
//       !Reason ||
//       !No_of_Days ||
//       !Status 
//     ) {
//       res.json(createResponse(true, null, 'Parameter missing'));

//     } else {
//       const result = await Employee_Leaves.create({
//         Leave_Id,
//         Leave_Type,
//         From_date,
//         To_date,
//         Reason,
//         No_of_Days,
//         Status
//       });
//       if (result) {
//         res.json(createResponse(false, result, 'Record inserted'));
//       }
//     }
//   } catch (error) {
//     res.json(createResponse(true, null, `${error.message}`));
//   }
// // };


// module.exports.getLeaves = async (req, res) => {
//     try {
//         //card no
//         const { Employee_Id } = req.body;
//         //gaurd condition
//         if (!Employee_Id) {
//           res.json(createResponse(null, 'Employee id not found', true));
//         }
//         // body has id
//         else {
//           const result = await Employee_Leaves.findAll({
//             where: {
//               //checking whether id is matching
//               addEmployeeEmployeeId: Employee_Id,
              
//             }
//           });
    
//           if (result) {
//             res.json(createResponse(result));
//           } else {
//             res.json(createResponse(null, 'Employee not found with this id', true));
//           }
//         }
//       } catch (error) {
//         ErrorLogger.error(req.originalUrl + " " + error.message);
//         next(error.message);
//       }
// };

// exports.updateLeave = (req, res) => {
//     const { Status } = req.body;
//     const {   Leave_Id } = req.params;

//     Employee_Leaves.update({ Status }, { where: { id:  Leave_Id } })
//         .then(updatedLeave => {
//             if (updatedLeave[0]) {
//                 res.status(200).json({
//                     message: 'Leave request updated successfully!'
//                 });
//             } else {
//                 res.status(404).json({
//                     message: 'Leave request not found!'
//                 });
//             }
//         })
//         .catch(error => {
//             res.status(500).json({
//                 message: 'Error updating leave request: ' + error
//             });
//         });
// };

// /* for approval of leave request */

// // Leave request approval function
// modulue.exports.approveLeaveRequest = (req, res) => {
//   // Find the leave request to approve
//   LeaveRequest.findById(req.params.id, (err, leaveRequest) => {
//     if (err) {
//       res.status(500).json({ message: 'Error finding leave request' });
//     } else {
//       // Update the leave request's status to "approved"
//       leaveRequest.status = 'approved';
//       leaveRequest.save((err) => {
//         if (err) {
//           res.status(500).json({ message: 'Error updating leave request' });
//         } else {
//           res.status(200).json({ message: 'Leave request approved' });
//         }
//       });
//     }
//   });
// }
// /* for leave calculation */
// module.exports.remainingLeaves = async(req,res) =>{
//   try {
    
//   } catch (error) {
    
//   }
// }

// class LeaveSettings {
//   constructor() {
//     this.annualLeave = 20;
//     this.remainingAnnualLeave = 20;
//     this.remainingMedicalLeave = 5;
//     this.remainingCasualLeave = 5;
//     this.remainingOtherLeave = 5;
//   }

//   async updateLeave(leaveType, daysTaken) {
//     try {
//       let leave = await Leave.findOne({ where: { leaveType: leaveType } });
//       if (leave.remainingLeave < daysTaken) {
//         throw new Error(`You don't have enough ${leaveType} remaining`);
//       }
//       leave.remainingLeave = leave.remainingLeave - daysTaken;
//       await leave.save();
//       return leave;
//     } catch (err) {
//       console.error(err);
//     }
//   }
// }

// const leaveSettings = new LeaveSettings();

// app.post('/apply-leave', async (req, res) => {
//   try {
//     let leaveType = req.body.leaveType;
//     let daysTaken = req.body.daysTaken;
//     let leave = await leaveSettings.updateLeave(leaveType, daysTaken);
//     res.status(200).json({ message: `Successfully applied for ${daysTaken} days of ${leaveType} leave`, remainingLeave: leave.remainingLeave });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error while applying for leave' });
//   }
// });

// //leave updae after 365 days
// const updateLeaveManagementSystem = () => {
//   // Find all employees whose leave balances need to be updated
//   Employee.findAll({
//     where: {
//       lastLeaveUpdate: {
//         [Op.lt]: new Date(new Date() - 365 * 24 * 60 * 60 * 1000)
//       }
//     }
//   })
//   .then(employees => {
//     employees.forEach(employee => {
//       // Update the leave balance for each employee
//       employee.update({
//         leaveBalance: employee.leaveBalance + employee.leaveEntitlement,
//         lastLeaveUpdate: new Date()
//       });
//     });
//   });
// }
/* making dynamic leave controllers */
/*ameek bhai check */
module.exports.LeaveSettingsController = async (req, res) => {
  try {
      // Only allow employee to update leave settings
      if (req.user.isAdmin) {
          throw new Error('Unauthorized');
      }
      // Find leave settings for the employee
      let leaveSettings = await Employee_Leaves.findOne({ where: { employeeId: req.user.id } });
      if (!leaveSettings) {
          // Create new leave settings
          leaveSettings = await Employee_Leaves.create({
              employeeId: req.user.id,
              annualLeave: 20,
              medicalLeave: 5,
              casualLeave: 5,
              otherLeave: 5,
              usedAnnualLeave: 0,
              usedMedicalLeave: 0,
              usedCasualLeave: 0,
              usedOtherLeave: 0
          });
      }
      // Send the leave settings to the client
      res.status(200).json({
          message: 'Leave settings retrieved successfully',
          leaveSettings
      });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error retrieving leave settings' });
  }
};

module.exports.updateLeaveController = async (req, res) => {
  try {
      // Only allow employee to update leave settings
      if (req.user.isAdmin) {
          throw new Error('Unauthorized');
      }
      // Find leave settings for the employee
      let leaveSettings = await Employee_Leaves.findOne({ where: { employeeId: req.user.id } });
      if (!leaveSettings) {
          throw new Error('Leave settings not found');
      }
      // Update the used leave for each category
      leaveSettings.usedAnnualLeave = req.body.usedAnnualLeave;
      leaveSettings.usedMedicalLeave = req.body.usedMedicalLeave;
      leaveSettings.usedCasualLeave = req.body.usedCasualLeave;
      leaveSettings.usedOtherLeave = req.body.usedOtherLeave;
      await leaveSettings.save;
              // Calculate remaining leave
              let annualLeave = leaveSettings.annualLeave - leaveSettings.usedAnnualLeave;
              let medicalLeave = leaveSettings.medicalLeave - leaveSettings.usedMedicalLeave;
              let casualLeave = leaveSettings.casualLeave - leaveSettings.usedCasualLeave;
              let otherLeave = leaveSettings.otherLeave - leaveSettings.usedOtherLeave;
      
              // Send the remaining leave to the client
              res.status(200).json({
                  message: 'Leave updated successfully',
                  remainingLeave: { annualLeave, medicalLeave, casualLeave, otherLeave }
              });
          } catch (err) {
              console.error(err);
              res.status(500).json({ message: 'Error updating leave' });
          }
      };
      
