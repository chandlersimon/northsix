// Using open weather api get current weather of a city
let cityname = document.querySelector(".city.one").innerText;
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
	document.querySelector(".city.one").innerText = name;
  	document.querySelector(".icon-text.one").innerText = icon;
	document.querySelector(".temp.one").innerText = Math.round(temp) + "°F";}
};
weather.fetchWeather(cityname);

// Set icon image based on text code provided by api call
const container = document.querySelector(".icon-text.one");

setTimeout(function(){
if (container.textContent.includes('01')) {
  $('.weathericon.one').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c33a0821c857e_01d.svg")'});}
else if (container.textContent.includes('02')) {
  $('.weathericon.one').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b91c10889faf5f144_02d.svg")'});}
else if (container.textContent.includes('03')) {
  $('.weathericon.one').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66a06b3b32e62_03d.svg")'});}
else if (container.textContent.includes('04')) {
  $('.weathericon.one').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b2d21bf79db6f07d5_04d.svg")'});}
else if (container.textContent.includes('09')) {
  $('.weathericon.one').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66abaf4b32e63_09d.svg")'});}
else if (container.textContent.includes('10')) {
  $('.weathericon.one').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b0a9bfbcab616ee99_10d.svg")'});}
else if (container.textContent.includes('11')) {
  $('.weathericon.one').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c3316391c8583_11d.svg")'});}
else if (container.textContent.includes('13')) {
  $('.weathericon.one').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bc2908b82a0f6fbef_13d.svg")'});}
else if (container.textContent.includes('50')) {
  $('.weathericon.one').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b996320facb0770fe_50d.svg")'});}
  else {}
}, 500);

// _____________________________________________________________________________________ //


// Using open weather api get current weather of a city
let cityname2 = document.querySelector(".city.two").innerText;
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
	document.querySelector(".city.two").innerText = name;
  	document.querySelector(".icon-text.two").innerText = icon;
	document.querySelector(".temp.two").innerText = Math.round(temp) + "°F";},
};
weather2.fetchWeather(cityname2);

// Set icon image based on text code provided by api call
const container2 = document.querySelector(".icon-text.two");

setTimeout(function(){
if (container2.textContent.includes('01')) {
  $('.weathericon.two').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c33a0821c857e_01d.svg")'});}
else if (container2.textContent.includes('02')) {
  $('.weathericon.two').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b91c10889faf5f144_02d.svg")'});}
else if (container2.textContent.includes('03')) {
  $('.weathericon.two').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66a06b3b32e62_03d.svg")'});}
else if (container2.textContent.includes('04')) {
  $('.weathericon.two').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b2d21bf79db6f07d5_04d.svg")'});}
else if (container2.textContent.includes('09')) {
  $('.weathericon.two').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66abaf4b32e63_09d.svg")'});}
else if (container2.textContent.includes('10')) {
  $('.weathericon.two').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b0a9bfbcab616ee99_10d.svg")'});}
else if (container2.textContent.includes('11')) {
  $('.weathericon.two').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c3316391c8583_11d.svg")'});}
else if (container2.textContent.includes('13')) {
  $('.weathericon.two').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bc2908b82a0f6fbef_13d.svg")'});}
else if (container2.textContent.includes('50')) {
  $('.weathericon.two').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b996320facb0770fe_50d.svg")'});}
  else {}
}, 500);

// _____________________________________________________________________________________ //


// Using open weather api get current weather of a city
let cityname3 = document.querySelector(".city.three").innerText;
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
	document.querySelector(".city.three").innerText = name;
  	document.querySelector(".icon-text.three").innerText = icon;
	document.querySelector(".temp.three").innerText = Math.round(temp) + "°F";},
};
weather3.fetchWeather(cityname3);

// Set icon image based on text code provided by api call
const container3 = document.querySelector(".icon-text.three");

setTimeout(function(){
if (container3.textContent.includes('01')) {
  $('.weathericon.three').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c33a0821c857e_01d.svg")'});}
else if (container3.textContent.includes('02')) {
  $('.weathericon.three').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b91c10889faf5f144_02d.svg")'});}
else if (container3.textContent.includes('03')) {
  $('.weathericon.three').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66a06b3b32e62_03d.svg")'});}
else if (container3.textContent.includes('04')) {
  $('.weathericon.three').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b2d21bf79db6f07d5_04d.svg")'});}
else if (container3.textContent.includes('09')) {
  $('.weathericon.three').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66abaf4b32e63_09d.svg")'});}
else if (container3.textContent.includes('10')) {
  $('.weathericon.three').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b0a9bfbcab616ee99_10d.svg")'});}
else if (container3.textContent.includes('11')) {
  $('.weathericon.three').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c3316391c8583_11d.svg")'});}
else if (container3.textContent.includes('13')) {
  $('.weathericon.three').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bc2908b82a0f6fbef_13d.svg")'});}
else if (container3.textContent.includes('50')) {
  $('.weathericon.three').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b996320facb0770fe_50d.svg")'});}
  else {}
}, 500);

// _____________________________________________________________________________________ //


// Using open weather api get current weather of a city
let cityname4 = document.querySelector(".city.four").innerText;
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
	document.querySelector(".city.four").innerText = name;
  	document.querySelector(".icon-text.four").innerText = icon;
	document.querySelector(".temp.four").innerText = Math.round(temp) + "°F";},
};
weather4.fetchWeather(cityname4);

// Set icon image based on text code provided by api call
const container4 = document.querySelector(".icon-text.four");

setTimeout(function(){
if (container4.textContent.includes('01')) {
  $('.weathericon.four').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c33a0821c857e_01d.svg")'});}
else if (container4.textContent.includes('02')) {
  $('.weathericon.four').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b91c10889faf5f144_02d.svg")'});}
else if (container4.textContent.includes('03')) {
  $('.weathericon.four').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66a06b3b32e62_03d.svg")'});}
else if (container4.textContent.includes('04')) {
  $('.weathericon.four').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b2d21bf79db6f07d5_04d.svg")'});}
else if (container4.textContent.includes('09')) {
  $('.weathericon.four').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66abaf4b32e63_09d.svg")'});}
else if (container4.textContent.includes('10')) {
  $('.weathericon.four').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b0a9bfbcab616ee99_10d.svg")'});}
else if (container4.textContent.includes('11')) {
  $('.weathericon.four').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c3316391c8583_11d.svg")'});}
else if (container4.textContent.includes('13')) {
  $('.weathericon.four').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bc2908b82a0f6fbef_13d.svg")'});}
else if (container4.textContent.includes('50')) {
  $('.weathericon.four').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b996320facb0770fe_50d.svg")'});}
  else {}
}, 500);

// _____________________________________________________________________________________ //


// Using open weather api get current weather of a city
let cityname5 = document.querySelector(".city.five").innerText;
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
	document.querySelector(".city.five").innerText = name;
 	document.querySelector(".icon-text.five").innerText = icon;
	document.querySelector(".temp.five").innerText = Math.round(temp) + "°F";},
};
weather5.fetchWeather(cityname5);

// Set icon image based on text code provided by api call
const container5 = document.querySelector(".icon-text.five");

setTimeout(function(){
if (container5.textContent.includes('01')) {
  $('.weathericon.five').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c33a0821c857e_01d.svg")'});}
else if (container5.textContent.includes('02')) {
  $('.weathericon.five').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b91c10889faf5f144_02d.svg")'});}
else if (container5.textContent.includes('03')) {
  $('.weathericon.five').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66a06b3b32e62_03d.svg")'});}
else if (container5.textContent.includes('04')) {
  $('.weathericon.five').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b2d21bf79db6f07d5_04d.svg")'});}
else if (container5.textContent.includes('09')) {
  $('.weathericon.five').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66abaf4b32e63_09d.svg")'});}
else if (container5.textContent.includes('10')) {
  $('.weathericon.five').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b0a9bfbcab616ee99_10d.svg")'});}
else if (container5.textContent.includes('11')) {
  $('.weathericon.five').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c3316391c8583_11d.svg")'});}
else if (container5.textContent.includes('13')) {
  $('.weathericon.five').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bc2908b82a0f6fbef_13d.svg")'});}
else if (container5.textContent.includes('50')) {
  $('.weathericon.five').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b996320facb0770fe_50d.svg")'});}
  else {}
}, 500);

// _____________________________________________________________________________________ //


// Using open weather api get current weather of a city
let cityname6 = document.querySelector(".city.six").innerText;
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
	document.querySelector(".city.six").innerText = name;
  	document.querySelector(".icon-text.six").innerText = icon;
	document.querySelector(".temp.six").innerText = Math.round(temp) + "°F";},
};
weather6.fetchWeather(cityname6);

// Set icon image based on text code provided by api call
const container6 = document.querySelector(".icon-text.six");

setTimeout(function(){
if (container6.textContent.includes('01')) {
  $('.weathericon.six').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c33a0821c857e_01d.svg")'});}
else if (container6.textContent.includes('02')) {
  $('.weathericon.six').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b91c10889faf5f144_02d.svg")'});}
else if (container6.textContent.includes('03')) {
  $('.weathericon.six').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66a06b3b32e62_03d.svg")'});}
else if (container6.textContent.includes('04')) {
  $('.weathericon.six').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b2d21bf79db6f07d5_04d.svg")'});}
else if (container6.textContent.includes('09')) {
  $('.weathericon.six').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66abaf4b32e63_09d.svg")'});}
else if (container6.textContent.includes('10')) {
  $('.weathericon.six').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b0a9bfbcab616ee99_10d.svg")'});}
else if (container6.textContent.includes('11')) {
  $('.weathericon.six').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c3316391c8583_11d.svg")'});}
else if (container6.textContent.includes('13')) {
  $('.weathericon.six').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bc2908b82a0f6fbef_13d.svg")'});}
else if (container6.textContent.includes('50')) {
  $('.weathericon.six').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b996320facb0770fe_50d.svg")'});}
  else {}
}, 500);

// _____________________________________________________________________________________ //


// Using open weather api get current weather of a city
let cityname7 = document.querySelector(".city.seven").innerText;
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
	document.querySelector(".city.seven").innerText = name;
  document.querySelector(".icon-text.seven").innerText = icon;
	document.querySelector(".temp.seven").innerText = Math.round(temp) + "°F";},
};
weather7.fetchWeather(cityname7);

// Set icon image based on text code provided by api call
const container7 = document.querySelector(".icon-text.seven");

setTimeout(function(){
if (container7.textContent.includes('01')) {
  $('.weathericon.seven').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c33a0821c857e_01d.svg")'});}
else if (container7.textContent.includes('02')) {
  $(',weathericon.seven').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b91c10889faf5f144_02d.svg")'});}
else if (container7.textContent.includes('03')) {
  $('.weathericon.seven').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66a06b3b32e62_03d.svg")'});}
else if (container7.textContent.includes('04')) {
  $('.weathericon.seven').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b2d21bf79db6f07d5_04d.svg")'});}
else if (container7.textContent.includes('09')) {
  $('.weathericon.seven').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66abaf4b32e63_09d.svg")'});}
else if (container7.textContent.includes('10')) {
  $('.weathericon.seven').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b0a9bfbcab616ee99_10d.svg")'});}
else if (container7.textContent.includes('11')) {
  $('.weathericon.seven').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c3316391c8583_11d.svg")'});}
else if (container7.textContent.includes('13')) {
  $('.weathericon.seven').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bc2908b82a0f6fbef_13d.svg")'});}
else if (container7.textContent.includes('50')) {
  $('.weathericon.seven').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b996320facb0770fe_50d.svg")'});}
  else {}
}, 500);

// _____________________________________________________________________________________ //


// Using open weather api get current weather of a city
let cityname8 = document.querySelector(".city.eight").innerText;
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
	document.querySelector(".city.eight").innerText = name;
  document.querySelector(".icon-text.eight").innerText = icon;
	document.querySelector(".temp.eight").innerText = Math.round(temp) + "°F";},
};
weather8.fetchWeather(cityname8);

// Set icon image based on text code provided by api call
const container8 = document.querySelector(".icon-text.eight");

setTimeout(function(){
if (container8.textContent.includes('01')) {
  $('.weathericon.eight').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c33a0821c857e_01d.svg")'});}
else if (container8.textContent.includes('02')) {
  $('.weathericon.eight').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b91c10889faf5f144_02d.svg")'});}
else if (container2.textContent.includes('03')) {
  $('.weathericon.eight').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66a06b3b32e62_03d.svg")'});}
else if (container8.textContent.includes('04')) {
  $('.weathericon.eight').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b2d21bf79db6f07d5_04d.svg")'});}
else if (container8.textContent.includes('09')) {
  $('.weathericon.eight').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bfca66abaf4b32e63_09d.svg")'});}
else if (container8.textContent.includes('10')) {
  $('.weathericon.eight').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b0a9bfbcab616ee99_10d.svg")'});}
else if (container8.textContent.includes('11')) {
  $('.weathericon.eight').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b186c3316391c8583_11d.svg")'});}
else if (container8.textContent.includes('13')) {
  $('.weathericon.eight').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26bc2908b82a0f6fbef_13d.svg")'});}
else if (container8.textContent.includes('50')) {
  $('.weathericon.eight').css({'background-image':'url("https://uploads-ssl.webflow.com/636e84d78fa46833fa0ce543/6388c26b996320facb0770fe_50d.svg")'});}
  else {}
}, 500);
