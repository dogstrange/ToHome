import { User } from "../types/user";
//เวลา update ข้อมูลของแต่ละ depm มาอัปเดตในคลาส (constructor function)

export class DepartmentSummary {
  male: number = 0;
  female: number = 0;
  minAge: number = Infinity;
  maxAge: number = -Infinity;
  hair: Record<string, number> = {};
  addressUser: Record<string, string> = {};

  addUser(user: User) {

    if (user.gender === "male"){
        this.male++
    }
    else if (user.gender === "female"){
        this.female++
    };

    // ใช้การเปรียบเทียบเพื่อคำณวนค่าต่ำสุด สูงสุด ณ ตอนนี้
    // Math.min(30, 50) choose 30
    //Math.max(30,50) choose 50

    this.minAge = Math.min(this.minAge, user.age);
    this.maxAge = Math.max(this.maxAge, user.age);


    const color = user.hair.color;
    // เชคว่ามีสีผมนี้หรือยังก่อน 
    this.hair[color] = (this.hair[color] || 0) + 1;

    // เพิ่ม key เปินชื่อขนามสกุล  value เป็นที่อยุ
    const nameKey = `${user.firstName}${user.lastName}`;
    this.addressUser[nameKey] = user.address.postalCode;
  }

  getResult() {
    return {
      male: this.male,
      female: this.female,
      ageRange: `${this.minAge}-${this.maxAge}`,
      hair: this.hair,
      addressUser: this.addressUser,
    };
  }
}