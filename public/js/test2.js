function changeletter(player, letter, obj) {
  player.letra = letter;
  document.getElementById(obj).innerHTML = player.letra;

}

function show(id) {

  changeletter(Player2, lista[id].pos.p2, 'itm_2_1');
  document.getElementById('preg_2').innerHTML = lista[id].pregunta;

}

show(track[0].actual)


function pregunta() {

  track[0].actual = info.id

}