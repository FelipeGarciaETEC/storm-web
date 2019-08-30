window.onload = function() {
    console.warn("OLAAAAAA MUNDO")

    let meuForm = $("#formProduto")

    console.log(meuForm)

    meuForm.on("submit", function(event){
        event.preventDefault()
        console.log("clicou")
        
    })

    function prepararBotao() {
        let botao = document.querySelector("#btnSalvar")
        let ladda = Ladda.create(botao[0])
        ladda.start()
    }

    function clicou(){
        prepararBotao()
    }
}
