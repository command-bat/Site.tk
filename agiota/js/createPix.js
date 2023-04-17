function generatePixCode(pix, city, name) {
       
var chavePix = pix;
        var valorTransacao = pixForm.valor.value;
        var country = "BR";
        var nomeTitular = name;
        var cidadeTitular = city;
        var mai = "0014br.gov.bcb.pix" + "01" + chavePix.length.toString().padStart(2, "0") + chavePix;
        var pixData = "000201" +
              "010211" +
              "26" + mai.length.toString().padStart(2, "0") + mai +
              "52040000" +
              "5303986" +
              "54" + valorTransacao.length.toString().padStart(2, "0") + valorTransacao +
              "58" + country.length.toString().padStart(2, "0") + country +
              "59" + nomeTitular.length.toString().padStart(2, "0") + nomeTitular +
              "60" + cidadeTitular.length.toString().padStart(2, "0") + cidadeTitular +
              "6207" +
                       "0503" + "***" +
              "6304";
        var crc16 = crc16ccitt(pixData);
        pixData += crc16;
	    
	        var conteudo = pixData;
  		var GoogleCharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=';
  		var imagemQRCode = GoogleCharts + conteudo;
  		$('#imageQRCode').attr('src', imagemQRCode);
    		var imgQRcode = document.getElementById('imageQRCode');
                imgQRcode.style.display = 'block';

                let inputTest = document.createElement("input");
                inputTest.value = pixData;
                //Anexa o elemento ao body
                document.body.appendChild(inputTest);
                //seleciona todo o texto do elemento
                inputTest.select();
                //executa o comando copy
                //aqui é feito o ato de copiar para a area de trabalho com base na seleção
                document.execCommand('copy');
                //remove o elemento
                document.body.removeChild(inputTest);
                type="copia/javascript";
                alert("Copiado para a area de transferencia")
}

      function crc16ccitt(data) {
        var crc = 0xFFFF;
        for (var i = 0; i < data.length; i++) {
          crc ^= data.charCodeAt(i) << 8;
          for (var j = 0; j < 8; j++) {
            if ((crc & 0x8000) != 0) {
              crc = (crc << 1) ^ 0x1021;
            } else {
              crc <<= 1;
            }
          }
        }
        return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, "0");
      }
