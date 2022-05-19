function cep() {
    let local = document.getElementById("Cep").value;
    let regex = /[0-9]{8}/g;

    if (local.match(regex)) {
        document.getElementById("Cep").classList.remove("balao-vermelho");
        document.getElementById("balaored").style.display = "none";
    } else {
        document.getElementById("balaored").style.display = "block";
        document.getElementById("Cep").classList.add("balao-vermelho");
        return false;
    }
    fetch(`http://viacep.com.br/ws/${local}/json/`)
        .then((response) => {
            return response.json();
            cep;
        })
        .then((dados) => {
            console.log(dados);
            document.getElementById("rua").value = dados.logradouro;
            document.getElementById("Bairro").value = dados.bairro;
            document.getElementById("Cidade").value = dados.localidade;
            document.getElementById("UF").value = dados.uf;
            document.getElementById("IBGE").value = dados.ibge;
            document.getElementById("DDD").value = dados.ddd;
        });
}