var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdstargeek'))
if (listaUsuarios == null) {
    listaUsuarios = []
}

function botaoentrar() {
    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value
    console.log("Chamado");

    if (validarUsuario(login, senha)) {
        alert('Bem vindo ao sistema')
        window.location.href = "01.html"
    } else {
        alert('VERIFIQUE SEU USUÁRIO E SENHA OU SE CADASTRE')
    }
}

function validarUsuario(login, senha) {
    console.log("Chamado");
    for (var i in listaUsuarios) {
        if (listaUsuarios[i].usuario == login && listaUsuarios[i].senha == senha) {
            return true
            
        }
    }
    return false
}
