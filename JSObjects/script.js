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

// fd1.map((e,idx) => {

//     console.log(idx);
//     console.log(e.name);
// });

let satya = {
  name: "Karan Mehta",
  dob: "1985-12-12",
  city: "Jaipur",
  number: "9191919191",
  profession: "Businessman",
};

console.log(Object.keys(satya));
console.log(Object.values(satya));
console.log(Object.entries(satya));

let ar = [21, 42, 63, 74, 84, 95, 56, 37, 18, 62, 78, 94, 54, 59, 49, 82, 36];

ar.sort((a, b) => a - b);
console.log(ar);

console.log(ar.find((val) => val === 74));
console.log(ar.findIndex((val) => val === 56));
console.log(ar.findLastIndex((val) => val === 59));

let set = [23, 45, 67, 89, 44, 33, 66, 77, 88, 99, 12, 39, 48, 49];
console.log(set.filter((val) => val > 20));
console.log(set.find((val) => val > 20));

console.log(set.slice(0, 7));

let ab = "This is Web Development Class";
console.log(ab);
console.log(ab.split(" "));
console.log(ab.split("-"));

let str = "this is a String";

console.log(str.charAt(5));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let h = 3.14;
console.log(h);

console.log(typeof h);
let b = h.toString();
console.log(b);

let c = 3.14;

console.log(c.toFixed(5));
