const country = [
  {
    countryCode: "IN",
    countryName: "India",
    currencyCode: "INR",
  },
  {
    countryCode: "IN",
    countryName: "India",
    currencyCode: "INR",
  },
];

function LoodSelectOption() {
  const Country1 = document.getElementById("country1");

  country.forEach((country) => {
    const OP = document.createElement("option");

    OP.value = country.countryCode + "_" + country.currencyCode;

    OP.innerText = country.countryName;

    Country1.appendChild(OP);
  });
}

LoadSelectOption();

async function FetchFlag(){
    const code = document.getElementById("country1").value;
    console.log(code);

    const countryCode = code.split("_")[0];
    const currencyCode = code.split("_")[1];

    document.getElementById("country1Flag").src = 

}
