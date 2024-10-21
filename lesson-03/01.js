const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
  return colors
    .filter(
      (elem) => elem === "черный" || elem === "красный" || elem === "желтый"
    )
    .join("-");
}

console.log(createColorString());
