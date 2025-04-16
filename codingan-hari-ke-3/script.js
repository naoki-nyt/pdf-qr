// script.js
document.getElementById('urlForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const pdfUrl = document.getElementById('pdfUrl').value;

    if (pdfUrl && pdfUrl.startsWith('http')) {
        generateQRCode(pdfUrl);
    } else {
        alert('Masukkan URL PDF yang valid!');
    }
});

function generateQRCode(url) {
    document.getElementById('qrCodeContainer').style.display = 'block';

    QRCode.toCanvas(document.getElementById('qrCode'), url, function (error) {
        if (error) {
            console.error(error);
            alert("Gagal membuat QR Code.");
        }
    });
}
