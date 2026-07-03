// Menampilkan pesan saat halaman dibuka
window.addEventListener("load", () => {
    console.log("Website siap digunakan.");
});

// Saat video selesai diputar
const video = document.querySelector("video");

if (video) {
    video.addEventListener("ended", () => {
        const lanjut = confirm("Video selesai. Lanjut ke video berikutnya?");

        if (lanjut) {
            window.open("https://omg10.com/4/11155706", "_blank");
        }
    });
}

// Efek klik tombol
const tombol = document.querySelector(".btn");

if (tombol) {
    tombol.addEventListener("click", () => {
        console.log("Tombol diklik.");
    });
}
