const images = document.querySelectorAll('#pictures img');
let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modalImage.src = images[currentIndex].src;
    modal.style.display = 'flex';

    document.addEventListener('keydown', handleKeydown);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';

    document.removeEventListener('keydown', handleKeydown);
}

function prevImage(event) {
    if (event) event.stopPropagation(); // Evita di chiudere il modal al click sulle frecce
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('modal-image').src = images[currentIndex].src;
}

function nextImage(event) {
    if (event) event.stopPropagation(); // Evita di chiudere il modal al click sulle frecce
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('modal-image').src = images[currentIndex].src;
}

function handleKeydown(event) {
    switch (event.key) {
        case 'ArrowLeft':
            prevImage();
            break;
        case 'ArrowRight':
            nextImage();
            break;
        case 'Escape': // Chiude il modal premendo Esc
            closeModal();
            break;
    }
}