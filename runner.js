const cookies = require('./cookies')

let cookie = new cookies.Cookie();
let chocolateCookie = new cookies.ChocolateCookie();
let almondCookie = new cookies.AlmondCookie();
let kurabieCookie = new cookies.KurabieCookie();
let cookieOven = new cookies.Oven();


let doughCookies = cookieOven.makeDoughCookies(cookies.AlmondCookie, 3);
console.log(doughCookies);
console.log(cookieOven.makeCookies(doughCookies, 40));


