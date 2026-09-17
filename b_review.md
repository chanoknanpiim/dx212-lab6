// เลือกคำแนะนำข้อ 1: ตรวจสอบข้อมูลก่อนนำไปใช้งาน
const ROLES = Object.freeze({
  PO: "PO",
  DEV: "Dev",
  SM: "SM",
});

const team = Object.freeze([
  Object.freeze({ name: "ฟ้า", role: ROLES.PO, tasksDone: 5 }),
  Object.freeze({ name: "ต้น", role: ROLES.DEV, tasksDone: 8 }),
  Object.freeze({ name: "มายด์", role: ROLES.SM, tasksDone: 3 }),
  Object.freeze({ name: "เจ", role: ROLES.DEV, tasksDone: 6 }),
]);

const isValidTeam = team.every(
  (member) =>
    typeof member.name === "string" &&
    member.name.trim().length > 0 &&
    Object.values(ROLES).includes(member.role) &&
    Number.isInteger(member.tasksDone) &&
    member.tasksDone >= 0
);

console.log(isValidTeam); // true

// เหตุผล: ป้องกันชื่อว่างและค่าจำนวนงานที่ไม่ถูกต้อง ทำให้ข้อมูลน่าเชื่อถือขึ้น
// ไม่เลือกข้อ 2 เพราะโค้ดมี ROLES เป็นค่าคงที่อยู่แล้ว
// ไม่เลือกข้อ 3 เพราะโค้ดใช้ Object.freeze ป้องกันการแก้ข้อมูลอยู่แล้ว