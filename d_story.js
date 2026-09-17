// Work and Travel: งานใกล้นิวยอร์ก ใช้ USD
const jobs = [
	{ title: "Lifeguard", city: "Jersey City", hourlyRate: 16, hoursPerWeek: 32, rent: 1100, requirements: "ว่ายน้ำได้" },
	{ title: "Server", city: "Newark", hourlyRate: 15, hoursPerWeek: 35, rent: 950, requirements: "สื่อสารภาษาอังกฤษได้" },
	{ title: "Farm Worker", city: "Long Island", hourlyRate: 14, hoursPerWeek: 40, rent: 1800, requirements: "ทำงานกลางแจ้งได้" },
];

const findJobs = (jobList, minHourlyRate, maxRent) => jobList
	.filter((job) => job.hourlyRate >= minHourlyRate && job.rent <= maxRent)
	.map((job) => ({ ...job, monthlyIncome: job.hourlyRate * job.hoursPerWeek * 4.33,
		remaining: job.hourlyRate * job.hoursPerWeek * 4.33 - job.rent }));

console.log(findJobs(jobs, 15, 1200)); // ปกติ: พบ 2 งาน
console.log(findJobs(jobs, 20, 1200)); // ขอบ 1: ไม่มีงานตรงเงื่อนไข []
console.log(findJobs([{ ...jobs[2], rent: 3000 }], 14, 3000)); // ขอบ 2: remaining ติดลบ
