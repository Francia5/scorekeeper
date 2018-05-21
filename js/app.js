var hola=alert("hola Francia!!")
var scores = {}; // Va a llevar el registro de los jugadores
console.log(scores);
//
function cratePlayer(object, name) {
  object[name.toLowerCase()] = 0;
  console.log(object);
}

function addPoints(name, points) {
  scores[name.toLowerCase()] += points;
  console.log(scores);
}

function printAllPoints() {
  var arrayPlayers = Object.keys(scores);
  var result = "";
  for(var k = 0; k < arrayPlayers.length; k++) {
    if(k === arrayPlayers.length - 1) { //Se verifica que estemos en el último index
      result += arrayPlayers[k] + ": " + scores[arrayPlayers[k]];//Si es el último índice no se deja la coma
    } else {
      result += arrayPlayers[k] + ": " + scores[arrayPlayers[k]] + ", ";//Si no es el último índice se deja la coma de separación
    }
  }
  return result;
}

cratePlayer(scores, "Ana");
addPoints("ana", 20);
addPoints("ana", 40);
cratePlayer(scores, "Silvana");
addPoints("Silvana", 50);
printAllPoints();
console.log(printAllPoints());
