"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformUsers = transformUsers;
const department_1 = require("./department");
function transformUsers(users) {
    const result = {};
    for (const user of users) {
        const dept = user.company.department;
        if (!result[dept]) {
            //ถ้า key ของ dept ไม่ได้อยุใน object result 
            //ให้เพิ่ม dept ที่ถูกเปลี่ยนเป็น object ให้เป็น key ใน result
            result[dept] = new department_1.DepartmentSummary();
        }
        result[dept].addUser(user);
    }
    const finalResult = {};
    // final result จะ return: object Record<ชื่อDepartment, value ของ department นั้นๆ จากใน คลาส> 
    //method getResult รีเทิน ค่าสรุปของ department นั้น
    for (const dept in result) {
        finalResult[dept] = result[dept].getResult();
    }
    return finalResult;
}
