// Seleciona o elemento "canvas" pelo ID
const canvas = document.getElementById("qrcode");

// Cria o QR code com a biblioteca "qrcode.js"
const qrcode = new QRCode(canvas, {
  text: "https://www.exemplo.com", // Insira o link ou texto que deseja gerar o QR code
  width: 256,
  height: 256,
  colorDark : "#000000",
  colorLight : "#ffffff",
  correctLevel : QRCode.CorrectLevel.H
});
