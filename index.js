const url = "https://api.openweathermap.org/data/2.5/weather?units=metric"
const apiKey = "895c7dfc2e4b56c8ab309e70cee874ce"
// const lat = document.getElementById("lat")

const lon = document.getElementById("lon");
const button = document.getElementById("btn");




// // let latValue
// // let lonValue
// // button.addEventListener("click", () => {
// // let a = "https://api.openweathermap.org/data/2.5/fwi?lat={latValue}&lon={lonValue}&appid={}"
// // latValue = 22.657402
// // lonValue = 88.867180

// // console.log(a)



async function nam(cityName) {

  let val = await fetch(url + `&q=${cityName}&appid=${apiKey}`)
  let va = await val.json();
  // const current = new Date().toISOString()
  const current = new Date().toLocaleString()
  console.log(current)

  // const datt =  current.toLocaleString()

  // did.innerHTML = json.stingify();
  // console.log( va.main)
  console.log(va)


  document.querySelector(".h2").innerHTML = `temperature  : ${va.main.temp} °C`;
  document.getElementById("wind").innerHTML = `<h2> feels like : ${va.main.feels_like} °C </h2>`;
  document.getElementById("cloud").innerHTML = `<h2>city name : ${va.name}</h2>`;
  document.getElementById("des").innerHTML = `<h2> weather description : ${va.weather[0].description}</h2>`;
  let dat = document.getElementById("date");


  dat.innerHTML = `date :  ${current}`

  console.log(datt)


}
button.addEventListener("click", () => {
  let vall = lon.value;

  nam(vall)
  lon.value = "";
})



// })



// let arr=[1,2,3,4,5]
// arr = arr = 'asim'

// // for(let i = 0 ;i < arr.length;i++){
// //   arr[i] = "";
// // }

// console.log(arr)
