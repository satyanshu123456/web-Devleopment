document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();

    const dob =document.getElementById("DOB").value;
    const curDate = document.getElementById("CurrentDate").vcalue;
    console.log(dob);
    console.log(CurDate);

    const Age = Number(curDate.split("-"[0])) - Number(dob.split("-")[0]);

    document.getElementById("DOB").value = "";
    document.getElementById("CurrentDate")
})