const input = document.querySelector("#input");
const city = document.querySelector("#city");

const cityName = document.querySelector("#cityName");
const Temp = document.querySelector("#temp");
const main = document.querySelector("#main");
const discription = document.querySelector("#discription");
const image = document.querySelector("#image");

input.onsubmit = (e) => {
  e.preventDefault();
  weatherUpdate(city.value);
  city.value = "";
};

weatherUpdate = (city) => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=51c7dd66d6519f2fac36d671132f039d`);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 404) {
      alert("Place not found");
    } else {
      var data = JSON.parse(xhr.response);
      cityName.innerHTML = data.name;
      Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
      main.innerHTML = data.weather[0].main;
      discription.innerHTML = data.weather[0].description;
      image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
  };
};

weatherUpdate("Oulu");

var citiesByState = {
  Finland: ["Oulu","Helsinki","Rovaniemi"],
  Sweden: ["Gothenburg","Uppsala","Stockholm"],
  Russia: ["Moscow","Kazan"]
  }
  function makeSubmenu(value) {
  if(value.length==0) document.getElementById("citySelect").innerHTML = "<option></option>";
  else {
  var citiesOptions = "";
  for(cityId in citiesByState[value]) {
  citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
  }
  document.getElementById("citySelect").innerHTML = citiesOptions;
  }
  }
  function displaySelected() { 
  var city = document.getElementById("citySelect").value;
  weatherUpdate(city);
  }
  function resetSelection() {
  document.getElementById("countrySelect").selectedIndex = 0;
  document.getElementById("citySelect").selectedIndex = 0;
  }
  