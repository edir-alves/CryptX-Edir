document.getElementById("botao_cripto").addEventListener("click", criptografar);
document.getElementById("botao_descripto").addEventListener("click", descriptografar);
document.getElementById("botao_copia").addEventListener("click", copiar);

function validarTexto(texto) {
    
    var regex = /[A-ZÀ-Úà-ú]/;
    return regex.test(texto);
}

function criptografar() {
    var texto = document.getElementById("area_texto_entrada").value;
    
    if (validarTexto(texto)) {
        alert("Atenção: O texto não atende aos critérios definidos!");
        return;
    }
    var resultCripto = texto.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
    document.getElementById('area_texto_mensagem').value = resultCripto;
}

function descriptografar() {
    var texto = document.getElementById("area_texto_entrada").value;
    
    if (validarTexto(texto)) {
        alert("Atenção: O texto não atende aos critérios definidos!");
        return;
    }
    var resultDescripto = texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    document.getElementById('area_texto_mensagem').value = resultDescripto;
}

function copiar() {
    var textoCop = document.getElementById("area_texto_mensagem");
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado");
}
