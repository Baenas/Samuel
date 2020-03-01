function changeletter(player, letter, obj) {
  player.letra = letter;
  document.getElementById(obj).innerHTML = player.letra;

}

function show(id) {
  changeletter(Player3, lista[id].pos.p3, 'itm_3_1');
  document.getElementById('preg_3').innerHTML = lista[id].pregunta;

}

show(track[0].actual)