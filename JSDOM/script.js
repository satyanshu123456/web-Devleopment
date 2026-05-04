function Submit() {
  console.log("Submit Button Clicked");
  const fn = document.getElementById("FullName").value;
  console.log(fn);

  document.getElementById("myData").innerText = fn;
  document.getElementById("myData2").innerText = fn;
  document.getElementById("FullName").value = "";

  document.getElementById("dataCard").classList.add("divshow");
  document.getElementById("dataCard").classList.remove("divsHide");
}
