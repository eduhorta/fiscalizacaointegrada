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
    document.getElementById('razaoD').innerHTML = razao;
    //razaoD1 - no processo de instauração
    document.getElementById('razaoD1').innerHTML = razao;
    document.getElementById('cnpjD').innerHTML = cnpj;
    document.getElementById('enderecoD').innerHTML = endereco;
    //enderecoD1 - no processo de instauração
    document.getElementById('enderecoD1').innerHTML = endereco;
    document.getElementById('numeroD').innerHTML = numero;
    //numeroD1 - no processo de instauração
    document.getElementById('numeroD1').innerHTML = numero;
    document.getElementById('bairroD').innerHTML = bairro;
    //bairroD1 - no processo de instauração    
    document.getElementById('bairroD1').innerHTML = bairro;    
    document.getElementById('cidadeD').innerHTML = cidade;
    //CidadeD1 ao final do termo de infração D1
    document.getElementById('cidadeD1').innerHTML = cidade;
    //CidadeD2 e D3 ao final do termo de instauração
    document.getElementById('cidadeD2').innerHTML = cidade;
    document.getElementById('cidadeD3').innerHTML = cidade;
    //cepD - processo de instauração
    document.getElementById('cepD').innerHTML = cep;
    document.getElementById('infracaoD').innerHTML = infracao;
    //infracaoD1 - no initicio do termo de instauração
    document.getElementById('infracaoD1').innerHTML = infracao;
    document.getElementById('notificacaoD').innerHTML = notificacao;
    document.getElementById('vistoriador1D').innerHTML = vistoriador1;
    //Vistoriador1D1 - responsável pelo processo de instauração
    document.getElementById('vistoriador1D1').innerHTML = vistoriador1;
    document.getElementById('vistoriador2D').innerHTML = vistoriador2;
    document.getElementById('matricula1D').innerHTML = matricula1;
    //Matricula1D1 - responsável pelo processo de instauração
    document.getElementById('matricula1D1').innerHTML = matricula1;
    document.getElementById('matricula2D').innerHTML = matricula2;
    document.getElementById('dataD').innerHTML = data;
    //dataD1 - ao final do termo de instauração
    document.getElementById('dataD1').innerHTML = data;
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