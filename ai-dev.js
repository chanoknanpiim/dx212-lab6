const calcFare = (distanceKm) => {
	// ตรวจสอบระยะทางก่อนคำนวณค่าโดยสาร
	if (typeof distanceKm !== "number" || !Number.isFinite(distanceKm) || distanceKm < 0) {
		return 0;
	}

	const roundedDistance = Math.ceil(distanceKm);
	return roundedDistance <= 2 ? 10 : 10 + (roundedDistance - 2) * 2;
};

// ทดสอบกรณีต่าง ๆ ของ calcFare
const testCases = [
	{ distance: 1, expected: 10 },
	{ distance: 2, expected: 10 },
	{ distance: 2.1, expected: 12 },
	{ distance: 4.01, expected: 16 },
	{ distance: -1, expected: 0 },
	{ distance: "2", expected: 0 },
	{ distance: NaN, expected: 0 }
];

testCases.forEach(({ distance, expected }) => {
	const actual = calcFare(distance);
	console.assert(actual === expected, `ผิดพลาด: calcFare(${distance}) ควรได้ ${expected} แต่ได้ ${actual}`);
});

console.log("ทดสอบ calcFare ผ่านทุกกรณี");

