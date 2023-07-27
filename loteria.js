const numerosApostados = [12,21,38,89,23,32,25];
const numerosSorteados = [12,39,8,76,54,65,49];

for (let index = 0; index < numerosApostados.length; index++) {
     for (let indexPremiado = 0; indexPremiado < numerosSorteados.length; indexPremiado++) {
      if (numerosApostados[index] === numerosSorteados[indexPremiado]) {
          console.log(numerosApostados[index]);
      }
     }
}
