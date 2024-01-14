function CelsiusToFohrenheit(celsius) {
    let fohrenheit=(celsius*1.8)+32;
    return fohrenheit;
}
let celsius =39;
let fohrenheit = CelsiusToFohrenheit(celsius);
console.log(fohrenheit);