// คำนวณค่าโดยสารรถ NGV
const calcFare = (distanceKm) => {
	// ตรวจสอบระยะทาง
	if (typeof distanceKm !== "number" || !Number.isFinite(distanceKm) || distanceKm < 0) {
		return 0;
	}

	const totalKm = Math.ceil(distanceKm);
	return totalKm <= 2 ? 10 : 10 + (totalKm - 2) * 2;
};

console.log(calcFare(1.5));
console.log(calcFare(2));
console.log(calcFare(7.2));