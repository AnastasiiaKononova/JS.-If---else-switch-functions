
const num1 = Number(prompt('Введите первое число'));
const num2 = Number(prompt('Введите второе число'));
if ((num1+num2) %5 === 0) {
    alert('Сумма кратна 5');
} else {
    alert('Сумма не кратна 5');
}

function calcAreaSquare(side) {
  return side * side;
}

let side = 7;
let area = calcAreaSquare(side)
console.log(area)

function showMenu() {
  let choice = prompt("1 - Чай\n2 - Кофе\n3 - Сок\n4 - Вода");

  switch (choice) {
    case '1':
      alert("Вы выбрали чай");
      break;
    case '2':
      alert("Вы выбрали кофе");
      break;
    case '3':
      alert("Вы выбрали сок");
      break;
    case '4':
      alert("Вы выбрали воду");
      break;
    default:
      alert("Такого напитка у нас нет");
  }
}

showMenu();

function calcFinalPrice () {
  let price = Number (prompt("Введите сумму покупки"))
  let FinalPrice = price > 800 ? price * 0.95 : price > 500 ? price * 0.97 : price;
  alert("Окончательная сумма покупки с учетом скидки :" + FinalPrice + "грн");
}

calcFinalPrice()


function isDivisible(a, b) {
    return a % b == 0;
  }
  result1 = isDivisible(15, 3)
  result2 = isDivisible(11, 5)
  console.log(result1)
  console.log(result2)

