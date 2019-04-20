var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    var falhaJson = document.querySelector("#falha-json");
    xhr.addEventListener("load", function(){
        if (xhr.status == 200){
            falhaJson.classList.add("invisivel");

            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente){
                adicionarPacienteNaTabela(paciente);
            });
        }
        else {
            falhaJson.classList.remove("invisivel");

            console.log("Erro!");
        }
    });

    xhr.send();
});