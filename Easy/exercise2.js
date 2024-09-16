// Validate Subsequence
// Dado dois arrays não vazios de inteiros, escreva uma função que determina se o
// segundo array é uma subsequência do primeiro. Uma subsequência de um
// array é um conjunto de números que não são necessariamente adjacentes no
// array, mas que estão na mesma ordem em que aparecem no array. Por
// exemplo, os números [1, 3, 4] formam uma subsequência do array [1, 2,
// 3, 4] , assim como os números [2, 4] . Note que um único número em um
// array e o próprio array são ambos subsequências válidas do array.
// Exemplo de entrada
// array = [5, 1, 22, 25, 6, -1, 8, 10]
// Exemplo de saída
// sequence = [1, 6, -1, 10]

// Percorrer o primeiro array
// Procurar no primeiro array o valor do segundo array
// Se encontrar destacar o valor
// Procurar o próximo elemento
// Verificar se o próximo elemento, caso encontrado, está na sequência

array = [3, 5, 7, 9, 11];
sequence = [5, 7, 11];
const validate_subsequence = (first_array, second_array) => {
  let lastPosition = -1;
  let find;
  for (let second = 0; second < second_array.length; second++) {
    find = false;
    for (let first = lastPosition + 1; first < first_array.length; first++) {
      if (second_array[second] == first_array[first]) {
        find = true;
        lastPosition = first;
        break;
      }
    }
    if (!find) {
      break;
    }
  }
  return find ? "É uma subsequência" : "Não é uma subsequência";
};

console.log(validate_subsequence(array, sequence));
