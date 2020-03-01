// class Players {
//   constructor(nombre, turno, rol, letra) {
//     this.nombre = nombre;
//     this.turno = turno;
//     this.rol = rol;
//     this.letra = letra;
//   }
// }



// let frase1_nok1 = ["Z", "E", "L", "D", "A"];
// let frase1_ok = ["Z", "E", "L", "D", "A"];
// let frase1_nok2 = ["Z", "E", "L", "D", "A"];
// let frase1_nok3 = ["Z", "E", "L", "D", "A"];
// Player1 = new Players("P1", 1, undefined);
// Player2 = new Players("P2", 0, undefined);
// Player3 = new Players("P3", 0, undefined);
// Player4 = new Players("Espectador", 0, undefined);



document.getElementById('enviarinfo').addEventListener('click', () => {
  // let total = resval1 + resval2 + resval3 + resval4
  let cualestamos = 0
  let total = document.getElementById(`res${cualestamos}`).value;
  let totalget = document.getElementById('respuestanow').innerHTML;
  if (total == totalget) {

    window.location = 'next'





  }

})