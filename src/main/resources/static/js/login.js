$("#btnCadastrar").click(function(event) {
    event.preventDefault();

    $.get("/cadastro", function(data) {
        $(".container").html(data);
        $("#btnEnviar").click(validaEnvio);
        history.pushState({}, '', "/cadastro");
        $("#enviar").click(validaEnvio);
    });
});