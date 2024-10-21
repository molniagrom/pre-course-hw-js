const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

const foundOrange = words.indexOf("апельсин");

if (foundOrange !== -1){
  console.log("Ура! нашел");
} else{
  console.log("Придется поискать в другом магазине…");
}