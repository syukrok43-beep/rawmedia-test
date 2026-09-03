// =========================================
// 1. HAMBURGER MENU
// =========================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

if (hamburger && mobileMenu && closeBtn) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
    });

    document.querySelectorAll('.mobile-nav-links li a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    mobileMenu.classList.remove('show');
                }
            }
        });
    });
}

// =========================================
// 2. SMOOTH SCROLL
// =========================================
document.querySelectorAll('.nav-links li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// =========================================
// 3. LIGHTBOX (GALERI BISA DIKLIK)
// =========================================
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    if (lightbox && lightboxImage) {
        lightboxImage.src = imageSrc;
        lightbox.classList.add('show');
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');

    if (lightbox) {
        lightbox.classList.remove('show');
    }
}

// =========================================
// 4. FORM PEMESANAN (WHATSAPP)
// =========================================
const orderForm = document.getElementById('orderForm');
const waNumber = '6281229122464';

if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nama = document.getElementById('nama').value;
        const telepon = document.getElementById('telepon').value;
        const alamat = document.getElementById('alamat').value;
        const ukuran = document.getElementById('ukuran').value;
        const jumlah_halaman = document.getElementById('jumlah_halaman').value;
        const jenis_cetak = document.getElementById('jenis_cetak').value;
        const jenis_kertas = document.getElementById('jenis_kertas').value;
        const jumlah_cetak = document.getElementById('jumlah_cetak').value;
        const jenis_cover = document.getElementById('jenis_cover').value;
        const jenis_finishing = document.getElementById('jenis_finishing').value;
        const laminasi_cover = document.getElementById('laminasi_cover').value;
        const finishing_tambahan = document.getElementById('finishing_tambahan').value;
        const shrink_wrapping = document.getElementById('shrink_wrapping').value;
        const catatan = document.getElementById('catatan').value;

        const message = `Halo RAW Media Indonesia,\n\nSaya ingin memesan:\n\n` +
            `Nama: ${nama}\n` +
            `No. WhatsApp: ${telepon}\n` +
            `Alamat Pengiriman: ${alamat}\n` +
            `Ukuran Buku: ${ukuran}\n` +
            `Jumlah Halaman: ${jumlah_halaman}\n` +
            `Jenis Cetak: ${jenis_cetak}\n` +
            `Jenis Kertas Isi: ${jenis_kertas}\n` +
            `Jumlah Cetak: ${jumlah_cetak}\n` +
            `Jenis Cover: ${jenis_cover}\n` +
            `Jenis Finishing: ${jenis_finishing}\n` +
            (laminasi_cover ? `Laminasi Cover: ${laminasi_cover}\n` : '') +
            (finishing_tambahan ? `Finishing Tambahan: ${finishing_tambahan}\n` : '') +
            (shrink_wrapping ? `Shrink / Wrapping: ${shrink_wrapping}\n` : '') +
            (catatan ? `Catatan: ${catatan}\n` : '') +
            `\nMohon info ketersediaan dan estimasi harganya. Terima kasih!`;

        const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
        window.open(waLink, '_blank');
    });
}