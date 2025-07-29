const resultElement = document.getElementById("qr-result");

function onScanSuccess(decodedText) {
  resultElement.textContent = `QR найден: ${decodedText}`;
  html5QrCode.stop(); // остановить сканирование после первого успешного
}

const html5QrCode = new Html5Qrcode("reader");

Html5Qrcode.getCameras().then(cameras => {
  if (cameras && cameras.length) {
    html5QrCode.start(
      { facingMode: "environment" }, // задняя камера
      {
        fps: 10,
        qrbox: 250,
      },
      onScanSuccess
    );
  } else {
    resultElement.textContent = "Камера не найдена.";
  }
}).catch(err => {
  resultElement.textContent = `Ошибка: ${err}`;
});
