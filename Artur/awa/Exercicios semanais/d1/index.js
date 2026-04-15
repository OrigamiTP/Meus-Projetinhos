let usuarios = []

function cadastro() {
    let email = document.getElementById("email_C").value.trim()
    let senha = document.getElementById("password_C").value.trim()
    let user = {email: email, senha: senha}

    usuarios.push(user)
}

function login() {
    let email = document.getElementById("email_L").value.trim()
    let senha = document.getElementById("password_L").value.trim()
    let user_try = {email: email, senha: senha}
    
    //const user = usuarios.filter((user) => user.email === email && user.senha === senha)[0]

    for(let i = 0; i < usuarios.length; i++) {
        if (user_try.email && user_try.senha === user[i].email && user.senha) {
            alert("Credenciais corretas")
            return
        }
    }
    alert("Credenciais incorretas")
}