/* Calma, aprendi no Bootcamp, não foi Chat GPT kkkk*/

let email = document.getElementById('email_input')
let mensagem = document.getElementById('mensagem_input')

function enviarMensagem(){
    if ((email.value != '') && (mensagem.value != '')){
        document.getElementById('email_input').value = ""
        document.getElementById('mensagem_input').value = ""
        document.getElementById('mensagem_sucesso').innerHTML = "Mensagem enviada com sucesso"
    }
    else {
        document.getElementById('mensagem_sucesso').innerHTML = "Preencha todos os campos primeiro"
    }
}