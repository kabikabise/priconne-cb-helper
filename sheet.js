function init() {
          Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vTOAib0Cy9PAsvgepC5q_gk4PiQpAVV8mm7cEIRak0IcBU4UUk34o6KSmnYeZ8TQWWVe6PubRaC6wQ0/pub?output=csv', {
          download: true,
          header: true,
          complete: function(results) {
            var data = results.data
            console.log(data)
          }
        })
window.addEventListener('DOMContentLoaded', init)
