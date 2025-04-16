import { transformUsers } from "../tools/transformation";
import { User } from "../types/user";

// type ต้องเป็น User ที่ระบุไว้ใน getUsers
const mockUsers: User[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    hair: { color: 'Black', type: 'curly' },
    address: { postalCode: '12345' },
    company: { department: 'Engineering' }
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
    gender: 'female',
    hair: { color: 'Blond', type: 'curly' },
    address: { postalCode: '54321' },
    company: { department: 'Engineering' }
  },
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 45,
    gender: 'female',
    hair: { color: 'Black', type: 'curly' },
    address: { postalCode: '11111' },
    company: { department: 'HR' }
  }
];

describe('transformUsers', () => {
    // เชคจำณวนของเพศ
  it('should group users by department with correct gender counts', () => {
    const result = transformUsers(mockUsers);

    expect(result['Engineering'].male).toBe(1);
    expect(result['Engineering'].female).toBe(1);
    expect(result['HR'].female).toBe(1);
  });
  // เชคช่วงของอายุ
  it('should calculate correct age range', () => {
    const result = transformUsers(mockUsers);
    expect(result['Engineering'].ageRange).toBe('25-30');
    expect(result['HR'].ageRange).toBe('45-45');
  });

  // เชคจำณวนสีผม
  it('should summarize hair colors correctly', () => {
    const result = transformUsers(mockUsers);
    expect(result['Engineering'].hair['Black']).toBe(1);
    expect(result['Engineering'].hair['Blond']).toBe(1);
    expect(result['HR'].hair['Black']).toBe(1);
  });
// เชคชื่อและ รหัสไปรสะนีย์
  it('should map names to postal codes', () => {
    const result = transformUsers(mockUsers);
    expect(result['Engineering'].addressUser['JohnDoe']).toBe('12345');
    expect(result['Engineering'].addressUser['JaneSmith']).toBe('54321');
    expect(result['HR'].addressUser['AliceJohnson']).toBe('11111');
  });
});