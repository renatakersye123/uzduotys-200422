//PIRMA

let countries = []; 

class Country {
  constructor(population, area, name) {
    this.name = name;
    this.population = population;
    this.area = area;
  }
    getAreaPerCapita() {
      return (this.area * 1000/this.population);
    }
  }

countries.push(new Country(10264797, 92212, "Portugalija"));
countries.push(new Country(126045211, 377915, "Japonija"));
countries.push(new Country(10766564, 48442, "Dominikos Respublika"));
countries.push(new Country(56877529, 945087, "Tanzanija"));
countries.push(new Country(321857, 103000, "Islandija"));

countries.forEach(country => console.log("Šalis: " + country.name + ", joje gyvena " + country.population + " mln. gyventojų. Valstybės plotas: " + country.area + " km², plotas tenkantis vienam gyventojui: " + country.getAreaPerCapita() + " m²"));


//ANTRA
/*
let arr1 = [5,3];
let arr2 = [1,4];
let arr3 = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen"];
let arr4 = ["Theon Greyjoy", "Tyrion Lannister", "Arya Stark"]

let arrNumbers = arr1.concat(arr2);
let arrNames = arr3.concat(arr4);

arrNumbers.sort();
arrNames.sort();

console.log (arrNumbers);
console.log (arrNames);
*/


//TRECIA
/*
var a ;
var b ;

a = Number(prompt("a reiksme"));
b = Number(prompt("b reiksme"));

switch(a + b < 4){
        case true:
            console.log('right');
            break;
        case false:
            console.log('not right');
    }
*/


//KETVIRTA PAPILDOMA
/*
var n;
var isSquare = false;
var isRectangle = false;
var isTriangle = false;

n = Number(prompt("degtuku skaicius"));

if(n % 4 == 0 && n!=0) {
  isSquare = true;
  isRectangle = true;
}

else if (n % 2 == 0 && n>4) {  
    isRectangle = true; 
}

if (n % 3 == 0) { 
 isTriangle = true;
}

console.log("Kvadratas: " + isSquare);
console.log("Staciakampis: " + isRectangle);
console.log("Trikampis: " + isTriangle);
*/