function Submit() {
  console.log("Submit Button Clicked");
  const fn = document.getElementById("FullName").value;
  const fn1 = document.getElementById("EmailAddress").value;
  const fn2 = document.getElementById("city").value;
  const fn3 = document.getElementById("UserPass").value;
  console.log(fn);
  console.log(fn1);
  console.log(fn2);
  console.log(fn3);

  document.getElementById("myData").innerText = fn;
  document.getElementById("myData2").innerText = fn1;
  document.getElementById("myData3").innerText = fn2;
  document.getElementById("myData4").innerText = fn3;
  document.getElementById("FullName").value = "";
  document.getElementById("EmailAddress").value = "";
  document.getElementById("city").value = "";
  document.getElementById("UserPass").value = "";

  document.getElementById("dataCard").classList.add("divshow");
  document.getElementById("dataCard").classList.remove("divsHide");
}
