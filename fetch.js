let JOKEAPI = document.getElementById("JOKEAPI");
let responseText = document.getElementsByClassName("apiResponse")[0];
JOKEAPI.addEventListener("click", function () {
  document.getElementsByClassName("apiSource")[0].innerHTML = "JOKE API";
  fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
    .then((response) => response.json())
    .then((data) => (responseText.innerHTML = data.joke));
});
let KanyeAPI = document.getElementById("KanyeAPI");
KanyeAPI.addEventListener("click", function () {
  document.getElementsByClassName("apiSource")[0].innerHTML = "Kanye API";
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => (responseText.innerHTML = data.quote));
});
let UniAPI = document.getElementById("UniAPI");
UniAPI.addEventListener("click", function () {
  document.getElementsByClassName("apiSource")[0].innerHTML =
    "Universities API";
  fetch("http://universities.hipolabs.com/search?country=Hong+Kong")
    .then((response) => response.json())
    .then((data) => {
      responseText.innerHTML = "";
      data.map((obj) => {
        let p = document.createElement("p");
        p.innerHTML = obj.name;
        responseText.append(p);
      });
    });
});
