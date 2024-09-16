
function calcularDuracao() {
    var dias = parseInt(document.getElementById('dias').value);
    var horas = parseInt(document.getElementById('horas').value);

    var minutosTotais = (dias * 24 * 60) + (horas * 60);

    document.getElementById('resultado').textContent = 'Duração total em minutos: ' + minutosTotais;
}
