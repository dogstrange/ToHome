import { User } from '../types/user';
import { DepartmentSummary } from './department';

export function transformUsers(users: User[]) {
  const result: Record<string, DepartmentSummary> = {};

  for (const user of users) {
    const dept = user.company.department;

    if (!result[dept]) {
        //ถ้า key ของ dept ไม่ได้อยุใน object result 
        //ให้เพิ่ม dept ที่ถูกเปลี่ยนเป็น object ให้เป็น key ใน result
      result[dept] = new DepartmentSummary();
    }

    result[dept].addUser(user);
  }

  const finalResult: Record<string, ReturnType<DepartmentSummary["getResult"]>> = {};
  // final result จะ return: object Record<ชื่อDepartment, value ของ department นั้นๆ จากใน คลาส> 
  //method getResult รีเทิน ค่าสรุปของ department นั้น
  for (const dept in result) {
    finalResult[dept] = result[dept].getResult();
  }

  return finalResult;
}