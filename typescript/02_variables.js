// We can also let TypeScript infer our types
var cityName = "Boston";
var price = 33.12;
console.log(cityName + " " + price);
// The following code will fail in TypeScript
price = "Thirty dollars and 22 cents";
