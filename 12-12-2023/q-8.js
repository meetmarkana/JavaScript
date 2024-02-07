// °C = (°F - 32) × 5/9

let c , f
function toCelsius(f){
    c = (f - 32) * (5 / 9)
    return c
}
console.log(toCelsius(150))