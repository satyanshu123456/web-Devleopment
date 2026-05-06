// let fd = [
//   ["Satya", "28-07-2005", "9179010652", "Bhopal", "Student"]
//   ["Satya", "28-07-2005", "9179010652", "Bhopal", "Student"]
//   ["Satya", "28-07-2005", "9179010652", "Bhopal", "Student"]
//   ["Satya", "28-07-2005", "9179010652", "Bhopal", "Student"]
// ];

// fd.forEach((element) => {
//   console.log(element);
// });

let fd1 = [
  [
    {
      name: "Amit Sharma",
      dob: "1992-04-15",
      city: "Delhi",
      number: "9876543210",
      profession: "Software Engineer",
    },
    {
      name: "Priya Verma",
      dob: "1988-11-23",
      city: "Mumbai",
      number: "9123456780",
      profession: "Doctor",
    },
    {
      name: "Rohit Singh",
      dob: "1995-07-09",
      city: "Bhopal",
      number: "9988776655",
      profession: "Teacher",
    },
    {
      name: "Sneha Patel",
      dob: "1990-02-28",
      city: "Ahmedabad",
      number: "9090909090",
      profession: "Fashion Designer",
    },
    {
      name: "Karan Mehta",
      dob: "1985-12-12",
      city: "Jaipur",
      number: "9191919191",
      profession: "Businessman",
    },
  ],
];

fd1.forEach((e) => {
  console.log(e);
});

fd1.forEach((e) => {
  console.log(e[2].profession);
});

let satya = {
  name: "Karan Mehta",
  dob: "1985-12-12",
  city: "Jaipur",
  number: "9191919191",
  profession: "Businessman",
};

console.log(Object.keys(satya));
console.log(Object.values(satya));
