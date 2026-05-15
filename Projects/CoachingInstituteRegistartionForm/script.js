function formSubmit() {
  const name = document.getElementById("FullName").value;
  if (/^[A-Za-a\s]+$/.test(name)) {
    console.log(name);
  } else {
    document.getElementById("nameError").innerText = "Invalid name";
  }

  const email = document.getElementById("email").value;
  if (!/^[A-Za-z\d\.\_]+@(gmail.com|outlook.com|ricr.in)$/.test(email)) {
    console.log(email);
  } else {
    document.getElementById("emailError").innerText = "Invalid Email Address";
  }

  const number = document.getElementById("number").value;
  if (/^[6-9]\d{9}$/.test(number)) {
    console.log(number);
  } else {
    document.getElementById("numberError").innerText = "Invalid Mobile Number";
  }

  const dob = document.getElementById("date").value;
  console.log(date);

  const addres = document.getElementById("address").value;
  console.log(addres);

  const city = document.getElementById("city").value;
  console.log(city);

  const pincode = document.getElementById("pincode").value;
  console.log(pincode);

  const gname = document.getElementById("gname").value;
  console.log(gname);

  const gnumber = document.getElementById("gnumber").value;
  console.log(gnumber);

  const special = document.getElementById("specialReq").value;
  console.log(special);
}
