// คำนวณค่าโดยสารรถ NGV ในมหาวิทยาลัย
// 2 กม.แรก 10 บาท กม.ถัดไปกม.ละ 2 บาท เศษของกม.ปัดขึ้น
// ระยะทางติดลบหรือไม่ใช่ตัวเลข (NaN) ให้คืน 0
const calcFare = (distanceKm) => {
    // ตรวจสอบระยะทางที่ใช้ไม่ได้
    if (typeof distanceKm !== "number" || isNaN(distanceKm) || distanceKm < 0) {
        return 0;
    }
    // ปัดเศษของกิโลเมตรขึ้นเป็นจำนวนเต็ม
    const totalKm = Math.ceil(distanceKm);
    // 2 กม.แรก 10 บาท ส่วนที่เกินคิดกม.ละ 2 บาท
    if (totalKm <= 2) {
        return 10;
    }
    return 10 + (totalKm - 2) * 2;
};

// ตัวอย่างการเรียกใช้งาน
console.log(calcFare(1.2));    // ปัดขึ้น = 2 กม. => 10 บาท
console.log(calcFare(2));      // 2 กม. => 10 บาท
console.log(calcFare(2.1));    // ปัดขึ้น = 3 กม. => 12 บาท
console.log(calcFare(5));      // 5 กม. => 10 + (3 * 2) = 16 บาท
console.log(calcFare(0));      // 0 กม. => 10 บาท
console.log(calcFare(-3));     // ติดลบ => 0 บาท
console.log(calcFare("abc"));  // ไม่ใช่ตัวเลข => 0 บาท