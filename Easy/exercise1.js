// Two Number Sum
// Escreva uma função que recebe um array não vazio de inteiros distintos e um
// inteiro representando uma soma alvo. Se quaisquer dois números no array de
// entrada somarem a soma alvo, a função deve retorná-los em um array, em
// qualquer ordem. Se nenhum par de números somar a soma alvo, a função deve
// retornar um array vazio.
// Observe que a soma alvo deve ser obtida somando dois inteiros diferentes no
// array; você não pode somar um único inteiro a si mesmo para obter a soma
// alvo.

// Você pode assumir que haverá no máximo um par de números que somam a
// soma alvo.

// Exemplo de entrada
// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10

// Exemplo de saída
// [-1, 11] // os números podem estar em ordem inversa

const array = [3, 3, -4, 8, 11, 1, -1, 6];
targetSum = 10;
// Não conta os números anteriores
// Não soma com o próprio número

// 3 + 5 = 8
// 3 + - 4 = -1
// 3 + 8 = 11
// 3 + 11 = 14
// ...
// 5 + -4 = 1
// 5 + 8 = 13
// 5 + 11 = 16
// ...
//
let find = false;
for (let i = 0; i < array.length; i++) {
  //console.log("numero da vez", array[i]);
  for (let j = i; j < array.length; j++) {
    //Garantindo que não haverá números repetidos na soma
    if (array[i] === array[j]) {
      continue;
    }
    const sum = array[i] + array[j];
    if (sum === targetSum) {
      console.log([array[i], array[j]]);
      find = true;
    }
    if (i === array.length - 1) console.log([]);
  }
  if (find) break;
}
