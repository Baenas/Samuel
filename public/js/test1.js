function changeletter(player, letter, obj) {
  player.letra = letter;
  document.getElementById(obj).innerHTML = player.letra;
}
let idnumber = document.getElementById('preguntaid').innerHTML - 1;
function show(id) {
  changeletter(Player1, lista[id].pos.p1.c1, "itm_1_1");
  changeletter(Player1, lista[id].pos.p1.c2, "itm_1_2");
  document.getElementById('preg_1').innerHTML = lista[id].pregunta;



}
show(track[0].actual);

function pregunta() {
  track[0].actual = 0;
}

function leer() {
  track[0].actual = 0;
}


