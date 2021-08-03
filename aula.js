function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosRaquel = [Rafael, Maria Claudia, Jonathan];
    

    if (ConvidadosRaquel.includes(NomeConvidado)) {
        document.getElementById('Entrada').innerText = 'Você pode entrar!'
    } else {
        document.getElementById('Entrada').innerText = 'Você não pode entrar!'
    }
}
