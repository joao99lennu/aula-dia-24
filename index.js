$.support.cors = true;

$(document).ready(
    function() {
        $('#conteudo').load("pages/lista.html")
    }
);

$('#btpg1').click(
    function() {
        $('#conteudo').load("pages/lista.html")
    }
);

$('#btpg2').click(
    function() {
        $('#conteudo').load("pages/novocadastro.html")
    }
);