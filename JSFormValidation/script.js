function submit() {
  const name = document.getElementById("FullName").value;
  console.log(name);

  // if(name<"A" &&  "Z"){
  //   alert("Not a Right Number");
  // }

  document.querySelectorAll(".error").forEach((element) => {
    element.innerText = "";
  });

  if (!/^[A-Za-z\s]+$/.test(name)) {
    document.getElementById("nameError").innerText = "Invalid Full Name";
  }

  const number = document.getElementById("number").value;
  console.log(number);

  if (!/^[6-9\d{9}]+$/.test(number)) {
    document.getElementById("phoneError").innerText = "Invalid phone number";
  }

  const email = document.getElementById("email").value;
  console.log(email);
  if (!/^[A-Za-z\.\_\d]+@gmail.com$/.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email";
  }

  const password = document.getElementById("password").value;
  console.log(password);
}
