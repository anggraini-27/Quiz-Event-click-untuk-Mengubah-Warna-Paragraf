// Ambil elemen tombol dan paragraf
const button = document.getElementById('changeColorButton');
const paragraph = document.getElementById('myParagraph');

// Tambahkan event listener untuk tombol
button.addEventListener('click', function() {
    // Ubah warna teks paragraf menjadi biru
    paragraph.style.color = 'blue';
});
