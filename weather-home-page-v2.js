// Using open weather api get current weather of a city
let cityname = document.querySelector("#city").innerText;
let weather = {
"apiKey": "0c69eaf9c23457f8515a2463dfad3913",
fetchWeather: function (city) {
fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid="+this.apiKey)  
	.then((response) => response.json())
	.then((data) => this.displayWeather(data));
},
displayWeather: function(data) {
	const {name} = data;
  const {icon} = data.weather[0];
	const {temp} = data.main;
	document.querySelector("#city").innerText = name;
  document.querySelector("#icon-text").innerText = icon;
	document.querySelector("#temp").innerText = Math.round(temp) + "°F";},
};
weather.fetchWeather(cityname);

// Set icon image based on text code provided by api call
const container = document.getElementById('icon-text');

setTimeout(function(){
if (container.textContent.includes('01')) {
  $('#weathericon').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c33a0821c857e_01d.svg")'});}
else if (container.textContent.includes('02')) {
  $('#weathericon').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b91c10889faf5f144_02d.svg")'});}
else if (container.textContent.includes('03')) {
  $('#weathericon').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66a06b3b32e62_03d.svg")'});}
else if (container.textContent.includes('04')) {
  $('#weathericon').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b2d21bf79db6f07d5_04d.svg")'});}
else if (container.textContent.includes('09')) {
  $('#weathericon').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66abaf4b32e63_09d.svg")'});}
else if (container.textContent.includes('10')) {
  $('#weathericon').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b0a9bfbcab616ee99_10d.svg")'});}
else if (container.textContent.includes('11')) {
  $('#weathericon').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c3316391c8583_11d.svg")'});}
else if (container.textContent.includes('13')) {
  $('#weathericon').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bc2908b82a0f6fbef_13d.svg")'});}
else if (container.textContent.includes('50')) {
  $('#weathericon').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b996320facb0770fe_50d.svg")'});}
  else {}
}, 500);

// _____________________________________________________________________________________ //


// Using open weather api get current weather of a city
let cityname2 = document.querySelector("#city2").innerText;
let weather2 = {
"apiKey": "0c69eaf9c23457f8515a2463dfad3913",
fetchWeather: function (city2) {
fetch("https://api.openweathermap.org/data/2.5/weather?q="+city2+"&units=imperial&appid="+this.apiKey)  
	.then((response) => response.json())
	.then((data) => this.displayWeather(data));
},
displayWeather: function(data2) {
	const {name} = data2;
  const {icon} = data2.weather[0];
	const {temp} = data2.main;
	document.querySelector("#city2").innerText = name;
  document.querySelector("#icon-text2").innerText = icon;
	document.querySelector("#temp2").innerText = Math.round(temp) + "°F";},
};
weather2.fetchWeather(cityname2);

// Set icon image based on text code provided by api call
const container2 = document.getElementById('icon-text2');

setTimeout(function(){
if (container2.textContent.includes('01')) {
  $('#weathericon2').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c33a0821c857e_01d.svg")'});}
else if (container2.textContent.includes('02')) {
  $('#weathericon2').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b91c10889faf5f144_02d.svg")'});}
else if (container2.textContent.includes('03')) {
  $('#weathericon2').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66a06b3b32e62_03d.svg")'});}
else if (container2.textContent.includes('04')) {
  $('#weathericon2').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b2d21bf79db6f07d5_04d.svg")'});}
else if (container2.textContent.includes('09')) {
  $('#weathericon2').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66abaf4b32e63_09d.svg")'});}
else if (container2.textContent.includes('10')) {
  $('#weathericon2').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b0a9bfbcab616ee99_10d.svg")'});}
else if (container2.textContent.includes('11')) {
  $('#weathericon2').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c3316391c8583_11d.svg")'});}
else if (container2.textContent.includes('13')) {
  $('#weathericon2').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bc2908b82a0f6fbef_13d.svg")'});}
else if (container2.textContent.includes('50')) {
  $('#weathericon2').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b996320facb0770fe_50d.svg")'});}
  else {}
}, 500);

// _____________________________________________________________________________________ //


// Using open weather api get current weather of a city
let cityname3 = document.querySelector("#city3").innerText;
let weather3 = {
"apiKey": "0c69eaf9c23457f8515a2463dfad3913",
fetchWeather: function (city3) {
fetch("https://api.openweathermap.org/data/2.5/weather?q="+city3+"&units=imperial&appid="+this.apiKey)  
	.then((response) => response.json())
	.then((data) => this.displayWeather(data));
},
displayWeather: function(data3) {
	const {name} = data3;
  const {icon} = data3.weather[0];
	const {temp} = data3.main;
	document.querySelector("#city3").innerText = name;
  document.querySelector("#icon-text3").innerText = icon;
	document.querySelector("#temp3").innerText = Math.round(temp) + "°F";},
};
weather3.fetchWeather(cityname3);

// Set icon image based on text code provided by api call
const container3 = document.getElementById('icon-text3');

setTimeout(function(){
if (container3.textContent.includes('01')) {
  $('#weathericon3').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c33a0821c857e_01d.svg")'});}
else if (container3.textContent.includes('02')) {
  $('#weathericon3').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b91c10889faf5f144_02d.svg")'});}
else if (container3.textContent.includes('03')) {
  $('#weathericon3').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66a06b3b32e62_03d.svg")'});}
else if (container3.textContent.includes('04')) {
  $('#weathericon3').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b2d21bf79db6f07d5_04d.svg")'});}
else if (container3.textContent.includes('09')) {
  $('#weathericon3').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66abaf4b32e63_09d.svg")'});}
else if (container3.textContent.includes('10')) {
  $('#weathericon3').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b0a9bfbcab616ee99_10d.svg")'});}
else if (container3.textContent.includes('11')) {
  $('#weathericon3').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c3316391c8583_11d.svg")'});}
else if (container3.textContent.includes('13')) {
  $('#weathericon3').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bc2908b82a0f6fbef_13d.svg")'});}
else if (container3.textContent.includes('50')) {
  $('#weathericon3').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b996320facb0770fe_50d.svg")'});}
  else {}
}, 500);

// _____________________________________________________________________________________ //


// Using open weather api get current weather of a city
let cityname4 = document.querySelector("#city4").innerText;
let weather4 = {
"apiKey": "0c69eaf9c23457f8515a2463dfad3913",
fetchWeather: function (city4) {
fetch("https://api.openweathermap.org/data/2.5/weather?q="+city4+"&units=imperial&appid="+this.apiKey)  
	.then((response) => response.json())
	.then((data) => this.displayWeather(data));
},
displayWeather: function(data4) {
	const {name} = data4;
  const {icon} = data4.weather[0];
	const {temp} = data4.main;
	document.querySelector("#city4").innerText = name;
  document.querySelector("#icon-text4").innerText = icon;
	document.querySelector("#temp4").innerText = Math.round(temp) + "°F";},
};
weather4.fetchWeather(cityname4);

// Set icon image based on text code provided by api call
const container4 = document.getElementById('icon-text4');

setTimeout(function(){
if (container4.textContent.includes('01')) {
  $('#weathericon4').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c33a0821c857e_01d.svg")'});}
else if (container4.textContent.includes('02')) {
  $('#weathericon4').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b91c10889faf5f144_02d.svg")'});}
else if (container4.textContent.includes('03')) {
  $('#weathericon4').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66a06b3b32e62_03d.svg")'});}
else if (container4.textContent.includes('04')) {
  $('#weathericon4').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b2d21bf79db6f07d5_04d.svg")'});}
else if (container4.textContent.includes('09')) {
  $('#weathericon4').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66abaf4b32e63_09d.svg")'});}
else if (container4.textContent.includes('10')) {
  $('#weathericon4').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b0a9bfbcab616ee99_10d.svg")'});}
else if (container4.textContent.includes('11')) {
  $('#weathericon4').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c3316391c8583_11d.svg")'});}
else if (container4.textContent.includes('13')) {
  $('#weathericon4').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bc2908b82a0f6fbef_13d.svg")'});}
else if (container4.textContent.includes('50')) {
  $('#weathericon4').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b996320facb0770fe_50d.svg")'});}
  else {}
}, 500);

// _____________________________________________________________________________________ //


// Using open weather api get current weather of a city
let cityname5 = document.querySelector("#city5").innerText;
let weather5 = {
"apiKey": "0c69eaf9c23457f8515a2463dfad3913",
fetchWeather: function (city5) {
fetch("https://api.openweathermap.org/data/2.5/weather?q="+city5+"&units=imperial&appid="+this.apiKey)  
	.then((response) => response.json())
	.then((data) => this.displayWeather(data));
},
displayWeather: function(data5) {
	const {name} = data5;
  const {icon} = data5.weather[0];
	const {temp} = data5.main;
	document.querySelector("#city5").innerText = name;
  document.querySelector("#icon-text5").innerText = icon;
	document.querySelector("#temp5").innerText = Math.round(temp) + "°F";},
};
weather5.fetchWeather(cityname5);

// Set icon image based on text code provided by api call
const container5 = document.getElementById('icon-text5');

setTimeout(function(){
if (container5.textContent.includes('01')) {
  $('#weathericon5').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c33a0821c857e_01d.svg")'});}
else if (container5.textContent.includes('02')) {
  $('#weathericon5').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b91c10889faf5f144_02d.svg")'});}
else if (container5.textContent.includes('03')) {
  $('#weathericon5').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66a06b3b32e62_03d.svg")'});}
else if (container5.textContent.includes('04')) {
  $('#weathericon5').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b2d21bf79db6f07d5_04d.svg")'});}
else if (container5.textContent.includes('09')) {
  $('#weathericon5').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66abaf4b32e63_09d.svg")'});}
else if (container5.textContent.includes('10')) {
  $('#weathericon5').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b0a9bfbcab616ee99_10d.svg")'});}
else if (container5.textContent.includes('11')) {
  $('#weathericon5').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c3316391c8583_11d.svg")'});}
else if (container5.textContent.includes('13')) {
  $('#weathericon5').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bc2908b82a0f6fbef_13d.svg")'});}
else if (container5.textContent.includes('50')) {
  $('#weathericon5').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b996320facb0770fe_50d.svg")'});}
  else {}
}, 500);

// _____________________________________________________________________________________ //


// Using open weather api get current weather of a city
let cityname6 = document.querySelector("#city6").innerText;
let weather6 = {
"apiKey": "0c69eaf9c23457f8515a2463dfad3913",
fetchWeather: function (city6) {
fetch("https://api.openweathermap.org/data/2.5/weather?q="+city6+"&units=imperial&appid="+this.apiKey)  
	.then((response) => response.json())
	.then((data) => this.displayWeather(data));
},
displayWeather: function(data6) {
	const {name} = data6;
  const {icon} = data6.weather[0];
	const {temp} = data6.main;
	document.querySelector("#city6").innerText = name;
  document.querySelector("#icon-text6").innerText = icon;
	document.querySelector("#temp6").innerText = Math.round(temp) + "°F";},
};
weather6.fetchWeather(cityname6);

// Set icon image based on text code provided by api call
const container6 = document.getElementById('icon-text6');

setTimeout(function(){
if (container6.textContent.includes('01')) {
  $('#weathericon6').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c33a0821c857e_01d.svg")'});}
else if (container6.textContent.includes('02')) {
  $('#weathericon6').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b91c10889faf5f144_02d.svg")'});}
else if (container6.textContent.includes('03')) {
  $('#weathericon6').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66a06b3b32e62_03d.svg")'});}
else if (container6.textContent.includes('04')) {
  $('#weathericon6').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b2d21bf79db6f07d5_04d.svg")'});}
else if (container6.textContent.includes('09')) {
  $('#weathericon6').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66abaf4b32e63_09d.svg")'});}
else if (container6.textContent.includes('10')) {
  $('#weathericon6').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b0a9bfbcab616ee99_10d.svg")'});}
else if (container6.textContent.includes('11')) {
  $('#weathericon6').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c3316391c8583_11d.svg")'});}
else if (container6.textContent.includes('13')) {
  $('#weathericon6').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bc2908b82a0f6fbef_13d.svg")'});}
else if (container6.textContent.includes('50')) {
  $('#weathericon6').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b996320facb0770fe_50d.svg")'});}
  else {}
}, 500);

// _____________________________________________________________________________________ //


// Using open weather api get current weather of a city
let cityname7 = document.querySelector("#city7").innerText;
let weather7 = {
"apiKey": "0c69eaf9c23457f8515a2463dfad3913",
fetchWeather: function (city7) {
fetch("https://api.openweathermap.org/data/2.5/weather?q="+city7+"&units=imperial&appid="+this.apiKey)  
	.then((response) => response.json())
	.then((data) => this.displayWeather(data));
},
displayWeather: function(data7) {
	const {name} = data7;
  const {icon} = data7.weather[0];
	const {temp} = data7.main;
	document.querySelector("#city7").innerText = name;
  document.querySelector("#icon-text7").innerText = icon;
	document.querySelector("#temp7").innerText = Math.round(temp) + "°F";},
};
weather7.fetchWeather(cityname7);

// Set icon image based on text code provided by api call
const container7 = document.getElementById('icon-text7');

setTimeout(function(){
if (container7.textContent.includes('01')) {
  $('#weathericon7').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c33a0821c857e_01d.svg")'});}
else if (container7.textContent.includes('02')) {
  $('#weathericon7').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b91c10889faf5f144_02d.svg")'});}
else if (container7.textContent.includes('03')) {
  $('#weathericon7').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66a06b3b32e62_03d.svg")'});}
else if (container7.textContent.includes('04')) {
  $('#weathericon7').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b2d21bf79db6f07d5_04d.svg")'});}
else if (container7.textContent.includes('09')) {
  $('#weathericon7').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66abaf4b32e63_09d.svg")'});}
else if (container7.textContent.includes('10')) {
  $('#weathericon7').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b0a9bfbcab616ee99_10d.svg")'});}
else if (container7.textContent.includes('11')) {
  $('#weathericon7').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c3316391c8583_11d.svg")'});}
else if (container7.textContent.includes('13')) {
  $('#weathericon7').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bc2908b82a0f6fbef_13d.svg")'});}
else if (container7.textContent.includes('50')) {
  $('#weathericon7').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b996320facb0770fe_50d.svg")'});}
  else {}
}, 500);

// _____________________________________________________________________________________ //


// Using open weather api get current weather of a city
let cityname8 = document.querySelector("#city8").innerText;
let weather8 = {
"apiKey": "0c69eaf9c23457f8515a2463dfad3913",
fetchWeather: function (city8) {
fetch("https://api.openweathermap.org/data/2.5/weather?q="+city8+"&units=imperial&appid="+this.apiKey)  
	.then((response) => response.json())
	.then((data) => this.displayWeather(data));
},
displayWeather: function(data8) {
	const {name} = data8;
  const {icon} = data8.weather[0];
	const {temp} = data8.main;
	document.querySelector("#city8").innerText = name;
  document.querySelector("#icon-text8").innerText = icon;
	document.querySelector("#temp8").innerText = Math.round(temp) + "°F";},
};
weather8.fetchWeather(cityname8);

// Set icon image based on text code provided by api call
const container8 = document.getElementById('icon-text8');

setTimeout(function(){
if (container8.textContent.includes('01')) {
  $('#weathericon8').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c33a0821c857e_01d.svg")'});}
else if (container8.textContent.includes('02')) {
  $('#weathericon8').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b91c10889faf5f144_02d.svg")'});}
else if (container2.textContent.includes('03')) {
  $('#weathericon8').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66a06b3b32e62_03d.svg")'});}
else if (container8.textContent.includes('04')) {
  $('#weathericon8').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b2d21bf79db6f07d5_04d.svg")'});}
else if (container8.textContent.includes('09')) {
  $('#weathericon8').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66abaf4b32e63_09d.svg")'});}
else if (container8.textContent.includes('10')) {
  $('#weathericon8').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b0a9bfbcab616ee99_10d.svg")'});}
else if (container8.textContent.includes('11')) {
  $('#weathericon8').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c3316391c8583_11d.svg")'});}
else if (container8.textContent.includes('13')) {
  $('#weathericon8').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bc2908b82a0f6fbef_13d.svg")'});}
else if (container8.textContent.includes('50')) {
  $('#weathericon8').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b996320facb0770fe_50d.svg")'});}
  else {}
}, 500);
