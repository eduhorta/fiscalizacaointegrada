function preencher() {
    const razao = document.getElementById('razao').value
    const cnpj = document.getElementById('cnpj').value
    const endereco = document.getElementById('endereco').value
    const numero = document.getElementById('numero').value
    const bairro = document.getElementById('bairro').value
    const cidade = document.getElementById('cidade').value
    const infracao = document.getElementById('infracao').value
    const notificacao = document.getElementById('notificacao').value
    const vistoriador1 = document.getElementById('vistoriador1').value
    const vistoriador2 = document.getElementById('vistoriador2').value
    const matricula1 = document.getElementById('matricula1').value
    const matricula2 = document.getElementById('matricula2').value
    const data = document.getElementById('data').value
    const cep = document.getElementById('cep').value
    const comando = document.getElementById('comando').value
    const gbm = document.getElementById('gbm').value
    const chefe = document.getElementById('chefe').value
    const nota = document.getElementById('nota').value
    document.getElementById('razaoD').innerHTML = razao;
    //razaoD1 - no processo de instauração
    document.getElementById('razaoD1').innerHTML = razao;
    //razaoD2 - no inicio do termo de notificação
    document.getElementById('razaoD2').innerHTML = razao;
    //razaoD3 - nota p/ BIO
    document.getElementById('razaoD3').innerHTML = razao;
    document.getElementById('cnpjD').innerHTML = cnpj;
    //cnpjD2 - no inicio do termo de notificação
    document.getElementById('cnpjD2').innerHTML = cnpj;
    document.getElementById('enderecoD').innerHTML = endereco;
    //enderecoD1 - no processo de instauração
    document.getElementById('enderecoD1').innerHTML = endereco;
    //enderecoD2 - no termo de notificação
    document.getElementById('enderecoD2').innerHTML = endereco;
    //enderecoD3 - nota p/ BIO
    document.getElementById('enderecoD3').innerHTML = endereco;
    document.getElementById('numeroD').innerHTML = numero;
    //numeroD1 - no processo de instauração
    document.getElementById('numeroD1').innerHTML = numero;
    //numeroD2 - nota p/ BIO
    document.getElementById('numeroD2').innerHTML = numero;
    document.getElementById('bairroD').innerHTML = bairro;
    //bairroD1 - no processo de instauração    
    document.getElementById('bairroD1').innerHTML = bairro; 
    //bairroD2 - nota p/ BIO   
    document.getElementById('bairroD2').innerHTML = bairro;    
    document.getElementById('cidadeD').innerHTML = cidade;
    //CidadeD1 ao final do termo de infração D1
    document.getElementById('cidadeD1').innerHTML = cidade;
    //CidadeD2 e D3 no termo de instauração
    document.getElementById('cidadeD2').innerHTML = cidade;
    document.getElementById('cidadeD3').innerHTML = cidade;
    //cidadeD4 - ao final do termo de notificação
    document.getElementById('cidadeD4').innerHTML = cidade;
    //cidadeD5 - nota p/ BIO 
    document.getElementById('cidadeD5').innerHTML = cidade;
    //cepD - processo de instauração
    document.getElementById('cepD').innerHTML = cep;
    //cepD1 - nota p/ BIO
    document.getElementById('cepD1').innerHTML = cep;
    document.getElementById('infracaoD').innerHTML = infracao;
    //infracaoD1 - no initicio do termo de instauração
    document.getElementById('infracaoD1').innerHTML = infracao;
    //infracaoD2 - nota P/ BIO
    document.getElementById('infracaoD2').innerHTML = infracao;
    document.getElementById('notificacaoD').innerHTML = notificacao;
    //notificacaoD1 - no inicio do termo de notificação
    document.getElementById('notificacaoD1').innerHTML = notificacao;
    document.getElementById('vistoriador1D').innerHTML = vistoriador1;
    //Vistoriador1D1 - responsável pelo processo de instauração
    document.getElementById('vistoriador1D1').innerHTML = vistoriador1;
    //vistoriador1D2 no termo de notificação
    document.getElementById('vistoriador1D2').innerHTML = vistoriador1;
    //vistoriador1D3 na nota para BIO
    document.getElementById('vistoriador1D3').innerHTML = vistoriador1;
    document.getElementById('vistoriador2D').innerHTML = vistoriador2;
    //vistoriador2D1 no termo de notificação
    document.getElementById('vistoriador2D1').innerHTML = vistoriador2;
    document.getElementById('matricula1D').innerHTML = matricula1;
    //Matricula1D1 - responsável pelo processo de instauração
    document.getElementById('matricula1D1').innerHTML = matricula1;
    //Matrícula1D2 - vistoriador no termo de notificação
    document.getElementById('matricula1D2').innerHTML = matricula1;
    //Matricula1D3 - nota p/ BIO
    document.getElementById('matricula1D3').innerHTML = matricula1;
    document.getElementById('matricula2D').innerHTML = matricula2;
    //matricula2D1 - no termo de noficação
    document.getElementById('matricula2D1').innerHTML = matricula2;
    document.getElementById('dataD').innerHTML = data;
    //dataD1 - ao final do termo de instauração
    document.getElementById('dataD1').innerHTML = data;
    //dataD2 - no termo de notificação
    document.getElementById('dataD2').innerHTML = data;
    //dataD3 - nota p/BIO
    document.getElementById('dataD3').innerHTML = data;
    //comandoD - auto de infração
    document.getElementById('comandoD').innerHTML = comando;
    //comandoD1 - termo de instauração
    document.getElementById('comandoD1').innerHTML = comando;
    //chefeD - nota p/ BIO
    document.getElementById('chefeD').innerHTML = chefe;
    //gbmD - auto de infração
    document.getElementById('gbmD').innerHTML = gbm;
    //gbmD1, D2 e D3 - termo de instauração
    document.getElementById('gbmD1').innerHTML = gbm;    
    document.getElementById('gbmD2').innerHTML = gbm;
    document.getElementById('gbmD3').innerHTML = gbm;
    //gbmD4 - termo de notificação
    document.getElementById('gbmD4').innerHTML = gbm;
    //gbmD5 e D6 - nota p/ BIO
    document.getElementById('gbmD5').innerHTML = gbm;
    document.getElementById('gbmD6').innerHTML = gbm;
}

