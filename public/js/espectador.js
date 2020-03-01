// function changeletter(player, letter, obj) {
//     player.letra = letter;
//     document.getElementById(obj).innerHTML = player.letra;
// }
let idnumber = document.getElementById('preguntaid').innerHTML - 1;
function show(id) {
    changeletter(Player4, lista[id].pos.p1.c1, "itm_0_1");
    changeletter(Player4, lista[id].pos.p1.c2, "itm_0_2");
    document.getElementById('preg_0').innerHTML = lista[id].pregunta;

    for (let index = 0; index < lista[id].ok.length; index++) {
        var input = document.createElement("input");
        input.type = lista[id].oktype;
        input.className = "resinput"; // set the CSS class
        input.value = ""
        input.id = `res${index}`
        document.getElementById('contentrespuesta').appendChild(input); // put it into the DOM




    }
    document.getElementById('enviarinfo').addEventListener('click', () => {
        let resval1 = document.getElementById('res0').value
        let resval2 = document.getElementById('res1').value
        let resval3 = document.getElementById('res2').value
        let resval4 = document.getElementById('res3').value
        let total = resval1 + resval2 + resval3 + resval4

        if (total == lista[id].ok) {

            track[0].aciertos++



            window.location = 'menu'




        }

    })
}
show(track[0].actual);

function pregunta() {
    track[0].actual = 0;
}

function leer() {
    track[0].actual = 0;
}


