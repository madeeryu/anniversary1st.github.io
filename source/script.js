        // Previous JavaScript code remains the same
        const landingPage = document.getElementById('landing-page');
        const typingPage = document.getElementById('typing-page');
        const startBtn = document.getElementById('start-btn');
        const typingText = document.getElementById('typing-text');
        const bgMusic = document.getElementById('bg-music');
        const envelope = document.getElementById('envelope');
        const videoPopup = document.getElementById('video-popup');
        const closeVideo = document.getElementById('close-video');
        const header = document.querySelector('.anniversary-header');
        const message = `Siapa sangka, sebuah bot tele bisa membawa cerita seindah ini? 

Agustus 2023, kita mulai dari layar kecil—chat sederhana yang lama-lama penuh tawa dan makna. Lima bulan berlalu, dan perasaan ini makin tidak bisa dibohongi.

"Kamu seperti jawaban yang diberikan semesta," rasa ku pada waktu itu. Di awal Januari 2024, Kita memutuskan untuk melangkah lebih dekat, meski jarak masih menjadi batas untuk kita. Hari itu, 5 Januari, resmi menjadi milik kita—awal kisah yang lebih dari sekadar angka.

Lalu waktu terus berjalan. Meski belum bertemu, aku belajar mencintaimu lewat suaramu, tawamu, bahkan keheningan di antaranya. Dan akhirnya, pada bulan Agustus 2024, jarak dan waktu telah sirna, ketika dunia kita yang berbeda kini dipertemukan. Semua rasa yang dulu terjaga di layar kini nyata di depan mata.

Aku hanya ingin bilang, thank you for being here, for choosing me, for letting me love you. Kehadiranmu adalah anugerah, lebih dari yang pernah aku bayangkan.

Kamu lebih dari sekedar rumah bagi ku, tempat ternyaman ku melepaskan segala kepenatan dan kamu akan menjadi hal yang selalu kurindukan keberadaanya, selalu!. ❤️

Klik gambar pesan dibawah ya!, pastiin resolusinya pake yang tertinggi ya! dengerin pake headset juga jangan lupa!`;

function startTypingAnimation() {
    let i = 0;
    const typingEffect = setInterval(() => {
            bgMusic.play(); 
            if (i < message.length) {
                typingText.textContent += message[i];
                i++;

                // Automatically scroll down when text overflows the box
                const stickyNote = document.getElementById('sticky-note');
                stickyNote.scrollTop = stickyNote.scrollHeight;
            } else {
                clearInterval(typingEffect);
                envelope.style.display = 'block';
                envelope.style.margin = '0 auto';
                envelope.style.textAlign = 'center';
            }
        }, 85);
        const stickyNote = document.getElementById('sticky-note');
        stickyNote.classList.add('animate__animated', 'animate__fadeIn');
    
    }

    startBtn.addEventListener('click', () => {
        startBtn.classList.add('zoom-out');

        // Tunggu hingga animasi selesai (1 detik), lalu sembunyikan tombol dan lanjutkan
        setTimeout(() => {
            landingPage.style.display = 'none'; // Sembunyikan landing page
            typingPage.style.display = 'flex'; // Tampilkan halaman berikutnya

            // Tampilkan header dengan animasi fadeInUp
            // header.style.display = 'block'; // Ubah display agar terlihat
            // header.classList.add('animate__animated', 'animate__fadeInUp');

            // Tampilkan sticky note setelah header selesai
            setTimeout(() => {
                startTypingAnimation(); // Mulai animasi pengetikan
            }, 2000); // Tunda sticky note 2 detik
        }, 1000); // Durasi animasi zoom-out
    });;



    envelope.addEventListener('click', () => {
        videoPopup.style.display = 'flex';
        // header.style.display = 'none';
        bgMusic.pause();
    });
    
    closeVideo.addEventListener('click', () => {
        videoPopup.style.display = 'none';
        // header.style.display = 'block';
        bgMusic.play();
    });

    let currentAlbum = null;
    let currentPhotoIndex = 0;
    const albums = {
        1: Array.from({length: 5}, (_, i) => `asset/kenangan/Alkid/photo (${i + 1}).jpg`),
        2: Array.from({length: 4}, (_, i) => `asset/kenangan/Chundai/photo (${i + 1}).jpg`),
        3: Array.from({length: 12}, (_, i) => `asset/kenangan/Hamzah/photo (${i + 1}).jpg`),
        4: Array.from({length: 7}, (_, i) => `asset/kenangan/Jalan_pagi/photo (${i + 1}).jpg`),
        5: Array.from({length: 1}, (_, i) => `asset/kenangan/Museum_Vandemberg/photo (${i + 1}).jpg`),
        6: Array.from({length: 8}, (_, i) => `asset/kenangan/Natal/photo (${i + 1}).jpg`),
        7: Array.from({length: 25}, (_, i) => `../asset/kenangan/P_Ngandong/photo (${i + 1}).jpg`),
        8: Array.from({length: 8}, (_, i) => `asset/kenangan/PhotoBox/photo (${i + 1}).JPG`),
        9: Array.from({length: 3}, (_, i) => `asset/kenangan/Pizza/photo (${i + 1}).jpg`),
        10: Array.from({length: 5}, (_, i) => `asset/kenangan/Solaria/photo (${i + 1}).jpg`),
        11: Array.from({length: 1}, (_, i) => `asset/kenangan/WaroengSteak/photo (${i + 1}).jpg`),
        12: Array.from({length: 4}, (_, i) => `asset/kenangan/Wates/photo (${i + 1}).jpg`)
    };

    function startTypingAnimation() {
        let i = 0;
        const typingEffect = setInterval(() => {
            bgMusic.play(); 
            if (i < message.length) {
                typingText.textContent += message[i];
                i++;
                const stickyNote = document.getElementById('sticky-note');
                stickyNote.scrollTop = stickyNote.scrollHeight;
            } else {
                clearInterval(typingEffect);
                envelope.style.display = 'block';
                envelope.style.margin = '0 auto';
                envelope.style.textAlign = 'center';
                // Show photo album after typing
                document.getElementById('photo-album').style.display = 'block';
            }
        }, 85);
    }

    function openAlbum(albumId) {
        currentAlbum = albumId;
        currentPhotoIndex = 0;
        updatePhoto();
        document.getElementById('album-modal').style.display = 'flex';
        // header.style.display = 'none';
    }

    function closeAlbum() {
        document.getElementById('album-modal').style.display = 'none';
        // header.style.display = 'block';
    }

    function updatePhoto() {
        const photo = document.getElementById('current-photo');
        photo.src = albums[currentAlbum][currentPhotoIndex];
        document.getElementById('photo-counter').textContent = 
            `Photo ${currentPhotoIndex + 1} of ${albums[currentAlbum].length}`;
    }

    function nextPhoto() {
        if (currentPhotoIndex < albums[currentAlbum].length - 1) {
            currentPhotoIndex++;
            updatePhoto();
        }
    }

    function prevPhoto() {
        if (currentPhotoIndex > 0) {
            currentPhotoIndex--;
            updatePhoto();
        }
    }

    // Close album modal when clicking outside
    document.getElementById('album-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeAlbum();
        }
    });