function Export2Doc(element, filename = '') {
    //  _html_ will be replace with custom html
    var meta= "Mime-Version: 1.0\nContent-Base: " + location.href + "\nContent-Type: Multipart/related; boundary=\"NEXT.ITEM-BOUNDARY\";type=\"text/html\"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset=\"utf-8\"\nContent-Location: " + location.href + "\n\n<!DOCTYPE html>\n<html>\n_html_</html>";
    //  _styles_ will be replaced with custome css
    var head= "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n<style>\n_styles_\n</style>\n</head>\n";

    var html = document.getElementById(element).innerHTML ;
    
    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });
    
    var  css = (
           '<style>' +
           'img {width:300px;}table {border-collapse: collapse; border-spacing: 0;}td{padding: 6px;}' +
           '</style>'
          );
//  Image Area %%%%
    var options = { maxWidth: 624};
    var images = Array();
    var img = $("#"+element).find("img");
    for (var i = 0; i < img.length; i++) {
        // Calculate dimensions of output image
        var w = Math.min(img[i].width, options.maxWidth);
        var h = img[i].height * (w / img[i].width);
        // Create canvas for converting image to data URL
        var canvas = document.createElement("CANVAS");
        canvas.width = w;
        canvas.height = h;
        // Draw image to canvas
        var context = canvas.getContext('2d');
        context.drawImage(img[i], 0, 0, w, h);
        // Get data URL encoding of image
        var uri = canvas.toDataURL("image/png");
        $(img[i]).attr("src", img[i].src);
        img[i].width = w;
        img[i].height = h;
        // Save encoded image to array
        images[i] = {
            type: uri.substring(uri.indexOf(":") + 1, uri.indexOf(";")),
            encoding: uri.substring(uri.indexOf(";") + 1, uri.indexOf(",")),
            location: $(img[i]).attr("src"),
            data: uri.substring(uri.indexOf(",") + 1)
        };
    }

    // Prepare bottom of mhtml file with image data
    var imgMetaData = "\n";
    for (var i = 0; i < images.length; i++) {
        imgMetaData += "--NEXT.ITEM-BOUNDARY\n";
        imgMetaData += "Content-Location: " + images[i].location + "\n";
        imgMetaData += "Content-Type: " + images[i].type + "\n";
        imgMetaData += "Content-Transfer-Encoding: " + images[i].encoding + "\n\n";
        imgMetaData += images[i].data + "\n\n";
        
    }
    imgMetaData += "--NEXT.ITEM-BOUNDARY--";
// end Image Area %%

     var output = meta.replace("_html_", head.replace("_styles_", css) +  html) + imgMetaData;

    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(output);


    filename = filename ? filename + '.doc' : 'document.doc';


    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {

        downloadLink.href = url;
        downloadLink.download = filename;
        downloadLink.click();
    }

    document.body.removeChild(downloadLink);
}