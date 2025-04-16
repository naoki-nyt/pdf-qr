document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fileInput = document.getElementById('pdfInput');
    const file = fileInput.files[0];

    if (file && file.type === 'application/pdf') {
        const reader = new FileReader();
        
        reader.onloadend = function() {
            // Simpan file PDF di layanan cloud (misalnya, Google Drive atau Dropbox)
            const fileUrl = uploadPDFToCloud(file, reader.result);

            // Generate QR code yang mengarah ke URL PDF
            generateQRCode(fileUrl);
        };

        reader.readAsDataURL(file);
    } else {
        alert('Harap unggah file PDF');
    }
});

function uploadPDFToCloud(file, fileData) {
    // Proses pengunggahan PDF ke cloud storage (misalnya Google Drive atau Dropbox API)
    // Misalnya, file yang diunggah menghasilkan URL di cloud
    // Gantilah dengan proses upload yang sesuai dengan API cloud yang dipilih
    return 'https://path-to-uploaded-pdf.com/' + file.name;
}

function generateQRCode(url) {
    document.getElementById('qrCodeContainer').style.display = 'block';
    QRCode.toCanvas(document.getElementById('qrCode'), url, function(error) {
        if (error) {
            console.error(error);
        }
    });
}
